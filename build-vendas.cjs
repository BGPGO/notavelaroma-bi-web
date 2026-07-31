#!/usr/bin/env node
/**
 * build-vendas.cjs — base de faturamento por marketplace → vendas-data.js
 *
 * Fonte: XLSX "FATURAMENTO ORNATA DOMUS.xlsx" (abas PEDIDOS, ADS, MARKETPLACES).
 * Essa base NAO vem do NIBO — e um controle de vendas por marketplace mantido a
 * mao pelo cliente. Um unico arquivo cobre os 3 CNPJs do grupo (Ornata Domus,
 * Outside The Box, Notavel Aroma); cada BI filtra os seus via
 * bi.config.js > vendas.empresas.
 *
 * Substitui o pbix "01 - FATURAMENTO ORNATA DOMUS", que tinha 33 paginas de mes
 * feitas a mao (uma por mes/ano). Aqui vira UMA tela com filtro de data.
 *
 * Onde o XLSX e procurado, em ordem:
 *   0. Google Drive/Sheets  → vendas.sheets_id (a planilha VIVA que o cliente edita)
 *   1. _supabase_xlsx/      → escrito pelo bi-refresh-worker (download do bucket)
 *   2. raiz do repo         → dev local
 *   3. vendas.base_path do bi.config.js (se setado)
 *
 * O (0) e a fonte de verdade: o cliente mantem a planilha no Drive e ela muda o
 * dia todo. O (1) e so um retrato, que so mexe quando alguem sobe a mao — era por
 * isso que esta tela ficava dias atras do resto do BI enquanto o financeiro (NIBO
 * API) vinha ao vivo. Os niveis 1-3 continuam como rede de seguranca: se o Drive
 * cair ou perder o compartilhamento, o BI usa o ultimo retrato em vez de zerar.
 *
 * Saida: vendas-data.js com window.BIT_VENDAS. Sem o arquivo, a tela se esconde
 * sozinha (page-vendas.jsx trata BIT_VENDAS ausente), então build nao quebra.
 */
'use strict';

const fs = require('node:fs');
const path = require('node:path');
const XLSX = require('xlsx');

const ROOT = __dirname;
const OUT = path.join(ROOT, 'vendas-data.js');

let cfg = {};
try { cfg = require(path.join(ROOT, 'bi.config.js')); } catch (e) {}
const VCFG = cfg.vendas || {};
const FILE_NAME = VCFG.arquivo || 'FATURAMENTO ORNATA DOMUS.xlsx';

// Empresas (coluna CNPJ da aba MARKETPLACES) que ESTE BI mostra. Vazio = todas.
const EMPRESAS = Array.isArray(VCFG.empresas) ? VCFG.empresas : [];

function findSource() {
  const cands = [
    path.join(ROOT, '_supabase_xlsx', VCFG.arquivo_local || 'faturamento-marketplaces.xlsx'),
    path.join(ROOT, '_supabase_xlsx', FILE_NAME),
    path.join(ROOT, FILE_NAME),
  ];
  if (VCFG.base_path) cands.push(path.join(VCFG.base_path, FILE_NAME));
  for (const c of cands) if (fs.existsSync(c)) return c;
  return null;
}

// ---------------------------------------------------------------------------
// Download da planilha viva do Google Drive
// ---------------------------------------------------------------------------
// A planilha e um XLSX HOSPEDADO no Drive (link com rtpof=true), nao um Google
// Sheets nativo — entao nao existe aba pra puxar por gviz/CSV; a gente baixa o
// arquivo inteiro e le com o mesmo parser de sempre.
//
// PRE-REQUISITO: compartilhamento "Qualquer pessoa com o link → Leitor". Sem
// isso o Google devolve a pagina de login (HTML) em vez do arquivo, e o build
// cai no retrato do Supabase. O erro e explicito no log, nao silencioso.
const SHEETS_ID = process.env.VENDAS_SHEETS_ID || VCFG.sheets_id || null;
const CACHE_DIR = path.join(ROOT, '_vendas_src');

function endpointsFor(id) {
  const key = process.env.GOOGLE_API_KEY;
  const eps = [];
  // Drive API e o caminho de primeira classe pra arquivo hospedado, mas so com
  // chave. Fica opcional pra nao exigir projeto GCP so pra isso.
  if (key) eps.push({ nome: 'drive-api', url: `https://www.googleapis.com/drive/v3/files/${id}?alt=media&key=${key}` });
  eps.push({ nome: 'docs-export', url: `https://docs.google.com/spreadsheets/d/${id}/export?format=xlsx` });
  eps.push({ nome: 'drive-download', url: `https://drive.usercontent.google.com/download?id=${id}&export=download` });
  return eps;
}

