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

async function saldoOrg(token) {
  const accounts = await getAll('empresas/v1/accounts', token, 'name');
  const receipts = await getAll('empresas/v1/receipts', token, 'date');
  const payments = await getAll('empresas/v1/payments', token, 'date');
  const acc = {};
  for (const a of accounts) {
    if (a.isArchived) continue;
    acc[a.id] = { name: a.name, saldo: Number(a.openBalance) || 0, openDate: (a.dateOfOpenBalance || '').slice(0, 10) };
  }
  for (const r of receipts) { const id = r.account && r.account.id; if (acc[id] && (r.date || '').slice(0, 10) >= acc[id].openDate) acc[id].saldo += Math.abs(Number(r.value) || 0); }
  for (const p of payments) { const id = p.account && p.account.id; if (acc[id] && (p.date || '').slice(0, 10) >= acc[id].openDate) acc[id].saldo -= Math.abs(Number(p.value) || 0); }
  const contas = {}; let total = 0;
  for (const id of Object.keys(acc)) { const v = round(acc[id].saldo); contas[acc[id].name] = v; total += v; }
  return { total: round(total), contas };
}

(async () => {
  const hoje = new Date().toISOString().slice(0, 10);
  const empresas = {}; const contasFlat = {}; let total = 0;
  const multi = ORGS.length > 1 || ORGS.some(o => o.slug);
  for (const o of ORGS) {
    const s = await saldoOrg(o.token);
    total += s.total;
    const key = o.slug || 'default';
    empresas[key] = { nome: o.nome, total: s.total, contas: s.contas };
    for (const [nome, v] of Object.entries(s.contas)) {
      contasFlat[multi ? `${o.nome} · ${nome}` : nome] = v;
    }
  }
  total = round(total);
  const last = { data: hoje, total, contas: contasFlat, empresas };
  const saldos = { daily: [last], last, contas: Object.keys(contasFlat), empresasList: Object.keys(empresas), fonte: 'nibo-api (openBalance + baixas)' };

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
  const resumo = Object.values(empresas).map(e => `${e.nome}: R$ ${e.total.toFixed(2)}`).join(' | ');
  console.log(`fetch-saldos OK: ${ORGS.length} org(s) · total R$ ${total.toFixed(2)} · ${hoje}\n  ${resumo}`);
})().catch(e => { console.error('fetch-saldos ERRO:', e.message); process.exit(1); });
