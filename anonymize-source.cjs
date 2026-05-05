#!/usr/bin/env node
/* Anonimiza data/*.json na FONTE (raw Omie) + aleatoriza valores.
 * Depois rodar `node bgp-bi.cjs build` regenera data.js já 100% anônimo. */
'use strict';
const fs = require('fs');

const DIR = __dirname + '/data/';
const cats = JSON.parse(fs.readFileSync(DIR + 'categorias.json', 'utf8'));
const clients = JSON.parse(fs.readFileSync(DIR + 'clientes.json', 'utf8'));
const movs = JSON.parse(fs.readFileSync(DIR + 'movimentos.json', 'utf8'));

console.log(`In: ${cats.length} cats · ${clients.length} clientes · ${movs.length} movs`);

// === 1. Categorias → "Categoria 001..." ===
// Pré-classifica pelo nome ORIGINAL antes de renomear, e salva no bi.config.js
// como categoria_overrides — assim build-data.cjs respeita a classificação.
function classify(desc) {
  const s = String(desc||'').toLowerCase();
  if (/^<.*>|dispon[ií]vel/.test(s)) return 'outros';
  if (/transfer[eê]ncia/.test(s)) return 'outros';
  if (/empr[eé]stim|aplica[cç][aã]o|distribui[cç][aã]o|aporte|integraliza|novas opera/.test(s)) return 'outros';
  if (/^juros|encargos|multa.*atras/.test(s)) return 'outros';
  if (/\b(icms|iss|cofins|pis|tribut|iof|irpj|csll)\b/.test(s)) return 'imposto';
  if (/simples nacional|\bdas\b/.test(s)) return 'imposto';
  if (/^compras|mercadoria|mat[eé]ria.prima|insumo|cmv|food.*cost/.test(s)) return 'custo';
  if (/royalt|repass|^frete|servi[cç]os.*entrega|^comiss|devolu|aluguel.*vari|fundo.*promo|^cdu/.test(s)) return 'custo';
  return 'despesa';
}
cats.sort((a,b) => String(a.codigo||'').localeCompare(String(b.codigo||'')));
const catOverrides = {};
let ci = 1;
for (const c of cats) {
  const orig = c.descricao || c.descricao_categoria || '';
  const sec = classify(orig);
  const newName = `Categoria ${String(ci++).padStart(3,'0')}`;
  catOverrides[newName] = sec;
  c.descricao = newName;
  if (c.descricao_categoria) c.descricao_categoria = newName;
}

