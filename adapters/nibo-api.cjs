/**
 * Adapter: Nibo API direta (api.nibo.com.br)
 *
 * Le schedules + payments + receipts via REST. Gera 1 movimento POR pagamento
 * registrado (resolve o caso "vale antecipado", parciais, multiplos pagamentos
 * por titulo) que o adapter nibo-xlsx perdia porque o XLSX achata em 1 linha.
 *
 * Schema de saida: mesmo do nibo-xlsx (id, fonte, natureza, status, realizado,
 * data_emissao/vencimento/pagamento/competencia, valor_total/pago/aberto,
 * categoria, secao_dre, centro_custo, cliente, conta_corrente, observacao,
 * tags, regime) — mantem compat com build-data.cjs sem mudar nada la.
 *
 * Config em bi.config.js:
 *   fontes: {
 *     adapters: ["nibo-api"],
 *     nibo_api: {
 *       token_env: "NIBO_TOKEN",
 *       cliente_label: "Notavel Aroma",
 *     }
 *   }
 *
 * Env: NIBO_TOKEN (especifico da empresa — cada org Nibo tem token proprio).
 */
'use strict';

const fs = require('node:fs');
const path = require('node:path');

const BASE = 'https://api.nibo.com.br';
const PAGE_SIZE = 500;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function parseIso(val) {
  if (!val) return null;
  return String(val).slice(0, 10);
}

function abs(n) {
  return n == null ? 0 : Math.abs(Number(n) || 0);
}

async function getJson(url, token, retries = 5) {
  let lastErr;
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, { headers: { apitoken: token } });
      if (!res.ok) {
        if (res.status === 429 || res.status >= 500) {
          await sleep(Math.min(20000, 1500 * (i + 1)));
          continue;
        }
        throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
      }
      return await res.json();
    } catch (e) {
      lastErr = e;
      if (i < retries - 1) await sleep(Math.min(20000, 1500 * (i + 1)));
    }
  }
  throw lastErr;
}

async function getAll(endpoint, token, orderby = 'id') {
  const items = [];
  let skip = 0;
  let total = null;
  while (true) {
    const url = `${BASE}/${endpoint}?$skip=${skip}&$top=${PAGE_SIZE}&$orderby=${orderby}`;
    const j = await getJson(url, token);
    const batch = j.items || [];
    items.push(...batch);
    if (total == null && typeof j.count === 'number') total = j.count;
    if (batch.length < PAGE_SIZE) break;
    skip += PAGE_SIZE;
    if (total != null && items.length >= total) break;
  }
  return items;
}

// Mapeamento subcategoria → centro de custo (plano de contas Notavel Aroma).
// Identico ao do nibo-xlsx.cjs — manter sincronizado se mudar la.
const CENTRO_CUSTO_MAP = {
  'Despesas com ADS': 'Marketing e publicidade',
  'Bens de consumo com publicidade': 'Marketing e publicidade',
  'Serviços contratados para marketing': 'Marketing e publicidade',
  'Outros gastos com publicidade': 'Marketing e publicidade',
  'Luz, água e outros': 'Despesas operacionais',
  'Reembolsos por fora de marketplaces': 'Despesas operacionais',
  'Despesas administrativas': 'Despesas administrativas',
  'Despesas com alimentação': 'Despesas administrativas',
  'Material de escritório': 'Despesas administrativas',
  'Insumos para escritório': 'Despesas administrativas',
  'Pró-labores': 'Despesas administrativas',
  'Despesas com benefícios aos sócios e diretores': 'Despesas administrativas',
  'Despesas com Treinamento e Capacitação': 'Despesas administrativas',
  'Despesas com materiais de consumo': 'Despesas administrativas',
  'Despesas com viagens': 'Despesas administrativas',
  'Materiais de Limpeza e Higiêne': 'Despesas administrativas',
  'Materiais de Limpeza e Higiêne OP': 'Despesas administrativas',
  'Instalações ou Equipamentos de Segurança': 'Despesas administrativas',
  'Serviços de contabilidade': 'Despesas com serviços',
  'Serviços de sistema de gestão': 'Despesas com serviços',
  'Despesas com frete para compra de materiais': 'Despesas com serviços',
  'Despesas com frete para devolução e reenvio': 'Despesas com serviços',
  'Despesas com outros serviços contratados': 'Despesas com serviços',
  'Salários e encargos': 'Despesas com colaboradores',
  'Bonificações, Brindes e Festividades': 'Despesas com colaboradores',
  'Despesas com horas extras setor administrativo': 'Despesas com colaboradores',
  'Comissões': 'Despesas com colaboradores',
  'Despesa com férias de funcionário': 'Despesas com colaboradores',
  'Vestuário de trabalho': 'Despesas com colaboradores',
  'Despesas com rescisões trabalhistas': 'Despesas com colaboradores',
  'Vale-Refeição (VR)': 'Despesas com colaboradores',
  'Despesas com 13° Salário': 'Despesas com colaboradores',
  'PLR': 'Despesas com colaboradores',
  'Taxas e Encargos Bancários': 'Despesas Financeiras',
  'Impostos e Taxas': 'Despesas Financeiras',
  'Impostos sobre bens materiais': 'Despesas Financeiras',
  'Impostos sobre serviços contratados': 'Despesas Financeiras',
  'Transferência entre empresas': 'Despesas não operacionais',
  'Outras despesas (Não considerar DRE)': 'Despesas não operacionais',
  'Outras despesas': 'Despesas não operacionais',
  'Outras despesas com Notável Aroma': 'Despesas não operacionais',
  'Outras despesas com Outside the Box': 'Despesas não operacionais',
  'Despesas com aluguéis para uso': 'Despesas com aluguéis',
  'Despesas com combustíveis para veículos': 'Despesas com veículos',
  'Despesas com reparo, manutenção e preventiva': 'Despesas com veículos',
};