async function baixarDoDrive(id) {
  if (typeof fetch !== 'function') {
    console.log('AVISO vendas: runtime sem fetch global (Node < 18) — pulando download do Drive');
    return null;
  }
  for (const ep of endpointsFor(id)) {
    try {
      const res = await fetch(ep.url, { redirect: 'follow', signal: AbortSignal.timeout(60000) });
      const buf = Buffer.from(await res.arrayBuffer());
      // XLSX e um zip: tem que comecar com "PK". Se veio HTML, e a tela de login
      // ou de erro do Google — 200 OK com corpo errado, o pior tipo de falha.
      if (!res.ok || buf.length < 4 || buf[0] !== 0x50 || buf[1] !== 0x4b) {
        const dica = buf.slice(0, 400).toString('utf8').includes('accounts.google.com')
          || /<html/i.test(buf.slice(0, 400).toString('utf8'))
          ? 'respondeu HTML (tela de login) — a planilha nao esta com "Qualquer pessoa com o link"'
          : `HTTP ${res.status}, ${buf.length} bytes, nao e XLSX`;
        console.log(`AVISO vendas: ${ep.nome} ${dica}`);
        continue;
      }
      fs.mkdirSync(CACHE_DIR, { recursive: true });
      const dest = path.join(CACHE_DIR, 'faturamento-drive.xlsx');
      fs.writeFileSync(dest, buf);
      console.log(`vendas: planilha baixada do Drive via ${ep.nome} (${(buf.length / 1024).toFixed(0)} KB)`);
      return dest;
    } catch (e) {
      console.log(`AVISO vendas: ${ep.nome} falhou — ${e.message}`);
    }
  }
  return null;
}

/**
 * Normaliza valor numerico. A base tem celulas em texto pt-BR ("R$ 1.085,00",
 * "R$17.409,95") no meio de colunas numericas — o Power Query do pbix tipa a
 * coluna como number e essas viram erro/nulo, sumindo do total. Aqui a gente
 * recupera. Ver feedback_build_data_regex_mojibake pra o cuidado com acento.
 */
function num(x) {
  if (typeof x === 'number') return Number.isFinite(x) ? x : 0;
  if (x == null || x === '') return 0;
  if (x instanceof Date) return 0;
  let s = String(x).trim().replace(/R\$/gi, '').replace(/[\s\u00a0]/g, '');
  if (!s) return 0;
  const neg = /^\(.*\)$/.test(s);
  if (neg) s = s.slice(1, -1);
  // pt-BR usa virgula decimal. Se tem virgula, ponto e separador de milhar.
  s = /,/.test(s) ? s.replace(/\./g, '').replace(',', '.') : s;
  const v = Number(s);
  if (!Number.isFinite(v)) return 0;
  return neg ? -v : v;
}

/** Data → 'YYYY-MM-DD' em horario local (evita shift de fuso virar dia anterior). */
function isoDay(x) {
  let d;
  if (x instanceof Date) d = x;
  else if (typeof x === 'number') {
    // serial Excel (base 1899-12-30). Ver feedback_fin40_excel_date_1899.
    d = new Date(Date.UTC(1899, 11, 30) + x * 86400000);
    return d.toISOString().slice(0, 10);
  } else {
    d = new Date(String(x));
  }
  if (!d || isNaN(d.getTime())) return null;
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}

function slugify(s) {
  return String(s).toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
}