// Atualiza bi.config.js com os overrides
const cfgPath = __dirname + '/bi.config.js';
let cfgTxt = fs.readFileSync(cfgPath, 'utf8');
const ovJSON = JSON.stringify(catOverrides, null, 6).replace(/^/gm, '  ').replace(/^ {2}/, '');
if (cfgTxt.includes('categoria_overrides')) {
  cfgTxt = cfgTxt.replace(/categoria_overrides:\s*\{[^}]*\}/s, `categoria_overrides: ${ovJSON}`);
} else {
  cfgTxt = cfgTxt.replace(/(meta:\s*\{)/, `$1\n    categoria_overrides: ${ovJSON},`);
}
fs.writeFileSync(cfgPath, cfgTxt);
console.log(`bi.config.js: ${Object.keys(catOverrides).length} overrides de categoria injetados`);

// === 2. Identifica cada cliente como cliente/fornecedor/parceiro ===
const isCli = new Set(), isForn = new Set();
for (const m of movs) {
  const d = m.detalhes || {};
  const cod = d.nCodCliente;
  if (!cod) continue;
  if (d.cNatureza === 'R') isCli.add(cod);
  else if (d.cNatureza === 'P') isForn.add(cod);
}
let cli = 1, forn = 1, parc = 1;
for (const c of clients) {
  const cod = c.codigo_cliente_omie;
  let label;
  const inCli = isCli.has(cod), inForn = isForn.has(cod);
  if (inCli && inForn) label = `Parceiro ${String(parc++).padStart(3,'0')}`;
  else if (inCli) label = `Cliente ${String(cli++).padStart(3,'0')}`;
  else if (inForn) label = `Fornecedor ${String(forn++).padStart(3,'0')}`;
  else label = `Inativo ${cod}`;
  c.nome_fantasia = label;
  c.razao_social = label;
  c.cnpj_cpf = '00.000.000/0000-00';
  if (c.email) c.email = 'demo@anon.com';
  if (c.telefone1_numero) c.telefone1_numero = '0000000000';
  if (c.telefone2_numero) c.telefone2_numero = '';
  if (c.endereco) c.endereco = 'Rua Anônima 0';
  if (c.endereco_numero) c.endereco_numero = '0';
  if (c.bairro) c.bairro = 'Bairro Anônimo';
  if (c.cidade) c.cidade = 'Cidade Anônima';
}
console.log(`Clientes anonimizados: ${cli-1} clientes, ${forn-1} fornecedores, ${parc-1} parceiros`);

// === 3. Aleatoriza valores em movimentos (fator 0.5-1.5 por mov) ===
function rand() { return 0.5 + Math.random(); }
const empresaMap = {
  'DOMINOS VILA CLEMENTINO':         'Pizzaria Loja 01',
  'BOALI SHOPPING PRAIA DA COSTA':   'Saudável Loja 02',
  'DOMINOS SERRA':                   'Pizzaria Loja 03',
  'DOMINOS JARDIM CAMBURI':          'Pizzaria Loja 04',
  'DOMINOS PRAIA DO CANTO':          'Pizzaria Loja 05',
  'DOMINOS ACLIMAÇÃO':               'Pizzaria Loja 06',
  'DOMINOS PINHEIROS':               'Pizzaria Loja 07',
  'DOMINOS AEROPORTO GUARULHOS':     'Pizzaria Aeroporto 08',
  'DOMINOS MANDAQUI':                'Pizzaria Loja 09',
  'DOMINOS GOPOUVA':                 'Pizzaria Loja 10',
  'DOMINOS CAMPO BELO':              'Pizzaria Loja 11',
  'SPOLETO JABAQUARA':               'Massas Shopping 12',
  'DOMINOS JABAQUARA':               'Pizzaria Loja 13',
  'BOLO DE ROLO FAIR TRADE SDU':     'Doces Aeroporto 14',
  'LUIGI ALEGRE':                    'Sorvetes Shopping 15',
  'CASA BAUDUCCO AEROPORTO VIX':     'Padaria Aeroporto 16',
  'OCULUM SHOPPING VILA VELHA':      'Óptica Shopping 17',
  'OCULUM SHOPPING VITÓRIA':         'Óptica Shopping 18',
  'BOLO DE ROLO AEROPORTO VIX':      'Doces Aeroporto 19',
  'NATUZON AEROPORTO VIX':           'Kiosk Aeroporto 20',
  'NOBEL & ZASTRAS AEROPORTO VIX':   'Livraria Aeroporto 21',
  'OPTCÁLIA SHOPPING PRAIA DA COSTA':'Óptica Shopping 22',
  'OPTCÁLIA SHOPPING VITÓRIA':       'Óptica Shopping 23',
  'OPTCÁLIA NITERÓI':                'Óptica Loja 24',
};
function slugify(s) {
  return String(s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
}
for (const m of movs) {
  const f = rand();
  const r = m.resumo || {};
  if (r.nValPago != null)   r.nValPago   = +(r.nValPago * f).toFixed(2);
  if (r.nValAberto != null) r.nValAberto = +(r.nValAberto * f).toFixed(2);
  if (r.nValLiquido != null) r.nValLiquido = +(r.nValLiquido * f).toFixed(2);
  if (m.detalhes) {
    if (m.detalhes.nValorTitulo != null) m.detalhes.nValorTitulo = +(m.detalhes.nValorTitulo * f).toFixed(2);
    if (m.detalhes.cObs) m.detalhes.cObs = '';
    if (m.detalhes.cNumDocFiscal) m.detalhes.cNumDocFiscal = '';
    if (m.detalhes.cNumParcela) m.detalhes.cNumParcela = '';
  }
  // Anonimiza nome da loja (_conta)
  if (m._conta && empresaMap[m._conta]) {
    m._conta = empresaMap[m._conta];
    m._conta_slug = slugify(empresaMap[Object.keys(empresaMap).find(k => empresaMap[k] === m._conta)] || m._conta);
  }
  if (m._cliente_grupo) m._cliente_grupo = 'Demo Holding';
}

// === 4. Contas correntes — anonimiza nomes de banco ===
const ccs = JSON.parse(fs.readFileSync(DIR + 'contas_correntes.json', 'utf8'));
let cci = 1;
for (const c of ccs) {
  c.cDesc = `Conta ${String(cci++).padStart(3,'0')}`;
  if (c._conta && empresaMap[c._conta]) c._conta = empresaMap[c._conta];
}

// === 5. Empresa root ===
const emp = JSON.parse(fs.readFileSync(DIR + 'empresa.json', 'utf8'));
if (emp) {
  emp.nome_fantasia = 'Grupo Demo';
  emp.razao_social = 'Grupo Demo (consolidado de 24 contas)';
  emp.cnpj = '';
  emp.cidade = 'Multi';
  emp.uf = 'BR';
  if (emp.cnpjs) emp.cnpjs = [];
}

// === 6. Save ===
fs.writeFileSync(DIR + 'categorias.json', JSON.stringify(cats));
fs.writeFileSync(DIR + 'clientes.json', JSON.stringify(clients));
fs.writeFileSync(DIR + 'movimentos.json', JSON.stringify(movs));
fs.writeFileSync(DIR + 'contas_correntes.json', JSON.stringify(ccs));
fs.writeFileSync(DIR + 'empresa.json', JSON.stringify(emp, null, 2));
console.log('OK: data/* anonimizado e aleatorizado');
