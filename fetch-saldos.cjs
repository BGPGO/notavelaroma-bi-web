#!/usr/bin/env node
'use strict';
/**
 * fetch-saldos.cjs — puxa o saldo bancário REAL da NIBO e grava em data-extras.js
 * (window.BIT_EXTRAS.saldos). Roda no refresh diário (worker roda após fetch-data;
 * commit já inclui data-extras.js).
 *
 * A NIBO NÃO expõe saldo atual — reconstrói: saldo(conta) = openBalance + baixas
 * (receipts − payments) a partir da dateOfOpenBalance. receipts/payments realizados
 * têm account.id (100%).
 *
 * MULTI-ORG: se bi.config.js > fontes.saldos_nibo.orgs existir, soma várias orgs
 * NIBO (ex: BI que consolida 2 empresas) e guarda o breakdown por empresa. Senão,
 * usa 1 org do NIBO_TOKEN (default single-empresa).
 *
 * Não-fatal: sem token(s), sai limpo (exit 0). Preserva outras chaves de BIT_EXTRAS.
 */
const fs = require('node:fs');
const path = require('node:path');
const https = require('node:https');

(function loadEnv() {
  try {
    const raw = fs.readFileSync(path.join(__dirname, '.env'), 'utf8');
    for (const line of raw.split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m && process.env[m[1]] === undefined) {
        let v = m[2];
        if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
        process.env[m[1]] = v;
      }
    }
  } catch (e) {}
})();

let cfg = {};
try { cfg = require('./bi.config.js'); } catch (e) {}

// Resolve a lista de orgs NIBO a puxar
const orgsCfg = cfg.fontes && cfg.fontes.saldos_nibo && cfg.fontes.saldos_nibo.orgs;
let ORGS;
if (Array.isArray(orgsCfg) && orgsCfg.length) {
  ORGS = orgsCfg.map(o => ({ nome: o.nome, slug: o.slug || null, token: process.env[o.token_env] })).filter(o => o.token);
} else {
  const t = process.env.NIBO_TOKEN;
  ORGS = t ? [{ nome: (cfg.cliente && cfg.cliente.nome) || 'Empresa', slug: null, token: t }] : [];
}
if (!ORGS.length) { console.log('fetch-saldos: sem token(s) NIBO — pulando (nada alterado).'); process.exit(0); }

const BASE = 'https://api.nibo.com.br';
const PAGE = 500;
const agent = new https.Agent({ rejectUnauthorized: false }); // CA do Windows/worker

async function getJson(url, token) {
  for (let i = 0; i < 5; i++) {
    try {
      const res = await fetch(url, { headers: { apitoken: token }, agent });
      if (!res.ok) {
        if (res.status === 429 || res.status >= 500) { await new Promise(r => setTimeout(r, 1500 * (i + 1))); continue; }
        throw new Error('HTTP ' + res.status);
      }
      return await res.json();
    } catch (e) { if (i === 4) throw e; await new Promise(r => setTimeout(r, 1500 * (i + 1))); }
  }
}
async function getAll(ep, token, orderby) {
  const items = []; let skip = 0;
  while (true) {
    const j = await getJson(`${BASE}/${ep}?$skip=${skip}&$top=${PAGE}&$orderby=${orderby}`, token);
    const b = j.items || []; items.push(...b);
    if (b.length < PAGE) break; skip += PAGE;
  }
  return items;
}
const round = n => Math.round(n * 100) / 100;

// Carrega contas + baixas cruas de uma org (openBalance/openDate + lista de
// movimentos datados). Reaproveitado tanto pro saldo atual quanto pro saldo no
// fim de cada mes — evita refazer as chamadas de API por corte.
async function loadOrg(token) {
  const accounts = await getAll('empresas/v1/accounts', token, 'name');
  const receipts = await getAll('empresas/v1/receipts', token, 'date');
  const payments = await getAll('empresas/v1/payments', token, 'date');
  const raw = {};
  for (const a of accounts) {
    if (a.isArchived) continue;
    raw[a.id] = { name: a.name, open: Number(a.openBalance) || 0, openDate: (a.dateOfOpenBalance || '').slice(0, 10), movs: [] };
  }
  for (const r of receipts) { const id = r.account && r.account.id; const d = (r.date || '').slice(0, 10); if (raw[id] && d >= raw[id].openDate) raw[id].movs.push({ d, v: Math.abs(Number(r.value) || 0) }); }
  for (const p of payments) { const id = p.account && p.account.id; const d = (p.date || '').slice(0, 10); if (raw[id] && d >= raw[id].openDate) raw[id].movs.push({ d, v: -Math.abs(Number(p.value) || 0) }); }
  return raw;
}