async function main() {
  // Planilha viva primeiro; retrato so como rede de seguranca.
  let src = SHEETS_ID ? await baixarDoDrive(SHEETS_ID) : null;
  const aoVivo = !!src;
  if (!src) src = findSource();
  if (!src) {
    console.log(`AVISO vendas: "${FILE_NAME}" nao encontrado — vendas-data.js nao gerado (tela Vendas fica oculta)`);
    // Nao apaga um vendas-data.js pre-existente: melhor dado velho que tela vazia.
    if (!fs.existsSync(OUT)) fs.writeFileSync(OUT, '/* sem base de vendas */\nwindow.BIT_VENDAS = null;\n');
    return;
  }
  if (SHEETS_ID && !aoVivo) {
    console.log('AVISO vendas: Drive indisponivel — caindo no RETRATO local. O dado'
      + ' pode estar dias atras da planilha; a tela avisa isso pro usuario.');
  } else if (!SHEETS_ID) {
    console.log('AVISO vendas: vendas.sheets_id nao configurado — so o retrato estatico'
      + ' (esta tela nao acompanha a planilha do cliente)');
  }
  console.log(`vendas: lendo ${path.relative(ROOT, src)}`);
  const wb = XLSX.readFile(src, { cellDates: true });
  const sheet = (n) => (wb.Sheets[n] ? XLSX.utils.sheet_to_json(wb.Sheets[n], { defval: null }) : []);

  // ---- MARKETPLACES: LOJA completa ("SHOPEE - ORNATA") → { marketplace, empresa }
  const mpRows = sheet('MARKETPLACES').filter(r => r.MARKETPLACE);
  const MAP = new Map();
  for (const r of mpRows) {
    const full = String(r.MARKETPLACE).trim();
    // O pbix deriva a coluna LOJA com Text.BeforeDelimiter(MARKETPLACE, " -").
    const mkt = full.split(/\s+-\s+/)[0].trim() || full;
    MAP.set(full, { marketplace: mkt, empresa: String(r.CNPJ || '').trim() });
  }
  if (!MAP.size) throw new Error('vendas: aba MARKETPLACES vazia — sem de->para de loja');

  const empresasNaBase = [...new Set([...MAP.values()].map(v => v.empresa))].filter(Boolean).sort();
  const alvo = EMPRESAS.length ? EMPRESAS : empresasNaBase;
  const alvoSet = new Set(alvo);
  const desconhecidas = alvo.filter(e => !empresasNaBase.includes(e));
  if (desconhecidas.length) {
    throw new Error(`vendas: bi.config.vendas.empresas cita empresa que nao existe na base: ${desconhecidas.join(', ')} (base tem: ${empresasNaBase.join(', ')})`);
  }

  // ---- agrega dia × loja
  // key = `${dia}|${loja}` → { d, loja, mkt, emp, valor, pedidos, ads }
  const cell = new Map();
  const orfaos = new Set();
  const touch = (dia, loja) => {
    const meta = MAP.get(loja);
    if (!meta) { orfaos.add(loja); return null; }
    if (!alvoSet.has(meta.empresa)) return null;
    const k = `${dia}|${loja}`;
    let o = cell.get(k);
    if (!o) {
      o = { d: dia, loja, mkt: meta.marketplace, emp: meta.empresa, valor: 0, pedidos: 0, ads: 0 };
      cell.set(k, o);
    }
    return o;
  };

  let pedLidos = 0, adsLidos = 0, textoRecuperado = 0;
  const qtdSuspeita = [];
  for (const r of sheet('PEDIDOS')) {
    if (!r.DATA || !r.LOJA) continue;
    const dia = isoDay(r.DATA);
    if (!dia) continue;
    const o = touch(dia, String(r.LOJA).trim());
    if (!o) continue;
    if (typeof r.VALOR === 'string' && r.VALOR.trim()) textoRecuperado++;
    const valor = num(r.VALOR);
    const qtd = num(r['QUANTIDADE PEDIDOS']);
    // Contagem de pedidos fracionada = celula digitada errada na planilha (caso
    // real: 31/01/2025 SHOPEE-NOTAVEL recebeu o VALOR no lugar da quantidade).
    // Arredondamos pra nao vazar fracao pro KPI, mas gritamos todo build — nao
    // e papel do BI "consertar" numero da fonte em silencio.
    if (!Number.isInteger(qtd)) {
      qtdSuspeita.push({ dia, loja: String(r.LOJA).trim(), qtd, valor });
    }
    o.valor += valor;
    o.pedidos += Math.round(qtd);
    pedLidos++;
  }
  for (const r of sheet('ADS')) {
    if (!r.DATA || !r.LOJA) continue;
    const dia = isoDay(r.DATA);
    if (!dia) continue;
    const o = touch(dia, String(r.LOJA).trim());
    if (!o) continue;
    o.ads += num(r.GASTO);
    adsLidos++;
  }

  if (orfaos.size) {
    console.log(`AVISO vendas: ${orfaos.size} loja(s) sem de->para em MARKETPLACES (ignoradas): ${[...orfaos].join(', ')}`);
  }
  if (textoRecuperado) {
    console.log(`vendas: ${textoRecuperado} celula(s) de VALOR em texto pt-BR recuperadas (o pbix perde essas)`);
  }
  for (const q of qtdSuspeita) {
    console.log(`AVISO vendas: QUANTIDADE PEDIDOS fracionada em ${q.dia} / ${q.loja}: ${q.qtd}`
      + (Math.abs(q.qtd - q.valor) < 0.005 ? ' — igual ao VALOR, provavel copy/paste errado na planilha' : '')
      + ` (arredondado pra ${Math.round(q.qtd)})`);
  }

  const rows = [...cell.values()].sort((a, b) => (a.d < b.d ? -1 : a.d > b.d ? 1 : a.loja.localeCompare(b.loja)));
  if (!rows.length) throw new Error(`vendas: zero linhas apos filtrar empresas [${alvo.join(', ')}] — conferir bi.config.vendas.empresas`);

  // ---- payload enxuto: array de tuplas + dicionarios (evita repetir string 7k vezes)
  const marketplaces = [...new Set(rows.map(r => r.mkt))].sort();
  const empresas = [...new Set(rows.map(r => r.emp))].sort();
  const lojas = [...new Set(rows.map(r => r.loja))].sort();
  const iMkt = new Map(marketplaces.map((m, i) => [m, i]));
  const iEmp = new Map(empresas.map((e, i) => [e, i]));
  const iLoja = new Map(lojas.map((l, i) => [l, i]));

  const r2 = (n) => Math.round(n * 100) / 100;
  // [dia, iLoja, iMkt, iEmp, valor, pedidos, ads]
  const tuples = rows.map(r => [r.d, iLoja.get(r.loja), iMkt.get(r.mkt), iEmp.get(r.emp), r2(r.valor), Math.round(r.pedidos), r2(r.ads)]);

  const dias = rows.map(r => r.d);
  const minDia = dias[0], maxDia = dias[dias.length - 1];
  // Ultimo dia com faturamento > 0: o "Atualizacao" do pbix. Linhas zeradas no fim
  // da planilha nao devem inflar a data de frescor.
  const maxDiaComDado = rows.filter(r => r.valor > 0).map(r => r.d).sort().pop() || maxDia;
  const totalFat = r2(rows.reduce((s, r) => s + r.valor, 0));
  // Soma os MESMOS inteiros que vao nas tuplas, senao o total do payload divergiria
  // do que a tela calcula somando as linhas.
  const totalPed = tuples.reduce((s, t) => s + t[5], 0);
  const totalAds = r2(rows.reduce((s, r) => s + r.ads, 0));
  // ADS so comeca em 11/2024 — a tela precisa saber pra nao mostrar %ADS falso-zero.
  const adsDesde = rows.filter(r => r.ads > 0).map(r => r.d).sort()[0] || null;

  const payload = {
    fonte: aoVivo ? `google-drive:${SHEETS_ID}` : `xlsx:${path.basename(src)}`,
    // A tela usa isso pra avisar quando esta lendo retrato em vez da planilha viva.
    ao_vivo: aoVivo,
    gerado_em: new Date().toISOString(),
    empresas, marketplaces, lojas,
    empresa_slugs: empresas.map(slugify),
    escopo: alvo,
    periodo: { de: minDia, ate: maxDia, ate_com_dado: maxDiaComDado },
    ads_desde: adsDesde,
    totais: { faturamento: totalFat, pedidos: totalPed, ads: totalAds },
    // colunas das tuplas, documentado pro consumidor nao adivinhar indice
    cols: ['dia', 'loja', 'marketplace', 'empresa', 'valor', 'pedidos', 'ads'],
    rows: tuples,
  };

  const js = `/* BI VENDAS — faturamento por marketplace (gerado por build-vendas.cjs em ${payload.gerado_em}) */\n`
    + `window.BIT_VENDAS = ${JSON.stringify(payload)};\n`;
  // UTF-8 sem BOM — Set-Content/Out-File injetam BOM e quebram o parse.
  // Ver feedback_powershell_bom_utf8.
  fs.writeFileSync(OUT, js, { encoding: 'utf8' });

  const kb = (js.length / 1024).toFixed(0);
  console.log(`OK vendas-data.js (${kb} KB) — ${tuples.length} linhas dia x loja | ${pedLidos} pedidos + ${adsLidos} ads lidos`);
  console.log(`   escopo: ${alvo.join(' + ')}`);
  const brl = (n) => n.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  console.log(`   periodo: ${minDia} -> ${maxDiaComDado} | fat R$ ${brl(totalFat)} | ${totalPed.toLocaleString('pt-BR')} pedidos | ads R$ ${brl(totalAds)}`);
}

main().catch((e) => {
  console.error('ERR vendas:', e.message);
  process.exit(1);
});