module.exports = {
  id: 'nibo-api',
  label: 'Nibo (API direta)',
  required_env: ['NIBO_TOKEN'],

  validate(config) {
    const errors = [];
    const niboCfg = (config.fontes && config.fontes.nibo_api) || {};
    const tokenEnv = niboCfg.token_env || 'NIBO_TOKEN';
    if (!process.env[tokenEnv]) errors.push(`env ${tokenEnv} nao definido`);
    return { ok: errors.length === 0, errors };
  },

  async pull(config, dataDir) {
    fs.mkdirSync(dataDir, { recursive: true });
    const niboCfg = config.fontes.nibo_api || {};
    const tokenEnv = niboCfg.token_env || 'NIBO_TOKEN';
    const token = process.env[tokenEnv];
    if (!token) throw new Error(`Nibo API: env ${tokenEnv} vazio`);

    console.log('=== Nibo API pull ===');

    console.log('  schedules...');
    const schedules = await getAll('empresas/v1/schedules', token, 'dueDate');
    console.log(`    ${schedules.length} schedules`);

    console.log('  categories...');
    const scheduleCategories = await getAll('empresas/v1/categories', token, 'name');
    console.log(`    ${scheduleCategories.length} categorias`);

    console.log('  receipts (entradas detalhadas)...');
    const receipts = await getAll('empresas/v1/receipts', token, 'date');
    console.log(`    ${receipts.length} recebimentos`);

    console.log('  payments (saidas detalhadas)...');
    const payments = await getAll('empresas/v1/payments', token, 'date');
    console.log(`    ${payments.length} pagamentos`);

    // Index categorias por id. Em /categories, o "parent" (secao DRE) vem em group.name.
    const catById = new Map();
    for (const c of scheduleCategories) {
      catById.set(c.id, { name: c.name, parent: (c.group && c.group.name) || '' });
    }

    // Index payments por scheduleId
    const paysBySched = new Map();
    for (const p of [...payments, ...receipts]) {
      const sid = p.scheduleId;
      if (!sid) continue;
      if (!paysBySched.has(sid)) paysBySched.set(sid, []);
      paysBySched.get(sid).push(p);
    }

    const movimentos = [];
    let comPayments = 0;
    let semPaymentsButPaid = 0;
    let aPagar = 0;

    for (const s of schedules) {
      const isCR = s.type === 'Credit';
      const natureza = isCR ? 'R' : 'P';
      const valorTotal = abs(s.value);
      if (valorTotal === 0) continue;

      const sched = paysBySched.get(s.scheduleId) || [];
      const sumPays = sched.reduce((a, p) => a + abs(p.value), 0);

      const dataVenc = parseIso(s.dueDate);
      const dataAgend = parseIso(s.scheduleDate);
      const dataAcum = parseIso(s.accrualDate);
      // data_emissao: usa accrualDate como aproximacao (API nao expoe createdAt separado)
      const dataEmissao = dataAcum || dataAgend || dataVenc;

      const cat = s.category || {};
      const catName = cat.name || '';
      const catMeta = cat.id ? catById.get(cat.id) : null;
      const secaoDre = (catMeta && catMeta.parent) || '';
      const centroCusto = CENTRO_CUSTO_MAP[catName] || '';

      const stk = s.stakeholder || {};
      const clienteName = stk.name || '';
      const descricao = (s.description || '').trim();

      const baseCampos = {
        fonte: 'nibo-api',
        natureza,
        data_emissao: dataEmissao,
        data_vencimento: dataAgend || dataVenc,
        data_competencia: dataAcum || dataVenc,
        categoria: catName,
        secao_dre: secaoDre,
        centro_custo: centroCusto,
        cliente: clienteName,
        codigo_banco: '',
        tags: [],
        regime: 'caixa',
      };

      if (sched.length > 0) {
        comPayments++;
        // 1 movimento por payment registrado
        for (let i = 0; i < sched.length; i++) {
          const p = sched[i];
          const v = abs(p.value);
          const conta = (p.account && (p.account.name || p.account)) || p.accountName || '';
          movimentos.push({
            ...baseCampos,
            id: `${s.scheduleId}::pay${i + 1}`,
            status: 'PAGO',
            realizado: true,
            data_pagamento: parseIso(p.date),
            valor_total: v,
            valor_pago: v,
            valor_aberto: 0,
            conta_corrente: conta,
            observacao: descricao + (sched.length > 1 ? ` (parcial ${i + 1}/${sched.length})` : ''),
            tags: p.isTransfer ? ['transferencia'] : [],
          });
        }
        // Saldo aberto se houver
        const saldo = Math.max(0, valorTotal - sumPays);
        if (saldo > 0.005) {
          movimentos.push({
            ...baseCampos,
            id: `${s.scheduleId}::aberto`,
            status: 'A_PAGAR',
            realizado: false,
            data_pagamento: null,
            valor_total: saldo,
            valor_pago: 0,
            valor_aberto: saldo,
            conta_corrente: '',
            observacao: descricao + ' (saldo aberto)',
          });
        }
      } else if (s.isPaid === true) {
        // Pago mas sem registro de payment (quitacao via entry direta).
        // Fallback: data_pagamento = scheduleDate (prevista) || dueDate
        semPaymentsButPaid++;
        movimentos.push({
          ...baseCampos,
          id: s.scheduleId,
          status: 'PAGO',
          realizado: true,
          data_pagamento: dataAgend || dataVenc,
          valor_total: valorTotal,
          valor_pago: valorTotal,
          valor_aberto: 0,
          conta_corrente: '',
          observacao: descricao,
        });
      } else {
        aPagar++;
        movimentos.push({
          ...baseCampos,
          id: s.scheduleId,
          status: 'A_PAGAR',
          realizado: false,
          data_pagamento: null,
          valor_total: valorTotal,
          valor_pago: 0,
          valor_aberto: valorTotal,
          conta_corrente: '',
          observacao: descricao,
        });
      }
    }

    console.log(`  agregado: ${comPayments} com payments | ${semPaymentsButPaid} pagos sem detalhe | ${aPagar} a pagar`);

    fs.writeFileSync(path.join(dataDir, 'movimentos.json'), JSON.stringify(movimentos, null, 2));

    fs.writeFileSync(path.join(dataDir, 'empresa.json'), JSON.stringify({
      nome_fantasia: config.cliente?.nome || '',
      fonte: 'nibo-api',
    }));

    const categorias = [...new Set(movimentos.map(m => m.categoria).filter(Boolean))]
      .map(name => ({ codigo: name, descricao: name, tipo: 'mista' }));
    fs.writeFileSync(path.join(dataDir, 'categorias.json'), JSON.stringify(categorias, null, 2));

    const clientes = [...new Set(movimentos.map(m => m.cliente).filter(Boolean))]
      .map(name => ({ codigo: name, nome_fantasia: name, razao_social: name }));
    fs.writeFileSync(path.join(dataDir, 'clientes.json'), JSON.stringify(clientes, null, 2));

    const contas = [...new Set(movimentos.map(m => m.conta_corrente).filter(Boolean))]
      .map(name => ({ codigo: name, descricao: name }));
    fs.writeFileSync(path.join(dataDir, 'contas_correntes.json'), JSON.stringify(contas, null, 2));

    const departamentos = [...new Set(movimentos.map(m => m.centro_custo).filter(Boolean))]
      .map(name => ({ codigo: name, descricao: name }));
    fs.writeFileSync(path.join(dataDir, 'departamentos.json'), JSON.stringify(departamentos, null, 2));

    fs.writeFileSync(path.join(dataDir, '_summary.json'), JSON.stringify({
      adapter: 'nibo-api',
      timestamp: new Date().toISOString(),
      schedules: schedules.length,
      payments: payments.length,
      receipts: receipts.length,
      records: movimentos.length,
    }, null, 2));

    console.log(`=== Nibo API OK: ${movimentos.length} movimentos canonical ===`);
    return { fetched: movimentos.length, summary: { adapter: 'nibo-api', records: movimentos.length } };
  },
};