// Saldo por conta numa data de corte (inclusive). Conta que ainda nao existia
// naquele corte (openDate > corte) fica de fora do mes.
function balancesAt(raw, cutoff) {
  const contas = {}; let total = 0;
  for (const id of Object.keys(raw)) {
    const a = raw[id];
    if (a.openDate && a.openDate > cutoff) continue;
    let s = a.open;
    for (const m of a.movs) if (m.d <= cutoff) s += m.v;
    s = round(s); contas[a.name] = s; total += s;
  }
  return { total: round(total), contas };
}

(async () => {
  const hoje = new Date().toISOString().slice(0, 10);
  const multi = ORGS.length > 1 || ORGS.some(o => o.slug);

  // Carrega o raw de cada org UMA vez (as chamadas de API são o caro; o corte por
  // mês é só aritmética em cima disso).
  const orgRaws = [];
  for (const o of ORGS) orgRaws.push({ o, raw: await loadOrg(o.token) });

  // Consolida saldos numa data de corte no mesmo shape do "last": contas flat
  // (namespaced por empresa quando multi-org) + por empresa.
  const consolidaEm = (cutoff) => {
    const empresas = {}; const contasFlat = {}; let total = 0;
    for (const { o, raw } of orgRaws) {
      const s = balancesAt(raw, cutoff);
      total += s.total;
      const key = o.slug || 'default';
      empresas[key] = { nome: o.nome, total: round(s.total), contas: s.contas };
      for (const [nome, v] of Object.entries(s.contas)) contasFlat[multi ? `${o.nome} · ${nome}` : nome] = v;
    }
    return { total: round(total), contas: contasFlat, empresas };
  };

  // Saldo atual (corte = hoje) — mantém o shape antigo intacto.
  const cur = consolidaEm(hoje);
  const total = cur.total;
  const last = { data: hoje, total, contas: cur.contas, empresas: cur.empresas };

  // Saldo no fim de cada mês do ano corrente, até o mês atual (mês em curso é
  // cortado em hoje). Alimenta o gráfico "Saldo por conta (fim de cada mês)".
  const anoRef = (cfg.meta && cfg.meta.ano_corrente) || new Date().getFullYear();
  const ML = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
  const nowD = new Date();
  const monthly = [];
  for (let m = 0; m < 12; m++) {
    const futuro = anoRef > nowD.getFullYear() || (anoRef === nowD.getFullYear() && m > nowD.getMonth());
    if (futuro) break;
    const corrente = anoRef === nowD.getFullYear() && m === nowD.getMonth();
    const fimMes = new Date(anoRef, m + 1, 0);
    const cutoff = corrente ? hoje : `${anoRef}-${String(m + 1).padStart(2, '0')}-${String(fimMes.getDate()).padStart(2, '0')}`;
    const c = consolidaEm(cutoff);
    monthly.push({ mes: `${anoRef}-${String(m + 1).padStart(2, '0')}`, label: ML[m], date: cutoff, parcial: corrente, total: c.total, contas: c.contas, empresas: c.empresas });
  }

  const saldos = { daily: [last], last, monthly, contas: Object.keys(cur.contas), empresasList: Object.keys(cur.empresas), fonte: 'nibo-api (openBalance + baixas)' };

  const OUT = path.join(__dirname, 'data-extras.js');
  let extras = {};
  if (fs.existsSync(OUT)) {
    try {
      const src = fs.readFileSync(OUT, 'utf8');
      const m = src.match(/window\.BIT_EXTRAS\s*=\s*(\{[\s\S]*?\});?\s*$/);
      if (m) extras = JSON.parse(m[1]);
    } catch (e) { console.log('fetch-saldos: data-extras.js não parseável — recriando só com saldos.'); }
  }
  extras.saldos = saldos;
  fs.writeFileSync(OUT, `/* BI EXTRAS — saldos via fetch-saldos.cjs (${hoje}) */\nwindow.BIT_EXTRAS = ${JSON.stringify(extras)};\n`);
  const resumo = Object.values(cur.empresas).map(e => `${e.nome}: R$ ${e.total.toFixed(2)}`).join(' | ');
  console.log(`fetch-saldos OK: ${ORGS.length} org(s) · total R$ ${total.toFixed(2)} · ${hoje}\n  ${resumo}`);
})().catch(e => { console.error('fetch-saldos ERRO:', e.message); process.exit(1); });
