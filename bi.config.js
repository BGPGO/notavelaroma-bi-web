module.exports = {
  cliente: {
    nome: "Notável Aroma",
    subdomain: "notavelaroma-bi",
    coolify_app_uuid: "pviim6io2k6psm2gxy8wgjal",
    cor_primaria: "#6B4226",
  },
  fontes: {
    adapters: ["nibo-api"],
    nibo_api: {
      token_env: "NIBO_TOKEN",
      cliente_label: "Notável Aroma",
    },
    // Legado — fonte XLSX (mantida pra rollback rapido se precisar voltar)
    nibo_xlsx: {
      base_file: "Base Nibo - Notável Aroma.xlsx",
      conta_filter: ["Notável Aroma"],
    },
    drive: {
      base_path: "G:/Meu Drive/BGP/CLIENTES/BI/479. ORNATA DOMUS/BASES",
    },
  },
  // Base de faturamento por marketplace (XLSX mantido pelo cliente, fora do ERP).
  // O mesmo arquivo cobre os 3 CNPJs do grupo; aqui listamos so os deste BI.
  // Alimenta a tela "Vendas Marketplaces" (page-vendas.jsx) via build-vendas.cjs.
  vendas: {
    // Planilha VIVA no Drive — fonte de verdade, baixada a cada refresh. Mesmo
    // arquivo do ornatadomus-bi-web: um XLSX cobre os 3 CNPJs do grupo.
    // Exige compartilhamento "Qualquer pessoa com o link → Leitor".
    sheets_id: "11pFiqLOFIRObtzafe8ifJaF2ETm_p_3I",
    arquivo: "FATURAMENTO ORNATA DOMUS.xlsx",
    arquivo_local: "faturamento-marketplaces.xlsx", // nome no bucket/_supabase_xlsx
    empresas: ["NOTÁVEL AROMA"],
  },
  pages: {
    geral: {
      overview: "active",
      receita: "active",
      despesa: "active",
      fluxo: "active",
      tesouraria: "active",
      comparativo: "active",
      relatorio: "active",
      valuation: "hidden",
    },
    outros: {
      vendas: "active",
      orcamento: "hidden",
      lojas: "hidden",
      risco: "hidden",
      indicators: "hidden",
      faturamento_produto: "hidden",
      curva_abc: "hidden",
      marketing: "hidden",
      hierarquia: "hidden",
      detalhado: "hidden",
      profunda_cliente: "hidden",
      crm: "hidden",
    },
  },
  meta: {
    ano_corrente: 2026,
    metas_crm: { mes: 0, ano: 0 },
    valuation_premissas: { wacc: 25, growth_year2: 20, growth_year3: 20, ipca: 4.5, perpetuity_growth: 10 },
  },
  template: { version_when_created: "1.0.0", version_last_synced: "1.0.0" },
};
