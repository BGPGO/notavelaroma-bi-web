#!/usr/bin/env node
'use strict';
/**
 * fetch-saldos.cjs — puxa o saldo bancário REAL por conta da NIBO e grava em
 * data-extras.js (window.BIT_EXTRAS.saldos). Roda no refresh diário (worker
 * roda logo após fetch-data; commit já inclui data-extras.js).
 *
 * A NIBO NÃO expõe saldo atual como campo/endpoint — reconstrói do jeito que ela
 * calcula: saldo(conta) = openBalance + baixas (receipts − payments) a partir da
 * dateOfOpenBalance. receipts/payments realizados têm account.id (100%).
 *
 * Não-fatal: se não houver NIBO_TOKEN, sai limpo (exit 0) sem tocar em nada.
 * Preserva outras chaves de window.BIT_EXTRAS (merge).
 */
const fs = require('node:fs');
const path = require('node:path');
const https = require('node:https');

// ---- env loader simples (não clobbra env já setado pelo worker) ----
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

const TOKEN = process.env.NIBO_TOKEN;
if (!TOKEN) { console.log('fetch-saldos: sem NIBO_TOKEN — pulando (nada alterado).'); process.exit(0); }

const BASE = 'https://api.nibo.com.br';
const PAGE = 500;
const agent = new https.Agent({ rejectUnauthorized: false }); // CA do Windows/worker

async function getJson(url) {
  for (let i = 0; i < 5; i++) {
    try {
      const res = await fetch(url, { headers: { apitoken: TOKEN }, agent });
      if (!res.ok) {
        if (res.status === 429 || res.status >= 500) { await new Promise(r => setTimeout(r, 1500 * (i + 1))); continue; }
        throw new Error('HTTP ' + res.status);
      }
      return await res.json();
    } catch (e) { if (i === 4) throw e; await new Promise(r => setTimeout(r, 1500 * (i + 1))); }
  }
}
async function getAll(ep, orderby) {
  const items = []; let skip = 0;
  while (true) {
    const j = await getJson(`${BASE}/${ep}?$skip=${skip}&$top=${PAGE}&$orderby=${orderby}`);
    const b = j.items || []; items.push(...b);
    if (b.length < PAGE) break; skip += PAGE;
  }
  return items;
}

(async () => {
  const accounts = await getAll('empresas/v1/accounts', 'name');
  const receipts = await getAll('empresas/v1/receipts', 'date');
  const payments = await getAll('empresas/v1/payments', 'date');

  const acc = {};
  for (const a of accounts) {
    if (a.isArchived) continue;
    acc[a.id] = { name: a.name, saldo: Number(a.openBalance) || 0, openDate: (a.dateOfOpenBalance || '').slice(0, 10) };
  }
  for (const r of receipts) { const id = r.account && r.account.id; if (!acc[id]) continue; if ((r.date || '').slice(0, 10) >= acc[id].openDate) acc[id].saldo += Math.abs(Number(r.value) || 0); }
  for (const p of payments) { const id = p.account && p.account.id; if (!acc[id]) continue; if ((p.date || '').slice(0, 10) >= acc[id].openDate) acc[id].saldo -= Math.abs(Number(p.value) || 0); }

  const round = n => Math.round(n * 100) / 100;
  const contas = {}; const contasList = []; let total = 0;
  for (const id of Object.keys(acc)) {
    const a = acc[id]; const v = round(a.saldo);
    contas[a.name] = v; total += v; contasList.push(a.name);
  }
  total = round(total);
  const hoje = new Date().toISOString().slice(0, 10);
  const saldos = { daily: [{ data: hoje, total, contas }], last: { data: hoje, total, contas }, contas: contasList, fonte: 'nibo-api (openBalance + baixas)' };

  // Merge em data-extras.js (preserva outras chaves de BIT_EXTRAS, ex.: curva ABC/ADS)
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
  console.log(`fetch-saldos OK: ${contasList.length} contas · total R$ ${total.toFixed(2)} · ${hoje}`);
})().catch(e => { console.error('fetch-saldos ERRO:', e.message); process.exit(1); });
