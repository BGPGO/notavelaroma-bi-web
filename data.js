/* BGP BI — gerado por build-data.cjs em 2026-07-15T07:49:57.613Z */
/* Empresa: Notável Aroma | Ano ref: 2026 */
const MONTHS = ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
const MONTHS_FULL = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];

function fmt(n, opts = {}) {
  const { dec = 2, prefix = "R$", showSign = false } = opts;
  const sign = n < 0 ? "-" : (showSign ? "+" : "");
  const abs = Math.abs(n);
  const parts = abs.toFixed(dec).split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${sign}${prefix}${parts.join(",")}`;
}
function fmtK(n) {
  return fmt(n, { dec: 0 });
}
function fmtPct(n, dec = 2) {
  const sign = n > 0 ? "+" : (n < 0 ? "-" : "");
  return `${sign}${Math.abs(n).toFixed(dec).replace(".", ",")}%`;
}

const META = {
  "empresa": {
    "nome_fantasia": "Notável Aroma"
  },
  "fetched_at": "2026-07-15T07:49:55.027Z",
  "ref_year": 2026,
  "counts": {
    "contas_pagar": 0,
    "contas_receber": 0,
    "categorias": 54,
    "departamentos": 8,
    "clientes": 210
  }
};
const POSICAO_CAIXA = [
  {
    "name": "Saldo realizado YTD",
    "value": 106925.9700000002
  },
  {
    "name": "A receber (futuro)",
    "value": 827446.28
  },
  {
    "name": "A pagar (futuro)",
    "value": 587580.03
  }
];
const COMPOSICAO_DESPESA = [
  {
    "name": "Compra de matéria-prima",
    "value": 830990.270000001,
    "color": "#2dd4bf"
  },
  {
    "name": "Compra de mercadorias",
    "value": 86183.81,
    "color": "#22c55e"
  },
  {
    "name": "Despesas com ADS",
    "value": 80787.68000000002,
    "color": "#a78bfa"
  },
  {
    "name": "Salários e encargos",
    "value": 80445.56000000001,
    "color": "#f59e0b"
  },
  {
    "name": "Pagamento de empréstimo",
    "value": 69359.42,
    "color": "#ef4444"
  },
  {
    "name": "Compra de insumos para expedição",
    "value": 65124.58,
    "color": "#6b7686"
  }
];
const CONTAS = [
  {
    "slug": "01_sicredi",
    "label": "01 - SICREDI",
    "receita": 1647225.0899999999,
    "despesa": 1427360.9400000004,
    "count": 1428,
    "liquido": 219864.14999999944,
    "margem": 13.34754741988537
  },
  {
    "slug": "02_bradesco",
    "label": "02 - BRADESCO",
    "receita": 0,
    "despesa": 194.82000000000002,
    "count": 5,
    "liquido": -194.82000000000002,
    "margem": 0
  },
  {
    "slug": "03_inter",
    "label": "03 - INTER",
    "receita": 7000,
    "despesa": 123005.98999999999,
    "count": 163,
    "liquido": -116005.98999999999,
    "margem": -1657.2284285714286
  },
  {
    "slug": "caixa_dinheiro",
    "label": "CAIXA - DINHEIRO",
    "receita": 11691,
    "despesa": 10700,
    "count": 42,
    "liquido": 991,
    "margem": 8.476605936190232
  },
  {
    "slug": "cdb_inter",
    "label": "CDB - INTER",
    "receita": 478.58,
    "despesa": 0,
    "count": 8,
    "liquido": 478.58,
    "margem": 100
  },
  {
    "slug": "cdb_mercado_pago_finame",
    "label": "CDB - MERCADO PAGO - FINAME",
    "receita": 1622.76,
    "despesa": 0,
    "count": 5,
    "liquido": 1622.76,
    "margem": 100
  },
  {
    "slug": "cdb_mercado_pago_reten_o",
    "label": "CDB - MERCADO PAGO - RETENÇÃO",
    "receita": 170.29,
    "despesa": 0,
    "count": 3,
    "liquido": 170.29,
    "margem": 100
  }
];
const CONTAS_BANCARIAS = [];
const DRE_INDICATORS = {
  "receitas_operacionais": 1555916.0899999992,
  "custos_operacionais": 1049117.7100000011,
  "margem_contribuicao": 506798.379999998,
  "margem_contribuicao_pct": 32.57234649459781,
  "despesas_operacionais": 397126.49999999953,
  "resultado_operacional": 109671.87999999849,
  "resultado_operacional_pct": 7.048701450217573,
  "investimento": -43386.49,
  "financiamento": 40640.58,
  "variacao_caixa": 106925.9699999985
};
const DRE_MONTHLY = [
  {
    "receita": 124722.78,
    "custo": -86588.45,
    "despesa": -27570.100000000002,
    "investimento": -3545.23,
    "financiamento": 0
  },
  {
    "receita": 196137.76,
    "custo": -192278.68000000002,
    "despesa": -70251.59999999999,
    "investimento": -6606.289999999999,
    "financiamento": 110000
  },
  {
    "receita": 252929.38999999996,
    "custo": -119709.73000000001,
    "despesa": -55135.76,
    "investimento": -11231.29,
    "financiamento": -35498.75
  },
  {
    "receita": 234557.95,
    "custo": -206110.92999999996,
    "despesa": -71009.98000000001,
    "investimento": -819.25,
    "financiamento": -4025.11
  },
  {
    "receita": 278922.97999999986,
    "custo": -173926.37,
    "despesa": -65792.56000000001,
    "investimento": -11840.79,
    "financiamento": -3988.23
  },
  {
    "receita": 322418.79,
    "custo": -203755.52000000005,
    "despesa": -76207.40000000002,
    "investimento": -6994.06,
    "financiamento": -25847.33
  },
  {
    "receita": 146226.44,
    "custo": -66748.03,
    "despesa": -31159.100000000002,
    "investimento": -2349.58,
    "financiamento": 0
  },
  {
    "receita": 0,
    "custo": 0,
    "despesa": 0,
    "investimento": 0,
    "financiamento": 0
  },
  {
    "receita": 0,
    "custo": 0,
    "despesa": 0,
    "investimento": 0,
    "financiamento": 0
  },
  {
    "receita": 0,
    "custo": 0,
    "despesa": 0,
    "investimento": 0,
    "financiamento": 0
  },
  {
    "receita": 0,
    "custo": 0,
    "despesa": 0,
    "investimento": 0,
    "financiamento": 0
  },
  {
    "receita": 0,
    "custo": 0,
    "despesa": 0,
    "investimento": 0,
    "financiamento": 0
  }
];

const SEGMENTS = {
  "realizado": {
    "MONTH_DATA": [
      {
        "m": "janeiro",
        "receita": 124919.87999999999,
        "despesa": 117900.88000000002
      },
      {
        "m": "fevereiro",
        "receita": 306524.62,
        "despesa": 269523.42999999993
      },
      {
        "m": "março",
        "receita": 253411.10999999996,
        "despesa": 222057.24999999997
      },
      {
        "m": "abril",
        "receita": 234936.46000000002,
        "despesa": 282343.77999999997
      },
      {
        "m": "maio",
        "receita": 279286.37999999983,
        "despesa": 255911.34999999992
      },
      {
        "m": "junho",
        "receita": 322882.83,
        "despesa": 313268.35000000003
      },
      {
        "m": "julho",
        "receita": 146226.44,
        "despesa": 100256.71
      },
      {
        "m": "agosto",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "setembro",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "outubro",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "novembro",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "dezembro",
        "receita": 0,
        "despesa": 0
      }
    ],
    "RECEITA_CATEGORIAS": [
      {
        "name": "Repasse de vendas",
        "value": 1502860.109999999,
        "clientes": 5
      },
      {
        "name": "Obtenção de empréstimo",
        "value": 110000,
        "clientes": 1
      },
      {
        "name": "Outras receitas (Não considerar DRE)",
        "value": 28978.820000000003,
        "clientes": 19
      },
      {
        "name": "Receita com vendas",
        "value": 23891.479999999992,
        "clientes": 7
      },
      {
        "name": "Rendimento de investimentos",
        "value": 2271.63,
        "clientes": 2
      },
      {
        "name": "Outras receitas",
        "value": 121.25,
        "clientes": 2
      },
      {
        "name": "Receita por troca/adição de produtos em pedido",
        "value": 64.43,
        "clientes": 1
      }
    ],
    "DESPESA_CATEGORIAS": [
      {
        "name": "Compra de matéria-prima",
        "value": 830990.270000001,
        "fornecedores": 20
      },
      {
        "name": "Compra de mercadorias",
        "value": 86183.81,
        "fornecedores": 4
      },
      {
        "name": "Despesas com ADS",
        "value": 80787.68000000002,
        "fornecedores": 2
      },
      {
        "name": "Salários e encargos",
        "value": 80445.56000000001,
        "fornecedores": 11
      },
      {
        "name": "Pagamento de empréstimo",
        "value": 69359.42,
        "fornecedores": 1
      },
      {
        "name": "Compra de insumos para expedição",
        "value": 65124.58,
        "fornecedores": 12
      },
      {
        "name": "Despesas com outros serviços contratados",
        "value": 50762.200000000004,
        "fornecedores": 16
      },
      {
        "name": "Impostos sobre receita",
        "value": 46004.850000000006,
        "fornecedores": 1
      },
      {
        "name": "Compra de ativo imobilizado",
        "value": 45538.12,
        "fornecedores": 12
      },
      {
        "name": "Frete para compra de material",
        "value": 36957.30999999999,
        "fornecedores": 15
      },
      {
        "name": "Outras despesas (Não considerar DRE)",
        "value": 27157.68,
        "fornecedores": 18
      },
      {
        "name": "Despesas administrativas",
        "value": 26112.639999999996,
        "fornecedores": 19
      },
      {
        "name": "Despesas com aluguéis para uso",
        "value": 17500,
        "fornecedores": 2
      },
      {
        "name": "Despesas com materiais de consumo",
        "value": 10774.779999999997,
        "fornecedores": 10
      },
      {
        "name": "Serviços de contabilidade",
        "value": 10026,
        "fornecedores": 2
      },
      {
        "name": "Custo com horas extras setor de produção",
        "value": 8757.61,
        "fornecedores": 12
      },
      {
        "name": "Serviços de sistema de gestão",
        "value": 8435.72,
        "fornecedores": 6
      },
      {
        "name": "Despesas com frete para devolução e reenvio",
        "value": 6957.58,
        "fornecedores": 1
      },
      {
        "name": "Compra de insumos para produção",
        "value": 6638.040000000001,
        "fornecedores": 6
      },
      {
        "name": "Vale-Refeição (VR)",
        "value": 6381.159999999999,
        "fornecedores": 11
      },
      {
        "name": "Impostos e Taxas",
        "value": 5750.240000000001,
        "fornecedores": 2
      },
      {
        "name": "Despesa com materiais de uso e consumo operacional",
        "value": 5418.55,
        "fornecedores": 4
      },
      {
        "name": "Serviços contratados para marketing",
        "value": 4547.759999999999,
        "fornecedores": 2
      },
      {
        "name": "Luz, água e outros",
        "value": 3966.79,
        "fornecedores": 3
      },
      {
        "name": "Comissões",
        "value": 3052.4300000000003,
        "fornecedores": 2
      },
      {
        "name": "Despesas com alimentação",
        "value": 3031.83,
        "fornecedores": 7
      },
      {
        "name": "Despesa com férias de funcionário",
        "value": 2669.29,
        "fornecedores": 1
      },
      {
        "name": "Despesas com viagens",
        "value": 2530.5800000000004,
        "fornecedores": 12
      },
      {
        "name": "Manutenção predial e benfeitorias",
        "value": 2070.5,
        "fornecedores": 5
      },
      {
        "name": "Despesas com benefícios aos sócios e diretores",
        "value": 2000,
        "fornecedores": 2
      },
      {
        "name": "Outros gastos com publicidade",
        "value": 1555.99,
        "fornecedores": 1
      },
      {
        "name": "Vestuário de trabalho",
        "value": 1467,
        "fornecedores": 1
      },
      {
        "name": "Bonificações, Brindes e Festividades",
        "value": 650,
        "fornecedores": 5
      },
      {
        "name": "Outras despesas",
        "value": 500,
        "fornecedores": 3
      },
      {
        "name": "Frete para compra de material (Não considerar DRE)",
        "value": 419.24,
        "fornecedores": 2
      },
      {
        "name": "Bens de consumo com publicidade",
        "value": 262.40000000000003,
        "fornecedores": 2
      },
      {
        "name": "Taxas e Encargos Bancários",
        "value": 194.82000000000002,
        "fornecedores": 1
      },
      {
        "name": "Direitos a receber",
        "value": 120,
        "fornecedores": 1
      },
      {
        "name": "Reembolsos por fora de marketplaces",
        "value": 94.9,
        "fornecedores": 1
      },
      {
        "name": "Juros e Multas",
        "value": 64.42,
        "fornecedores": 1
      }
    ],
    "RECEITA_CLIENTES": [
      {
        "name": "SHOPEE",
        "value": 939565.1400000001
      },
      {
        "name": "SHEIN",
        "value": 234244.7700000001
      },
      {
        "name": "MERCADO LIVRE",
        "value": 151700
      },
      {
        "name": "ORNATA DOMUS COMPANY LTDA",
        "value": 136216.27000000002
      },
      {
        "name": "TIKTOK",
        "value": 120582.76
      },
      {
        "name": "AMAZON",
        "value": 56767.439999999995
      },
      {
        "name": "VENDA FÍSICA",
        "value": 5420.100000000002
      },
      {
        "name": "SAMUEL ANTONIO DE SOUZA MARTINS",
        "value": 4550
      },
      {
        "name": "JOAO ANTONIO DA SILVA DOS SANTOS",
        "value": 3000
      },
      {
        "name": "MARIA LAURA DE MELLO LINO",
        "value": 2176.54
      },
      {
        "name": "VITORIA LEAO DE LIMA",
        "value": 1800
      },
      {
        "name": "MERCADO PAGO",
        "value": 1793.0499999999997
      }
    ],
    "DESPESA_FORNECEDORES": [
      {
        "name": "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        "value": 282007.92
      },
      {
        "name": "ORNATA DOMUS COMPANY LTDA",
        "value": 149145.87000000002
      },
      {
        "name": "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        "value": 121625
      },
      {
        "name": "SYMRISE AROMAS E FRAGRANCIAS LTDA",
        "value": 80400.46
      },
      {
        "name": "SHOPEE",
        "value": 73481.41
      },
      {
        "name": "CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA",
        "value": 73052.54000000001
      },
      {
        "name": "FORMULARIOS COVOLAN LTDA.",
        "value": 66150
      },
      {
        "name": "EMMILY REGINA COSMO BETARELLO - FLORAE",
        "value": 59554
      },
      {
        "name": "LEADPAK SOLUCOES DE FORNECIMENTO LTDA",
        "value": 56918.310000000005
      },
      {
        "name": "SIMPLES NACIONAL",
        "value": 46004.850000000006
      },
      {
        "name": "PRIME BOX EMBALAGENS PAPELAO LTDA",
        "value": 44431.69
      },
      {
        "name": "SMART PRODUTOS QUIMICOS LTDA",
        "value": 43094.159999999996
      }
    ],
    "EXTRATO": [
      [
        "14/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        5752.45,
        "PAGO"
      ],
      [
        "14/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        16109.76,
        "PAGO"
      ],
      [
        "14/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        3290.42,
        "PAGO"
      ],
      [
        "14/07/2026",
        "Operações",
        "Frete para compra de material (Não considerar DRE)",
        "DARBI RINTON ALVES DO NASCIMENTO",
        -110,
        "PAGO"
      ],
      [
        "14/07/2026",
        "Operações",
        "Frete para compra de material (Não considerar DRE)",
        "JOAO EDUARDO GONCALVES NOGUEIRA",
        -209.24,
        "PAGO"
      ],
      [
        "14/07/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "TAMBASA - TECIDOS E ARMARINHOS MIGUEL BARTOLOMEU S/A",
        -183.12,
        "PAGO"
      ],
      [
        "14/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA",
        -2125,
        "PAGO"
      ],
      [
        "14/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA",
        -3598.9,
        "PAGO"
      ],
      [
        "14/07/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "TAMBASA - TECIDOS E ARMARINHOS MIGUEL BARTOLOMEU S/A",
        -564.32,
        "PAGO"
      ],
      [
        "14/07/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "JOAO EDUARDO GONCALVES NOGUEIRA",
        -200,
        "PAGO"
      ],
      [
        "14/07/2026",
        "Despesas administrativas",
        "Despesas com alimentação",
        "JOAO EDUARDO GONCALVES NOGUEIRA",
        -45.56,
        "PAGO"
      ],
      [
        "13/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        15.42,
        "PAGO"
      ],
      [
        "13/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        158.91,
        "PAGO"
      ],
      [
        "13/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        6745.64,
        "PAGO"
      ],
      [
        "13/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        4267.53,
        "PAGO"
      ],
      [
        "13/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        3371.22,
        "PAGO"
      ],
      [
        "13/07/2026",
        "Operações",
        "Frete para compra de material",
        "CAMILA OLIMPIO CARMONA",
        -120,
        "PAGO"
      ],
      [
        "13/07/2026",
        "Operações",
        "Frete para compra de material (Não considerar DRE)",
        "DARBI RINTON ALVES DO NASCIMENTO",
        -100,
        "PAGO"
      ],
      [
        "13/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "ELYPLAST RIO PRETO LTDA",
        -1979,
        "PAGO"
      ],
      [
        "13/07/2026",
        "Operações",
        "Compra de insumos para expedição",
        "VALDERI FERREIRA BARBOSA JUNIOR - IMPAKTO VISUAL",
        -417.4,
        "PAGO"
      ],
      [
        "12/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        3852,
        "PAGO"
      ],
      [
        "12/07/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "LINKTREE",
        -42,
        "PAGO"
      ],
      [
        "12/07/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "LINKTREE",
        -1.47,
        "PAGO"
      ],
      [
        "12/07/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "LINKTREE",
        -1.47,
        "PAGO"
      ],
      [
        "12/07/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "LINKTREE",
        -42,
        "PAGO"
      ],
      [
        "12/07/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.91,
        "PAGO"
      ],
      [
        "12/07/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "TINY ERP",
        -362.28,
        "PAGO"
      ],
      [
        "12/07/2026",
        "Despesas administrativas",
        "Despesas administrativas",
        "CLARO S.A.",
        -30,
        "PAGO"
      ],
      [
        "12/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA",
        -973.35,
        "PAGO"
      ],
      [
        "12/07/2026",
        "Marketing e publicidade",
        "Despesas com ADS",
        "BR TIKTOK SHOP BRASIL LTDA",
        -1000,
        "PAGO"
      ],
      [
        "12/07/2026",
        "Marketing e publicidade",
        "Despesas com ADS",
        "BR TIKTOK SHOP BRASIL LTDA",
        -622.35,
        "PAGO"
      ],
      [
        "12/07/2026",
        "Marketing e publicidade",
        "Despesas com ADS",
        "BR TIKTOK SHOP BRASIL LTDA",
        -314.74,
        "PAGO"
      ],
      [
        "12/07/2026",
        "Marketing e publicidade",
        "Despesas com ADS",
        "BR TIKTOK SHOP BRASIL LTDA",
        -288.71,
        "PAGO"
      ],
      [
        "12/07/2026",
        "Marketing e publicidade",
        "Despesas com ADS",
        "SHOPEE",
        -500,
        "PAGO"
      ],
      [
        "12/07/2026",
        "Marketing e publicidade",
        "Despesas com ADS",
        "BR TIKTOK SHOP BRASIL LTDA",
        -532.88,
        "PAGO"
      ],
      [
        "12/07/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "MERCADO LIVRE",
        -9.9,
        "PAGO"
      ],
      [
        "12/07/2026",
        "Operações",
        "Compra de insumos para produção",
        "TIQUETA MATERIAL IMPRESSO LTDA",
        -672,
        "PAGO"
      ],
      [
        "11/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        6215.68,
        "PAGO"
      ],
      [
        "11/07/2026",
        "Operações",
        "Frete para compra de material",
        "CINTIA FERNANDA ALVES LIMA",
        -150,
        "PAGO"
      ],
      [
        "11/07/2026",
        "Operações",
        "Compra de insumos para expedição",
        "PRIME BOX EMBALAGENS PAPELAO LTDA",
        -2071.39,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        10000,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1543.92,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        9458.88,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "MERCADO LIVRE",
        -153.56,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "MERCADO LIVRE",
        -249,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "MERCADO LIVRE",
        -193,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)",
        -100,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)",
        -7.5,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "MERCADO LIVRE",
        -104.5,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Despesas com aluguéis",
        "Despesas com aluguéis para uso",
        "PAULO CESAR LOPES (ROPE)",
        -2500,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)",
        -242.8,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "MERCADO LIVRE",
        -123.27,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "MERCADO LIVRE",
        -169.93,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "MERCADO LIVRE",
        -1688.14,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -8422.56,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -8418.68,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Despesas com serviços",
        "Serviços de contabilidade",
        "GUILHERME TORCHETTI LOUREIRO DA SILVA",
        -1000,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Compra de insumos para expedição",
        "MERCADO LIVRE",
        -7.43,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "MERCADO LIVRE",
        -383,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "MERCADO LIVRE",
        -472.26,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ESCOBAR & CORREA LTDA - ESCOSEG",
        -150,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "CRISTIANE SANCHES ROCAILKS",
        -150,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Compra de insumos para produção",
        "MERCADO LIVRE",
        -142.5,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Despesas operacionais",
        "Luz, água e outros",
        "MAYARA B. G. FERNANDES - FTI NET",
        -69,
        "PAGO"
      ],
      [
        "09/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        3506.04,
        "PAGO"
      ],
      [
        "09/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "LEADPAK SOLUCOES DE FORNECIMENTO LTDA",
        -1596.94,
        "PAGO"
      ],
      [
        "08/07/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        20,
        "PAGO"
      ],
      [
        "08/07/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        16,
        "PAGO"
      ],
      [
        "08/07/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        16,
        "PAGO"
      ],
      [
        "08/07/2026",
        "Operações",
        "Outras receitas (Não considerar DRE)",
        "SAMUEL ANTONIO DE SOUZA MARTINS",
        350,
        "PAGO"
      ],
      [
        "08/07/2026",
        "Operações",
        "Outras receitas (Não considerar DRE)",
        "JOSÉ AUGUSTO VIEIRA DO LIVRAMENTO",
        100,
        "PAGO"
      ],
      [
        "08/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        5117.21,
        "PAGO"
      ],
      [
        "08/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2471.79,
        "PAGO"
      ],
      [
        "08/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "SMART PRODUTOS QUIMICOS LTDA",
        -6337.31,
        "PAGO"
      ],
      [
        "08/07/2026",
        "Despesas não operacionais",
        "Outras despesas (Não considerar DRE)",
        "JOSE AUGUSTO VIEIRA DO LIVRAMENTO",
        -100,
        "PAGO"
      ],
      [
        "08/07/2026",
        "Despesas não operacionais",
        "Outras despesas (Não considerar DRE)",
        "SAMUEL ANTONIO DE SOUZA MARTINS",
        -350,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1698.86,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        3419.35,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        12874.49,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        1289.84,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "UPSELLER TECHNOLOGY LTDA",
        -270,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SAMUEL ANTONIO DE SOUZA MARTINS",
        -149,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas operacionais",
        "Reembolsos por fora de marketplaces",
        "REEMBOLSOS",
        -21,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "SUPERMERCADO SÃO LUIS",
        -189.84,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA",
        -2125,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA",
        -3598.9,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Operações",
        "Compra de insumos para expedição",
        "VALDERI FERREIRA BARBOSA JUNIOR - IMPAKTO VISUAL",
        -292,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas administrativas",
        "Despesas com alimentação",
        "MARLENE DE SOUZA SILVA LTDA - PADARIA NOVA OPÇÃO",
        -644,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Operações",
        "Outras receitas (Não considerar DRE)",
        "KARINA DE LIMA TENORIO",
        100,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4264.77,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2697.46,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        102,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        64.19,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        3758.79,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas administrativas",
        "Despesas com benefícios aos sócios e diretores",
        "JOAO EDUARDO GONCALVES NOGUEIRA",
        -200,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas administrativas",
        "Despesas com benefícios aos sócios e diretores",
        "SAMUEL ANTONIO DE SOUZA MARTINS",
        -200,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Operações",
        "Custo com horas extras setor de produção",
        "VITORIA CRISTINA TANGODA MAIA",
        -137.73,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Operações",
        "Custo com horas extras setor de produção",
        "RAFAEL DOS SANTOS PILIELO",
        -50.54,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Operações",
        "Custo com horas extras setor de produção",
        "ISABELA TENORIO BARONE",
        -84.32,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Operações",
        "Custo com horas extras setor de produção",
        "KARINA DE LIMA TENORIO",
        -35.73,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Operações",
        "Custo com horas extras setor de produção",
        "LEANDRO MARTINS BELCHIOR DA SILVA",
        -252.61,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Operações",
        "Custo com horas extras setor de produção",
        "POLYANA CECILIA ALMEIDA FERREIRA",
        -79.93,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Operações",
        "Custo com horas extras setor de produção",
        "AMANDA LOPES PAIS",
        -107.45,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Operações",
        "Custo com horas extras setor de produção",
        "DANIELLY DE SOUSA SILVA",
        -155.18,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "ISABELA TENORIO BARONE",
        -150,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "LEANDRO MARTINS BELCHIOR DA SILVA",
        -150,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "AMANDA LOPES PAIS",
        -150,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "VITORIA CRISTINA TANGODA MAIA",
        -150,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "RAFAEL DOS SANTOS PILIELO",
        -150,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "MARIA LAURA DE MELLO LINO",
        -150,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "KARINA DE LIMA TENORIO",
        -150,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "DANIELLY DE SOUSA SILVA",
        -150,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "POLYANA CECILIA ALMEIDA FERREIRA",
        -150,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Operações",
        "Direitos a receber",
        "SICREDI",
        -30,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "LEANDRO MARTINS BELCHIOR DA SILVA",
        -1947.15,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "KARINA DE LIMA TENORIO",
        -1897.56,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "VITORIA CRISTINA TANGODA MAIA",
        -1643.56,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "AMANDA LOPES PAIS",
        -1691.37,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "POLYANA CECILIA ALMEIDA FERREIRA",
        -2319.71,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "ISABELA TENORIO BARONE",
        -1702.1,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "DANIELLY DE SOUSA SILVA",
        -1638.36,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "RAFAEL DOS SANTOS PILIELO",
        -2316.24,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "MARIA LAURA DE MELLO LINO",
        -2008.12,
        "PAGO"
      ],
      [
        "05/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2253.46,
        "PAGO"
      ],
      [
        "04/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        3513.91,
        "PAGO"
      ],
      [
        "03/07/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        44,
        "PAGO"
      ],
      [
        "03/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1310.33,
        "PAGO"
      ],
      [
        "03/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        6228.51,
        "PAGO"
      ],
      [
        "03/07/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        73.85,
        "PAGO"
      ],
      [
        "03/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        3100.01,
        "PAGO"
      ],
      [
        "03/07/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        4002.01,
        "PAGO"
      ],
      [
        "03/07/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        202.9,
        "PAGO"
      ],
      [
        "03/07/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        2105.39,
        "PAGO"
      ],
      [
        "03/07/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "CARRAPICHO - SERRALHEIRO",
        -710,
        "PAGO"
      ],
      [
        "03/07/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "SUPERMERCADO SÃO LUIS",
        -40.47,
        "PAGO"
      ],
      [
        "03/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -8422.56,
        "PAGO"
      ],
      [
        "03/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -8418.68,
        "PAGO"
      ],
      [
        "03/07/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "CRISTIANE SANCHES ROCAILKS",
        -150,
        "PAGO"
      ],
      [
        "02/07/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        30,
        "PAGO"
      ],
      [
        "02/07/2026",
        "Operações",
        "Outras receitas (Não considerar DRE)",
        "VITORIA LEAO DE LIMA",
        800,
        "PAGO"
      ],
      [
        "02/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1582.06,
        "PAGO"
      ],
      [
        "02/07/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        3434.57,
        "PAGO"
      ],
      [
        "02/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "ALCOOL FERREIRA - CNA S.A.",
        -3019.24,
        "PAGO"
      ],
      [
        "02/07/2026",
        "Despesas não operacionais",
        "Outras despesas (Não considerar DRE)",
        "VITORIA LEAO DE LIMA",
        -800,
        "PAGO"
      ],
      [
        "01/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        3755.84,
        "PAGO"
      ],
      [
        "01/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1140.98,
        "PAGO"
      ],
      [
        "01/07/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "CLIMAK INDUSTRIA E COMERCIO DE MAQUINAS E EQUIPAMENTOS LTDA - EDERMAK",
        -900,
        "PAGO"
      ],
      [
        "01/07/2026",
        "Despesas operacionais",
        "Luz, água e outros",
        "COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP",
        -234.99,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Outras receitas (Não considerar DRE)",
        "THALIS HENRIQUE CLEMENTE DE SOUZA",
        50,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Outras receitas (Não considerar DRE)",
        "JOAO ANTONIO DA SILVA DOS SANTOS",
        1000,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Rendimento de investimentos",
        "INTER DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA",
        6.9,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Rendimento de investimentos",
        "MERCADO PAGO",
        124.84,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Rendimento de investimentos",
        "MERCADO PAGO",
        332.3,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        3268.77,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        14146.65,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        1629.23,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1798.74,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        5900,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Frete para compra de material",
        "TATIANE DE SOUZA BARONI - TRANSPORTES",
        -474.09,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Frete para compra de material",
        "ORNATA DOMUS COMPANY LTDA",
        -180,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Frete para compra de material",
        "DARBI RINTON ALVES DO NASCIMENTO",
        -180,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Frete para compra de material",
        "DARBI RINTON ALVES DO NASCIMENTO",
        -180,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Frete para compra de material",
        "DARBI RINTON ALVES DO NASCIMENTO",
        -370,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -20161.7,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -1678.5,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Compra de insumos para expedição",
        "ORNATA DOMUS COMPANY LTDA",
        -523.5,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Despesas Financeiras",
        "Impostos e Taxas",
        "SECRETARIA DA FAZENDA E PLANEJAMENTO",
        -702.42,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ROSANGELA CARDOSO MATEUS",
        -110,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ROSANGELA CARDOSO MATEUS",
        -140,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Despesas não operacionais",
        "Outras despesas (Não considerar DRE)",
        "JOAO ANTONIO DA SILVA DOS SANTOS",
        -1000,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Despesas não operacionais",
        "Outras despesas (Não considerar DRE)",
        "THALIS HENRIQUE CLEMENTE DE SOUZA",
        -50,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Despesas com colaboradores",
        "Bonificações, Brindes e Festividades",
        "POLYANA CECILIA ALMEIDA FERREIRA",
        -200,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Despesas com colaboradores",
        "Bonificações, Brindes e Festividades",
        "DANIELLY DE SOUSA SILVA",
        -200,
        "PAGO"
      ],
      [
        "29/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        156.01,
        "PAGO"
      ],
      [
        "29/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        71.62,
        "PAGO"
      ],
      [
        "29/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        5552.07,
        "PAGO"
      ],
      [
        "29/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2795.6,
        "PAGO"
      ],
      [
        "29/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        5147,
        "PAGO"
      ],
      [
        "29/06/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "NIBO SOFTWARES E CURSOS LTDA.",
        -479,
        "PAGO"
      ],
      [
        "29/06/2026",
        "Operações",
        "Compra de insumos para expedição",
        "PRIME BOX EMBALAGENS PAPELAO LTDA",
        -2600.48,
        "PAGO"
      ],
      [
        "29/06/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "MOTTA INFORMÁTICA",
        -953.71,
        "PAGO"
      ],
      [
        "28/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2417.79,
        "PAGO"
      ],
      [
        "27/06/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        50,
        "PAGO"
      ],
      [
        "27/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2044.52,
        "PAGO"
      ],
      [
        "26/06/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        18000,
        "PAGO"
      ],
      [
        "26/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4306.38,
        "PAGO"
      ],
      [
        "26/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        914.81,
        "PAGO"
      ],
      [
        "26/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -8422.56,
        "PAGO"
      ],
      [
        "26/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -8418.67,
        "PAGO"
      ],
      [
        "26/06/2026",
        "Operações",
        "Compra de insumos para expedição",
        "PRIME BOX EMBALAGENS PAPELAO LTDA",
        -2071.39,
        "PAGO"
      ],
      [
        "26/06/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "ORNATA DOMUS COMPANY LTDA",
        -2000,
        "PAGO"
      ],
      [
        "26/06/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "ORNATA DOMUS COMPANY LTDA",
        -2069.87,
        "PAGO"
      ],
      [
        "25/06/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        85,
        "PAGO"
      ],
      [
        "25/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1665.01,
        "PAGO"
      ],
      [
        "25/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4914.46,
        "PAGO"
      ],
      [
        "25/06/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "NASSAR FERREIRA - HOPÇÃO",
        -22.05,
        "PAGO"
      ],
      [
        "25/06/2026",
        "Despesas administrativas",
        "Despesas administrativas",
        "ANVISA - AGENCIA NACIONAL DE VIGILANCIA SANITARIA",
        -1171.44,
        "PAGO"
      ],
      [
        "25/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "ALCOOL FERREIRA - CNA S.A.",
        -3019.24,
        "PAGO"
      ],
      [
        "25/06/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "MARRI CONSULTORIA EMPRESARIAL LTDA",
        -2431.5,
        "PAGO"
      ],
      [
        "25/06/2026",
        "Despesas com colaboradores",
        "Bonificações, Brindes e Festividades",
        "AUTO POSTO CAÇULINHA",
        -15,
        "PAGO"
      ]
    ],
    "EXTRATO_RECEITAS": [
      [
        "14/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        5752.45,
        "PAGO"
      ],
      [
        "14/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        16109.76,
        "PAGO"
      ],
      [
        "14/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        3290.42,
        "PAGO"
      ],
      [
        "13/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        15.42,
        "PAGO"
      ],
      [
        "13/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        158.91,
        "PAGO"
      ],
      [
        "13/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        6745.64,
        "PAGO"
      ],
      [
        "13/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        4267.53,
        "PAGO"
      ],
      [
        "13/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        3371.22,
        "PAGO"
      ],
      [
        "12/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        3852,
        "PAGO"
      ],
      [
        "11/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        6215.68,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        10000,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1543.92,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        9458.88,
        "PAGO"
      ],
      [
        "09/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        3506.04,
        "PAGO"
      ],
      [
        "08/07/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        20,
        "PAGO"
      ],
      [
        "08/07/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        16,
        "PAGO"
      ],
      [
        "08/07/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        16,
        "PAGO"
      ],
      [
        "08/07/2026",
        "Operações",
        "Outras receitas (Não considerar DRE)",
        "SAMUEL ANTONIO DE SOUZA MARTINS",
        350,
        "PAGO"
      ],
      [
        "08/07/2026",
        "Operações",
        "Outras receitas (Não considerar DRE)",
        "JOSÉ AUGUSTO VIEIRA DO LIVRAMENTO",
        100,
        "PAGO"
      ],
      [
        "08/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        5117.21,
        "PAGO"
      ],
      [
        "08/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2471.79,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1698.86,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        3419.35,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        12874.49,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        1289.84,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Operações",
        "Outras receitas (Não considerar DRE)",
        "KARINA DE LIMA TENORIO",
        100,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4264.77,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2697.46,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        102,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        64.19,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        3758.79,
        "PAGO"
      ],
      [
        "05/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2253.46,
        "PAGO"
      ],
      [
        "04/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        3513.91,
        "PAGO"
      ],
      [
        "03/07/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        44,
        "PAGO"
      ],
      [
        "03/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1310.33,
        "PAGO"
      ],
      [
        "03/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        6228.51,
        "PAGO"
      ],
      [
        "03/07/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        73.85,
        "PAGO"
      ],
      [
        "03/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        3100.01,
        "PAGO"
      ],
      [
        "03/07/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        4002.01,
        "PAGO"
      ],
      [
        "03/07/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        202.9,
        "PAGO"
      ],
      [
        "03/07/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        2105.39,
        "PAGO"
      ],
      [
        "02/07/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        30,
        "PAGO"
      ],
      [
        "02/07/2026",
        "Operações",
        "Outras receitas (Não considerar DRE)",
        "VITORIA LEAO DE LIMA",
        800,
        "PAGO"
      ],
      [
        "02/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1582.06,
        "PAGO"
      ],
      [
        "02/07/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        3434.57,
        "PAGO"
      ],
      [
        "01/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        3755.84,
        "PAGO"
      ],
      [
        "01/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1140.98,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Outras receitas (Não considerar DRE)",
        "THALIS HENRIQUE CLEMENTE DE SOUZA",
        50,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Outras receitas (Não considerar DRE)",
        "JOAO ANTONIO DA SILVA DOS SANTOS",
        1000,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Rendimento de investimentos",
        "INTER DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA",
        6.9,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Rendimento de investimentos",
        "MERCADO PAGO",
        124.84,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Rendimento de investimentos",
        "MERCADO PAGO",
        332.3,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        3268.77,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        14146.65,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        1629.23,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1798.74,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        5900,
        "PAGO"
      ],
      [
        "29/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        156.01,
        "PAGO"
      ],
      [
        "29/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        71.62,
        "PAGO"
      ],
      [
        "29/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        5552.07,
        "PAGO"
      ],
      [
        "29/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2795.6,
        "PAGO"
      ],
      [
        "29/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        5147,
        "PAGO"
      ],
      [
        "28/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2417.79,
        "PAGO"
      ],
      [
        "27/06/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        50,
        "PAGO"
      ],
      [
        "27/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2044.52,
        "PAGO"
      ],
      [
        "26/06/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        18000,
        "PAGO"
      ],
      [
        "26/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4306.38,
        "PAGO"
      ],
      [
        "26/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        914.81,
        "PAGO"
      ],
      [
        "25/06/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        85,
        "PAGO"
      ],
      [
        "25/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1665.01,
        "PAGO"
      ],
      [
        "25/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4914.46,
        "PAGO"
      ],
      [
        "24/06/2026",
        "Operações",
        "Outras receitas (Não considerar DRE)",
        "GOLDEN PLASTIC COMERCIO E SERVICOS LTDA",
        51.2,
        "PAGO"
      ],
      [
        "24/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1389.69,
        "PAGO"
      ],
      [
        "24/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        6930.65,
        "PAGO"
      ],
      [
        "23/06/2026",
        "Operações",
        "Outras receitas (Não considerar DRE)",
        "PEDRO HENRIQUE CUSTODIO MARTINS",
        300,
        "PAGO"
      ],
      [
        "23/06/2026",
        "Operações",
        "Outras receitas (Não considerar DRE)",
        "JOAO ANTONIO DA SILVA DOS SANTOS",
        1000,
        "PAGO"
      ],
      [
        "23/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        2949.49,
        "PAGO"
      ],
      [
        "23/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4989.17,
        "PAGO"
      ],
      [
        "23/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        1800.27,
        "PAGO"
      ],
      [
        "23/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1875.9,
        "PAGO"
      ],
      [
        "22/06/2026",
        "Operações",
        "Outras receitas (Não considerar DRE)",
        "SAMUEL ANTONIO DE SOUZA MARTINS",
        4000,
        "PAGO"
      ],
      [
        "22/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        14411.02,
        "PAGO"
      ],
      [
        "22/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2937.33,
        "PAGO"
      ],
      [
        "22/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        164.47,
        "PAGO"
      ],
      [
        "22/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        258.94,
        "PAGO"
      ],
      [
        "22/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        4592.61,
        "PAGO"
      ],
      [
        "21/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        4190.77,
        "PAGO"
      ],
      [
        "20/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1413.89,
        "PAGO"
      ],
      [
        "20/06/2026",
        "Operações",
        "Receita com vendas",
        "FABRICIA LIMA STORE - LUCAS HENRIQUE DE SOUZA VESTUARIOS",
        1636.37,
        "PAGO"
      ],
      [
        "19/06/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        32,
        "PAGO"
      ],
      [
        "19/06/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        79.6,
        "PAGO"
      ],
      [
        "19/06/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        446.15,
        "PAGO"
      ],
      [
        "19/06/2026",
        "Operações",
        "Outras receitas (Não considerar DRE)",
        "DENILSON GOMES JUNIOR",
        200,
        "PAGO"
      ],
      [
        "19/06/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        3866.78,
        "PAGO"
      ],
      [
        "19/06/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        3432.67,
        "PAGO"
      ],
      [
        "19/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4876.76,
        "PAGO"
      ],
      [
        "19/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1447.05,
        "PAGO"
      ],
      [
        "19/06/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        236.7,
        "PAGO"
      ],
      [
        "19/06/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        236.09,
        "PAGO"
      ],
      [
        "18/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1944.85,
        "PAGO"
      ],
      [
        "18/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        5089.8,
        "PAGO"
      ],
      [
        "18/06/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        3612.06,
        "PAGO"
      ],
      [
        "17/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        5541.37,
        "PAGO"
      ],
      [
        "16/06/2026",
        "Operações",
        "Receita com vendas",
        "ORNATA DOMUS COMPANY LTDA",
        5051.63,
        "PAGO"
      ],
      [
        "16/06/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        414.75,
        "PAGO"
      ],
      [
        "16/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        1827.04,
        "PAGO"
      ],
      [
        "16/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        3260.19,
        "PAGO"
      ],
      [
        "16/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4355.99,
        "PAGO"
      ],
      [
        "16/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1051.46,
        "PAGO"
      ],
      [
        "16/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        877.38,
        "PAGO"
      ],
      [
        "15/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        6371.82,
        "PAGO"
      ],
      [
        "15/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        366.05,
        "PAGO"
      ],
      [
        "15/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        12958.63,
        "PAGO"
      ],
      [
        "15/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1327.44,
        "PAGO"
      ],
      [
        "15/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        187.83,
        "PAGO"
      ],
      [
        "14/06/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        13000,
        "PAGO"
      ],
      [
        "13/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1388.86,
        "PAGO"
      ],
      [
        "13/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1174.08,
        "PAGO"
      ],
      [
        "12/06/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        50,
        "PAGO"
      ],
      [
        "12/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        769.66,
        "PAGO"
      ],
      [
        "12/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        3993.56,
        "PAGO"
      ],
      [
        "11/06/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        62,
        "PAGO"
      ],
      [
        "11/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1231.93,
        "PAGO"
      ],
      [
        "11/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        3524.97,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Outras receitas (Não considerar DRE)",
        "ORNATA DOMUS COMPANY LTDA",
        734,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Outras receitas (Não considerar DRE)",
        "PAULO EDUARDO CUSTODIO MARTINS",
        50,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        3909.33,
        "PAGO"
      ],
      [
        "09/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        1638.92,
        "PAGO"
      ],
      [
        "09/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        327.25,
        "PAGO"
      ],
      [
        "09/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        3128.6,
        "PAGO"
      ],
      [
        "09/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4114.27,
        "PAGO"
      ],
      [
        "08/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        5393.56,
        "PAGO"
      ],
      [
        "08/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        310.17,
        "PAGO"
      ],
      [
        "08/06/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        728.99,
        "PAGO"
      ],
      [
        "08/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        295.74,
        "PAGO"
      ],
      [
        "08/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        580.73,
        "PAGO"
      ],
      [
        "08/06/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        3829.5,
        "PAGO"
      ],
      [
        "08/06/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        1118.86,
        "PAGO"
      ],
      [
        "08/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        11588.88,
        "PAGO"
      ],
      [
        "08/06/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        140.29,
        "PAGO"
      ],
      [
        "08/06/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        56,
        "PAGO"
      ],
      [
        "08/06/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        22,
        "PAGO"
      ],
      [
        "08/06/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        25.9,
        "PAGO"
      ],
      [
        "08/06/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        27,
        "PAGO"
      ],
      [
        "08/06/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        19.8,
        "PAGO"
      ],
      [
        "08/06/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        50,
        "PAGO"
      ],
      [
        "08/06/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        62,
        "PAGO"
      ],
      [
        "08/06/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        151.35,
        "PAGO"
      ],
      [
        "08/06/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        70,
        "PAGO"
      ],
      [
        "07/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1185.82,
        "PAGO"
      ],
      [
        "06/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        866.19,
        "PAGO"
      ],
      [
        "06/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        357.17,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        3301.38,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        3849.99,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        8500,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        666.09,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        2618.25,
        "PAGO"
      ],
      [
        "04/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        882.64,
        "PAGO"
      ],
      [
        "03/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        523.28,
        "PAGO"
      ],
      [
        "03/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        3447.31,
        "PAGO"
      ],
      [
        "02/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        3050.32,
        "PAGO"
      ],
      [
        "02/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        4999.81,
        "PAGO"
      ],
      [
        "02/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4286.96,
        "PAGO"
      ],
      [
        "01/06/2026",
        "Operações",
        "Outras receitas (Não considerar DRE)",
        "DENILSON GOMES JUNIOR",
        250,
        "PAGO"
      ],
      [
        "01/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        169.7,
        "PAGO"
      ],
      [
        "01/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        11641.72,
        "PAGO"
      ],
      [
        "01/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        274.34,
        "PAGO"
      ],
      [
        "01/06/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        359.34,
        "PAGO"
      ],
      [
        "01/06/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        7722.76,
        "PAGO"
      ],
      [
        "31/05/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2145.91,
        "PAGO"
      ],
      [
        "31/05/2026",
        "Operações",
        "Rendimento de investimentos",
        "MERCADO PAGO",
        45.05,
        "PAGO"
      ],
      [
        "31/05/2026",
        "Operações",
        "Rendimento de investimentos",
        "INTER DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA",
        0.04,
        "PAGO"
      ],
      [
        "31/05/2026",
        "Operações",
        "Rendimento de investimentos",
        "MERCADO PAGO",
        318.31,
        "PAGO"
      ],
      [
        "31/05/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        799.24,
        "PAGO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        299.96,
        "PAGO"
      ],
      [
        "29/05/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        11000,
        "PAGO"
      ],
      [
        "29/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        5486.66,
        "PAGO"
      ],
      [
        "29/05/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        602.35,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        19.9,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        256.46,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        3729.57,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        110,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1388.83,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        3588.24,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Operações",
        "Outras receitas (Não considerar DRE)",
        "PEDRO HENRIQUE CUSTODIO MARTINS",
        250,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        2434.18,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        5901.15,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        956.56,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        1385.14,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        632.49,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        95.8,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        183.91,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        195.21,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        3622.59,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        14124.11,
        "PAGO"
      ],
      [
        "24/05/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        865.48,
        "PAGO"
      ],
      [
        "23/05/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        447.26,
        "PAGO"
      ],
      [
        "23/05/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        989.46,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        946.39,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        13000,
        "PAGO"
      ]
    ],
    "EXTRATO_DESPESAS": [
      [
        "14/07/2026",
        "Operações",
        "Frete para compra de material (Não considerar DRE)",
        "DARBI RINTON ALVES DO NASCIMENTO",
        -110,
        "PAGO"
      ],
      [
        "14/07/2026",
        "Operações",
        "Frete para compra de material (Não considerar DRE)",
        "JOAO EDUARDO GONCALVES NOGUEIRA",
        -209.24,
        "PAGO"
      ],
      [
        "14/07/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "TAMBASA - TECIDOS E ARMARINHOS MIGUEL BARTOLOMEU S/A",
        -183.12,
        "PAGO"
      ],
      [
        "14/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA",
        -2125,
        "PAGO"
      ],
      [
        "14/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA",
        -3598.9,
        "PAGO"
      ],
      [
        "14/07/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "TAMBASA - TECIDOS E ARMARINHOS MIGUEL BARTOLOMEU S/A",
        -564.32,
        "PAGO"
      ],
      [
        "14/07/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "JOAO EDUARDO GONCALVES NOGUEIRA",
        -200,
        "PAGO"
      ],
      [
        "14/07/2026",
        "Despesas administrativas",
        "Despesas com alimentação",
        "JOAO EDUARDO GONCALVES NOGUEIRA",
        -45.56,
        "PAGO"
      ],
      [
        "13/07/2026",
        "Operações",
        "Frete para compra de material",
        "CAMILA OLIMPIO CARMONA",
        -120,
        "PAGO"
      ],
      [
        "13/07/2026",
        "Operações",
        "Frete para compra de material (Não considerar DRE)",
        "DARBI RINTON ALVES DO NASCIMENTO",
        -100,
        "PAGO"
      ],
      [
        "13/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "ELYPLAST RIO PRETO LTDA",
        -1979,
        "PAGO"
      ],
      [
        "13/07/2026",
        "Operações",
        "Compra de insumos para expedição",
        "VALDERI FERREIRA BARBOSA JUNIOR - IMPAKTO VISUAL",
        -417.4,
        "PAGO"
      ],
      [
        "12/07/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "LINKTREE",
        -42,
        "PAGO"
      ],
      [
        "12/07/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "LINKTREE",
        -1.47,
        "PAGO"
      ],
      [
        "12/07/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "LINKTREE",
        -1.47,
        "PAGO"
      ],
      [
        "12/07/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "LINKTREE",
        -42,
        "PAGO"
      ],
      [
        "12/07/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.91,
        "PAGO"
      ],
      [
        "12/07/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "TINY ERP",
        -362.28,
        "PAGO"
      ],
      [
        "12/07/2026",
        "Despesas administrativas",
        "Despesas administrativas",
        "CLARO S.A.",
        -30,
        "PAGO"
      ],
      [
        "12/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA",
        -973.35,
        "PAGO"
      ],
      [
        "12/07/2026",
        "Marketing e publicidade",
        "Despesas com ADS",
        "BR TIKTOK SHOP BRASIL LTDA",
        -1000,
        "PAGO"
      ],
      [
        "12/07/2026",
        "Marketing e publicidade",
        "Despesas com ADS",
        "BR TIKTOK SHOP BRASIL LTDA",
        -622.35,
        "PAGO"
      ],
      [
        "12/07/2026",
        "Marketing e publicidade",
        "Despesas com ADS",
        "BR TIKTOK SHOP BRASIL LTDA",
        -314.74,
        "PAGO"
      ],
      [
        "12/07/2026",
        "Marketing e publicidade",
        "Despesas com ADS",
        "BR TIKTOK SHOP BRASIL LTDA",
        -288.71,
        "PAGO"
      ],
      [
        "12/07/2026",
        "Marketing e publicidade",
        "Despesas com ADS",
        "SHOPEE",
        -500,
        "PAGO"
      ],
      [
        "12/07/2026",
        "Marketing e publicidade",
        "Despesas com ADS",
        "BR TIKTOK SHOP BRASIL LTDA",
        -532.88,
        "PAGO"
      ],
      [
        "12/07/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "MERCADO LIVRE",
        -9.9,
        "PAGO"
      ],
      [
        "12/07/2026",
        "Operações",
        "Compra de insumos para produção",
        "TIQUETA MATERIAL IMPRESSO LTDA",
        -672,
        "PAGO"
      ],
      [
        "11/07/2026",
        "Operações",
        "Frete para compra de material",
        "CINTIA FERNANDA ALVES LIMA",
        -150,
        "PAGO"
      ],
      [
        "11/07/2026",
        "Operações",
        "Compra de insumos para expedição",
        "PRIME BOX EMBALAGENS PAPELAO LTDA",
        -2071.39,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "MERCADO LIVRE",
        -153.56,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "MERCADO LIVRE",
        -249,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "MERCADO LIVRE",
        -193,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)",
        -100,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)",
        -7.5,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "MERCADO LIVRE",
        -104.5,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Despesas com aluguéis",
        "Despesas com aluguéis para uso",
        "PAULO CESAR LOPES (ROPE)",
        -2500,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)",
        -242.8,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "MERCADO LIVRE",
        -123.27,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "MERCADO LIVRE",
        -169.93,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "MERCADO LIVRE",
        -1688.14,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -8422.56,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -8418.68,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Despesas com serviços",
        "Serviços de contabilidade",
        "GUILHERME TORCHETTI LOUREIRO DA SILVA",
        -1000,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Compra de insumos para expedição",
        "MERCADO LIVRE",
        -7.43,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "MERCADO LIVRE",
        -383,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "MERCADO LIVRE",
        -472.26,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ESCOBAR & CORREA LTDA - ESCOSEG",
        -150,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "CRISTIANE SANCHES ROCAILKS",
        -150,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Compra de insumos para produção",
        "MERCADO LIVRE",
        -142.5,
        "PAGO"
      ],
      [
        "10/07/2026",
        "Despesas operacionais",
        "Luz, água e outros",
        "MAYARA B. G. FERNANDES - FTI NET",
        -69,
        "PAGO"
      ],
      [
        "09/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "LEADPAK SOLUCOES DE FORNECIMENTO LTDA",
        -1596.94,
        "PAGO"
      ],
      [
        "08/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "SMART PRODUTOS QUIMICOS LTDA",
        -6337.31,
        "PAGO"
      ],
      [
        "08/07/2026",
        "Despesas não operacionais",
        "Outras despesas (Não considerar DRE)",
        "JOSE AUGUSTO VIEIRA DO LIVRAMENTO",
        -100,
        "PAGO"
      ],
      [
        "08/07/2026",
        "Despesas não operacionais",
        "Outras despesas (Não considerar DRE)",
        "SAMUEL ANTONIO DE SOUZA MARTINS",
        -350,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "UPSELLER TECHNOLOGY LTDA",
        -270,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SAMUEL ANTONIO DE SOUZA MARTINS",
        -149,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas operacionais",
        "Reembolsos por fora de marketplaces",
        "REEMBOLSOS",
        -21,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "SUPERMERCADO SÃO LUIS",
        -189.84,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA",
        -2125,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA",
        -3598.9,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Operações",
        "Compra de insumos para expedição",
        "VALDERI FERREIRA BARBOSA JUNIOR - IMPAKTO VISUAL",
        -292,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas administrativas",
        "Despesas com alimentação",
        "MARLENE DE SOUZA SILVA LTDA - PADARIA NOVA OPÇÃO",
        -644,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas administrativas",
        "Despesas com benefícios aos sócios e diretores",
        "JOAO EDUARDO GONCALVES NOGUEIRA",
        -200,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas administrativas",
        "Despesas com benefícios aos sócios e diretores",
        "SAMUEL ANTONIO DE SOUZA MARTINS",
        -200,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Operações",
        "Custo com horas extras setor de produção",
        "VITORIA CRISTINA TANGODA MAIA",
        -137.73,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Operações",
        "Custo com horas extras setor de produção",
        "RAFAEL DOS SANTOS PILIELO",
        -50.54,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Operações",
        "Custo com horas extras setor de produção",
        "ISABELA TENORIO BARONE",
        -84.32,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Operações",
        "Custo com horas extras setor de produção",
        "KARINA DE LIMA TENORIO",
        -35.73,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Operações",
        "Custo com horas extras setor de produção",
        "LEANDRO MARTINS BELCHIOR DA SILVA",
        -252.61,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Operações",
        "Custo com horas extras setor de produção",
        "POLYANA CECILIA ALMEIDA FERREIRA",
        -79.93,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Operações",
        "Custo com horas extras setor de produção",
        "AMANDA LOPES PAIS",
        -107.45,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Operações",
        "Custo com horas extras setor de produção",
        "DANIELLY DE SOUSA SILVA",
        -155.18,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "ISABELA TENORIO BARONE",
        -150,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "LEANDRO MARTINS BELCHIOR DA SILVA",
        -150,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "AMANDA LOPES PAIS",
        -150,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "VITORIA CRISTINA TANGODA MAIA",
        -150,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "RAFAEL DOS SANTOS PILIELO",
        -150,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "MARIA LAURA DE MELLO LINO",
        -150,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "KARINA DE LIMA TENORIO",
        -150,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "DANIELLY DE SOUSA SILVA",
        -150,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "POLYANA CECILIA ALMEIDA FERREIRA",
        -150,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Operações",
        "Direitos a receber",
        "SICREDI",
        -30,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "LEANDRO MARTINS BELCHIOR DA SILVA",
        -1947.15,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "KARINA DE LIMA TENORIO",
        -1897.56,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "VITORIA CRISTINA TANGODA MAIA",
        -1643.56,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "AMANDA LOPES PAIS",
        -1691.37,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "POLYANA CECILIA ALMEIDA FERREIRA",
        -2319.71,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "ISABELA TENORIO BARONE",
        -1702.1,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "DANIELLY DE SOUSA SILVA",
        -1638.36,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "RAFAEL DOS SANTOS PILIELO",
        -2316.24,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "MARIA LAURA DE MELLO LINO",
        -2008.12,
        "PAGO"
      ],
      [
        "03/07/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "CARRAPICHO - SERRALHEIRO",
        -710,
        "PAGO"
      ],
      [
        "03/07/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "SUPERMERCADO SÃO LUIS",
        -40.47,
        "PAGO"
      ],
      [
        "03/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -8422.56,
        "PAGO"
      ],
      [
        "03/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -8418.68,
        "PAGO"
      ],
      [
        "03/07/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "CRISTIANE SANCHES ROCAILKS",
        -150,
        "PAGO"
      ],
      [
        "02/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "ALCOOL FERREIRA - CNA S.A.",
        -3019.24,
        "PAGO"
      ],
      [
        "02/07/2026",
        "Despesas não operacionais",
        "Outras despesas (Não considerar DRE)",
        "VITORIA LEAO DE LIMA",
        -800,
        "PAGO"
      ],
      [
        "01/07/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "CLIMAK INDUSTRIA E COMERCIO DE MAQUINAS E EQUIPAMENTOS LTDA - EDERMAK",
        -900,
        "PAGO"
      ],
      [
        "01/07/2026",
        "Despesas operacionais",
        "Luz, água e outros",
        "COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP",
        -234.99,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Frete para compra de material",
        "TATIANE DE SOUZA BARONI - TRANSPORTES",
        -474.09,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Frete para compra de material",
        "ORNATA DOMUS COMPANY LTDA",
        -180,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Frete para compra de material",
        "DARBI RINTON ALVES DO NASCIMENTO",
        -180,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Frete para compra de material",
        "DARBI RINTON ALVES DO NASCIMENTO",
        -180,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Frete para compra de material",
        "DARBI RINTON ALVES DO NASCIMENTO",
        -370,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -20161.7,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -1678.5,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Operações",
        "Compra de insumos para expedição",
        "ORNATA DOMUS COMPANY LTDA",
        -523.5,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Despesas Financeiras",
        "Impostos e Taxas",
        "SECRETARIA DA FAZENDA E PLANEJAMENTO",
        -702.42,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ROSANGELA CARDOSO MATEUS",
        -110,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ROSANGELA CARDOSO MATEUS",
        -140,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Despesas não operacionais",
        "Outras despesas (Não considerar DRE)",
        "JOAO ANTONIO DA SILVA DOS SANTOS",
        -1000,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Despesas não operacionais",
        "Outras despesas (Não considerar DRE)",
        "THALIS HENRIQUE CLEMENTE DE SOUZA",
        -50,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Despesas com colaboradores",
        "Bonificações, Brindes e Festividades",
        "POLYANA CECILIA ALMEIDA FERREIRA",
        -200,
        "PAGO"
      ],
      [
        "30/06/2026",
        "Despesas com colaboradores",
        "Bonificações, Brindes e Festividades",
        "DANIELLY DE SOUSA SILVA",
        -200,
        "PAGO"
      ],
      [
        "29/06/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "NIBO SOFTWARES E CURSOS LTDA.",
        -479,
        "PAGO"
      ],
      [
        "29/06/2026",
        "Operações",
        "Compra de insumos para expedição",
        "PRIME BOX EMBALAGENS PAPELAO LTDA",
        -2600.48,
        "PAGO"
      ],
      [
        "29/06/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "MOTTA INFORMÁTICA",
        -953.71,
        "PAGO"
      ],
      [
        "26/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -8422.56,
        "PAGO"
      ],
      [
        "26/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -8418.67,
        "PAGO"
      ],
      [
        "26/06/2026",
        "Operações",
        "Compra de insumos para expedição",
        "PRIME BOX EMBALAGENS PAPELAO LTDA",
        -2071.39,
        "PAGO"
      ],
      [
        "26/06/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "ORNATA DOMUS COMPANY LTDA",
        -2000,
        "PAGO"
      ],
      [
        "26/06/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "ORNATA DOMUS COMPANY LTDA",
        -2069.87,
        "PAGO"
      ],
      [
        "25/06/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "NASSAR FERREIRA - HOPÇÃO",
        -22.05,
        "PAGO"
      ],
      [
        "25/06/2026",
        "Despesas administrativas",
        "Despesas administrativas",
        "ANVISA - AGENCIA NACIONAL DE VIGILANCIA SANITARIA",
        -1171.44,
        "PAGO"
      ],
      [
        "25/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "ALCOOL FERREIRA - CNA S.A.",
        -3019.24,
        "PAGO"
      ],
      [
        "25/06/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "MARRI CONSULTORIA EMPRESARIAL LTDA",
        -2431.5,
        "PAGO"
      ],
      [
        "25/06/2026",
        "Despesas com colaboradores",
        "Bonificações, Brindes e Festividades",
        "AUTO POSTO CAÇULINHA",
        -15,
        "PAGO"
      ],
      [
        "24/06/2026",
        "Operações",
        "Compra de mercadorias",
        "EMMILY REGINA COSMO BETARELLO - FLORAE",
        -5476,
        "PAGO"
      ],
      [
        "24/06/2026",
        "Operações",
        "Frete para compra de material",
        "RICARDO HENRIQUE MIRANDA ZINZA - FRETE",
        -300,
        "PAGO"
      ],
      [
        "24/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "LEADPAK SOLUCOES DE FORNECIMENTO LTDA",
        -2873.79,
        "PAGO"
      ],
      [
        "24/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA",
        -3615,
        "PAGO"
      ],
      [
        "24/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -5250,
        "PAGO"
      ],
      [
        "24/06/2026",
        "Operações",
        "Compra de insumos para expedição",
        "TOLOY COMERCIO DE EMBALAGENS LTDA.",
        -1046.5,
        "PAGO"
      ],
      [
        "24/06/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ELEN FERNANDA CONTE - ARQUITETA",
        -750,
        "PAGO"
      ],
      [
        "24/06/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "KARINA DE LIMA TENORIO",
        -100,
        "PAGO"
      ],
      [
        "23/06/2026",
        "Operações",
        "Frete para compra de material",
        "DANIEL BARBOSA DA SILVA",
        -195,
        "PAGO"
      ],
      [
        "23/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "GOLDEN PLASTIC COMERCIO E SERVICOS LTDA",
        -5835.2,
        "PAGO"
      ],
      [
        "23/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -3150,
        "PAGO"
      ],
      [
        "23/06/2026",
        "Despesas operacionais",
        "Luz, água e outros",
        "ELEKTRO REDES S.A.",
        -259.13,
        "PAGO"
      ],
      [
        "22/06/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "CAIXA ECONOMICA FEDERAL",
        -1171.55,
        "PAGO"
      ],
      [
        "22/06/2026",
        "Operações",
        "Juros e Multas",
        "CAIXA ECONOMICA FEDERAL",
        -64.42,
        "PAGO"
      ],
      [
        "22/06/2026",
        "Despesas com serviços",
        "Despesas com frete para devolução e reenvio",
        "EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS",
        -1800.04,
        "PAGO"
      ],
      [
        "22/06/2026",
        "Operações",
        "Impostos sobre receita",
        "SIMPLES NACIONAL",
        -17014.29,
        "PAGO"
      ],
      [
        "22/06/2026",
        "Despesas não operacionais",
        "Outras despesas (Não considerar DRE)",
        "JOAO ANTONIO DA SILVA DOS SANTOS",
        -1000,
        "PAGO"
      ],
      [
        "22/06/2026",
        "Despesas não operacionais",
        "Outras despesas (Não considerar DRE)",
        "PEDRO HENRIQUE CUSTODIO MARTINS",
        -300,
        "PAGO"
      ],
      [
        "20/06/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "JOSE AMARAL DE ALMEIDA - DESIGNER",
        -700,
        "PAGO"
      ],
      [
        "20/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "PUMP AMERICA INDUSTRIA DE VALVULAS LTDA",
        -4134.8,
        "PAGO"
      ],
      [
        "20/06/2026",
        "Operações",
        "Compra de insumos para expedição",
        "TOLOY COMERCIO DE EMBALAGENS LTDA.",
        -427.84,
        "PAGO"
      ],
      [
        "20/06/2026",
        "Operações",
        "Compra de insumos para expedição",
        "TOLOY COMERCIO DE EMBALAGENS LTDA.",
        -360,
        "PAGO"
      ],
      [
        "20/06/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR",
        -540.25,
        "PAGO"
      ],
      [
        "20/06/2026",
        "Despesas não operacionais",
        "Outras despesas (Não considerar DRE)",
        "SAMUEL ANTONIO DE SOUZA MARTINS",
        -4000,
        "PAGO"
      ],
      [
        "20/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA",
        -888.91,
        "PAGO"
      ],
      [
        "20/06/2026",
        "Marketing e publicidade",
        "Despesas com ADS",
        "BR TIKTOK SHOP BRASIL LTDA",
        -1000,
        "PAGO"
      ],
      [
        "20/06/2026",
        "Marketing e publicidade",
        "Despesas com ADS",
        "SHOPEE",
        -4000,
        "PAGO"
      ],
      [
        "19/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -8422.56,
        "PAGO"
      ],
      [
        "19/06/2026",
        "Operações",
        "Compra de mercadorias",
        "ENNATERRA AROMATIZADORES LTDA",
        -300,
        "PAGO"
      ],
      [
        "19/06/2026",
        "Operações",
        "Manutenção predial e benfeitorias",
        "JAIR MACIEL DE OLIVEIRA - PINTOR",
        -300,
        "PAGO"
      ],
      [
        "19/06/2026",
        "Despesas não operacionais",
        "Outras despesas (Não considerar DRE)",
        "DENILSON GOMES JUNIOR",
        -200,
        "PAGO"
      ],
      [
        "19/06/2026",
        "Operações",
        "Compra de insumos para produção",
        "ORNATA DOMUS COMPANY LTDA",
        -1988.76,
        "PAGO"
      ],
      [
        "18/06/2026",
        "Operações",
        "Manutenção predial e benfeitorias",
        "BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR",
        -496.9,
        "PAGO"
      ],
      [
        "18/06/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "ISABELA TENORIO BARONE",
        -200,
        "PAGO"
      ],
      [
        "17/06/2026",
        "Operações",
        "Frete para compra de material",
        "MARCELO ANTONIO LOZANO - FRETE",
        -600,
        "PAGO"
      ],
      [
        "17/06/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "FARMACIA AVENIDA DE AURIFLAMA LTDA",
        -57.94,
        "PAGO"
      ],
      [
        "17/06/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "SUPERMERCADO SÃO LUIS",
        -29.9,
        "PAGO"
      ],
      [
        "17/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA",
        -3615,
        "PAGO"
      ],
      [
        "17/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA",
        -3463.57,
        "PAGO"
      ],
      [
        "17/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -8422.56,
        "PAGO"
      ],
      [
        "17/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "LEADPAK SOLUCOES DE FORNECIMENTO LTDA",
        -2873.79,
        "PAGO"
      ],
      [
        "17/06/2026",
        "Operações",
        "Manutenção predial e benfeitorias",
        "WELINGTON SOARES DUARTE - PINTOR",
        -400,
        "PAGO"
      ],
      [
        "17/06/2026",
        "Despesas com colaboradores",
        "Comissões",
        "ALVARO JOAQUIM TRINDADE SOARES",
        -223.57,
        "PAGO"
      ],
      [
        "17/06/2026",
        "Despesas com colaboradores",
        "Comissões",
        "TIAGO SANTOS MOURA",
        -383.32,
        "PAGO"
      ],
      [
        "16/06/2026",
        "Despesas administrativas",
        "Despesas com viagens",
        "JOAO EDUARDO GONCALVES NOGUEIRA",
        -218.17,
        "PAGO"
      ],
      [
        "16/06/2026",
        "Despesas administrativas",
        "Despesas com viagens",
        "JOAO EDUARDO GONCALVES NOGUEIRA",
        -377.36,
        "PAGO"
      ],
      [
        "16/06/2026",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -4007.13,
        "PAGO"
      ],
      [
        "16/06/2026",
        "Operações",
        "Compra de mercadorias",
        "EMMILY REGINA COSMO BETARELLO - FLORAE",
        -6382.5,
        "PAGO"
      ],
      [
        "16/06/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ORNATA DOMUS COMPANY LTDA",
        -9654.86,
        "PAGO"
      ],
      [
        "16/06/2026",
        "Operações",
        "Frete para compra de material",
        "DARBI RINTON ALVES DO NASCIMENTO",
        -450,
        "PAGO"
      ],
      [
        "15/06/2026",
        "Operações",
        "Frete para compra de material",
        "TATIANE DE SOUZA BARONI - TRANSPORTES",
        -694.21,
        "PAGO"
      ],
      [
        "15/06/2026",
        "Operações",
        "Frete para compra de material",
        "TATIANE DE SOUZA BARONI - TRANSPORTES",
        -1484.51,
        "PAGO"
      ],
      [
        "15/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "LEADPAK SOLUCOES DE FORNECIMENTO LTDA",
        -2581.25,
        "PAGO"
      ],
      [
        "15/06/2026",
        "Despesas com serviços",
        "Serviços de contabilidade",
        "DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA",
        -450,
        "PAGO"
      ],
      [
        "15/06/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ESCOBAR & CORREA LTDA - ESCOSEG",
        -150,
        "PAGO"
      ],
      [
        "14/06/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "TAMBASA - TECIDOS E ARMARINHOS MIGUEL BARTOLOMEU S/A",
        -183.13,
        "PAGO"
      ],
      [
        "14/06/2026",
        "Operações",
        "Compra de insumos para expedição",
        "PRIME BOX EMBALAGENS PAPELAO LTDA",
        -2600.49,
        "PAGO"
      ],
      [
        "14/06/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "TAMBASA - TECIDOS E ARMARINHOS MIGUEL BARTOLOMEU S/A",
        -564.33,
        "PAGO"
      ],
      [
        "12/06/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "SUPERMERCADO SÃO LUIS",
        -39.48,
        "PAGO"
      ],
      [
        "12/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -8422.56,
        "PAGO"
      ],
      [
        "12/06/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "TEKNOVAL INDUSTRIA E COMERCIO LTDA",
        -1290.89,
        "PAGO"
      ],
      [
        "12/06/2026",
        "Despesas com colaboradores",
        "Bonificações, Brindes e Festividades",
        "COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)",
        -35,
        "PAGO"
      ],
      [
        "11/06/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "LINKTREE",
        -1.47,
        "PAGO"
      ],
      [
        "11/06/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "LINKTREE",
        -42,
        "PAGO"
      ],
      [
        "11/06/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "LINKTREE",
        -42,
        "PAGO"
      ],
      [
        "11/06/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "LINKTREE",
        -1.47,
        "PAGO"
      ],
      [
        "11/06/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "TINY ERP",
        -40.9,
        "PAGO"
      ],
      [
        "11/06/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.91,
        "PAGO"
      ],
      [
        "11/06/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "TINY ERP",
        -362.28,
        "PAGO"
      ],
      [
        "11/06/2026",
        "Despesas administrativas",
        "Despesas administrativas",
        "CLARO S.A.",
        -30,
        "PAGO"
      ],
      [
        "11/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA",
        -969.76,
        "PAGO"
      ]
    ],
    "KPIS": {
      "TOTAL_RECEITA": 1668187.72,
      "TOTAL_DESPESA": 1561261.7499999998,
      "VALOR_LIQUIDO": 106925.9700000002,
      "MARGEM_LIQUIDA": 6.40970849491688,
      "VALOR_LIQ_SERIES": [
        7018.999999999971,
        37001.19000000006,
        31353.859999999986,
        -47407.31999999995,
        23375.02999999991,
        9614.479999999981,
        45969.729999999996,
        0,
        0,
        0,
        0,
        0
      ]
    },
    "RECEITA_DIA": [
      30276.1,
      72517.22000000002,
      35196.240000000005,
      162648.52000000002,
      54635.56999999999,
      61774.500000000015,
      37811.38999999999,
      56678.850000000006,
      71044.45999999999,
      52751.27999999999,
      53077.19,
      44575.73999999999,
      55560.22,
      69368.31,
      47427.130000000005,
      58530.62999999999,
      21323.35,
      76125.6,
      55152.71,
      59553.89000000001,
      17897.91,
      72286.59000000001,
      77323.80999999998,
      35877.009999999995,
      34967.4,
      62482.59999999999,
      52718.23999999998,
      20473.34,
      39822.24999999999,
      68859.07999999999,
      9450.59
    ],
    "DESPESA_DIA": [
      18659.820000000003,
      43586.299999999996,
      48796.920000000006,
      85693.21,
      57424.36999999999,
      74167.47000000002,
      84498.69999999998,
      59199.96,
      21187.129999999997,
      135094.71999999997,
      57063.330000000016,
      76019.85000000002,
      35012.99,
      41938.770000000004,
      48735.950000000004,
      51819.16,
      37993.39,
      51367.880000000005,
      36440.43,
      105247.51999999999,
      24277.8,
      34997.79,
      48746.26,
      58705.44000000001,
      28051.759999999995,
      37952.64,
      45751.590000000004,
      32564.6,
      20017.829999999998,
      50829.93,
      9418.24
    ],
    "SALDOS_MES": [
      7018.999999999971,
      44020.19000000003,
      75374.05000000002,
      27966.73000000007,
      51341.75999999998,
      60956.23999999996,
      106925.96999999996,
      106925.96999999996,
      106925.96999999996,
      106925.96999999996,
      106925.96999999996,
      106925.96999999996
    ],
    "FLUXO_RECEITA": [
      {
        "cat": "Repasse de vendas",
        "values": [
          121450.23,
          183772.18999999997,
          248883.54,
          225809.06000000003,
          271802.60999999987,
          306392.0399999999,
          144750.44,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Obtenção de empréstimo",
        "values": [
          0,
          110000,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Outras receitas (Não considerar DRE)",
        "values": [
          0,
          9989.880000000001,
          1550,
          5618.540000000001,
          2835.2,
          7635.2,
          1350,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Receita com vendas",
        "values": [
          3208.1200000000003,
          2375.69,
          2495.84,
          3009.11,
          4285.17,
          8391.55,
          126,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Rendimento de investimentos",
        "values": [
          197.10000000000002,
          386.86,
          481.71999999999997,
          378.51000000000005,
          363.4,
          464.04,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "FLUXO_DESPESA": [
      {
        "cat": "Compra de matéria-prima",
        "values": [
          -59220.85,
          -168455.94000000003,
          -91793.19,
          -164860.64999999997,
          -128652.36000000002,
          -157283.02,
          -60724.26,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Compra de mercadorias",
        "values": [
          -15394,
          -17241,
          -9879,
          -16765.5,
          -14155.45,
          -12748.86,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Despesas com ADS",
        "values": [
          -11220,
          -13800,
          -17800,
          -12919,
          -12790,
          -9000,
          -3258.68,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Salários e encargos",
        "values": [
          -745.59,
          -8119.4,
          -10767.999999999998,
          -13199.06,
          -12514.23,
          -17935.11,
          -17164.170000000002,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Pagamento de empréstimo",
        "values": [
          0,
          0,
          -35498.75,
          -4025.11,
          -3988.23,
          -25847.33,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "COMP_DATA": [
      {
        "tipo": "Receita",
        "isHeader": true,
        "d1": 684855.6100000001,
        "d2": 837105.6700000004
      },
      {
        "tipo": "Rendimento de investimentos",
        "parent": "Receita",
        "d1": 1065.68,
        "d2": 1205.95
      },
      {
        "tipo": "Repasse de vendas",
        "parent": "Receita",
        "d1": 554105.9599999998,
        "d2": 804003.7100000004
      },
      {
        "tipo": "Receita com vendas",
        "parent": "Receita",
        "d1": 8079.6500000000015,
        "d2": 15685.830000000002
      },
      {
        "tipo": "Receita por troca/adição de produtos em pedido",
        "parent": "Receita",
        "d1": 64.43,
        "d2": 0
      },
      {
        "tipo": "Obtenção de empréstimo",
        "parent": "Receita",
        "d1": 110000,
        "d2": 0
      },
      {
        "tipo": "Outras receitas (Não considerar DRE)",
        "parent": "Receita",
        "d1": 11539.880000000001,
        "d2": 16088.940000000002
      },
      {
        "tipo": "Outras receitas",
        "parent": "Receita",
        "d1": 0.01,
        "d2": 121.24
      },
      {
        "tipo": "Despesa",
        "isHeader": true,
        "d1": -609481.5600000003,
        "d2": -851523.4799999999
      },
      {
        "tipo": "Custo com horas extras setor de produção",
        "parent": "Despesa",
        "d1": -2866.2999999999997,
        "d2": -4987.820000000001
      },
      {
        "tipo": "Impostos e Taxas",
        "parent": "Despesa",
        "d1": -2184.02,
        "d2": -3566.2200000000003
      },
      {
        "tipo": "Compra de insumos para expedição",
        "parent": "Despesa",
        "d1": -26250.260000000002,
        "d2": -36086.1
      },
      {
        "tipo": "Despesas administrativas",
        "parent": "Despesa",
        "d1": -15368.680000000002,
        "d2": -10713.96
      },
      {
        "tipo": "Compra de matéria-prima",
        "parent": "Despesa",
        "d1": -319469.9800000001,
        "d2": -450796.0299999998
      },
      {
        "tipo": "Luz, água e outros",
        "parent": "Despesa",
        "d1": -1838.05,
        "d2": -1824.75
      },
      {
        "tipo": "Frete para compra de material",
        "parent": "Despesa",
        "d1": -15243.180000000002,
        "d2": -21444.129999999997
      },
      {
        "tipo": "Serviços de sistema de gestão",
        "parent": "Despesa",
        "d1": -2583.18,
        "d2": -5046.349999999999
      },
      {
        "tipo": "Compra de mercadorias",
        "parent": "Despesa",
        "d1": -42514,
        "d2": -43669.81
      },
      {
        "tipo": "Despesas com aluguéis para uso",
        "parent": "Despesa",
        "d1": -7500,
        "d2": -7500
      },
      {
        "tipo": "Despesas com materiais de consumo",
        "parent": "Despesa",
        "d1": -2765.08,
        "d2": -7060.269999999999
      },
      {
        "tipo": "Bens de consumo com publicidade",
        "parent": "Despesa",
        "d1": -262.40000000000003,
        "d2": 0
      },
      {
        "tipo": "Compra de ativo imobilizado",
        "parent": "Despesa",
        "d1": -22448.489999999998,
        "d2": -20770.05
      },
      {
        "tipo": "Despesas com outros serviços contratados",
        "parent": "Despesa",
        "d1": -14200.029999999999,
        "d2": -35902.27
      },
      {
        "tipo": "Outros gastos com publicidade",
        "parent": "Despesa",
        "d1": -890.55,
        "d2": -665.44
      },
      {
        "tipo": "Despesas com alimentação",
        "parent": "Despesa",
        "d1": -842.5,
        "d2": -1499.77
      },
      {
        "tipo": "Despesas com ADS",
        "parent": "Despesa",
        "d1": -42820,
        "d2": -34709
      },
      {
        "tipo": "Compra de insumos para produção",
        "parent": "Despesa",
        "d1": -2360.2000000000003,
        "d2": -3463.34
      },
      {
        "tipo": "Salários e encargos",
        "parent": "Despesa",
        "d1": -19632.989999999998,
        "d2": -43648.4
      },
      {
        "tipo": "Reembolsos por fora de marketplaces",
        "parent": "Despesa",
        "d1": -53.9,
        "d2": -20
      },
      {
        "tipo": "Serviços de contabilidade",
        "parent": "Despesa",
        "d1": -4326,
        "d2": -4700
      },
      {
        "tipo": "Serviços contratados para marketing",
        "parent": "Despesa",
        "d1": -2100,
        "d2": -2360.82
      },
      {
        "tipo": "Impostos sobre receita",
        "parent": "Despesa",
        "d1": -5116.12,
        "d2": -40888.73
      },
      {
        "tipo": "Despesas com frete para devolução e reenvio",
        "parent": "Despesa",
        "d1": -1819.99,
        "d2": -5137.59
      },
      {
        "tipo": "Comissões",
        "parent": "Despesa",
        "d1": -956.1300000000001,
        "d2": -2096.2999999999997
      },
      {
        "tipo": "Vale-Refeição (VR)",
        "parent": "Despesa",
        "d1": -1792.0400000000002,
        "d2": -3239.1200000000003
      },
      {
        "tipo": "Outras despesas (Não considerar DRE)",
        "parent": "Despesa",
        "d1": -11775.95,
        "d2": -14131.73
      },
      {
        "tipo": "Outras despesas",
        "parent": "Despesa",
        "d1": -200,
        "d2": -300
      },
      {
        "tipo": "Vestuário de trabalho",
        "parent": "Despesa",
        "d1": -733.5,
        "d2": -733.5
      },
      {
        "tipo": "Despesas com benefícios aos sócios e diretores",
        "parent": "Despesa",
        "d1": -400,
        "d2": -1200
      },
      {
        "tipo": "Despesa com férias de funcionário",
        "parent": "Despesa",
        "d1": -2669.29,
        "d2": 0
      },
      {
        "tipo": "Pagamento de empréstimo",
        "parent": "Despesa",
        "d1": -35498.75,
        "d2": -33860.67
      },
      {
        "tipo": "Direitos a receber",
        "parent": "Despesa",
        "d1": 0,
        "d2": -90
      },
      {
        "tipo": "Taxas e Encargos Bancários",
        "parent": "Despesa",
        "d1": 0,
        "d2": -194.82000000000002
      },
      {
        "tipo": "Bonificações, Brindes e Festividades",
        "parent": "Despesa",
        "d1": 0,
        "d2": -650
      },
      {
        "tipo": "Despesa com materiais de uso e consumo operacional",
        "parent": "Despesa",
        "d1": 0,
        "d2": -3900.99
      },
      {
        "tipo": "Manutenção predial e benfeitorias",
        "parent": "Despesa",
        "d1": 0,
        "d2": -2070.5
      },
      {
        "tipo": "Despesas com viagens",
        "parent": "Despesa",
        "d1": 0,
        "d2": -2530.5800000000004
      },
      {
        "tipo": "Juros e Multas",
        "parent": "Despesa",
        "d1": 0,
        "d2": -64.42
      }
    ]
  },
  "a_pagar_receber": {
    "MONTH_DATA": [
      {
        "m": "janeiro",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "fevereiro",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "março",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "abril",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "maio",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "junho",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "julho",
        "receita": 161446.28,
        "despesa": 185002.74
      },
      {
        "m": "agosto",
        "receita": 277700,
        "despesa": 220063.78
      },
      {
        "m": "setembro",
        "receita": 263000,
        "despesa": 125166.39000000001
      },
      {
        "m": "outubro",
        "receita": 125300,
        "despesa": 49749.27
      },
      {
        "m": "novembro",
        "receita": 0,
        "despesa": 3891.12
      },
      {
        "m": "dezembro",
        "receita": 0,
        "despesa": 3706.7299999999996
      }
    ],
    "RECEITA_CATEGORIAS": [
      {
        "name": "Repasse de vendas",
        "value": 825400,
        "clientes": 5
      },
      {
        "name": "Receita com vendas",
        "value": 2046.2800000000002,
        "clientes": 2
      }
    ],
    "DESPESA_CATEGORIAS": [
      {
        "name": "Compra de matéria-prima",
        "value": 291761.5399999999,
        "fornecedores": 10
      },
      {
        "name": "Salários e encargos",
        "value": 57172.079999999994,
        "fornecedores": 10
      },
      {
        "name": "Impostos sobre receita",
        "value": 52732.08,
        "fornecedores": 1
      },
      {
        "name": "Compra de mercadorias",
        "value": 45758,
        "fornecedores": 2
      },
      {
        "name": "Despesas com outros serviços contratados",
        "value": 42726.6,
        "fornecedores": 5
      },
      {
        "name": "Pagamento de empréstimo",
        "value": 23092.4,
        "fornecedores": 1
      },
      {
        "name": "Compra de insumos para expedição",
        "value": 19977.629999999997,
        "fornecedores": 4
      },
      {
        "name": "Despesas com ADS",
        "value": 19113.39,
        "fornecedores": 2
      },
      {
        "name": "Despesas com aluguéis para uso",
        "value": 7500,
        "fornecedores": 1
      },
      {
        "name": "Serviços de contabilidade",
        "value": 4350,
        "fornecedores": 2
      },
      {
        "name": "Vale-Refeição (VR)",
        "value": 4050,
        "fornecedores": 9
      },
      {
        "name": "Despesas com frete para devolução e reenvio",
        "value": 3640.85,
        "fornecedores": 1
      },
      {
        "name": "Serviços contratados para marketing",
        "value": 2230.41,
        "fornecedores": 2
      },
      {
        "name": "Compra de ativo imobilizado",
        "value": 2230.32,
        "fornecedores": 3
      },
      {
        "name": "Luz, água e outros",
        "value": 2021.97,
        "fornecedores": 3
      },
      {
        "name": "Despesas com alimentação",
        "value": 1932,
        "fornecedores": 1
      },
      {
        "name": "Impostos e Taxas",
        "value": 1670.91,
        "fornecedores": 1
      },
      {
        "name": "Frete para compra de material",
        "value": 1627.68,
        "fornecedores": 1
      },
      {
        "name": "Serviços de sistema de gestão",
        "value": 1561.95,
        "fornecedores": 2
      },
      {
        "name": "Despesas com benefícios aos sócios e diretores",
        "value": 1200,
        "fornecedores": 2
      },
      {
        "name": "Manutenção predial e benfeitorias",
        "value": 496.9,
        "fornecedores": 1
      },
      {
        "name": "Despesa com materiais de uso e consumo operacional",
        "value": 357.4,
        "fornecedores": 3
      },
      {
        "name": "Despesas com materiais de consumo",
        "value": 285.92,
        "fornecedores": 2
      },
      {
        "name": "Despesas administrativas",
        "value": 90,
        "fornecedores": 1
      }
    ],
    "RECEITA_CLIENTES": [
      {
        "name": "SHOPEE",
        "value": 386400
      },
      {
        "name": "TIKTOK",
        "value": 184000
      },
      {
        "name": "SHEIN",
        "value": 110500
      },
      {
        "name": "MERCADO LIVRE",
        "value": 78000
      },
      {
        "name": "AMAZON",
        "value": 66500
      },
      {
        "name": "ORNATA DOMUS COMPANY LTDA",
        "value": 1817.63
      },
      {
        "name": "VENDA FÍSICA",
        "value": 228.65
      }
    ],
    "DESPESA_FORNECEDORES": [
      {
        "name": "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        "value": 115500
      },
      {
        "name": "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        "value": 105301.01999999999
      },
      {
        "name": "ORNATA DOMUS COMPANY LTDA",
        "value": 56094.799999999996
      },
      {
        "name": "SIMPLES NACIONAL",
        "value": 52732.08
      },
      {
        "name": "ENNATERRA AROMATIZADORES LTDA",
        "value": 26500
      },
      {
        "name": "ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA",
        "value": 23505.43
      },
      {
        "name": "EMMILY REGINA COSMO BETARELLO - FLORAE",
        "value": 19258
      },
      {
        "name": "PRIME BOX EMBALAGENS PAPELAO LTDA",
        "value": 15454.18
      },
      {
        "name": "SMART PRODUTOS QUIMICOS LTDA",
        "value": 12454.72
      },
      {
        "name": "ALCOOL FERREIRA - CNA S.A.",
        "value": 12076.96
      },
      {
        "name": "SHOPEE",
        "value": 11000
      },
      {
        "name": "PUMP AMERICA INDUSTRIA DE VALVULAS LTDA",
        "value": 8199.38
      }
    ],
    "EXTRATO": [
      [
        "15/02/2030",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2329.79,
        "A_PAGAR"
      ],
      [
        "15/01/2030",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2362.95,
        "A_PAGAR"
      ],
      [
        "17/12/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2406.03,
        "A_PAGAR"
      ],
      [
        "16/11/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2449.11,
        "A_PAGAR"
      ],
      [
        "15/10/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2463.69,
        "A_PAGAR"
      ],
      [
        "17/09/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2535.28,
        "A_PAGAR"
      ],
      [
        "15/08/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2549.84,
        "A_PAGAR"
      ],
      [
        "16/07/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2596.64,
        "A_PAGAR"
      ],
      [
        "15/06/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2634.76,
        "A_PAGAR"
      ],
      [
        "15/05/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2648.1,
        "A_PAGAR"
      ],
      [
        "16/04/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2724.64,
        "A_PAGAR"
      ],
      [
        "15/03/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2704.52,
        "A_PAGAR"
      ],
      [
        "15/02/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2787.24,
        "A_PAGAR"
      ],
      [
        "15/01/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2824.61,
        "A_PAGAR"
      ],
      [
        "15/12/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2824.84,
        "A_PAGAR"
      ],
      [
        "16/11/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2899.93,
        "A_PAGAR"
      ],
      [
        "16/10/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2937.94,
        "A_PAGAR"
      ],
      [
        "15/09/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2975.96,
        "A_PAGAR"
      ],
      [
        "15/08/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2967.02,
        "A_PAGAR"
      ],
      [
        "17/07/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3051.99,
        "A_PAGAR"
      ],
      [
        "16/06/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3115.98,
        "A_PAGAR"
      ],
      [
        "15/05/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3046.49,
        "A_PAGAR"
      ],
      [
        "17/04/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3222.95,
        "A_PAGAR"
      ],
      [
        "15/03/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3144.74,
        "A_PAGAR"
      ],
      [
        "15/02/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3180.28,
        "A_PAGAR"
      ],
      [
        "17/01/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3345.83,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3254.02,
        "A_PAGAR"
      ],
      [
        "16/11/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3393.79,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3361.24,
        "A_PAGAR"
      ],
      [
        "15/09/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3398.12,
        "A_PAGAR"
      ],
      [
        "16/08/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3511.88,
        "A_PAGAR"
      ],
      [
        "15/07/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3471.88,
        "A_PAGAR"
      ],
      [
        "15/06/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3467.88,
        "A_PAGAR"
      ],
      [
        "17/05/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3629.96,
        "A_PAGAR"
      ],
      [
        "15/04/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3625.91,
        "A_PAGAR"
      ],
      [
        "12/04/2027",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "15/03/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3530.23,
        "A_PAGAR"
      ],
      [
        "12/03/2027",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "10/03/2027",
        "Operações",
        "Compra de ativo intangível",
        "HOSTGATOR BRASIL LTDA",
        -221.96,
        "A_PAGAR"
      ],
      [
        "15/02/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3702.16,
        "A_PAGAR"
      ],
      [
        "12/02/2027",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "15/01/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3740.28,
        "A_PAGAR"
      ],
      [
        "12/01/2027",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "15/12/2026",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3681.74,
        "A_PAGAR"
      ],
      [
        "12/12/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "16/11/2026",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3866.13,
        "A_PAGAR"
      ],
      [
        "12/11/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "15/10/2026",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3803.82,
        "A_PAGAR"
      ],
      [
        "14/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "14/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "14/10/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "13/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "13/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "12/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "12/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        8500,
        "A_PAGAR"
      ],
      [
        "12/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "12/10/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "LINKTREE",
        -42,
        "A_PAGAR"
      ],
      [
        "12/10/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "LINKTREE",
        -1.47,
        "A_PAGAR"
      ],
      [
        "12/10/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "12/10/2026",
        "Despesas administrativas",
        "Despesas administrativas",
        "CLARO S.A.",
        -30,
        "A_PAGAR"
      ],
      [
        "11/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "11/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Despesas com aluguéis",
        "Despesas com aluguéis para uso",
        "PAULO CESAR LOPES (ROPE)",
        -2500,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ESCOBAR & CORREA LTDA - ESCOSEG",
        -150,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "MERCADO LIVRE",
        -9.9,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Despesas operacionais",
        "Luz, água e outros",
        "MAYARA B. G. FERNANDES - FTI NET",
        -69,
        "A_PAGAR"
      ],
      [
        "09/10/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        9500,
        "A_PAGAR"
      ],
      [
        "09/10/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        6000,
        "A_PAGAR"
      ],
      [
        "09/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "09/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "09/10/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "CRISTIANE SANCHES ROCAILKS",
        -150,
        "A_PAGAR"
      ],
      [
        "08/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "08/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "07/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "07/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "07/10/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas administrativas",
        "Despesas com benefícios aos sócios e diretores",
        "JOAO EDUARDO GONCALVES NOGUEIRA",
        -200,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas administrativas",
        "Despesas com benefícios aos sócios e diretores",
        "SAMUEL ANTONIO DE SOUZA MARTINS",
        -200,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com serviços",
        "Serviços de contabilidade",
        "GUILHERME TORCHETTI LOUREIRO DA SILVA",
        -1000,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "AMANDA LOPES PAIS",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "KARINA DE LIMA TENORIO",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "LEANDRO MARTINS BELCHIOR DA SILVA",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "RAFAEL DOS SANTOS PILIELO",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "DANIELLY DE SOUSA SILVA",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "MARIA LAURA DE MELLO LINO",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "ISABELA TENORIO BARONE",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "VITORIA CRISTINA TANGODA MAIA",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "POLYANA CECILIA ALMEIDA FERREIRA",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "VITORIA CRISTINA TANGODA MAIA",
        -1662.32,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "ISABELA TENORIO BARONE",
        -1957.35,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "LEANDRO MARTINS BELCHIOR DA SILVA",
        -1957.35,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "POLYANA CECILIA ALMEIDA FERREIRA",
        -2321.35,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "KARINA DE LIMA TENORIO",
        -1957.35,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "AMANDA LOPES PAIS",
        -1662.63,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "DANIELLY DE SOUSA SILVA",
        -1662.63,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "RAFAEL DOS SANTOS PILIELO",
        -2200,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "MARIA LAURA DE MELLO LINO",
        -2008.12,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        8500,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Operações",
        "Compra de mercadorias",
        "ENNATERRA AROMATIZADORES LTDA",
        -5300,
        "A_PAGAR"
      ],
      [
        "04/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "04/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "03/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "03/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "02/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "02/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "02/10/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        6000,
        "A_PAGAR"
      ],
      [
        "02/10/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "CRISTIANE SANCHES ROCAILKS",
        -150,
        "A_PAGAR"
      ],
      [
        "02/10/2026",
        "Despesas operacionais",
        "Luz, água e outros",
        "COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP",
        -234.99,
        "A_PAGAR"
      ],
      [
        "01/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "01/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "01/10/2026",
        "Despesas administrativas",
        "Despesas com alimentação",
        "MARLENE DE SOUZA SILVA LTDA - PADARIA NOVA OPÇÃO",
        -644,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "29/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "29/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "29/09/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "NIBO SOFTWARES E CURSOS LTDA.",
        -479,
        "A_PAGAR"
      ],
      [
        "28/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "28/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "28/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        8500,
        "A_PAGAR"
      ],
      [
        "27/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "27/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "26/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "26/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        6000,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        9500,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "MARRI CONSULTORIA EMPRESARIAL LTDA",
        -2431.5,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "CRISTIANE SANCHES ROCAILKS",
        -150,
        "A_PAGAR"
      ],
      [
        "24/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "24/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "23/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "23/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "23/09/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "22/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "22/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "21/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "21/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "21/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        8500,
        "A_PAGAR"
      ],
      [
        "21/09/2026",
        "Despesas com serviços",
        "Despesas com frete para devolução e reenvio",
        "EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS",
        -500,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "JOSE AMARAL DE ALMEIDA - DESIGNER",
        -700,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Operações",
        "Compra de matéria-prima",
        "SMART PRODUTOS QUIMICOS LTDA",
        -6227.36,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Operações",
        "Impostos sobre receita",
        "SIMPLES NACIONAL",
        -17014.29,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Despesas operacionais",
        "Luz, água e outros",
        "ELEKTRO REDES S.A.",
        -370,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "CAIXA ECONOMICA FEDERAL",
        -496.71,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "CAIXA ECONOMICA FEDERAL",
        -1171.55,
        "A_PAGAR"
      ],
      [
        "19/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "19/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        6000,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "CRISTIANE SANCHES ROCAILKS",
        -150,
        "A_PAGAR"
      ],
      [
        "17/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "17/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "16/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "16/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "16/09/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3788.67,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Despesas com serviços",
        "Serviços de contabilidade",
        "DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA",
        -450,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Operações",
        "Compra de insumos para expedição",
        "PRIME BOX EMBALAGENS PAPELAO LTDA",
        -2170,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ORNATA DOMUS COMPANY LTDA",
        -11000.8,
        "A_PAGAR"
      ],
      [
        "14/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        8500,
        "A_PAGAR"
      ],
      [
        "14/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "14/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "13/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "13/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "12/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "12/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "12/09/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "LINKTREE",
        -1.47,
        "A_PAGAR"
      ],
      [
        "12/09/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "LINKTREE",
        -42,
        "A_PAGAR"
      ],
      [
        "12/09/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "12/09/2026",
        "Despesas administrativas",
        "Despesas administrativas",
        "CLARO S.A.",
        -30,
        "A_PAGAR"
      ],
      [
        "11/09/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        6000,
        "A_PAGAR"
      ],
      [
        "11/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "11/09/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        9500,
        "A_PAGAR"
      ],
      [
        "11/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "11/09/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "CRISTIANE SANCHES ROCAILKS",
        -150,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Despesas com aluguéis",
        "Despesas com aluguéis para uso",
        "PAULO CESAR LOPES (ROPE)",
        -2500,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "MERCADO LIVRE",
        -383,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ESCOBAR & CORREA LTDA - ESCOSEG",
        -150,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "MERCADO LIVRE",
        -9.9,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Despesas operacionais",
        "Luz, água e outros",
        "MAYARA B. G. FERNANDES - FTI NET",
        -69,
        "A_PAGAR"
      ],
      [
        "09/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "09/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "09/09/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "08/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "08/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ]
    ],
    "EXTRATO_RECEITAS": [
      [
        "14/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "14/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "13/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "13/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "12/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "12/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        8500,
        "A_PAGAR"
      ],
      [
        "12/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "11/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "11/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "09/10/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        9500,
        "A_PAGAR"
      ],
      [
        "09/10/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        6000,
        "A_PAGAR"
      ],
      [
        "09/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "09/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "08/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "08/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "07/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "07/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        8500,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "04/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "04/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "03/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "03/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "02/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "02/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "02/10/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        6000,
        "A_PAGAR"
      ],
      [
        "01/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "01/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "29/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "29/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "28/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "28/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "28/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        8500,
        "A_PAGAR"
      ],
      [
        "27/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "27/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "26/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "26/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        6000,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        9500,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "24/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "24/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "23/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "23/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "22/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "22/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "21/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "21/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "21/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        8500,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "19/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "19/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        6000,
        "A_PAGAR"
      ],
      [
        "17/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "17/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "16/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "16/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "14/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        8500,
        "A_PAGAR"
      ],
      [
        "14/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "14/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "13/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "13/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "12/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "12/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "11/09/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        6000,
        "A_PAGAR"
      ],
      [
        "11/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "11/09/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        9500,
        "A_PAGAR"
      ],
      [
        "11/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "09/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "09/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "08/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "08/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "07/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        8500,
        "A_PAGAR"
      ],
      [
        "07/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "07/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "05/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "05/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "04/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "04/09/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        6000,
        "A_PAGAR"
      ],
      [
        "04/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "03/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "03/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "02/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "02/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "01/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "01/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "31/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "31/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        8500,
        "A_PAGAR"
      ],
      [
        "31/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "29/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "29/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "28/08/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        9500,
        "A_PAGAR"
      ],
      [
        "28/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "28/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "28/08/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        6000,
        "A_PAGAR"
      ],
      [
        "27/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "27/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "26/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "26/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "24/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "24/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        8500,
        "A_PAGAR"
      ],
      [
        "24/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "23/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "23/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "22/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "22/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "21/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "21/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "21/08/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        6000,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "19/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "19/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "18/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "18/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "17/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        8500,
        "A_PAGAR"
      ],
      [
        "17/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "17/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "16/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "16/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "15/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "15/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "14/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "14/08/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        9500,
        "A_PAGAR"
      ],
      [
        "14/08/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        6000,
        "A_PAGAR"
      ],
      [
        "14/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "13/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "13/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "12/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "12/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "11/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "11/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        8500,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "09/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "09/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "08/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "08/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "07/08/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        6000,
        "A_PAGAR"
      ],
      [
        "07/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "07/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "05/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "05/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "04/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "04/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "03/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "03/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        8500,
        "A_PAGAR"
      ],
      [
        "03/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "02/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "02/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "01/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "01/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "31/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "31/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "31/07/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        6000,
        "A_PAGAR"
      ],
      [
        "31/07/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        9500,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "29/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "29/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "28/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "28/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "27/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "27/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "27/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        8500,
        "A_PAGAR"
      ],
      [
        "26/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "26/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "24/07/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        6000,
        "A_PAGAR"
      ],
      [
        "24/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "24/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "23/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "23/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "22/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "22/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ]
    ],
    "EXTRATO_DESPESAS": [
      [
        "15/02/2030",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2329.79,
        "A_PAGAR"
      ],
      [
        "15/01/2030",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2362.95,
        "A_PAGAR"
      ],
      [
        "17/12/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2406.03,
        "A_PAGAR"
      ],
      [
        "16/11/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2449.11,
        "A_PAGAR"
      ],
      [
        "15/10/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2463.69,
        "A_PAGAR"
      ],
      [
        "17/09/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2535.28,
        "A_PAGAR"
      ],
      [
        "15/08/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2549.84,
        "A_PAGAR"
      ],
      [
        "16/07/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2596.64,
        "A_PAGAR"
      ],
      [
        "15/06/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2634.76,
        "A_PAGAR"
      ],
      [
        "15/05/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2648.1,
        "A_PAGAR"
      ],
      [
        "16/04/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2724.64,
        "A_PAGAR"
      ],
      [
        "15/03/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2704.52,
        "A_PAGAR"
      ],
      [
        "15/02/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2787.24,
        "A_PAGAR"
      ],
      [
        "15/01/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2824.61,
        "A_PAGAR"
      ],
      [
        "15/12/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2824.84,
        "A_PAGAR"
      ],
      [
        "16/11/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2899.93,
        "A_PAGAR"
      ],
      [
        "16/10/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2937.94,
        "A_PAGAR"
      ],
      [
        "15/09/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2975.96,
        "A_PAGAR"
      ],
      [
        "15/08/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2967.02,
        "A_PAGAR"
      ],
      [
        "17/07/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3051.99,
        "A_PAGAR"
      ],
      [
        "16/06/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3115.98,
        "A_PAGAR"
      ],
      [
        "15/05/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3046.49,
        "A_PAGAR"
      ],
      [
        "17/04/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3222.95,
        "A_PAGAR"
      ],
      [
        "15/03/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3144.74,
        "A_PAGAR"
      ],
      [
        "15/02/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3180.28,
        "A_PAGAR"
      ],
      [
        "17/01/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3345.83,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3254.02,
        "A_PAGAR"
      ],
      [
        "16/11/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3393.79,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3361.24,
        "A_PAGAR"
      ],
      [
        "15/09/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3398.12,
        "A_PAGAR"
      ],
      [
        "16/08/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3511.88,
        "A_PAGAR"
      ],
      [
        "15/07/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3471.88,
        "A_PAGAR"
      ],
      [
        "15/06/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3467.88,
        "A_PAGAR"
      ],
      [
        "17/05/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3629.96,
        "A_PAGAR"
      ],
      [
        "15/04/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3625.91,
        "A_PAGAR"
      ],
      [
        "12/04/2027",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "15/03/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3530.23,
        "A_PAGAR"
      ],
      [
        "12/03/2027",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "10/03/2027",
        "Operações",
        "Compra de ativo intangível",
        "HOSTGATOR BRASIL LTDA",
        -221.96,
        "A_PAGAR"
      ],
      [
        "15/02/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3702.16,
        "A_PAGAR"
      ],
      [
        "12/02/2027",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "15/01/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3740.28,
        "A_PAGAR"
      ],
      [
        "12/01/2027",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "15/12/2026",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3681.74,
        "A_PAGAR"
      ],
      [
        "12/12/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "16/11/2026",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3866.13,
        "A_PAGAR"
      ],
      [
        "12/11/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "15/10/2026",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3803.82,
        "A_PAGAR"
      ],
      [
        "14/10/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "12/10/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "LINKTREE",
        -42,
        "A_PAGAR"
      ],
      [
        "12/10/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "LINKTREE",
        -1.47,
        "A_PAGAR"
      ],
      [
        "12/10/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "12/10/2026",
        "Despesas administrativas",
        "Despesas administrativas",
        "CLARO S.A.",
        -30,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Despesas com aluguéis",
        "Despesas com aluguéis para uso",
        "PAULO CESAR LOPES (ROPE)",
        -2500,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ESCOBAR & CORREA LTDA - ESCOSEG",
        -150,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "MERCADO LIVRE",
        -9.9,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Despesas operacionais",
        "Luz, água e outros",
        "MAYARA B. G. FERNANDES - FTI NET",
        -69,
        "A_PAGAR"
      ],
      [
        "09/10/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "CRISTIANE SANCHES ROCAILKS",
        -150,
        "A_PAGAR"
      ],
      [
        "07/10/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas administrativas",
        "Despesas com benefícios aos sócios e diretores",
        "JOAO EDUARDO GONCALVES NOGUEIRA",
        -200,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas administrativas",
        "Despesas com benefícios aos sócios e diretores",
        "SAMUEL ANTONIO DE SOUZA MARTINS",
        -200,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com serviços",
        "Serviços de contabilidade",
        "GUILHERME TORCHETTI LOUREIRO DA SILVA",
        -1000,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "AMANDA LOPES PAIS",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "KARINA DE LIMA TENORIO",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "LEANDRO MARTINS BELCHIOR DA SILVA",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "RAFAEL DOS SANTOS PILIELO",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "DANIELLY DE SOUSA SILVA",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "MARIA LAURA DE MELLO LINO",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "ISABELA TENORIO BARONE",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "VITORIA CRISTINA TANGODA MAIA",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "POLYANA CECILIA ALMEIDA FERREIRA",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "VITORIA CRISTINA TANGODA MAIA",
        -1662.32,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "ISABELA TENORIO BARONE",
        -1957.35,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "LEANDRO MARTINS BELCHIOR DA SILVA",
        -1957.35,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "POLYANA CECILIA ALMEIDA FERREIRA",
        -2321.35,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "KARINA DE LIMA TENORIO",
        -1957.35,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "AMANDA LOPES PAIS",
        -1662.63,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "DANIELLY DE SOUSA SILVA",
        -1662.63,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "RAFAEL DOS SANTOS PILIELO",
        -2200,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "MARIA LAURA DE MELLO LINO",
        -2008.12,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Operações",
        "Compra de mercadorias",
        "ENNATERRA AROMATIZADORES LTDA",
        -5300,
        "A_PAGAR"
      ],
      [
        "02/10/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "CRISTIANE SANCHES ROCAILKS",
        -150,
        "A_PAGAR"
      ],
      [
        "02/10/2026",
        "Despesas operacionais",
        "Luz, água e outros",
        "COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP",
        -234.99,
        "A_PAGAR"
      ],
      [
        "01/10/2026",
        "Despesas administrativas",
        "Despesas com alimentação",
        "MARLENE DE SOUZA SILVA LTDA - PADARIA NOVA OPÇÃO",
        -644,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "29/09/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "NIBO SOFTWARES E CURSOS LTDA.",
        -479,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "MARRI CONSULTORIA EMPRESARIAL LTDA",
        -2431.5,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "CRISTIANE SANCHES ROCAILKS",
        -150,
        "A_PAGAR"
      ],
      [
        "23/09/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "21/09/2026",
        "Despesas com serviços",
        "Despesas com frete para devolução e reenvio",
        "EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS",
        -500,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "JOSE AMARAL DE ALMEIDA - DESIGNER",
        -700,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Operações",
        "Compra de matéria-prima",
        "SMART PRODUTOS QUIMICOS LTDA",
        -6227.36,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Operações",
        "Impostos sobre receita",
        "SIMPLES NACIONAL",
        -17014.29,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Despesas operacionais",
        "Luz, água e outros",
        "ELEKTRO REDES S.A.",
        -370,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "CAIXA ECONOMICA FEDERAL",
        -496.71,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "CAIXA ECONOMICA FEDERAL",
        -1171.55,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "CRISTIANE SANCHES ROCAILKS",
        -150,
        "A_PAGAR"
      ],
      [
        "16/09/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3788.67,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Despesas com serviços",
        "Serviços de contabilidade",
        "DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA",
        -450,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Operações",
        "Compra de insumos para expedição",
        "PRIME BOX EMBALAGENS PAPELAO LTDA",
        -2170,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ORNATA DOMUS COMPANY LTDA",
        -11000.8,
        "A_PAGAR"
      ],
      [
        "12/09/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "LINKTREE",
        -1.47,
        "A_PAGAR"
      ],
      [
        "12/09/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "LINKTREE",
        -42,
        "A_PAGAR"
      ],
      [
        "12/09/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "12/09/2026",
        "Despesas administrativas",
        "Despesas administrativas",
        "CLARO S.A.",
        -30,
        "A_PAGAR"
      ],
      [
        "11/09/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "CRISTIANE SANCHES ROCAILKS",
        -150,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Despesas com aluguéis",
        "Despesas com aluguéis para uso",
        "PAULO CESAR LOPES (ROPE)",
        -2500,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "MERCADO LIVRE",
        -383,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ESCOBAR & CORREA LTDA - ESCOSEG",
        -150,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "MERCADO LIVRE",
        -9.9,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Despesas operacionais",
        "Luz, água e outros",
        "MAYARA B. G. FERNANDES - FTI NET",
        -69,
        "A_PAGAR"
      ],
      [
        "09/09/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas administrativas",
        "Despesas com benefícios aos sócios e diretores",
        "JOAO EDUARDO GONCALVES NOGUEIRA",
        -200,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas administrativas",
        "Despesas com benefícios aos sócios e diretores",
        "SAMUEL ANTONIO DE SOUZA MARTINS",
        -200,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -6988.06,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com serviços",
        "Serviços de contabilidade",
        "GUILHERME TORCHETTI LOUREIRO DA SILVA",
        -1000,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "LEANDRO MARTINS BELCHIOR DA SILVA",
        -150,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "MARIA LAURA DE MELLO LINO",
        -150,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "AMANDA LOPES PAIS",
        -150,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "DANIELLY DE SOUSA SILVA",
        -150,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "KARINA DE LIMA TENORIO",
        -150,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "ISABELA TENORIO BARONE",
        -150,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "VITORIA CRISTINA TANGODA MAIA",
        -150,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "POLYANA CECILIA ALMEIDA FERREIRA",
        -150,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "RAFAEL DOS SANTOS PILIELO",
        -150,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "DANIELLY DE SOUSA SILVA",
        -1662.63,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "ISABELA TENORIO BARONE",
        -1957.35,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "AMANDA LOPES PAIS",
        -1662.63,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "KARINA DE LIMA TENORIO",
        -1957.35,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "POLYANA CECILIA ALMEIDA FERREIRA",
        -2321.35,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "LEANDRO MARTINS BELCHIOR DA SILVA",
        -1957.35,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "VITORIA CRISTINA TANGODA MAIA",
        -1662.32,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "MARIA LAURA DE MELLO LINO",
        -2008.12,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "RAFAEL DOS SANTOS PILIELO",
        -2200,
        "A_PAGAR"
      ],
      [
        "05/09/2026",
        "Operações",
        "Compra de mercadorias",
        "ENNATERRA AROMATIZADORES LTDA",
        -5300,
        "A_PAGAR"
      ],
      [
        "04/09/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "CRISTIANE SANCHES ROCAILKS",
        -150,
        "A_PAGAR"
      ],
      [
        "02/09/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "02/09/2026",
        "Despesas operacionais",
        "Luz, água e outros",
        "COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP",
        -234.99,
        "A_PAGAR"
      ],
      [
        "01/09/2026",
        "Despesas administrativas",
        "Despesas com alimentação",
        "MARLENE DE SOUZA SILVA LTDA - PADARIA NOVA OPÇÃO",
        -644,
        "A_PAGAR"
      ],
      [
        "31/08/2026",
        "Operações",
        "Compra de insumos para expedição",
        "PRIME BOX EMBALAGENS PAPELAO LTDA",
        -2170,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -6988.06,
        "A_PAGAR"
      ],
      [
        "29/08/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "NIBO SOFTWARES E CURSOS LTDA.",
        -479,
        "A_PAGAR"
      ],
      [
        "28/08/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "CRISTIANE SANCHES ROCAILKS",
        -150,
        "A_PAGAR"
      ],
      [
        "27/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -7646.18,
        "A_PAGAR"
      ],
      [
        "26/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "26/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "PUMP AMERICA INDUSTRIA DE VALVULAS LTDA",
        -988,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "MARRI CONSULTORIA EMPRESARIAL LTDA",
        -2431.5,
        "A_PAGAR"
      ],
      [
        "24/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA",
        -3261.52,
        "A_PAGAR"
      ],
      [
        "23/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -6988.06,
        "A_PAGAR"
      ],
      [
        "22/08/2026",
        "Operações",
        "Compra de insumos para expedição",
        "PRIME BOX EMBALAGENS PAPELAO LTDA",
        -2209.26,
        "A_PAGAR"
      ],
      [
        "21/08/2026",
        "Despesas com serviços",
        "Despesas com frete para devolução e reenvio",
        "EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS",
        -500,
        "A_PAGAR"
      ],
      [
        "21/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA",
        -888.91,
        "A_PAGAR"
      ],
      [
        "21/08/2026",
        "Operações",
        "Compra de insumos para expedição",
        "PRIME BOX EMBALAGENS PAPELAO LTDA",
        -81.67,
        "A_PAGAR"
      ],
      [
        "21/08/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "CRISTIANE SANCHES ROCAILKS",
        -150,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "JOSE AMARAL DE ALMEIDA - DESIGNER",
        -700,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "SMART PRODUTOS QUIMICOS LTDA",
        -6227.36,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -7646.18,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Operações",
        "Impostos sobre receita",
        "SIMPLES NACIONAL",
        -17014.29,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Despesas operacionais",
        "Luz, água e outros",
        "ELEKTRO REDES S.A.",
        -370,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "CAIXA ECONOMICA FEDERAL",
        -496.71,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "CAIXA ECONOMICA FEDERAL",
        -1171.55,
        "A_PAGAR"
      ],
      [
        "19/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "19/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "PUMP AMERICA INDUSTRIA DE VALVULAS LTDA",
        -988,
        "A_PAGAR"
      ],
      [
        "18/08/2026",
        "Operações",
        "Compra de insumos para expedição",
        "PRIME BOX EMBALAGENS PAPELAO LTDA",
        -2170,
        "A_PAGAR"
      ],
      [
        "17/08/2026",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -4037.57,
        "A_PAGAR"
      ],
      [
        "17/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA",
        -3261.52,
        "A_PAGAR"
      ],
      [
        "16/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -6988.06,
        "A_PAGAR"
      ],
      [
        "15/08/2026",
        "Despesas com serviços",
        "Serviços de contabilidade",
        "DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA",
        -450,
        "A_PAGAR"
      ],
      [
        "15/08/2026",
        "Operações",
        "Compra de mercadorias",
        "EMMILY REGINA COSMO BETARELLO - FLORAE",
        -9342.5,
        "A_PAGAR"
      ],
      [
        "15/08/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ORNATA DOMUS COMPANY LTDA",
        -11000.8,
        "A_PAGAR"
      ],
      [
        "14/08/2026",
        "Operações",
        "Compra de mercadorias",
        "ENNATERRA AROMATIZADORES LTDA",
        -1700,
        "A_PAGAR"
      ],
      [
        "14/08/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "CRISTIANE SANCHES ROCAILKS",
        -150,
        "A_PAGAR"
      ],
      [
        "13/08/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "TAMBASA - TECIDOS E ARMARINHOS MIGUEL BARTOLOMEU S/A",
        -183.12,
        "A_PAGAR"
      ],
      [
        "13/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -7646.18,
        "A_PAGAR"
      ],
      [
        "13/08/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "TAMBASA - TECIDOS E ARMARINHOS MIGUEL BARTOLOMEU S/A",
        -564.32,
        "A_PAGAR"
      ],
      [
        "12/08/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "LINKTREE",
        -42,
        "A_PAGAR"
      ],
      [
        "12/08/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "LINKTREE",
        -1.47,
        "A_PAGAR"
      ],
      [
        "12/08/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "12/08/2026",
        "Despesas administrativas",
        "Despesas administrativas",
        "CLARO S.A.",
        -30,
        "A_PAGAR"
      ],
      [
        "12/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA",
        -973.35,
        "A_PAGAR"
      ],
      [
        "12/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "PUMP AMERICA INDUSTRIA DE VALVULAS LTDA",
        -988,
        "A_PAGAR"
      ],
      [
        "12/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)",
        -36,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR",
        -19.5,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "MERCADO LIVRE",
        -301.9,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Despesas com aluguéis",
        "Despesas com aluguéis para uso",
        "PAULO CESAR LOPES (ROPE)",
        -2500,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)",
        -4,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)",
        -45.4,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)",
        -25,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)",
        -28.4,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "PUMP AMERICA INDUSTRIA DE VALVULAS LTDA",
        -1029.73,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA",
        -3300,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA",
        -3261.52,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Operações",
        "Compra de insumos para expedição",
        "AURIPELL EMBALAGENS LTDA",
        -899.32,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Marketing e publicidade",
        "Despesas com ADS",
        "SHOPEE",
        -3500,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Marketing e publicidade",
        "Despesas com ADS",
        "SHOPEE",
        -1000,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "MERCADO LIVRE",
        -383,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ESCOBAR & CORREA LTDA - ESCOSEG",
        -150,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "MERCADO LIVRE",
        -9.9,
        "A_PAGAR"
      ]
    ],
    "KPIS": {
      "TOTAL_RECEITA": 827446.28,
      "TOTAL_DESPESA": 587580.03,
      "VALOR_LIQUIDO": 239866.25,
      "MARGEM_LIQUIDA": 28.988739909495997,
      "VALOR_LIQ_SERIES": [
        0,
        0,
        0,
        0,
        0,
        0,
        -23556.459999999992,
        57636.22,
        137833.61,
        75550.73000000001,
        -3891.12,
        -3706.7299999999996
      ]
    },
    "RECEITA_DIA": [
      18600,
      24600,
      27100,
      24600,
      27100,
      18600,
      33100,
      18600,
      34100,
      27100,
      34100,
      27100,
      18600,
      42600,
      20562.63,
      18600,
      42683.65,
      24600,
      18600,
      27100,
      33100,
      18600,
      18600,
      33100,
      34100,
      18600,
      27100,
      42600,
      18600,
      18600,
      36400
    ],
    "DESPESA_DIA": [
      4532,
      9104.97,
      4291.25,
      150,
      25266.440000000002,
      75133.20999999999,
      10609.27,
      0,
      15388.08,
      22403.470000000005,
      150,
      10556.709999999997,
      8393.62,
      12279,
      86885.26000000001,
      28347.38,
      17767.77,
      2816.9,
      9238,
      82077.50000000001,
      23862.629999999997,
      16579.4,
      26690.440000000002,
      11830.2,
      8863.470000000001,
      11309.380000000001,
      20537.46,
      3748.91,
      11892.16,
      22884.24,
      3990.91
    ],
    "SALDOS_MES": [
      0,
      0,
      0,
      0,
      0,
      0,
      -23556.459999999992,
      34079.76000000001,
      171913.37,
      247464.1,
      243572.98,
      239866.25
    ],
    "FLUXO_RECEITA": [
      {
        "cat": "Repasse de vendas",
        "values": [
          0,
          0,
          0,
          0,
          0,
          0,
          159400,
          277700,
          263000,
          125300,
          0,
          0
        ]
      },
      {
        "cat": "Receita com vendas",
        "values": [
          0,
          0,
          0,
          0,
          0,
          0,
          2046.2800000000002,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "FLUXO_DESPESA": [
      {
        "cat": "Compra de matéria-prima",
        "values": [
          0,
          0,
          0,
          0,
          0,
          0,
          -98683.54000000001,
          -122112.58000000002,
          -54465.42,
          -16500,
          0,
          0
        ]
      },
      {
        "cat": "Salários e encargos",
        "values": [
          0,
          0,
          0,
          0,
          0,
          0,
          -1668.26,
          -19057.36,
          -19057.36,
          -17389.100000000002,
          0,
          0
        ]
      },
      {
        "cat": "Impostos sobre receita",
        "values": [
          0,
          0,
          0,
          0,
          0,
          0,
          -18703.5,
          -17014.29,
          -17014.29,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Compra de mercadorias",
        "values": [
          0,
          0,
          0,
          0,
          0,
          0,
          -17115.5,
          -18042.5,
          -5300,
          -5300,
          0,
          0
        ]
      },
      {
        "cat": "Despesas com outros serviços contratados",
        "values": [
          0,
          0,
          0,
          0,
          0,
          0,
          -13882.3,
          -14192.199999999999,
          -14192.199999999999,
          -459.9,
          0,
          0
        ]
      }
    ],
    "COMP_DATA": [
      {
        "tipo": "Receita",
        "isHeader": true,
        "d1": 0,
        "d2": 0
      },
      {
        "tipo": "Despesa",
        "isHeader": true,
        "d1": 0,
        "d2": 0
      }
    ]
  },
  "tudo": {
    "MONTH_DATA": [
      {
        "m": "janeiro",
        "receita": 124919.87999999999,
        "despesa": 117900.88000000002
      },
      {
        "m": "fevereiro",
        "receita": 306524.62,
        "despesa": 269523.42999999993
      },
      {
        "m": "março",
        "receita": 253411.10999999996,
        "despesa": 222057.24999999997
      },
      {
        "m": "abril",
        "receita": 234936.46000000002,
        "despesa": 282343.77999999997
      },
      {
        "m": "maio",
        "receita": 279286.37999999983,
        "despesa": 255911.34999999992
      },
      {
        "m": "junho",
        "receita": 322882.83,
        "despesa": 313268.35000000003
      },
      {
        "m": "julho",
        "receita": 307672.72,
        "despesa": 285259.4499999999
      },
      {
        "m": "agosto",
        "receita": 277700,
        "despesa": 220063.78
      },
      {
        "m": "setembro",
        "receita": 263000,
        "despesa": 125166.39000000001
      },
      {
        "m": "outubro",
        "receita": 125300,
        "despesa": 49749.27
      },
      {
        "m": "novembro",
        "receita": 0,
        "despesa": 3891.12
      },
      {
        "m": "dezembro",
        "receita": 0,
        "despesa": 3706.7299999999996
      }
    ],
    "RECEITA_CATEGORIAS": [
      {
        "name": "Repasse de vendas",
        "value": 2328260.109999999,
        "clientes": 5
      },
      {
        "name": "Obtenção de empréstimo",
        "value": 110000,
        "clientes": 1
      },
      {
        "name": "Outras receitas (Não considerar DRE)",
        "value": 28978.820000000003,
        "clientes": 19
      },
      {
        "name": "Receita com vendas",
        "value": 25937.759999999995,
        "clientes": 7
      },
      {
        "name": "Rendimento de investimentos",
        "value": 2271.63,
        "clientes": 2
      },
      {
        "name": "Outras receitas",
        "value": 121.25,
        "clientes": 2
      },
      {
        "name": "Receita por troca/adição de produtos em pedido",
        "value": 64.43,
        "clientes": 1
      }
    ],
    "DESPESA_CATEGORIAS": [
      {
        "name": "Compra de matéria-prima",
        "value": 1122751.8100000017,
        "fornecedores": 20
      },
      {
        "name": "Salários e encargos",
        "value": 137617.64000000013,
        "fornecedores": 11
      },
      {
        "name": "Compra de mercadorias",
        "value": 131941.81,
        "fornecedores": 4
      },
      {
        "name": "Despesas com ADS",
        "value": 99901.07000000002,
        "fornecedores": 2
      },
      {
        "name": "Impostos sobre receita",
        "value": 98736.93000000002,
        "fornecedores": 1
      },
      {
        "name": "Despesas com outros serviços contratados",
        "value": 93488.79999999999,
        "fornecedores": 16
      },
      {
        "name": "Pagamento de empréstimo",
        "value": 92451.82000000002,
        "fornecedores": 1
      },
      {
        "name": "Compra de insumos para expedição",
        "value": 85102.21000000002,
        "fornecedores": 13
      },
      {
        "name": "Compra de ativo imobilizado",
        "value": 47768.44,
        "fornecedores": 12
      },
      {
        "name": "Frete para compra de material",
        "value": 38584.98999999999,
        "fornecedores": 15
      },
      {
        "name": "Outras despesas (Não considerar DRE)",
        "value": 27157.68,
        "fornecedores": 18
      },
      {
        "name": "Despesas administrativas",
        "value": 26202.639999999996,
        "fornecedores": 19
      },
      {
        "name": "Despesas com aluguéis para uso",
        "value": 25000,
        "fornecedores": 2
      },
      {
        "name": "Serviços de contabilidade",
        "value": 14376,
        "fornecedores": 2
      },
      {
        "name": "Despesas com materiais de consumo",
        "value": 11060.699999999997,
        "fornecedores": 10
      },
      {
        "name": "Despesas com frete para devolução e reenvio",
        "value": 10598.43,
        "fornecedores": 1
      },
      {
        "name": "Vale-Refeição (VR)",
        "value": 10431.16,
        "fornecedores": 11
      },
      {
        "name": "Serviços de sistema de gestão",
        "value": 9997.669999999998,
        "fornecedores": 6
      },
      {
        "name": "Custo com horas extras setor de produção",
        "value": 8757.61,
        "fornecedores": 12
      },
      {
        "name": "Impostos e Taxas",
        "value": 7421.150000000001,
        "fornecedores": 2
      },
      {
        "name": "Serviços contratados para marketing",
        "value": 6778.17,
        "fornecedores": 2
      },
      {
        "name": "Compra de insumos para produção",
        "value": 6638.040000000001,
        "fornecedores": 6
      },
      {
        "name": "Luz, água e outros",
        "value": 5988.759999999999,
        "fornecedores": 3
      },
      {
        "name": "Despesa com materiais de uso e consumo operacional",
        "value": 5775.95,
        "fornecedores": 5
      },
      {
        "name": "Despesas com alimentação",
        "value": 4963.83,
        "fornecedores": 7
      },
      {
        "name": "Despesas com benefícios aos sócios e diretores",
        "value": 3200,
        "fornecedores": 2
      },
      {
        "name": "Comissões",
        "value": 3052.4300000000003,
        "fornecedores": 2
      },
      {
        "name": "Despesa com férias de funcionário",
        "value": 2669.29,
        "fornecedores": 1
      },
      {
        "name": "Manutenção predial e benfeitorias",
        "value": 2567.4,
        "fornecedores": 5
      },
      {
        "name": "Despesas com viagens",
        "value": 2530.5800000000004,
        "fornecedores": 12
      },
      {
        "name": "Outros gastos com publicidade",
        "value": 1555.99,
        "fornecedores": 1
      },
      {
        "name": "Vestuário de trabalho",
        "value": 1467,
        "fornecedores": 1
      },
      {
        "name": "Bonificações, Brindes e Festividades",
        "value": 650,
        "fornecedores": 5
      },
      {
        "name": "Outras despesas",
        "value": 500,
        "fornecedores": 3
      },
      {
        "name": "Frete para compra de material (Não considerar DRE)",
        "value": 419.24,
        "fornecedores": 2
      },
      {
        "name": "Bens de consumo com publicidade",
        "value": 262.40000000000003,
        "fornecedores": 2
      },
      {
        "name": "Taxas e Encargos Bancários",
        "value": 194.82000000000002,
        "fornecedores": 1
      },
      {
        "name": "Direitos a receber",
        "value": 120,
        "fornecedores": 1
      },
      {
        "name": "Reembolsos por fora de marketplaces",
        "value": 94.9,
        "fornecedores": 1
      },
      {
        "name": "Juros e Multas",
        "value": 64.42,
        "fornecedores": 1
      }
    ],
    "RECEITA_CLIENTES": [
      {
        "name": "SHOPEE",
        "value": 1325965.1400000001
      },
      {
        "name": "SHEIN",
        "value": 344744.77000000014
      },
      {
        "name": "TIKTOK",
        "value": 304582.76
      },
      {
        "name": "MERCADO LIVRE",
        "value": 229700
      },
      {
        "name": "ORNATA DOMUS COMPANY LTDA",
        "value": 138033.90000000002
      },
      {
        "name": "AMAZON",
        "value": 123267.44
      },
      {
        "name": "VENDA FÍSICA",
        "value": 5648.750000000002
      },
      {
        "name": "SAMUEL ANTONIO DE SOUZA MARTINS",
        "value": 4550
      },
      {
        "name": "JOAO ANTONIO DA SILVA DOS SANTOS",
        "value": 3000
      },
      {
        "name": "MARIA LAURA DE MELLO LINO",
        "value": 2176.54
      },
      {
        "name": "VITORIA LEAO DE LIMA",
        "value": 1800
      },
      {
        "name": "MERCADO PAGO",
        "value": 1793.0499999999997
      }
    ],
    "DESPESA_FORNECEDORES": [
      {
        "name": "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        "value": 387308.93999999994
      },
      {
        "name": "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        "value": 237125
      },
      {
        "name": "ORNATA DOMUS COMPANY LTDA",
        "value": 205240.67
      },
      {
        "name": "SIMPLES NACIONAL",
        "value": 98736.93000000002
      },
      {
        "name": "SHOPEE",
        "value": 84481.41
      },
      {
        "name": "SYMRISE AROMAS E FRAGRANCIAS LTDA",
        "value": 80400.46
      },
      {
        "name": "CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA",
        "value": 79652.54000000001
      },
      {
        "name": "EMMILY REGINA COSMO BETARELLO - FLORAE",
        "value": 78812
      },
      {
        "name": "FORMULARIOS COVOLAN LTDA.",
        "value": 66150
      },
      {
        "name": "LEADPAK SOLUCOES DE FORNECIMENTO LTDA",
        "value": 60112.170000000006
      },
      {
        "name": "PRIME BOX EMBALAGENS PAPELAO LTDA",
        "value": 59885.869999999995
      },
      {
        "name": "ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA",
        "value": 57817.34999999999
      }
    ],
    "EXTRATO": [
      [
        "15/02/2030",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2329.79,
        "A_PAGAR"
      ],
      [
        "15/01/2030",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2362.95,
        "A_PAGAR"
      ],
      [
        "17/12/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2406.03,
        "A_PAGAR"
      ],
      [
        "16/11/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2449.11,
        "A_PAGAR"
      ],
      [
        "15/10/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2463.69,
        "A_PAGAR"
      ],
      [
        "17/09/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2535.28,
        "A_PAGAR"
      ],
      [
        "15/08/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2549.84,
        "A_PAGAR"
      ],
      [
        "16/07/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2596.64,
        "A_PAGAR"
      ],
      [
        "15/06/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2634.76,
        "A_PAGAR"
      ],
      [
        "15/05/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2648.1,
        "A_PAGAR"
      ],
      [
        "16/04/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2724.64,
        "A_PAGAR"
      ],
      [
        "15/03/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2704.52,
        "A_PAGAR"
      ],
      [
        "15/02/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2787.24,
        "A_PAGAR"
      ],
      [
        "15/01/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2824.61,
        "A_PAGAR"
      ],
      [
        "15/12/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2824.84,
        "A_PAGAR"
      ],
      [
        "16/11/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2899.93,
        "A_PAGAR"
      ],
      [
        "16/10/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2937.94,
        "A_PAGAR"
      ],
      [
        "15/09/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2975.96,
        "A_PAGAR"
      ],
      [
        "15/08/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2967.02,
        "A_PAGAR"
      ],
      [
        "17/07/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3051.99,
        "A_PAGAR"
      ],
      [
        "16/06/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3115.98,
        "A_PAGAR"
      ],
      [
        "15/05/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3046.49,
        "A_PAGAR"
      ],
      [
        "17/04/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3222.95,
        "A_PAGAR"
      ],
      [
        "15/03/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3144.74,
        "A_PAGAR"
      ],
      [
        "15/02/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3180.28,
        "A_PAGAR"
      ],
      [
        "17/01/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3345.83,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3254.02,
        "A_PAGAR"
      ],
      [
        "16/11/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3393.79,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3361.24,
        "A_PAGAR"
      ],
      [
        "15/09/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3398.12,
        "A_PAGAR"
      ],
      [
        "16/08/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3511.88,
        "A_PAGAR"
      ],
      [
        "15/07/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3471.88,
        "A_PAGAR"
      ],
      [
        "15/06/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3467.88,
        "A_PAGAR"
      ],
      [
        "17/05/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3629.96,
        "A_PAGAR"
      ],
      [
        "15/04/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3625.91,
        "A_PAGAR"
      ],
      [
        "12/04/2027",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "15/03/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3530.23,
        "A_PAGAR"
      ],
      [
        "12/03/2027",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "10/03/2027",
        "Operações",
        "Compra de ativo intangível",
        "HOSTGATOR BRASIL LTDA",
        -221.96,
        "A_PAGAR"
      ],
      [
        "15/02/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3702.16,
        "A_PAGAR"
      ],
      [
        "12/02/2027",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "15/01/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3740.28,
        "A_PAGAR"
      ],
      [
        "12/01/2027",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "15/12/2026",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3681.74,
        "A_PAGAR"
      ],
      [
        "12/12/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "16/11/2026",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3866.13,
        "A_PAGAR"
      ],
      [
        "12/11/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "15/10/2026",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3803.82,
        "A_PAGAR"
      ],
      [
        "14/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "14/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "14/10/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "13/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "13/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "12/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "12/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        8500,
        "A_PAGAR"
      ],
      [
        "12/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "12/10/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "LINKTREE",
        -42,
        "A_PAGAR"
      ],
      [
        "12/10/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "LINKTREE",
        -1.47,
        "A_PAGAR"
      ],
      [
        "12/10/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "12/10/2026",
        "Despesas administrativas",
        "Despesas administrativas",
        "CLARO S.A.",
        -30,
        "A_PAGAR"
      ],
      [
        "11/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "11/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Despesas com aluguéis",
        "Despesas com aluguéis para uso",
        "PAULO CESAR LOPES (ROPE)",
        -2500,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ESCOBAR & CORREA LTDA - ESCOSEG",
        -150,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "MERCADO LIVRE",
        -9.9,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Despesas operacionais",
        "Luz, água e outros",
        "MAYARA B. G. FERNANDES - FTI NET",
        -69,
        "A_PAGAR"
      ],
      [
        "09/10/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        9500,
        "A_PAGAR"
      ],
      [
        "09/10/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        6000,
        "A_PAGAR"
      ],
      [
        "09/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "09/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "09/10/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "CRISTIANE SANCHES ROCAILKS",
        -150,
        "A_PAGAR"
      ],
      [
        "08/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "08/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "07/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "07/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "07/10/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas administrativas",
        "Despesas com benefícios aos sócios e diretores",
        "JOAO EDUARDO GONCALVES NOGUEIRA",
        -200,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas administrativas",
        "Despesas com benefícios aos sócios e diretores",
        "SAMUEL ANTONIO DE SOUZA MARTINS",
        -200,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com serviços",
        "Serviços de contabilidade",
        "GUILHERME TORCHETTI LOUREIRO DA SILVA",
        -1000,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "AMANDA LOPES PAIS",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "KARINA DE LIMA TENORIO",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "LEANDRO MARTINS BELCHIOR DA SILVA",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "RAFAEL DOS SANTOS PILIELO",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "DANIELLY DE SOUSA SILVA",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "MARIA LAURA DE MELLO LINO",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "ISABELA TENORIO BARONE",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "VITORIA CRISTINA TANGODA MAIA",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "POLYANA CECILIA ALMEIDA FERREIRA",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "VITORIA CRISTINA TANGODA MAIA",
        -1662.32,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "ISABELA TENORIO BARONE",
        -1957.35,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "LEANDRO MARTINS BELCHIOR DA SILVA",
        -1957.35,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "POLYANA CECILIA ALMEIDA FERREIRA",
        -2321.35,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "KARINA DE LIMA TENORIO",
        -1957.35,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "AMANDA LOPES PAIS",
        -1662.63,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "DANIELLY DE SOUSA SILVA",
        -1662.63,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "RAFAEL DOS SANTOS PILIELO",
        -2200,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "MARIA LAURA DE MELLO LINO",
        -2008.12,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        8500,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Operações",
        "Compra de mercadorias",
        "ENNATERRA AROMATIZADORES LTDA",
        -5300,
        "A_PAGAR"
      ],
      [
        "04/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "04/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "03/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "03/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "02/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "02/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "02/10/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        6000,
        "A_PAGAR"
      ],
      [
        "02/10/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "CRISTIANE SANCHES ROCAILKS",
        -150,
        "A_PAGAR"
      ],
      [
        "02/10/2026",
        "Despesas operacionais",
        "Luz, água e outros",
        "COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP",
        -234.99,
        "A_PAGAR"
      ],
      [
        "01/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "01/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "01/10/2026",
        "Despesas administrativas",
        "Despesas com alimentação",
        "MARLENE DE SOUZA SILVA LTDA - PADARIA NOVA OPÇÃO",
        -644,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "29/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "29/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "29/09/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "NIBO SOFTWARES E CURSOS LTDA.",
        -479,
        "A_PAGAR"
      ],
      [
        "28/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "28/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "28/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        8500,
        "A_PAGAR"
      ],
      [
        "27/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "27/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "26/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "26/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        6000,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        9500,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "MARRI CONSULTORIA EMPRESARIAL LTDA",
        -2431.5,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "CRISTIANE SANCHES ROCAILKS",
        -150,
        "A_PAGAR"
      ],
      [
        "24/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "24/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "23/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "23/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "23/09/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "22/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "22/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "21/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "21/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "21/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        8500,
        "A_PAGAR"
      ],
      [
        "21/09/2026",
        "Despesas com serviços",
        "Despesas com frete para devolução e reenvio",
        "EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS",
        -500,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "JOSE AMARAL DE ALMEIDA - DESIGNER",
        -700,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Operações",
        "Compra de matéria-prima",
        "SMART PRODUTOS QUIMICOS LTDA",
        -6227.36,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Operações",
        "Impostos sobre receita",
        "SIMPLES NACIONAL",
        -17014.29,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Despesas operacionais",
        "Luz, água e outros",
        "ELEKTRO REDES S.A.",
        -370,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "CAIXA ECONOMICA FEDERAL",
        -496.71,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "CAIXA ECONOMICA FEDERAL",
        -1171.55,
        "A_PAGAR"
      ],
      [
        "19/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "19/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        6000,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "CRISTIANE SANCHES ROCAILKS",
        -150,
        "A_PAGAR"
      ],
      [
        "17/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "17/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "16/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "16/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "16/09/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3788.67,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Despesas com serviços",
        "Serviços de contabilidade",
        "DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA",
        -450,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Operações",
        "Compra de insumos para expedição",
        "PRIME BOX EMBALAGENS PAPELAO LTDA",
        -2170,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ORNATA DOMUS COMPANY LTDA",
        -11000.8,
        "A_PAGAR"
      ],
      [
        "14/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        8500,
        "A_PAGAR"
      ],
      [
        "14/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "14/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "13/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "13/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "12/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "12/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "12/09/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "LINKTREE",
        -1.47,
        "A_PAGAR"
      ],
      [
        "12/09/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "LINKTREE",
        -42,
        "A_PAGAR"
      ],
      [
        "12/09/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "12/09/2026",
        "Despesas administrativas",
        "Despesas administrativas",
        "CLARO S.A.",
        -30,
        "A_PAGAR"
      ],
      [
        "11/09/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        6000,
        "A_PAGAR"
      ],
      [
        "11/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "11/09/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        9500,
        "A_PAGAR"
      ],
      [
        "11/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "11/09/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "CRISTIANE SANCHES ROCAILKS",
        -150,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Despesas com aluguéis",
        "Despesas com aluguéis para uso",
        "PAULO CESAR LOPES (ROPE)",
        -2500,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "MERCADO LIVRE",
        -383,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ESCOBAR & CORREA LTDA - ESCOSEG",
        -150,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "MERCADO LIVRE",
        -9.9,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Despesas operacionais",
        "Luz, água e outros",
        "MAYARA B. G. FERNANDES - FTI NET",
        -69,
        "A_PAGAR"
      ],
      [
        "09/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "09/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "09/09/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "08/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "08/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ]
    ],
    "EXTRATO_RECEITAS": [
      [
        "14/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "14/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "13/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "13/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "12/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "12/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        8500,
        "A_PAGAR"
      ],
      [
        "12/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "11/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "11/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "09/10/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        9500,
        "A_PAGAR"
      ],
      [
        "09/10/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        6000,
        "A_PAGAR"
      ],
      [
        "09/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "09/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "08/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "08/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "07/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "07/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        8500,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "04/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "04/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "03/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "03/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "02/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "02/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "02/10/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        6000,
        "A_PAGAR"
      ],
      [
        "01/10/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "01/10/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "29/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "29/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "28/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "28/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "28/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        8500,
        "A_PAGAR"
      ],
      [
        "27/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "27/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "26/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "26/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        6000,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        9500,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "24/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "24/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "23/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "23/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "22/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "22/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "21/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "21/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "21/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        8500,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "19/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "19/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        6000,
        "A_PAGAR"
      ],
      [
        "17/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "17/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "16/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "16/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "14/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        8500,
        "A_PAGAR"
      ],
      [
        "14/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "14/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "13/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "13/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "12/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "12/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "11/09/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        6000,
        "A_PAGAR"
      ],
      [
        "11/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "11/09/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        9500,
        "A_PAGAR"
      ],
      [
        "11/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "09/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "09/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "08/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "08/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "07/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        8500,
        "A_PAGAR"
      ],
      [
        "07/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "07/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "05/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "05/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "04/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "04/09/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        6000,
        "A_PAGAR"
      ],
      [
        "04/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "03/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "03/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "02/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "02/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "01/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "01/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "31/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "31/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        8500,
        "A_PAGAR"
      ],
      [
        "31/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "29/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "29/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "28/08/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        9500,
        "A_PAGAR"
      ],
      [
        "28/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "28/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "28/08/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        6000,
        "A_PAGAR"
      ],
      [
        "27/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "27/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "26/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "26/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "24/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "24/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        8500,
        "A_PAGAR"
      ],
      [
        "24/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "23/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "23/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "22/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "22/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "21/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "21/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "21/08/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        6000,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "19/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "19/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "18/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "18/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "17/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        8500,
        "A_PAGAR"
      ],
      [
        "17/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "17/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "16/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "16/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "15/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "15/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "14/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "14/08/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        9500,
        "A_PAGAR"
      ],
      [
        "14/08/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        6000,
        "A_PAGAR"
      ],
      [
        "14/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "13/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "13/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "12/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "12/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "11/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "11/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        8500,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "09/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "09/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "08/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "08/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "07/08/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        6000,
        "A_PAGAR"
      ],
      [
        "07/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "07/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "05/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "05/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "04/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "04/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "03/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "03/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        8500,
        "A_PAGAR"
      ],
      [
        "03/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "02/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "02/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "01/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "01/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "31/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "31/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "31/07/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        6000,
        "A_PAGAR"
      ],
      [
        "31/07/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        9500,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "29/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "29/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "28/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "28/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "27/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "27/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "27/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        8500,
        "A_PAGAR"
      ],
      [
        "26/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "26/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "24/07/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        6000,
        "A_PAGAR"
      ],
      [
        "24/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "24/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "23/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "23/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ],
      [
        "22/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2000,
        "A_PAGAR"
      ],
      [
        "22/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4200,
        "A_PAGAR"
      ]
    ],
    "EXTRATO_DESPESAS": [
      [
        "15/02/2030",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2329.79,
        "A_PAGAR"
      ],
      [
        "15/01/2030",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2362.95,
        "A_PAGAR"
      ],
      [
        "17/12/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2406.03,
        "A_PAGAR"
      ],
      [
        "16/11/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2449.11,
        "A_PAGAR"
      ],
      [
        "15/10/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2463.69,
        "A_PAGAR"
      ],
      [
        "17/09/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2535.28,
        "A_PAGAR"
      ],
      [
        "15/08/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2549.84,
        "A_PAGAR"
      ],
      [
        "16/07/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2596.64,
        "A_PAGAR"
      ],
      [
        "15/06/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2634.76,
        "A_PAGAR"
      ],
      [
        "15/05/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2648.1,
        "A_PAGAR"
      ],
      [
        "16/04/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2724.64,
        "A_PAGAR"
      ],
      [
        "15/03/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2704.52,
        "A_PAGAR"
      ],
      [
        "15/02/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2787.24,
        "A_PAGAR"
      ],
      [
        "15/01/2029",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2824.61,
        "A_PAGAR"
      ],
      [
        "15/12/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2824.84,
        "A_PAGAR"
      ],
      [
        "16/11/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2899.93,
        "A_PAGAR"
      ],
      [
        "16/10/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2937.94,
        "A_PAGAR"
      ],
      [
        "15/09/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2975.96,
        "A_PAGAR"
      ],
      [
        "15/08/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -2967.02,
        "A_PAGAR"
      ],
      [
        "17/07/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3051.99,
        "A_PAGAR"
      ],
      [
        "16/06/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3115.98,
        "A_PAGAR"
      ],
      [
        "15/05/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3046.49,
        "A_PAGAR"
      ],
      [
        "17/04/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3222.95,
        "A_PAGAR"
      ],
      [
        "15/03/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3144.74,
        "A_PAGAR"
      ],
      [
        "15/02/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3180.28,
        "A_PAGAR"
      ],
      [
        "17/01/2028",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3345.83,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3254.02,
        "A_PAGAR"
      ],
      [
        "16/11/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3393.79,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3361.24,
        "A_PAGAR"
      ],
      [
        "15/09/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3398.12,
        "A_PAGAR"
      ],
      [
        "16/08/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3511.88,
        "A_PAGAR"
      ],
      [
        "15/07/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3471.88,
        "A_PAGAR"
      ],
      [
        "15/06/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3467.88,
        "A_PAGAR"
      ],
      [
        "17/05/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3629.96,
        "A_PAGAR"
      ],
      [
        "15/04/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3625.91,
        "A_PAGAR"
      ],
      [
        "12/04/2027",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "15/03/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3530.23,
        "A_PAGAR"
      ],
      [
        "12/03/2027",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "10/03/2027",
        "Operações",
        "Compra de ativo intangível",
        "HOSTGATOR BRASIL LTDA",
        -221.96,
        "A_PAGAR"
      ],
      [
        "15/02/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3702.16,
        "A_PAGAR"
      ],
      [
        "12/02/2027",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "15/01/2027",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3740.28,
        "A_PAGAR"
      ],
      [
        "12/01/2027",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "15/12/2026",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3681.74,
        "A_PAGAR"
      ],
      [
        "12/12/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "16/11/2026",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3866.13,
        "A_PAGAR"
      ],
      [
        "12/11/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "15/10/2026",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3803.82,
        "A_PAGAR"
      ],
      [
        "14/10/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "12/10/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "LINKTREE",
        -42,
        "A_PAGAR"
      ],
      [
        "12/10/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "LINKTREE",
        -1.47,
        "A_PAGAR"
      ],
      [
        "12/10/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "12/10/2026",
        "Despesas administrativas",
        "Despesas administrativas",
        "CLARO S.A.",
        -30,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Despesas com aluguéis",
        "Despesas com aluguéis para uso",
        "PAULO CESAR LOPES (ROPE)",
        -2500,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ESCOBAR & CORREA LTDA - ESCOSEG",
        -150,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "MERCADO LIVRE",
        -9.9,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Despesas operacionais",
        "Luz, água e outros",
        "MAYARA B. G. FERNANDES - FTI NET",
        -69,
        "A_PAGAR"
      ],
      [
        "09/10/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "CRISTIANE SANCHES ROCAILKS",
        -150,
        "A_PAGAR"
      ],
      [
        "07/10/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas administrativas",
        "Despesas com benefícios aos sócios e diretores",
        "JOAO EDUARDO GONCALVES NOGUEIRA",
        -200,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas administrativas",
        "Despesas com benefícios aos sócios e diretores",
        "SAMUEL ANTONIO DE SOUZA MARTINS",
        -200,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com serviços",
        "Serviços de contabilidade",
        "GUILHERME TORCHETTI LOUREIRO DA SILVA",
        -1000,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "AMANDA LOPES PAIS",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "KARINA DE LIMA TENORIO",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "LEANDRO MARTINS BELCHIOR DA SILVA",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "RAFAEL DOS SANTOS PILIELO",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "DANIELLY DE SOUSA SILVA",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "MARIA LAURA DE MELLO LINO",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "ISABELA TENORIO BARONE",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "VITORIA CRISTINA TANGODA MAIA",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "POLYANA CECILIA ALMEIDA FERREIRA",
        -150,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "VITORIA CRISTINA TANGODA MAIA",
        -1662.32,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "ISABELA TENORIO BARONE",
        -1957.35,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "LEANDRO MARTINS BELCHIOR DA SILVA",
        -1957.35,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "POLYANA CECILIA ALMEIDA FERREIRA",
        -2321.35,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "KARINA DE LIMA TENORIO",
        -1957.35,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "AMANDA LOPES PAIS",
        -1662.63,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "DANIELLY DE SOUSA SILVA",
        -1662.63,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "RAFAEL DOS SANTOS PILIELO",
        -2200,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "MARIA LAURA DE MELLO LINO",
        -2008.12,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Operações",
        "Compra de mercadorias",
        "ENNATERRA AROMATIZADORES LTDA",
        -5300,
        "A_PAGAR"
      ],
      [
        "02/10/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "CRISTIANE SANCHES ROCAILKS",
        -150,
        "A_PAGAR"
      ],
      [
        "02/10/2026",
        "Despesas operacionais",
        "Luz, água e outros",
        "COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP",
        -234.99,
        "A_PAGAR"
      ],
      [
        "01/10/2026",
        "Despesas administrativas",
        "Despesas com alimentação",
        "MARLENE DE SOUZA SILVA LTDA - PADARIA NOVA OPÇÃO",
        -644,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "29/09/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "NIBO SOFTWARES E CURSOS LTDA.",
        -479,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "MARRI CONSULTORIA EMPRESARIAL LTDA",
        -2431.5,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "CRISTIANE SANCHES ROCAILKS",
        -150,
        "A_PAGAR"
      ],
      [
        "23/09/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "21/09/2026",
        "Despesas com serviços",
        "Despesas com frete para devolução e reenvio",
        "EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS",
        -500,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "JOSE AMARAL DE ALMEIDA - DESIGNER",
        -700,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Operações",
        "Compra de matéria-prima",
        "SMART PRODUTOS QUIMICOS LTDA",
        -6227.36,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Operações",
        "Impostos sobre receita",
        "SIMPLES NACIONAL",
        -17014.29,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Despesas operacionais",
        "Luz, água e outros",
        "ELEKTRO REDES S.A.",
        -370,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "CAIXA ECONOMICA FEDERAL",
        -496.71,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "CAIXA ECONOMICA FEDERAL",
        -1171.55,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "CRISTIANE SANCHES ROCAILKS",
        -150,
        "A_PAGAR"
      ],
      [
        "16/09/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3788.67,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Despesas com serviços",
        "Serviços de contabilidade",
        "DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA",
        -450,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Operações",
        "Compra de insumos para expedição",
        "PRIME BOX EMBALAGENS PAPELAO LTDA",
        -2170,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ORNATA DOMUS COMPANY LTDA",
        -11000.8,
        "A_PAGAR"
      ],
      [
        "12/09/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "LINKTREE",
        -1.47,
        "A_PAGAR"
      ],
      [
        "12/09/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "LINKTREE",
        -42,
        "A_PAGAR"
      ],
      [
        "12/09/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "12/09/2026",
        "Despesas administrativas",
        "Despesas administrativas",
        "CLARO S.A.",
        -30,
        "A_PAGAR"
      ],
      [
        "11/09/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "CRISTIANE SANCHES ROCAILKS",
        -150,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Despesas com aluguéis",
        "Despesas com aluguéis para uso",
        "PAULO CESAR LOPES (ROPE)",
        -2500,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "MERCADO LIVRE",
        -383,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ESCOBAR & CORREA LTDA - ESCOSEG",
        -150,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "MERCADO LIVRE",
        -9.9,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Despesas operacionais",
        "Luz, água e outros",
        "MAYARA B. G. FERNANDES - FTI NET",
        -69,
        "A_PAGAR"
      ],
      [
        "09/09/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas administrativas",
        "Despesas com benefícios aos sócios e diretores",
        "JOAO EDUARDO GONCALVES NOGUEIRA",
        -200,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas administrativas",
        "Despesas com benefícios aos sócios e diretores",
        "SAMUEL ANTONIO DE SOUZA MARTINS",
        -200,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -6988.06,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com serviços",
        "Serviços de contabilidade",
        "GUILHERME TORCHETTI LOUREIRO DA SILVA",
        -1000,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "LEANDRO MARTINS BELCHIOR DA SILVA",
        -150,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "MARIA LAURA DE MELLO LINO",
        -150,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "AMANDA LOPES PAIS",
        -150,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "DANIELLY DE SOUSA SILVA",
        -150,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "KARINA DE LIMA TENORIO",
        -150,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "ISABELA TENORIO BARONE",
        -150,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "VITORIA CRISTINA TANGODA MAIA",
        -150,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "POLYANA CECILIA ALMEIDA FERREIRA",
        -150,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "RAFAEL DOS SANTOS PILIELO",
        -150,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "DANIELLY DE SOUSA SILVA",
        -1662.63,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "ISABELA TENORIO BARONE",
        -1957.35,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "AMANDA LOPES PAIS",
        -1662.63,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "KARINA DE LIMA TENORIO",
        -1957.35,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "POLYANA CECILIA ALMEIDA FERREIRA",
        -2321.35,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "LEANDRO MARTINS BELCHIOR DA SILVA",
        -1957.35,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "VITORIA CRISTINA TANGODA MAIA",
        -1662.32,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "MARIA LAURA DE MELLO LINO",
        -2008.12,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "RAFAEL DOS SANTOS PILIELO",
        -2200,
        "A_PAGAR"
      ],
      [
        "05/09/2026",
        "Operações",
        "Compra de mercadorias",
        "ENNATERRA AROMATIZADORES LTDA",
        -5300,
        "A_PAGAR"
      ],
      [
        "04/09/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "CRISTIANE SANCHES ROCAILKS",
        -150,
        "A_PAGAR"
      ],
      [
        "02/09/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "02/09/2026",
        "Despesas operacionais",
        "Luz, água e outros",
        "COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP",
        -234.99,
        "A_PAGAR"
      ],
      [
        "01/09/2026",
        "Despesas administrativas",
        "Despesas com alimentação",
        "MARLENE DE SOUZA SILVA LTDA - PADARIA NOVA OPÇÃO",
        -644,
        "A_PAGAR"
      ],
      [
        "31/08/2026",
        "Operações",
        "Compra de insumos para expedição",
        "PRIME BOX EMBALAGENS PAPELAO LTDA",
        -2170,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -6988.06,
        "A_PAGAR"
      ],
      [
        "29/08/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "NIBO SOFTWARES E CURSOS LTDA.",
        -479,
        "A_PAGAR"
      ],
      [
        "28/08/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "CRISTIANE SANCHES ROCAILKS",
        -150,
        "A_PAGAR"
      ],
      [
        "27/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -7646.18,
        "A_PAGAR"
      ],
      [
        "26/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "26/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "PUMP AMERICA INDUSTRIA DE VALVULAS LTDA",
        -988,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "MARRI CONSULTORIA EMPRESARIAL LTDA",
        -2431.5,
        "A_PAGAR"
      ],
      [
        "24/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA",
        -3261.52,
        "A_PAGAR"
      ],
      [
        "23/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -6988.06,
        "A_PAGAR"
      ],
      [
        "22/08/2026",
        "Operações",
        "Compra de insumos para expedição",
        "PRIME BOX EMBALAGENS PAPELAO LTDA",
        -2209.26,
        "A_PAGAR"
      ],
      [
        "21/08/2026",
        "Despesas com serviços",
        "Despesas com frete para devolução e reenvio",
        "EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS",
        -500,
        "A_PAGAR"
      ],
      [
        "21/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA",
        -888.91,
        "A_PAGAR"
      ],
      [
        "21/08/2026",
        "Operações",
        "Compra de insumos para expedição",
        "PRIME BOX EMBALAGENS PAPELAO LTDA",
        -81.67,
        "A_PAGAR"
      ],
      [
        "21/08/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "CRISTIANE SANCHES ROCAILKS",
        -150,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "JOSE AMARAL DE ALMEIDA - DESIGNER",
        -700,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "SMART PRODUTOS QUIMICOS LTDA",
        -6227.36,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -7646.18,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Operações",
        "Impostos sobre receita",
        "SIMPLES NACIONAL",
        -17014.29,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Despesas operacionais",
        "Luz, água e outros",
        "ELEKTRO REDES S.A.",
        -370,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "CAIXA ECONOMICA FEDERAL",
        -496.71,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "CAIXA ECONOMICA FEDERAL",
        -1171.55,
        "A_PAGAR"
      ],
      [
        "19/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "19/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "PUMP AMERICA INDUSTRIA DE VALVULAS LTDA",
        -988,
        "A_PAGAR"
      ],
      [
        "18/08/2026",
        "Operações",
        "Compra de insumos para expedição",
        "PRIME BOX EMBALAGENS PAPELAO LTDA",
        -2170,
        "A_PAGAR"
      ],
      [
        "17/08/2026",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -4037.57,
        "A_PAGAR"
      ],
      [
        "17/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA",
        -3261.52,
        "A_PAGAR"
      ],
      [
        "16/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -6988.06,
        "A_PAGAR"
      ],
      [
        "15/08/2026",
        "Despesas com serviços",
        "Serviços de contabilidade",
        "DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA",
        -450,
        "A_PAGAR"
      ],
      [
        "15/08/2026",
        "Operações",
        "Compra de mercadorias",
        "EMMILY REGINA COSMO BETARELLO - FLORAE",
        -9342.5,
        "A_PAGAR"
      ],
      [
        "15/08/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ORNATA DOMUS COMPANY LTDA",
        -11000.8,
        "A_PAGAR"
      ],
      [
        "14/08/2026",
        "Operações",
        "Compra de mercadorias",
        "ENNATERRA AROMATIZADORES LTDA",
        -1700,
        "A_PAGAR"
      ],
      [
        "14/08/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "CRISTIANE SANCHES ROCAILKS",
        -150,
        "A_PAGAR"
      ],
      [
        "13/08/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "TAMBASA - TECIDOS E ARMARINHOS MIGUEL BARTOLOMEU S/A",
        -183.12,
        "A_PAGAR"
      ],
      [
        "13/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -7646.18,
        "A_PAGAR"
      ],
      [
        "13/08/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "TAMBASA - TECIDOS E ARMARINHOS MIGUEL BARTOLOMEU S/A",
        -564.32,
        "A_PAGAR"
      ],
      [
        "12/08/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "LINKTREE",
        -42,
        "A_PAGAR"
      ],
      [
        "12/08/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "LINKTREE",
        -1.47,
        "A_PAGAR"
      ],
      [
        "12/08/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "12/08/2026",
        "Despesas administrativas",
        "Despesas administrativas",
        "CLARO S.A.",
        -30,
        "A_PAGAR"
      ],
      [
        "12/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA",
        -973.35,
        "A_PAGAR"
      ],
      [
        "12/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "PUMP AMERICA INDUSTRIA DE VALVULAS LTDA",
        -988,
        "A_PAGAR"
      ],
      [
        "12/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)",
        -36,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR",
        -19.5,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "MERCADO LIVRE",
        -301.9,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Despesas com aluguéis",
        "Despesas com aluguéis para uso",
        "PAULO CESAR LOPES (ROPE)",
        -2500,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)",
        -4,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)",
        -45.4,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)",
        -25,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)",
        -28.4,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "PUMP AMERICA INDUSTRIA DE VALVULAS LTDA",
        -1029.73,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA",
        -3300,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA",
        -3261.52,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Operações",
        "Compra de insumos para expedição",
        "AURIPELL EMBALAGENS LTDA",
        -899.32,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Marketing e publicidade",
        "Despesas com ADS",
        "SHOPEE",
        -3500,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Marketing e publicidade",
        "Despesas com ADS",
        "SHOPEE",
        -1000,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "MERCADO LIVRE",
        -383,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ESCOBAR & CORREA LTDA - ESCOSEG",
        -150,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "MERCADO LIVRE",
        -9.9,
        "A_PAGAR"
      ]
    ],
    "KPIS": {
      "TOTAL_RECEITA": 2495634,
      "TOTAL_DESPESA": 2148841.78,
      "VALOR_LIQUIDO": 346792.2200000002,
      "MARGEM_LIQUIDA": 13.895956698778756,
      "VALOR_LIQ_SERIES": [
        7018.999999999971,
        37001.19000000006,
        31353.859999999986,
        -47407.31999999995,
        23375.02999999991,
        9614.479999999981,
        22413.270000000077,
        57636.22,
        137833.61,
        75550.73000000001,
        -3891.12,
        -3706.7299999999996
      ]
    },
    "RECEITA_DIA": [
      48876.1,
      97117.22000000002,
      62296.240000000005,
      187248.52000000002,
      81735.56999999999,
      80374.50000000001,
      70911.38999999998,
      75278.85,
      105144.45999999999,
      79851.28,
      87177.19,
      71675.73999999999,
      74160.22,
      111968.31,
      67989.76000000001,
      77130.62999999999,
      64007,
      100725.6,
      73752.70999999999,
      86653.89000000001,
      50997.91,
      90886.59000000001,
      95923.80999999998,
      68977.01,
      69067.4,
      81082.59999999999,
      79818.23999999999,
      63073.34,
      58422.24999999999,
      87459.07999999999,
      45850.59
    ],
    "DESPESA_DIA": [
      23191.820000000003,
      52691.26999999999,
      53088.170000000006,
      85843.21,
      82690.81,
      149300.6800000001,
      95107.96999999999,
      59199.96,
      36575.21,
      157498.18999999994,
      57213.330000000016,
      86576.56000000006,
      43406.61,
      54217.770000000004,
      135621.21,
      80166.54000000001,
      55761.159999999996,
      54184.780000000006,
      45678.43,
      187325.01999999996,
      48140.43,
      51577.19000000001,
      75436.7,
      70535.64000000001,
      36915.229999999996,
      49262.02,
      66289.05,
      36313.509999999995,
      31909.989999999998,
      73714.17,
      13409.15
    ],
    "SALDOS_MES": [
      7018.999999999971,
      44020.19000000003,
      75374.05000000002,
      27966.73000000007,
      51341.75999999998,
      60956.23999999996,
      83369.51000000004,
      141005.73000000004,
      278839.34,
      354390.07000000007,
      350498.95000000007,
      346792.2200000001
    ],
    "FLUXO_RECEITA": [
      {
        "cat": "Repasse de vendas",
        "values": [
          121450.23,
          183772.18999999997,
          248883.54,
          225809.06000000003,
          271802.60999999987,
          306392.0399999999,
          304150.44,
          277700,
          263000,
          125300,
          0,
          0
        ]
      },
      {
        "cat": "Obtenção de empréstimo",
        "values": [
          0,
          110000,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Outras receitas (Não considerar DRE)",
        "values": [
          0,
          9989.880000000001,
          1550,
          5618.540000000001,
          2835.2,
          7635.2,
          1350,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Receita com vendas",
        "values": [
          3208.1200000000003,
          2375.69,
          2495.84,
          3009.11,
          4285.17,
          8391.55,
          2172.28,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Rendimento de investimentos",
        "values": [
          197.10000000000002,
          386.86,
          481.71999999999997,
          378.51000000000005,
          363.4,
          464.04,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "FLUXO_DESPESA": [
      {
        "cat": "Compra de matéria-prima",
        "values": [
          -59220.85,
          -168455.94000000003,
          -91793.19,
          -164860.64999999997,
          -128652.36000000002,
          -157283.02,
          -159407.79999999996,
          -122112.58000000002,
          -54465.42,
          -16500,
          0,
          0
        ]
      },
      {
        "cat": "Salários e encargos",
        "values": [
          -745.59,
          -8119.4,
          -10767.999999999998,
          -13199.06,
          -12514.23,
          -17935.11,
          -18832.43,
          -19057.36,
          -19057.36,
          -17389.100000000002,
          0,
          0
        ]
      },
      {
        "cat": "Compra de mercadorias",
        "values": [
          -15394,
          -17241,
          -9879,
          -16765.5,
          -14155.45,
          -12748.86,
          -17115.5,
          -18042.5,
          -5300,
          -5300,
          0,
          0
        ]
      },
      {
        "cat": "Despesas com ADS",
        "values": [
          -11220,
          -13800,
          -17800,
          -12919,
          -12790,
          -9000,
          -17872.07,
          -4500,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Impostos sobre receita",
        "values": [
          -1035.52,
          -1326.58,
          -2754.02,
          -9819.01,
          -14055.43,
          -17014.29,
          -18703.5,
          -17014.29,
          -17014.29,
          0,
          0,
          0
        ]
      }
    ],
    "COMP_DATA": [
      {
        "tipo": "Receita",
        "isHeader": true,
        "d1": 684855.6100000001,
        "d2": 837105.6700000004
      },
      {
        "tipo": "Rendimento de investimentos",
        "parent": "Receita",
        "d1": 1065.68,
        "d2": 1205.95
      },
      {
        "tipo": "Repasse de vendas",
        "parent": "Receita",
        "d1": 554105.9599999998,
        "d2": 804003.7100000004
      },
      {
        "tipo": "Receita com vendas",
        "parent": "Receita",
        "d1": 8079.6500000000015,
        "d2": 15685.830000000002
      },
      {
        "tipo": "Receita por troca/adição de produtos em pedido",
        "parent": "Receita",
        "d1": 64.43,
        "d2": 0
      },
      {
        "tipo": "Obtenção de empréstimo",
        "parent": "Receita",
        "d1": 110000,
        "d2": 0
      },
      {
        "tipo": "Outras receitas (Não considerar DRE)",
        "parent": "Receita",
        "d1": 11539.880000000001,
        "d2": 16088.940000000002
      },
      {
        "tipo": "Outras receitas",
        "parent": "Receita",
        "d1": 0.01,
        "d2": 121.24
      },
      {
        "tipo": "Despesa",
        "isHeader": true,
        "d1": -609481.5600000003,
        "d2": -851523.4799999999
      },
      {
        "tipo": "Custo com horas extras setor de produção",
        "parent": "Despesa",
        "d1": -2866.2999999999997,
        "d2": -4987.820000000001
      },
      {
        "tipo": "Impostos e Taxas",
        "parent": "Despesa",
        "d1": -2184.02,
        "d2": -3566.2200000000003
      },
      {
        "tipo": "Compra de insumos para expedição",
        "parent": "Despesa",
        "d1": -26250.260000000002,
        "d2": -36086.1
      },
      {
        "tipo": "Despesas administrativas",
        "parent": "Despesa",
        "d1": -15368.680000000002,
        "d2": -10713.96
      },
      {
        "tipo": "Compra de matéria-prima",
        "parent": "Despesa",
        "d1": -319469.9800000001,
        "d2": -450796.0299999998
      },
      {
        "tipo": "Luz, água e outros",
        "parent": "Despesa",
        "d1": -1838.05,
        "d2": -1824.75
      },
      {
        "tipo": "Frete para compra de material",
        "parent": "Despesa",
        "d1": -15243.180000000002,
        "d2": -21444.129999999997
      },
      {
        "tipo": "Serviços de sistema de gestão",
        "parent": "Despesa",
        "d1": -2583.18,
        "d2": -5046.349999999999
      },
      {
        "tipo": "Compra de mercadorias",
        "parent": "Despesa",
        "d1": -42514,
        "d2": -43669.81
      },
      {
        "tipo": "Despesas com aluguéis para uso",
        "parent": "Despesa",
        "d1": -7500,
        "d2": -7500
      },
      {
        "tipo": "Despesas com materiais de consumo",
        "parent": "Despesa",
        "d1": -2765.08,
        "d2": -7060.269999999999
      },
      {
        "tipo": "Bens de consumo com publicidade",
        "parent": "Despesa",
        "d1": -262.40000000000003,
        "d2": 0
      },
      {
        "tipo": "Compra de ativo imobilizado",
        "parent": "Despesa",
        "d1": -22448.489999999998,
        "d2": -20770.05
      },
      {
        "tipo": "Despesas com outros serviços contratados",
        "parent": "Despesa",
        "d1": -14200.029999999999,
        "d2": -35902.27
      },
      {
        "tipo": "Outros gastos com publicidade",
        "parent": "Despesa",
        "d1": -890.55,
        "d2": -665.44
      },
      {
        "tipo": "Despesas com alimentação",
        "parent": "Despesa",
        "d1": -842.5,
        "d2": -1499.77
      },
      {
        "tipo": "Despesas com ADS",
        "parent": "Despesa",
        "d1": -42820,
        "d2": -34709
      },
      {
        "tipo": "Compra de insumos para produção",
        "parent": "Despesa",
        "d1": -2360.2000000000003,
        "d2": -3463.34
      },
      {
        "tipo": "Salários e encargos",
        "parent": "Despesa",
        "d1": -19632.989999999998,
        "d2": -43648.4
      },
      {
        "tipo": "Reembolsos por fora de marketplaces",
        "parent": "Despesa",
        "d1": -53.9,
        "d2": -20
      },
      {
        "tipo": "Serviços de contabilidade",
        "parent": "Despesa",
        "d1": -4326,
        "d2": -4700
      },
      {
        "tipo": "Serviços contratados para marketing",
        "parent": "Despesa",
        "d1": -2100,
        "d2": -2360.82
      },
      {
        "tipo": "Impostos sobre receita",
        "parent": "Despesa",
        "d1": -5116.12,
        "d2": -40888.73
      },
      {
        "tipo": "Despesas com frete para devolução e reenvio",
        "parent": "Despesa",
        "d1": -1819.99,
        "d2": -5137.59
      },
      {
        "tipo": "Comissões",
        "parent": "Despesa",
        "d1": -956.1300000000001,
        "d2": -2096.2999999999997
      },
      {
        "tipo": "Vale-Refeição (VR)",
        "parent": "Despesa",
        "d1": -1792.0400000000002,
        "d2": -3239.1200000000003
      },
      {
        "tipo": "Outras despesas (Não considerar DRE)",
        "parent": "Despesa",
        "d1": -11775.95,
        "d2": -14131.73
      },
      {
        "tipo": "Outras despesas",
        "parent": "Despesa",
        "d1": -200,
        "d2": -300
      },
      {
        "tipo": "Vestuário de trabalho",
        "parent": "Despesa",
        "d1": -733.5,
        "d2": -733.5
      },
      {
        "tipo": "Despesas com benefícios aos sócios e diretores",
        "parent": "Despesa",
        "d1": -400,
        "d2": -1200
      },
      {
        "tipo": "Despesa com férias de funcionário",
        "parent": "Despesa",
        "d1": -2669.29,
        "d2": 0
      },
      {
        "tipo": "Pagamento de empréstimo",
        "parent": "Despesa",
        "d1": -35498.75,
        "d2": -33860.67
      },
      {
        "tipo": "Direitos a receber",
        "parent": "Despesa",
        "d1": 0,
        "d2": -90
      },
      {
        "tipo": "Taxas e Encargos Bancários",
        "parent": "Despesa",
        "d1": 0,
        "d2": -194.82000000000002
      },
      {
        "tipo": "Bonificações, Brindes e Festividades",
        "parent": "Despesa",
        "d1": 0,
        "d2": -650
      },
      {
        "tipo": "Despesa com materiais de uso e consumo operacional",
        "parent": "Despesa",
        "d1": 0,
        "d2": -3900.99
      },
      {
        "tipo": "Manutenção predial e benfeitorias",
        "parent": "Despesa",
        "d1": 0,
        "d2": -2070.5
      },
      {
        "tipo": "Despesas com viagens",
        "parent": "Despesa",
        "d1": 0,
        "d2": -2530.5800000000004
      },
      {
        "tipo": "Juros e Multas",
        "parent": "Despesa",
        "d1": 0,
        "d2": -64.42
      }
    ]
  }
};

// ALL_TX: lista flat de TODAS as transacoes normalizadas
// Tuple: [kind, mes, dia, categoria, cliente, valor, realizado, fornecedor, centroCusto, conta_slug, regime, secao]
const ALL_TX = [["r","2025-01",3,"Obtenção de empréstimo","ORNATA DOMUS COMPANY LTDA",10000,1,"","","03_inter","c","financiamento"],["r","2025-01",3,"Repasse de vendas","SHOPEE",3427.04,1,"","","03_inter","c","receita"],["r","2025-01",6,"Repasse de vendas","SHOPEE",43.06,1,"","","03_inter","c","receita"],["r","2025-01",7,"Repasse de vendas","SHOPEE",142.75,1,"","","03_inter","c","receita"],["r","2025-01",8,"Repasse de vendas","SHOPEE",184.84,1,"","","03_inter","c","receita"],["r","2025-01",9,"Repasse de vendas","SHOPEE",131.68,1,"","","03_inter","c","receita"],["r","2025-01",10,"Repasse de vendas","SHOPEE",57.61,1,"","","03_inter","c","receita"],["r","2025-01",13,"Repasse de vendas","SHOPEE",91.66,1,"","","03_inter","c","receita"],["r","2025-01",13,"Repasse de vendas","SHOPEE",367.15,1,"","","03_inter","c","receita"],["r","2025-01",14,"Repasse de vendas","SHOPEE",246.46,1,"","","03_inter","c","receita"],["r","2025-01",15,"Repasse de vendas","SHOPEE",174.27,1,"","","03_inter","c","receita"],["r","2025-01",16,"Repasse de vendas","SHOPEE",225.58,1,"","","03_inter","c","receita"],["r","2025-01",17,"Receita com vendas","ORNATA DOMUS COMPANY LTDA",1514.5,1,"","","03_inter","c","receita"],["r","2025-01",18,"Obtenção de empréstimo","ORNATA DOMUS COMPANY LTDA",10000,1,"","","03_inter","c","financiamento"],["r","2025-01",17,"Repasse de vendas","SHOPEE",321.67,1,"","","03_inter","c","receita"],["r","2025-01",20,"Repasse de vendas","SHOPEE",475.91,1,"","","03_inter","c","receita"],["r","2025-01",21,"Repasse de vendas","SHOPEE",308.06,1,"","","03_inter","c","receita"],["r","2025-01",22,"Repasse de vendas","SHOPEE",515.97,1,"","","03_inter","c","receita"],["r","2025-01",23,"Repasse de vendas","SHOPEE",172.19,1,"","","03_inter","c","receita"],["r","2025-01",24,"Repasse de vendas","SHOPEE",332.03,1,"","","03_inter","c","receita"],["r","2025-01",27,"Repasse de vendas","SHOPEE",595.05,1,"","","03_inter","c","receita"],["r","2025-01",28,"Repasse de vendas","SHOPEE",243.27,1,"","","03_inter","c","receita"],["r","2025-01",29,"Repasse de vendas","SHOPEE",497.03,1,"","","03_inter","c","receita"],["r","2025-01",29,"Repasse de vendas","VENDA FÍSICA",22.9,1,"","","03_inter","c","receita"],["r","2025-01",30,"Repasse de vendas","SHOPEE",759.3,1,"","","03_inter","c","receita"],["r","2025-01",31,"Rendimento de investimentos","INTER DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA",2.11,1,"","","cdb_inter","c","investimento"],["r","2025-01",31,"Repasse de vendas","SHOPEE",355.56,1,"","","03_inter","c","receita"],["r","2025-02",3,"Repasse de vendas","SHOPEE",826.67,1,"","","03_inter","c","receita"],["r","2025-02",4,"Receita com vendas","VENDA FÍSICA",28,1,"","","03_inter","c","receita"],["r","2025-02",4,"Repasse de vendas","SHOPEE",571.59,1,"","","03_inter","c","receita"],["r","2025-02",5,"Repasse de vendas","SHOPEE",458.71,1,"","","03_inter","c","receita"],["r","2025-02",6,"Repasse de vendas","SHOPEE",357.04,1,"","","03_inter","c","receita"],["r","2025-02",7,"Repasse de vendas","SHOPEE",263.66,1,"","","03_inter","c","receita"],["r","2025-02",10,"Receita com vendas","VENDA FÍSICA",20,1,"","","03_inter","c","receita"],["r","2025-02",11,"Repasse de vendas","SHOPEE",737.69,1,"","","03_inter","c","receita"],["r","2025-02",12,"Repasse de vendas","SHOPEE",2010.25,1,"","","03_inter","c","receita"],["r","2025-02",13,"Repasse de vendas","SHOPEE",519.44,1,"","","03_inter","c","receita"],["r","2025-02",14,"Repasse de vendas","SHOPEE",713.79,1,"","","03_inter","c","receita"],["r","2025-02",17,"Repasse de vendas","SHOPEE",1980.82,1,"","","03_inter","c","receita"],["r","2025-02",18,"Outras receitas","NOTAVEL AROMA COSMETICOS LTDA",184.11,1,"","","03_inter","c","receita"],["r","2025-02",18,"Repasse de vendas","SHOPEE",1027.07,1,"","","03_inter","c","receita"],["r","2025-02",19,"Receita com vendas","S C SEVERO COMERCIO DE DECORACAO E PRESENTES",2456.31,1,"","","03_inter","c","receita"],["r","2025-02",19,"Repasse de vendas","SHOPEE",885.13,1,"","","03_inter","c","receita"],["r","2025-02",20,"Receita com vendas","VENDA FÍSICA",25,1,"","","03_inter","c","receita"],["r","2025-02",20,"Repasse de vendas","SHOPEE",662.31,1,"","","03_inter","c","receita"],["r","2025-02",21,"Receita com vendas","VENDA FÍSICA",28,1,"","","03_inter","c","receita"],["r","2025-02",21,"Receita com vendas","VENDA FÍSICA",56,1,"","","03_inter","c","receita"],["r","2025-02",21,"Repasse de vendas","SHOPEE",458.09,1,"","","03_inter","c","receita"],["r","2025-02",24,"Receita com vendas","VENDA FÍSICA",34.9,1,"","","03_inter","c","receita"],["r","2025-02",24,"Receita com vendas","VENDA FÍSICA",25,1,"","","03_inter","c","receita"],["r","2025-02",24,"Repasse de vendas","SHOPEE",1914.67,1,"","","03_inter","c","receita"],["r","2025-02",25,"Repasse de vendas","SHOPEE",1226.33,1,"","","03_inter","c","receita"],["r","2025-02",26,"Receita com vendas","VENDA FÍSICA",40.72,1,"","","03_inter","c","receita"],["r","2025-02",26,"Receita com vendas","VENDA FÍSICA",32.6,1,"","","03_inter","c","receita"],["r","2025-02",26,"Repasse de vendas","SHOPEE",1064.78,1,"","","03_inter","c","receita"],["r","2025-02",27,"Repasse de vendas","SHOPEE",936.46,1,"","","03_inter","c","receita"],["r","2025-02",28,"Repasse de vendas","SHOPEE",749.57,1,"","","03_inter","c","receita"],["r","2025-03",1,"Rendimento de investimentos","INTER DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA",21.19,1,"","","cdb_inter","c","investimento"],["r","2025-03",3,"Receita com vendas","VENDA FÍSICA",68.64,1,"","","03_inter","c","receita"],["r","2025-03",4,"Receita com vendas","VENDA FÍSICA",81.8,1,"","","03_inter","c","receita"],["r","2025-03",5,"Repasse de vendas","SHOPEE",1849.41,1,"","","03_inter","c","receita"],["r","2025-03",5,"Repasse de vendas","SHOPEE",1540.14,1,"","","03_inter","c","receita"],["r","2025-03",6,"Repasse de vendas","SHOPEE",893.7,1,"","","03_inter","c","receita"],["r","2025-03",7,"Repasse de vendas","SHOPEE",981.9,1,"","","03_inter","c","receita"],["r","2025-03",10,"Repasse de vendas","SHOPEE",1576.09,1,"","","03_inter","c","receita"],["r","2025-03",11,"Receita com vendas","VENDA FÍSICA",19.23,1,"","","03_inter","c","receita"],["r","2025-03",11,"Repasse de vendas","SHOPEE",1218.81,1,"","","03_inter","c","receita"],["r","2025-03",12,"Repasse de vendas","SHOPEE",1109.72,1,"","","03_inter","c","receita"],["r","2025-03",13,"Receita com vendas","VENDA FÍSICA",23.7,1,"","","03_inter","c","receita"],["r","2025-03",13,"Repasse de vendas","SHOPEE",1043.46,1,"","","03_inter","c","receita"],["r","2025-03",14,"Repasse de vendas","SHOPEE",816.2,1,"","","03_inter","c","receita"],["r","2025-03",17,"Repasse de vendas","SHOPEE",1803.37,1,"","","03_inter","c","receita"],["r","2025-03",18,"Repasse de vendas","SHOPEE",1204.9,1,"","","03_inter","c","receita"],["r","2025-03",19,"Repasse de vendas","SHOPEE",1413.3,1,"","","03_inter","c","receita"],["r","2025-03",20,"Receita com vendas","VENDA FÍSICA",17.9,1,"","","03_inter","c","receita"],["r","2025-03",20,"Receita com vendas","VENDA FÍSICA",21.9,1,"","","03_inter","c","receita"],["r","2025-03",20,"Repasse de vendas","SHOPEE",1049.15,1,"","","03_inter","c","receita"],["r","2025-03",21,"Repasse de vendas","SHOPEE",920.8,1,"","","03_inter","c","receita"],["r","2025-03",24,"Repasse de vendas","SHOPEE",2572.6,1,"","","03_inter","c","receita"],["r","2025-03",25,"Receita com vendas","OUTSIDE THE BOX LTDA",25.1,1,"","","03_inter","c","receita"],["r","2025-03",25,"Repasse de vendas","SHOPEE",1150.91,1,"","","03_inter","c","receita"],["r","2025-03",26,"Repasse de vendas","SHOPEE",1502.1,1,"","","03_inter","c","receita"],["r","2025-03",26,"Repasse de vendas","MERCADO LIVRE",423.63,1,"","","03_inter","c","receita"],["r","2025-03",27,"Receita com vendas","VENDA FÍSICA",9.9,1,"","","03_inter","c","receita"],["r","2025-03",27,"Repasse de vendas","SHOPEE",1074.1,1,"","","03_inter","c","receita"],["r","2025-03",28,"Repasse de vendas","SHOPEE",954.56,1,"","","03_inter","c","receita"],["r","2025-03",31,"Repasse de vendas","SHOPEE",2262.74,1,"","","03_inter","c","receita"],["r","2025-04",1,"Repasse de vendas","SHOPEE",1339.84,1,"","","03_inter","c","receita"],["r","2025-04",2,"Rendimento de investimentos","INTER DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA",33.28,1,"","","cdb_inter","c","investimento"],["r","2025-04",2,"Repasse de vendas","SHOPEE",965.69,1,"","","03_inter","c","receita"],["r","2025-04",3,"Repasse de vendas","SHOPEE",787.87,1,"","","03_inter","c","receita"],["r","2025-04",4,"Repasse de vendas","SHOPEE",1130.76,1,"","","03_inter","c","receita"],["r","2025-04",7,"Repasse de vendas","SHOPEE",2150.22,1,"","","03_inter","c","receita"],["r","2025-04",8,"Repasse de vendas","SHOPEE",1260.47,1,"","","03_inter","c","receita"],["r","2025-04",9,"Repasse de vendas","SHOPEE",1685.82,1,"","","03_inter","c","receita"],["r","2025-04",9,"Repasse de vendas","SHEIN",0.01,1,"","","03_inter","c","receita"],["r","2025-04",10,"Receita com vendas","VENDA FÍSICA",25.9,1,"","","03_inter","c","receita"],["r","2025-04",10,"Repasse de vendas","SHOPEE",1047.93,1,"","","03_inter","c","receita"],["r","2025-04",11,"Repasse de vendas","SHOPEE",880.06,1,"","","03_inter","c","receita"],["r","2025-04",10,"Rendimento de investimentos","INTER DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA",2.5,1,"","","03_inter","c","investimento"],["r","2025-04",14,"Repasse de vendas","SHOPEE",3244.7,1,"","","03_inter","c","receita"],["r","2025-04",15,"Receita com vendas","VENDA FÍSICA",25.96,1,"","","03_inter","c","receita"],["r","2025-04",15,"Receita com vendas","VENDA FÍSICA",57.7,1,"","","03_inter","c","receita"],["r","2025-04",15,"Repasse de vendas","SHOPEE",1044.08,1,"","","03_inter","c","receita"],["r","2025-04",16,"Repasse de vendas","SHOPEE",1750.61,1,"","","03_inter","c","receita"],["r","2025-04",17,"Repasse de vendas","SHOPEE",1095.8,1,"","","03_inter","c","receita"],["r","2025-04",22,"Receita com vendas","VENDA FÍSICA",25.9,1,"","","03_inter","c","receita"],["r","2025-04",22,"Repasse de vendas","MERCADO LIVRE",187.2,1,"","","03_inter","c","receita"],["r","2025-04",22,"Repasse de vendas","SHOPEE",4475.53,1,"","","03_inter","c","receita"],["r","2025-04",23,"Repasse de vendas","SHOPEE",1476.25,1,"","","03_inter","c","receita"],["r","2025-04",24,"Receita com vendas","VENDA FÍSICA",67.6,1,"","","03_inter","c","receita"],["r","2025-04",24,"Repasse de vendas","SHOPEE",1108.72,1,"","","03_inter","c","receita"],["r","2025-04",25,"Receita com vendas","VENDA FÍSICA",15,1,"","","03_inter","c","receita"],["r","2025-04",25,"Repasse de vendas","SHOPEE",1177.56,1,"","","03_inter","c","receita"],["r","2025-04",28,"Repasse de vendas","SHOPEE",2142.35,1,"","","03_inter","c","receita"],["r","2025-04",29,"Receita com vendas","VENDA FÍSICA",139.2,1,"","","03_inter","c","receita"],["r","2025-04",29,"Repasse de vendas","SHOPEE",906.37,1,"","","03_inter","c","receita"],["r","2025-04",30,"Receita com vendas","GUILHERME TORCHETTI LOUREIRO DA SILVA",92.5,1,"","","03_inter","c","receita"],["r","2025-04",30,"Receita com vendas","JONATHAN ROQUE DE SOUZA",15.9,1,"","","03_inter","c","receita"],["r","2025-04",24,"Receita com vendas","ORNATA DOMUS COMPANY LTDA",1232,1,"","","03_inter","c","receita"],["r","2025-04",30,"Repasse de vendas","SHOPEE",1149.38,1,"","","03_inter","c","receita"],["r","2025-05",2,"Repasse de vendas","SHOPEE",1048.65,1,"","","03_inter","c","receita"],["r","2025-05",5,"Rendimento de investimentos","INTER DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA",28.42,1,"","","cdb_inter","c","investimento"],["r","2025-05",5,"Repasse de vendas","SHOPEE",2742.58,1,"","","03_inter","c","receita"],["r","2025-05",5,"Repasse de vendas","MERCADO LIVRE",113.4,1,"","","03_inter","c","receita"],["r","2025-05",6,"Repasse de vendas","SHOPEE",978.56,1,"","","03_inter","c","receita"],["r","2025-05",7,"Obtenção de empréstimo","ORNATA DOMUS COMPANY LTDA",10000,1,"","","03_inter","c","financiamento"],["r","2025-05",7,"Repasse de vendas","SHOPEE",1073.18,1,"","","03_inter","c","receita"],["r","2025-05",8,"Receita com vendas","VENDA FÍSICA",51.7,1,"","","03_inter","c","receita"],["r","2025-05",8,"Receita com vendas","VENDA FÍSICA",21.9,1,"","","03_inter","c","receita"],["r","2025-05",8,"Repasse de vendas","SHOPEE",1092.79,1,"","","03_inter","c","receita"],["r","2025-05",9,"Repasse de vendas","SHOPEE",744.56,1,"","","03_inter","c","receita"],["r","2025-05",12,"Receita com vendas","VENDA FÍSICA",33.8,1,"","","03_inter","c","receita"],["r","2025-05",12,"Receita com vendas","VENDA FÍSICA",408,1,"","","03_inter","c","receita"],["r","2025-05",12,"Outras receitas","LEADPAK SOLUCOES DE FORNECIMENTO LTDA",798.87,1,"","","03_inter","c","receita"],["r","2025-05",12,"Repasse de vendas","SHOPEE",3381.3,1,"","","03_inter","c","receita"],["r","2025-05",13,"Repasse de vendas","SHOPEE",1358.39,1,"","","03_inter","c","receita"],["r","2025-05",14,"Receita com vendas","VENDA FÍSICA",29.9,1,"","","03_inter","c","receita"],["r","2025-05",14,"Repasse de vendas","SHOPEE",1160.9,1,"","","03_inter","c","receita"],["r","2025-05",15,"Repasse de vendas","SHOPEE",1107.2,1,"","","03_inter","c","receita"],["r","2025-05",16,"Repasse de vendas","SHOPEE",1416.53,1,"","","03_inter","c","receita"],["r","2025-05",19,"Repasse de vendas","SHOPEE",3137.97,1,"","","03_inter","c","receita"],["r","2025-05",19,"Repasse de vendas","SHEIN",31.82,1,"","","03_inter","c","receita"],["r","2025-05",20,"Repasse de vendas","SHOPEE",1286.52,1,"","","03_inter","c","receita"],["r","2025-05",21,"Repasse de vendas","SHOPEE",1430.96,1,"","","03_inter","c","receita"],["r","2025-05",22,"Repasse de vendas","SHOPEE",1291.17,1,"","","03_inter","c","receita"],["r","2025-05",23,"Outras receitas","AMAZON",600,1,"","","03_inter","c","receita"],["r","2025-05",23,"Repasse de vendas","SHOPEE",1151.75,1,"","","03_inter","c","receita"],["r","2025-05",23,"Repasse de vendas","MERCADO LIVRE",92.06,1,"","","03_inter","c","receita"],["r","2025-05",26,"Repasse de vendas","SHEIN",147.22,1,"","","03_inter","c","receita"],["r","2025-05",26,"Repasse de vendas","SHOPEE",2564.6,1,"","","03_inter","c","receita"],["r","2025-05",27,"Receita com vendas","VENDA FÍSICA",25.96,1,"","","03_inter","c","receita"],["r","2025-05",27,"Repasse de vendas","SHOPEE",960.5,1,"","","03_inter","c","receita"],["r","2025-05",28,"Repasse de vendas","SHOPEE",878.51,1,"","","03_inter","c","receita"],["r","2025-05",29,"Repasse de vendas","SHOPEE",729.93,1,"","","03_inter","c","receita"],["r","2025-05",30,"Receita com vendas","JONATHAN ROQUE DE SOUZA",77.32,1,"","","03_inter","c","receita"],["r","2025-05",30,"Repasse de vendas","SHOPEE",1030.89,1,"","","03_inter","c","receita"],["r","2025-06",2,"Repasse de vendas","SHOPEE",2980.3,1,"","","03_inter","c","receita"],["r","2025-06",2,"Repasse de vendas","SHEIN",235.48,1,"","","03_inter","c","receita"],["r","2025-06",3,"Rendimento de investimentos","INTER DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA",57.04,1,"","","cdb_inter","c","investimento"],["r","2025-06",3,"Repasse de vendas","SHOPEE",795.05,1,"","","03_inter","c","receita"],["r","2025-06",4,"Repasse de vendas","SHOPEE",450.54,1,"","","03_inter","c","receita"],["r","2025-06",5,"Repasse de vendas","SHOPEE",528.25,1,"","","03_inter","c","receita"],["r","2025-06",6,"Receita com vendas","LUIZ ANTONIO RONDINI VIEIRA",130.56,1,"","","03_inter","c","receita"],["r","2025-06",6,"Repasse de vendas","SHOPEE",619.33,1,"","","03_inter","c","receita"],["r","2025-06",9,"Repasse de vendas","SHEIN",799.08,1,"","","03_inter","c","receita"],["r","2025-06",9,"Repasse de vendas","SHOPEE",2194.54,1,"","","03_inter","c","receita"],["r","2025-06",10,"Receita com vendas","VENDA FÍSICA",68,1,"","","03_inter","c","receita"],["r","2025-06",10,"Repasse de vendas","SHOPEE",1004.26,1,"","","03_inter","c","receita"],["r","2025-06",11,"Repasse de vendas","SHOPEE",899.68,1,"","","03_inter","c","receita"],["r","2025-06",12,"Repasse de vendas","SHOPEE",757.03,1,"","","03_inter","c","receita"],["r","2025-06",13,"Repasse de vendas","SHOPEE",885.4,1,"","","03_inter","c","receita"],["r","2025-06",16,"Receita com vendas","VENDA FÍSICA",39.8,1,"","","03_inter","c","receita"],["r","2025-06",16,"Repasse de vendas","SHEIN",690.44,1,"","","03_inter","c","receita"],["r","2025-06",16,"Repasse de vendas","SHOPEE",1694.9,1,"","","03_inter","c","receita"],["r","2025-06",17,"Repasse de vendas","SHOPEE",493.33,1,"","","03_inter","c","receita"],["r","2025-06",18,"Repasse de vendas","SHOPEE",674.48,1,"","","03_inter","c","receita"],["r","2025-06",20,"Repasse de vendas","SHOPEE",1382.55,1,"","","03_inter","c","receita"],["r","2025-06",20,"Repasse de vendas","MERCADO LIVRE",44.24,1,"","","03_inter","c","receita"],["r","2025-06",23,"Receita com vendas","VENDA FÍSICA",254.2,1,"","","03_inter","c","receita"],["r","2025-06",23,"Receita com vendas","VENDA FÍSICA",25.96,1,"","","03_inter","c","receita"],["r","2025-06",23,"Rendimento de investimentos","INTER DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA",36.44,1,"","","cdb_inter","c","investimento"],["r","2025-06",23,"Repasse de vendas","SHOPEE",1919.98,1,"","","03_inter","c","receita"],["r","2025-06",23,"Repasse de vendas","SHEIN",909.4,1,"","","03_inter","c","receita"],["r","2025-06",24,"Repasse de vendas","SHOPEE",734.38,1,"","","03_inter","c","receita"],["r","2025-06",25,"Repasse de vendas","SHOPEE",329.93,1,"","","03_inter","c","receita"],["r","2025-06",26,"Repasse de vendas","SHOPEE",550.19,1,"","","03_inter","c","receita"],["r","2025-06",27,"Repasse de vendas","SHOPEE",592.7,1,"","","03_inter","c","receita"],["r","2025-06",30,"Repasse de vendas","SHEIN",883.56,1,"","","03_inter","c","receita"],["r","2025-06",30,"Repasse de vendas","SHOPEE",1123.16,1,"","","03_inter","c","receita"],["r","2025-07",1,"Repasse de vendas","SHOPEE",289.37,1,"","","03_inter","c","receita"],["r","2025-07",2,"Repasse de vendas","SHOPEE",755.17,1,"","","03_inter","c","receita"],["r","2025-07",3,"Receita com vendas","VENDA FÍSICA",129.8,1,"","","03_inter","c","receita"],["r","2025-07",3,"Repasse de vendas","SHOPEE",351.46,1,"","","03_inter","c","receita"],["r","2025-07",4,"Repasse de vendas","SHOPEE",507.76,1,"","","03_inter","c","receita"],["r","2025-07",4,"Repasse de vendas","MERCADO LIVRE",351.83,1,"","","03_inter","c","receita"],["r","2025-07",4,"Repasse de vendas","AMAZON",1240.23,1,"","","03_inter","c","receita"],["r","2025-07",3,"Receita com vendas","LUIZ ANTONIO RONDINI VIEIRA",169.68,1,"","","03_inter","c","receita"],["r","2025-07",7,"Repasse de vendas","SHOPEE",1315.77,1,"","","03_inter","c","receita"],["r","2025-07",7,"Repasse de vendas","SHEIN",1267.08,1,"","","03_inter","c","receita"],["r","2025-07",8,"Repasse de vendas","SHOPEE",602.94,1,"","","03_inter","c","receita"],["r","2025-07",10,"Repasse de vendas","SHOPEE",1377.37,1,"","","03_inter","c","receita"],["r","2025-07",11,"Repasse de vendas","SHOPEE",848.79,1,"","","03_inter","c","receita"],["r","2025-07",14,"Repasse de vendas","SHOPEE",1271.51,1,"","","03_inter","c","receita"],["r","2025-07",14,"Repasse de vendas","SHEIN",1730.52,1,"","","03_inter","c","receita"],["r","2025-07",15,"Repasse de vendas","SHOPEE",463.36,1,"","","03_inter","c","receita"],["r","2025-07",16,"Repasse de vendas","SHOPEE",450.17,1,"","","03_inter","c","receita"],["r","2025-07",17,"Receita com vendas","VENDA FÍSICA",13.9,1,"","","03_inter","c","receita"],["r","2025-07",17,"Receita com vendas","VENDA FÍSICA",57.7,1,"","","03_inter","c","receita"],["r","2025-07",17,"Repasse de vendas","SHOPEE",526.19,1,"","","03_inter","c","receita"],["r","2025-07",17,"Repasse de vendas","AMAZON",53.31,1,"","","03_inter","c","receita"],["r","2025-07",18,"Repasse de vendas","AMAZON",562.32,1,"","","03_inter","c","receita"],["r","2025-07",18,"Repasse de vendas","SHOPEE",930.31,1,"","","03_inter","c","receita"],["r","2025-07",21,"Repasse de vendas","SHOPEE",1330.79,1,"","","03_inter","c","receita"],["r","2025-07",21,"Repasse de vendas","SHEIN",2276.28,1,"","","03_inter","c","receita"],["r","2025-07",22,"Repasse de vendas","SHOPEE",566.25,1,"","","03_inter","c","receita"],["r","2025-07",23,"Repasse de vendas","SHOPEE",431.91,1,"","","03_inter","c","receita"],["r","2025-07",24,"Repasse de vendas","SHOPEE",435.97,1,"","","03_inter","c","receita"],["r","2025-07",25,"Receita com vendas","VENDA FÍSICA",100,1,"","","03_inter","c","receita"],["r","2025-07",25,"Receita com vendas","VENDA FÍSICA",20,1,"","","03_inter","c","receita"],["r","2025-07",25,"Repasse de vendas","SHOPEE",764.23,1,"","","03_inter","c","receita"],["r","2025-07",25,"Repasse de vendas","MERCADO LIVRE",224.81,1,"","","03_inter","c","receita"],["r","2025-07",28,"Repasse de vendas","SHEIN",2516.4,1,"","","03_inter","c","receita"],["r","2025-07",28,"Repasse de vendas","SHOPEE",1434.98,1,"","","03_inter","c","receita"],["r","2025-07",29,"Receita com vendas","VENDA FÍSICA",23.92,1,"","","03_inter","c","receita"],["r","2025-07",29,"Repasse de vendas","SHOPEE",454.37,1,"","","03_inter","c","receita"],["r","2025-07",31,"Receita com vendas","VENDA FÍSICA",20,1,"","","03_inter","c","receita"],["r","2025-07",31,"Repasse de vendas","SHOPEE",973.92,1,"","","03_inter","c","receita"],["r","2025-08",1,"Repasse de vendas","SHOPEE",746.54,1,"","","03_inter","c","receita"],["r","2025-08",1,"Repasse de vendas","AMAZON",476.92,1,"","","03_inter","c","receita"],["r","2025-08",4,"Repasse de vendas","SHOPEE",1052.33,1,"","","03_inter","c","receita"],["r","2025-08",4,"Repasse de vendas","SHEIN",2596.51,1,"","","03_inter","c","receita"],["r","2025-08",5,"Repasse de vendas","SHOPEE",477.41,1,"","","03_inter","c","receita"],["r","2025-08",6,"Receita com vendas","VENDA FÍSICA",13.9,1,"","","03_inter","c","receita"],["r","2025-08",6,"Receita com vendas","VENDA FÍSICA",68.6,1,"","","03_inter","c","receita"],["r","2025-08",6,"Repasse de vendas","SHOPEE",426.47,1,"","","03_inter","c","receita"],["r","2025-08",7,"Repasse de vendas","SHOPEE",686.64,1,"","","03_inter","c","receita"],["r","2025-08",8,"Repasse de vendas","SHOPEE",891,1,"","","03_inter","c","receita"],["r","2025-08",8,"Repasse de vendas","MERCADO LIVRE",95.88,1,"","","03_inter","c","receita"],["r","2025-08",11,"Repasse de vendas","SHOPEE",1322.25,1,"","","03_inter","c","receita"],["r","2025-08",11,"Repasse de vendas","SHEIN",2896.08,1,"","","03_inter","c","receita"],["r","2025-08",12,"Receita com vendas","VENDA FÍSICA",241,1,"","","03_inter","c","receita"],["r","2025-08",12,"Repasse de vendas","SHOPEE",401.27,1,"","","03_inter","c","receita"],["r","2025-08",13,"Repasse de vendas","SHOPEE",356.66,1,"","","03_inter","c","receita"],["r","2025-08",14,"Repasse de vendas","AMAZON",53.31,1,"","","03_inter","c","receita"],["r","2025-08",14,"Repasse de vendas","SHOPEE",284.41,1,"","","03_inter","c","receita"],["r","2025-08",15,"Repasse de vendas","SHOPEE",631.17,1,"","","03_inter","c","receita"],["r","2025-08",15,"Repasse de vendas","AMAZON",181.88,1,"","","03_inter","c","receita"],["r","2025-08",18,"Repasse de vendas","SHOPEE",2044.3,1,"","","03_inter","c","receita"],["r","2025-08",18,"Repasse de vendas","SHEIN",2419.26,1,"","","03_inter","c","receita"],["r","2025-08",19,"Repasse de vendas","SHOPEE",858.3,1,"","","03_inter","c","receita"],["r","2025-08",20,"Repasse de vendas","SHOPEE",853.6,1,"","","03_inter","c","receita"],["r","2025-08",21,"Repasse de vendas","SHEIN",0.01,1,"","","01_sicredi","c","receita"],["r","2025-08",21,"Repasse de vendas","SHOPEE",676.57,1,"","","01_sicredi","c","receita"],["r","2025-08",22,"Repasse de vendas","SHOPEE",1115.4,1,"","","01_sicredi","c","receita"],["r","2025-08",25,"Receita com vendas","VENDA FÍSICA",80,1,"","","01_sicredi","c","receita"],["r","2025-08",25,"Repasse de vendas","SHOPEE",2388.27,1,"","","01_sicredi","c","receita"],["r","2025-08",25,"Repasse de vendas","SHEIN",1948.91,1,"","","01_sicredi","c","receita"],["r","2025-08",26,"Receita com vendas","VENDA FÍSICA",43.92,1,"","","01_sicredi","c","receita"],["r","2025-08",26,"Receita com vendas","ORNATA DOMUS COMPANY LTDA",905.34,1,"","","01_sicredi","c","receita"],["r","2025-08",26,"Repasse de vendas","SHOPEE",1049.26,1,"","","01_sicredi","c","receita"],["r","2025-08",27,"Repasse de vendas","SHOPEE",1027.48,1,"","","01_sicredi","c","receita"],["r","2025-08",28,"Repasse de vendas","SHOPEE",835.18,1,"","","01_sicredi","c","receita"],["r","2025-08",28,"Repasse de vendas","AMAZON",603.83,1,"","","01_sicredi","c","receita"],["r","2025-08",29,"Repasse de vendas","AMAZON",605.19,1,"","","01_sicredi","c","receita"],["r","2025-08",29,"Repasse de vendas","AMAZON",580.21,1,"","","01_sicredi","c","receita"],["r","2025-08",29,"Repasse de vendas","AMAZON",154.94,1,"","","01_sicredi","c","receita"],["r","2025-08",29,"Repasse de vendas","SHOPEE",1163.52,1,"","","01_sicredi","c","receita"],["r","2025-08",31,"Receita com vendas","ORNATA DOMUS COMPANY LTDA",1186.86,1,"","","01_sicredi","c","receita"],["r","2025-08",31,"Rendimento de investimentos","MERCADO PAGO",39,1,"","","cdb_mercado_pago_finame","c","investimento"],["r","2025-08",31,"Repasse de vendas","MERCADO LIVRE",35.71,1,"","","01_sicredi","c","receita"],["r","2025-09",1,"Repasse de vendas","SHEIN",2492.05,1,"","","01_sicredi","c","receita"],["r","2025-09",1,"Repasse de vendas","SHOPEE",3053.48,1,"","","01_sicredi","c","receita"],["r","2025-09",2,"Repasse de vendas","SHOPEE",1045.79,1,"","","01_sicredi","c","receita"],["r","2025-09",3,"Repasse de vendas","SHOPEE",978.5,1,"","","01_sicredi","c","receita"],["r","2025-09",4,"Outras receitas","MERCADO LIVRE",28.85,1,"","","01_sicredi","c","receita"],["r","2025-09",4,"Repasse de vendas","SHOPEE",699.15,1,"","","01_sicredi","c","receita"],["r","2025-09",5,"Receita com vendas","VENDA FÍSICA",24,1,"","","01_sicredi","c","receita"],["r","2025-09",5,"Repasse de vendas","SHOPEE",1289.88,1,"","","01_sicredi","c","receita"],["r","2025-09",8,"Repasse de vendas","SHEIN",2800.37,1,"","","01_sicredi","c","receita"],["r","2025-09",8,"Repasse de vendas","SHOPEE",2796.36,1,"","","01_sicredi","c","receita"],["r","2025-09",9,"Receita com vendas","VENDA FÍSICA",81,1,"","","01_sicredi","c","receita"],["r","2025-09",9,"Repasse de vendas","SHOPEE",1320.97,1,"","","01_sicredi","c","receita"],["r","2025-09",10,"Repasse de vendas","SHOPEE",989.21,1,"","","01_sicredi","c","receita"],["r","2025-09",11,"Repasse de vendas","AMAZON",263.7,1,"","","01_sicredi","c","receita"],["r","2025-09",11,"Repasse de vendas","SHOPEE",737.66,1,"","","01_sicredi","c","receita"],["r","2025-09",12,"Receita por troca/adição de produtos em pedido","Receita por troca/adição de produtos em pedido",76.33,1,"","","01_sicredi","c","receita"],["r","2025-09",12,"Repasse de vendas","AMAZON",739.97,1,"","","01_sicredi","c","receita"],["r","2025-09",12,"Repasse de vendas","AMAZON",609.43,1,"","","01_sicredi","c","receita"],["r","2025-09",12,"Repasse de vendas","SHOPEE",1061.85,1,"","","01_sicredi","c","receita"],["r","2025-09",12,"Repasse de vendas","AMAZON",46.84,1,"","","01_sicredi","c","receita"],["r","2025-09",16,"Receita com vendas","LUIZ ANTONIO RONDINI VIEIRA",22.8,1,"","","01_sicredi","c","receita"],["r","2025-09",15,"Receita com vendas","ORNATA DOMUS COMPANY LTDA",1142.57,1,"","","01_sicredi","c","receita"],["r","2025-09",15,"Repasse de vendas","SHEIN",2957.63,1,"","","01_sicredi","c","receita"],["r","2025-09",15,"Repasse de vendas","SHOPEE",3519.43,1,"","","01_sicredi","c","receita"],["r","2025-09",16,"Receita com vendas","MARIA LAURA DE MELLO LINO",58,1,"","","01_sicredi","c","receita"],["r","2025-09",16,"Repasse de vendas","SHOPEE",1648.84,1,"","","01_sicredi","c","receita"],["r","2025-09",17,"Repasse de vendas","SHOPEE",1691.1,1,"","","01_sicredi","c","receita"],["r","2025-09",18,"Repasse de vendas","SHOPEE",1273.52,1,"","","01_sicredi","c","receita"],["r","2025-09",19,"Repasse de vendas","SHOPEE",1563.88,1,"","","01_sicredi","c","receita"],["r","2025-09",22,"Repasse de vendas","SHEIN",2634.69,1,"","","01_sicredi","c","receita"],["r","2025-09",22,"Repasse de vendas","SHOPEE",2806.77,1,"","","01_sicredi","c","receita"],["r","2025-09",23,"Repasse de vendas","SHOPEE",1510.49,1,"","","01_sicredi","c","receita"],["r","2025-09",24,"Repasse de vendas","SHOPEE",1283.53,1,"","","01_sicredi","c","receita"],["r","2025-09",25,"Repasse de vendas","SHOPEE",1548.9,1,"","","01_sicredi","c","receita"],["r","2025-09",25,"Repasse de vendas","AMAZON",215.77,1,"","","01_sicredi","c","receita"],["r","2025-09",26,"Receita com vendas","VENDA FÍSICA",41.74,1,"","","01_sicredi","c","receita"],["r","2025-09",26,"Receita com vendas","VENDA FÍSICA",20,1,"","","01_sicredi","c","receita"],["r","2025-09",26,"Repasse de vendas","MERCADO LIVRE",400,1,"","","01_sicredi","c","receita"],["r","2025-09",26,"Repasse de vendas","AMAZON",56.31,1,"","","01_sicredi","c","receita"],["r","2025-09",26,"Repasse de vendas","AMAZON",802.85,1,"","","01_sicredi","c","receita"],["r","2025-09",26,"Repasse de vendas","SHOPEE",1176.78,1,"","","01_sicredi","c","receita"],["r","2025-09",26,"Repasse de vendas","AMAZON",648.4,1,"","","01_sicredi","c","receita"],["r","2025-09",29,"Repasse de vendas","SHOPEE",2085.97,1,"","","01_sicredi","c","receita"],["r","2025-09",29,"Repasse de vendas","SHEIN",4343.33,1,"","","01_sicredi","c","receita"],["r","2025-09",30,"Rendimento de investimentos","MERCADO PAGO",108.13,1,"","","cdb_mercado_pago_finame","c","investimento"],["r","2025-09",30,"Repasse de vendas","SHOPEE",1274.38,1,"","","01_sicredi","c","receita"],["r","2025-10",1,"Repasse de vendas","SHOPEE",654.29,1,"","","01_sicredi","c","receita"],["r","2025-10",2,"Receita com vendas","VENDA FÍSICA",1040.25,1,"","","01_sicredi","c","receita"],["r","2025-10",2,"Receita com vendas","Receita por troca/adição de produtos em pedido",11.9,1,"","","01_sicredi","c","receita"],["r","2025-10",2,"Repasse de vendas","SHOPEE",437.74,1,"","","01_sicredi","c","receita"],["r","2025-10",6,"Receita com vendas","VENDA FÍSICA",33.8,1,"","","01_sicredi","c","receita"],["r","2025-10",6,"Receita com vendas","VENDA FÍSICA",33.8,1,"","","01_sicredi","c","receita"],["r","2025-10",6,"Repasse de vendas","SHOPEE",1781.09,1,"","","01_sicredi","c","receita"],["r","2025-10",6,"Repasse de vendas","SHOPEE",1984.29,1,"","","01_sicredi","c","receita"],["r","2025-10",6,"Repasse de vendas","SHEIN",5043.01,1,"","","01_sicredi","c","receita"],["r","2025-10",7,"Outras receitas (Não considerar DRE)","ORNATA DOMUS COMPANY LTDA",270,1,"","","01_sicredi","c","receita"],["r","2025-10",7,"Repasse de vendas","SHOPEE",1219.56,1,"","","01_sicredi","c","receita"],["r","2025-10",8,"Repasse de vendas","SHOPEE",1002.2,1,"","","01_sicredi","c","receita"],["r","2025-10",9,"Repasse de vendas","AMAZON",243.6,1,"","","01_sicredi","c","receita"],["r","2025-10",9,"Repasse de vendas","SHOPEE",1091.31,1,"","","01_sicredi","c","receita"],["r","2025-10",10,"Receita com vendas","LUIZ ANTONIO RONDINI VIEIRA",37.82,1,"","","01_sicredi","c","receita"],["r","2025-10",10,"Repasse de vendas","AMAZON",7533.79,1,"","","01_sicredi","c","receita"],["r","2025-10",10,"Repasse de vendas","AMAZON",46.84,1,"","","01_sicredi","c","receita"],["r","2025-10",10,"Repasse de vendas","AMAZON",290.51,1,"","","01_sicredi","c","receita"],["r","2025-10",10,"Repasse de vendas","SHOPEE",1077.54,1,"","","01_sicredi","c","receita"],["r","2025-10",13,"Repasse de vendas","SHOPEE",3597.36,1,"","","01_sicredi","c","receita"],["r","2025-10",13,"Repasse de vendas","SHEIN",3764.01,1,"","","01_sicredi","c","receita"],["r","2025-10",14,"Repasse de vendas","SHOPEE",2122.99,1,"","","01_sicredi","c","receita"],["r","2025-10",15,"Receita com vendas","ORNATA DOMUS COMPANY LTDA",1164.86,1,"","","01_sicredi","c","receita"],["r","2025-10",15,"Repasse de vendas","SHOPEE",1279.92,1,"","","01_sicredi","c","receita"],["r","2025-10",16,"Repasse de vendas","SHOPEE",1419.07,1,"","","01_sicredi","c","receita"],["r","2025-10",17,"Receita com vendas","VENDA FÍSICA",13.9,1,"","","01_sicredi","c","receita"],["r","2025-10",17,"Receita com vendas","VENDA FÍSICA",44.8,1,"","","01_sicredi","c","receita"],["r","2025-10",17,"Repasse de vendas","SHOPEE",1374.3,1,"","","01_sicredi","c","receita"],["r","2025-10",20,"Repasse de vendas","SHOPEE",3746.34,1,"","","01_sicredi","c","receita"],["r","2025-10",20,"Repasse de vendas","SHEIN",4206.96,1,"","","01_sicredi","c","receita"],["r","2025-10",21,"Repasse de vendas","SHOPEE",2187.88,1,"","","01_sicredi","c","receita"],["r","2025-10",22,"Repasse de vendas","SHOPEE",1413.21,1,"","","01_sicredi","c","receita"],["r","2025-10",23,"Rendimento de investimentos","MERCADO PAGO",84.47,1,"","","cdb_mercado_pago_finame","c","investimento"],["r","2025-10",24,"Repasse de vendas","AMAZON",159.46,1,"","","01_sicredi","c","receita"],["r","2025-10",24,"Repasse de vendas","AMAZON",251.66,1,"","","01_sicredi","c","receita"],["r","2025-10",27,"Repasse de vendas","SHEIN",4962.77,1,"","","01_sicredi","c","receita"],["r","2025-10",29,"Outras receitas (Não considerar DRE)","SICREDI",24941.91,1,"","","01_sicredi","c","receita"],["r","2025-10",29,"Outras receitas (Não considerar DRE)","SICREDI",41.87,1,"","","01_sicredi","c","receita"],["r","2025-10",29,"Outras receitas (Não considerar DRE)","SICREDI",4962.77,1,"","","01_sicredi","c","receita"],["r","2025-10",30,"Receita com vendas","VENDA FÍSICA",33.8,1,"","","01_sicredi","c","receita"],["r","2025-10",30,"Receita com vendas","VENDA FÍSICA",78,1,"","","01_sicredi","c","receita"],["r","2025-10",31,"Receita com vendas","VENDA FÍSICA",80,1,"","","01_sicredi","c","receita"],["r","2025-10",31,"Outras receitas (Não considerar DRE)","SICREDI",22891.91,1,"","","01_sicredi","c","receita"],["r","2025-10",31,"Outras receitas (Não considerar DRE)","MERCADO PAGO",10231.6,1,"","","cdb_mercado_pago_finame","c","receita"],["r","2025-10",31,"Repasse de vendas","SHOPEE",13113.28,1,"","","01_sicredi","c","receita"],["r","2025-11",3,"Repasse de vendas","SHEIN",3775.7,1,"","","01_sicredi","c","receita"],["r","2025-11",3,"Repasse de vendas","SHOPEE",3370.83,1,"","","01_sicredi","c","receita"],["r","2025-11",4,"Repasse de vendas","SHOPEE",1752.1,1,"","","01_sicredi","c","receita"],["r","2025-11",5,"Repasse de vendas","SHOPEE",2263.61,1,"","","01_sicredi","c","receita"],["r","2025-11",6,"Repasse de vendas","AMAZON",86.64,1,"","","01_sicredi","c","receita"],["r","2025-11",6,"Repasse de vendas","SHOPEE",1237.5,1,"","","01_sicredi","c","receita"],["r","2025-11",7,"Repasse de vendas","SHOPEE",1306.87,1,"","","01_sicredi","c","receita"],["r","2025-11",7,"Repasse de vendas","AMAZON",456.4,1,"","","01_sicredi","c","receita"],["r","2025-11",7,"Repasse de vendas","AMAZON",359.14,1,"","","01_sicredi","c","receita"],["r","2025-11",10,"Receita com vendas","VENDA FÍSICA",33.9,1,"","","01_sicredi","c","receita"],["r","2025-11",10,"Repasse de vendas","SHEIN",9005.23,1,"","","01_sicredi","c","receita"],["r","2025-11",10,"Repasse de vendas","SHOPEE",4619.07,1,"","","01_sicredi","c","receita"],["r","2025-11",11,"Repasse de vendas","SHOPEE",2296.54,1,"","","01_sicredi","c","receita"],["r","2025-11",12,"Repasse de vendas","SHOPEE",2004.27,1,"","","01_sicredi","c","receita"],["r","2025-11",13,"Receita com vendas","Gean Carlos Fagundes Pereira",37.8,1,"","","01_sicredi","c","receita"],["r","2025-11",13,"Repasse de vendas","SHOPEE",2288.16,1,"","","01_sicredi","c","receita"],["r","2025-11",14,"Receita com vendas","VENDA FÍSICA",32.7,1,"","","01_sicredi","c","receita"],["r","2025-11",14,"Repasse de vendas","SHOPEE",2068.4,1,"","","01_sicredi","c","receita"],["r","2025-11",17,"Receita com vendas","ORNATA DOMUS COMPANY LTDA",1768.27,1,"","","01_sicredi","c","receita"],["r","2025-11",17,"Repasse de vendas","SHOPEE",7133.34,1,"","","01_sicredi","c","receita"],["r","2025-11",17,"Repasse de vendas","SHEIN",5609.51,1,"","","01_sicredi","c","receita"],["r","2025-11",18,"Repasse de vendas","SHOPEE",4190.34,1,"","","01_sicredi","c","receita"],["r","2025-11",19,"Outras receitas (Não considerar DRE)","MERCADO LIVRE",97.8,1,"","","01_sicredi","c","receita"],["r","2025-11",19,"Outras receitas (Não considerar DRE)","MERCADO LIVRE",97.8,1,"","","01_sicredi","c","receita"],["r","2025-11",19,"Rendimento de investimentos","MERCADO PAGO",64.76,1,"","","cdb_mercado_pago_finame","c","investimento"],["r","2025-11",19,"Repasse de vendas","SHOPEE",2459.82,1,"","","01_sicredi","c","receita"],["r","2025-11",21,"Repasse de vendas","SHOPEE",2100.38,1,"","","01_sicredi","c","receita"],["r","2025-11",21,"Repasse de vendas","SHOPEE",3061.35,1,"","","01_sicredi","c","receita"],["r","2025-11",21,"Repasse de vendas","AMAZON",165.51,1,"","","01_sicredi","c","receita"],["r","2025-11",24,"Repasse de vendas","AMAZON",311.33,1,"","","01_sicredi","c","receita"],["r","2025-11",24,"Repasse de vendas","AMAZON",308.15,1,"","","01_sicredi","c","receita"],["r","2025-11",24,"Repasse de vendas","AMAZON",39.8,1,"","","01_sicredi","c","receita"],["r","2025-11",24,"Repasse de vendas","SHEIN",4774.94,1,"","","01_sicredi","c","receita"],["r","2025-11",24,"Repasse de vendas","SHOPEE",6494.04,1,"","","01_sicredi","c","receita"],["r","2025-11",25,"Receita com vendas","VENDA FÍSICA",16.9,1,"","","01_sicredi","c","receita"],["r","2025-11",25,"Repasse de vendas","SHOPEE",3128.54,1,"","","01_sicredi","c","receita"],["r","2025-11",26,"Repasse de vendas","SHOPEE",3041.09,1,"","","01_sicredi","c","receita"],["r","2025-11",27,"Receita com vendas","VENDA FÍSICA",64.7,1,"","","01_sicredi","c","receita"],["r","2025-11",27,"Repasse de vendas","SHOPEE",2205.9,1,"","","01_sicredi","c","receita"],["r","2025-11",28,"Repasse de vendas","SHOPEE",2423.46,1,"","","01_sicredi","c","receita"],["r","2025-12",1,"Receita com vendas","ORNATA DOMUS COMPANY LTDA",27.8,1,"","","01_sicredi","c","receita"],["r","2025-12",1,"Rendimento de investimentos","INTER DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA",58.11,1,"","","cdb_inter","c","investimento"],["r","2025-12",1,"Repasse de vendas","SHEIN",7490.16,1,"","","01_sicredi","c","receita"],["r","2025-12",1,"Repasse de vendas","SHOPEE",7828,1,"","","01_sicredi","c","receita"],["r","2025-12",3,"Repasse de vendas","SHOPEE",4552.03,1,"","","01_sicredi","c","receita"],["r","2025-12",3,"Repasse de vendas","SHOPEE",1245.34,1,"","","01_sicredi","c","receita"],["r","2025-12",4,"Receita por troca/adição de produtos em pedido","Receita por troca/adição de produtos em pedido",10.9,1,"","","01_sicredi","c","receita"],["r","2025-12",4,"Repasse de vendas","AMAZON",103.36,1,"","","01_sicredi","c","receita"],["r","2025-12",4,"Repasse de vendas","SHOPEE",2326.71,1,"","","01_sicredi","c","receita"],["r","2025-12",5,"Repasse de vendas","AMAZON",444.61,1,"","","01_sicredi","c","receita"],["r","2025-12",5,"Repasse de vendas","AMAZON",304.07,1,"","","01_sicredi","c","receita"],["r","2025-12",5,"Repasse de vendas","SHOPEE",4212.02,1,"","","01_sicredi","c","receita"],["r","2025-12",8,"Repasse de vendas","SHEIN",6030.3,1,"","","01_sicredi","c","receita"],["r","2025-12",8,"Repasse de vendas","SHOPEE",10865.56,1,"","","01_sicredi","c","receita"],["r","2025-12",9,"Receita com vendas","VENDA FÍSICA",81.6,1,"","","01_sicredi","c","receita"],["r","2025-12",9,"Repasse de vendas","SHOPEE",4987.82,1,"","","01_sicredi","c","receita"],["r","2025-12",9,"Repasse de vendas","MERCADO LIVRE",1000,1,"","","01_sicredi","c","receita"],["r","2025-12",10,"Receita com vendas","VENDA FÍSICA",32,1,"","","01_sicredi","c","receita"],["r","2025-12",10,"Repasse de vendas","SHOPEE",4029.25,1,"","","01_sicredi","c","receita"],["r","2025-12",11,"Repasse de vendas","SHOPEE",4761.38,1,"","","01_sicredi","c","receita"],["r","2025-12",12,"Repasse de vendas","SHOPEE",3602.1,1,"","","01_sicredi","c","receita"],["r","2025-12",15,"Receita com vendas","ORNATA DOMUS COMPANY LTDA",1833.23,1,"","","01_sicredi","c","receita"],["r","2025-12",15,"Repasse de vendas","SHOPEE",12601.98,1,"","","01_sicredi","c","receita"],["r","2025-12",15,"Repasse de vendas","SHEIN",5605.34,1,"","","01_sicredi","c","receita"],["r","2025-12",16,"Repasse de vendas","SHOPEE",6238.19,1,"","","01_sicredi","c","receita"],["r","2025-12",17,"Receita por troca/adição de produtos em pedido","Receita por troca/adição de produtos em pedido",16.9,1,"","","01_sicredi","c","receita"],["r","2025-12",17,"Repasse de vendas","SHOPEE",4530.35,1,"","","01_sicredi","c","receita"],["r","2025-12",18,"Repasse de vendas","SHOPEE",3260.79,1,"","","01_sicredi","c","receita"],["r","2025-12",18,"Repasse de vendas","AMAZON",235.02,1,"","","01_sicredi","c","receita"],["r","2025-12",19,"Receita com vendas","VENDA FÍSICA",107.6,1,"","","01_sicredi","c","receita"],["r","2025-12",19,"Repasse de vendas","AMAZON",665.26,1,"","","01_sicredi","c","receita"],["r","2025-12",19,"Repasse de vendas","AMAZON",508.61,1,"","","01_sicredi","c","receita"],["r","2025-12",19,"Repasse de vendas","AMAZON",62.88,1,"","","01_sicredi","c","receita"],["r","2025-12",19,"Repasse de vendas","SHOPEE",3148.6,1,"","","01_sicredi","c","receita"],["r","2025-12",22,"Repasse de vendas","SHOPEE",10510.33,1,"","","01_sicredi","c","receita"],["r","2025-12",22,"Repasse de vendas","SHEIN",6564.69,1,"","","01_sicredi","c","receita"],["r","2025-12",23,"Repasse de vendas","SHOPEE",4200.05,1,"","","01_sicredi","c","receita"],["r","2025-12",26,"Repasse de vendas","SHOPEE",4278,1,"","","01_sicredi","c","receita"],["r","2025-12",26,"Repasse de vendas","SHOPEE",3496.36,1,"","","01_sicredi","c","receita"],["r","2025-12",29,"Repasse de vendas","SHOPEE",6562.01,1,"","","01_sicredi","c","receita"],["r","2025-12",29,"Repasse de vendas","SHEIN",9478.27,1,"","","01_sicredi","c","receita"],["r","2025-12",30,"Repasse de vendas","SHOPEE",3416.29,1,"","","01_sicredi","c","receita"],["r","2026-01",2,"Rendimento de investimentos","INTER DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA",93.9,1,"","","cdb_inter","c","investimento"],["r","2026-01",2,"Repasse de vendas","SHOPEE",2983.57,1,"","","01_sicredi","c","receita"],["r","2026-01",2,"Repasse de vendas","SHOPEE",1321.91,1,"","","01_sicredi","c","receita"],["r","2026-01",5,"Repasse de vendas","AMAZON",219.03,1,"","","01_sicredi","c","receita"],["r","2026-01",5,"Repasse de vendas","AMAZON",47.34,1,"","","01_sicredi","c","receita"],["r","2026-01",5,"Repasse de vendas","SHOPEE",5068.29,1,"","","01_sicredi","c","receita"],["r","2026-01",5,"Repasse de vendas","AMAZON",26.31,1,"","","01_sicredi","c","receita"],["r","2026-01",5,"Repasse de vendas","AMAZON",232.96,1,"","","01_sicredi","c","receita"],["r","2026-01",5,"Repasse de vendas","SHEIN",8241.1,1,"","","01_sicredi","c","receita"],["r","2026-01",6,"Repasse de vendas","SHOPEE",3725.41,1,"","","01_sicredi","c","receita"],["r","2026-01",8,"Receita com vendas","ORNATA DOMUS COMPANY LTDA",2625.92,1,"","","01_sicredi","c","receita"],["r","2026-01",7,"Repasse de vendas","SHOPEE",2276.77,1,"","","01_sicredi","c","receita"],["r","2026-01",8,"Repasse de vendas","SHOPEE",3109.12,1,"","","01_sicredi","c","receita"],["r","2026-01",9,"Repasse de vendas","SHOPEE",2426.03,1,"","","01_sicredi","c","receita"],["r","2026-01",12,"Repasse de vendas","SHOPEE",8421.76,1,"","","01_sicredi","c","receita"],["r","2026-01",12,"Repasse de vendas","SHEIN",4106.11,1,"","","01_sicredi","c","receita"],["r","2026-01",13,"Receita por troca/adição de produtos em pedido","Receita por troca/adição de produtos em pedido",64.43,1,"","","01_sicredi","c","receita"],["r","2026-01",13,"Repasse de vendas","SHOPEE",3938.97,1,"","","01_sicredi","c","receita"],["r","2026-01",14,"Receita com vendas","VENDA FÍSICA",39.9,1,"","","01_sicredi","c","receita"],["r","2026-01",14,"Receita com vendas","VENDA FÍSICA",33.8,1,"","","01_sicredi","c","receita"],["r","2026-01",14,"Repasse de vendas","SHOPEE",3582.07,1,"","","01_sicredi","c","receita"],["r","2026-01",14,"Receita com vendas","CLAUDIO LISIAS DA SILVA JUNIOR",171.3,1,"","","01_sicredi","c","receita"],["r","2026-01",15,"Repasse de vendas","SHOPEE",3303.62,1,"","","01_sicredi","c","receita"],["r","2026-01",15,"Repasse de vendas","AMAZON",265.04,1,"","","01_sicredi","c","receita"],["r","2026-01",16,"Repasse de vendas","AMAZON",20.15,1,"","","01_sicredi","c","receita"],["r","2026-01",16,"Repasse de vendas","AMAZON",394.34,1,"","","01_sicredi","c","receita"],["r","2026-01",16,"Repasse de vendas","MERCADO LIVRE",2000,1,"","","01_sicredi","c","receita"],["r","2026-01",16,"Repasse de vendas","SHOPEE",4509.91,1,"","","01_sicredi","c","receita"],["r","2026-01",19,"Repasse de vendas","SHOPEE",8710.67,1,"","","01_sicredi","c","receita"],["r","2026-01",19,"Repasse de vendas","SHEIN",7271.68,1,"","","01_sicredi","c","receita"],["r","2026-01",20,"Receita com vendas","MARIA LAURA DE MELLO LINO",74.5,1,"","","01_sicredi","c","receita"],["r","2026-01",20,"Receita com vendas","VENDA FÍSICA",120,1,"","","01_sicredi","c","receita"],["r","2026-01",20,"Receita com vendas","VENDA FÍSICA",5,1,"","","01_sicredi","c","receita"],["r","2026-01",20,"Repasse de vendas","SHOPEE",4560.77,1,"","","01_sicredi","c","receita"],["r","2026-01",21,"Receita com vendas","VENDA FÍSICA",80,1,"","","01_sicredi","c","receita"],["r","2026-01",21,"Repasse de vendas","SHOPEE",3943.54,1,"","","01_sicredi","c","receita"],["r","2026-01",22,"Repasse de vendas","SHOPEE",3592.1,1,"","","01_sicredi","c","receita"],["r","2026-01",23,"Repasse de vendas","MERCADO LIVRE",2000,1,"","","01_sicredi","c","receita"],["r","2026-01",23,"Repasse de vendas","SHOPEE",2577.02,1,"","","01_sicredi","c","receita"],["r","2026-01",26,"Repasse de vendas","SHEIN",6419.81,1,"","","01_sicredi","c","receita"],["r","2026-01",26,"Repasse de vendas","SHOPEE",7604.82,1,"","","01_sicredi","c","receita"],["r","2026-01",27,"Repasse de vendas","SHOPEE",4531.71,1,"","","01_sicredi","c","receita"],["r","2026-01",28,"Receita com vendas","VENDA FÍSICA",57.7,1,"","","01_sicredi","c","receita"],["r","2026-01",28,"Repasse de vendas","SHOPEE",2848.83,1,"","","01_sicredi","c","receita"],["r","2026-01",29,"Repasse de vendas","AMAZON",465.75,1,"","","01_sicredi","c","receita"],["r","2026-01",29,"Repasse de vendas","SHOPEE",2074.11,1,"","","01_sicredi","c","receita"],["r","2026-01",30,"Repasse de vendas","AMAZON",831.28,1,"","","01_sicredi","c","receita"],["r","2026-01",30,"Repasse de vendas","SHOPEE",2646.87,1,"","","01_sicredi","c","receita"],["r","2026-01",30,"Repasse de vendas","AMAZON",131.31,1,"","","01_sicredi","c","receita"],["r","2026-01",30,"Repasse de vendas","AMAZON",20.15,1,"","","01_sicredi","c","receita"],["r","2026-01",30,"Repasse de vendas","MERCADO LIVRE",1000,1,"","","01_sicredi","c","receita"],["r","2026-01",31,"Rendimento de investimentos","INTER DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA",103.2,1,"","","cdb_inter","c","investimento"],["r","2026-02",2,"Receita com vendas","VENDA FÍSICA",10.28,1,"","","01_sicredi","c","receita"],["r","2026-02",2,"Repasse de vendas","SHOPEE",10906.49,1,"","","01_sicredi","c","receita"],["r","2026-02",2,"Repasse de vendas","SHEIN",9168.46,1,"","","01_sicredi","c","receita"],["r","2026-02",3,"Repasse de vendas","SHOPEE",4403.53,1,"","","01_sicredi","c","receita"],["r","2026-02",4,"Obtenção de empréstimo","ORNATA DOMUS COMPANY LTDA",110000,1,"","","01_sicredi","c","financiamento"],["r","2026-02",4,"Repasse de vendas","SHOPEE",3583.46,1,"","","01_sicredi","c","receita"],["r","2026-02",5,"Receita com vendas","VENDA FÍSICA",117.5,1,"","","01_sicredi","c","receita"],["r","2026-02",5,"Receita com vendas","VENDA FÍSICA",96.5,1,"","","01_sicredi","c","receita"],["r","2026-02",5,"Receita com vendas","VENDA FÍSICA",57.7,1,"","","01_sicredi","c","receita"],["r","2026-02",5,"Receita com vendas","VENDA FÍSICA",16,1,"","","01_sicredi","c","receita"],["r","2026-02",5,"Repasse de vendas","SHOPEE",2280.66,1,"","","01_sicredi","c","receita"],["r","2026-02",6,"Receita com vendas","LUIZ ANTONIO RONDINI VIEIRA",219.84,1,"","","01_sicredi","c","receita"],["r","2026-02",6,"Repasse de vendas","MERCADO LIVRE",1000,1,"","","01_sicredi","c","receita"],["r","2026-02",6,"Repasse de vendas","SHOPEE",3259.62,1,"","","01_sicredi","c","receita"],["r","2026-02",9,"Receita com vendas","VENDA FÍSICA",200,1,"","","01_sicredi","c","receita"],["r","2026-02",9,"Outras receitas (Não considerar DRE)","MARIA LAURA DE MELLO LINO",2008.12,1,"","","01_sicredi","c","receita"],["r","2026-02",9,"Repasse de vendas","SHOPEE",11542.58,1,"","","01_sicredi","c","receita"],["r","2026-02",9,"Repasse de vendas","SHEIN",7691.05,1,"","","01_sicredi","c","receita"],["r","2026-02",10,"Receita com vendas","VENDA FÍSICA",39.8,1,"","","01_sicredi","c","receita"],["r","2026-02",10,"Outras receitas (Não considerar DRE)","ORNATA DOMUS COMPANY LTDA",981.76,1,"","","01_sicredi","c","receita"],["r","2026-02",10,"Repasse de vendas","SHOPEE",5729.59,1,"","","01_sicredi","c","receita"],["r","2026-02",11,"Outras receitas (Não considerar DRE)","ORNATA DOMUS COMPANY LTDA",7000,1,"","","03_inter","c","receita"],["r","2026-02",11,"Repasse de vendas","SHOPEE",4457.45,1,"","","01_sicredi","c","receita"],["r","2026-02",12,"Receita com vendas","VENDA FÍSICA",16.9,1,"","","01_sicredi","c","receita"],["r","2026-02",12,"Repasse de vendas","AMAZON",773.44,1,"","","01_sicredi","c","receita"],["r","2026-02",12,"Repasse de vendas","SHOPEE",4550.45,1,"","","01_sicredi","c","receita"],["r","2026-02",13,"Receita com vendas","VENDA FÍSICA",180,1,"","","01_sicredi","c","receita"],["r","2026-02",13,"Repasse de vendas","AMAZON",76.39,1,"","","01_sicredi","c","receita"],["r","2026-02",13,"Repasse de vendas","MERCADO LIVRE",1500,1,"","","01_sicredi","c","receita"],["r","2026-02",13,"Repasse de vendas","SHOPEE",5562.07,1,"","","01_sicredi","c","receita"],["r","2026-02",13,"Repasse de vendas","AMAZON",20.15,1,"","","01_sicredi","c","receita"],["r","2026-02",13,"Repasse de vendas","AMAZON",1000.52,1,"","","01_sicredi","c","receita"],["r","2026-02",18,"Receita com vendas","ORNATA DOMUS COMPANY LTDA",1243.89,1,"","","01_sicredi","c","receita"],["r","2026-02",18,"Repasse de vendas","SHEIN",7665.13,1,"","","01_sicredi","c","receita"],["r","2026-02",18,"Repasse de vendas","SHOPEE",14591.9,1,"","","01_sicredi","c","receita"],["r","2026-02",18,"Receita com vendas","VENDA FÍSICA",132.38,1,"","","01_sicredi","c","receita"],["r","2026-02",18,"Repasse de vendas","SHOPEE",13419.66,1,"","","01_sicredi","c","receita"],["r","2026-02",19,"Repasse de vendas","SHOPEE",7441.73,1,"","","01_sicredi","c","receita"],["r","2026-02",20,"Repasse de vendas","SHOPEE",5268.37,1,"","","01_sicredi","c","receita"],["r","2026-02",21,"Repasse de vendas","MERCADO LIVRE",2500,1,"","","01_sicredi","c","receita"],["r","2026-02",23,"Repasse de vendas","SHOPEE",17625.78,1,"","","01_sicredi","c","receita"],["r","2026-02",23,"Repasse de vendas","SHEIN",6641.3,1,"","","01_sicredi","c","receita"],["r","2026-02",24,"Receita com vendas","VENDA FÍSICA",44.9,1,"","","01_sicredi","c","receita"],["r","2026-02",24,"Repasse de vendas","SHOPEE",8597.26,1,"","","01_sicredi","c","receita"],["r","2026-02",25,"Repasse de vendas","SHOPEE",5725.47,1,"","","01_sicredi","c","receita"],["r","2026-02",26,"Repasse de vendas","SHOPEE",6185.15,1,"","","01_sicredi","c","receita"],["r","2026-02",26,"Repasse de vendas","AMAZON",969.37,1,"","","01_sicredi","c","receita"],["r","2026-02",27,"Repasse de vendas","AMAZON",100.66,1,"","","01_sicredi","c","receita"],["r","2026-02",27,"Repasse de vendas","AMAZON",848.19,1,"","","01_sicredi","c","receita"],["r","2026-02",27,"Repasse de vendas","SHOPEE",5945.65,1,"","","01_sicredi","c","receita"],["r","2026-02",27,"Repasse de vendas","MERCADO LIVRE",1500,1,"","","01_sicredi","c","receita"],["r","2026-02",27,"Repasse de vendas","AMAZON",109.49,1,"","","01_sicredi","c","receita"],["r","2026-02",27,"Repasse de vendas","AMAZON",1131.17,1,"","","01_sicredi","c","receita"],["r","2026-02",28,"Rendimento de investimentos","MERCADO PAGO",300.72,1,"","","cdb_mercado_pago_finame","c","investimento"],["r","2026-02",28,"Rendimento de investimentos","INTER DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA",86.14,1,"","","cdb_inter","c","investimento"],["r","2026-03",2,"Repasse de vendas","SHEIN",7358.76,1,"","","01_sicredi","c","receita"],["r","2026-03",2,"Repasse de vendas","SHOPEE",18209,1,"","","01_sicredi","c","receita"],["r","2026-03",3,"Repasse de vendas","SHOPEE",8954.67,1,"","","01_sicredi","c","receita"],["r","2026-03",4,"Repasse de vendas","SHOPEE",7563.32,1,"","","01_sicredi","c","receita"],["r","2026-03",5,"Repasse de vendas","SHOPEE",6593.65,1,"","","01_sicredi","c","receita"],["r","2026-03",6,"Repasse de vendas","MERCADO LIVRE",1500,1,"","","01_sicredi","c","receita"],["r","2026-03",6,"Repasse de vendas","SHOPEE",6349.79,1,"","","01_sicredi","c","receita"],["r","2026-03",9,"Repasse de vendas","SHEIN",9355.37,1,"","","01_sicredi","c","receita"],["r","2026-03",9,"Repasse de vendas","SHOPEE",20247.55,1,"","","01_sicredi","c","receita"],["r","2026-03",12,"Receita com vendas","MARIA LAURA DE MELLO LINO",93.92,1,"","","01_sicredi","c","receita"],["r","2026-04",30,"Outras receitas (Não considerar DRE)","ORNATA DOMUS COMPANY LTDA",981.77,1,"","","01_sicredi","c","receita"],["r","2026-03",10,"Repasse de vendas","SHOPEE",5958.95,1,"","","01_sicredi","c","receita"],["r","2026-03",11,"Receita com vendas","VENDA FÍSICA",19,1,"","","01_sicredi","c","receita"],["r","2026-03",11,"Receita com vendas","ORNATA DOMUS COMPANY LTDA",1826.66,1,"","","01_sicredi","c","receita"],["r","2026-03",11,"Repasse de vendas","SHOPEE",5265.04,1,"","","01_sicredi","c","receita"],["r","2026-03",12,"Receita com vendas","VENDA FÍSICA",48,1,"","","01_sicredi","c","receita"],["r","2026-03",12,"Repasse de vendas","SHOPEE",4939.94,1,"","","01_sicredi","c","receita"],["r","2026-03",12,"Repasse de vendas","AMAZON",809.5,1,"","","01_sicredi","c","receita"],["r","2026-03",13,"Repasse de vendas","AMAZON",535.02,1,"","","01_sicredi","c","receita"],["r","2026-03",13,"Repasse de vendas","SHOPEE",6706.84,1,"","","01_sicredi","c","receita"],["r","2026-03",13,"Repasse de vendas","MERCADO LIVRE",4500,1,"","","01_sicredi","c","receita"],["r","2026-03",13,"Repasse de vendas","AMAZON",80.01,1,"","","01_sicredi","c","receita"],["r","2026-03",16,"Outras receitas","SICREDI",0.01,1,"","","01_sicredi","c","receita"],["r","2026-03",16,"Repasse de vendas","SHOPEE",17943.22,1,"","","01_sicredi","c","receita"],["r","2026-03",16,"Repasse de vendas","SHEIN",7415.02,1,"","","01_sicredi","c","receita"],["r","2026-03",17,"Receita com vendas","VENDA FÍSICA",74.3,1,"","","01_sicredi","c","receita"],["r","2026-03",17,"Repasse de vendas","SHOPEE",6652.08,1,"","","01_sicredi","c","receita"],["r","2026-03",18,"Repasse de vendas","TIKTOK",408.22,1,"","","01_sicredi","c","receita"],["r","2026-03",18,"Repasse de vendas","SHOPEE",5101.05,1,"","","01_sicredi","c","receita"],["r","2026-03",19,"Repasse de vendas","TIKTOK",14.41,1,"","","01_sicredi","c","receita"],["r","2026-03",19,"Repasse de vendas","TIKTOK",154.61,1,"","","01_sicredi","c","receita"],["r","2026-03",19,"Repasse de vendas","SHOPEE",5186.92,1,"","","01_sicredi","c","receita"],["r","2026-03",20,"Receita com vendas","VENDA FÍSICA",205,1,"","","caixa_dinheiro","c","receita"],["r","2026-03",20,"Outras receitas (Não considerar DRE)","JONATHAN ROQUE DE SOUZA",1000,1,"","","caixa_dinheiro","c","receita"],["r","2026-03",20,"Repasse de vendas","SHOPEE",6375.52,1,"","","01_sicredi","c","receita"],["r","2026-03",20,"Repasse de vendas","MERCADO LIVRE",3000,1,"","","01_sicredi","c","receita"],["r","2026-03",21,"Repasse de vendas","TIKTOK",12.14,1,"","","01_sicredi","c","receita"],["r","2026-03",23,"Repasse de vendas","TIKTOK",12.14,1,"","","01_sicredi","c","receita"],["r","2026-03",23,"Repasse de vendas","SHEIN",8154.38,1,"","","01_sicredi","c","receita"],["r","2026-03",23,"Repasse de vendas","TIKTOK",53.85,1,"","","01_sicredi","c","receita"],["r","2026-03",23,"Repasse de vendas","SHOPEE",16851.46,1,"","","01_sicredi","c","receita"],["r","2026-03",24,"Receita com vendas","VENDA FÍSICA",25,1,"","","caixa_dinheiro","c","receita"],["r","2026-03",24,"Repasse de vendas","SHOPEE",6310.34,1,"","","01_sicredi","c","receita"],["r","2026-03",25,"Receita com vendas","VENDA FÍSICA",33.8,1,"","","01_sicredi","c","receita"],["r","2026-03",25,"Receita com vendas","VENDA FÍSICA",81.68,1,"","","01_sicredi","c","receita"],["r","2026-03",25,"Repasse de vendas","TIKTOK",30.8,1,"","","01_sicredi","c","receita"],["r","2026-03",25,"Repasse de vendas","SHOPEE",4160.88,1,"","","01_sicredi","c","receita"],["r","2026-03",26,"Repasse de vendas","AMAZON",812.99,1,"","","01_sicredi","c","receita"],["r","2026-03",26,"Repasse de vendas","SHOPEE",5553.09,1,"","","01_sicredi","c","receita"],["r","2026-03",26,"Repasse de vendas","TIKTOK",24.27,1,"","","01_sicredi","c","receita"],["r","2026-03",27,"Repasse de vendas","AMAZON",296.7,1,"","","01_sicredi","c","receita"],["r","2026-03",27,"Repasse de vendas","AMAZON",50.07,1,"","","01_sicredi","c","receita"],["r","2026-03",27,"Repasse de vendas","AMAZON",1738.66,1,"","","01_sicredi","c","receita"],["r","2026-03",27,"Repasse de vendas","AMAZON",23.67,1,"","","01_sicredi","c","receita"],["r","2026-03",27,"Repasse de vendas","MERCADO LIVRE",5000,1,"","","01_sicredi","c","receita"],["r","2026-03",27,"Repasse de vendas","SHOPEE",4614.99,1,"","","01_sicredi","c","receita"],["r","2026-03",30,"Outras receitas (Não considerar DRE)","ORNATA DOMUS COMPANY LTDA",350,1,"","","01_sicredi","c","receita"],["r","2026-03",30,"Repasse de vendas","TIKTOK",77.23,1,"","","01_sicredi","c","receita"],["r","2026-03",30,"Repasse de vendas","SHEIN",8960.32,1,"","","01_sicredi","c","receita"],["r","2026-03",30,"Repasse de vendas","SHOPEE",13609.98,1,"","","01_sicredi","c","receita"],["r","2026-03",31,"Outras receitas (Não considerar DRE)","SAMUEL ANTONIO DE SOUZA MARTINS",200,1,"","","caixa_dinheiro","c","receita"],["r","2026-03",31,"Rendimento de investimentos","INTER DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA",131.95,1,"","","cdb_inter","c","investimento"],["r","2026-03",31,"Rendimento de investimentos","MERCADO PAGO",349.77,1,"","","cdb_mercado_pago_finame","c","investimento"],["r","2026-03",31,"Repasse de vendas","SHOPEE",5269.4,1,"","","01_sicredi","c","receita"],["r","2026-03",31,"Repasse de vendas","TIKTOK",87.72,1,"","","01_sicredi","c","receita"],["r","2026-04",1,"Repasse de vendas","TIKTOK",123.29,1,"","","01_sicredi","c","receita"],["r","2026-04",1,"Repasse de vendas","SHOPEE",4100.98,1,"","","01_sicredi","c","receita"],["r","2026-04",2,"Receita com vendas","VENDA FÍSICA",51.8,1,"","","01_sicredi","c","receita"],["r","2026-04",2,"Repasse de vendas","SHOPEE",3697.75,1,"","","01_sicredi","c","receita"],["r","2026-04",2,"Repasse de vendas","TIKTOK",76.44,1,"","","01_sicredi","c","receita"],["r","2026-04",2,"Repasse de vendas","TIKTOK",375.98,1,"","","01_sicredi","c","receita"],["r","2026-04",3,"Repasse de vendas","TIKTOK",125.39,1,"","","01_sicredi","c","receita"],["r","2026-04",3,"Repasse de vendas","TIKTOK",218.22,1,"","","01_sicredi","c","receita"],["r","2026-04",4,"Outras receitas (Não considerar DRE)","JONATHAN ROQUE DE SOUZA",150,1,"","","caixa_dinheiro","c","receita"],["r","2026-04",4,"Repasse de vendas","MERCADO LIVRE",5500,1,"","","01_sicredi","c","receita"],["r","2026-04",4,"Repasse de vendas","TIKTOK",258.57,1,"","","01_sicredi","c","receita"],["r","2026-03",11,"Receita com vendas","LUIZ ANTONIO RONDINI VIEIRA",88.48,1,"","","01_sicredi","c","receita"],["r","2026-04",6,"Repasse de vendas","SHOPEE",16576.57,1,"","","01_sicredi","c","receita"],["r","2026-04",6,"Repasse de vendas","SHEIN",8771.03,1,"","","01_sicredi","c","receita"],["r","2026-04",6,"Repasse de vendas","TIKTOK",514.55,1,"","","01_sicredi","c","receita"],["r","2026-04",7,"Receita com vendas","VENDA FÍSICA",150.5,1,"","","01_sicredi","c","receita"],["r","2026-04",7,"Repasse de vendas","SHOPEE",4899.37,1,"","","01_sicredi","c","receita"],["r","2026-04",7,"Repasse de vendas","TIKTOK",415.64,1,"","","01_sicredi","c","receita"],["r","2026-04",8,"Receita com vendas","VENDA FÍSICA",44.7,1,"","","01_sicredi","c","receita"],["r","2026-04",8,"Repasse de vendas","TIKTOK",26.48,1,"","","01_sicredi","c","receita"],["r","2026-04",8,"Repasse de vendas","TIKTOK",769.08,1,"","","01_sicredi","c","receita"],["r","2026-04",8,"Repasse de vendas","SHOPEE",3100.09,1,"","","01_sicredi","c","receita"],["r","2026-04",9,"Receita com vendas","VENDA FÍSICA",59.8,1,"","","01_sicredi","c","receita"],["r","2026-04",9,"Receita com vendas","VENDA FÍSICA",38.8,1,"","","01_sicredi","c","receita"],["r","2026-04",9,"Repasse de vendas","SHOPEE",2945.84,1,"","","01_sicredi","c","receita"],["r","2026-04",9,"Repasse de vendas","AMAZON",1814.24,1,"","","01_sicredi","c","receita"],["r","2026-04",10,"Receita com vendas","VENDA FÍSICA",140,1,"","","01_sicredi","c","receita"],["r","2026-04",10,"Outras receitas (Não considerar DRE)","CAMILA RODRIGUES CAJUELA LTDA",800,1,"","","caixa_dinheiro","c","receita"],["r","2026-04",10,"Outras receitas (Não considerar DRE)","GABRIEL FELIPE PEREIRA DA SILVA",55,1,"","","caixa_dinheiro","c","receita"],["r","2026-04",10,"Outras receitas (Não considerar DRE)","VITORIA LEAO DE LIMA",100,1,"","","caixa_dinheiro","c","receita"],["r","2026-04",10,"Repasse de vendas","SHOPEE",5421.32,1,"","","01_sicredi","c","receita"],["r","2026-04",10,"Repasse de vendas","MERCADO LIVRE",2500,1,"","","01_sicredi","c","receita"],["r","2026-04",10,"Repasse de vendas","AMAZON",338.25,1,"","","01_sicredi","c","receita"],["r","2026-04",10,"Repasse de vendas","TIKTOK",125.32,1,"","","01_sicredi","c","receita"],["r","2026-04",10,"Repasse de vendas","AMAZON",1806.62,1,"","","01_sicredi","c","receita"],["r","2026-04",10,"Repasse de vendas","AMAZON",645.87,1,"","","01_sicredi","c","receita"],["r","2026-04",10,"Repasse de vendas","AMAZON",44.02,1,"","","01_sicredi","c","receita"],["r","2026-04",12,"Repasse de vendas","TIKTOK",235.16,1,"","","01_sicredi","c","receita"],["r","2026-04",13,"Receita com vendas","VENDA FÍSICA",131.4,1,"","","01_sicredi","c","receita"],["r","2026-04",13,"Repasse de vendas","TIKTOK",224.46,1,"","","01_sicredi","c","receita"],["r","2026-04",14,"Repasse de vendas","SHOPEE",11511.2,1,"","","01_sicredi","c","receita"],["r","2026-04",13,"Repasse de vendas","SHEIN",6982.4,1,"","","01_sicredi","c","receita"],["r","2026-04",14,"Receita com vendas","VENDA FÍSICA",66.7,1,"","","01_sicredi","c","receita"],["r","2026-04",14,"Receita com vendas","VENDA FÍSICA",29.9,1,"","","01_sicredi","c","receita"],["r","2026-04",14,"Outras receitas (Não considerar DRE)","LUIZ ANTONIO RONDINI VIEIRA",250,1,"","","caixa_dinheiro","c","receita"],["r","2026-04",14,"Rendimento de investimentos","INTER DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA",50.43,1,"","","cdb_inter","c","investimento"],["r","2026-04",14,"Repasse de vendas","MERCADO LIVRE",3500,1,"","","01_sicredi","c","receita"],["r","2026-04",14,"Repasse de vendas","SHOPEE",5644.92,1,"","","01_sicredi","c","receita"],["r","2026-04",14,"Repasse de vendas","TIKTOK",187.5,1,"","","01_sicredi","c","receita"],["r","2026-04",14,"Receita com vendas","VENDA FÍSICA",57.7,1,"","","01_sicredi","c","receita"],["r","2026-04",16,"Receita com vendas","ORNATA DOMUS COMPANY LTDA",2189.91,1,"","","01_sicredi","c","receita"],["r","2026-04",16,"Outras receitas","EMMILY REGINA COSMO BETARELLO - FLORAE",121.24,1,"","","01_sicredi","c","receita"],["r","2026-04",15,"Rendimento de investimentos","INTER DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA",6.02,1,"","","cdb_inter","c","investimento"],["r","2026-04",14,"Repasse de vendas","TIKTOK",160.65,1,"","","01_sicredi","c","receita"],["r","2026-04",15,"Repasse de vendas","TIKTOK",301.73,1,"","","01_sicredi","c","receita"],["r","2026-04",15,"Repasse de vendas","SHOPEE",5421.11,1,"","","01_sicredi","c","receita"],["r","2026-04",16,"Repasse de vendas","TIKTOK",70.47,1,"","","01_sicredi","c","receita"],["r","2026-04",16,"Repasse de vendas","SHOPEE",5655.49,1,"","","01_sicredi","c","receita"],["r","2026-04",17,"Receita com vendas","VENDA FÍSICA",47.9,1,"","","01_sicredi","c","receita"],["r","2026-04",17,"Repasse de vendas","TIKTOK",10.37,1,"","","01_sicredi","c","receita"],["r","2026-04",17,"Repasse de vendas","SHOPEE",6697.33,1,"","","01_sicredi","c","receita"],["r","2026-04",17,"Repasse de vendas","MERCADO LIVRE",2300,1,"","","01_sicredi","c","receita"],["r","2026-04",18,"Repasse de vendas","TIKTOK",436.87,1,"","","01_sicredi","c","receita"],["r","2026-04",20,"Outras receitas (Não considerar DRE)","MURILO BISPO ZENELATO",200,1,"","","caixa_dinheiro","c","receita"],["r","2026-04",20,"Repasse de vendas","SHOPEE",16864.18,1,"","","01_sicredi","c","receita"],["r","2026-04",20,"Repasse de vendas","SHEIN",2514.83,1,"","","01_sicredi","c","receita"],["r","2026-04",20,"Repasse de vendas","SHEIN",99.44,1,"","","01_sicredi","c","receita"],["r","2026-04",20,"Repasse de vendas","SHEIN",3437.83,1,"","","01_sicredi","c","receita"],["r","2026-04",20,"Repasse de vendas","TIKTOK",516.92,1,"","","01_sicredi","c","receita"],["r","2026-04",20,"Repasse de vendas","SHEIN",1147.97,1,"","","01_sicredi","c","receita"],["r","2026-04",20,"Repasse de vendas","TIKTOK",59.28,1,"","","01_sicredi","c","receita"],["r","2026-04",22,"Repasse de vendas","MERCADO LIVRE",5000,1,"","","01_sicredi","c","receita"],["r","2026-04",22,"Repasse de vendas","SHEIN",156.32,1,"","","01_sicredi","c","receita"],["r","2026-04",22,"Repasse de vendas","TIKTOK",579.45,1,"","","01_sicredi","c","receita"],["r","2026-04",22,"Repasse de vendas","SHOPEE",13858.66,1,"","","01_sicredi","c","receita"],["r","2026-04",23,"Outras receitas (Não considerar DRE)","DENILSON GOMES JUNIOR",200,1,"","","caixa_dinheiro","c","receita"],["r","2026-04",23,"Repasse de vendas","AMAZON",1189.17,1,"","","01_sicredi","c","receita"],["r","2026-04",23,"Repasse de vendas","SHOPEE",7528.45,1,"","","01_sicredi","c","receita"],["r","2026-04",23,"Repasse de vendas","TIKTOK",138.71,1,"","","01_sicredi","c","receita"],["r","2026-04",24,"Repasse de vendas","AMAZON",76.29,1,"","","01_sicredi","c","receita"],["r","2026-04",24,"Repasse de vendas","AMAZON",1976.48,1,"","","01_sicredi","c","receita"],["r","2026-04",24,"Repasse de vendas","AMAZON",350.64,1,"","","01_sicredi","c","receita"],["r","2026-04",24,"Repasse de vendas","AMAZON",132.43,1,"","","01_sicredi","c","receita"],["r","2026-04",24,"Repasse de vendas","MERCADO LIVRE",3000,1,"","","01_sicredi","c","receita"],["r","2026-04",24,"Repasse de vendas","SHOPEE",6126.65,1,"","","01_sicredi","c","receita"],["r","2026-04",25,"Repasse de vendas","TIKTOK",48.68,1,"","","01_sicredi","c","receita"],["r","2026-04",26,"Repasse de vendas","TIKTOK",132.39,1,"","","01_sicredi","c","receita"],["r","2026-04",27,"Repasse de vendas","TIKTOK",975.55,1,"","","01_sicredi","c","receita"],["r","2026-04",27,"Repasse de vendas","SHEIN",64.94,1,"","","01_sicredi","c","receita"],["r","2026-04",27,"Repasse de vendas","SHOPEE",13796.89,1,"","","01_sicredi","c","receita"],["r","2026-04",27,"Repasse de vendas","SHEIN",167.52,1,"","","01_sicredi","c","receita"],["r","2026-04",27,"Repasse de vendas","SHEIN",4164.41,1,"","","01_sicredi","c","receita"],["r","2026-04",27,"Repasse de vendas","TIKTOK",476.38,1,"","","01_sicredi","c","receita"],["r","2026-04",28,"Outras receitas (Não considerar DRE)","VITORIA LEAO DE LIMA",900,1,"","","caixa_dinheiro","c","receita"],["r","2026-04",28,"Repasse de vendas","SHOPEE",6115.73,1,"","","01_sicredi","c","receita"],["r","2026-04",28,"Repasse de vendas","SHEIN",2446.87,1,"","","01_sicredi","c","receita"],["r","2026-04",28,"Repasse de vendas","SHEIN",1293.63,1,"","","01_sicredi","c","receita"],["r","2026-04",29,"Outras receitas (Não considerar DRE)","SUELI LOPES",1000,1,"","","caixa_dinheiro","c","receita"],["r","2026-04",29,"Repasse de vendas","TIKTOK",485.63,1,"","","01_sicredi","c","receita"],["r","2026-04",29,"Repasse de vendas","TIKTOK",713.09,1,"","","01_sicredi","c","receita"],["r","2026-04",29,"Repasse de vendas","SHOPEE",4272.36,1,"","","01_sicredi","c","receita"],["r","2026-04",20,"Outras receitas (Não considerar DRE)","ORNATA DOMUS COMPANY LTDA",981.77,1,"","","01_sicredi","c","receita"],["r","2026-04",30,"Rendimento de investimentos","MERCADO PAGO",0.4,1,"","","cdb_mercado_pago_reten_o","c","investimento"],["r","2026-04",30,"Rendimento de investimentos","MERCADO PAGO",321.66,1,"","","cdb_mercado_pago_finame","c","investimento"],["r","2026-04",30,"Repasse de vendas","SHOPEE",4370.72,1,"","","01_sicredi","c","receita"],["r","2026-04",30,"Repasse de vendas","MERCADO LIVRE",7000,1,"","","01_sicredi","c","receita"],["r","2026-05",1,"Receita com vendas","VENDA FÍSICA",31.8,1,"","","01_sicredi","c","receita"],["r","2026-05",1,"Receita com vendas","VENDA FÍSICA",145.3,1,"","","01_sicredi","c","receita"],["r","2026-05",1,"Repasse de vendas","TIKTOK",560.05,1,"","","01_sicredi","c","receita"],["r","2026-05",2,"Repasse de vendas","TIKTOK",79.16,1,"","","01_sicredi","c","receita"],["r","2026-05",3,"Repasse de vendas","TIKTOK",456.84,1,"","","01_sicredi","c","receita"],["r","2026-05",4,"Outras receitas (Não considerar DRE)","JOAO ANTONIO DA SILVA DOS SANTOS",1000,1,"","","caixa_dinheiro","c","receita"],["r","2026-05",4,"Repasse de vendas","SHEIN",2746.81,1,"","","01_sicredi","c","receita"],["r","2026-05",4,"Repasse de vendas","TIKTOK",600.3,1,"","","01_sicredi","c","receita"],["r","2026-05",4,"Repasse de vendas","SHEIN",169.88,1,"","","01_sicredi","c","receita"],["r","2026-05",4,"Repasse de vendas","SHEIN",27.92,1,"","","01_sicredi","c","receita"],["r","2026-05",4,"Repasse de vendas","TIKTOK",815.96,1,"","","01_sicredi","c","receita"],["r","2026-05",4,"Repasse de vendas","MERCADO LIVRE",5000,1,"","","01_sicredi","c","receita"],["r","2026-05",4,"Repasse de vendas","SHOPEE",20835.75,1,"","","01_sicredi","c","receita"],["r","2026-05",5,"Outras receitas (Não considerar DRE)","PEDRO HENRIQUE CUSTODIO MARTINS",200,1,"","","caixa_dinheiro","c","receita"],["r","2026-05",5,"Repasse de vendas","SHEIN",1272.12,1,"","","01_sicredi","c","receita"],["r","2026-05",5,"Repasse de vendas","SHOPEE",7407.62,1,"","","01_sicredi","c","receita"],["r","2026-05",5,"Repasse de vendas","SHEIN",1569.62,1,"","","01_sicredi","c","receita"],["r","2026-05",6,"Repasse de vendas","TIKTOK",138.25,1,"","","01_sicredi","c","receita"],["r","2026-05",6,"Receita com vendas","VENDA FÍSICA",3.1,1,"","","caixa_dinheiro","c","receita"],["r","2026-05",6,"Receita com vendas","VENDA FÍSICA",33.9,1,"","","caixa_dinheiro","c","receita"],["r","2026-05",6,"Repasse de vendas","SHOPEE",6612.03,1,"","","01_sicredi","c","receita"],["r","2026-05",6,"Repasse de vendas","TIKTOK",819.94,1,"","","01_sicredi","c","receita"],["r","2026-05",8,"Receita com vendas","VENDA FÍSICA",29.9,1,"","","01_sicredi","c","receita"],["r","2026-05",8,"Receita com vendas","VENDA FÍSICA",76.75,1,"","","01_sicredi","c","receita"],["r","2026-05",6,"Receita com vendas","VENDA FÍSICA",39.9,1,"","","01_sicredi","c","receita"],["r","2026-05",7,"Outras receitas (Não considerar DRE)","ELYPLAST RIO PRETO LTDA",1185.2,1,"","","01_sicredi","c","receita"],["r","2026-05",7,"Repasse de vendas","AMAZON",1724.46,1,"","","01_sicredi","c","receita"],["r","2026-05",7,"Repasse de vendas","SHOPEE",6691.09,1,"","","01_sicredi","c","receita"],["r","2026-05",8,"Receita com vendas","VENDA FÍSICA",19.9,1,"","","01_sicredi","c","receita"],["r","2026-05",8,"Receita com vendas","VENDA FÍSICA",57.8,1,"","","01_sicredi","c","receita"],["r","2026-05",8,"Receita com vendas","VENDA FÍSICA",89.8,1,"","","01_sicredi","c","receita"],["r","2026-05",8,"Repasse de vendas","SHOPEE",7608.21,1,"","","01_sicredi","c","receita"],["r","2026-05",8,"Repasse de vendas","AMAZON",332.74,1,"","","01_sicredi","c","receita"],["r","2026-05",8,"Repasse de vendas","TIKTOK",92.09,1,"","","01_sicredi","c","receita"],["r","2026-05",8,"Repasse de vendas","TIKTOK",184.57,1,"","","01_sicredi","c","receita"],["r","2026-05",8,"Repasse de vendas","SHEIN",1949.93,1,"","","01_sicredi","c","receita"],["r","2026-05",8,"Repasse de vendas","MERCADO LIVRE",4000,1,"","","01_sicredi","c","receita"],["r","2026-05",10,"Repasse de vendas","TIKTOK",1439.99,1,"","","01_sicredi","c","receita"],["r","2026-05",10,"Repasse de vendas","TIKTOK",928.66,1,"","","01_sicredi","c","receita"],["r","2026-05",11,"Receita com vendas","VENDA FÍSICA",25.9,1,"","","01_sicredi","c","receita"],["r","2026-05",11,"Repasse de vendas","SHEIN",3572.12,1,"","","01_sicredi","c","receita"],["r","2026-05",11,"Repasse de vendas","SHEIN",84.28,1,"","","01_sicredi","c","receita"],["r","2026-05",11,"Repasse de vendas","SHEIN",199.25,1,"","","01_sicredi","c","receita"],["r","2026-05",11,"Repasse de vendas","SHOPEE",18489.85,1,"","","01_sicredi","c","receita"],["r","2026-05",11,"Repasse de vendas","TIKTOK",1014.58,1,"","","01_sicredi","c","receita"],["r","2026-05",12,"Repasse de vendas","SHEIN",2398.51,1,"","","01_sicredi","c","receita"],["r","2026-05",12,"Repasse de vendas","SHEIN",1458.01,1,"","","01_sicredi","c","receita"],["r","2026-05",12,"Repasse de vendas","SHOPEE",8058.82,1,"","","01_sicredi","c","receita"],["r","2026-05",13,"Repasse de vendas","TIKTOK",383.49,1,"","","01_sicredi","c","receita"],["r","2026-05",13,"Repasse de vendas","SHOPEE",6552.41,1,"","","01_sicredi","c","receita"],["r","2026-05",14,"Repasse de vendas","SHOPEE",4295.27,1,"","","01_sicredi","c","receita"],["r","2026-05",14,"Repasse de vendas","TIKTOK",1634.34,1,"","","01_sicredi","c","receita"],["r","2026-05",15,"Repasse de vendas","TIKTOK",760.26,1,"","","01_sicredi","c","receita"],["r","2026-05",15,"Repasse de vendas","SHOPEE",6217.64,1,"","","01_sicredi","c","receita"],["r","2026-05",15,"Repasse de vendas","TIKTOK",939.94,1,"","","01_sicredi","c","receita"],["r","2026-05",15,"Repasse de vendas","MERCADO LIVRE",9000,1,"","","01_sicredi","c","receita"],["r","2026-05",16,"Repasse de vendas","TIKTOK",1372.43,1,"","","01_sicredi","c","receita"],["r","2026-05",18,"Repasse de vendas","TIKTOK",2256.64,1,"","","01_sicredi","c","receita"],["r","2026-05",18,"Repasse de vendas","SHOPEE",16813.47,1,"","","01_sicredi","c","receita"],["r","2026-05",18,"Repasse de vendas","SHEIN",224.83,1,"","","01_sicredi","c","receita"],["r","2026-05",18,"Repasse de vendas","SHEIN",63.21,1,"","","01_sicredi","c","receita"],["r","2026-05",19,"Repasse de vendas","TIKTOK",1485.58,1,"","","01_sicredi","c","receita"],["r","2026-05",18,"Repasse de vendas","SHEIN",3121.64,1,"","","01_sicredi","c","receita"],["r","2026-05",19,"Outras receitas (Não considerar DRE)","DENILSON GOMES JUNIOR",150,1,"","","caixa_dinheiro","c","receita"],["r","2026-05",19,"Repasse de vendas","SHOPEE",6518.78,1,"","","01_sicredi","c","receita"],["r","2026-05",19,"Repasse de vendas","SHEIN",1265.7,1,"","","01_sicredi","c","receita"],["r","2026-05",19,"Repasse de vendas","SHEIN",2098.83,1,"","","01_sicredi","c","receita"],["r","2026-05",20,"Receita com vendas","ORNATA DOMUS COMPANY LTDA",2248.96,1,"","","01_sicredi","c","receita"],["r","2026-05",20,"Repasse de vendas","TIKTOK",733.8,1,"","","01_sicredi","c","receita"],["r","2026-05",20,"Repasse de vendas","TIKTOK",1942.58,1,"","","01_sicredi","c","receita"],["r","2026-05",20,"Repasse de vendas","SHOPEE",5146.91,1,"","","01_sicredi","c","receita"],["r","2026-05",21,"Receita com vendas","JOAO EDUARDO GONCALVES NOGUEIRA",1000,1,"","","01_sicredi","c","receita"],["r","2026-05",21,"Outras receitas (Não considerar DRE)","DENILSON GOMES JUNIOR",50,1,"","","caixa_dinheiro","c","receita"],["r","2026-05",22,"Repasse de vendas","TIKTOK",946.39,1,"","","01_sicredi","c","receita"],["r","2026-05",21,"Repasse de vendas","AMAZON",1868.87,1,"","","01_sicredi","c","receita"],["r","2026-05",21,"Repasse de vendas","SHOPEE",4252.59,1,"","","01_sicredi","c","receita"],["r","2026-05",22,"Repasse de vendas","MERCADO LIVRE",13000,1,"","","01_sicredi","c","receita"],["r","2026-05",22,"Repasse de vendas","AMAZON",2347.73,1,"","","01_sicredi","c","receita"],["r","2026-05",22,"Repasse de vendas","SHOPEE",5990.51,1,"","","01_sicredi","c","receita"],["r","2026-05",23,"Repasse de vendas","TIKTOK",447.26,1,"","","01_sicredi","c","receita"],["r","2026-05",22,"Repasse de vendas","AMAZON",164.99,1,"","","01_sicredi","c","receita"],["r","2026-05",22,"Repasse de vendas","AMAZON",286.07,1,"","","01_sicredi","c","receita"],["r","2026-05",23,"Repasse de vendas","TIKTOK",989.46,1,"","","01_sicredi","c","receita"],["r","2026-05",24,"Repasse de vendas","TIKTOK",865.48,1,"","","01_sicredi","c","receita"],["r","2026-05",25,"Receita com vendas","VENDA FÍSICA",95.8,1,"","","01_sicredi","c","receita"],["r","2026-05",25,"Repasse de vendas","SHEIN",183.91,1,"","","01_sicredi","c","receita"],["r","2026-05",25,"Repasse de vendas","SHEIN",195.21,1,"","","01_sicredi","c","receita"],["r","2026-05",25,"Repasse de vendas","SHEIN",3622.59,1,"","","01_sicredi","c","receita"],["r","2026-05",25,"Repasse de vendas","SHOPEE",14124.11,1,"","","01_sicredi","c","receita"],["r","2026-05",26,"Outras receitas (Não considerar DRE)","PEDRO HENRIQUE CUSTODIO MARTINS",250,1,"","","caixa_dinheiro","c","receita"],["r","2026-05",26,"Repasse de vendas","SHEIN",2434.18,1,"","","01_sicredi","c","receita"],["r","2026-05",26,"Repasse de vendas","SHOPEE",5901.15,1,"","","01_sicredi","c","receita"],["r","2026-05",26,"Repasse de vendas","TIKTOK",956.56,1,"","","01_sicredi","c","receita"],["r","2026-05",26,"Repasse de vendas","SHEIN",1385.14,1,"","","01_sicredi","c","receita"],["r","2026-05",26,"Repasse de vendas","TIKTOK",632.49,1,"","","01_sicredi","c","receita"],["r","2026-05",27,"Receita com vendas","VENDA FÍSICA",110,1,"","","01_sicredi","c","receita"],["r","2026-05",27,"Repasse de vendas","TIKTOK",1388.83,1,"","","01_sicredi","c","receita"],["r","2026-05",27,"Repasse de vendas","SHOPEE",3588.24,1,"","","01_sicredi","c","receita"],["r","2026-05",28,"Receita com vendas","VENDA FÍSICA",19.9,1,"","","01_sicredi","c","receita"],["r","2026-05",28,"Receita com vendas","VENDA FÍSICA",256.46,1,"","","01_sicredi","c","receita"],["r","2026-05",28,"Repasse de vendas","SHOPEE",3729.57,1,"","","01_sicredi","c","receita"],["r","2026-05",29,"Repasse de vendas","MERCADO LIVRE",11000,1,"","","01_sicredi","c","receita"],["r","2026-05",29,"Repasse de vendas","SHOPEE",5486.66,1,"","","01_sicredi","c","receita"],["r","2026-05",29,"Repasse de vendas","TIKTOK",602.35,1,"","","01_sicredi","c","receita"],["r","2026-05",30,"Repasse de vendas","TIKTOK",299.96,1,"","","01_sicredi","c","receita"],["r","2026-05",31,"Repasse de vendas","TIKTOK",2145.91,1,"","","01_sicredi","c","receita"],["r","2026-05",31,"Rendimento de investimentos","MERCADO PAGO",45.05,1,"","","cdb_mercado_pago_reten_o","c","investimento"],["r","2026-05",31,"Rendimento de investimentos","INTER DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA",0.04,1,"","","cdb_inter","c","investimento"],["r","2026-05",31,"Rendimento de investimentos","MERCADO PAGO",318.31,1,"","","cdb_mercado_pago_finame","c","investimento"],["r","2026-05",31,"Repasse de vendas","TIKTOK",799.24,1,"","","01_sicredi","c","receita"],["r","2026-06",1,"Outras receitas (Não considerar DRE)","DENILSON GOMES JUNIOR",250,1,"","","caixa_dinheiro","c","receita"],["r","2026-06",1,"Repasse de vendas","SHEIN",169.7,1,"","","01_sicredi","c","receita"],["r","2026-06",1,"Repasse de vendas","SHOPEE",11641.72,1,"","","01_sicredi","c","receita"],["r","2026-06",1,"Repasse de vendas","SHEIN",274.34,1,"","","01_sicredi","c","receita"],["r","2026-06",1,"Repasse de vendas","TIKTOK",359.34,1,"","","01_sicredi","c","receita"],["r","2026-06",1,"Repasse de vendas","SHEIN",7722.76,1,"","","01_sicredi","c","receita"],["r","2026-06",2,"Repasse de vendas","SHEIN",3050.32,1,"","","01_sicredi","c","receita"],["r","2026-06",2,"Repasse de vendas","SHEIN",4999.81,1,"","","01_sicredi","c","receita"],["r","2026-06",2,"Repasse de vendas","SHOPEE",4286.96,1,"","","01_sicredi","c","receita"],["r","2026-06",3,"Repasse de vendas","TIKTOK",523.28,1,"","","01_sicredi","c","receita"],["r","2026-06",3,"Repasse de vendas","SHOPEE",3447.31,1,"","","01_sicredi","c","receita"],["r","2026-06",5,"Repasse de vendas","SHOPEE",3301.38,1,"","","01_sicredi","c","receita"],["r","2026-06",4,"Repasse de vendas","TIKTOK",882.64,1,"","","01_sicredi","c","receita"],["r","2026-06",5,"Repasse de vendas","SHOPEE",3849.99,1,"","","01_sicredi","c","receita"],["r","2026-06",5,"Repasse de vendas","MERCADO LIVRE",8500,1,"","","01_sicredi","c","receita"],["r","2026-06",5,"Repasse de vendas","TIKTOK",666.09,1,"","","01_sicredi","c","receita"],["r","2026-06",5,"Repasse de vendas","AMAZON",2618.25,1,"","","01_sicredi","c","receita"],["r","2026-06",6,"Repasse de vendas","TIKTOK",866.19,1,"","","01_sicredi","c","receita"],["r","2026-06",6,"Repasse de vendas","TIKTOK",357.17,1,"","","01_sicredi","c","receita"],["r","2026-06",7,"Repasse de vendas","TIKTOK",1185.82,1,"","","01_sicredi","c","receita"],["r","2026-06",8,"Repasse de vendas","SHEIN",5393.56,1,"","","01_sicredi","c","receita"],["r","2026-06",8,"Repasse de vendas","SHEIN",310.17,1,"","","01_sicredi","c","receita"],["r","2026-06",8,"Repasse de vendas","AMAZON",728.99,1,"","","01_sicredi","c","receita"],["r","2026-06",8,"Repasse de vendas","SHEIN",295.74,1,"","","01_sicredi","c","receita"],["r","2026-06",8,"Repasse de vendas","TIKTOK",580.73,1,"","","01_sicredi","c","receita"],["r","2026-06",8,"Repasse de vendas","AMAZON",3829.5,1,"","","01_sicredi","c","receita"],["r","2026-06",8,"Repasse de vendas","AMAZON",1118.86,1,"","","01_sicredi","c","receita"],["r","2026-06",8,"Repasse de vendas","SHOPEE",11588.88,1,"","","01_sicredi","c","receita"],["r","2026-06",8,"Repasse de vendas","AMAZON",140.29,1,"","","01_sicredi","c","receita"],["r","2026-06",9,"Repasse de vendas","SHEIN",1638.92,1,"","","01_sicredi","c","receita"],["r","2026-06",9,"Repasse de vendas","TIKTOK",327.25,1,"","","01_sicredi","c","receita"],["r","2026-06",9,"Repasse de vendas","SHEIN",3128.6,1,"","","01_sicredi","c","receita"],["r","2026-06",9,"Repasse de vendas","SHOPEE",4114.27,1,"","","01_sicredi","c","receita"],["r","2026-06",8,"Receita com vendas","VENDA FÍSICA",56,1,"","","01_sicredi","c","receita"],["r","2026-06",8,"Receita com vendas","VENDA FÍSICA",22,1,"","","01_sicredi","c","receita"],["r","2026-06",8,"Receita com vendas","VENDA FÍSICA",25.9,1,"","","01_sicredi","c","receita"],["r","2026-06",8,"Receita com vendas","VENDA FÍSICA",27,1,"","","01_sicredi","c","receita"],["r","2026-06",8,"Receita com vendas","VENDA FÍSICA",19.8,1,"","","01_sicredi","c","receita"],["r","2026-06",8,"Receita com vendas","VENDA FÍSICA",50,1,"","","01_sicredi","c","receita"],["r","2026-06",8,"Receita com vendas","VENDA FÍSICA",62,1,"","","01_sicredi","c","receita"],["r","2026-06",8,"Receita com vendas","VENDA FÍSICA",151.35,1,"","","01_sicredi","c","receita"],["r","2026-06",10,"Outras receitas (Não considerar DRE)","ORNATA DOMUS COMPANY LTDA",734,1,"","","caixa_dinheiro","c","receita"],["r","2026-06",10,"Outras receitas (Não considerar DRE)","PAULO EDUARDO CUSTODIO MARTINS",50,1,"","","caixa_dinheiro","c","receita"],["r","2026-06",10,"Repasse de vendas","SHOPEE",3909.33,1,"","","01_sicredi","c","receita"],["r","2026-06",11,"Receita com vendas","VENDA FÍSICA",62,1,"","","01_sicredi","c","receita"],["r","2026-06",11,"Repasse de vendas","TIKTOK",1231.93,1,"","","01_sicredi","c","receita"],["r","2026-06",11,"Repasse de vendas","SHOPEE",3524.97,1,"","","01_sicredi","c","receita"],["r","2026-06",12,"Receita com vendas","VENDA FÍSICA",50,1,"","","caixa_dinheiro","c","receita"],["r","2026-06",12,"Repasse de vendas","TIKTOK",769.66,1,"","","01_sicredi","c","receita"],["r","2026-06",12,"Repasse de vendas","SHOPEE",3993.56,1,"","","01_sicredi","c","receita"],["r","2026-06",13,"Repasse de vendas","TIKTOK",1388.86,1,"","","01_sicredi","c","receita"],["r","2026-06",13,"Repasse de vendas","TIKTOK",1174.08,1,"","","01_sicredi","c","receita"],["r","2026-06",14,"Repasse de vendas","MERCADO LIVRE",13000,1,"","","01_sicredi","c","receita"],["r","2026-06",16,"Receita com vendas","ORNATA DOMUS COMPANY LTDA",5051.63,1,"","","01_sicredi","c","receita"],["r","2026-06",15,"Repasse de vendas","SHEIN",6371.82,1,"","","01_sicredi","c","receita"],["r","2026-06",15,"Repasse de vendas","SHEIN",366.05,1,"","","01_sicredi","c","receita"],["r","2026-06",15,"Repasse de vendas","SHOPEE",12958.63,1,"","","01_sicredi","c","receita"],["r","2026-06",15,"Repasse de vendas","TIKTOK",1327.44,1,"","","01_sicredi","c","receita"],["r","2026-06",15,"Repasse de vendas","SHEIN",187.83,1,"","","01_sicredi","c","receita"],["r","2026-06",16,"Receita com vendas","VENDA FÍSICA",414.75,1,"","","01_sicredi","c","receita"],["r","2026-06",16,"Repasse de vendas","SHEIN",1827.04,1,"","","01_sicredi","c","receita"],["r","2026-06",16,"Repasse de vendas","SHEIN",3260.19,1,"","","01_sicredi","c","receita"],["r","2026-06",16,"Repasse de vendas","SHOPEE",4355.99,1,"","","01_sicredi","c","receita"],["r","2026-06",16,"Repasse de vendas","TIKTOK",1051.46,1,"","","01_sicredi","c","receita"],["r","2026-06",16,"Repasse de vendas","TIKTOK",877.38,1,"","","01_sicredi","c","receita"],["r","2026-06",17,"Repasse de vendas","SHOPEE",5541.37,1,"","","01_sicredi","c","receita"],["r","2026-06",18,"Repasse de vendas","TIKTOK",1944.85,1,"","","01_sicredi","c","receita"],["r","2026-06",18,"Repasse de vendas","SHOPEE",5089.8,1,"","","01_sicredi","c","receita"],["r","2026-06",18,"Repasse de vendas","AMAZON",3612.06,1,"","","01_sicredi","c","receita"],["r","2026-06",19,"Receita com vendas","VENDA FÍSICA",32,1,"","","01_sicredi","c","receita"],["r","2026-06",19,"Receita com vendas","VENDA FÍSICA",79.6,1,"","","01_sicredi","c","receita"],["r","2026-06",19,"Receita com vendas","VENDA FÍSICA",446.15,1,"","","01_sicredi","c","receita"],["r","2026-06",19,"Outras receitas (Não considerar DRE)","DENILSON GOMES JUNIOR",200,1,"","","caixa_dinheiro","c","receita"],["r","2026-06",19,"Repasse de vendas","AMAZON",3866.78,1,"","","01_sicredi","c","receita"],["r","2026-06",19,"Repasse de vendas","AMAZON",3432.67,1,"","","01_sicredi","c","receita"],["r","2026-06",19,"Repasse de vendas","SHOPEE",4876.76,1,"","","01_sicredi","c","receita"],["r","2026-06",19,"Repasse de vendas","TIKTOK",1447.05,1,"","","01_sicredi","c","receita"],["r","2026-06",19,"Repasse de vendas","AMAZON",236.7,1,"","","01_sicredi","c","receita"],["r","2026-06",19,"Repasse de vendas","AMAZON",236.09,1,"","","01_sicredi","c","receita"],["r","2026-06",20,"Repasse de vendas","TIKTOK",1413.89,1,"","","01_sicredi","c","receita"],["r","2026-06",21,"Repasse de vendas","TIKTOK",4190.77,1,"","","01_sicredi","c","receita"],["r","2026-06",20,"Receita com vendas","FABRICIA LIMA STORE - LUCAS HENRIQUE DE SOUZA VESTUARIOS",1636.37,1,"","","01_sicredi","c","receita"],["r","2026-06",22,"Outras receitas (Não considerar DRE)","SAMUEL ANTONIO DE SOUZA MARTINS",4000,1,"","","01_sicredi","c","receita"],["r","2026-06",22,"Repasse de vendas","SHOPEE",14411.02,1,"","","01_sicredi","c","receita"],["r","2026-06",22,"Repasse de vendas","TIKTOK",2937.33,1,"","","01_sicredi","c","receita"],["r","2026-06",22,"Repasse de vendas","SHEIN",164.47,1,"","","01_sicredi","c","receita"],["r","2026-06",22,"Repasse de vendas","SHEIN",258.94,1,"","","01_sicredi","c","receita"],["r","2026-06",23,"Outras receitas (Não considerar DRE)","PEDRO HENRIQUE CUSTODIO MARTINS",300,1,"","","caixa_dinheiro","c","receita"],["r","2026-06",23,"Outras receitas (Não considerar DRE)","JOAO ANTONIO DA SILVA DOS SANTOS",1000,1,"","","caixa_dinheiro","c","receita"],["r","2026-06",22,"Repasse de vendas","SHEIN",4592.61,1,"","","01_sicredi","c","receita"],["r","2026-06",23,"Repasse de vendas","SHEIN",2949.49,1,"","","01_sicredi","c","receita"],["r","2026-06",23,"Repasse de vendas","SHOPEE",4989.17,1,"","","01_sicredi","c","receita"],["r","2026-06",23,"Repasse de vendas","SHEIN",1800.27,1,"","","01_sicredi","c","receita"],["r","2026-06",23,"Repasse de vendas","TIKTOK",1875.9,1,"","","01_sicredi","c","receita"],["r","2026-06",24,"Outras receitas (Não considerar DRE)","GOLDEN PLASTIC COMERCIO E SERVICOS LTDA",51.2,1,"","","01_sicredi","c","receita"],["r","2026-06",24,"Repasse de vendas","TIKTOK",1389.69,1,"","","01_sicredi","c","receita"],["r","2026-06",24,"Repasse de vendas","SHOPEE",6930.65,1,"","","01_sicredi","c","receita"],["r","2026-06",25,"Receita com vendas","VENDA FÍSICA",85,1,"","","caixa_dinheiro","c","receita"],["r","2026-06",25,"Repasse de vendas","TIKTOK",1665.01,1,"","","01_sicredi","c","receita"],["r","2026-06",25,"Repasse de vendas","SHOPEE",4914.46,1,"","","01_sicredi","c","receita"],["r","2026-06",26,"Repasse de vendas","MERCADO LIVRE",18000,1,"","","01_sicredi","c","receita"],["r","2026-06",26,"Repasse de vendas","SHOPEE",4306.38,1,"","","01_sicredi","c","receita"],["r","2026-06",26,"Repasse de vendas","TIKTOK",914.81,1,"","","01_sicredi","c","receita"],["r","2026-06",27,"Receita com vendas","VENDA FÍSICA",50,1,"","","01_sicredi","c","receita"],["r","2026-06",27,"Repasse de vendas","TIKTOK",2044.52,1,"","","01_sicredi","c","receita"],["r","2026-06",28,"Repasse de vendas","TIKTOK",2417.79,1,"","","01_sicredi","c","receita"],["r","2026-06",29,"Repasse de vendas","SHEIN",156.01,1,"","","01_sicredi","c","receita"],["r","2026-06",29,"Repasse de vendas","SHEIN",71.62,1,"","","01_sicredi","c","receita"],["r","2026-06",29,"Repasse de vendas","SHOPEE",5552.07,1,"","","01_sicredi","c","receita"],["r","2026-06",29,"Repasse de vendas","TIKTOK",2795.6,1,"","","01_sicredi","c","receita"],["r","2026-06",29,"Repasse de vendas","SHEIN",5147,1,"","","01_sicredi","c","receita"],["r","2026-06",30,"Outras receitas (Não considerar DRE)","THALIS HENRIQUE CLEMENTE DE SOUZA",50,1,"","","01_sicredi","c","receita"],["r","2026-06",30,"Outras receitas (Não considerar DRE)","JOAO ANTONIO DA SILVA DOS SANTOS",1000,1,"","","caixa_dinheiro","c","receita"],["r","2026-06",30,"Rendimento de investimentos","INTER DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA",6.9,1,"","","cdb_inter","c","investimento"],["r","2026-06",30,"Rendimento de investimentos","MERCADO PAGO",124.84,1,"","","cdb_mercado_pago_reten_o","c","investimento"],["r","2026-06",30,"Rendimento de investimentos","MERCADO PAGO",332.3,1,"","","cdb_mercado_pago_finame","c","investimento"],["r","2026-06",30,"Repasse de vendas","SHEIN",3268.77,1,"","","01_sicredi","c","receita"],["r","2026-06",30,"Repasse de vendas","SHOPEE",14146.65,1,"","","01_sicredi","c","receita"],["r","2026-06",30,"Repasse de vendas","SHEIN",1629.23,1,"","","01_sicredi","c","receita"],["r","2026-06",30,"Repasse de vendas","TIKTOK",1798.74,1,"","","01_sicredi","c","receita"],["r","2026-06",30,"Repasse de vendas","MERCADO LIVRE",5900,1,"","","01_sicredi","c","receita"],["r","2026-07",1,"Repasse de vendas","SHOPEE",3755.84,1,"","","01_sicredi","c","receita"],["r","2026-07",1,"Repasse de vendas","TIKTOK",1140.98,1,"","","01_sicredi","c","receita"],["r","2026-07",2,"Receita com vendas","VENDA FÍSICA",30,1,"","","01_sicredi","c","receita"],["r","2026-07",2,"Outras receitas (Não considerar DRE)","VITORIA LEAO DE LIMA",800,1,"","","caixa_dinheiro","c","receita"],["r","2026-07",2,"Repasse de vendas","TIKTOK",1582.06,1,"","","01_sicredi","c","receita"],["r","2026-07",3,"Receita com vendas","VENDA FÍSICA",44,1,"","","01_sicredi","c","receita"],["r","2026-07",3,"Repasse de vendas","TIKTOK",1310.33,1,"","","01_sicredi","c","receita"],["r","2026-07",3,"Repasse de vendas","SHOPEE",6228.51,1,"","","01_sicredi","c","receita"],["r","2026-07",2,"Repasse de vendas","AMAZON",3434.57,1,"","","01_sicredi","c","receita"],["r","2026-07",3,"Repasse de vendas","AMAZON",73.85,1,"","","01_sicredi","c","receita"],["r","2026-07",3,"Repasse de vendas","SHOPEE",3100.01,1,"","","01_sicredi","c","receita"],["r","2026-07",3,"Repasse de vendas","AMAZON",4002.01,1,"","","01_sicredi","c","receita"],["r","2026-07",3,"Repasse de vendas","AMAZON",202.9,1,"","","01_sicredi","c","receita"],["r","2026-07",3,"Repasse de vendas","AMAZON",2105.39,1,"","","01_sicredi","c","receita"],["r","2026-07",4,"Repasse de vendas","TIKTOK",3513.91,1,"","","01_sicredi","c","receita"],["r","2026-07",5,"Repasse de vendas","TIKTOK",2253.46,1,"","","01_sicredi","c","receita"],["r","2026-07",6,"Outras receitas (Não considerar DRE)","KARINA DE LIMA TENORIO",100,1,"","","01_sicredi","c","receita"],["r","2026-07",6,"Repasse de vendas","SHOPEE",4264.77,1,"","","01_sicredi","c","receita"],["r","2026-07",6,"Repasse de vendas","TIKTOK",2697.46,1,"","","01_sicredi","c","receita"],["r","2026-07",6,"Repasse de vendas","SHEIN",102,1,"","","01_sicredi","c","receita"],["r","2026-07",6,"Repasse de vendas","SHEIN",64.19,1,"","","01_sicredi","c","receita"],["r","2026-07",6,"Repasse de vendas","SHEIN",3758.79,1,"","","01_sicredi","c","receita"],["r","2026-07",7,"Repasse de vendas","TIKTOK",1698.86,1,"","","01_sicredi","c","receita"],["r","2026-07",7,"Repasse de vendas","SHEIN",3419.35,1,"","","01_sicredi","c","receita"],["r","2026-07",7,"Repasse de vendas","SHOPEE",12874.49,1,"","","01_sicredi","c","receita"],["r","2026-07",7,"Repasse de vendas","SHEIN",1289.84,1,"","","01_sicredi","c","receita"],["r","2026-07",8,"Receita com vendas","VENDA FÍSICA",20,1,"","","01_sicredi","c","receita"],["r","2026-07",8,"Receita com vendas","VENDA FÍSICA",16,1,"","","01_sicredi","c","receita"],["r","2026-07",8,"Receita com vendas","VENDA FÍSICA",16,1,"","","01_sicredi","c","receita"],["r","2026-07",8,"Outras receitas (Não considerar DRE)","SAMUEL ANTONIO DE SOUZA MARTINS",350,1,"","","caixa_dinheiro","c","receita"],["r","2026-07",8,"Outras receitas (Não considerar DRE)","JOSÉ AUGUSTO VIEIRA DO LIVRAMENTO",100,1,"","","caixa_dinheiro","c","receita"],["r","2026-07",8,"Repasse de vendas","SHOPEE",5117.21,1,"","","01_sicredi","c","receita"],["r","2026-07",8,"Repasse de vendas","TIKTOK",2471.79,1,"","","01_sicredi","c","receita"],["r","2026-07",9,"Repasse de vendas","TIKTOK",3506.04,1,"","","01_sicredi","c","receita"],["r","2026-07",10,"Repasse de vendas","MERCADO LIVRE",10000,1,"","","01_sicredi","c","receita"],["r","2026-07",10,"Repasse de vendas","TIKTOK",1543.92,1,"","","01_sicredi","c","receita"],["r","2026-07",10,"Repasse de vendas","SHOPEE",9458.88,1,"","","01_sicredi","c","receita"],["r","2026-07",11,"Repasse de vendas","TIKTOK",6215.68,1,"","","01_sicredi","c","receita"],["r","2026-07",12,"Repasse de vendas","TIKTOK",3852,1,"","","01_sicredi","c","receita"],["r","2026-07",13,"Repasse de vendas","SHEIN",15.42,1,"","","01_sicredi","c","receita"],["r","2026-07",13,"Repasse de vendas","SHEIN",158.91,1,"","","01_sicredi","c","receita"],["r","2026-07",13,"Repasse de vendas","SHOPEE",6745.64,1,"","","01_sicredi","c","receita"],["r","2026-07",13,"Repasse de vendas","TIKTOK",4267.53,1,"","","01_sicredi","c","receita"],["r","2026-07",14,"Repasse de vendas","TIKTOK",5752.45,1,"","","01_sicredi","c","receita"],["r","2026-07",14,"Repasse de vendas","SHOPEE",16109.76,1,"","","01_sicredi","c","receita"],["r","2026-07",13,"Repasse de vendas","SHEIN",3371.22,1,"","","01_sicredi","c","receita"],["r","2026-07",14,"Repasse de vendas","SHEIN",3290.42,1,"","","01_sicredi","c","receita"],["r","2026-07",15,"Receita com vendas","VENDA FÍSICA",73,0,"","","","c","receita"],["r","2026-07",15,"Receita com vendas","VENDA FÍSICA",16,0,"","","","c","receita"],["r","2026-06",8,"Receita com vendas","VENDA FÍSICA",70,1,"","","01_sicredi","c","receita"],["r","2026-07",15,"Receita com vendas","VENDA FÍSICA",56,0,"","","","c","receita"],["r","2026-07",15,"Receita com vendas","ORNATA DOMUS COMPANY LTDA",1817.63,0,"","","","c","receita"],["r","2026-07",15,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-07",15,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-07",16,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-07",16,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-07",17,"Receita com vendas","VENDA FÍSICA",83.65,0,"","","","c","receita"],["r","2026-07",17,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-07",17,"Repasse de vendas","AMAZON",9500,0,"","","","c","receita"],["r","2026-07",17,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-07",17,"Repasse de vendas","MERCADO LIVRE",6000,0,"","","","c","receita"],["r","2026-07",18,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-07",18,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-07",19,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-07",19,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-07",20,"Repasse de vendas","SHEIN",8500,0,"","","","c","receita"],["r","2026-07",20,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-07",20,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-07",21,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-07",21,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-07",22,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-07",22,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-07",23,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-07",23,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-07",24,"Repasse de vendas","MERCADO LIVRE",6000,0,"","","","c","receita"],["r","2026-07",24,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-07",24,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-07",25,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-07",25,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-07",26,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-07",26,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-07",27,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-07",27,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-07",27,"Repasse de vendas","SHEIN",8500,0,"","","","c","receita"],["r","2026-07",28,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-07",28,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-07",29,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-07",29,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-07",30,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-07",30,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-07",31,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-07",31,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-07",31,"Repasse de vendas","MERCADO LIVRE",6000,0,"","","","c","receita"],["r","2026-07",31,"Repasse de vendas","AMAZON",9500,0,"","","","c","receita"],["r","2026-08",1,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-08",1,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-08",2,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-08",2,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-08",3,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-08",3,"Repasse de vendas","SHEIN",8500,0,"","","","c","receita"],["r","2026-08",3,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-08",4,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-08",4,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-08",5,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-08",5,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-08",6,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-08",6,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-08",7,"Repasse de vendas","MERCADO LIVRE",6000,0,"","","","c","receita"],["r","2026-08",7,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-08",7,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-08",8,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-08",8,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-08",9,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-08",9,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-08",10,"Repasse de vendas","SHEIN",8500,0,"","","","c","receita"],["r","2026-08",10,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-08",10,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-08",11,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-08",11,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-08",12,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-08",12,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-08",13,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-08",13,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-08",14,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-08",14,"Repasse de vendas","AMAZON",9500,0,"","","","c","receita"],["r","2026-08",14,"Repasse de vendas","MERCADO LIVRE",6000,0,"","","","c","receita"],["r","2026-08",14,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-08",15,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-08",15,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-08",16,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-08",16,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-08",17,"Repasse de vendas","SHEIN",8500,0,"","","","c","receita"],["r","2026-08",17,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-08",17,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-08",18,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-08",18,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-08",19,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-08",19,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-08",20,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-08",20,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-08",21,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-08",21,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-08",21,"Repasse de vendas","MERCADO LIVRE",6000,0,"","","","c","receita"],["r","2026-08",22,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-08",22,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-08",23,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-08",23,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-08",24,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-08",24,"Repasse de vendas","SHEIN",8500,0,"","","","c","receita"],["r","2026-08",24,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-08",25,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-08",25,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-08",26,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-08",26,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-08",27,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-08",27,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-08",28,"Repasse de vendas","AMAZON",9500,0,"","","","c","receita"],["r","2026-08",28,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-08",28,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-08",28,"Repasse de vendas","MERCADO LIVRE",6000,0,"","","","c","receita"],["r","2026-08",29,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-08",29,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-08",30,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-08",30,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-08",31,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-08",31,"Repasse de vendas","SHEIN",8500,0,"","","","c","receita"],["r","2026-08",31,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-09",1,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-09",1,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-09",2,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-09",2,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-09",3,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-09",3,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-09",4,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-09",4,"Repasse de vendas","MERCADO LIVRE",6000,0,"","","","c","receita"],["r","2026-09",4,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-09",5,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-09",5,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-09",6,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-09",6,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-09",7,"Repasse de vendas","SHEIN",8500,0,"","","","c","receita"],["r","2026-09",7,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-09",7,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-09",8,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-09",8,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-09",9,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-09",9,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-09",10,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-09",10,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-09",11,"Repasse de vendas","MERCADO LIVRE",6000,0,"","","","c","receita"],["r","2026-09",11,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-09",11,"Repasse de vendas","AMAZON",9500,0,"","","","c","receita"],["r","2026-09",11,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-09",12,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-09",12,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-09",13,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-09",13,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-09",14,"Repasse de vendas","SHEIN",8500,0,"","","","c","receita"],["r","2026-09",14,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-09",14,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-09",15,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-09",15,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-09",16,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-09",16,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-09",17,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-09",17,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-09",18,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-09",18,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-09",18,"Repasse de vendas","MERCADO LIVRE",6000,0,"","","","c","receita"],["r","2026-09",19,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-09",19,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-09",20,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-09",20,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-09",21,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-09",21,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-09",21,"Repasse de vendas","SHEIN",8500,0,"","","","c","receita"],["r","2026-09",22,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-09",22,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-09",23,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-09",23,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-09",24,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-09",24,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-09",25,"Repasse de vendas","MERCADO LIVRE",6000,0,"","","","c","receita"],["r","2026-09",25,"Repasse de vendas","AMAZON",9500,0,"","","","c","receita"],["r","2026-09",25,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-09",25,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-09",26,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-09",26,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-09",27,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-09",27,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-09",28,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-09",28,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-09",28,"Repasse de vendas","SHEIN",8500,0,"","","","c","receita"],["r","2026-09",29,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-09",29,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-09",30,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-09",30,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-10",1,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-10",1,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-10",2,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-10",2,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-10",2,"Repasse de vendas","MERCADO LIVRE",6000,0,"","","","c","receita"],["r","2026-10",3,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-10",3,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-10",4,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-10",4,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-10",5,"Repasse de vendas","SHEIN",8500,0,"","","","c","receita"],["r","2026-10",5,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-10",5,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-10",6,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-10",6,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-10",7,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-10",7,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-10",8,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-10",8,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-10",9,"Repasse de vendas","AMAZON",9500,0,"","","","c","receita"],["r","2026-10",9,"Repasse de vendas","MERCADO LIVRE",6000,0,"","","","c","receita"],["r","2026-10",9,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-10",9,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-10",10,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-10",10,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-10",11,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-10",11,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-10",12,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-10",12,"Repasse de vendas","SHEIN",8500,0,"","","","c","receita"],["r","2026-10",12,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-10",13,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["r","2026-10",13,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-10",14,"Repasse de vendas","SHOPEE",4200,0,"","","","c","receita"],["r","2026-10",14,"Repasse de vendas","TIKTOK",2000,0,"","","","c","receita"],["d","2025-01",3,"Salários e encargos","",1841.18,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","03_inter","c","despesa"],["d","2025-01",7,"Serviços de sistema de gestão","",100,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","03_inter","c","despesa"],["d","2025-01",7,"Compra de matéria-prima","",1740,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","03_inter","c","custo"],["d","2025-01",7,"Compra de matéria-prima","",1888,1,"ENNATERRA AROMATIZADORES LTDA","","03_inter","c","custo"],["d","2025-01",8,"Luz, água e outros","",412,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","Despesas operacionais","03_inter","c","despesa"],["d","2025-01",10,"Despesas com outros serviços contratados","",50,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","Despesas com serviços","03_inter","c","despesa"],["d","2025-01",10,"Compra de insumos para produção","",3224.99,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","03_inter","c","custo"],["d","2025-01",10,"Compra de insumos para produção","",903.96,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","03_inter","c","custo"],["d","2025-01",15,"Compra de matéria-prima","",4087.07,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","03_inter","c","custo"],["d","2025-01",14,"Despesas administrativas","",13.24,1,"MARIA LAURA DE MELLO LINO","Despesas administrativas","03_inter","c","despesa"],["d","2025-01",15,"Despesas com outros serviços contratados","",175.09,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","03_inter","c","despesa"],["d","2025-01",17,"Compra de mercadorias","",51,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","03_inter","c","custo"],["d","2025-01",17,"Despesas com ADS","",500,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-01",20,"Compra de matéria-prima","",4074.85,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","03_inter","c","custo"],["d","2025-01",20,"Impostos sobre receita","",113.24,1,"SIMPLES NACIONAL","","03_inter","c","custo"],["d","2025-01",23,"Despesas com materiais de consumo","",25,1,"MARIA LAURA DE MELLO LINO","Despesas administrativas","03_inter","c","despesa"],["d","2025-01",27,"Compra de matéria-prima","",4076.08,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","03_inter","c","custo"],["d","2025-01",28,"Compra de insumos para produção","",1264.13,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","03_inter","c","custo"],["d","2025-01",30,"Despesas com outros serviços contratados","",200,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","03_inter","c","despesa"],["d","2025-01",31,"Salários e encargos","",1842.77,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","03_inter","c","despesa"],["d","2025-02",7,"Custo com horas extras setor de produção","",16.38,1,"MARIA LAURA DE MELLO LINO","","03_inter","c","custo"],["d","2025-02",10,"Luz, água e outros","",330,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","Despesas operacionais","03_inter","c","despesa"],["d","2025-02",11,"Compra de mercadorias","",1411,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","03_inter","c","custo"],["d","2025-02",11,"Compra de insumos para produção","",1310,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","03_inter","c","custo"],["d","2025-02",7,"Serviços de sistema de gestão","",218,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","03_inter","c","despesa"],["d","2025-02",12,"Compra de matéria-prima","",950.73,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","03_inter","c","custo"],["d","2025-02",7,"Despesas com ADS","",340,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-02",7,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-02",13,"Despesas com outros serviços contratados","",100,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","Despesas com serviços","03_inter","c","despesa"],["d","2025-02",14,"Despesas com outros serviços contratados","",70,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","03_inter","c","despesa"],["d","2025-02",17,"Despesas com outros serviços contratados","",91.44,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","03_inter","c","despesa"],["d","2025-02",17,"Compra de insumos para expedição","",80,1,"JOAO EDUARDO GONCALVES NOGUEIRA","","03_inter","c","custo"],["d","2025-02",19,"Compra de matéria-prima","",69.95,1,"SMART PRODUTOS QUIMICOS LTDA","","03_inter","c","custo"],["d","2025-02",19,"Compra de matéria-prima","",1078.96,1,"SMART PRODUTOS QUIMICOS LTDA","","03_inter","c","custo"],["d","2025-02",19,"Compra de matéria-prima","",950.73,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","03_inter","c","custo"],["d","2025-02",20,"Impostos sobre receita","",319.6,1,"SIMPLES NACIONAL","","03_inter","c","custo"],["d","2025-02",20,"Salários e encargos","",157.23,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","03_inter","c","despesa"],["d","2025-02",20,"Salários e encargos","",160,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","03_inter","c","despesa"],["d","2025-02",25,"Compra de insumos para expedição","",96,1,"JOAO EDUARDO GONCALVES NOGUEIRA","","03_inter","c","custo"],["d","2025-02",26,"Compra de matéria-prima","",951.03,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","03_inter","c","custo"],["d","2025-02",26,"Compra de ativo imobilizado","",1710,1,"PAULO CESAR LOPES (ROPE)","","03_inter","c","investimento"],["d","2025-02",28,"Despesas com outros serviços contratados","",100.89,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","03_inter","c","despesa"],["d","2025-03",5,"Compra de matéria-prima","",1779,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","03_inter","c","custo"],["d","2025-03",5,"Salários e encargos","",1842.77,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","03_inter","c","despesa"],["d","2025-03",7,"Custo com horas extras setor de produção","",25,1,"MARIA LAURA DE MELLO LINO","","03_inter","c","custo"],["d","2025-03",10,"Compra de matéria-prima","",840,1,"SMART PRODUTOS QUIMICOS LTDA","","03_inter","c","custo"],["d","2025-03",10,"Luz, água e outros","",364.5,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","Despesas operacionais","03_inter","c","despesa"],["d","2025-03",10,"Materiais de consumo","",50.65,1,"ORNATA DOMUS COMPANY LTDA","","03_inter","c","despesa"],["d","2025-03",11,"Compra de matéria-prima","",1346.59,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","03_inter","c","custo"],["d","2025-03",11,"Despesas com outros serviços contratados","",308.7,1,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas com serviços","03_inter","c","despesa"],["d","2025-03",10,"Materiais de limpeza e higiêne","",42.85,1,"SUPERMERCADO SÃO LUIS","","03_inter","c","despesa"],["d","2025-02",7,"Serviços de sistema de gestão","",218,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","03_inter","c","despesa"],["d","2025-03",10,"Bens de consumo com publicidade","",131,1,"MERCADO LIVRE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-03",10,"Despesas com ADS","",350,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-03",10,"Despesas com ADS","",500,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-03",10,"Despesas com ADS","",300,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-03",10,"Despesas com ADS","",700,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-03",12,"Despesas com outros serviços contratados","",100,1,"CLAUDOMIRO GONÇALVES NOGUEIRA - PEDREIRO","Despesas com serviços","03_inter","c","despesa"],["d","2025-03",10,"Compra de insumos para produção","",395.2,1,"MERCADO LIVRE","","03_inter","c","custo"],["d","2025-03",12,"Compra de insumos para produção","",1790,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","03_inter","c","custo"],["d","2025-03",10,"Compra de insumos para produção","",259.06,1,"MERCADO LIVRE","","03_inter","c","custo"],["d","2025-03",10,"Compra de insumos para produção","",395.2,1,"MERCADO LIVRE","","03_inter","c","custo"],["d","2025-03",10,"Materiais de consumo","",98.97,1,"MERCADO LIVRE","","03_inter","c","despesa"],["d","2025-03",14,"Compra de ativo imobilizado","",1000,1,"EDERSON ROGERIO FERREIRA - DIVISÓRIAS","","03_inter","c","investimento"],["d","2025-03",17,"Serviços de contabilidade","",426,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","03_inter","c","despesa"],["d","2025-03",17,"Despesas com outros serviços contratados","",98.39,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","03_inter","c","despesa"],["d","2025-03",17,"Compra de insumos para expedição","",843.2,1,"AURIPELL EMBALAGENS LTDA","","03_inter","c","custo"],["d","2025-03",17,"Despesas com outros serviços contratados","",50,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","Despesas com serviços","03_inter","c","despesa"],["d","2025-03",18,"Materiais de limpeza e higiêne","",26.9,1,"LOPES SUPERMERCADOS LTDA - (PROENÇA)","","03_inter","c","despesa"],["d","2025-03",18,"Compra de matéria-prima","",1346.59,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","03_inter","c","custo"],["d","2025-03",18,"Despesas com outros serviços contratados","",113.86,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","Despesas com serviços","03_inter","c","despesa"],["d","2025-03",18,"Despesas com outros serviços contratados","",50,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","03_inter","c","despesa"],["d","2025-03",19,"Material de escritório","",28.94,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","03_inter","c","despesa"],["d","2025-03",19,"Compra de ativo imobilizado","",690,1,"JOAO EDUARDO GONCALVES NOGUEIRA","","03_inter","c","investimento"],["d","2025-03",19,"Compra de ativo imobilizado","",1000,1,"CARRAPICHO - SERRALHEIRO","","03_inter","c","investimento"],["d","2025-03",19,"Despesas com outros serviços contratados","",180,1,"EDSON MONTEIRO PLAZAS - FRETE","Despesas com serviços","03_inter","c","despesa"],["d","2025-03",19,"Compra de insumos para produção","",930.03,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","03_inter","c","custo"],["d","2025-03",19,"Compra de insumos para produção","",923.32,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","03_inter","c","custo"],["d","2025-03",19,"Compra de insumos para produção","",936.76,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","03_inter","c","custo"],["d","2025-03",20,"Despesas com materiais de consumo","",37.9,1,"ORNATA DOMUS COMPANY LTDA","Despesas administrativas","03_inter","c","despesa"],["d","2025-03",20,"Impostos sobre receita","",379.82,1,"SIMPLES NACIONAL","","03_inter","c","custo"],["d","2025-03",20,"Outros gastos com publicidade","",15,1,"A COSTUREIRA","Marketing e publicidade","03_inter","c","despesa"],["d","2025-03",20,"Salários e encargos","",160,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","03_inter","c","despesa"],["d","2025-03",20,"Salários e encargos","",157.23,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","03_inter","c","despesa"],["d","2025-03",21,"Compra de mercadorias","",1700,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","03_inter","c","custo"],["d","2025-03",21,"Custo com horas extras setor de produção","",300,1,"PEDRO HENRIQUE NOGUEIRA","","03_inter","c","custo"],["d","2025-03",21,"Despesas com outros serviços contratados","",400,1,"ADELMO ISAAC GALDINO - ENGENHEIRO","Despesas com serviços","03_inter","c","despesa"],["d","2025-03",24,"Compra de ativo imobilizado","",720,1,"LUIZ GUSTAVO DIAS MOREIRA - GUTO","","03_inter","c","investimento"],["d","2025-03",24,"Despesas com outros serviços contratados","",280,1,"LUIZ GUSTAVO DIAS MOREIRA - GUTO","Despesas com serviços","03_inter","c","despesa"],["d","2025-03",25,"Compra de matéria-prima","",1148.91,1,"SMART PRODUTOS QUIMICOS LTDA","","03_inter","c","custo"],["d","2025-03",25,"Compra de matéria-prima","",1346.99,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","03_inter","c","custo"],["d","2025-03",25,"Compra de matéria-prima","",2668.5,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","03_inter","c","custo"],["d","2025-03",28,"Despesas com materiais de consumo","",160,1,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas administrativas","03_inter","c","despesa"],["d","2025-03",28,"Despesas com outros serviços contratados","",150,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","03_inter","c","despesa"],["d","2025-03",28,"Despesas com outros serviços contratados","",150,1,"PLAY - SOLUÇÕES DIGITAIS - IGOR","Despesas com serviços","03_inter","c","despesa"],["d","2025-03",31,"Despesas com outros serviços contratados","",361.5,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","03_inter","c","despesa"],["d","2025-04",1,"Despesas com outros serviços contratados","",114.03,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","Despesas com serviços","03_inter","c","despesa"],["d","2025-04",1,"Outros gastos com publicidade","",25,1,"NASSAR FERREIRA - HOPÇÃO","Marketing e publicidade","03_inter","c","despesa"],["d","2025-04",1,"Outros gastos com publicidade","",72.38,1,"NASSAR FERREIRA - HOPÇÃO","Marketing e publicidade","03_inter","c","despesa"],["d","2025-04",1,"Outros gastos com publicidade","",14,1,"SHOPPING SAULIN","Marketing e publicidade","03_inter","c","despesa"],["d","2025-04",3,"Compra de ativo imobilizado","",1800,1,"JOSE LUIZ MARINO JUNIOR","","03_inter","c","investimento"],["d","2025-04",4,"Custo com horas extras setor de produção","",154.62,1,"MARIA LAURA DE MELLO LINO","","03_inter","c","custo"],["d","2025-04",4,"Salários e encargos","",548.69,1,"CLAUDETE GONÇALVES NOGUEIRA","Despesas com colaboradores","03_inter","c","despesa"],["d","2025-04",4,"Salários e encargos","",2006.57,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","03_inter","c","despesa"],["d","2025-04",7,"Compra de matéria-prima","",2047.5,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","03_inter","c","custo"],["d","2025-04",7,"Compra de insumos para produção","",2116.63,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","03_inter","c","custo"],["d","2025-04",7,"Outros gastos com publicidade","",4.16,1,"LOPES SUPERMERCADOS LTDA - (PROENÇA)","Marketing e publicidade","03_inter","c","despesa"],["d","2025-04",8,"Serviços de sistema de gestão","",218,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","03_inter","c","despesa"],["d","2025-04",9,"Materiais de limpeza e higiêne","",19.96,1,"LOPES SUPERMERCADOS LTDA - (PROENÇA)","","03_inter","c","despesa"],["d","2025-04",9,"Compra de matéria-prima","",2224.43,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","03_inter","c","custo"],["d","2025-04",10,"Despesas com aluguéis para uso","",54.01,1,"OUTSIDE THE BOX LTDA","Despesas com aluguéis","03_inter","c","despesa"],["d","2025-04",10,"Despesas com materiais de consumo","",1049.5,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","03_inter","c","despesa"],["d","2025-04",10,"Luz, água e outros","",69,1,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","03_inter","c","despesa"],["d","2025-04",11,"Despesas com outros serviços contratados","",150,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","03_inter","c","despesa"],["d","2025-04",10,"Serviços de sistema de gestão","",218,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","03_inter","c","despesa"],["d","2025-04",10,"Despesas com materiais de consumo","",47.65,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2025-04",10,"Despesas com materiais de consumo","",101.91,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2025-04",10,"Despesas com materiais de consumo","",40,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2025-04",10,"Despesas com materiais de consumo","",55.58,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2025-04",10,"Despesas com materiais de consumo","",121.91,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2025-04",10,"Compra de insumos para expedição","",175.6,1,"MERCADO LIVRE","","03_inter","c","custo"],["d","2025-04",10,"Despesas com ADS","",1000,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-04",10,"Despesas com ADS","",200,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-04",10,"Despesas com ADS","",350,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-04",10,"Compra de ativo intangível","",140.96,1,"HOSTGATOR BRASIL LTDA","","03_inter","c","investimento"],["d","2025-04",10,"Compra de ativo imobilizado","",169,1,"MERCADO LIVRE","","03_inter","c","investimento"],["d","2025-04",10,"Outros gastos com publicidade","",92.6,1,"A COSTUREIRA","Marketing e publicidade","03_inter","c","despesa"],["d","2025-04",14,"Salários e encargos","",651.31,1,"CLAUDETE GONÇALVES NOGUEIRA","Despesas com colaboradores","03_inter","c","despesa"],["d","2025-04",15,"Serviços de contabilidade","",426,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","03_inter","c","despesa"],["d","2025-04",16,"Serviços de contabilidade","",1000,1,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","03_inter","c","despesa"],["d","2025-04",15,"Custo com horas extras setor de produção","",39.38,1,"MARIA LAURA DE MELLO LINO","","03_inter","c","custo"],["d","2025-04",15,"Compra de ativo imobilizado","",700,1,"EDERSON ROGERIO FERREIRA - DIVISÓRIAS","","03_inter","c","investimento"],["d","2025-04",15,"Despesas com outros serviços contratados","",200,1,"JOSE LUIZ MARINO JUNIOR","Despesas com serviços","03_inter","c","despesa"],["d","2025-04",15,"Despesas com outros serviços contratados","",339.36,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","03_inter","c","despesa"],["d","2025-04",15,"Compra de insumos para produção","",18,1,"ALINE C. E. DE OLIVEIRA","","03_inter","c","custo"],["d","2025-04",15,"Outros gastos com publicidade","",40.08,1,"NASSAR FERREIRA - HOPÇÃO","Marketing e publicidade","03_inter","c","despesa"],["d","2025-04",16,"Compra de matéria-prima","",2224.43,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","03_inter","c","custo"],["d","2025-04",16,"Compra de insumos para produção","",839.68,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","03_inter","c","custo"],["d","2025-04",17,"Compra de insumos para expedição","",184.95,1,"VALDERI FERREIRA BARBOSA JUNIOR - IMPAKTO VISUAL","","03_inter","c","custo"],["d","2025-04",17,"Salários e encargos","",173.43,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","03_inter","c","despesa"],["d","2025-04",17,"Salários e encargos","",174.4,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","03_inter","c","despesa"],["d","2025-04",22,"Compra de ativo imobilizado","",460,1,"CARRAPICHO - SERRALHEIRO","","03_inter","c","investimento"],["d","2025-04",22,"Despesas com frete para devolução e reenvio","",17.38,1,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","03_inter","c","despesa"],["d","2025-04",22,"Despesas com materiais de consumo","",27.69,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","03_inter","c","despesa"],["d","2025-04",22,"Compra de matéria-prima","",1098.04,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","03_inter","c","custo"],["d","2025-04",22,"Impostos sobre receita","",275.08,1,"SIMPLES NACIONAL","","03_inter","c","custo"],["d","2025-04",23,"Compra de matéria-prima","",2225.11,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","03_inter","c","custo"],["d","2025-04",23,"Luz, água e outros","",134.04,1,"ELEKTRO REDES S.A.","Despesas operacionais","03_inter","c","despesa"],["d","2025-04",24,"Compra de matéria-prima","",1148.91,1,"SMART PRODUTOS QUIMICOS LTDA","","03_inter","c","custo"],["d","2025-04",24,"Compra de ativo intangível","",142,1,"INSTITUTO NACIONAL DA PROPRIEDADE INDUSTRIAL","","03_inter","c","investimento"],["d","2025-04",24,"Despesas com outros serviços contratados","",800,1,"EDERSON ROGERIO FERREIRA - DIVISÓRIAS","Despesas com serviços","03_inter","c","despesa"],["d","2025-04",28,"Compra de insumos para produção","",561.6,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","03_inter","c","custo"],["d","2025-04",28,"Luz, água e outros","",138.56,1,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","03_inter","c","despesa"],["d","2025-04",29,"Compra de matéria-prima","",1098.04,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","03_inter","c","custo"],["d","2025-04",29,"Outros gastos com publicidade","",130,1,"ROBERTO SORVETES CUSSY LTDA","Marketing e publicidade","03_inter","c","despesa"],["d","2025-04",29,"Outros gastos com publicidade","",279.73,1,"BOLA SETE RESTAURANTE ARACATUBA LTDA","Marketing e publicidade","03_inter","c","despesa"],["d","2025-04",30,"Despesas com materiais de consumo","",130,1,"VALNEI ALESSANDRO DE OLIVEIRA - ELETRICISTA","Despesas administrativas","03_inter","c","despesa"],["d","2025-04",24,"Compra de mercadorias","",187,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","03_inter","c","custo"],["d","2025-04",30,"Despesas com outros serviços contratados","",415.37,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","03_inter","c","despesa"],["d","2025-04",30,"Despesas com outros serviços contratados","",180,1,"VALNEI ALESSANDRO DE OLIVEIRA - ELETRICISTA","Despesas com serviços","03_inter","c","despesa"],["d","2025-04",24,"Despesas com outros serviços contratados","",1202.77,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","03_inter","c","despesa"],["d","2025-05",2,"Compra de insumos para expedição","",1696.7,1,"AURIPELL EMBALAGENS LTDA","","03_inter","c","custo"],["d","2025-05",5,"Materiais de limpeza e higiêne","",7.09,1,"LOPES SUPERMERCADOS LTDA - (PROENÇA)","","03_inter","c","despesa"],["d","2025-05",5,"Despesas com materiais de consumo","",20,1,"CLIMAK INDUSTRIA E COMERCIO DE MAQUINAS E EQUIPAMENTOS LTDA - EDERMAK","Despesas administrativas","03_inter","c","despesa"],["d","2025-05",5,"Despesas com outros serviços contratados","",70,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","03_inter","c","despesa"],["d","2025-05",6,"Compra de matéria-prima","",1747.9,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","03_inter","c","custo"],["d","2025-05",6,"Compra de matéria-prima","",1098.37,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","03_inter","c","custo"],["d","2025-05",6,"Despesas com outros serviços contratados","",114,1,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas com serviços","03_inter","c","despesa"],["d","2025-05",7,"Compra de matéria-prima","",2091,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","03_inter","c","custo"],["d","2025-05",7,"Custo com horas extras setor de produção","",81.81,1,"LUIZ ANTONIO RONDINI VIEIRA","","03_inter","c","custo"],["d","2025-05",7,"Custo com horas extras setor de produção","",70.29,1,"MARIA LAURA DE MELLO LINO","","03_inter","c","custo"],["d","2025-05",7,"Outros gastos com publicidade","",40,1,"LOJA KARIBU","Marketing e publicidade","03_inter","c","despesa"],["d","2025-05",7,"Salários e encargos","",2006.57,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","03_inter","c","despesa"],["d","2025-05",7,"Salários e encargos","",1600,1,"LUIZ ANTONIO RONDINI VIEIRA","Despesas com colaboradores","03_inter","c","despesa"],["d","2025-05",8,"Serviços de sistema de gestão","",218,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","03_inter","c","despesa"],["d","2025-05",8,"Reembolsos por fora de marketplaces","",13.19,1,"REEMBOLSOS","Despesas operacionais","03_inter","c","despesa"],["d","2025-05",8,"Compra de insumos para produção","",850,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","03_inter","c","custo"],["d","2025-05",12,"Despesas com aluguéis para uso","",54.01,1,"PREFEITURA MUNICIPAL DE AURIFLAMA","Despesas com aluguéis","03_inter","c","despesa"],["d","2025-05",10,"Despesas com aluguéis para uso","",2500,1,"CONDE INTERMEDIACAO DE NEGOCIOS LTDA","Despesas com aluguéis","03_inter","c","despesa"],["d","2025-05",12,"Despesas com materiais de consumo","",202.45,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","03_inter","c","despesa"],["d","2025-05",12,"Luz, água e outros","",69,1,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","03_inter","c","despesa"],["d","2025-05",12,"Serviços de sistema de gestão","",24.99,1,"SERASA S.A.","Despesas com serviços","03_inter","c","despesa"],["d","2025-05",12,"Reembolsos por fora de marketplaces","",13.19,1,"REEMBOLSOS","Despesas operacionais","03_inter","c","despesa"],["d","2025-05",12,"Reembolsos por fora de marketplaces","",12.95,1,"REEMBOLSOS","Despesas operacionais","03_inter","c","despesa"],["d","2025-05",12,"Despesas com materiais de consumo","",55.57,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2025-05",12,"Despesas com materiais de consumo","",40,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2025-05",12,"Despesas com materiais de consumo","",33.2,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2025-05",12,"Despesas com materiais de consumo","",47.64,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2025-05",12,"Despesas com materiais de consumo","",19.88,1,"LOPES SUPERMERCADOS LTDA - (PROENÇA)","Despesas administrativas","03_inter","c","despesa"],["d","2025-05",12,"Despesas com materiais de consumo","",270.76,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2025-05",12,"Despesas com materiais de consumo","",35.88,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2025-05",12,"Compra de insumos para expedição","",230,1,"MERCADO LIVRE","","03_inter","c","custo"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-05",12,"Despesas com ADS","",200,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-05",12,"Despesas com ADS","",150,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-05",12,"Compra de ativo imobilizado","",150.91,1,"MERCADO LIVRE","","03_inter","c","investimento"],["d","2025-05",12,"Compra de ativo imobilizado","",169,1,"MERCADO LIVRE","","03_inter","c","investimento"],["d","2025-05",12,"Compra de ativo imobilizado","",434.9,1,"LEROY MERLIN COMPANHIA BRASILEIRA DE BRICOLAGEM","","03_inter","c","investimento"],["d","2025-05",12,"Compra de insumos para produção","",149.9,1,"MERCADO LIVRE","","03_inter","c","custo"],["d","2025-05",12,"Compra de insumos para produção","",119.37,1,"MERCADO LIVRE","","03_inter","c","custo"],["d","2025-05",12,"Compra de insumos para produção","",148.62,1,"MERCADO LIVRE","","03_inter","c","custo"],["d","2025-05",12,"Outros gastos com publicidade","",15.75,1,"A COSTUREIRA","Marketing e publicidade","03_inter","c","despesa"],["d","2025-05",12,"Outros gastos com publicidade","",5.99,1,"SHOPPING SAULIN","Marketing e publicidade","03_inter","c","despesa"],["d","2025-05",13,"Compra de matéria-prima","",1747.9,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","03_inter","c","custo"],["d","2025-05",14,"Compra de insumos para expedição","",416.4,1,"AURIPELL EMBALAGENS LTDA","","03_inter","c","custo"],["d","2025-05",14,"Compra de insumos para expedição","",1372.95,1,"AURIPELL EMBALAGENS LTDA","","03_inter","c","custo"],["d","2025-05",14,"Compra de insumos para produção","",2378.8,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","03_inter","c","custo"],["d","2025-05",15,"Serviços de contabilidade","",1000,1,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","03_inter","c","despesa"],["d","2025-05",15,"Serviços de contabilidade","",426,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","03_inter","c","despesa"],["d","2025-05",15,"Despesas com outros serviços contratados","",160.33,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","03_inter","c","despesa"],["d","2025-05",19,"Materiais de limpeza e higiêne","",24.18,1,"LOPES SUPERMERCADOS LTDA - (PROENÇA)","","03_inter","c","despesa"],["d","2025-05",19,"Despesas com materiais de consumo","",4,1,"ANGELICA PRESENTES","Despesas administrativas","03_inter","c","despesa"],["d","2025-05",19,"Compra de ativo imobilizado","",460,1,"CARRAPICHO - SERRALHEIRO","","03_inter","c","investimento"],["d","2025-05",20,"Reembolsos por fora de marketplaces","",32.99,1,"REEMBOLSOS","Despesas operacionais","03_inter","c","despesa"],["d","2025-05",19,"Despesas com frete para devolução e reenvio","",142.2,1,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas com serviços","03_inter","c","despesa"],["d","2025-05",19,"Despesas com frete para devolução e reenvio","",874.65,1,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas com serviços","03_inter","c","despesa"],["d","2025-05",20,"Compra de matéria-prima","",1748.43,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","03_inter","c","custo"],["d","2025-05",19,"Compra de mercadorias","",580.05,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","03_inter","c","custo"],["d","2025-05",20,"Impostos sobre receita","",178.33,1,"SIMPLES NACIONAL","","03_inter","c","custo"],["d","2025-05",19,"Outros gastos com publicidade","",130,1,"JONATHAN ROQUE DE SOUZA","Marketing e publicidade","03_inter","c","despesa"],["d","2025-05",20,"Salários e encargos","",174.4,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","03_inter","c","despesa"],["d","2025-05",20,"Salários e encargos","",173.43,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","03_inter","c","despesa"],["d","2025-05",21,"Despesas com frete para devolução e reenvio","",453.54,1,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","03_inter","c","despesa"],["d","2025-05",21,"Despesas com outros serviços contratados","",50,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","Despesas com serviços","03_inter","c","despesa"],["d","2025-05",22,"Luz, água e outros","",127.83,1,"ELEKTRO REDES S.A.","Despesas operacionais","03_inter","c","despesa"],["d","2025-05",26,"Reembolsos por fora de marketplaces","",23.92,1,"REEMBOLSOS","Despesas operacionais","03_inter","c","despesa"],["d","2025-05",26,"Luz, água e outros","",138.56,1,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","03_inter","c","despesa"],["d","2025-05",27,"Compra de matéria-prima","",1623.07,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","03_inter","c","custo"],["d","2025-05",30,"Despesas com outros serviços contratados","",430.61,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","03_inter","c","despesa"],["d","2025-05",30,"Despesas com alimentação","",84,1,"ORNATA DOMUS COMPANY LTDA","Despesas administrativas","03_inter","c","despesa"],["d","2025-06",2,"Despesas com outros serviços contratados","",1284.05,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","03_inter","c","despesa"],["d","2025-06",3,"Materiais de limpeza e higiêne","",11.99,1,"LOPES SUPERMERCADOS LTDA - (PROENÇA)","","03_inter","c","despesa"],["d","2025-06",3,"Compra de matéria-prima","",1364,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","03_inter","c","custo"],["d","2025-06",3,"Compra de matéria-prima","",1623.07,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","03_inter","c","custo"],["d","2025-06",5,"Compra de matéria-prima","",1692.15,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","03_inter","c","custo"],["d","2025-06",6,"Despesas com outros serviços contratados","",120,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","03_inter","c","despesa"],["d","2025-06",6,"Salários e encargos","",2000,1,"LUIZ ANTONIO RONDINI VIEIRA","Despesas com colaboradores","03_inter","c","despesa"],["d","2025-06",6,"Salários e encargos","",2006.57,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","03_inter","c","despesa"],["d","2025-06",9,"Despesas com outros serviços contratados","",50,1,"FELIPE PEREIRA RUIZ CAVALCANTE - FRETE","Despesas com serviços","03_inter","c","despesa"],["d","2025-06",9,"Compra de insumos para produção","",320,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","03_inter","c","custo"],["d","2025-06",10,"Despesas com aluguéis para uso","",2500,1,"CONDE INTERMEDIACAO DE NEGOCIOS LTDA","Despesas com aluguéis","03_inter","c","despesa"],["d","2025-06",10,"Despesas com aluguéis para uso","",54.01,1,"PREFEITURA MUNICIPAL DE AURIFLAMA","Despesas com aluguéis","03_inter","c","despesa"],["d","2025-06",11,"Despesas com materiais de consumo","",45.76,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","03_inter","c","despesa"],["d","2025-06",10,"Compra de matéria-prima","",1623.55,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","03_inter","c","custo"],["d","2025-06",10,"Luz, água e outros","",69,1,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","03_inter","c","despesa"],["d","2025-06",10,"Serviços de sistema de gestão","",24.91,1,"SERASA S.A.","Despesas com serviços","03_inter","c","despesa"],["d","2025-06",10,"Serviços de sistema de gestão","",91.57,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","03_inter","c","despesa"],["d","2025-06",10,"Despesas com materiais de consumo","",33.2,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2025-06",10,"Despesas com materiais de consumo","",35.88,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2025-06",10,"Despesas com materiais de consumo","",55.57,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2025-06",10,"Despesas com materiais de consumo","",156.34,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2025-06",10,"Despesas com materiais de consumo","",40,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2025-06",12,"Compra de matéria-prima","",1692.15,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","03_inter","c","custo"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-06",10,"Despesas com ADS","",200,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-06",10,"Despesas com ADS","",200,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-06",10,"Despesas com ADS","",200,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-06",10,"Despesas com ADS","",50,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-06",10,"Despesas com ADS","",95,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-06",10,"Compra de ativo imobilizado","",169,1,"MERCADO LIVRE","","03_inter","c","investimento"],["d","2025-06",10,"Impostos e Taxas","",3.1,1,"UPSELLER TECHNOLOGY LTDA","Despesas Financeiras","03_inter","c","despesa"],["d","2025-06",10,"Outros gastos com publicidade","",74.8,1,"A COSTUREIRA","Marketing e publicidade","03_inter","c","despesa"],["d","2025-06",10,"Outros gastos com publicidade","",10,1,"LOJA KARIBU","Marketing e publicidade","03_inter","c","despesa"],["d","2025-06",16,"Serviços de contabilidade","",426,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","03_inter","c","despesa"],["d","2025-06",16,"Compra de insumos para expedição","",3626.2,1,"AURIPELL EMBALAGENS LTDA","","03_inter","c","custo"],["d","2025-06",16,"Despesas com alimentação","",28,1,"ORNATA DOMUS COMPANY LTDA","Despesas administrativas","03_inter","c","despesa"],["d","2025-06",17,"Materiais de limpeza e higiêne","",22.99,1,"ORNATA DOMUS COMPANY LTDA","","03_inter","c","despesa"],["d","2025-06",17,"Despesas com materiais de consumo","",10.37,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","03_inter","c","despesa"],["d","2025-06",17,"Despesas com materiais de consumo","",47.52,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","03_inter","c","despesa"],["d","2025-06",17,"Bens de consumo com publicidade","",14,1,"ALINE C. E. DE OLIVEIRA","Marketing e publicidade","03_inter","c","despesa"],["d","2025-06",18,"Despesas com materiais de consumo","",54,1,"ORNATA DOMUS COMPANY LTDA","Despesas administrativas","03_inter","c","despesa"],["d","2025-06",18,"Outras despesas","",10,1,"MARIA LAURA DE MELLO LINO","Despesas não operacionais","03_inter","c","despesa"],["d","2025-06",20,"Compra de matéria-prima","",1692.66,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","03_inter","c","custo"],["d","2025-06",20,"Serviços contratados para marketing","",700,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Marketing e publicidade","03_inter","c","despesa"],["d","2025-06",20,"Despesas com materiais de consumo","",6.99,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","03_inter","c","despesa"],["d","2025-06",18,"Serviços de contabilidade","",1000,1,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","03_inter","c","despesa"],["d","2025-06",20,"Impostos sobre receita","",162.51,1,"SIMPLES NACIONAL","","03_inter","c","custo"],["d","2025-06",23,"Despesas com outros serviços contratados","",1682.17,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","03_inter","c","despesa"],["d","2025-06",20,"Salários e encargos","",173.43,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","03_inter","c","despesa"],["d","2025-06",20,"Salários e encargos","",174.4,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","03_inter","c","despesa"],["d","2025-06",23,"Despesas com frete para devolução e reenvio","",182.26,1,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","03_inter","c","despesa"],["d","2025-06",23,"Despesas com materiais de consumo","",29.97,1,"ORNATA DOMUS COMPANY LTDA","Despesas administrativas","03_inter","c","despesa"],["d","2025-06",24,"Luz, água e outros","",118.19,1,"ELEKTRO REDES S.A.","Despesas operacionais","03_inter","c","despesa"],["d","2025-06",26,"Vestuário de trabalho","",611.25,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Despesas com colaboradores","03_inter","c","despesa"],["d","2025-06",27,"Compra de insumos para produção","",1700,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","03_inter","c","custo"],["d","2025-06",30,"Despesas com aluguéis para uso","",1850,1,"ORNATA DOMUS COMPANY LTDA","Despesas com aluguéis","03_inter","c","despesa"],["d","2025-06",30,"Impostos e Taxas","",133.46,1,"SECRETARIA DA FAZENDA E PLANEJAMENTO","Despesas Financeiras","03_inter","c","despesa"],["d","2025-06",30,"Despesas com outros serviços contratados","",326.08,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","03_inter","c","despesa"],["d","2025-07",1,"Compra de matéria-prima","",1033.47,1,"SMART PRODUTOS QUIMICOS LTDA","","03_inter","c","custo"],["d","2025-07",1,"Compra de matéria-prima","",1280,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","03_inter","c","custo"],["d","2025-07",2,"Despesas com outros serviços contratados","",300,1,"RODRIGO NOGUEIRA PORTO","Despesas com serviços","03_inter","c","despesa"],["d","2025-07",3,"Compra de matéria-prima","",519.19,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","03_inter","c","custo"],["d","2025-07",16,"Luz, água e outros","",148.8,1,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","03_inter","c","despesa"],["d","2025-07",4,"Salários e encargos","",2006.57,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","03_inter","c","despesa"],["d","2025-07",4,"Salários e encargos","",2000,1,"LUIZ ANTONIO RONDINI VIEIRA","Despesas com colaboradores","03_inter","c","despesa"],["d","2025-07",7,"Frete para compra de material","",113.15,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","03_inter","c","despesa"],["d","2025-07",7,"Frete para compra de material","",100,1,"DARBI RINTON ALVES DO NASCIMENTO","","03_inter","c","despesa"],["d","2025-07",10,"Despesas com aluguéis para uso","",2500,1,"CONDE INTERMEDIACAO DE NEGOCIOS LTDA","Despesas com aluguéis","03_inter","c","despesa"],["d","2025-07",10,"Despesas com aluguéis para uso","",54.01,1,"PREFEITURA MUNICIPAL DE AURIFLAMA","Despesas com aluguéis","03_inter","c","despesa"],["d","2025-07",10,"Despesas com materiais de consumo","",12,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","03_inter","c","despesa"],["d","2025-07",10,"Despesas com materiais de consumo","",10,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","03_inter","c","despesa"],["d","2025-07",10,"Compra de matéria-prima","",519.19,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","03_inter","c","custo"],["d","2025-07",10,"Luz, água e outros","",69,1,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","03_inter","c","despesa"],["d","2025-07",10,"Despesas com alimentação","",56,1,"ORNATA DOMUS COMPANY LTDA","Despesas administrativas","03_inter","c","despesa"],["d","2025-07",14,"Serviços de sistema de gestão","",24.91,1,"SERASA S.A.","Despesas com serviços","03_inter","c","despesa"],["d","2025-07",14,"Serviços de sistema de gestão","",218,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","03_inter","c","despesa"],["d","2025-07",14,"Serviços de sistema de gestão","",40.94,1,"TINY ERP","Despesas com serviços","03_inter","c","despesa"],["d","2025-07",14,"Serviços de sistema de gestão","",149,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","03_inter","c","despesa"],["d","2025-07",14,"Despesas com materiais de consumo","",35.88,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2025-07",14,"Despesas com materiais de consumo","",33.2,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2025-07",14,"Despesas com materiais de consumo","",55.57,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2025-07",14,"Despesas com materiais de consumo","",40,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2025-07",14,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-07",14,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-07",14,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-07",14,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-07",14,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-07",14,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-07",14,"Compra de ativo imobilizado","",169,1,"MERCADO LIVRE","","03_inter","c","investimento"],["d","2025-07",14,"Compra de insumos para produção","",103,1,"DECOR COMERCIO DE ETIQUETAS E ADESIVOS LTDA","","03_inter","c","custo"],["d","2025-07",14,"Compra de matéria-prima","",2332,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","03_inter","c","custo"],["d","2025-07",14,"Compra de insumos para expedição","",550,1,"BINHO - TOTAL CARTUCHO","","03_inter","c","custo"],["d","2025-07",15,"Compra de matéria-prima","",250.56,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","03_inter","c","custo"],["d","2025-07",15,"Serviços de contabilidade","",426,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","03_inter","c","despesa"],["d","2025-07",15,"Compra de mercadorias","",935,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","03_inter","c","custo"],["d","2025-07",15,"Compra de mercadorias","",833,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","03_inter","c","custo"],["d","2025-07",15,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-07",15,"Despesas com alimentação","",28,1,"ORNATA DOMUS COMPANY LTDA","Despesas administrativas","03_inter","c","despesa"],["d","2025-07",17,"Despesas com materiais de consumo","",20,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","03_inter","c","despesa"],["d","2025-07",17,"Compra de matéria-prima","",519.35,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","03_inter","c","custo"],["d","2025-07",17,"Compra de insumos para expedição","",743.6,1,"AURIPELL EMBALAGENS LTDA","","03_inter","c","custo"],["d","2025-07",17,"Outras despesas","",8,1,"NASSAR FERREIRA - HOPÇÃO","Despesas não operacionais","03_inter","c","despesa"],["d","2025-07",18,"Frete para compra de material","",100,1,"DARBI RINTON ALVES DO NASCIMENTO","","03_inter","c","despesa"],["d","2025-07",18,"Serviços de contabilidade","",1000,1,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","03_inter","c","despesa"],["d","2025-07",18,"Outras despesas","",10,1,"JONATHAN ROQUE DE SOUZA","Despesas não operacionais","03_inter","c","despesa"],["d","2025-07",18,"Salários e encargos","",173.43,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","03_inter","c","despesa"],["d","2025-07",18,"Salários e encargos","",174.4,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","03_inter","c","despesa"],["d","2025-07",21,"Serviços contratados para marketing","",700,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Marketing e publicidade","03_inter","c","despesa"],["d","2025-07",21,"Despesas com frete para devolução e reenvio","",134.14,1,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","03_inter","c","despesa"],["d","2025-07",21,"Impostos sobre receita","",174.26,1,"SIMPLES NACIONAL","","03_inter","c","custo"],["d","2025-07",21,"Despesas com outros serviços contratados","",1682.17,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","03_inter","c","despesa"],["d","2025-07",23,"Frete para compra de material","",50,1,"DARBI RINTON ALVES DO NASCIMENTO","","03_inter","c","despesa"],["d","2025-07",23,"Compra de insumos para expedição","",270,1,"ORNATA DOMUS COMPANY LTDA","","03_inter","c","custo"],["d","2025-07",23,"Luz, água e outros","",116.26,1,"ELEKTRO REDES S.A.","Despesas operacionais","03_inter","c","despesa"],["d","2025-07",24,"Luz, água e outros","",138.56,1,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","03_inter","c","despesa"],["d","2025-07",25,"Frete para compra de material","",50,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","","03_inter","c","despesa"],["d","2025-07",30,"Frete para compra de material","",191.43,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","","03_inter","c","despesa"],["d","2025-08",5,"Vestuário de trabalho","",611.25,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Despesas com colaboradores","03_inter","c","despesa"],["d","2025-08",5,"Custo com horas extras setor de produção","",32.13,1,"LUIZ ANTONIO RONDINI VIEIRA","","03_inter","c","custo"],["d","2025-08",6,"Despesas com materiais de consumo","",62,1,"SHOPPING SAULIN","Despesas administrativas","03_inter","c","despesa"],["d","2025-08",5,"Salários e encargos","",1612.75,1,"LUIZ ANTONIO RONDINI VIEIRA","Despesas com colaboradores","03_inter","c","despesa"],["d","2025-08",5,"Salários e encargos","",2006.57,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","03_inter","c","despesa"],["d","2025-08",8,"Frete para compra de material","",70,1,"DARBI RINTON ALVES DO NASCIMENTO","","03_inter","c","despesa"],["d","2025-08",10,"Despesas com aluguéis para uso","",2500,1,"CONDE INTERMEDIACAO DE NEGOCIOS LTDA","Despesas com aluguéis","03_inter","c","despesa"],["d","2025-08",11,"Despesas com aluguéis para uso","",54.01,1,"PREFEITURA MUNICIPAL DE AURIFLAMA","Despesas com aluguéis","03_inter","c","despesa"],["d","2025-08",10,"Despesas com materiais de consumo","",50,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","03_inter","c","despesa"],["d","2025-08",11,"Luz, água e outros","",69,1,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","03_inter","c","despesa"],["d","2025-08",11,"Despesas com alimentação","",28,1,"ORNATA DOMUS COMPANY LTDA","Despesas administrativas","03_inter","c","despesa"],["d","2025-08",11,"Serviços de sistema de gestão","",149,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","03_inter","c","despesa"],["d","2025-08",11,"Serviços de sistema de gestão","",40.9,1,"TINY ERP","Despesas com serviços","03_inter","c","despesa"],["d","2025-08",11,"Serviços de sistema de gestão","",218,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","03_inter","c","despesa"],["d","2025-08",11,"Serviços de sistema de gestão","",24.91,1,"SERASA S.A.","Despesas com serviços","03_inter","c","despesa"],["d","2025-08",11,"Despesas com materiais de consumo","",55.57,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2025-08",11,"Despesas com materiais de consumo","",49.02,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2025-08",11,"Despesas com materiais de consumo","",34.14,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2025-08",11,"Despesas com materiais de consumo","",40,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2025-08",11,"Despesas com materiais de consumo","",19,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2025-08",11,"Despesas administrativas","",30,1,"CLARO S.A.","Despesas administrativas","03_inter","c","despesa"],["d","2025-08",11,"Compra de mercadorias","",213.81,1,"PRINTI - FM IMPRESSOS PERSONALIZADOS LTDA.","","03_inter","c","custo"],["d","2025-08",12,"Compra de mercadorias","",272,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","03_inter","c","custo"],["d","2025-08",11,"Despesas com ADS","",590,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-08",11,"Despesas com ADS","",223,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-08",11,"Despesas com ADS","",500,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-08",11,"Outras despesas","",2,1,"AGROBOI","Despesas não operacionais","03_inter","c","despesa"],["d","2025-08",11,"Compra de ativo imobilizado","",169,1,"MERCADO LIVRE","","03_inter","c","investimento"],["d","2025-08",11,"Compra de insumos para produção","",103,1,"DECOR COMERCIO DE ETIQUETAS E ADESIVOS LTDA","","03_inter","c","custo"],["d","2025-08",11,"Outros gastos com publicidade","",20,1,"A COSTUREIRA","Marketing e publicidade","03_inter","c","despesa"],["d","2025-08",11,"Outros gastos com publicidade","",31.14,1,"MERCADO LIVRE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-08",11,"Outros gastos com publicidade","",36,1,"SHOPPING SAULIN","Marketing e publicidade","03_inter","c","despesa"],["d","2025-08",13,"Compra de matéria-prima","",1700,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","03_inter","c","custo"],["d","2025-08",14,"Compra de matéria-prima","",1152.36,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","03_inter","c","custo"],["d","2025-08",15,"Despesas administrativas","",10.69,1,"LOPES SUPERMERCADOS LTDA - (PROENÇA)","Despesas administrativas","03_inter","c","despesa"],["d","2025-08",15,"Compra de matéria-prima","",250.56,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","03_inter","c","custo"],["d","2025-08",15,"Serviços de contabilidade","",426,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","03_inter","c","despesa"],["d","2025-08",15,"Serviços de contabilidade","",1000,1,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","03_inter","c","despesa"],["d","2025-08",15,"Despesas com rescisões trabalhistas","",688.98,1,"LUIZ ANTONIO RONDINI VIEIRA","Despesas com colaboradores","03_inter","c","despesa"],["d","2025-08",18,"Frete para compra de material","",504.99,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","","03_inter","c","despesa"],["d","2025-08",18,"Compra de insumos para expedição","",626.6,1,"AURIPELL EMBALAGENS LTDA","","03_inter","c","custo"],["d","2025-08",18,"Despesas com outros serviços contratados","",1132.7,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","03_inter","c","despesa"],["d","2025-08",20,"Serviços contratados para marketing","",700,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Marketing e publicidade","03_inter","c","despesa"],["d","2025-08",20,"Bens de consumo com publicidade","",20,1,"ALINE C. E. DE OLIVEIRA","Marketing e publicidade","03_inter","c","despesa"],["d","2025-08",21,"Compra de matéria-prima","",310,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","03_inter","c","custo"],["d","2025-08",20,"Impostos sobre receita","",250.75,1,"SIMPLES NACIONAL","","03_inter","c","custo"],["d","2025-08",20,"Direitos a receber","",50,1,"SICREDI","","01_sicredi","c","investimento"],["d","2025-08",20,"Despesas com alimentação","",31.99,1,"LOPES SUPERMERCADOS LTDA - (PROENÇA)","Despesas administrativas","03_inter","c","despesa"],["d","2025-08",20,"Salários e encargos","",174.4,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","03_inter","c","despesa"],["d","2025-08",20,"Salários e encargos","",173.43,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","03_inter","c","despesa"],["d","2025-08",21,"Despesas com frete para devolução e reenvio","",266.6,1,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","03_inter","c","despesa"],["d","2025-08",21,"Compra de matéria-prima","",1152.36,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","03_inter","c","custo"],["d","2025-08",21,"Compra de insumos para expedição","",158,1,"VALDERI FERREIRA BARBOSA JUNIOR - IMPAKTO VISUAL","","03_inter","c","custo"],["d","2025-08",21,"Luz, água e outros","",108.28,1,"ELEKTRO REDES S.A.","Despesas operacionais","03_inter","c","despesa"],["d","2025-08",22,"Frete para compra de material","",40,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2025-08",25,"Serviços de sistema de gestão","",149,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2025-08",26,"Compra de matéria-prima","",2047.5,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2025-08",26,"Luz, água e outros","",142.75,1,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","01_sicredi","c","despesa"],["d","2025-08",27,"Bonificações, Brindes e Festividades","",220,1,"ARSENAL MODA PARA HOMENS","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-08",28,"Compra de matéria-prima","",1152.71,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2025-08",28,"Compra de mercadorias","",2010,1,"ENNATERRA AROMATIZADORES LTDA","","01_sicredi","c","custo"],["d","2025-08",31,"Frete para compra de material","",145.69,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","","01_sicredi","c","despesa"],["d","2025-09",2,"Frete para compra de material","",140,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2025-09",2,"Compra de matéria-prima","",1010.1,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2025-09",3,"Frete para compra de material","",60,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2025-09",3,"Compra de matéria-prima","",202.48,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2025-09",3,"Outras despesas","",17.84,1,"MERCADO LIVRE","Despesas não operacionais","01_sicredi","c","despesa"],["d","2025-09",4,"Despesas administrativas","",27.69,1,"LOPES SUPERMERCADOS LTDA - (PROENÇA)","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-09",4,"Custo com horas extras setor de produção","",160,1,"PEDRO HENRIQUE NOGUEIRA","","01_sicredi","c","custo"],["d","2025-09",4,"Custo com horas extras setor de produção","",80,1,"GRAZIELA DE FATIMA AUGUSTO LINO","","01_sicredi","c","custo"],["d","2025-09",4,"Outras despesas","",28.85,1,"MERCADO LIVRE","Despesas não operacionais","01_sicredi","c","despesa"],["d","2025-09",5,"Compra de matéria-prima","",1389.6,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2025-09",5,"Salários e encargos","",2006.57,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-09",9,"Compra de matéria-prima","",1010.1,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2025-09",10,"Frete para compra de material","",50,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2025-09",10,"Despesas com aluguéis para uso","",2500,1,"CONDE INTERMEDIACAO DE NEGOCIOS LTDA","Despesas com aluguéis","01_sicredi","c","despesa"],["d","2025-09",10,"Despesas com aluguéis para uso","",54.01,1,"PREFEITURA MUNICIPAL DE AURIFLAMA","Despesas com aluguéis","01_sicredi","c","despesa"],["d","2025-09",10,"Despesas com materiais de consumo","",151,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-09",10,"Compra de matéria-prima","",1033.47,1,"SMART PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2025-09",10,"Compra de matéria-prima","",330.4,1,"MUNDIAL QUIMICA DO BRASIL LTDA","","01_sicredi","c","custo"],["d","2025-09",10,"Compra de matéria-prima","",320,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2025-09",10,"Compra de matéria-prima","",2240,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2025-09",10,"Compra de matéria-prima","",100,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2025-09",10,"Compra de insumos para expedição","",239.8,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2025-09",10,"Compra de insumos para expedição","",152.7,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2025-09",10,"Despesas com outros serviços contratados","",500,1,"JAIR MACIEL DE OLIVEIRA - PINTOR","Despesas com serviços","01_sicredi","c","despesa"],["d","2025-09",10,"Luz, água e outros","",69,1,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","01_sicredi","c","despesa"],["d","2025-09",10,"Despesas com alimentação","",28,1,"ORNATA DOMUS COMPANY LTDA","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-09",10,"Despesas com alimentação","",73.5,1,"ORNATA DOMUS COMPANY LTDA","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-09",11,"Compra de insumos para expedição","",166,1,"VALDERI FERREIRA BARBOSA JUNIOR - IMPAKTO VISUAL","","01_sicredi","c","custo"],["d","2025-09",11,"Compra de ativo imobilizado","",977.8,1,"BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR","","01_sicredi","c","investimento"],["d","2025-09",8,"Serviços de sistema de gestão","",24.91,1,"SERASA S.A.","Despesas com serviços","03_inter","c","despesa"],["d","2025-09",8,"Serviços de sistema de gestão","",40.9,1,"TINY ERP","Despesas com serviços","03_inter","c","despesa"],["d","2025-09",8,"Serviços de sistema de gestão","",218,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","03_inter","c","despesa"],["d","2025-09",8,"Despesas com materiais de consumo","",40,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2025-09",8,"Despesas com materiais de consumo","",34.14,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2025-09",8,"Despesas com materiais de consumo","",55.57,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2025-09",8,"Despesas administrativas","",30,1,"CLARO S.A.","Despesas administrativas","03_inter","c","despesa"],["d","2025-09",8,"Compra de matéria-prima","",376.79,1,"TILIFORM INDUSTRIA GRAFICA - EM RECUPERACAO JUDICIAL","","03_inter","c","custo"],["d","2025-09",8,"Compra de mercadorias","",213.8,1,"PRINTI - FM IMPRESSOS PERSONALIZADOS LTDA.","","03_inter","c","custo"],["d","2025-09",12,"Compra de insumos para expedição","",1349.4,1,"AURIPELL EMBALAGENS LTDA","","01_sicredi","c","custo"],["d","2025-09",8,"Despesas com ADS","",470,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-09",8,"Despesas com ADS","",700,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-09",8,"Despesas com ADS","",500,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-09",8,"Despesas com ADS","",500,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-09",8,"Despesas com ADS","",500,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-09",8,"Compra de ativo imobilizado","",169,1,"MERCADO LIVRE","","03_inter","c","investimento"],["d","2025-09",15,"Frete para compra de material","",113.18,1,"FLASHMEN PASSAGENS E ENCOMENDAS LTDA","","01_sicredi","c","despesa"],["d","2025-09",15,"Frete para compra de material","",267.96,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","","01_sicredi","c","despesa"],["d","2025-09",15,"Frete para compra de material","",250,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2025-09",15,"Despesas administrativas","",22,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-09",15,"Compra de matéria-prima","",250.56,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","01_sicredi","c","custo"],["d","2025-09",15,"Compra de matéria-prima","",975.11,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2025-09",15,"Serviços de contabilidade","",426,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2025-09",15,"Serviços de contabilidade","",1000,1,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","01_sicredi","c","despesa"],["d","2025-09",15,"Despesas com outros serviços contratados","",961.12,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2025-09",8,"Despesas com rescisões trabalhistas","",688.97,1,"LUIZ ANTONIO RONDINI VIEIRA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-09",16,"Compra de matéria-prima","",1010.4,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2025-09",17,"Frete para compra de material","",100,1,"FELIPE PEREIRA RUIZ CAVALCANTE - FRETE","","01_sicredi","c","despesa"],["d","2025-09",19,"Compra de insumos para expedição","",505.8,1,"AURIPELL EMBALAGENS LTDA","","01_sicredi","c","custo"],["d","2025-09",19,"Salários e encargos","",174.4,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-09",19,"Salários e encargos","",173.43,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-09",22,"Serviços contratados para marketing","",700,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Marketing e publicidade","01_sicredi","c","despesa"],["d","2025-09",22,"Despesas com frete para devolução e reenvio","",19.6,1,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","01_sicredi","c","despesa"],["d","2025-09",22,"Frete para compra de material","",50,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","","01_sicredi","c","despesa"],["d","2025-09",22,"Compra de matéria-prima","",973.04,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","01_sicredi","c","custo"],["d","2025-09",22,"Compra de matéria-prima","",975.11,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2025-09",22,"Impostos sobre receita","",447.14,1,"SIMPLES NACIONAL","","01_sicredi","c","custo"],["d","2025-09",23,"Serviços de sistema de gestão","",21,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2025-09",23,"Compra de matéria-prima","",3378,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2025-09",23,"Compra de mercadorias","",255,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","01_sicredi","c","custo"],["d","2025-09",23,"Luz, água e outros","",152.48,1,"ELEKTRO REDES S.A.","Despesas operacionais","01_sicredi","c","despesa"],["d","2025-09",23,"Despesas com alimentação","",6.99,1,"LOPES SUPERMERCADOS LTDA - (PROENÇA)","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-09",23,"Despesas com alimentação","",31.99,1,"LOPES SUPERMERCADOS LTDA - (PROENÇA)","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-09",23,"Salários e encargos","",20,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-09",24,"Luz, água e outros","",138.56,1,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","01_sicredi","c","despesa"],["d","2025-09",29,"Compra de insumos para expedição","",370.92,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","custo"],["d","2025-09",29,"Frete para compra de material","",70,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2025-09",29,"Frete para compra de material","",100,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","","01_sicredi","c","despesa"],["d","2025-09",29,"Frete para compra de material","",230,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2025-09",29,"Compra de matéria-prima","",975.41,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2025-09",29,"Compra de matéria-prima","",1177.05,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","01_sicredi","c","custo"],["d","2025-09",29,"Compra de matéria-prima","",1033.47,1,"SMART PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2025-09",30,"Frete para compra de material","",334.05,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","","01_sicredi","c","despesa"],["d","2025-09",30,"Compra de insumos para expedição","",126,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","custo"],["d","2025-10",1,"Compra de insumos para expedição","",630,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","custo"],["d","2025-10",2,"Despesas com materiais de consumo","",25,1,"SHALON PAPELARIA","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-10",2,"Despesas com materiais de consumo","",6.65,1,"SHALON PAPELARIA","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-10",3,"Frete para compra de material","",113.18,1,"MARIA LAURA DE MELLO LINO","","01_sicredi","c","despesa"],["d","2025-10",6,"Custo com horas extras setor de produção","",400,1,"TALYSSON HENRIQUE MACHADO DOS SANTOS","","01_sicredi","c","custo"],["d","2025-10",6,"Custo com horas extras setor de produção","",227.63,1,"LUIZ ANTONIO RONDINI VIEIRA","","01_sicredi","c","custo"],["d","2025-10",6,"Direitos a receber","",270,1,"UPSELLER TECHNOLOGY LTDA","","01_sicredi","c","investimento"],["d","2025-10",6,"Salários e encargos","",2006.57,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-10",6,"Salários e encargos","",1134.67,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-10",7,"Frete para compra de material","",70,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2025-10",7,"Compra de matéria-prima","",328,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2025-10",7,"Compra de matéria-prima","",731.64,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2025-10",8,"Frete para compra de material","",70,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2025-10",8,"Compra de matéria-prima","",1700,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2025-10",8,"Compra de matéria-prima","",1289.31,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2025-10",8,"Compra de matéria-prima","",595.42,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2025-10",8,"Compra de matéria-prima","",5630,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2025-10",8,"Compra de insumos para expedição","",121,1,"VALDERI FERREIRA BARBOSA JUNIOR - IMPAKTO VISUAL","","01_sicredi","c","custo"],["d","2025-10",10,"Despesas com aluguéis para uso","",54.01,1,"PREFEITURA MUNICIPAL DE AURIFLAMA","Despesas com aluguéis","01_sicredi","c","despesa"],["d","2025-10",10,"Despesas com aluguéis para uso","",2500,1,"CONDE INTERMEDIACAO DE NEGOCIOS LTDA","Despesas com aluguéis","01_sicredi","c","despesa"],["d","2025-10",10,"Despesas com materiais de consumo","",110,1,"MERCADO LIVRE","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-10",10,"Despesas com materiais de consumo","",88.49,1,"MERCADO LIVRE","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-10",10,"Despesas com materiais de consumo","",66.5,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-10",10,"Despesas com materiais de consumo","",72,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-10",10,"Compra de mercadorias","",1479,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","01_sicredi","c","custo"],["d","2025-10",10,"Luz, água e outros","",69,1,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","01_sicredi","c","despesa"],["d","2025-10",10,"Despesas com alimentação","",154,1,"ORNATA DOMUS COMPANY LTDA","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-10",9,"Serviços de sistema de gestão","",24.91,1,"SERASA S.A.","Despesas com serviços","03_inter","c","despesa"],["d","2025-09",23,"Serviços de sistema de gestão","",149,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2025-10",9,"Serviços de sistema de gestão","",40.9,1,"TINY ERP","Despesas com serviços","03_inter","c","despesa"],["d","2025-10",9,"Serviços de sistema de gestão","",218,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","03_inter","c","despesa"],["d","2025-10",9,"Despesas com materiais de consumo","",55.57,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2025-10",9,"Despesas com materiais de consumo","",34.14,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2025-10",9,"Despesas administrativas","",30,1,"CLARO S.A.","Despesas administrativas","03_inter","c","despesa"],["d","2025-10",9,"Compra de matéria-prima","",376.78,1,"TILIFORM INDUSTRIA GRAFICA - EM RECUPERACAO JUDICIAL","","03_inter","c","custo"],["d","2025-10",13,"Compra de insumos para expedição","",370.92,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","custo"],["d","2025-10",9,"Despesas com ADS","",1100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-10",9,"Despesas com ADS","",720,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-10",9,"Despesas com ADS","",720,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-10",9,"Despesas com ADS","",780,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-10",9,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-10",9,"Compra de ativo imobilizado","",169,1,"MERCADO LIVRE","","03_inter","c","investimento"],["d","2025-10",14,"Compra de matéria-prima","",4000,1,"GOLDEN PLASTIC COMERCIO E SERVICOS LTDA","","01_sicredi","c","custo"],["d","2025-10",14,"Compra de matéria-prima","",1177.05,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","01_sicredi","c","custo"],["d","2025-10",14,"Compra de mercadorias","",3525,1,"ENNATERRA AROMATIZADORES LTDA","","01_sicredi","c","custo"],["d","2025-10",15,"Frete para compra de material","",377.85,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","","01_sicredi","c","despesa"],["d","2025-10",15,"Reembolsos por fora de marketplaces","",79.96,1,"REEMBOLSOS","Despesas operacionais","01_sicredi","c","despesa"],["d","2025-10",15,"Despesas administrativas","",19.9,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-10",15,"Compra de matéria-prima","",2640.66,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2025-10",15,"Compra de matéria-prima","",1289.31,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2025-10",15,"Compra de matéria-prima","",250.56,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","01_sicredi","c","custo"],["d","2025-10",15,"Compra de matéria-prima","",595.42,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2025-10",15,"Serviços de contabilidade","",426,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2025-10",15,"Serviços de contabilidade","",1000,1,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","01_sicredi","c","despesa"],["d","2025-10",15,"Despesas com outros serviços contratados","",1907.19,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2025-10",15,"Despesas com outros serviços contratados","",1300,1,"ELEN FERNANDA CONTE - ARQUITETA","Despesas com serviços","01_sicredi","c","despesa"],["d","2025-10",9,"Despesas com rescisões trabalhistas","",688.97,1,"LUIZ ANTONIO RONDINI VIEIRA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-10",15,"Despesas com alimentação","",39.98,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-10",16,"Serviços de sistema de gestão","",90,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2025-10",16,"Despesas com alimentação","",84,1,"AURIGÁS - ÁGUA","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-10",17,"Frete para compra de material","",230,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2025-10",17,"Compra de insumos para expedição","",504.9,1,"AURIPELL EMBALAGENS LTDA","","01_sicredi","c","custo"],["d","2025-10",21,"Serviços contratados para marketing","",700,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Marketing e publicidade","01_sicredi","c","despesa"],["d","2025-10",20,"Compra de matéria-prima","",2110.92,1,"SMART PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2025-10",20,"Impostos sobre receita","",481.04,1,"SIMPLES NACIONAL","","01_sicredi","c","custo"],["d","2025-10",20,"Salários e encargos","",272.53,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-10",20,"Salários e encargos","",265.43,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-10",21,"Despesas com frete para devolução e reenvio","",255.93,1,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","01_sicredi","c","despesa"],["d","2025-10",22,"Frete para compra de material","",433.85,1,"DANIEL BARBOSA DA SILVA","","01_sicredi","c","despesa"],["d","2025-10",22,"Despesas com materiais de consumo","",120,1,"BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-10",22,"Despesas com materiais de consumo","",39,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-10",22,"Compra de matéria-prima","",2326.45,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2025-10",22,"Compra de matéria-prima","",1289.69,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2025-10",22,"Compra de matéria-prima","",595.59,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2025-10",22,"Luz, água e outros","",182.48,1,"ELEKTRO REDES S.A.","Despesas operacionais","01_sicredi","c","despesa"],["d","2025-10",23,"Outras despesas (Não considerar DRE)","",10231.6,1,"MERCADO PAGO","Despesas não operacionais","cdb_mercado_pago_finame","c","despesa"],["d","2025-10",23,"Outras despesas (Não considerar DRE)","",24941.91,1,"SICREDI","Despesas não operacionais","01_sicredi","c","despesa"],["d","2025-10",24,"Frete para compra de material","",70,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2025-10",24,"Frete para compra de material","",160.69,1,"FLASHMEN PASSAGENS E ENCOMENDAS LTDA","","01_sicredi","c","despesa"],["d","2025-10",24,"Luz, água e outros","",138.56,1,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","01_sicredi","c","despesa"],["d","2025-10",27,"Outras despesas (Não considerar DRE)","",4962.77,1,"SICREDI","Despesas não operacionais","01_sicredi","c","despesa"],["d","2025-10",27,"Outras despesas (Não considerar DRE)","",41.87,1,"SICREDI","Despesas não operacionais","01_sicredi","c","despesa"],["d","2025-10",29,"Compra de matéria-prima","",753.46,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2025-11",2,"Compra de matéria-prima","",6150,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","custo"],["d","2025-11",2,"Despesas com acordos judiciais","",3151.28,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","despesa"],["d","2025-10",29,"Compra de matéria-prima","",2326.45,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2025-10",29,"Compra de matéria-prima","",2354.1,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","01_sicredi","c","custo"],["d","2025-10",29,"Outras despesas (Não considerar DRE)","",22891.91,1,"SICREDI","Despesas não operacionais","01_sicredi","c","despesa"],["d","2025-10",31,"Juros e Multas","",16.2,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","","01_sicredi","c","despesa"],["d","2025-10",31,"Frete para compra de material","",695.54,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","","01_sicredi","c","despesa"],["d","2025-10",30,"Compra de insumos para expedição","",1145.3,1,"AURIPELL EMBALAGENS LTDA","","01_sicredi","c","custo"],["d","2025-10",30,"Salários e encargos","",20,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-10",31,"Frete para compra de material","",250,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","01_sicredi","c","despesa"],["d","2025-10",31,"Frete para compra de material","",50,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","despesa"],["d","2025-10",31,"Frete para compra de material","",350,1,"EDSON MONTEIRO PLAZAS - FRETE","","01_sicredi","c","despesa"],["d","2025-10",31,"Despesas com materiais de consumo","",189.4,1,"ORNATA DOMUS COMPANY LTDA","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-10",31,"Compra de matéria-prima","",256.45,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2025-10",31,"Compra de matéria-prima","",1259.63,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2025-10",31,"Compra de insumos para expedição","",370.92,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","custo"],["d","2025-10",31,"Compra de insumos para expedição","",107.68,1,"VALDERI FERREIRA BARBOSA JUNIOR - IMPAKTO VISUAL","","01_sicredi","c","custo"],["d","2025-10",31,"Impostos e Taxas","",120.6,1,"SECRETARIA DA FAZENDA E PLANEJAMENTO","Despesas Financeiras","01_sicredi","c","despesa"],["d","2025-10",31,"Despesas com outros serviços contratados","",350,1,"CARLOS EDUARDO DE CARVALHO - PEDREIRO","Despesas com serviços","01_sicredi","c","despesa"],["d","2025-10",31,"Comissões","",331.03,1,"TIAGO SANTOS MOURA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-11",3,"Despesas com materiais de consumo","",148.16,1,"MERCADO LIVRE","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-11",4,"Frete para compra de material","",80,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2025-11",4,"Compra de matéria-prima","",753.46,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2025-11",4,"Compra de matéria-prima","",5630,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2025-11",4,"Compra de matéria-prima","",960,1,"SMART PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2025-11",4,"Compra de insumos para produção","",123.26,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2025-11",4,"Compra de insumos para produção","",336,1,"TIQUETA MATERIAL IMPRESSO LTDA","","01_sicredi","c","custo"],["d","2025-11",5,"Despesas com materiais de consumo","",48.32,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-11",5,"Compra de matéria-prima","",2327.16,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2025-11",6,"Custo com horas extras setor de produção","",110,1,"KARINA DE LIMA TENORIO","","01_sicredi","c","custo"],["d","2025-11",6,"Despesas com outros serviços contratados","",726.5,1,"CONGELAR - COQUINHO","Despesas com serviços","01_sicredi","c","despesa"],["d","2025-11",6,"Custo com horas extras setor de produção","",1040,1,"RUTH CASSIA DO NASCIMENTO PEREIRA","","01_sicredi","c","custo"],["d","2025-11",6,"Custo com horas extras setor de produção","",80,1,"TALYSSON HENRIQUE MACHADO DOS SANTOS","","01_sicredi","c","custo"],["d","2025-11",6,"Custo com horas extras setor de produção","",44.13,1,"POLYANA CECILIA ALMEIDA FERREIRA","","01_sicredi","c","custo"],["d","2025-11",6,"Compra de ativo imobilizado","",136.2,1,"BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR","","01_sicredi","c","investimento"],["d","2025-11",6,"Compra de ativo imobilizado","",282.5,1,"BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR","","01_sicredi","c","investimento"],["d","2025-11",6,"Compra de ativo imobilizado","",299.95,1,"BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR","","01_sicredi","c","investimento"],["d","2025-11",6,"Salários e encargos","",2006.57,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-11",6,"Salários e encargos","",1478.77,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-11",7,"Frete para compra de material","",100,1,"LUIZ PAULO ZARDINI","","01_sicredi","c","despesa"],["d","2025-11",7,"Frete para compra de material","",200,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","","01_sicredi","c","despesa"],["d","2025-11",7,"Compra de matéria-prima","",1259.63,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2025-11",7,"Compra de matéria-prima","",256.45,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2025-11",10,"Frete para compra de material","",139.7,1,"FLASHMEN PASSAGENS E ENCOMENDAS LTDA","","01_sicredi","c","despesa"],["d","2025-11",10,"Despesas com aluguéis para uso","",54.01,1,"PREFEITURA MUNICIPAL DE AURIFLAMA","Despesas com aluguéis","01_sicredi","c","despesa"],["d","2025-11",10,"Despesas com aluguéis para uso","",2500,1,"CONDE INTERMEDIACAO DE NEGOCIOS LTDA","Despesas com aluguéis","01_sicredi","c","despesa"],["d","2025-11",10,"Despesas com materiais de consumo","",90,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-11",10,"Despesas com materiais de consumo","",194.5,1,"MERCADO LIVRE","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-11",10,"Despesas com materiais de consumo","",196.61,1,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-11",10,"Despesas com materiais de consumo","",20,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-11",10,"Despesas com materiais de consumo","",500,1,"MERCADO LIVRE","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-11",10,"Despesas com materiais de consumo","",219,1,"MERCADO LIVRE","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-11",10,"Compra de mercadorias","",3230,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","01_sicredi","c","custo"],["d","2025-11",10,"Compra de insumos para expedição","",1095,1,"AURIPELL EMBALAGENS LTDA","","01_sicredi","c","custo"],["d","2025-11",10,"Despesas com ADS","",600,1,"SHOPEE","Marketing e publicidade","01_sicredi","c","despesa"],["d","2025-11",10,"Despesas com outros serviços contratados","",125.4,1,"CONSELHO DE ARQUITETURA E URBANISMO DE SAO PAULO (CAU-SP)","Despesas com serviços","01_sicredi","c","despesa"],["d","2025-11",10,"Luz, água e outros","",69,1,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","01_sicredi","c","despesa"],["d","2025-11",10,"Despesas com alimentação","",150.5,1,"ORNATA DOMUS COMPANY LTDA","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-11",11,"Serviços de sistema de gestão","",135,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2025-11",11,"Compra de matéria-prima","",753.69,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2025-11",6,"Serviços de sistema de gestão","",40.9,1,"TINY ERP","Despesas com serviços","03_inter","c","despesa"],["d","2025-11",6,"Serviços de sistema de gestão","",24.91,1,"SERASA S.A.","Despesas com serviços","03_inter","c","despesa"],["d","2025-11",6,"Serviços de sistema de gestão","",218,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","03_inter","c","despesa"],["d","2025-11",6,"Serviços de sistema de gestão","",149,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","03_inter","c","despesa"],["d","2025-11",6,"Despesas com materiais de consumo","",37.4,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","03_inter","c","despesa"],["d","2025-11",12,"Despesas com materiais de consumo","",96.58,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-11",6,"Despesas com materiais de consumo","",42.1,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","03_inter","c","despesa"],["d","2025-11",6,"Despesas administrativas","",5.79,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","03_inter","c","despesa"],["d","2025-11",6,"Despesas administrativas","",30,1,"CLARO S.A.","Despesas administrativas","03_inter","c","despesa"],["d","2025-11",6,"Compra de matéria-prima","",376.78,1,"TILIFORM INDUSTRIA GRAFICA - EM RECUPERACAO JUDICIAL","","03_inter","c","custo"],["d","2025-11",12,"Compra de insumos para expedição","",126.9,1,"VALDERI FERREIRA BARBOSA JUNIOR - IMPAKTO VISUAL","","01_sicredi","c","custo"],["d","2025-11",6,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-11",6,"Despesas com ADS","",500,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-11",6,"Despesas com ADS","",3000,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-11",6,"Despesas com ADS","",820,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-11",6,"Despesas com ADS","",500,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-11",6,"Compra de ativo imobilizado","",169,1,"MERCADO LIVRE","","03_inter","c","investimento"],["d","2025-11",13,"Despesas com materiais de consumo","",32,1,"PERCIVAL AROSTI DE PAULA","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-11",12,"Compra de matéria-prima","",256.52,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2025-11",12,"Compra de matéria-prima","",1260,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2025-11",14,"Compra de mercadorias","",3530,1,"ENNATERRA AROMATIZADORES LTDA","","01_sicredi","c","custo"],["d","2025-11",14,"Bonificações, Brindes e Festividades","",200,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-11",15,"Frete para compra de material","",316.97,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","","01_sicredi","c","despesa"],["d","2025-11",17,"Compra de matéria-prima","",250.56,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","01_sicredi","c","custo"],["d","2025-11",15,"Serviços de contabilidade","",426,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2025-11",18,"Serviços de contabilidade","",1000,1,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","01_sicredi","c","despesa"],["d","2025-11",17,"Despesas com outros serviços contratados","",1000,1,"ELEN FERNANDA CONTE - ARQUITETA","Despesas com serviços","01_sicredi","c","despesa"],["d","2025-11",17,"Despesas com outros serviços contratados","",2399.03,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2025-11",17,"Frete para compra de material","",100,1,"LUIZ PAULO ZARDINI","","01_sicredi","c","despesa"],["d","2025-11",17,"Despesas com materiais de consumo","",88.03,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-11",17,"Despesas com materiais de consumo","",8,1,"JOSE AUGUSTO VIEIRA DO LIVRAMENTO","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-11",17,"Compra de matéria-prima","",3215.85,1,"SMART PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2025-11",17,"Compra de matéria-prima","",11120,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2025-11",18,"Compra de insumos para expedição","",3912,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2025-11",19,"Reembolsos por fora de marketplaces","",39.9,1,"REEMBOLSOS","Despesas operacionais","01_sicredi","c","despesa"],["d","2025-11",19,"Compra de insumos para expedição","",279.1,1,"VALDERI FERREIRA BARBOSA JUNIOR - IMPAKTO VISUAL","","01_sicredi","c","custo"],["d","2025-11",19,"Compra de ativo imobilizado","",160,1,"PAULO CESAR LOPES (ROPE)","","01_sicredi","c","investimento"],["d","2025-11",19,"Compra de ativo imobilizado","",450,1,"MARQUINHO - MARCENEIRO","","01_sicredi","c","investimento"],["d","2025-11",19,"Luz, água e outros","",108.08,1,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","01_sicredi","c","despesa"],["d","2025-11",19,"Bonificações, Brindes e Festividades","",29.9,1,"ALINE BRAMBILLA - ALINE MODA BEBE","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-11",19,"Bonificações, Brindes e Festividades","",114.2,1,"MARISI FITNESS CONFECCOES LTDA - NEXT WAVE","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-11",18,"Salários e encargos","",302.4,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-11",19,"Salários e encargos","",294.66,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-11",20,"Serviços contratados para marketing","",700,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Marketing e publicidade","01_sicredi","c","despesa"],["d","2025-11",20,"Compra de ativo imobilizado","",633.34,1,"IVAN RODRIGO FALICO","","01_sicredi","c","investimento"],["d","2025-11",20,"Comissões","",463.57,1,"TIAGO SANTOS MOURA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-11",21,"Despesas com frete para devolução e reenvio","",460.96,1,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","01_sicredi","c","despesa"],["d","2025-11",21,"Despesas com materiais de consumo","",26.02,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-11",21,"Impostos sobre receita","",642.47,1,"SIMPLES NACIONAL","","01_sicredi","c","custo"],["d","2025-11",22,"Frete para compra de material","",200,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","","01_sicredi","c","despesa"],["d","2025-11",22,"Frete para compra de material","",100,1,"LUIZ PAULO ZARDINI","","01_sicredi","c","despesa"],["d","2025-11",24,"Frete para compra de material","",100,1,"LUIZ PAULO ZARDINI","","01_sicredi","c","despesa"],["d","2025-11",24,"Frete para compra de material","",200.2,1,"FLASHMEN PASSAGENS E ENCOMENDAS LTDA","","01_sicredi","c","despesa"],["d","2025-11",24,"Compra de matéria-prima","",1920,1,"SMART PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2025-11",24,"Compra de matéria-prima","",6527.2,1,"GOLDEN PLASTIC COMERCIO E SERVICOS LTDA","","01_sicredi","c","custo"],["d","2025-11",24,"Luz, água e outros","",144.85,1,"ELEKTRO REDES S.A.","Despesas operacionais","01_sicredi","c","despesa"],["d","2025-11",25,"Frete para compra de material","",100,1,"LUIZ PAULO ZARDINI","","01_sicredi","c","despesa"],["d","2025-11",25,"Despesas administrativas","",62.88,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-11",25,"Compra de matéria-prima","",2783.06,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2025-11",28,"Compra de ativo imobilizado","",431.55,1,"BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR","","01_sicredi","c","investimento"],["d","2025-11",25,"Despesas com 13° Salário","",1090,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-11",25,"Despesas com 13° Salário","",266.67,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-12",8,"Luz, água e outros","",130.52,1,"ELEKTRO REDES S.A.","Despesas operacionais","01_sicredi","c","despesa"],["d","2025-11",26,"Despesas com materiais de consumo","",164,1,"MERCADO LIVRE","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-11",26,"Compra de matéria-prima","",4608.37,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2025-11",26,"Compra de insumos para expedição","",992.7,1,"AURIPELL EMBALAGENS LTDA","","01_sicredi","c","custo"],["d","2025-11",27,"Frete para compra de material","",200,1,"DANIEL BARBOSA DA SILVA","","01_sicredi","c","despesa"],["d","2025-11",27,"Frete para compra de material","",100,1,"LUIZ PAULO ZARDINI","","01_sicredi","c","despesa"],["d","2025-11",27,"Compra de ativo imobilizado","",2080,1,"JOSE LUIZ MARINO JUNIOR","","01_sicredi","c","investimento"],["d","2025-11",28,"Serviços de sistema de gestão","",45,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2025-11",28,"Frete para compra de material","",250,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","","01_sicredi","c","despesa"],["d","2025-11",28,"Frete para compra de material","",100,1,"LUIZ PAULO ZARDINI","","01_sicredi","c","despesa"],["d","2025-11",28,"Despesas administrativas","",90,1,"AURIGÁS - ÁGUA","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-11",28,"Compra de matéria-prima","",6150,1,"FORMULARIOS COVOLAN LTDA.","","01_sicredi","c","custo"],["d","2025-11",28,"Compra de ativo intangível","",220,1,"EAN BRASIL","","01_sicredi","c","investimento"],["d","2025-11",28,"Impostos e Taxas","",70.62,1,"SECRETARIA DA FAZENDA E PLANEJAMENTO","Despesas Financeiras","01_sicredi","c","despesa"],["d","2025-11",28,"Serviços de sistema de gestão","",149,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2025-11",29,"Frete para compra de material","",70,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2025-11",30,"Frete para compra de material","",702.63,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","","01_sicredi","c","despesa"],["d","2025-12",1,"Frete para compra de material","",206.63,1,"FLASHMEN PASSAGENS E ENCOMENDAS LTDA","","01_sicredi","c","despesa"],["d","2025-12",2,"Compra de matéria-prima","",2783.06,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2025-12",2,"Compra de matéria-prima","",2942.62,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","01_sicredi","c","custo"],["d","2025-12",3,"Compra de matéria-prima","",1318.99,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2025-12",4,"Frete para compra de material","",250,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","","01_sicredi","c","despesa"],["d","2025-12",4,"Despesas administrativas","",35,1,"CLARO S.A.","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-12",4,"Despesas administrativas","",71.23,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-12",5,"Compra de insumos para expedição","",1059.8,1,"TOLOY COMERCIO DE EMBALAGENS LTDA.","","01_sicredi","c","custo"],["d","2025-12",5,"Custo com horas extras setor de produção","",320,1,"RUTH CASSIA DO NASCIMENTO PEREIRA","","01_sicredi","c","custo"],["d","2025-12",5,"Custo com horas extras setor de produção","",160.74,1,"POLYANA CECILIA ALMEIDA FERREIRA","","01_sicredi","c","custo"],["d","2025-12",5,"Custo com horas extras setor de produção","",159.43,1,"KARINA DE LIMA TENORIO","","01_sicredi","c","custo"],["d","2025-12",5,"Custo com horas extras setor de produção","",323.63,1,"RAFAEL DOS SANTOS PILIELO","","01_sicredi","c","custo"],["d","2025-12",5,"Salários e encargos","",1540,1,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-12",6,"Compra de ativo imobilizado","",136.2,1,"BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR","","01_sicredi","c","investimento"],["d","2025-12",6,"Compra de ativo imobilizado","",282.5,1,"BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR","","01_sicredi","c","investimento"],["d","2025-12",6,"Compra de ativo imobilizado","",299.95,1,"BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR","","01_sicredi","c","investimento"],["d","2025-12",5,"Salários e encargos","",1120,1,"KARINA DE LIMA TENORIO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-12",5,"Salários e encargos","",2006.57,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-12",5,"Salários e encargos","",1478.77,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-12",8,"Serviços de sistema de gestão","",270,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2025-12",8,"Frete para compra de material","",100,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2025-12",8,"Compra de matéria-prima","",2143.91,1,"SMART PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2025-12",8,"Custo com horas extras setor de produção","",240,1,"KAROLAYNE HELLEN FAGUNDES DOS SANTOS","","01_sicredi","c","custo"],["d","2025-12",9,"Compra de matéria-prima","",3330,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2025-12",9,"Compra de matéria-prima","",2348.53,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2025-12",9,"Compra de matéria-prima","",2783.91,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2025-12",9,"Compra de matéria-prima","",2942.63,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","01_sicredi","c","custo"],["d","2025-12",9,"Compra de matéria-prima","",5660,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2025-12",10,"Despesas com aluguéis para uso","",54.07,1,"PREFEITURA MUNICIPAL DE AURIFLAMA","Despesas com aluguéis","01_sicredi","c","despesa"],["d","2025-12",10,"Despesas com aluguéis para uso","",3250,1,"ORNATA DOMUS COMPANY LTDA","Despesas com aluguéis","01_sicredi","c","despesa"],["d","2025-12",10,"Despesas com materiais de consumo","",96,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-12",10,"Despesas com materiais de consumo","",31.8,1,"MERCADO LIVRE","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-12",10,"Despesas com materiais de consumo","",127.98,1,"MERCADO LIVRE","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-12",10,"Despesas com materiais de consumo","",0.01,1,"MERCADO LIVRE","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-12",10,"Despesas com materiais de consumo","",395.57,1,"MERCADO LIVRE","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-12",10,"Despesas com materiais de consumo","",194.5,1,"MERCADO LIVRE","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-12",10,"Despesas com materiais de consumo","",18,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-12",10,"Despesas administrativas","",373.46,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-12",10,"Despesas administrativas","",33,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-12",10,"Compra de matéria-prima","",870,1,"INTER ESSÊNCIAS - DIB & CAIRES LTDA","","01_sicredi","c","custo"],["d","2025-12",10,"Compra de matéria-prima","",1318.99,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2025-12",10,"Compra de insumos para expedição","",211.61,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","01_sicredi","c","custo"],["d","2025-11",22,"Outras despesas","",2500,1,"CONDE INTERMEDIACAO DE NEGOCIOS LTDA","Despesas não operacionais","01_sicredi","c","despesa"],["d","2025-12",8,"Compra de ativo imobilizado","",405,1,"FORROS E DIVISORIAS RIO PRETO LTDA","","03_inter","c","investimento"],["d","2025-12",10,"Luz, água e outros","",69,1,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","01_sicredi","c","despesa"],["d","2025-12",10,"Outros gastos com publicidade","",174.57,1,"PRINTI - FM IMPRESSOS PERSONALIZADOS LTDA.","Marketing e publicidade","01_sicredi","c","despesa"],["d","2025-12",10,"Despesas com alimentação","",308,1,"ORNATA DOMUS COMPANY LTDA","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-12",11,"Compra de mercadorias","",4131,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","01_sicredi","c","custo"],["d","2025-12",11,"Compra de insumos para expedição","",360,1,"AURIPELL EMBALAGENS LTDA","","01_sicredi","c","custo"],["d","2025-12",8,"Serviços de sistema de gestão","",40.9,1,"TINY ERP","Despesas com serviços","03_inter","c","despesa"],["d","2025-12",8,"Serviços de sistema de gestão","",24.91,1,"SERASA S.A.","Despesas com serviços","03_inter","c","despesa"],["d","2025-12",8,"Serviços de sistema de gestão","",32.36,1,"TINY ERP","Despesas com serviços","03_inter","c","despesa"],["d","2025-12",8,"Serviços de sistema de gestão","",218,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","03_inter","c","despesa"],["d","2025-12",13,"Frete para compra de material","",60,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2025-12",8,"Despesas com materiais de consumo","",588.8,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2025-12",8,"Despesas com materiais de consumo","",637.95,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2025-12",8,"Despesas administrativas","",30,1,"CLARO S.A.","Despesas administrativas","03_inter","c","despesa"],["d","2025-12",8,"Compra de matéria-prima","",376.78,1,"TILIFORM INDUSTRIA GRAFICA - EM RECUPERACAO JUDICIAL","","03_inter","c","custo"],["d","2025-12",8,"Despesas com ADS","",3000,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-12",8,"Despesas com ADS","",2000,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-12",8,"Despesas com ADS","",3400,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-12",8,"Despesas com ADS","",2400,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2025-12",12,"Custo com horas extras setor de produção","",80,1,"KAROLAYNE HELLEN FAGUNDES DOS SANTOS","","01_sicredi","c","custo"],["d","2025-12",8,"Compra de ativo imobilizado","",169,1,"MERCADO LIVRE","","03_inter","c","investimento"],["d","2025-12",8,"Compra de ativo imobilizado","",1025,1,"IVAN RODRIGO FALICO","","03_inter","c","investimento"],["d","2025-12",8,"Outras despesas (Não considerar DRE)","",249.36,1,"AMAZON","Despesas não operacionais","03_inter","c","despesa"],["d","2025-12",13,"Compra de insumos para expedição","",64.5,1,"BINHO - TOTAL CARTUCHO","","01_sicredi","c","custo"],["d","2025-12",14,"Compra de insumos para expedição","",365.51,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","01_sicredi","c","custo"],["d","2025-12",15,"Frete para compra de material","",1052.63,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","","01_sicredi","c","despesa"],["d","2025-12",15,"Compra de matéria-prima","",14150,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2025-12",15,"Compra de matéria-prima","",1976.73,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2025-12",15,"Serviços de contabilidade","",426,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2025-12",15,"Serviços de contabilidade","",1000,1,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","01_sicredi","c","despesa"],["d","2025-12",18,"Compra de insumos para expedição","",269.6,1,"VALDERI FERREIRA BARBOSA JUNIOR - IMPAKTO VISUAL","","01_sicredi","c","custo"],["d","2025-12",15,"Compra de insumos para expedição","",880,1,"AURIPELL EMBALAGENS LTDA","","01_sicredi","c","custo"],["d","2025-12",15,"Despesas com outros serviços contratados","",1000,1,"ELEN FERNANDA CONTE - ARQUITETA","Despesas com serviços","01_sicredi","c","despesa"],["d","2025-12",15,"Despesas com outros serviços contratados","",2108.47,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2025-12",16,"Frete para compra de material","",160.89,1,"FLASHMEN PASSAGENS E ENCOMENDAS LTDA","","01_sicredi","c","despesa"],["d","2025-12",16,"Frete para compra de material","",450,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2025-12",17,"Compra de matéria-prima","",1319.39,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2025-12",17,"Compra de mercadorias","",3545,1,"ENNATERRA AROMATIZADORES LTDA","","01_sicredi","c","custo"],["d","2025-12",18,"Compra de mercadorias","",4131,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","01_sicredi","c","custo"],["d","2025-12",18,"Comissões","",622.81,1,"TIAGO SANTOS MOURA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-12",19,"Frete para compra de material","",200,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","","01_sicredi","c","despesa"],["d","2025-12",19,"Compra de insumos para expedição","",1703.56,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","01_sicredi","c","custo"],["d","2025-12",19,"Custo com horas extras setor de produção","",240,1,"KAROLAYNE HELLEN FAGUNDES DOS SANTOS","","01_sicredi","c","custo"],["d","2025-12",19,"Despesas com 13° Salário","",916.57,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-12",19,"Despesas com 13° Salário","",226.67,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-12",19,"Salários e encargos","",410.93,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-12",19,"Salários e encargos","",213.42,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-12",19,"Salários e encargos","",294.66,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-12",22,"Serviços contratados para marketing","",700,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Marketing e publicidade","01_sicredi","c","despesa"],["d","2025-12",22,"Compra de ativo imobilizado","",633.33,1,"IVAN RODRIGO FALICO","","01_sicredi","c","investimento"],["d","2025-12",22,"Despesas com frete para devolução e reenvio","",671.08,1,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","01_sicredi","c","despesa"],["d","2025-12",22,"Compra de matéria-prima","",1976.71,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2025-12",22,"Compra de insumos para expedição","",613.5,1,"AURIPELL EMBALAGENS LTDA","","01_sicredi","c","custo"],["d","2025-12",22,"Impostos sobre receita","",914.05,1,"SIMPLES NACIONAL","","01_sicredi","c","custo"],["d","2025-12",23,"Frete para compra de material","",750,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2025-12",23,"Despesas administrativas","",30,1,"Carlos Alexandre Fornazari","Despesas administrativas","01_sicredi","c","despesa"],["d","2025-12",23,"Compra de matéria-prima","",3328.05,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2025-12",24,"Compra de matéria-prima","",2032,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2025-12",24,"Luz, água e outros","",368.67,1,"ELEKTRO REDES S.A.","Despesas operacionais","01_sicredi","c","despesa"],["d","2025-12",25,"Compra de insumos para expedição","",211.61,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","01_sicredi","c","custo"],["d","2025-12",29,"Compra de ativo imobilizado","",431.55,1,"BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR","","01_sicredi","c","investimento"],["d","2025-12",26,"Compra de insumos para expedição","",2493.25,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","01_sicredi","c","custo"],["d","2025-12",26,"Custo com horas extras setor de produção","",110,1,"KAROLAYNE HELLEN FAGUNDES DOS SANTOS","","01_sicredi","c","custo"],["d","2025-12",29,"Compra de matéria-prima","",6150,1,"FORMULARIOS COVOLAN LTDA.","","01_sicredi","c","custo"],["d","2025-12",29,"Despesas com acordos judiciais","",3151.28,1,"DR. VALDOMIRO VIEIRA BRANCO FILHO - ADVOGADO COVOLAN","","01_sicredi","c","despesa"],["d","2025-12",29,"Juros e Multas","",658.08,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","01_sicredi","c","despesa"],["d","2025-12",29,"Reembolsos por fora de marketplaces","",7.98,1,"REEMBOLSOS","Despesas operacionais","01_sicredi","c","despesa"],["d","2025-12",29,"Reembolsos por fora de marketplaces","",9.8,1,"REEMBOLSOS","Despesas operacionais","01_sicredi","c","despesa"],["d","2025-12",29,"Compra de matéria-prima","",2005.16,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","01_sicredi","c","custo"],["d","2025-12",29,"Compra de matéria-prima","",1976.71,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2025-12",29,"Compra de insumos para expedição","",365.51,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","01_sicredi","c","custo"],["d","2025-12",30,"Serviços de sistema de gestão","",149,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2025-12",30,"Frete para compra de material","",717.87,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","","01_sicredi","c","despesa"],["d","2025-12",30,"Reembolsos por fora de marketplaces","",35.88,1,"REEMBOLSOS","Despesas operacionais","01_sicredi","c","despesa"],["d","2025-12",30,"Compra de matéria-prima","",2032,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2025-12",30,"Serviços de contabilidade","",800,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-01",2,"Custo com horas extras setor de produção","",160,1,"KAROLAYNE HELLEN FAGUNDES DOS SANTOS","","01_sicredi","c","custo"],["d","2026-01",2,"Impostos e Taxas","",423.37,1,"SECRETARIA DA FAZENDA E PLANEJAMENTO","Despesas Financeiras","01_sicredi","c","despesa"],["d","2026-01",3,"Compra de insumos para expedição","",1703.56,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","01_sicredi","c","custo"],["d","2026-01",5,"Despesas administrativas","",26.5,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-01",5,"Compra de matéria-prima","",1976.71,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-01",5,"Luz, água e outros","",195.7,1,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","01_sicredi","c","despesa"],["d","2025-12",31,"Salários e encargos","",2200,1,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-01",6,"Compra de matéria-prima","",4287.81,1,"SMART PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2026-01",6,"Compra de matéria-prima","",2147.46,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2026-01",6,"Compra de insumos para expedição","",213,1,"AMORIM LISBOA LTDA - D'CORACAO VISUAL","","01_sicredi","c","custo"],["d","2025-12",31,"Salários e encargos","",1600,1,"KARINA DE LIMA TENORIO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-12",31,"Salários e encargos","",1478.77,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2025-12",31,"Salários e encargos","",2006.57,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-01",7,"Compra de matéria-prima","",65.1,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-01",7,"Compra de matéria-prima","",2698.98,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-01",7,"Compra de matéria-prima","",5286.4,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","01_sicredi","c","custo"],["d","2026-01",7,"Compra de matéria-prima","",2032.61,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2026-01",7,"Custo com horas extras setor de produção","",170.36,1,"POLYANA CECILIA ALMEIDA FERREIRA","","01_sicredi","c","custo"],["d","2025-12",8,"Serviços de sistema de gestão","",218,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-01",8,"Frete para compra de material","",90,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-01",9,"Serviços de sistema de gestão","",270,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-01",9,"Despesas administrativas","",75,1,"AURIGÁS - ÁGUA","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-01",9,"Compra de mercadorias","",5924.5,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","01_sicredi","c","custo"],["d","2026-01",9,"Compra de insumos para expedição","",211.62,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","01_sicredi","c","custo"],["d","2026-01",9,"Custo com horas extras setor de produção","",160,1,"KAROLAYNE HELLEN FAGUNDES DOS SANTOS","","01_sicredi","c","custo"],["d","2026-01",12,"Despesas com aluguéis para uso","",2500,1,"ORNATA DOMUS COMPANY LTDA","Despesas com aluguéis","01_sicredi","c","despesa"],["d","2026-01",12,"Despesas com materiais de consumo","",287.96,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-01",12,"Despesas com materiais de consumo","",96,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-01",12,"Despesas com materiais de consumo","",47.02,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-01",12,"Despesas com materiais de consumo","",6,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-01",12,"Despesas com materiais de consumo","",20,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-01",12,"Despesas administrativas","",65,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-01",12,"Bens de consumo com publicidade","",171.8,1,"MERCADO LIVRE","Marketing e publicidade","01_sicredi","c","despesa"],["d","2026-01",12,"Compra de matéria-prima","",250,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2026-01",12,"Compra de matéria-prima","",152.15,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2026-01",12,"Compra de matéria-prima","",541.16,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2026-01",12,"Compra de matéria-prima","",135.29,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2026-01",12,"Compra de insumos para expedição","",90,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","","01_sicredi","c","custo"],["d","2026-01",12,"Compra de insumos para expedição","",80,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","","01_sicredi","c","custo"],["d","2026-01",10,"Compra de insumos para expedição","",2493.25,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","01_sicredi","c","custo"],["d","2026-01",12,"Compra de ativo imobilizado","",360,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","","01_sicredi","c","investimento"],["d","2026-01",12,"Despesas com outros serviços contratados","",9.9,1,"MERCADO LIVRE","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-01",12,"Luz, água e outros","",69,1,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","01_sicredi","c","despesa"],["d","2026-01",12,"Outros gastos com publicidade","",174.57,1,"PRINTI - FM IMPRESSOS PERSONALIZADOS LTDA.","Marketing e publicidade","01_sicredi","c","despesa"],["d","2026-01",12,"Despesas com alimentação","",308,1,"ORNATA DOMUS COMPANY LTDA","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-01",7,"Serviços de sistema de gestão","",40.9,1,"TINY ERP","Despesas com serviços","03_inter","c","despesa"],["d","2026-01",7,"Serviços de sistema de gestão","",24.91,1,"SERASA S.A.","Despesas com serviços","03_inter","c","despesa"],["d","2026-01",7,"Serviços de sistema de gestão","",47.67,1,"TINY ERP","Despesas com serviços","03_inter","c","despesa"],["d","2026-01",7,"Serviços de sistema de gestão","",32.32,1,"TINY ERP","Despesas com serviços","03_inter","c","despesa"],["d","2026-01",12,"Frete para compra de material","",250,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","01_sicredi","c","despesa"],["d","2026-01",7,"Despesas administrativas","",30,1,"CLARO S.A.","Despesas administrativas","03_inter","c","despesa"],["d","2026-01",7,"Despesas administrativas","",115.62,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","03_inter","c","despesa"],["d","2026-01",7,"Bens de consumo com publicidade","",2.8,1,"ALINE C. E. DE OLIVEIRA","Marketing e publicidade","03_inter","c","despesa"],["d","2026-01",7,"Compra de matéria-prima","",376.78,1,"TILIFORM INDUSTRIA GRAFICA - EM RECUPERACAO JUDICIAL","","03_inter","c","custo"],["d","2026-01",7,"Compra de matéria-prima","",2008.43,1,"TILIFORM INDUSTRIA GRAFICA - EM RECUPERACAO JUDICIAL","","03_inter","c","custo"],["d","2026-01",12,"Compra de matéria-prima","",1976.71,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-01",12,"Compra de insumos para expedição","",888.2,1,"VALDERI FERREIRA BARBOSA JUNIOR - IMPAKTO VISUAL","","01_sicredi","c","custo"],["d","2026-01",7,"Despesas com ADS","",1000,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-01",7,"Despesas com ADS","",2220,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-01",7,"Despesas com ADS","",5000,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-01",7,"Despesas com ADS","",2000,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-01",7,"Despesas com ADS","",1000,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-01",7,"Compra de ativo imobilizado","",169,1,"MERCADO LIVRE","","03_inter","c","investimento"],["d","2026-01",7,"Compra de ativo imobilizado","",1025,1,"IVAN RODRIGO FALICO","","03_inter","c","investimento"],["d","2026-01",7,"Compra de ativo imobilizado","",405,1,"FORROS E DIVISORIAS RIO PRETO LTDA","","03_inter","c","investimento"],["d","2026-01",7,"Compra de insumos para produção","",175.84,1,"TIQUETA MATERIAL IMPRESSO LTDA","","03_inter","c","custo"],["d","2026-01",12,"Salários e encargos","",20,1,"KARINA DE LIMA TENORIO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-01",12,"Salários e encargos","",20,1,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-01",13,"Reembolsos por fora de marketplaces","",28.9,1,"REEMBOLSOS","Despesas operacionais","01_sicredi","c","despesa"],["d","2026-01",13,"Compra de matéria-prima","",2147.46,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2026-01",13,"Compra de insumos para expedição","",365.52,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","01_sicredi","c","custo"],["d","2026-01",14,"Compra de matéria-prima","",4683.66,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-01",15,"Frete para compra de material","",418.32,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","","01_sicredi","c","despesa"],["d","2026-01",15,"Frete para compra de material","",110,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-01",15,"Frete para compra de material","",1045.23,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","","01_sicredi","c","despesa"],["d","2026-01",15,"Serviços de contabilidade","",426,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-01",15,"Despesas com outros serviços contratados","",2235.15,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-01",16,"Frete para compra de material","",95,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-01",16,"Compra de mercadorias","",5924.5,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","01_sicredi","c","custo"],["d","2026-01",18,"Compra de insumos para expedição","",1703.57,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","01_sicredi","c","custo"],["d","2026-01",19,"Despesas com materiais de consumo","",5,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-01",19,"Despesas administrativas","",63.98,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-01",19,"Compra de ativo imobilizado","",1150,1,"EDERSON ROGERIO FERREIRA - DIVISÓRIAS","","01_sicredi","c","investimento"],["d","2026-01",20,"Serviços contratados para marketing","",700,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Marketing e publicidade","01_sicredi","c","despesa"],["d","2026-01",20,"Frete para compra de material","",85,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-01",20,"Compra de matéria-prima","",2148.09,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2026-01",20,"Serviços de contabilidade","",1000,1,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-01",20,"Impostos sobre receita","",1035.52,1,"SIMPLES NACIONAL","","01_sicredi","c","custo"],["d","2026-01",20,"Compra de ativo imobilizado","",633.33,1,"IVAN RODRIGO FALICO","","01_sicredi","c","investimento"],["d","2026-01",20,"Salários e encargos","",410.93,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-01",20,"Salários e encargos","",294.66,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-01",21,"Frete para compra de material","",300,1,"BRUNO HENRIQUE DE LIMA","","01_sicredi","c","despesa"],["d","2026-01",21,"Despesas com frete para devolução e reenvio","",698.91,1,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-01",21,"Compra de matéria-prima","",4683.71,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-01",22,"Compra de insumos para expedição","",8,1,"SUPERMERCADO SÃO LUIS","","01_sicredi","c","custo"],["d","2026-01",22,"Compra de insumos para expedição","",21.9,1,"ALINE C. E. DE OLIVEIRA","","01_sicredi","c","custo"],["d","2026-01",22,"Comissões","",275.16,1,"TIAGO SANTOS MOURA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-01",23,"Despesas administrativas","",170,1,"ANDERSON BRASILEIRO - BRASIL","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-01",22,"Luz, água e outros","",348.99,1,"ELEKTRO REDES S.A.","Despesas operacionais","01_sicredi","c","despesa"],["d","2026-01",25,"Compra de insumos para expedição","",2493.26,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","01_sicredi","c","custo"],["d","2026-01",26,"Compra de matéria-prima","",100,1,"GOLDEN PLASTIC COMERCIO E SERVICOS LTDA","","01_sicredi","c","custo"],["d","2026-01",26,"Despesas com outros serviços contratados","",60,1,"C B L CORREA LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-01",27,"Compra de matéria-prima","",8760,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2026-01",27,"Compra de mercadorias","",3545,1,"ENNATERRA AROMATIZADORES LTDA","","01_sicredi","c","custo"],["d","2026-01",28,"Frete para compra de material","",90,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-01",28,"Compra de matéria-prima","",6150,1,"FORMULARIOS COVOLAN LTDA.","","01_sicredi","c","custo"],["d","2026-01",28,"Compra de matéria-prima","",4683.71,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-01",29,"Frete para compra de material","",250,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","","01_sicredi","c","despesa"],["d","2026-01",29,"Outros gastos com publicidade","",541.41,1,"PRINTI - FM IMPRESSOS PERSONALIZADOS LTDA.","Marketing e publicidade","01_sicredi","c","despesa"],["d","2026-01",30,"Serviços de sistema de gestão","",149,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-01",30,"Frete para compra de material","",316.4,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","","01_sicredi","c","despesa"],["d","2026-01",30,"Compra de matéria-prima","",1928.63,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-01",30,"Impostos e Taxas","",812.02,1,"SECRETARIA DA FAZENDA E PLANEJAMENTO","Despesas Financeiras","01_sicredi","c","despesa"],["d","2026-02",2,"Despesas administrativas","",6.99,1,"LOPES SUPERMERCADOS LTDA - (PROENÇA)","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-02",2,"Despesas administrativas","",18.99,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-02",2,"Luz, água e outros","",144.25,1,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","01_sicredi","c","despesa"],["d","2026-02",3,"Frete para compra de material","",485,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-02",3,"Compra de matéria-prima","",2642.43,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2026-02",4,"Compra de matéria-prima","",2325,1,"FORMULARIOS COVOLAN LTDA.","","01_sicredi","c","custo"],["d","2026-02",4,"Compra de matéria-prima","",504.13,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","01_sicredi","c","custo"],["d","2026-02",4,"Compra de matéria-prima","",6150,1,"FORMULARIOS COVOLAN LTDA.","","01_sicredi","c","custo"],["d","2026-02",4,"Compra de matéria-prima","",4683.71,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-02",4,"Compra de matéria-prima","",6150,1,"FORMULARIOS COVOLAN LTDA.","","01_sicredi","c","custo"],["d","2026-02",4,"Compra de matéria-prima","",2325,1,"FORMULARIOS COVOLAN LTDA.","","01_sicredi","c","custo"],["d","2026-02",4,"Compra de matéria-prima","",6150,1,"FORMULARIOS COVOLAN LTDA.","","01_sicredi","c","custo"],["d","2026-02",4,"Compra de matéria-prima","",6150,1,"FORMULARIOS COVOLAN LTDA.","","01_sicredi","c","custo"],["d","2026-02",5,"Despesas administrativas","",1057.71,1,"PREFEITURA MUNICIPAL DE AURIFLAMA","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-02",6,"Serviços de sistema de gestão","",270,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-02",6,"Despesas com materiais de consumo","",31.5,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-02",6,"Compra de matéria-prima","",1928.63,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-02",6,"Compra de matéria-prima","",4240.8,1,"GOLDEN PLASTIC COMERCIO E SERVICOS LTDA","","01_sicredi","c","custo"],["d","2026-02",6,"Custo com horas extras setor de produção","",320,1,"ISABELA TENORIO BARONE","","01_sicredi","c","custo"],["d","2026-02",6,"Custo com horas extras setor de produção","",93.25,1,"RAFAEL DOS SANTOS PILIELO","","01_sicredi","c","custo"],["d","2026-02",6,"Custo com horas extras setor de produção","",118.23,1,"POLYANA CECILIA ALMEIDA FERREIRA","","01_sicredi","c","custo"],["d","2026-02",6,"Custo com horas extras setor de produção","",69.45,1,"KARINA DE LIMA TENORIO","","01_sicredi","c","custo"],["d","2026-02",6,"Custo com horas extras setor de produção","",49.79,1,"MARIA LAURA DE MELLO LINO","","01_sicredi","c","custo"],["d","2026-02",5,"Vale-Refeição (VR)","",200,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-02",5,"Vale-Refeição (VR)","",137.68,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-02",5,"Vale-Refeição (VR)","",179,1,"KARINA DE LIMA TENORIO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-02",5,"Vale-Refeição (VR)","",200,1,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-02",5,"Vale-Refeição (VR)","",200,1,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-02",5,"Vale-Refeição (VR)","",200,1,"SAMUEL ANTONIO DE SOUZA MARTINS","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-02",6,"Outras despesas (Não considerar DRE)","",2008.12,1,"MARIA LAURA DE MELLO LINO","Despesas não operacionais","01_sicredi","c","despesa"],["d","2026-02",4,"Salários e encargos","",2008.12,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-02",6,"Salários e encargos","",1662.32,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-02",6,"Salários e encargos","",2200,1,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-02",6,"Salários e encargos","",1621,1,"KARINA DE LIMA TENORIO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-02",8,"Compra de matéria-prima","",4847.59,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","01_sicredi","c","custo"],["d","2026-02",9,"Serviços de sistema de gestão","",228.52,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-02",10,"Frete para compra de material","",350,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-02",10,"Frete para compra de material","",80,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-02",10,"Reembolsos por fora de marketplaces","",25,1,"REEMBOLSOS","Despesas operacionais","01_sicredi","c","despesa"],["d","2026-02",10,"Despesas com aluguéis para uso","",2300,1,"PAULO CESAR LOPES (ROPE)","Despesas com aluguéis","01_sicredi","c","despesa"],["d","2026-02",10,"Despesas com aluguéis para uso","",200,1,"PAULO CESAR LOPES (ROPE)","Despesas com aluguéis","01_sicredi","c","despesa"],["d","2026-02",10,"Despesas com materiais de consumo","",842.25,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-02",10,"Despesas administrativas","",70,1,"UYARA DISTRIBUIDORA LTDA","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-02",10,"Bens de consumo com publicidade","",87.8,1,"MERCADO LIVRE","Marketing e publicidade","01_sicredi","c","despesa"],["d","2026-02",10,"Compra de matéria-prima","",4287.81,1,"SMART PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2026-02",10,"Compra de matéria-prima","",4631.28,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-02",10,"Compra de matéria-prima","",2191.72,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-02",10,"Compra de matéria-prima","",250,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2026-02",10,"Compra de matéria-prima","",390.81,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2026-02",10,"Compra de matéria-prima","",2642.43,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2026-02",10,"Compra de matéria-prima","",5790,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2026-02",10,"Compra de ativo imobilizado","",360,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","","01_sicredi","c","investimento"],["d","2026-02",10,"Despesas com outros serviços contratados","",9.9,1,"MERCADO LIVRE","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-02",10,"Compra de insumos para produção","",47,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2026-02",10,"Luz, água e outros","",69,1,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","01_sicredi","c","despesa"],["d","2026-02",10,"Outros gastos com publicidade","",174.57,1,"PRINTI - FM IMPRESSOS PERSONALIZADOS LTDA.","Marketing e publicidade","01_sicredi","c","despesa"],["d","2026-02",10,"Despesas com alimentação","",30.5,1,"Vania Gomes Massaro","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-02",10,"Despesas com alimentação","",308,1,"ORNATA DOMUS COMPANY LTDA","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-02",11,"Compra de matéria-prima","",3106.96,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2026-02",11,"Compra de matéria-prima","",4683.71,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-02",11,"Compra de mercadorias","",6681,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","01_sicredi","c","custo"],["d","2026-02",11,"Outras despesas (Não considerar DRE)","",7000,1,"ORNATA DOMUS COMPANY LTDA","Despesas não operacionais","03_inter","c","despesa"],["d","2026-02",7,"Serviços de sistema de gestão","",24.91,1,"SERASA S.A.","Despesas com serviços","03_inter","c","despesa"],["d","2026-02",7,"Serviços de sistema de gestão","",40.9,1,"TINY ERP","Despesas com serviços","03_inter","c","despesa"],["d","2026-02",7,"Serviços de sistema de gestão","",199.95,1,"JODDA TECNOLOGIA E SOLUCOES LTDA","Despesas com serviços","03_inter","c","despesa"],["d","2026-02",7,"Serviços de sistema de gestão","",47.66,1,"TINY ERP","Despesas com serviços","03_inter","c","despesa"],["d","2026-02",7,"Serviços de sistema de gestão","",228.52,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","03_inter","c","despesa"],["d","2026-02",7,"Serviços de sistema de gestão","",32.32,1,"TINY ERP","Despesas com serviços","03_inter","c","despesa"],["d","2026-02",13,"Frete para compra de material","",80,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-02",7,"Despesas com materiais de consumo","",552.41,1,"SHOPEE","Despesas administrativas","03_inter","c","despesa"],["d","2026-02",12,"Despesas administrativas","",145.36,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-02",7,"Despesas administrativas","",30,1,"CLARO S.A.","Despesas administrativas","03_inter","c","despesa"],["d","2026-02",7,"Compra de matéria-prima","",376.78,1,"TILIFORM INDUSTRIA GRAFICA - EM RECUPERACAO JUDICIAL","","03_inter","c","custo"],["d","2026-02",7,"Compra de matéria-prima","",514.47,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","03_inter","c","custo"],["d","2026-02",7,"Compra de insumos para expedição","",1172.5,1,"ECOMPACK EMBALAGENS PARA ECOMMERCE LTDA","","03_inter","c","custo"],["d","2026-02",7,"Despesas com ADS","",1500,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-02",7,"Despesas com ADS","",1000,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-02",7,"Despesas com ADS","",2300,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-02",7,"Despesas com ADS","",5000,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-02",7,"Despesas com ADS","",1000,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-02",7,"Despesas com ADS","",1500,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-02",7,"Despesas com ADS","",1500,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-02",7,"Compra de ativo imobilizado","",1025,1,"IVAN RODRIGO FALICO","","03_inter","c","investimento"],["d","2026-02",7,"Compra de ativo imobilizado","",335.5,1,"FORROS E DIVISORIAS RIO PRETO LTDA","","03_inter","c","investimento"],["d","2026-02",7,"Compra de ativo imobilizado","",405,1,"FORROS E DIVISORIAS RIO PRETO LTDA","","03_inter","c","investimento"],["d","2026-02",7,"Compra de insumos para produção","",175.83,1,"TIQUETA MATERIAL IMPRESSO LTDA","","03_inter","c","custo"],["d","2026-02",7,"Outras despesas (Não considerar DRE)","",442.85,1,"AMAZON","Despesas não operacionais","03_inter","c","despesa"],["d","2026-02",7,"Outras despesas (Não considerar DRE)","",636.28,1,"AMAZON","Despesas não operacionais","03_inter","c","despesa"],["d","2026-02",13,"Frete para compra de material","",300,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","","01_sicredi","c","despesa"],["d","2026-02",13,"Compra de matéria-prima","",1928.63,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-02",13,"Outras despesas","",200,1,"JOSE LUIZ MARINO JUNIOR","Despesas não operacionais","01_sicredi","c","despesa"],["d","2026-02",13,"Compra de ativo imobilizado","",600,1,"JOSE LUIZ MARINO JUNIOR","","01_sicredi","c","investimento"],["d","2026-02",16,"Frete para compra de material","",485,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-02",15,"Frete para compra de material","",878.58,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","","01_sicredi","c","despesa"],["d","2026-02",16,"Serviços de contabilidade","",1000,1,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-02",16,"Serviços de contabilidade","",450,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-02",18,"Despesas com outros serviços contratados","",5054.3,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-02",17,"Compra de matéria-prima","",2191.72,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-02",17,"Compra de matéria-prima","",2643.21,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2026-02",18,"Despesas com materiais de consumo","",52.99,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-02",18,"Compra de matéria-prima","",10680,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2026-02",18,"Compra de matéria-prima","",900,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2026-02",18,"Compra de matéria-prima","",3106.96,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2026-02",18,"Compra de matéria-prima","",4683.71,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-02",18,"Compra de mercadorias","",5280,1,"ENNATERRA AROMATIZADORES LTDA","","01_sicredi","c","custo"],["d","2026-02",18,"Compra de ativo imobilizado","",1200,1,"VALNEI ALESSANDRO DE OLIVEIRA - ELETRICISTA","","01_sicredi","c","investimento"],["d","2026-02",18,"Comissões","",285.47,1,"TIAGO SANTOS MOURA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-02",19,"Compra de ativo imobilizado","",1150,1,"EDERSON ROGERIO FERREIRA - DIVISÓRIAS","","01_sicredi","c","investimento"],["d","2026-02",19,"Despesas com outros serviços contratados","",1412,1,"MARRI CONSULTORIA EMPRESARIAL LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-02",20,"Serviços contratados para marketing","",700,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Marketing e publicidade","01_sicredi","c","despesa"],["d","2026-02",20,"Frete para compra de material","",95,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-02",20,"Frete para compra de material","",40,1,"ROBSON DE LIMA DA SILVA - FRETE","","01_sicredi","c","despesa"],["d","2026-02",20,"Frete para compra de material","",250,1,"ROBSON DE LIMA DA SILVA - FRETE","","01_sicredi","c","despesa"],["d","2026-02",20,"Despesas administrativas","",10962.34,1,"TABELIAO DE NOTAS E DE PROTESTO DE LETRAS E TITULOS DA COMARCA DE AURIFLAMA-SP","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-02",20,"Compra de matéria-prima","",744.98,1,"SENIR EMBALAGENS LTDA","","01_sicredi","c","custo"],["d","2026-02",20,"Compra de matéria-prima","",1743.91,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-02",20,"Compra de matéria-prima","",1928.63,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-02",20,"Compra de matéria-prima","",1229.95,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2026-02",20,"Impostos sobre receita","",1326.58,1,"SIMPLES NACIONAL","","01_sicredi","c","custo"],["d","2026-02",20,"Luz, água e outros","",352.74,1,"ELEKTRO REDES S.A.","Despesas operacionais","01_sicredi","c","despesa"],["d","2026-02",19,"Salários e encargos","",318.4,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-02",20,"Salários e encargos","",309.56,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-02",23,"Frete para compra de material","",800,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","despesa"],["d","2026-02",23,"Despesas com frete para devolução e reenvio","",622.62,1,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-02",23,"Compra de matéria-prima","",14475,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2026-02",23,"Compra de matéria-prima","",2909.29,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","01_sicredi","c","custo"],["d","2026-02",23,"Compra de matéria-prima","",3303.21,1,"SENIR EMBALAGENS LTDA","","01_sicredi","c","custo"],["d","2026-02",23,"Compra de mercadorias","",5280,1,"ENNATERRA AROMATIZADORES LTDA","","01_sicredi","c","custo"],["d","2026-02",23,"Custo com horas extras setor de produção","",753.33,1,"DANIELLY DE SOUSA SILVA","","01_sicredi","c","custo"],["d","2026-02",24,"Frete para compra de material","",60,1,"CAMILA OLIMPIO CARMONA","","01_sicredi","c","despesa"],["d","2026-02",24,"Despesas administrativas","",2174.55,1,"TABELIAO DE NOTAS E DE PROTESTO DE LETRAS E TITULOS DA COMARCA DE AURIFLAMA-SP","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-02",24,"Compra de matéria-prima","",2191.72,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-02",24,"Compra de insumos para expedição","",132,1,"AMORIM LISBOA LTDA - D'CORACAO VISUAL","","01_sicredi","c","custo"],["d","2026-02",24,"Compra de insumos para expedição","",642,1,"VALDERI FERREIRA BARBOSA JUNIOR - IMPAKTO VISUAL","","01_sicredi","c","custo"],["d","2026-02",24,"Vestuário de trabalho","",733.5,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-02",25,"Frete para compra de material","",300,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","","01_sicredi","c","despesa"],["d","2026-02",25,"Compra de matéria-prima","",3107.9,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2026-02",26,"Compra de insumos para expedição","",753.76,1,"TOLOY COMERCIO DE EMBALAGENS LTDA.","","01_sicredi","c","custo"],["d","2026-02",27,"Despesas administrativas","",30,1,"OUTSIDE THE BOX LTDA","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-02",27,"Compra de matéria-prima","",1743.91,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-02",27,"Compra de matéria-prima","",1229.95,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2026-02",27,"Impostos e Taxas","",471.15,1,"SECRETARIA DA FAZENDA E PLANEJAMENTO","Despesas Financeiras","01_sicredi","c","despesa"],["d","2026-02",28,"Frete para compra de material","",1096.02,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","","01_sicredi","c","despesa"],["d","2026-02",4,"Compra de matéria-prima","",6150,1,"FORMULARIOS COVOLAN LTDA.","","01_sicredi","c","custo"],["d","2026-03",4,"Despesas com alimentação","",196,1,"MARLENE DE SOUZA SILVA LTDA - PADARIA NOVA OPÇÃO","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-03",2,"Serviços de sistema de gestão","",149,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-03",2,"Frete para compra de material","",60,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-03",2,"Frete para compra de material","",1200,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-03",2,"Despesas administrativas","",25.99,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-03",2,"Compra de matéria-prima","",8689.49,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-03",2,"Compra de ativo imobilizado","",510,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","investimento"],["d","2026-03",2,"Luz, água e outros","",165.04,1,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","01_sicredi","c","despesa"],["d","2026-03",3,"Compra de matéria-prima","",2191.72,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-03",4,"Frete para compra de material","",250,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","","01_sicredi","c","despesa"],["d","2026-03",4,"Compra de matéria-prima","",2066.65,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2026-03",4,"Compra de matéria-prima","",4287.81,1,"SMART PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2026-03",4,"Compra de ativo imobilizado","",999,1,"MERCADO LIVRE","","01_sicredi","c","investimento"],["d","2026-03",5,"Despesas administrativas","",70,1,"UYARA DISTRIBUIDORA LTDA","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-03",5,"Compra de matéria-prima","",1275,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-03",5,"Compra de insumos para produção","",504,1,"TIQUETA MATERIAL IMPRESSO LTDA","","01_sicredi","c","custo"],["d","2026-03",5,"Despesas com benefícios aos sócios e diretores","",200,1,"SAMUEL ANTONIO DE SOUZA MARTINS","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-03",5,"Despesas com benefícios aos sócios e diretores","",200,1,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-03",6,"Despesas com materiais de consumo","",36.95,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-03",6,"Compra de matéria-prima","",504.13,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","01_sicredi","c","custo"],["d","2026-03",6,"Compra de matéria-prima","",1230.31,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2026-03",6,"Compra de insumos para expedição","",3765.71,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","01_sicredi","c","custo"],["d","2026-03",6,"Custo com horas extras setor de produção","",161.25,1,"RAFAEL DOS SANTOS PILIELO","","01_sicredi","c","custo"],["d","2026-03",6,"Custo com horas extras setor de produção","",24.55,1,"LEANDRO MARTINS BELCHIOR DA SILVA","","01_sicredi","c","custo"],["d","2026-03",6,"Custo com horas extras setor de produção","",31.7,1,"KARINA DE LIMA TENORIO","","01_sicredi","c","custo"],["d","2026-03",6,"Custo com horas extras setor de produção","",46.57,1,"MARIA LAURA DE MELLO LINO","","01_sicredi","c","custo"],["d","2026-03",6,"Custo com horas extras setor de produção","",238.5,1,"POLYANA CECILIA ALMEIDA FERREIRA","","01_sicredi","c","custo"],["d","2026-03",6,"Custo com horas extras setor de produção","",130.91,1,"ISABELA TENORIO BARONE","","01_sicredi","c","custo"],["d","2026-03",5,"Vale-Refeição (VR)","",137.68,1,"KARINA DE LIMA TENORIO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-03",5,"Vale-Refeição (VR)","",200,1,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-03",5,"Vale-Refeição (VR)","",137.68,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-03",5,"Vale-Refeição (VR)","",200,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-03",6,"Salários e encargos","",450,1,"KATHEREIN CRISTINA DE SOUSA CUSTODIO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-03",6,"Salários e encargos","",1662.32,1,"KARINA DE LIMA TENORIO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-03",6,"Salários e encargos","",1270.53,1,"ISABELA TENORIO BARONE","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-03",6,"Salários e encargos","",450,1,"LEANDRO MARTINS BELCHIOR DA SILVA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-03",6,"Salários e encargos","",1662.32,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-03",6,"Salários e encargos","",2008.12,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-03",6,"Salários e encargos","",2200,1,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-03",20,"Despesa com férias de funcionário","",2669.29,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-03",8,"Compra de matéria-prima","",4847.59,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","01_sicredi","c","custo"],["d","2026-03",9,"Serviços de sistema de gestão","",270,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-03",9,"Serviços de sistema de gestão","",228.52,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-03",9,"Frete para compra de material","",135,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-03",9,"Despesas com outros serviços contratados","",80,1,"VANDERSON BARALDI GABRIEL","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-03",9,"Despesas com outros serviços contratados","",30,1,"C B L CORREA LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-03",10,"Despesas com aluguéis para uso","",2500,1,"PAULO CESAR LOPES (ROPE)","Despesas com aluguéis","01_sicredi","c","despesa"],["d","2026-03",10,"Despesas com materiais de consumo","",283.84,1,"MERCADO LIVRE","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-03",10,"Despesas com materiais de consumo","",270,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-03",10,"Despesas com materiais de consumo","",189,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-03",10,"Compra de matéria-prima","",2570.25,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2026-03",10,"Compra de matéria-prima","",2191.72,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-03",10,"Compra de insumos para expedição","",490,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2026-03",10,"Compra de ativo imobilizado","",472.26,1,"MERCADO LIVRE","","01_sicredi","c","investimento"],["d","2026-03",10,"Compra de ativo imobilizado","",360,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","","01_sicredi","c","investimento"],["d","2026-03",10,"Despesas com outros serviços contratados","",9.9,1,"MERCADO LIVRE","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-03",10,"Compra de insumos para produção","",320,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2026-03",10,"Compra de insumos para produção","",136.92,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2026-03",10,"Luz, água e outros","",69,1,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","01_sicredi","c","despesa"],["d","2026-03",11,"Compra de matéria-prima","",5608.8,1,"GOLDEN PLASTIC COMERCIO E SERVICOS LTDA","","01_sicredi","c","custo"],["d","2026-03",11,"Compra de matéria-prima","",2066.65,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2026-03",11,"Compra de mercadorias","",9879,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","01_sicredi","c","custo"],["d","2026-03",11,"Custo com horas extras setor de produção","",338.41,1,"KATHEREIN CRISTINA DE SOUSA CUSTODIO","","01_sicredi","c","custo"],["d","2026-03",11,"Despesas com outros serviços contratados","",100,1,"MARCELO MONTANARO TENORIO","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-03",11,"Comissões","",395.5,1,"TIAGO SANTOS MOURA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-03",10,"Serviços de sistema de gestão","",40.9,1,"TINY ERP","Despesas com serviços","03_inter","c","despesa"],["d","2026-03",10,"Serviços de sistema de gestão","",24.91,1,"SERASA S.A.","Despesas com serviços","03_inter","c","despesa"],["d","2026-03",10,"Serviços de sistema de gestão","",32.32,1,"TINY ERP","Despesas com serviços","03_inter","c","despesa"],["d","2026-03",10,"Serviços de sistema de gestão","",199.95,1,"JODDA TECNOLOGIA E SOLUCOES LTDA","Despesas com serviços","03_inter","c","despesa"],["d","2026-03",10,"Despesas administrativas","",30,1,"CLARO S.A.","Despesas administrativas","03_inter","c","despesa"],["d","2026-03",12,"Compra de matéria-prima","",5820,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2026-03",10,"Compra de matéria-prima","",514.46,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","03_inter","c","custo"],["d","2026-03",10,"Compra de insumos para expedição","",1172.5,1,"ECOMPACK EMBALAGENS PARA ECOMMERCE LTDA","","03_inter","c","custo"],["d","2026-03",10,"Despesas com ADS","",1000,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-03",10,"Despesas com ADS","",1500,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-03",10,"Despesas com ADS","",2300,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-03",10,"Despesas com ADS","",2000,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-03",10,"Despesas com ADS","",5000,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-03",10,"Despesas com ADS","",3000,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-03",10,"Despesas com ADS","",2000,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-03",10,"Despesas com ADS","",1000,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-03",10,"Compra de ativo imobilizado","",1025,1,"IVAN RODRIGO FALICO","","03_inter","c","investimento"],["d","2026-03",10,"Compra de ativo imobilizado","",335.5,1,"FORROS E DIVISORIAS RIO PRETO LTDA","","03_inter","c","investimento"],["d","2026-03",10,"Compra de insumos para produção","",175.83,1,"TIQUETA MATERIAL IMPRESSO LTDA","","03_inter","c","custo"],["d","2026-03",10,"Outras despesas (Não considerar DRE)","",138.7,1,"AMAZON","Despesas não operacionais","03_inter","c","despesa"],["d","2026-03",13,"Frete para compra de material","",135,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-03",13,"Frete para compra de material","",160,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-03",13,"Frete para compra de material","",17.35,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","despesa"],["d","2026-03",13,"Frete para compra de material","",10.6,1,"VIARONDON - PEDÁGIO","","01_sicredi","c","despesa"],["d","2026-03",13,"Despesas administrativas","",104.7,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-03",13,"Compra de matéria-prima","",960,1,"FASIL INDUSTRIA E COMERCIO DE PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2026-03",13,"Compra de matéria-prima","",3035.38,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-03",15,"Frete para compra de material","",2461.21,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","","01_sicredi","c","despesa"],["d","2026-03",15,"Frete para compra de material","",313.33,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","","01_sicredi","c","despesa"],["d","2026-03",16,"Serviços de contabilidade","",1000,1,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-03",15,"Serviços de contabilidade","",450,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-03",16,"Despesas com outros serviços contratados","",4298.88,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-03",16,"Frete para compra de material","",105,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-03",16,"Pagamento de empréstimo","",5498.75,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","financiamento"],["d","2026-03",16,"Compra de insumos para produção","",153.9,1,"JANAINA GIOLO COMERCIO - FERAX","","01_sicredi","c","custo"],["d","2026-03",17,"Compra de matéria-prima","",2570.25,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2026-03",18,"Compra de matéria-prima","",1060,1,"SMART PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2026-03",18,"Compra de matéria-prima","",2067.28,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2026-03",18,"Compra de matéria-prima","",152,1,"D MARTINEZ COMERCIO DE CORANTES LTDA - POWER CORANTES","","01_sicredi","c","custo"],["d","2026-03",18,"Compra de matéria-prima","",11640,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2026-03",18,"Compra de insumos para expedição","",734.16,1,"TOLOY COMERCIO DE EMBALAGENS LTDA.","","01_sicredi","c","custo"],["d","2026-03",20,"Frete para compra de material","",250,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","","01_sicredi","c","despesa"],["d","2026-03",19,"Compra de matéria-prima","",5224.45,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","01_sicredi","c","custo"],["d","2026-03",20,"Serviços contratados para marketing","",700,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Marketing e publicidade","01_sicredi","c","despesa"],["d","2026-03",20,"Frete para compra de material","",385,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-03",20,"Despesas com materiais de consumo","",44.16,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-03",20,"Despesas administrativas","",39.95,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-03",20,"Compra de insumos para expedição","",962,1,"VALDERI FERREIRA BARBOSA JUNIOR - IMPAKTO VISUAL","","01_sicredi","c","custo"],["d","2026-03",20,"Impostos sobre receita","",2754.02,1,"SIMPLES NACIONAL","","01_sicredi","c","custo"],["d","2026-03",20,"Compra de insumos para produção","",25,1,"DROGARIA BRASIL - FARMÁCIA","","01_sicredi","c","custo"],["d","2026-03",20,"Outras despesas (Não considerar DRE)","",1000,1,"JONATHAN ROQUE DE SOUZA","Despesas não operacionais","01_sicredi","c","despesa"],["d","2026-03",20,"Salários e encargos","",496.71,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-03",20,"Salários e encargos","",568,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-03",21,"Compra de insumos para expedição","",3765.71,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","01_sicredi","c","custo"],["d","2026-03",23,"Despesas com frete para devolução e reenvio","",498.46,1,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-03",24,"Frete para compra de material","",150.33,1,"FLASHMEN PASSAGENS E ENCOMENDAS LTDA","","01_sicredi","c","despesa"],["d","2026-03",24,"Compra de matéria-prima","",6056.05,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-03",24,"Compra de matéria-prima","",2571.03,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2026-03",24,"Compra de matéria-prima","",1245.12,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2026-03",24,"Despesas com outros serviços contratados","",750,1,"ELEN FERNANDA CONTE - ARQUITETA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-03",24,"Luz, água e outros","",424.33,1,"ELEKTRO REDES S.A.","Despesas operacionais","01_sicredi","c","despesa"],["d","2026-03",25,"Compra de matéria-prima","",4068.05,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","01_sicredi","c","custo"],["d","2026-03",25,"Compra de matéria-prima","",57.88,1,"SUPERMERCADO SÃO LUIS","","01_sicredi","c","custo"],["d","2026-03",25,"Compra de matéria-prima","",4193.33,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-03",27,"Despesas administrativas","",56,1,"UYARA DISTRIBUIDORA LTDA","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-02",4,"Compra de matéria-prima","",6150,1,"FORMULARIOS COVOLAN LTDA.","","01_sicredi","c","custo"],["d","2026-03",28,"Compra de insumos para expedição","",2105.9,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","01_sicredi","c","custo"],["d","2026-03",28,"Outras despesas (Não considerar DRE)","",350,1,"CRISTIANE SANCHES ROCAILKS","Despesas não operacionais","01_sicredi","c","despesa"],["d","2026-03",30,"Frete para compra de material","",497.16,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","","01_sicredi","c","despesa"],["d","2026-03",30,"Frete para compra de material","",763.65,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","","01_sicredi","c","despesa"],["d","2026-03",30,"Compra de matéria-prima","",1487.03,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-03",31,"Compra de matéria-prima","",1245.12,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2026-03",31,"Compra de matéria-prima","",295.64,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2026-03",31,"Impostos e Taxas","",477.48,1,"SECRETARIA DA FAZENDA E PLANEJAMENTO","Despesas Financeiras","01_sicredi","c","despesa"],["d","2026-03",31,"Outras despesas (Não considerar DRE)","",200,1,"SAMUEL ANTONIO DE SOUZA MARTINS","Despesas não operacionais","01_sicredi","c","despesa"],["d","2026-04",1,"Serviços de sistema de gestão","",149,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-04",1,"Frete para compra de material","",900,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-04",1,"Frete para compra de material","",45,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-04",1,"Frete para compra de material","",300,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-04",1,"Compra de matéria-prima","",4750.61,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-04",1,"Compra de matéria-prima","",4193.31,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-04",1,"Luz, água e outros","",182.52,1,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","01_sicredi","c","despesa"],["d","2026-04",6,"Despesas com alimentação","",427,1,"MARLENE DE SOUZA SILVA LTDA - PADARIA NOVA OPÇÃO","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-04",2,"Despesas com materiais de consumo","",104.7,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-04",2,"Despesas administrativas","",1998.61,1,"CETESB COMPANHIA AMBIENTAL DO ESTADO DE SAO PAULO","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-04",3,"Compra de matéria-prima","",2314.84,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2026-04",3,"Compra de matéria-prima","",8200.57,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2026-04",6,"Compra de insumos para expedição","",780,1,"MUNDO GIBA LTDA - MUNDO GB","","01_sicredi","c","custo"],["d","2026-04",4,"Outras despesas (Não considerar DRE)","",150,1,"JONATHAN ROQUE DE SOUZA","Despesas não operacionais","01_sicredi","c","despesa"],["d","2026-04",5,"Compra de matéria-prima","",504.12,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","01_sicredi","c","custo"],["d","2026-04",5,"Compra de insumos para expedição","",3765.7,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","01_sicredi","c","custo"],["d","2026-04",6,"Despesas administrativas","",2500,1,"EXTINFER - DANILO ANTONIO COSTA","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-04",6,"Compra de matéria-prima","",1487.03,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-04",6,"Direitos a receber","",30,1,"SICREDI","","01_sicredi","c","investimento"],["d","2026-04",7,"Salários e encargos","",1729.86,1,"ISABELA TENORIO BARONE","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-04",7,"Salários e encargos","",1729.86,1,"LEANDRO MARTINS BELCHIOR DA SILVA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-04",7,"Despesas com benefícios aos sócios e diretores","",200,1,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-04",7,"Despesas com benefícios aos sócios e diretores","",200,1,"SAMUEL ANTONIO DE SOUZA MARTINS","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-04",7,"Serviços de sistema de gestão","",228.52,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-04",7,"Compra de matéria-prima","",1245.5,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2026-04",8,"Compra de matéria-prima","",5860,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2026-04",8,"Compra de matéria-prima","",5167.36,1,"SMART PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2026-04",7,"Compra de matéria-prima","",295.64,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2026-04",7,"Custo com horas extras setor de produção","",83.18,1,"KARINA DE LIMA TENORIO","","01_sicredi","c","custo"],["d","2026-04",7,"Custo com horas extras setor de produção","",144.5,1,"RAFAEL DOS SANTOS PILIELO","","01_sicredi","c","custo"],["d","2026-04",7,"Custo com horas extras setor de produção","",194.11,1,"LEANDRO MARTINS BELCHIOR DA SILVA","","01_sicredi","c","custo"],["d","2026-04",7,"Custo com horas extras setor de produção","",69.27,1,"ISABELA TENORIO BARONE","","01_sicredi","c","custo"],["d","2026-04",7,"Vale-Refeição (VR)","",137.68,1,"LEANDRO MARTINS BELCHIOR DA SILVA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-04",7,"Vale-Refeição (VR)","",137.68,1,"KARINA DE LIMA TENORIO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-04",7,"Vale-Refeição (VR)","",137.68,1,"ISABELA TENORIO BARONE","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-04",7,"Vale-Refeição (VR)","",137.68,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-04",7,"Vale-Refeição (VR)","",200,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-04",7,"Vale-Refeição (VR)","",200,1,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-04",8,"Despesas com alimentação","",18.3,1,"KARINA DE LIMA TENORIO","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-04",7,"Salários e encargos","",20,1,"ISABELA TENORIO BARONE","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-04",7,"Salários e encargos","",1660.17,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-04",7,"Salários e encargos","",1110,1,"VITORIA CRISTINA TANGODA MAIA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-04",7,"Salários e encargos","",1662.32,1,"KARINA DE LIMA TENORIO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-04",7,"Salários e encargos","",468.65,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-04",7,"Salários e encargos","",2200,1,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-04",8,"Frete para compra de material","",350,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","","01_sicredi","c","despesa"],["d","2026-04",8,"Compra de matéria-prima","",4193.31,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-04",8,"Compra de matéria-prima","",4750.61,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-04",8,"Compra de matéria-prima","",7286.16,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-04",8,"Despesas com outros serviços contratados","",300,1,"CLAUDOMIRO GONÇALVES NOGUEIRA - PEDREIRO","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-04",9,"Impostos e Taxas","",147.53,1,"PREFEITURA MUNICIPAL DE AURIFLAMA","Despesas Financeiras","01_sicredi","c","despesa"],["d","2026-04",9,"Despesas com outros serviços contratados","",130.64,1,"CONSELHO DE ARQUITETURA E URBANISMO DE SAO PAULO (CAU-SP)","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-04",13,"Despesas com aluguéis para uso","",2500,1,"PAULO CESAR LOPES (ROPE)","Despesas com aluguéis","caixa_dinheiro","c","despesa"],["d","2026-04",10,"Despesas com materiais de consumo","",360,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-04",10,"Despesas com materiais de consumo","",3.2,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-04",10,"Despesas com materiais de consumo","",203.34,1,"MERCADO LIVRE","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-04",10,"Despesas com materiais de consumo","",260.49,1,"MERCADO LIVRE","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-04",10,"Despesas com materiais de consumo","",86.57,1,"MERCADO LIVRE","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-04",10,"Despesas com materiais de consumo","",57,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-04",10,"Despesas com materiais de consumo","",24.99,1,"MERCADO LIVRE","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-04",10,"Despesas com materiais de consumo","",189.99,1,"MERCADO LIVRE","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-04",10,"Despesas com materiais de consumo","",194.5,1,"MERCADO LIVRE","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-04",10,"Despesas administrativas","",500,1,"EXTINFER - DANILO ANTONIO COSTA","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-04",10,"Despesas administrativas","",39,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-04",10,"Compra de matéria-prima","",8200.57,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2026-04",10,"Compra de matéria-prima","",2314.84,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2026-04",10,"Compra de insumos para expedição","",498.2,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2026-04",10,"Compra de ativo imobilizado","",472.26,1,"MERCADO LIVRE","","01_sicredi","c","investimento"],["d","2026-04",10,"Compra de ativo imobilizado","",360,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","","01_sicredi","c","investimento"],["d","2026-04",10,"Despesas com outros serviços contratados","",300,1,"ESCOBAR & CORREA LTDA - ESCOSEG","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-04",10,"Despesas com outros serviços contratados","",9.9,1,"MERCADO LIVRE","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-04",10,"Compra de insumos para produção","",50,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2026-04",10,"Outras despesas (Não considerar DRE)","",55,1,"GABRIEL FELIPE PEREIRA DA SILVA","Despesas não operacionais","01_sicredi","c","despesa"],["d","2026-04",10,"Outras despesas (Não considerar DRE)","",800,1,"CAMILA RODRIGUES CAJUELA LTDA","Despesas não operacionais","01_sicredi","c","despesa"],["d","2026-04",10,"Outras despesas (Não considerar DRE)","",100,1,"VITORIA LEAO DE LIMA","Despesas não operacionais","01_sicredi","c","despesa"],["d","2026-04",10,"Luz, água e outros","",69,1,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","01_sicredi","c","despesa"],["d","2026-04",10,"Salários e encargos","",400,1,"KARINA DE LIMA TENORIO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-04",12,"Serviços contratados para marketing","",1.47,1,"LINKTREE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-04",12,"Serviços de sistema de gestão","",162.09,1,"TINY ERP","Despesas com serviços","03_inter","c","despesa"],["d","2026-04",12,"Compra de matéria-prima","",969.77,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","03_inter","c","custo"],["d","2026-04",12,"Despesas com ADS","",500,1,"BR TIKTOK SHOP BRASIL LTDA","Marketing e publicidade","03_inter","c","despesa"],["d","2026-04",12,"Despesas com ADS","",500,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-04",12,"Despesas com ADS","",1000,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-04",12,"Serviços contratados para marketing","",42,1,"LINKTREE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-04",12,"Serviços contratados para marketing","",1.47,1,"LINKTREE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-04",12,"Serviços contratados para marketing","",42,1,"LINKTREE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-04",12,"Serviços de sistema de gestão","",399.9,1,"JODDA TECNOLOGIA E SOLUCOES LTDA","Despesas com serviços","03_inter","c","despesa"],["d","2026-04",12,"Serviços de sistema de gestão","",24.91,1,"SERASA S.A.","Despesas com serviços","03_inter","c","despesa"],["d","2026-04",12,"Serviços de sistema de gestão","",40.9,1,"TINY ERP","Despesas com serviços","03_inter","c","despesa"],["d","2026-04",12,"Serviços de sistema de gestão","",362.28,1,"TINY ERP","Despesas com serviços","03_inter","c","despesa"],["d","2026-04",12,"Serviços de sistema de gestão","",32.32,1,"TINY ERP","Despesas com serviços","03_inter","c","despesa"],["d","2026-04",12,"Despesas com materiais de consumo","",348.75,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2026-04",12,"Despesas com materiais de consumo","",469.74,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2026-04",12,"Despesas administrativas","",30,1,"CLARO S.A.","Despesas administrativas","03_inter","c","despesa"],["d","2026-04",12,"Compra de matéria-prima","",514.46,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","03_inter","c","custo"],["d","2026-04",12,"Compra de insumos para expedição","",2105.9,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","01_sicredi","c","custo"],["d","2026-04",12,"Compra de insumos para expedição","",1172.5,1,"ECOMPACK EMBALAGENS PARA ECOMMERCE LTDA","","03_inter","c","custo"],["d","2026-04",12,"Despesas com ADS","",119,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-04",12,"Despesas com ADS","",1000,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-04",12,"Despesas com ADS","",700,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-04",12,"Despesas com ADS","",5000,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-04",12,"Despesas com ADS","",2000,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-04",12,"Despesas com ADS","",1000,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-04",12,"Despesas com ADS","",100,1,"BR TIKTOK SHOP BRASIL LTDA","Marketing e publicidade","03_inter","c","despesa"],["d","2026-04",12,"Despesas com ADS","",1000,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-04",12,"Compra de ativo imobilizado","",335.5,1,"FORROS E DIVISORIAS RIO PRETO LTDA","","03_inter","c","investimento"],["d","2026-04",12,"Outras despesas (Não considerar DRE)","",50.59,1,"AMAZON","Despesas não operacionais","03_inter","c","despesa"],["d","2026-04",13,"Frete para compra de material","",100,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-04",13,"Despesas administrativas","",927.5,1,"GS1 BRASIL - ASSOCIACAO BRASILEIRA DE AUTOMACAO","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-04",13,"Compra de matéria-prima","",1487.03,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-04",10,"Compra de mercadorias","",1050,1,"CONCRENOG - PEDRO HENRIQUE NOGUEIRA DA SILVA","","01_sicredi","c","custo"],["d","2026-04",14,"Frete para compra de material","",150,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-04",14,"Frete para compra de material","",50,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","","01_sicredi","c","despesa"],["d","2026-04",14,"Frete para compra de material","",10.6,1,"VIARONDON - PEDÁGIO","","01_sicredi","c","despesa"],["d","2026-04",14,"Frete para compra de material","",10.6,1,"VIARONDON - PEDÁGIO","","01_sicredi","c","despesa"],["d","2026-04",14,"Compra de matéria-prima","",1510,1,"FASIL INDUSTRIA E COMERCIO DE PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2026-04",14,"Compra de matéria-prima","",9987.2,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-04",14,"Compra de matéria-prima","",3350.46,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","01_sicredi","c","custo"],["d","2026-04",14,"Compra de matéria-prima","",5800,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2026-04",14,"Compra de matéria-prima","",295.74,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2026-04",14,"Serviços de contabilidade","",350,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-04",14,"Compra de insumos para expedição","",731.92,1,"TOLOY COMERCIO DE EMBALAGENS LTDA.","","01_sicredi","c","custo"],["d","2026-04",14,"Outras despesas (Não considerar DRE)","",250,1,"LUIZ ANTONIO RONDINI VIEIRA","Despesas não operacionais","01_sicredi","c","despesa"],["d","2026-04",15,"Frete para compra de material","",781.12,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","","01_sicredi","c","despesa"],["d","2026-04",15,"Frete para compra de material","",1536,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","","01_sicredi","c","despesa"],["d","2026-04",16,"Pagamento de empréstimo","",4025.11,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","financiamento"],["d","2026-04",15,"Compra de matéria-prima","",4750.61,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-04",15,"Compra de matéria-prima","",4193.31,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-04",28,"Serviços de contabilidade","",1000,1,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-04",15,"Serviços de contabilidade","",450,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-04",16,"Compra de mercadorias","",6974.5,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","01_sicredi","c","custo"],["d","2026-04",14,"Compra de mercadorias","",3441,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","01_sicredi","c","custo"],["d","2026-04",24,"Despesas com outros serviços contratados","",8354.12,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-04",16,"Frete para compra de material","",200,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","","01_sicredi","c","despesa"],["d","2026-04",16,"Frete para compra de material","",150,1,"DANIEL BARBOSA DA SILVA","","01_sicredi","c","despesa"],["d","2026-04",16,"Taxas e Encargos Bancários","",168.5,1,"BRADESCO","Despesas Financeiras","02_bradesco","c","despesa"],["d","2026-04",17,"Compra de matéria-prima","",2315.53,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2026-04",17,"Compra de matéria-prima","",8203.03,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2026-04",20,"Serviços contratados para marketing","",700,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Marketing e publicidade","01_sicredi","c","despesa"],["d","2026-04",20,"Despesas com materiais de consumo","",262.4,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-04",20,"Despesas com materiais de consumo","",56,1,"UYARA DISTRIBUIDORA LTDA","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-04",20,"Compra de matéria-prima","",1487.03,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-04",20,"Impostos sobre receita","",9819.01,1,"SIMPLES NACIONAL","","01_sicredi","c","custo"],["d","2026-04",20,"Outras despesas (Não considerar DRE)","",200,1,"MURILO BISPO ZENELATO","Despesas não operacionais","01_sicredi","c","despesa"],["d","2026-04",20,"Salários e encargos","",727.43,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-04",20,"Salários e encargos","",890.77,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-04",22,"Despesas com frete para devolução e reenvio","",2095.75,1,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-04",21,"Compra de matéria-prima","",3350.47,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","01_sicredi","c","custo"],["d","2026-04",21,"Compra de matéria-prima","",9987.2,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-04",22,"Frete para compra de material","",100,1,"ROBSON DE LIMA DA SILVA - FRETE","","01_sicredi","c","despesa"],["d","2026-04",22,"Frete para compra de material","",180,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-04",22,"Compra de matéria-prima","",4750.61,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-04",22,"Compra de matéria-prima","",4193.31,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-04",22,"Outras despesas","",200,1,"MATHEUS SILVA RIBEIRO - COLETA SHOPEE","Despesas não operacionais","01_sicredi","c","despesa"],["d","2026-04",23,"Compra de matéria-prima","",5750,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2026-04",23,"Compra de matéria-prima","",300.13,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2026-04",23,"Compra de insumos para expedição","",1020.48,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","01_sicredi","c","custo"],["d","2026-04",23,"Compra de insumos para produção","",268.52,1,"JANAINA GIOLO COMERCIO - FERAX","","01_sicredi","c","custo"],["d","2026-04",23,"Compra de insumos para produção","",56.78,1,"NASSAR FERREIRA - HOPÇÃO","","01_sicredi","c","custo"],["d","2026-04",23,"Outras despesas (Não considerar DRE)","",200,1,"DENILSON GOMES JUNIOR","Despesas não operacionais","01_sicredi","c","despesa"],["d","2026-04",23,"Luz, água e outros","",419.23,1,"ELEKTRO REDES S.A.","Despesas operacionais","01_sicredi","c","despesa"],["d","2026-04",23,"Despesas com alimentação","",5,1,"AUTO POSTO CAÇULINHA","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-04",23,"Salários e encargos","",600,1,"ISABELA TENORIO BARONE","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-04",24,"Frete para compra de material","",150,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","despesa"],["d","2026-04",24,"Frete para compra de material","",400,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","despesa"],["d","2026-04",24,"Compra de insumos para expedição","",946.8,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","01_sicredi","c","custo"],["d","2026-04",24,"Despesas com outros serviços contratados","",750,1,"ELEN FERNANDA CONTE - ARQUITETA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-04",24,"Comissões","",615.8,1,"TIAGO SANTOS MOURA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-04",27,"Compra de matéria-prima","",1487.03,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-04",27,"Compra de mercadorias","",5300,1,"ENNATERRA AROMATIZADORES LTDA","","01_sicredi","c","custo"],["d","2026-04",27,"Compra de insumos para expedição","",2105.91,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","01_sicredi","c","custo"],["d","2026-04",28,"Frete para compra de material","",200,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-04",28,"Frete para compra de material","",400,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-04",28,"Compra de matéria-prima","",730,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-04",28,"Compra de matéria-prima","",1715.56,1,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-04",28,"Compra de matéria-prima","",9987.2,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-02",4,"Compra de matéria-prima","",6150,1,"FORMULARIOS COVOLAN LTDA.","","01_sicredi","c","custo"],["d","2026-04",28,"Impostos e Taxas","",2314.21,1,"SECRETARIA DA FAZENDA E PLANEJAMENTO","Despesas Financeiras","01_sicredi","c","despesa"],["d","2026-04",28,"Despesas com outros serviços contratados","",50,1,"C B L CORREA LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-04",28,"Compra de insumos para produção","",672,1,"TIQUETA MATERIAL IMPRESSO LTDA","","01_sicredi","c","custo"],["d","2026-04",28,"Outras despesas (Não considerar DRE)","",900,1,"VITORIA LEAO DE LIMA","Despesas não operacionais","01_sicredi","c","despesa"],["d","2026-04",30,"Frete para compra de material","",100,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-04",29,"Compra de matéria-prima","",4750.61,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-04",29,"Compra de matéria-prima","",5702.4,1,"GOLDEN PLASTIC COMERCIO E SERVICOS LTDA","","01_sicredi","c","custo"],["d","2026-04",29,"Outras despesas (Não considerar DRE)","",1000,1,"SUELI LOPES","Despesas não operacionais","01_sicredi","c","despesa"],["d","2026-04",30,"Frete para compra de material","",572.88,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","","01_sicredi","c","despesa"],["d","2026-04",30,"Frete para compra de material","",1088.37,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","","01_sicredi","c","despesa"],["d","2026-04",30,"Compra de matéria-prima","",300.13,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2026-04",30,"Compra de matéria-prima","",6227.36,1,"SMART PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2026-05",3,"Serviços de sistema de gestão","",149,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-05",4,"Compra de matéria-prima","",1481.5,1,"ELYPLAST RIO PRETO LTDA","","01_sicredi","c","custo"],["d","2026-05",4,"Compra de matéria-prima","",5550,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2026-05",4,"Outras despesas (Não considerar DRE)","",1000,1,"JOAO ANTONIO DA SILVA DOS SANTOS","Despesas não operacionais","01_sicredi","c","despesa"],["d","2026-05",4,"Luz, água e outros","",197.3,1,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","01_sicredi","c","despesa"],["d","2026-05",4,"Bonificações, Brindes e Festividades","",200,1,"ISABELA TENORIO BARONE","Despesas com colaboradores","caixa_dinheiro","c","despesa"],["d","2026-05",4,"Despesas com alimentação","",504.5,1,"MARLENE DE SOUZA SILVA LTDA - PADARIA NOVA OPÇÃO","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-05",5,"Despesas com materiais de consumo","",42,1,"UYARA DISTRIBUIDORA LTDA","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-05",5,"Despesas administrativas","",1171.44,1,"ANVISA - AGENCIA NACIONAL DE VIGILANCIA SANITARIA","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-05",5,"Despesas administrativas","",1057.71,1,"PREFEITURA MUNICIPAL DE AURIFLAMA","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-05",5,"Compra de matéria-prima","",730,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-05",5,"Compra de matéria-prima","",1258.2,1,"INTER ESSÊNCIAS - DIB & CAIRES LTDA","","01_sicredi","c","custo"],["d","2026-05",5,"Compra de matéria-prima","",1088.18,1,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-05",5,"Compra de matéria-prima","",1715.56,1,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-05",5,"Compra de matéria-prima","",9987.2,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-05",5,"Compra de insumos para expedição","",964.32,1,"TOLOY COMERCIO DE EMBALAGENS LTDA.","","01_sicredi","c","custo"],["d","2026-05",5,"Outras despesas (Não considerar DRE)","",200,1,"PEDRO HENRIQUE CUSTODIO MARTINS","Despesas não operacionais","01_sicredi","c","despesa"],["d","2026-05",5,"Direitos a receber","",30,1,"SICREDI","","01_sicredi","c","investimento"],["d","2026-05",7,"Despesas com benefícios aos sócios e diretores","",200,1,"SAMUEL ANTONIO DE SOUZA MARTINS","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-05",7,"Despesas com benefícios aos sócios e diretores","",200,1,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-05",6,"Frete para compra de material","",350,1,"ROBSON DE LIMA DA SILVA - FRETE","","01_sicredi","c","despesa"],["d","2026-05",6,"Frete para compra de material","",120,1,"CAMILA OLIMPIO CARMONA","","01_sicredi","c","despesa"],["d","2026-05",6,"Despesas com materiais de consumo","",107.23,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-05",6,"Compra de matéria-prima","",1185.2,1,"ELYPLAST RIO PRETO LTDA","","01_sicredi","c","custo"],["d","2026-05",6,"Taxas e Encargos Bancários","",13.1,1,"BRADESCO","Despesas Financeiras","02_bradesco","c","despesa"],["d","2026-05",6,"Taxas e Encargos Bancários","",0.86,1,"BRADESCO","Despesas Financeiras","02_bradesco","c","despesa"],["d","2026-05",7,"Vale-Refeição (VR)","",137.68,1,"ISABELA TENORIO BARONE","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-05",7,"Vale-Refeição (VR)","",137.68,1,"KARINA DE LIMA TENORIO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-05",7,"Vale-Refeição (VR)","",137.68,1,"VITORIA CRISTINA TANGODA MAIA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-05",7,"Vale-Refeição (VR)","",200,1,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-05",7,"Vale-Refeição (VR)","",137.68,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-05",7,"Vale-Refeição (VR)","",200,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-05",6,"Despesas com alimentação","",25.97,1,"POSTO VISTA ALEGRE SJRP","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-05",6,"Despesas com alimentação","",5,1,"AUTO POSTO CAÇULINHA","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-05",7,"Salários e encargos","",1129.86,1,"ISABELA TENORIO BARONE","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-05",7,"Salários e encargos","",1262.32,1,"KARINA DE LIMA TENORIO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-05",7,"Salários e encargos","",1662.32,1,"VITORIA CRISTINA TANGODA MAIA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-05",7,"Salários e encargos","",1729.86,1,"LEANDRO MARTINS BELCHIOR DA SILVA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-05",7,"Salários e encargos","",1539.59,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-05",7,"Salários e encargos","",2200,1,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-05",7,"Salários e encargos","",1662.32,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-05",7,"Serviços de sistema de gestão","",270,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-05",7,"Serviços de sistema de gestão","",228.52,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-05",7,"Compra de matéria-prima","",300.23,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","01_sicredi","c","custo"],["d","2026-05",7,"Compra de insumos para expedição","",884,1,"VALDERI FERREIRA BARBOSA JUNIOR - IMPAKTO VISUAL","","01_sicredi","c","custo"],["d","2026-05",7,"Custo com horas extras setor de produção","",169.7,1,"ISABELA TENORIO BARONE","","01_sicredi","c","custo"],["d","2026-05",7,"Custo com horas extras setor de produção","",320,1,"CLAUDETE GONÇALVES NOGUEIRA","","01_sicredi","c","custo"],["d","2026-05",7,"Custo com horas extras setor de produção","",300.55,1,"POLYANA CECILIA ALMEIDA FERREIRA","","01_sicredi","c","custo"],["d","2026-05",7,"Custo com horas extras setor de produção","",384.31,1,"KARINA DE LIMA TENORIO","","01_sicredi","c","custo"],["d","2026-05",7,"Custo com horas extras setor de produção","",298.91,1,"LEANDRO MARTINS BELCHIOR DA SILVA","","01_sicredi","c","custo"],["d","2026-05",7,"Custo com horas extras setor de produção","",320,1,"DANIELLY DE SOUSA SILVA","","01_sicredi","c","custo"],["d","2026-05",7,"Custo com horas extras setor de produção","",322.09,1,"VITORIA CRISTINA TANGODA MAIA","","01_sicredi","c","custo"],["d","2026-05",7,"Custo com horas extras setor de produção","",305.08,1,"RAFAEL DOS SANTOS PILIELO","","01_sicredi","c","custo"],["d","2026-05",7,"Vale-Refeição (VR)","",137.68,1,"LEANDRO MARTINS BELCHIOR DA SILVA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-05",11,"Frete para compra de material","",110,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-05",11,"Frete para compra de material","",70,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-05",8,"Compra de matéria-prima","",5550,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2026-05",8,"Compra de insumos para expedição","",1020.48,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","01_sicredi","c","custo"],["d","2026-05",8,"Custo com horas extras setor de produção","",400,1,"CLAUDETE GONÇALVES NOGUEIRA","","01_sicredi","c","custo"],["d","2026-05",9,"Compra de insumos para expedição","",946.8,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","01_sicredi","c","custo"],["d","2026-05",11,"Despesas com aluguéis para uso","",2500,1,"PAULO CESAR LOPES (ROPE)","Despesas com aluguéis","caixa_dinheiro","c","despesa"],["d","2026-05",10,"Despesas com materiais de consumo","",12,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-05",11,"Despesas com materiais de consumo","",194.5,1,"MERCADO LIVRE","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-05",10,"Despesas com materiais de consumo","",12,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-05",10,"Despesas com materiais de consumo","",168.71,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-05",10,"Despesas com materiais de consumo","",23,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-05",10,"Despesas com materiais de consumo","",184.09,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-05",11,"Despesas com materiais de consumo","",203.33,1,"MERCADO LIVRE","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-05",11,"Despesas administrativas","",69.82,1,"MERCADO LIVRE","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-05",10,"Despesas administrativas","",1138.44,1,"CONSELHO REGIONAL DE QUIMICA IV REGIAO","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-05",11,"Compra de matéria-prima","",64.5,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2026-05",11,"Compra de matéria-prima","",1527,1,"ELYPLAST RIO PRETO LTDA","","01_sicredi","c","custo"],["d","2026-05",6,"Compra de matéria-prima","",969.76,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","03_inter","c","custo"],["d","2026-05",11,"Compra de insumos para expedição","",498.2,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2026-05",10,"Compra de ativo imobilizado","",360,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","","01_sicredi","c","investimento"],["d","2026-05",11,"Compra de ativo imobilizado","",472.26,1,"MERCADO LIVRE","","01_sicredi","c","investimento"],["d","2026-05",11,"Despesas com outros serviços contratados","",9.9,1,"MERCADO LIVRE","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-05",10,"Luz, água e outros","",69,1,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","01_sicredi","c","despesa"],["d","2026-05",11,"Outros gastos com publicidade","",123.69,1,"PRINTI - FM IMPRESSOS PERSONALIZADOS LTDA.","Marketing e publicidade","01_sicredi","c","despesa"],["d","2026-05",11,"Frete para compra de material","",180,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-05",10,"Compra de matéria-prima","",1768.85,1,"TILIFORM INDUSTRIA GRAFICA - EM RECUPERACAO JUDICIAL","","01_sicredi","c","custo"],["d","2026-05",11,"Salários e encargos","",20,1,"VITORIA CRISTINA TANGODA MAIA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-05",11,"Salários e encargos","",250,1,"KARINA DE LIMA TENORIO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-05",12,"Despesa com materiais de uso e consumo operacional","",900,1,"CARRAPICHO - SERRALHEIRO","","01_sicredi","c","custo"],["d","2026-05",6,"Serviços contratados para marketing","",42,1,"LINKTREE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-05",6,"Serviços contratados para marketing","",42,1,"LINKTREE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-05",6,"Serviços contratados para marketing","",1.47,1,"LINKTREE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-05",6,"Serviços contratados para marketing","",1.47,1,"LINKTREE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-05",6,"Serviços de sistema de gestão","",162.09,1,"TINY ERP","Despesas com serviços","03_inter","c","despesa"],["d","2026-05",6,"Serviços de sistema de gestão","",24.99,1,"SERASA S.A.","Despesas com serviços","03_inter","c","despesa"],["d","2026-05",6,"Serviços de sistema de gestão","",40.9,1,"TINY ERP","Despesas com serviços","03_inter","c","despesa"],["d","2026-05",6,"Serviços de sistema de gestão","",362.28,1,"TINY ERP","Despesas com serviços","03_inter","c","despesa"],["d","2026-04",29,"Serviços de sistema de gestão","",399.9,1,"JODDA TECNOLOGIA E SOLUCOES LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-05",6,"Serviços de sistema de gestão","",270,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","03_inter","c","despesa"],["d","2026-05",13,"Frete para compra de material","",110,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-05",13,"Frete para compra de material","",180,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-05",6,"Despesas com materiais de consumo","",469.73,1,"MERCADO LIVRE","Despesas administrativas","03_inter","c","despesa"],["d","2026-05",6,"Despesas administrativas","",30,1,"CLARO S.A.","Despesas administrativas","03_inter","c","despesa"],["d","2026-05",12,"Compra de matéria-prima","",9987.2,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-05",12,"Compra de matéria-prima","",1088.18,1,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-05",12,"Compra de matéria-prima","",2655.02,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-05",12,"Compra de matéria-prima","",8778.23,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-05",12,"Compra de matéria-prima","",730,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-05",12,"Compra de matéria-prima","",1715.56,1,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-05",6,"Despesas com ADS","",1000,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-05",6,"Despesas com ADS","",1000,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-05",6,"Despesas com ADS","",1000,1,"BR TIKTOK SHOP BRASIL LTDA","Marketing e publicidade","03_inter","c","despesa"],["d","2026-05",6,"Despesas com ADS","",3000,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-05",6,"Despesas com ADS","",290,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-05",13,"Despesas com outros serviços contratados","",50,1,"WELBER SANDER LULIO DE OLIVEIRA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-05",12,"Despesas com outros serviços contratados","",450,1,"CARRAPICHO - SERRALHEIRO","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-05",13,"Despesa com materiais de uso e consumo operacional","",14,1,"MURILO BISPO ZENELATO","","01_sicredi","c","custo"],["d","2026-05",13,"Compra de matéria-prima","",2250,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-05",13,"Compra de matéria-prima","",8175,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2026-05",13,"Compra de mercadorias","",5300,1,"ENNATERRA AROMATIZADORES LTDA","","01_sicredi","c","custo"],["d","2026-05",13,"Compra de insumos para expedição","",1229.52,1,"TOLOY COMERCIO DE EMBALAGENS LTDA.","","01_sicredi","c","custo"],["d","2026-05",14,"Frete para compra de material","",150,1,"55.193.755 PAULO EDUARDO FERNANDES PEREIRA - MOTORISTA","","01_sicredi","c","despesa"],["d","2026-05",14,"Frete para compra de material","",50,1,"CAMILA OLIMPIO CARMONA","","01_sicredi","c","despesa"],["d","2026-05",15,"Frete para compra de material","",300,1,"SAULO CAMARGO MARQUES","","01_sicredi","c","despesa"],["d","2026-05",15,"Frete para compra de material","",791.65,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","","01_sicredi","c","despesa"],["d","2026-05",15,"Frete para compra de material","",60,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-05",15,"Pagamento de empréstimo","",3988.23,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","financiamento"],["d","2026-05",15,"Serviços de contabilidade","",450,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-05",15,"Serviços de contabilidade","",1000,1,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-05",15,"Compra de mercadorias","",8621,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","01_sicredi","c","custo"],["d","2026-05",15,"Despesas com outros serviços contratados","",8116.24,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-05",16,"Frete para compra de material","",200,1,"ROBSON DE LIMA DA SILVA - FRETE","","01_sicredi","c","despesa"],["d","2026-05",18,"Compra de insumos para expedição","",1101.8,1,"TOLOY COMERCIO DE EMBALAGENS LTDA.","","01_sicredi","c","custo"],["d","2026-05",19,"Frete para compra de material","",350,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-05",19,"Compra de matéria-prima","",1715.57,1,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-05",19,"Compra de matéria-prima","",1088.18,1,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-05",19,"Compra de matéria-prima","",730,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-05",19,"Compra de matéria-prima","",2655.02,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-05",19,"Compra de matéria-prima","",8778.21,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-05",19,"Compra de insumos para expedição","",70,1,"BINHO - TOTAL CARTUCHO","","01_sicredi","c","custo"],["d","2026-05",19,"Outras despesas (Não considerar DRE)","",150,1,"DENILSON GOMES JUNIOR","Despesas não operacionais","01_sicredi","c","despesa"],["d","2026-05",20,"Serviços contratados para marketing","",700,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Marketing e publicidade","01_sicredi","c","despesa"],["d","2026-05",20,"Frete para compra de material","",300,1,"ROBSON DE LIMA DA SILVA - FRETE","","01_sicredi","c","despesa"],["d","2026-05",20,"Frete para compra de material","",350,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","despesa"],["d","2026-05",20,"Despesas administrativas","",30,1,"PEDRO HENRIQUE SOUZA CARMO","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-05",20,"Compra de matéria-prima","",6249.35,1,"SMART PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2026-05",20,"Compra de matéria-prima","",8025,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2026-05",20,"Impostos sobre receita","",14055.43,1,"SIMPLES NACIONAL","","01_sicredi","c","custo"],["d","2026-05",20,"Compra de ativo imobilizado","",540.26,1,"BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR","","01_sicredi","c","investimento"],["d","2026-05",20,"Comissões","",873.61,1,"TIAGO SANTOS MOURA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-05",20,"Salários e encargos","",907.96,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-05",21,"Frete para compra de material","",200,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-05",21,"Despesas com frete para devolução e reenvio","",1241.8,1,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-05",20,"Compra de mercadorias","",234.45,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2026-05",20,"Despesas com ADS","",4000,1,"SHOPEE","Marketing e publicidade","01_sicredi","c","despesa"],["d","2026-05",20,"Despesas com ADS","",1000,1,"SHOPEE","Marketing e publicidade","01_sicredi","c","despesa"],["d","2026-05",20,"Despesas com ADS","",1500,1,"BR TIKTOK SHOP BRASIL LTDA","Marketing e publicidade","01_sicredi","c","despesa"],["d","2026-05",20,"Compra de ativo imobilizado","",401.67,1,"MERCADO LIVRE","","01_sicredi","c","investimento"],["d","2026-05",21,"Outras despesas (Não considerar DRE)","",50,1,"DENILSON GOMES JUNIOR","Despesas não operacionais","01_sicredi","c","despesa"],["d","2026-05",22,"Despesas com materiais de consumo","",330.16,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-05",22,"Despesas com materiais de consumo","",16.56,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-05",22,"Manutenção predial e benfeitorias","",600,1,"CARRAPICHO - SERRALHEIRO","","01_sicredi","c","despesa"],["d","2026-05",22,"Luz, água e outros","",377.05,1,"ELEKTRO REDES S.A.","Despesas operacionais","01_sicredi","c","despesa"],["d","2026-05",23,"Compra de insumos para expedição","",1020.48,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","01_sicredi","c","custo"],["d","2026-05",24,"Compra de insumos para expedição","",946.8,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","01_sicredi","c","custo"],["d","2026-05",25,"Despesas com outros serviços contratados","",750,1,"ELEN FERNANDA CONTE - ARQUITETA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-05",26,"Frete para compra de material","",500,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-05",25,"Compra de matéria-prima","",3990.61,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","01_sicredi","c","custo"],["d","2026-05",25,"Despesas com outros serviços contratados","",2431.5,1,"MARRI CONSULTORIA EMPRESARIAL LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-05",26,"Compra de matéria-prima","",1088.18,1,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-05",26,"Compra de matéria-prima","",8778.21,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-05",26,"Compra de insumos para expedição","",240,1,"TOLOY COMERCIO DE EMBALAGENS LTDA.","","01_sicredi","c","custo"],["d","2026-05",26,"Outras despesas (Não considerar DRE)","",250,1,"PEDRO HENRIQUE CUSTODIO MARTINS","Despesas não operacionais","01_sicredi","c","despesa"],["d","2026-05",27,"Frete para compra de material","",150,1,"ROBSON DE LIMA DA SILVA - FRETE","","01_sicredi","c","despesa"],["d","2026-05",27,"Compra de matéria-prima","",3463.56,1,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-05",27,"Compra de matéria-prima","",5300,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2026-05",27,"Compra de matéria-prima","",5189.35,1,"SMART PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2026-05",27,"Compra de matéria-prima","",3045.75,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-05",28,"Reembolsos por fora de marketplaces","",20,1,"REEMBOLSOS","Despesas operacionais","01_sicredi","c","despesa"],["d","2026-02",4,"Compra de matéria-prima","",6150,1,"FORMULARIOS COVOLAN LTDA.","","01_sicredi","c","custo"],["d","2026-05",28,"Outras despesas","",100,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Despesas não operacionais","01_sicredi","c","despesa"],["d","2026-05",29,"Serviços de sistema de gestão","",412.66,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-05",29,"Frete para compra de material","",100,1,"ROBSON DE LIMA DA SILVA - FRETE","","01_sicredi","c","despesa"],["d","2026-05",29,"Frete para compra de material","",120,1,"CAMILA OLIMPIO CARMONA","","01_sicredi","c","despesa"],["d","2026-05",29,"Despesas com materiais de consumo","",500,1,"RICARDO ANTUNES - NATHYPEL","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-05",29,"Compra de insumos para expedição","",1110,1,"MUNDO GIBA LTDA - MUNDO GB","","01_sicredi","c","custo"],["d","2026-05",29,"Compra de insumos para expedição","",695.6,1,"VALDERI FERREIRA BARBOSA JUNIOR - IMPAKTO VISUAL","","01_sicredi","c","custo"],["d","2026-05",29,"Impostos e Taxas","",402.06,1,"SECRETARIA DA FAZENDA E PLANEJAMENTO","Despesas Financeiras","01_sicredi","c","despesa"],["d","2026-05",30,"Frete para compra de material","",2018.35,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","","01_sicredi","c","despesa"],["d","2026-05",30,"Frete para compra de material","",876.75,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","","01_sicredi","c","despesa"],["d","2026-05",30,"Compra de insumos para expedição","",2600.49,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","01_sicredi","c","custo"],["d","2026-05",14,"Vestuário de trabalho","",733.5,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-05",31,"Compra de ativo imobilizado","",7200,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","investimento"],["d","2026-06",1,"Compra de matéria-prima","",2581.25,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","01_sicredi","c","custo"],["d","2026-06",1,"Compra de matéria-prima","",3990.62,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","01_sicredi","c","custo"],["d","2026-06",1,"Outras despesas (Não considerar DRE)","",250,1,"DENILSON GOMES JUNIOR","Despesas não operacionais","01_sicredi","c","despesa"],["d","2026-06",1,"Luz, água e outros","",182.52,1,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","01_sicredi","c","despesa"],["d","2026-06",3,"Despesas com alimentação","",514,1,"MARLENE DE SOUZA SILVA LTDA - PADARIA NOVA OPÇÃO","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-06",2,"Despesas com viagens","",174.68,1,"RODOSNACK S SAO CARLOS BR","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-06",2,"Despesas com viagens","",50,1,"EQUIPARK ESTACIONAMENTO","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-06",2,"Despesas com viagens","",12.97,1,"UBER DO BRASIL TECNOLOGIA LTDA.","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-06",2,"Despesas com viagens","",374.6,1,"RESTAURANTE ANDIAMO","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-06",2,"Despesas com viagens","",21.5,1,"KAMBUI CHURRASACARIA ARARAQUARA","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-06",2,"Despesas com viagens","",321.47,1,"CAMPEAO 38 POSTO DE SERVICOS LTDA","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-06",2,"Despesas com viagens","",248.4,1,"BOOKING.COM BRASIL SERVICOS DE RESERVA DE HOTEIS LTDA.","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-06",2,"Compra de matéria-prima","",8778.21,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-06",2,"Compra de matéria-prima","",6128.8,1,"GOLDEN PLASTIC COMERCIO E SERVICOS LTDA","","01_sicredi","c","custo"],["d","2026-06",3,"Serviços de sistema de gestão","",149,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-06",3,"Despesas com viagens","",61.45,1,"RESTAURANTE ORANGEE 01 CORUMBA","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-06",3,"Despesas com viagens","",10.98,1,"UBER DO BRASIL TECNOLOGIA LTDA.","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-06",3,"Despesas com viagens","",135.92,1,"SUCESSO REDE DE RESTAURANTE SÃO PAULO","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-06",3,"Compra de matéria-prima","",3045.75,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-06",3,"Compra de matéria-prima","",4429.54,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-06",3,"Taxas e Encargos Bancários","",12.15,1,"BRADESCO","Despesas Financeiras","02_bradesco","c","despesa"],["d","2026-06",3,"Despesas com viagens","",320.08,1,"POSTO MONTE CARLO MIRA MIRASSOL","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-06",3,"Despesas com viagens","",203,1,"RESTAURANTE MADEIRO","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-06",3,"Compra de matéria-prima","",1022.45,1,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-06",3,"Compra de matéria-prima","",3463.56,1,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-06",3,"Taxas e Encargos Bancários","",0.21,1,"BRADESCO","Despesas Financeiras","02_bradesco","c","despesa"],["d","2026-06",6,"Frete para compra de material","",450,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-06",6,"Frete para compra de material","",170,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-06",4,"Despesas com materiais de consumo","",14.49,1,"VALDIR DA SILVA MATOS AURIFLAMA","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-06",5,"Despesas administrativas","",20,1,"FARMÁCIA AVENIDA","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-06",5,"Compra de matéria-prima","",8422.6,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-06",5,"Custo com horas extras setor de produção","",504.74,1,"LEANDRO MARTINS BELCHIOR DA SILVA","","01_sicredi","c","custo"],["d","2026-06",5,"Custo com horas extras setor de produção","",283.78,1,"POLYANA CECILIA ALMEIDA FERREIRA","","01_sicredi","c","custo"],["d","2026-06",5,"Custo com horas extras setor de produção","",275.42,1,"KARINA DE LIMA TENORIO","","01_sicredi","c","custo"],["d","2026-06",5,"Custo com horas extras setor de produção","",212.1,1,"ISABELA TENORIO BARONE","","01_sicredi","c","custo"],["d","2026-06",5,"Custo com horas extras setor de produção","",88.35,1,"RAFAEL DOS SANTOS PILIELO","","01_sicredi","c","custo"],["d","2026-06",5,"Custo com horas extras setor de produção","",196.64,1,"VITORIA CRISTINA TANGODA MAIA","","01_sicredi","c","custo"],["d","2026-06",5,"Custo com horas extras setor de produção","",115.09,1,"DANIELLY DE SOUSA SILVA","","01_sicredi","c","custo"],["d","2026-06",5,"Direitos a receber","",30,1,"SICREDI","","01_sicredi","c","investimento"],["d","2026-06",5,"Salários e encargos","",640,1,"AMANDA LOPES PAIS","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-06",4,"Despesas com benefícios aos sócios e diretores","",200,1,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-06",4,"Despesas com benefícios aos sócios e diretores","",200,1,"SAMUEL ANTONIO DE SOUZA MARTINS","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-06",5,"Serviços de contabilidade","",1000,1,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-06",4,"Vale-Refeição (VR)","",150,1,"VITORIA CRISTINA TANGODA MAIA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-06",4,"Vale-Refeição (VR)","",150,1,"KARINA DE LIMA TENORIO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-06",4,"Vale-Refeição (VR)","",150,1,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-06",4,"Vale-Refeição (VR)","",150,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-06",4,"Vale-Refeição (VR)","",150,1,"DANIELLY DE SOUSA SILVA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-06",4,"Vale-Refeição (VR)","",150,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-06",4,"Vale-Refeição (VR)","",150,1,"ISABELA TENORIO BARONE","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-06",5,"Salários e encargos","",2476.5,1,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-06",5,"Salários e encargos","",2321.35,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-06",5,"Salários e encargos","",1957.35,1,"LEANDRO MARTINS BELCHIOR DA SILVA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-06",5,"Salários e encargos","",1957.35,1,"KARINA DE LIMA TENORIO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-06",5,"Salários e encargos","",1660.46,1,"DANIELLY DE SOUSA SILVA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-05",22,"Salários e encargos","",150,1,"ISABELA TENORIO BARONE","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-06",5,"Salários e encargos","",1783.15,1,"ISABELA TENORIO BARONE","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-06",5,"Salários e encargos","",1659.28,1,"VITORIA CRISTINA TANGODA MAIA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-06",5,"Salários e encargos","",2008.12,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-06",7,"Serviços de sistema de gestão","",270,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-06",4,"Vale-Refeição (VR)","",150,1,"LEANDRO MARTINS BELCHIOR DA SILVA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-06",8,"Compra de matéria-prima","",5150,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2026-06",8,"Compra de matéria-prima","",2581.25,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","01_sicredi","c","custo"],["d","2026-06",9,"Frete para compra de material","",110,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-06",9,"Frete para compra de material","",95,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-06",9,"Compra de matéria-prima","",8778.21,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-06",9,"Compra de matéria-prima","",1768.85,1,"TILIFORM INDUSTRIA GRAFICA - EM RECUPERACAO JUDICIAL","","01_sicredi","c","custo"],["d","2026-06",10,"Despesa com materiais de uso e consumo operacional","",299,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2026-06",10,"Despesa com materiais de uso e consumo operacional","",196.8,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2026-06",10,"Despesa com materiais de uso e consumo operacional","",119.8,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2026-06",10,"Despesa com materiais de uso e consumo operacional","",180.4,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2026-06",10,"Despesa com materiais de uso e consumo operacional","",120,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","","01_sicredi","c","custo"],["d","2026-06",10,"Despesa com materiais de uso e consumo operacional","",74.7,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2026-06",10,"Despesa com materiais de uso e consumo operacional","",747,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2026-06",10,"Despesa com materiais de uso e consumo operacional","",155.69,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2026-06",10,"Despesa com materiais de uso e consumo operacional","",54.5,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","","01_sicredi","c","custo"],["d","2026-06",10,"Despesa com materiais de uso e consumo operacional","",73.4,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2026-06",10,"Despesa com materiais de uso e consumo operacional","",965.7,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2026-06",10,"Frete para compra de material","",100,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-06",10,"Despesas com aluguéis para uso","",2500,1,"PAULO CESAR LOPES (ROPE)","Despesas com aluguéis","caixa_dinheiro","c","despesa"],["d","2026-06",10,"Despesas com materiais de consumo","",490,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-06",10,"Despesas com materiais de consumo","",307.36,1,"MERCADO LIVRE","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-06",10,"Despesas com materiais de consumo","",203.33,1,"MERCADO LIVRE","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-06",10,"Despesas com materiais de consumo","",28,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-06",10,"Despesas com materiais de consumo","",799.61,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-06",10,"Compra de matéria-prima","",4429.54,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-06",10,"Compra de matéria-prima","",3463.56,1,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-06",10,"Compra de matéria-prima","",2873.8,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","01_sicredi","c","custo"],["d","2026-06",10,"Compra de matéria-prima","",1022.45,1,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-06",10,"Manutenção predial e benfeitorias","",273.6,1,"RURAL COMERCIAL AGROPECUARIA LTDA","","01_sicredi","c","despesa"],["d","2026-06",10,"Compra de ativo imobilizado","",472.26,1,"MERCADO LIVRE","","01_sicredi","c","investimento"],["d","2026-06",10,"Despesas com outros serviços contratados","",9.9,1,"MERCADO LIVRE","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-06",10,"Compra de insumos para produção","",91.28,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2026-06",10,"Outras despesas (Não considerar DRE)","",50,1,"PAULO EDUARDO CUSTODIO MARTINS","Despesas não operacionais","01_sicredi","c","despesa"],["d","2026-06",10,"Outras despesas (Não considerar DRE)","",734,1,"ORNATA DOMUS COMPANY LTDA","Despesas não operacionais","01_sicredi","c","despesa"],["d","2026-06",10,"Luz, água e outros","",69,1,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","01_sicredi","c","despesa"],["d","2026-06",10,"Outros gastos com publicidade","",123.69,1,"PRINTI - FM IMPRESSOS PERSONALIZADOS LTDA.","Marketing e publicidade","01_sicredi","c","despesa"],["d","2026-06",11,"Serviços contratados para marketing","",1.47,1,"LINKTREE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-06",11,"Serviços contratados para marketing","",42,1,"LINKTREE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-06",11,"Serviços contratados para marketing","",42,1,"LINKTREE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-06",11,"Serviços contratados para marketing","",1.47,1,"LINKTREE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-06",11,"Serviços de sistema de gestão","",40.9,1,"TINY ERP","Despesas com serviços","03_inter","c","despesa"],["d","2026-06",11,"Serviços de sistema de gestão","",24.91,1,"SERASA S.A.","Despesas com serviços","03_inter","c","despesa"],["d","2026-06",11,"Serviços de sistema de gestão","",362.28,1,"TINY ERP","Despesas com serviços","03_inter","c","despesa"],["d","2026-06",12,"Despesas com materiais de consumo","",39.48,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-06",11,"Despesas administrativas","",30,1,"CLARO S.A.","Despesas administrativas","03_inter","c","despesa"],["d","2026-06",11,"Compra de matéria-prima","",969.76,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","03_inter","c","custo"],["d","2026-06",11,"Compra de matéria-prima","",973.36,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","03_inter","c","custo"],["d","2026-06",12,"Compra de matéria-prima","",8422.56,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-06",11,"Compra de mercadorias","",590.36,1,"MERCADO LIVRE","","03_inter","c","custo"],["d","2026-06",11,"Despesas com ADS","",1000,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-06",11,"Despesas com ADS","",1000,1,"BR TIKTOK SHOP BRASIL LTDA","Marketing e publicidade","03_inter","c","despesa"],["d","2026-06",11,"Despesas com ADS","",2000,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-06",12,"Compra de ativo imobilizado","",1290.89,1,"TEKNOVAL INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","investimento"],["d","2026-06",11,"Outras despesas (Não considerar DRE)","",470.64,1,"AMAZON","Despesas não operacionais","03_inter","c","despesa"],["d","2026-06",11,"Outras despesas (Não considerar DRE)","",117.66,1,"AMAZON","Despesas não operacionais","03_inter","c","despesa"],["d","2026-06",11,"Outras despesas (Não considerar DRE)","",235.32,1,"AMAZON","Despesas não operacionais","03_inter","c","despesa"],["d","2026-06",11,"Outras despesas (Não considerar DRE)","",250.87,1,"AMAZON","Despesas não operacionais","03_inter","c","despesa"],["d","2026-06",11,"Outras despesas (Não considerar DRE)","",58.82,1,"AMAZON","Despesas não operacionais","03_inter","c","despesa"],["d","2026-06",11,"Outras despesas (Não considerar DRE)","",58.83,1,"AMAZON","Despesas não operacionais","03_inter","c","despesa"],["d","2026-06",11,"Outros gastos com publicidade","",418.06,1,"PRINTI - FM IMPRESSOS PERSONALIZADOS LTDA.","Marketing e publicidade","03_inter","c","despesa"],["d","2026-06",12,"Bonificações, Brindes e Festividades","",35,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas com colaboradores","caixa_dinheiro","c","despesa"],["d","2026-06",14,"Despesas com materiais de consumo","",183.13,1,"TAMBASA - TECIDOS E ARMARINHOS MIGUEL BARTOLOMEU S/A","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-06",14,"Compra de insumos para expedição","",2600.49,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","01_sicredi","c","custo"],["d","2026-06",14,"Compra de ativo imobilizado","",564.33,1,"TAMBASA - TECIDOS E ARMARINHOS MIGUEL BARTOLOMEU S/A","","01_sicredi","c","investimento"],["d","2026-06",15,"Frete para compra de material","",694.21,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","","01_sicredi","c","despesa"],["d","2026-06",15,"Frete para compra de material","",1484.51,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","","01_sicredi","c","despesa"],["d","2026-06",16,"Despesas com viagens","",218.17,1,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-06",16,"Despesas com viagens","",377.36,1,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-06",16,"Pagamento de empréstimo","",4007.13,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","financiamento"],["d","2026-06",15,"Compra de matéria-prima","",2581.25,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","01_sicredi","c","custo"],["d","2026-06",15,"Serviços de contabilidade","",450,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-06",16,"Compra de mercadorias","",6382.5,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","01_sicredi","c","custo"],["d","2026-06",24,"Compra de mercadorias","",5476,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","01_sicredi","c","custo"],["d","2026-06",16,"Despesas com outros serviços contratados","",9654.86,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-06",15,"Despesas com outros serviços contratados","",150,1,"ESCOBAR & CORREA LTDA - ESCOSEG","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-06",16,"Frete para compra de material","",450,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-06",17,"Frete para compra de material","",600,1,"MARCELO ANTONIO LOZANO - FRETE","","01_sicredi","c","despesa"],["d","2026-06",17,"Despesas com materiais de consumo","",57.94,1,"FARMACIA AVENIDA DE AURIFLAMA LTDA","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-06",17,"Despesas com materiais de consumo","",29.9,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-06",17,"Compra de matéria-prima","",3615,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-06",17,"Compra de matéria-prima","",3463.57,1,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-06",17,"Compra de matéria-prima","",8422.56,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-06",17,"Compra de matéria-prima","",2873.79,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","01_sicredi","c","custo"],["d","2026-06",17,"Manutenção predial e benfeitorias","",400,1,"WELINGTON SOARES DUARTE - PINTOR","","01_sicredi","c","despesa"],["d","2026-06",17,"Comissões","",223.57,1,"ALVARO JOAQUIM TRINDADE SOARES","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-06",17,"Comissões","",383.32,1,"TIAGO SANTOS MOURA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-06",18,"Manutenção predial e benfeitorias","",496.9,1,"BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR","","01_sicredi","c","despesa"],["d","2026-06",18,"Salários e encargos","",200,1,"ISABELA TENORIO BARONE","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-06",19,"Compra de matéria-prima","",8422.56,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-06",19,"Compra de mercadorias","",300,1,"ENNATERRA AROMATIZADORES LTDA","","01_sicredi","c","custo"],["d","2026-06",19,"Manutenção predial e benfeitorias","",300,1,"JAIR MACIEL DE OLIVEIRA - PINTOR","","01_sicredi","c","despesa"],["d","2026-06",19,"Outras despesas (Não considerar DRE)","",200,1,"DENILSON GOMES JUNIOR","Despesas não operacionais","01_sicredi","c","despesa"],["d","2026-06",22,"Salários e encargos","",1171.55,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-06",20,"Serviços contratados para marketing","",700,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Marketing e publicidade","01_sicredi","c","despesa"],["d","2026-06",20,"Compra de matéria-prima","",4134.8,1,"PUMP AMERICA INDUSTRIA DE VALVULAS LTDA","","01_sicredi","c","custo"],["d","2026-06",20,"Compra de insumos para expedição","",427.84,1,"TOLOY COMERCIO DE EMBALAGENS LTDA.","","01_sicredi","c","custo"],["d","2026-06",20,"Compra de insumos para expedição","",360,1,"TOLOY COMERCIO DE EMBALAGENS LTDA.","","01_sicredi","c","custo"],["d","2026-06",20,"Compra de ativo imobilizado","",540.25,1,"BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR","","01_sicredi","c","investimento"],["d","2026-06",20,"Outras despesas (Não considerar DRE)","",4000,1,"SAMUEL ANTONIO DE SOUZA MARTINS","Despesas não operacionais","01_sicredi","c","despesa"],["d","2026-06",20,"Compra de matéria-prima","",888.91,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","01_sicredi","c","custo"],["d","2026-06",20,"Despesas com ADS","",1000,1,"BR TIKTOK SHOP BRASIL LTDA","Marketing e publicidade","01_sicredi","c","despesa"],["d","2026-06",20,"Despesas com ADS","",4000,1,"SHOPEE","Marketing e publicidade","01_sicredi","c","despesa"],["d","2026-06",22,"Juros e Multas","",64.42,1,"CAIXA ECONOMICA FEDERAL","","01_sicredi","c","despesa"],["d","2026-06",22,"Despesas com frete para devolução e reenvio","",1800.04,1,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-06",22,"Impostos sobre receita","",17014.29,1,"SIMPLES NACIONAL","","01_sicredi","c","custo"],["d","2026-06",22,"Outras despesas (Não considerar DRE)","",1000,1,"JOAO ANTONIO DA SILVA DOS SANTOS","Despesas não operacionais","01_sicredi","c","despesa"],["d","2026-06",22,"Outras despesas (Não considerar DRE)","",300,1,"PEDRO HENRIQUE CUSTODIO MARTINS","Despesas não operacionais","01_sicredi","c","despesa"],["d","2026-06",23,"Frete para compra de material","",195,1,"DANIEL BARBOSA DA SILVA","","01_sicredi","c","despesa"],["d","2026-06",23,"Compra de matéria-prima","",5835.2,1,"GOLDEN PLASTIC COMERCIO E SERVICOS LTDA","","01_sicredi","c","custo"],["d","2026-06",23,"Compra de matéria-prima","",3150,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2026-06",23,"Luz, água e outros","",259.13,1,"ELEKTRO REDES S.A.","Despesas operacionais","01_sicredi","c","despesa"],["d","2026-06",24,"Frete para compra de material","",300,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","","01_sicredi","c","despesa"],["d","2026-06",24,"Compra de matéria-prima","",2873.79,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","01_sicredi","c","custo"],["d","2026-06",24,"Compra de matéria-prima","",3615,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-06",24,"Compra de matéria-prima","",5250,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2026-06",24,"Compra de insumos para expedição","",1046.5,1,"TOLOY COMERCIO DE EMBALAGENS LTDA.","","01_sicredi","c","custo"],["d","2026-06",24,"Despesas com outros serviços contratados","",750,1,"ELEN FERNANDA CONTE - ARQUITETA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-06",24,"Salários e encargos","",100,1,"KARINA DE LIMA TENORIO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-06",25,"Despesas com materiais de consumo","",22.05,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-06",25,"Despesas administrativas","",1171.44,1,"ANVISA - AGENCIA NACIONAL DE VIGILANCIA SANITARIA","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-06",25,"Compra de matéria-prima","",3019.24,1,"ALCOOL FERREIRA - CNA S.A.","","01_sicredi","c","custo"],["d","2026-06",25,"Despesas com outros serviços contratados","",2431.5,1,"MARRI CONSULTORIA EMPRESARIAL LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-06",25,"Bonificações, Brindes e Festividades","",15,1,"AUTO POSTO CAÇULINHA","Despesas com colaboradores","caixa_dinheiro","c","despesa"],["d","2026-06",26,"Compra de matéria-prima","",8422.56,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-06",26,"Compra de matéria-prima","",8418.67,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-06",26,"Compra de insumos para expedição","",2071.39,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","01_sicredi","c","custo"],["d","2026-02",4,"Compra de matéria-prima","",6150,1,"FORMULARIOS COVOLAN LTDA.","","01_sicredi","c","custo"],["d","2026-06",29,"Serviços de sistema de gestão","",479,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-06",29,"Compra de insumos para expedição","",2600.48,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","01_sicredi","c","custo"],["d","2026-06",29,"Despesas com outros serviços contratados","",953.71,1,"MOTTA INFORMÁTICA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-06",30,"Frete para compra de material","",474.09,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","","01_sicredi","c","despesa"],["d","2026-06",30,"Frete para compra de material","",180,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","despesa"],["d","2026-06",30,"Frete para compra de material","",180,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-06",30,"Frete para compra de material","",180,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-06",30,"Frete para compra de material","",370,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-06",30,"Pagamento de empréstimo","",20161.7,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","financiamento"],["d","2026-03",2,"Pagamento de empréstimo","",10000,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","financiamento"],["d","2026-06",30,"Pagamento de empréstimo","",1678.5,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","financiamento"],["d","2026-03",24,"Pagamento de empréstimo","",10000,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","financiamento"],["d","2026-03",10,"Pagamento de empréstimo","",10000,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","financiamento"],["d","2026-02",18,"Compra de insumos para expedição","",62.4,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","custo"],["d","2026-02",19,"Compra de insumos para expedição","",62.4,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","custo"],["d","2026-06",30,"Compra de insumos para expedição","",523.5,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","custo"],["d","2026-02",18,"Compra de insumos para expedição","",157.34,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","custo"],["d","2026-02",27,"Compra de ativo imobilizado","",800,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","investimento"],["d","2026-05",26,"Compra de ativo imobilizado","",3200,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","investimento"],["d","2026-02",27,"Compra de ativo imobilizado","",603.23,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","investimento"],["d","2026-06",26,"Compra de ativo imobilizado","",2000,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","investimento"],["d","2026-06",26,"Compra de ativo imobilizado","",2069.87,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","investimento"],["d","2026-03",30,"Compra de ativo imobilizado","",4941.5,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","investimento"],["d","2026-06",6,"Compra de ativo imobilizado","",490.5,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","investimento"],["d","2026-03",18,"Compra de ativo imobilizado","",599,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","investimento"],["d","2026-03",27,"Compra de ativo imobilizado","",2470.75,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","investimento"],["d","2026-02",23,"Compra de ativo imobilizado","",514.42,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","investimento"],["d","2026-06",30,"Impostos e Taxas","",702.42,1,"SECRETARIA DA FAZENDA E PLANEJAMENTO","Despesas Financeiras","01_sicredi","c","despesa"],["d","2026-06",30,"Despesas com outros serviços contratados","",110,1,"ROSANGELA CARDOSO MATEUS","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-06",30,"Despesas com outros serviços contratados","",140,1,"ROSANGELA CARDOSO MATEUS","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-02",18,"Despesas com outros serviços contratados","",150,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-02",19,"Compra de insumos para produção","",305.9,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","custo"],["d","2026-06",6,"Compra de insumos para produção","",336,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","custo"],["d","2026-06",19,"Compra de insumos para produção","",1988.76,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","custo"],["d","2026-02",23,"Compra de insumos para produção","",339.98,1,"ORNATA DOMUS COMPANY LTDA","","01_sicredi","c","custo"],["d","2026-06",30,"Outras despesas (Não considerar DRE)","",1000,1,"JOAO ANTONIO DA SILVA DOS SANTOS","Despesas não operacionais","01_sicredi","c","despesa"],["d","2026-06",30,"Outras despesas (Não considerar DRE)","",50,1,"THALIS HENRIQUE CLEMENTE DE SOUZA","Despesas não operacionais","caixa_dinheiro","c","despesa"],["d","2026-06",30,"Bonificações, Brindes e Festividades","",200,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","caixa_dinheiro","c","despesa"],["d","2026-06",30,"Bonificações, Brindes e Festividades","",200,1,"DANIELLY DE SOUSA SILVA","Despesas com colaboradores","caixa_dinheiro","c","despesa"],["d","2026-07",1,"Compra de ativo imobilizado","",900,1,"CLIMAK INDUSTRIA E COMERCIO DE MAQUINAS E EQUIPAMENTOS LTDA - EDERMAK","","01_sicredi","c","investimento"],["d","2026-07",1,"Luz, água e outros","",234.99,1,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","01_sicredi","c","despesa"],["d","2026-07",2,"Compra de matéria-prima","",3019.24,1,"ALCOOL FERREIRA - CNA S.A.","","01_sicredi","c","custo"],["d","2026-07",2,"Outras despesas (Não considerar DRE)","",800,1,"VITORIA LEAO DE LIMA","Despesas não operacionais","01_sicredi","c","despesa"],["d","2026-07",3,"Despesa com materiais de uso e consumo operacional","",710,1,"CARRAPICHO - SERRALHEIRO","","01_sicredi","c","custo"],["d","2026-07",3,"Despesas com materiais de consumo","",40.47,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-07",3,"Compra de matéria-prima","",8422.56,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-07",3,"Compra de matéria-prima","",8418.68,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-07",3,"Despesas com outros serviços contratados","",150,1,"CRISTIANE SANCHES ROCAILKS","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-07",6,"Despesas com benefícios aos sócios e diretores","",200,1,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-07",6,"Despesas com benefícios aos sócios e diretores","",200,1,"SAMUEL ANTONIO DE SOUZA MARTINS","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-07",6,"Custo com horas extras setor de produção","",137.73,1,"VITORIA CRISTINA TANGODA MAIA","","03_inter","c","custo"],["d","2026-07",6,"Custo com horas extras setor de produção","",50.54,1,"RAFAEL DOS SANTOS PILIELO","","03_inter","c","custo"],["d","2026-07",6,"Custo com horas extras setor de produção","",84.32,1,"ISABELA TENORIO BARONE","","03_inter","c","custo"],["d","2026-07",6,"Custo com horas extras setor de produção","",35.73,1,"KARINA DE LIMA TENORIO","","03_inter","c","custo"],["d","2026-07",6,"Custo com horas extras setor de produção","",252.61,1,"LEANDRO MARTINS BELCHIOR DA SILVA","","03_inter","c","custo"],["d","2026-07",6,"Custo com horas extras setor de produção","",79.93,1,"POLYANA CECILIA ALMEIDA FERREIRA","","03_inter","c","custo"],["d","2026-07",6,"Custo com horas extras setor de produção","",107.45,1,"AMANDA LOPES PAIS","","03_inter","c","custo"],["d","2026-07",6,"Custo com horas extras setor de produção","",155.18,1,"DANIELLY DE SOUSA SILVA","","03_inter","c","custo"],["d","2026-07",6,"Vale-Refeição (VR)","",150,1,"ISABELA TENORIO BARONE","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-07",6,"Vale-Refeição (VR)","",150,1,"LEANDRO MARTINS BELCHIOR DA SILVA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-07",6,"Vale-Refeição (VR)","",150,1,"AMANDA LOPES PAIS","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-07",6,"Vale-Refeição (VR)","",150,1,"VITORIA CRISTINA TANGODA MAIA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-07",6,"Vale-Refeição (VR)","",150,1,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-07",6,"Vale-Refeição (VR)","",150,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-07",6,"Vale-Refeição (VR)","",150,1,"KARINA DE LIMA TENORIO","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-07",6,"Vale-Refeição (VR)","",150,1,"DANIELLY DE SOUSA SILVA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-07",6,"Vale-Refeição (VR)","",150,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","01_sicredi","c","despesa"],["d","2026-07",6,"Direitos a receber","",30,1,"SICREDI","","01_sicredi","c","investimento"],["d","2026-07",6,"Salários e encargos","",1947.15,1,"LEANDRO MARTINS BELCHIOR DA SILVA","Despesas com colaboradores","03_inter","c","despesa"],["d","2026-07",6,"Salários e encargos","",1897.56,1,"KARINA DE LIMA TENORIO","Despesas com colaboradores","03_inter","c","despesa"],["d","2026-07",6,"Salários e encargos","",1643.56,1,"VITORIA CRISTINA TANGODA MAIA","Despesas com colaboradores","03_inter","c","despesa"],["d","2026-07",6,"Salários e encargos","",1691.37,1,"AMANDA LOPES PAIS","Despesas com colaboradores","03_inter","c","despesa"],["d","2026-07",6,"Salários e encargos","",2319.71,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","03_inter","c","despesa"],["d","2026-07",6,"Salários e encargos","",1702.1,1,"ISABELA TENORIO BARONE","Despesas com colaboradores","03_inter","c","despesa"],["d","2026-07",6,"Salários e encargos","",1638.36,1,"DANIELLY DE SOUSA SILVA","Despesas com colaboradores","03_inter","c","despesa"],["d","2026-07",6,"Salários e encargos","",2316.24,1,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","03_inter","c","despesa"],["d","2026-07",6,"Salários e encargos","",2008.12,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","03_inter","c","despesa"],["d","2026-07",7,"Serviços de sistema de gestão","",270,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-07",7,"Serviços de sistema de gestão","",149,1,"SAMUEL ANTONIO DE SOUZA MARTINS","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-07",7,"Reembolsos por fora de marketplaces","",21,1,"REEMBOLSOS","Despesas operacionais","01_sicredi","c","despesa"],["d","2026-07",7,"Despesas com materiais de consumo","",189.84,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-07",7,"Compra de matéria-prima","",2125,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-07",7,"Compra de matéria-prima","",3598.9,1,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-07",7,"Compra de insumos para expedição","",292,1,"VALDERI FERREIRA BARBOSA JUNIOR - IMPAKTO VISUAL","","01_sicredi","c","custo"],["d","2026-07",7,"Despesas com alimentação","",644,1,"MARLENE DE SOUZA SILVA LTDA - PADARIA NOVA OPÇÃO","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-07",8,"Compra de matéria-prima","",6337.31,1,"SMART PRODUTOS QUIMICOS LTDA","","01_sicredi","c","custo"],["d","2026-07",8,"Outras despesas (Não considerar DRE)","",100,1,"JOSE AUGUSTO VIEIRA DO LIVRAMENTO","Despesas não operacionais","01_sicredi","c","despesa"],["d","2026-07",8,"Outras despesas (Não considerar DRE)","",350,1,"SAMUEL ANTONIO DE SOUZA MARTINS","Despesas não operacionais","01_sicredi","c","despesa"],["d","2026-07",9,"Compra de matéria-prima","",1596.94,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","01_sicredi","c","custo"],["d","2026-07",10,"Despesa com materiais de uso e consumo operacional","",153.56,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2026-07",10,"Despesa com materiais de uso e consumo operacional","",249,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2026-07",10,"Despesa com materiais de uso e consumo operacional","",193,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2026-07",10,"Despesa com materiais de uso e consumo operacional","",100,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","","01_sicredi","c","custo"],["d","2026-07",10,"Despesa com materiais de uso e consumo operacional","",7.5,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","","01_sicredi","c","custo"],["d","2026-07",10,"Despesa com materiais de uso e consumo operacional","",104.5,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2026-07",10,"Despesas com aluguéis para uso","",2500,1,"PAULO CESAR LOPES (ROPE)","Despesas com aluguéis","caixa_dinheiro","c","despesa"],["d","2026-07",10,"Despesas com materiais de consumo","",242.8,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-07",10,"Despesas com materiais de consumo","",123.27,1,"MERCADO LIVRE","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-07",10,"Despesas com materiais de consumo","",169.93,1,"MERCADO LIVRE","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-07",10,"Compra de matéria-prima","",1688.14,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2026-07",10,"Compra de matéria-prima","",8422.56,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-07",10,"Compra de matéria-prima","",8418.68,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","01_sicredi","c","custo"],["d","2026-07",10,"Serviços de contabilidade","",1000,1,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-07",10,"Compra de insumos para expedição","",7.43,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2026-07",10,"Compra de ativo imobilizado","",383,1,"MERCADO LIVRE","","01_sicredi","c","investimento"],["d","2026-07",10,"Compra de ativo imobilizado","",472.26,1,"MERCADO LIVRE","","01_sicredi","c","investimento"],["d","2026-07",10,"Despesas com outros serviços contratados","",150,1,"ESCOBAR & CORREA LTDA - ESCOSEG","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-07",10,"Despesas com outros serviços contratados","",150,1,"CRISTIANE SANCHES ROCAILKS","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-07",10,"Compra de insumos para produção","",142.5,1,"MERCADO LIVRE","","01_sicredi","c","custo"],["d","2026-07",10,"Luz, água e outros","",69,1,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","01_sicredi","c","despesa"],["d","2026-07",11,"Frete para compra de material","",150,1,"CINTIA FERNANDA ALVES LIMA","","01_sicredi","c","despesa"],["d","2026-07",11,"Compra de insumos para expedição","",2071.39,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","01_sicredi","c","custo"],["d","2026-07",12,"Serviços contratados para marketing","",42,1,"LINKTREE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-07",12,"Serviços contratados para marketing","",1.47,1,"LINKTREE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-07",12,"Serviços contratados para marketing","",1.47,1,"LINKTREE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-07",12,"Serviços contratados para marketing","",42,1,"LINKTREE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-07",12,"Serviços de sistema de gestão","",24.91,1,"SERASA S.A.","Despesas com serviços","03_inter","c","despesa"],["d","2026-07",12,"Serviços de sistema de gestão","",362.28,1,"TINY ERP","Despesas com serviços","03_inter","c","despesa"],["d","2026-07",12,"Despesas administrativas","",30,1,"CLARO S.A.","Despesas administrativas","03_inter","c","despesa"],["d","2026-07",12,"Compra de matéria-prima","",973.35,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","03_inter","c","custo"],["d","2026-07",12,"Despesas com ADS","",1000,1,"BR TIKTOK SHOP BRASIL LTDA","Marketing e publicidade","03_inter","c","despesa"],["d","2026-07",12,"Despesas com ADS","",622.35,1,"BR TIKTOK SHOP BRASIL LTDA","Marketing e publicidade","03_inter","c","despesa"],["d","2026-07",12,"Despesas com ADS","",314.74,1,"BR TIKTOK SHOP BRASIL LTDA","Marketing e publicidade","03_inter","c","despesa"],["d","2026-07",12,"Despesas com ADS","",288.71,1,"BR TIKTOK SHOP BRASIL LTDA","Marketing e publicidade","03_inter","c","despesa"],["d","2026-07",12,"Despesas com ADS","",500,1,"SHOPEE","Marketing e publicidade","03_inter","c","despesa"],["d","2026-07",12,"Despesas com ADS","",532.88,1,"BR TIKTOK SHOP BRASIL LTDA","Marketing e publicidade","03_inter","c","despesa"],["d","2026-07",12,"Despesas com outros serviços contratados","",9.9,1,"MERCADO LIVRE","Despesas com serviços","03_inter","c","despesa"],["d","2026-07",12,"Compra de insumos para produção","",672,1,"TIQUETA MATERIAL IMPRESSO LTDA","","03_inter","c","custo"],["d","2026-07",13,"Frete para compra de material","",120,1,"CAMILA OLIMPIO CARMONA","","01_sicredi","c","despesa"],["d","2026-07",13,"Frete para compra de material (Não considerar DRE)","",100,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-07",13,"Compra de matéria-prima","",1979,1,"ELYPLAST RIO PRETO LTDA","","01_sicredi","c","custo"],["d","2026-07",13,"Compra de insumos para expedição","",417.4,1,"VALDERI FERREIRA BARBOSA JUNIOR - IMPAKTO VISUAL","","01_sicredi","c","custo"],["d","2026-07",14,"Frete para compra de material (Não considerar DRE)","",110,1,"DARBI RINTON ALVES DO NASCIMENTO","","01_sicredi","c","despesa"],["d","2026-07",14,"Frete para compra de material (Não considerar DRE)","",209.24,1,"JOAO EDUARDO GONCALVES NOGUEIRA","","01_sicredi","c","despesa"],["d","2026-07",14,"Despesas com materiais de consumo","",183.12,1,"TAMBASA - TECIDOS E ARMARINHOS MIGUEL BARTOLOMEU S/A","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-07",14,"Compra de matéria-prima","",2125,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-07",14,"Compra de matéria-prima","",3598.9,1,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","01_sicredi","c","custo"],["d","2026-07",14,"Compra de matéria-prima","",2179,0,"ELYPLAST RIO PRETO LTDA","","","c","custo"],["d","2026-07",14,"Compra de ativo imobilizado","",564.32,1,"TAMBASA - TECIDOS E ARMARINHOS MIGUEL BARTOLOMEU S/A","","01_sicredi","c","investimento"],["d","2026-07",14,"Despesas com outros serviços contratados","",200,1,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas com serviços","01_sicredi","c","despesa"],["d","2026-07",14,"Despesas com alimentação","",45.56,1,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas administrativas","01_sicredi","c","despesa"],["d","2026-07",15,"Frete para compra de material","",922.19,0,"TATIANE DE SOUZA BARONI - TRANSPORTES","","","c","despesa"],["d","2026-07",15,"Frete para compra de material","",705.49,0,"TATIANE DE SOUZA BARONI - TRANSPORTES","","","c","despesa"],["d","2026-07",15,"Pagamento de empréstimo","",3914.47,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2026-07",15,"Compra de matéria-prima","",6038.48,0,"ALCOOL FERREIRA - CNA S.A.","","","c","custo"],["d","2026-07",15,"Compra de matéria-prima","",8250,0,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","","c","custo"],["d","2026-07",15,"Serviços de contabilidade","",450,0,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","","c","despesa"],["d","2026-07",15,"Compra de mercadorias","",8935.5,0,"EMMILY REGINA COSMO BETARELLO - FLORAE","","","c","custo"],["d","2026-07",15,"Compra de mercadorias","",980,0,"EMMILY REGINA COSMO BETARELLO - FLORAE","","","c","custo"],["d","2026-07",15,"Despesas com outros serviços contratados","",11000.8,0,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","","c","despesa"],["d","2026-07",16,"Compra de matéria-prima","",1596.93,0,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","","c","custo"],["d","2026-07",16,"Compra de matéria-prima","",7646.26,0,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","","c","custo"],["d","2026-07",17,"Compra de matéria-prima","",8418.68,0,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","","c","custo"],["d","2026-07",17,"Compra de mercadorias","",1900,0,"ENNATERRA AROMATIZADORES LTDA","","","c","custo"],["d","2026-07",17,"Despesas com outros serviços contratados","",150,0,"CRISTIANE SANCHES ROCAILKS","Despesas com serviços","","c","despesa"],["d","2026-07",18,"Manutenção predial e benfeitorias","",496.9,0,"BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR","","","c","despesa"],["d","2026-07",20,"Serviços contratados para marketing","",700,0,"JOSE AMARAL DE ALMEIDA - DESIGNER","Marketing e publicidade","","c","despesa"],["d","2026-07",20,"Impostos sobre receita","",18703.5,0,"SIMPLES NACIONAL","","","c","custo"],["d","2026-07",20,"Luz, água e outros","",370,0,"ELEKTRO REDES S.A.","Despesas operacionais","","c","despesa"],["d","2026-07",20,"Salários e encargos","",496.71,0,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","","c","despesa"],["d","2026-07",20,"Salários e encargos","",1171.55,0,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","","c","despesa"],["d","2026-07",20,"Compra de matéria-prima","",1029.74,0,"PUMP AMERICA INDUSTRIA DE VALVULAS LTDA","","","c","custo"],["d","2026-07",21,"Despesas com frete para devolução e reenvio","",2640.85,0,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","","c","despesa"],["d","2026-07",21,"Compra de matéria-prima","",888.91,0,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","","c","custo"],["d","2026-07",21,"Compra de matéria-prima","",3598.9,0,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","","c","custo"],["d","2026-07",21,"Despesas com ADS","",2000,0,"SHOPEE","Marketing e publicidade","","c","despesa"],["d","2026-07",21,"Despesas com ADS","",4000,0,"SHOPEE","Marketing e publicidade","","c","despesa"],["d","2026-07",21,"Despesas com ADS","",500,0,"SHOPEE","Marketing e publicidade","","c","despesa"],["d","2026-07",21,"Despesas com ADS","",1983.39,0,"BR TIKTOK SHOP BRASIL LTDA","Marketing e publicidade","","c","despesa"],["d","2026-07",21,"Despesas com ADS","",4000,0,"BR TIKTOK SHOP BRASIL LTDA","Marketing e publicidade","","c","despesa"],["d","2026-07",21,"Despesas com ADS","",630,0,"BR TIKTOK SHOP BRASIL LTDA","Marketing e publicidade","","c","despesa"],["d","2026-07",21,"Despesas com ADS","",1500,0,"BR TIKTOK SHOP BRASIL LTDA","Marketing e publicidade","","c","despesa"],["d","2026-07",22,"Compra de matéria-prima","",8250,0,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","","c","custo"],["d","2026-07",22,"Compra de matéria-prima","",6038.48,0,"ALCOOL FERREIRA - CNA S.A.","","","c","custo"],["d","2026-07",22,"Compra de insumos para expedição","",81.66,0,"PRIME BOX EMBALAGENS PAPELAO LTDA","","","c","custo"],["d","2026-07",23,"Compra de matéria-prima","",1596.93,0,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","","c","custo"],["d","2026-07",23,"Compra de matéria-prima","",7646.18,0,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","","c","custo"],["d","2026-07",23,"Compra de insumos para expedição","",2209.27,0,"PRIME BOX EMBALAGENS PAPELAO LTDA","","","c","custo"],["d","2026-07",24,"Compra de matéria-prima","",8418.68,0,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","","c","custo"],["d","2026-07",24,"Despesas com outros serviços contratados","",150,0,"CRISTIANE SANCHES ROCAILKS","Despesas com serviços","","c","despesa"],["d","2026-07",25,"Compra de insumos para expedição","",1418.97,0,"TOLOY COMERCIO DE EMBALAGENS LTDA.","","","c","custo"],["d","2026-07",25,"Despesas com outros serviços contratados","",2431.5,0,"MARRI CONSULTORIA EMPRESARIAL LTDA","Despesas com serviços","","c","despesa"],["d","2026-07",26,"Compra de insumos para expedição","",2071.38,0,"PRIME BOX EMBALAGENS PAPELAO LTDA","","","c","custo"],["d","2026-07",27,"Compra de matéria-prima","",3300,0,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","","c","custo"],["d","2026-07",27,"Compra de matéria-prima","",1029.74,0,"PUMP AMERICA INDUSTRIA DE VALVULAS LTDA","","","c","custo"],["d","2026-07",27,"Compra de matéria-prima","",3261.54,0,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","","c","custo"],["d","2026-07",27,"Compra de mercadorias","",5300,0,"ENNATERRA AROMATIZADORES LTDA","","","c","custo"],["d","2026-07",28,"Compra de matéria-prima","",3598.91,0,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","","c","custo"],["d","2026-07",29,"Serviços de sistema de gestão","",479,0,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","","c","despesa"],["d","2026-07",29,"Compra de matéria-prima","",8250,0,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","","c","custo"],["d","2026-07",29,"Compra de insumos para expedição","",855.16,0,"TOLOY COMERCIO DE EMBALAGENS LTDA.","","","c","custo"],["d","2026-07",29,"Compra de insumos para expedição","",1350,0,"MUNDO GIBA LTDA - MUNDO GB","","","c","custo"],["d","2026-07",30,"Compra de matéria-prima","",7646.18,0,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","","c","custo"],["d","2026-07",31,"Impostos e Taxas","",1670.91,0,"SECRETARIA DA FAZENDA E PLANEJAMENTO","Despesas Financeiras","","c","despesa"],["d","2026-07",31,"Despesas com outros serviços contratados","",150,0,"CRISTIANE SANCHES ROCAILKS","Despesas com serviços","","c","despesa"],["d","2026-08",1,"Compra de mercadorias","",1700,0,"ENNATERRA AROMATIZADORES LTDA","","","c","custo"],["d","2026-08",1,"Compra de ativo imobilizado","",900,0,"CLIMAK INDUSTRIA E COMERCIO DE MAQUINAS E EQUIPAMENTOS LTDA - EDERMAK","","","c","investimento"],["d","2026-08",1,"Despesas com alimentação","",644,0,"MARLENE DE SOUZA SILVA LTDA - PADARIA NOVA OPÇÃO","Despesas administrativas","","c","despesa"],["d","2026-08",2,"Luz, água e outros","",234.99,0,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","","c","despesa"],["d","2026-08",3,"Compra de matéria-prima","",1029.73,0,"PUMP AMERICA INDUSTRIA DE VALVULAS LTDA","","","c","custo"],["d","2026-08",3,"Compra de matéria-prima","",3261.52,0,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","","c","custo"],["d","2026-08",5,"Compra de matéria-prima","",8250,0,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","","c","custo"],["d","2026-08",5,"Compra de matéria-prima","",1116.44,0,"PUMP AMERICA INDUSTRIA DE VALVULAS LTDA","","","c","custo"],["d","2026-08",5,"Compra de mercadorias","",5300,0,"ENNATERRA AROMATIZADORES LTDA","","","c","custo"],["d","2026-08",6,"Despesas com benefícios aos sócios e diretores","",200,0,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas administrativas","","c","despesa"],["d","2026-08",6,"Despesas com benefícios aos sócios e diretores","",200,0,"SAMUEL ANTONIO DE SOUZA MARTINS","Despesas administrativas","","c","despesa"],["d","2026-08",6,"Compra de matéria-prima","",7646.18,0,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","","c","custo"],["d","2026-08",6,"Serviços de contabilidade","",1000,0,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","","c","despesa"],["d","2026-08",6,"Compra de insumos para expedição","",81.67,0,"PRIME BOX EMBALAGENS PAPELAO LTDA","","","c","custo"],["d","2026-08",6,"Vale-Refeição (VR)","",150,0,"KARINA DE LIMA TENORIO","Despesas com colaboradores","","c","despesa"],["d","2026-08",6,"Vale-Refeição (VR)","",150,0,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","","c","despesa"],["d","2026-08",6,"Vale-Refeição (VR)","",150,0,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","","c","despesa"],["d","2026-08",6,"Vale-Refeição (VR)","",150,0,"VITORIA CRISTINA TANGODA MAIA","Despesas com colaboradores","","c","despesa"],["d","2026-08",6,"Vale-Refeição (VR)","",150,0,"LEANDRO MARTINS BELCHIOR DA SILVA","Despesas com colaboradores","","c","despesa"],["d","2026-08",6,"Vale-Refeição (VR)","",150,0,"DANIELLY DE SOUSA SILVA","Despesas com colaboradores","","c","despesa"],["d","2026-08",6,"Vale-Refeição (VR)","",150,0,"AMANDA LOPES PAIS","Despesas com colaboradores","","c","despesa"],["d","2026-08",6,"Vale-Refeição (VR)","",150,0,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","","c","despesa"],["d","2026-08",6,"Vale-Refeição (VR)","",150,0,"ISABELA TENORIO BARONE","Despesas com colaboradores","","c","despesa"],["d","2026-08",6,"Salários e encargos","",1662.63,0,"DANIELLY DE SOUSA SILVA","Despesas com colaboradores","","c","despesa"],["d","2026-08",6,"Salários e encargos","",1662.32,0,"VITORIA CRISTINA TANGODA MAIA","Despesas com colaboradores","","c","despesa"],["d","2026-08",6,"Salários e encargos","",1662.63,0,"AMANDA LOPES PAIS","Despesas com colaboradores","","c","despesa"],["d","2026-08",6,"Salários e encargos","",1957.35,0,"ISABELA TENORIO BARONE","Despesas com colaboradores","","c","despesa"],["d","2026-08",6,"Salários e encargos","",1957.35,0,"KARINA DE LIMA TENORIO","Despesas com colaboradores","","c","despesa"],["d","2026-08",6,"Salários e encargos","",2321.35,0,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","","c","despesa"],["d","2026-08",6,"Salários e encargos","",1957.35,0,"LEANDRO MARTINS BELCHIOR DA SILVA","Despesas com colaboradores","","c","despesa"],["d","2026-08",6,"Salários e encargos","",2200,0,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","","c","despesa"],["d","2026-08",6,"Salários e encargos","",2008.12,0,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","","c","despesa"],["d","2026-08",7,"Compra de insumos para expedição","",2209.27,0,"PRIME BOX EMBALAGENS PAPELAO LTDA","","","c","custo"],["d","2026-08",7,"Despesas com outros serviços contratados","",150,0,"CRISTIANE SANCHES ROCAILKS","Despesas com serviços","","c","despesa"],["d","2026-08",9,"Compra de matéria-prima","",6988.08,0,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","","c","custo"],["d","2026-08",10,"Despesa com materiais de uso e consumo operacional","",36,0,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","","","c","custo"],["d","2026-08",10,"Despesa com materiais de uso e consumo operacional","",19.5,0,"BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR","","","c","custo"],["d","2026-08",10,"Despesa com materiais de uso e consumo operacional","",301.9,0,"MERCADO LIVRE","","","c","custo"],["d","2026-08",10,"Despesas com aluguéis para uso","",2500,0,"PAULO CESAR LOPES (ROPE)","Despesas com aluguéis","","c","despesa"],["d","2026-08",10,"Despesas com materiais de consumo","",4,0,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","","c","despesa"],["d","2026-08",10,"Despesas com materiais de consumo","",45.4,0,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","","c","despesa"],["d","2026-08",10,"Despesas com materiais de consumo","",25,0,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","","c","despesa"],["d","2026-08",10,"Despesas com materiais de consumo","",28.4,0,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","","c","despesa"],["d","2026-08",10,"Compra de matéria-prima","",1029.73,0,"PUMP AMERICA INDUSTRIA DE VALVULAS LTDA","","","c","custo"],["d","2026-08",10,"Compra de matéria-prima","",3300,0,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","","c","custo"],["d","2026-08",10,"Compra de matéria-prima","",3261.52,0,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","","c","custo"],["d","2026-08",10,"Compra de insumos para expedição","",899.32,0,"AURIPELL EMBALAGENS LTDA","","","c","custo"],["d","2026-08",10,"Despesas com ADS","",3500,0,"SHOPEE","Marketing e publicidade","","c","despesa"],["d","2026-08",10,"Despesas com ADS","",1000,0,"SHOPEE","Marketing e publicidade","","c","despesa"],["d","2026-08",10,"Compra de ativo imobilizado","",383,0,"MERCADO LIVRE","","","c","investimento"],["d","2026-08",10,"Despesas com outros serviços contratados","",150,0,"ESCOBAR & CORREA LTDA - ESCOSEG","Despesas com serviços","","c","despesa"],["d","2026-08",10,"Despesas com outros serviços contratados","",9.9,0,"MERCADO LIVRE","Despesas com serviços","","c","despesa"],["d","2026-08",10,"Luz, água e outros","",69,0,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","","c","despesa"],["d","2026-08",12,"Serviços contratados para marketing","",42,0,"LINKTREE","Marketing e publicidade","","c","despesa"],["d","2026-08",12,"Serviços contratados para marketing","",1.47,0,"LINKTREE","Marketing e publicidade","","c","despesa"],["d","2026-08",12,"Serviços de sistema de gestão","",24.99,0,"SERASA S.A.","Despesas com serviços","","c","despesa"],["d","2026-08",12,"Despesas administrativas","",30,0,"CLARO S.A.","Despesas administrativas","","c","despesa"],["d","2026-08",12,"Compra de matéria-prima","",973.35,0,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","","c","custo"],["d","2026-08",12,"Compra de matéria-prima","",988,0,"PUMP AMERICA INDUSTRIA DE VALVULAS LTDA","","","c","custo"],["d","2026-08",12,"Compra de matéria-prima","",8250,0,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","","c","custo"],["d","2026-08",13,"Despesas com materiais de consumo","",183.12,0,"TAMBASA - TECIDOS E ARMARINHOS MIGUEL BARTOLOMEU S/A","Despesas administrativas","","c","despesa"],["d","2026-08",13,"Compra de matéria-prima","",7646.18,0,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","","c","custo"],["d","2026-08",13,"Compra de ativo imobilizado","",564.32,0,"TAMBASA - TECIDOS E ARMARINHOS MIGUEL BARTOLOMEU S/A","","","c","investimento"],["d","2026-08",14,"Compra de mercadorias","",1700,0,"ENNATERRA AROMATIZADORES LTDA","","","c","custo"],["d","2026-08",14,"Despesas com outros serviços contratados","",150,0,"CRISTIANE SANCHES ROCAILKS","Despesas com serviços","","c","despesa"],["d","2026-08",15,"Serviços de contabilidade","",450,0,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","","c","despesa"],["d","2026-08",15,"Compra de mercadorias","",9342.5,0,"EMMILY REGINA COSMO BETARELLO - FLORAE","","","c","custo"],["d","2026-08",15,"Despesas com outros serviços contratados","",11000.8,0,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","","c","despesa"],["d","2026-08",16,"Compra de matéria-prima","",6988.06,0,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","","c","custo"],["d","2026-08",17,"Pagamento de empréstimo","",4037.57,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2026-08",17,"Compra de matéria-prima","",3261.52,0,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","","c","custo"],["d","2026-08",18,"Compra de insumos para expedição","",2170,0,"PRIME BOX EMBALAGENS PAPELAO LTDA","","","c","custo"],["d","2026-08",19,"Compra de matéria-prima","",8250,0,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","","c","custo"],["d","2026-08",19,"Compra de matéria-prima","",988,0,"PUMP AMERICA INDUSTRIA DE VALVULAS LTDA","","","c","custo"],["d","2026-08",20,"Serviços contratados para marketing","",700,0,"JOSE AMARAL DE ALMEIDA - DESIGNER","Marketing e publicidade","","c","despesa"],["d","2026-08",20,"Compra de matéria-prima","",6227.36,0,"SMART PRODUTOS QUIMICOS LTDA","","","c","custo"],["d","2026-08",20,"Compra de matéria-prima","",7646.18,0,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","","c","custo"],["d","2026-08",20,"Impostos sobre receita","",17014.29,0,"SIMPLES NACIONAL","","","c","custo"],["d","2026-08",20,"Luz, água e outros","",370,0,"ELEKTRO REDES S.A.","Despesas operacionais","","c","despesa"],["d","2026-08",20,"Salários e encargos","",496.71,0,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","","c","despesa"],["d","2026-08",20,"Salários e encargos","",1171.55,0,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","","c","despesa"],["d","2026-08",21,"Despesas com frete para devolução e reenvio","",500,0,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","","c","despesa"],["d","2026-08",21,"Compra de matéria-prima","",888.91,0,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","","c","custo"],["d","2026-08",21,"Compra de insumos para expedição","",81.67,0,"PRIME BOX EMBALAGENS PAPELAO LTDA","","","c","custo"],["d","2026-08",21,"Despesas com outros serviços contratados","",150,0,"CRISTIANE SANCHES ROCAILKS","Despesas com serviços","","c","despesa"],["d","2026-08",22,"Compra de insumos para expedição","",2209.26,0,"PRIME BOX EMBALAGENS PAPELAO LTDA","","","c","custo"],["d","2026-08",23,"Compra de matéria-prima","",6988.06,0,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","","c","custo"],["d","2026-08",24,"Compra de matéria-prima","",3261.52,0,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","","c","custo"],["d","2026-08",25,"Despesas com outros serviços contratados","",2431.5,0,"MARRI CONSULTORIA EMPRESARIAL LTDA","Despesas com serviços","","c","despesa"],["d","2026-08",26,"Compra de matéria-prima","",8250,0,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","","c","custo"],["d","2026-08",26,"Compra de matéria-prima","",988,0,"PUMP AMERICA INDUSTRIA DE VALVULAS LTDA","","","c","custo"],["d","2026-08",27,"Compra de matéria-prima","",7646.18,0,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","","c","custo"],["d","2026-08",28,"Despesas com outros serviços contratados","",150,0,"CRISTIANE SANCHES ROCAILKS","Despesas com serviços","","c","despesa"],["d","2026-08",29,"Serviços de sistema de gestão","",479,0,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","","c","despesa"],["d","2026-08",30,"Compra de matéria-prima","",6988.06,0,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","","c","custo"],["d","2026-08",31,"Compra de insumos para expedição","",2170,0,"PRIME BOX EMBALAGENS PAPELAO LTDA","","","c","custo"],["d","2026-09",1,"Despesas com alimentação","",644,0,"MARLENE DE SOUZA SILVA LTDA - PADARIA NOVA OPÇÃO","Despesas administrativas","","c","despesa"],["d","2026-09",2,"Compra de matéria-prima","",8250,0,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","","c","custo"],["d","2026-09",2,"Luz, água e outros","",234.99,0,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","","c","despesa"],["d","2026-09",4,"Despesas com outros serviços contratados","",150,0,"CRISTIANE SANCHES ROCAILKS","Despesas com serviços","","c","despesa"],["d","2026-09",5,"Compra de mercadorias","",5300,0,"ENNATERRA AROMATIZADORES LTDA","","","c","custo"],["d","2026-09",6,"Despesas com benefícios aos sócios e diretores","",200,0,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas administrativas","","c","despesa"],["d","2026-09",6,"Despesas com benefícios aos sócios e diretores","",200,0,"SAMUEL ANTONIO DE SOUZA MARTINS","Despesas administrativas","","c","despesa"],["d","2026-09",6,"Compra de matéria-prima","",6988.06,0,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","","c","custo"],["d","2026-09",6,"Serviços de contabilidade","",1000,0,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","","c","despesa"],["d","2026-09",6,"Vale-Refeição (VR)","",150,0,"LEANDRO MARTINS BELCHIOR DA SILVA","Despesas com colaboradores","","c","despesa"],["d","2026-09",6,"Vale-Refeição (VR)","",150,0,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","","c","despesa"],["d","2026-09",6,"Vale-Refeição (VR)","",150,0,"AMANDA LOPES PAIS","Despesas com colaboradores","","c","despesa"],["d","2026-09",6,"Vale-Refeição (VR)","",150,0,"DANIELLY DE SOUSA SILVA","Despesas com colaboradores","","c","despesa"],["d","2026-09",6,"Vale-Refeição (VR)","",150,0,"KARINA DE LIMA TENORIO","Despesas com colaboradores","","c","despesa"],["d","2026-09",6,"Vale-Refeição (VR)","",150,0,"ISABELA TENORIO BARONE","Despesas com colaboradores","","c","despesa"],["d","2026-09",6,"Vale-Refeição (VR)","",150,0,"VITORIA CRISTINA TANGODA MAIA","Despesas com colaboradores","","c","despesa"],["d","2026-09",6,"Vale-Refeição (VR)","",150,0,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","","c","despesa"],["d","2026-09",6,"Vale-Refeição (VR)","",150,0,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","","c","despesa"],["d","2026-09",6,"Salários e encargos","",1662.63,0,"DANIELLY DE SOUSA SILVA","Despesas com colaboradores","","c","despesa"],["d","2026-09",6,"Salários e encargos","",1957.35,0,"ISABELA TENORIO BARONE","Despesas com colaboradores","","c","despesa"],["d","2026-09",6,"Salários e encargos","",1662.63,0,"AMANDA LOPES PAIS","Despesas com colaboradores","","c","despesa"],["d","2026-09",6,"Salários e encargos","",1957.35,0,"KARINA DE LIMA TENORIO","Despesas com colaboradores","","c","despesa"],["d","2026-09",6,"Salários e encargos","",2321.35,0,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","","c","despesa"],["d","2026-09",6,"Salários e encargos","",1957.35,0,"LEANDRO MARTINS BELCHIOR DA SILVA","Despesas com colaboradores","","c","despesa"],["d","2026-09",6,"Salários e encargos","",1662.32,0,"VITORIA CRISTINA TANGODA MAIA","Despesas com colaboradores","","c","despesa"],["d","2026-09",6,"Salários e encargos","",2008.12,0,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","","c","despesa"],["d","2026-09",6,"Salários e encargos","",2200,0,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","","c","despesa"],["d","2026-09",9,"Compra de matéria-prima","",8250,0,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","","c","custo"],["d","2026-09",10,"Despesas com aluguéis para uso","",2500,0,"PAULO CESAR LOPES (ROPE)","Despesas com aluguéis","","c","despesa"],["d","2026-09",10,"Compra de ativo imobilizado","",383,0,"MERCADO LIVRE","","","c","investimento"],["d","2026-09",10,"Despesas com outros serviços contratados","",150,0,"ESCOBAR & CORREA LTDA - ESCOSEG","Despesas com serviços","","c","despesa"],["d","2026-09",10,"Despesas com outros serviços contratados","",9.9,0,"MERCADO LIVRE","Despesas com serviços","","c","despesa"],["d","2026-09",10,"Luz, água e outros","",69,0,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","","c","despesa"],["d","2026-09",11,"Despesas com outros serviços contratados","",150,0,"CRISTIANE SANCHES ROCAILKS","Despesas com serviços","","c","despesa"],["d","2026-09",12,"Serviços contratados para marketing","",1.47,0,"LINKTREE","Marketing e publicidade","","c","despesa"],["d","2026-09",12,"Serviços contratados para marketing","",42,0,"LINKTREE","Marketing e publicidade","","c","despesa"],["d","2026-09",12,"Serviços de sistema de gestão","",24.99,0,"SERASA S.A.","Despesas com serviços","","c","despesa"],["d","2026-09",12,"Despesas administrativas","",30,0,"CLARO S.A.","Despesas administrativas","","c","despesa"],["d","2026-09",15,"Pagamento de empréstimo","",3788.67,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2026-09",15,"Serviços de contabilidade","",450,0,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","","c","despesa"],["d","2026-09",15,"Compra de insumos para expedição","",2170,0,"PRIME BOX EMBALAGENS PAPELAO LTDA","","","c","custo"],["d","2026-09",15,"Despesas com outros serviços contratados","",11000.8,0,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","","c","despesa"],["d","2026-09",16,"Compra de matéria-prima","",8250,0,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","","c","custo"],["d","2026-09",18,"Despesas com outros serviços contratados","",150,0,"CRISTIANE SANCHES ROCAILKS","Despesas com serviços","","c","despesa"],["d","2026-09",20,"Serviços contratados para marketing","",700,0,"JOSE AMARAL DE ALMEIDA - DESIGNER","Marketing e publicidade","","c","despesa"],["d","2026-09",20,"Compra de matéria-prima","",6227.36,0,"SMART PRODUTOS QUIMICOS LTDA","","","c","custo"],["d","2026-09",20,"Impostos sobre receita","",17014.29,0,"SIMPLES NACIONAL","","","c","custo"],["d","2026-09",20,"Luz, água e outros","",370,0,"ELEKTRO REDES S.A.","Despesas operacionais","","c","despesa"],["d","2026-09",20,"Salários e encargos","",496.71,0,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","","c","despesa"],["d","2026-09",20,"Salários e encargos","",1171.55,0,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","","c","despesa"],["d","2026-09",21,"Despesas com frete para devolução e reenvio","",500,0,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","","c","despesa"],["d","2026-09",23,"Compra de matéria-prima","",8250,0,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","","c","custo"],["d","2026-09",25,"Despesas com outros serviços contratados","",2431.5,0,"MARRI CONSULTORIA EMPRESARIAL LTDA","Despesas com serviços","","c","despesa"],["d","2026-09",25,"Despesas com outros serviços contratados","",150,0,"CRISTIANE SANCHES ROCAILKS","Despesas com serviços","","c","despesa"],["d","2026-09",29,"Serviços de sistema de gestão","",479,0,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","","c","despesa"],["d","2026-09",30,"Compra de matéria-prima","",8250,0,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","","c","custo"],["d","2026-10",1,"Despesas com alimentação","",644,0,"MARLENE DE SOUZA SILVA LTDA - PADARIA NOVA OPÇÃO","Despesas administrativas","","c","despesa"],["d","2026-10",2,"Despesas com outros serviços contratados","",150,0,"CRISTIANE SANCHES ROCAILKS","Despesas com serviços","","c","despesa"],["d","2026-10",2,"Luz, água e outros","",234.99,0,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","","c","despesa"],["d","2026-10",5,"Compra de mercadorias","",5300,0,"ENNATERRA AROMATIZADORES LTDA","","","c","custo"],["d","2026-10",6,"Despesas com benefícios aos sócios e diretores","",200,0,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas administrativas","","c","despesa"],["d","2026-10",6,"Despesas com benefícios aos sócios e diretores","",200,0,"SAMUEL ANTONIO DE SOUZA MARTINS","Despesas administrativas","","c","despesa"],["d","2026-10",6,"Serviços de contabilidade","",1000,0,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","","c","despesa"],["d","2026-10",6,"Vale-Refeição (VR)","",150,0,"AMANDA LOPES PAIS","Despesas com colaboradores","","c","despesa"],["d","2026-10",6,"Vale-Refeição (VR)","",150,0,"KARINA DE LIMA TENORIO","Despesas com colaboradores","","c","despesa"],["d","2026-10",6,"Vale-Refeição (VR)","",150,0,"LEANDRO MARTINS BELCHIOR DA SILVA","Despesas com colaboradores","","c","despesa"],["d","2026-10",6,"Vale-Refeição (VR)","",150,0,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","","c","despesa"],["d","2026-10",6,"Vale-Refeição (VR)","",150,0,"DANIELLY DE SOUSA SILVA","Despesas com colaboradores","","c","despesa"],["d","2026-10",6,"Vale-Refeição (VR)","",150,0,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","","c","despesa"],["d","2026-10",6,"Vale-Refeição (VR)","",150,0,"ISABELA TENORIO BARONE","Despesas com colaboradores","","c","despesa"],["d","2026-10",6,"Vale-Refeição (VR)","",150,0,"VITORIA CRISTINA TANGODA MAIA","Despesas com colaboradores","","c","despesa"],["d","2026-10",6,"Vale-Refeição (VR)","",150,0,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","","c","despesa"],["d","2026-10",6,"Salários e encargos","",1662.32,0,"VITORIA CRISTINA TANGODA MAIA","Despesas com colaboradores","","c","despesa"],["d","2026-10",6,"Salários e encargos","",1957.35,0,"ISABELA TENORIO BARONE","Despesas com colaboradores","","c","despesa"],["d","2026-10",6,"Salários e encargos","",1957.35,0,"LEANDRO MARTINS BELCHIOR DA SILVA","Despesas com colaboradores","","c","despesa"],["d","2026-10",6,"Salários e encargos","",2321.35,0,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","","c","despesa"],["d","2026-10",6,"Salários e encargos","",1957.35,0,"KARINA DE LIMA TENORIO","Despesas com colaboradores","","c","despesa"],["d","2026-10",6,"Salários e encargos","",1662.63,0,"AMANDA LOPES PAIS","Despesas com colaboradores","","c","despesa"],["d","2026-10",6,"Salários e encargos","",1662.63,0,"DANIELLY DE SOUSA SILVA","Despesas com colaboradores","","c","despesa"],["d","2026-10",6,"Salários e encargos","",2200,0,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","","c","despesa"],["d","2026-10",6,"Salários e encargos","",2008.12,0,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","","c","despesa"],["d","2026-10",7,"Compra de matéria-prima","",8250,0,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","","c","custo"],["d","2026-10",9,"Despesas com outros serviços contratados","",150,0,"CRISTIANE SANCHES ROCAILKS","Despesas com serviços","","c","despesa"],["d","2026-10",10,"Despesas com aluguéis para uso","",2500,0,"PAULO CESAR LOPES (ROPE)","Despesas com aluguéis","","c","despesa"],["d","2026-10",10,"Despesas com outros serviços contratados","",150,0,"ESCOBAR & CORREA LTDA - ESCOSEG","Despesas com serviços","","c","despesa"],["d","2026-10",10,"Despesas com outros serviços contratados","",9.9,0,"MERCADO LIVRE","Despesas com serviços","","c","despesa"],["d","2026-10",10,"Luz, água e outros","",69,0,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","","c","despesa"],["d","2026-10",12,"Serviços contratados para marketing","",42,0,"LINKTREE","Marketing e publicidade","","c","despesa"],["d","2026-10",12,"Serviços contratados para marketing","",1.47,0,"LINKTREE","Marketing e publicidade","","c","despesa"],["d","2026-10",12,"Serviços de sistema de gestão","",24.99,0,"SERASA S.A.","Despesas com serviços","","c","despesa"],["d","2026-10",12,"Despesas administrativas","",30,0,"CLARO S.A.","Despesas administrativas","","c","despesa"],["d","2026-10",14,"Compra de matéria-prima","",8250,0,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","","c","custo"],["d","2026-10",15,"Pagamento de empréstimo","",3803.82,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2026-11",12,"Serviços de sistema de gestão","",24.99,0,"SERASA S.A.","Despesas com serviços","","c","despesa"],["d","2026-11",16,"Pagamento de empréstimo","",3866.13,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2026-12",12,"Serviços de sistema de gestão","",24.99,0,"SERASA S.A.","Despesas com serviços","","c","despesa"],["d","2026-12",15,"Pagamento de empréstimo","",3681.74,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2027-01",12,"Serviços de sistema de gestão","",24.99,0,"SERASA S.A.","Despesas com serviços","","c","despesa"],["d","2027-01",15,"Pagamento de empréstimo","",3740.28,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2027-02",12,"Serviços de sistema de gestão","",24.99,0,"SERASA S.A.","Despesas com serviços","","c","despesa"],["d","2027-02",15,"Pagamento de empréstimo","",3702.16,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2027-03",10,"Compra de ativo intangível","",221.96,0,"HOSTGATOR BRASIL LTDA","","","c","investimento"],["d","2027-03",12,"Serviços de sistema de gestão","",24.99,0,"SERASA S.A.","Despesas com serviços","","c","despesa"],["d","2027-03",15,"Pagamento de empréstimo","",3530.23,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2027-04",12,"Serviços de sistema de gestão","",24.99,0,"SERASA S.A.","Despesas com serviços","","c","despesa"],["d","2027-04",15,"Pagamento de empréstimo","",3625.91,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2027-05",17,"Pagamento de empréstimo","",3629.96,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2027-06",15,"Pagamento de empréstimo","",3467.88,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2027-07",15,"Pagamento de empréstimo","",3471.88,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2027-08",16,"Pagamento de empréstimo","",3511.88,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2027-09",15,"Pagamento de empréstimo","",3398.12,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2027-10",15,"Pagamento de empréstimo","",3361.24,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2027-11",16,"Pagamento de empréstimo","",3393.79,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2027-12",15,"Pagamento de empréstimo","",3254.02,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2028-01",17,"Pagamento de empréstimo","",3345.83,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2028-02",15,"Pagamento de empréstimo","",3180.28,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2028-03",15,"Pagamento de empréstimo","",3144.74,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2028-04",17,"Pagamento de empréstimo","",3222.95,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2028-05",15,"Pagamento de empréstimo","",3046.49,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2028-06",16,"Pagamento de empréstimo","",3115.98,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2028-07",17,"Pagamento de empréstimo","",3051.99,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2028-08",15,"Pagamento de empréstimo","",2967.02,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2028-09",15,"Pagamento de empréstimo","",2975.96,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2028-10",16,"Pagamento de empréstimo","",2937.94,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2028-11",16,"Pagamento de empréstimo","",2899.93,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2028-12",15,"Pagamento de empréstimo","",2824.84,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2029-01",15,"Pagamento de empréstimo","",2824.61,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2029-02",15,"Pagamento de empréstimo","",2787.24,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2029-03",15,"Pagamento de empréstimo","",2704.52,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2029-04",16,"Pagamento de empréstimo","",2724.64,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2029-05",15,"Pagamento de empréstimo","",2648.1,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2029-06",15,"Pagamento de empréstimo","",2634.76,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2029-07",16,"Pagamento de empréstimo","",2596.64,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2029-08",15,"Pagamento de empréstimo","",2549.84,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2029-09",17,"Pagamento de empréstimo","",2535.28,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2029-10",15,"Pagamento de empréstimo","",2463.69,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2029-11",16,"Pagamento de empréstimo","",2449.11,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2029-12",17,"Pagamento de empréstimo","",2406.03,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2030-01",15,"Pagamento de empréstimo","",2362.95,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"],["d","2030-02",15,"Pagamento de empréstimo","",2329.79,0,"ORNATA DOMUS COMPANY LTDA","","","c","financiamento"]];

const REF_YEAR = 2026;
const AVAILABLE_YEARS = [2030,2029,2028,2027,2026,2025];

// aggregateTx: recomputa MONTH_DATA, KPIS, top categorias/clientes/fornecedores
// e EXTRATO a partir de uma lista filtrada de transacoes. Chamada pelas Pages
// quando drilldown ou statusFilter estao ativos.
function aggregateTx(txList, year, receitaScope) {
  year = year || REF_YEAR;
  const months = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
  const MONTH_DATA = months.map(m => ({ m, receita: 0, despesa: 0 }));
  const RECEITA_DIA = Array(31).fill(0);
  const DESPESA_DIA = Array(31).fill(0);
  const recCat = new Map(), despCat = new Map();
  const recCli = new Map(), despForn = new Map();
  const extratoArr = [];
  const extratoRecArr = [], extratoDespArr = [];
  let totalReceita = 0, totalDespesa = 0;

  for (const row of txList) {
    const [kind, mes, dia, categoria, cliente, valor, realizado, fornecedor, cc] = row;
    if (!mes) continue;
    const ymonth = mes.slice(0,4);
    if (Number(ymonth) !== year) continue;
    const mIdx = parseInt(mes.slice(5,7), 10) - 1;
    if (mIdx < 0 || mIdx > 11) continue;
    // receitaScope='operacional': tela Receita conta só receita operacional
    // (exclui entradas de financiamento/investimento, ex.: empréstimo). Essas
    // entradas continuam no Fluxo de Caixa via os agregados padrão (sem scope).
    if (receitaScope === 'operacional' && kind === 'r' && row[11] && row[11] !== 'receita') continue;
    if (kind === 'r') {
      MONTH_DATA[mIdx].receita += valor;
      totalReceita += valor;
      recCat.set(categoria, (recCat.get(categoria) || 0) + valor);
      if (cliente) recCli.set(cliente, (recCli.get(cliente) || 0) + valor);
      if (dia >= 1 && dia <= 31) RECEITA_DIA[dia - 1] += valor;
    } else {
      MONTH_DATA[mIdx].despesa += valor;
      totalDespesa += valor;
      despCat.set(categoria, (despCat.get(categoria) || 0) + valor);
      if (fornecedor) despForn.set(fornecedor, (despForn.get(fornecedor) || 0) + valor);
      if (dia >= 1 && dia <= 31) DESPESA_DIA[dia - 1] += valor;
    }
    // Extrato compacto pra tabela (renomeado pra extRow porque outer for já usa 'row')
    const dataStr = String(dia).padStart(2,'0') + '/' + mes.slice(5,7) + '/' + mes.slice(0,4);
    const extRow = [dataStr, cc || 'Operações', categoria, kind === 'r' ? cliente : fornecedor, kind === 'r' ? valor : -valor, realizado ? 'PAGO' : ''];
    extratoArr.push(extRow);
    if (kind === 'r') extratoRecArr.push(extRow); else extratoDespArr.push(extRow);
  }

  // sort por data desc (string DD/MM/YYYY → Date) — aplica nos 3 arrays
  const sortByDateDesc = (a, b) => {
    const [da,ma,ya] = a[0].split('/').map(Number);
    const [db,mb,yb] = b[0].split('/').map(Number);
    return new Date(yb,mb-1,db) - new Date(ya,ma-1,da);
  };
  extratoArr.sort(sortByDateDesc);
  extratoRecArr.sort(sortByDateDesc);
  extratoDespArr.sort(sortByDateDesc);

  const topN = (mp, n) => Array.from(mp.entries()).map(([name,value]) => ({name,value})).sort((a,b)=>b.value-a.value).slice(0,n);
  const VALOR_LIQUIDO = totalReceita - totalDespesa;
  const MARGEM_LIQUIDA = totalReceita > 0 ? (VALOR_LIQUIDO / totalReceita) * 100 : 0;

  // Saldos acumulados por mês
  const SALDOS_MES = [];
  var _saldo = 0;
  for (var _si = 0; _si < MONTH_DATA.length; _si++) {
    _saldo += MONTH_DATA[_si].receita - MONTH_DATA[_si].despesa;
    SALDOS_MES.push(_saldo);
  }

  return {
    MONTH_DATA,
    RECEITA_CATEGORIAS: topN(recCat, 100),
    DESPESA_CATEGORIAS: topN(despCat, 100),
    RECEITA_CLIENTES: topN(recCli, 100),
    DESPESA_FORNECEDORES: topN(despForn, 100),
    EXTRATO: extratoArr.slice(0, 200),
    EXTRATO_RECEITAS: extratoRecArr.slice(0, 200),
    EXTRATO_DESPESAS: extratoDespArr.slice(0, 200),
    RECEITA_DIA: RECEITA_DIA,
    DESPESA_DIA: DESPESA_DIA,
    SALDOS_MES: SALDOS_MES,
    KPIS: {
      TOTAL_RECEITA: totalReceita,
      TOTAL_DESPESA: totalDespesa,
      VALOR_LIQUIDO,
      MARGEM_LIQUIDA,
      VALOR_LIQ_SERIES: MONTH_DATA.map(m => m.receita - m.despesa),
    },
  };
}

// applyDrilldown: filtra ALL_TX baseado em statusFilter + drilldown + regime.
// statusFilter: 'realizado' | 'a_pagar_receber' | 'tudo'
// drilldown: null | { type: 'mes'|'categoria'|'cliente'|'fornecedor', value: ... }
// regime: 'caixa' | 'competencia' | null (null = caixa default)
function filterTx(allTx, statusFilter, drilldown, regime, extraFilters) {
  let out = allTx;
  // Filtro por regime (caixa/competencia) — index [10]: 'c' ou 'k'
  var rg = (regime === 'competencia') ? 'k' : 'c';
  out = out.filter(r => r[10] === rg);
  if (statusFilter === 'realizado') out = out.filter(r => r[6] === 1);
  else if (statusFilter === 'a_pagar_receber') out = out.filter(r => r[6] === 0);
  // drilldown: aceita objeto único (legado) OU array (multi-select estilo Power BI).
  // Regra: OR dentro da mesma dimensão (ex: 3 meses = soma), AND entre dimensões (fornecedor E mês).
  if (drilldown) {
    var dds = (Array.isArray(drilldown) ? drilldown : [drilldown]).filter(function (d) { return d && d.type; });
    if (dds.length) {
      var byType = {};
      for (var di = 0; di < dds.length; di++) { (byType[dds[di].type] = byType[dds[di].type] || []).push(dds[di].value); }
      Object.keys(byType).forEach(function (type) {
        var vals = byType[type];
        if (type === 'mes') out = out.filter(function (r) { return vals.indexOf(r[1]) >= 0; });
        else if (type === 'categoria') out = out.filter(function (r) { return vals.indexOf(r[3]) >= 0; });
        else if (type === 'cliente') out = out.filter(function (r) { return r[0] === 'r' && vals.indexOf(r[4]) >= 0; });
        else if (type === 'fornecedor') out = out.filter(function (r) { return r[0] === 'd' && vals.indexOf(r[7]) >= 0; });
        else if (type === 'dia') out = out.filter(function (r) { return vals.indexOf(r[2] - 1) >= 0; });
      });
    }
  }
  // Extra filters: dateFrom, dateTo, categoria
  if (extraFilters) {
    if (extraFilters.dateFrom) {
      // dateFrom format: "YYYY-MM-DD"
      var dfYm = extraFilters.dateFrom.slice(0, 7); // "YYYY-MM"
      var dfDay = parseInt(extraFilters.dateFrom.slice(8, 10), 10);
      out = out.filter(function(r) {
        if (r[1] > dfYm) return true;
        if (r[1] < dfYm) return false;
        return r[2] >= dfDay;
      });
    }
    if (extraFilters.dateTo) {
      var dtYm = extraFilters.dateTo.slice(0, 7);
      var dtDay = parseInt(extraFilters.dateTo.slice(8, 10), 10);
      out = out.filter(function(r) {
        if (r[1] < dtYm) return true;
        if (r[1] > dtYm) return false;
        return r[2] <= dtDay;
      });
    }
    if (extraFilters.categoria && extraFilters.categoria !== "Todas categorias") {
      out = out.filter(function(r) { return r[3] === extraFilters.categoria; });
    }
    if (extraFilters.cc && extraFilters.cc !== "Todos centros de custo") {
      out = out.filter(function(r) { return r[8] === extraFilters.cc; });
    }
    if (extraFilters.conta && extraFilters.conta !== "Todas contas") {
      // filters.conta pode ser (a) slug de empresa (multi-empresa: r[9] = slug) ou
      // (b) nome de conta bancária -> mapeia p/ empresa via CONTAS_BANCARIAS. Fallback
      // pro valor direto (slug de empresa) quando não bate nenhuma conta bancária.
      var bankAcct = (typeof CONTAS_BANCARIAS !== 'undefined' ? CONTAS_BANCARIAS : []).find(function(b) { return b.nome === extraFilters.conta; });
      var contaSlug = (bankAcct && bankAcct.conta)
        ? bankAcct.conta.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/_+$/, '')
        : extraFilters.conta;
      out = out.filter(function(r) { return r[9] === contaSlug; });
    }
    if (extraFilters.diaFrom && extraFilters.diaFrom > 0) {
      out = out.filter(function(r) { return r[2] >= extraFilters.diaFrom; });
    }
    if (extraFilters.diaTo && extraFilters.diaTo > 0) {
      out = out.filter(function(r) { return r[2] <= extraFilters.diaTo; });
    }
  }
  return out;
}

// Sintetiza um BIT "flat" baseado no filtro escolhido (window.BIT_FILTER).
// Default: 'realizado' (PAGO).
function _makeBit(filter) {
  const seg = SEGMENTS[filter] || SEGMENTS.realizado;
  const K = seg.KPIS;
  const indicadores = {
    TOTAL_RECEITA: K.TOTAL_RECEITA,
    TOTAL_DESPESA: K.TOTAL_DESPESA,
    VALOR_LIQUIDO: K.VALOR_LIQUIDO,
    MARGEM_LIQUIDA: K.MARGEM_LIQUIDA,
    IMPOSTOS: 0,
    EBITDA: K.VALOR_LIQUIDO,
    RESULTADO_OPERACIONAL: K.VALOR_LIQUIDO,
    CAPEX: 0,
    MARGEM_CONTRIB: K.MARGEM_LIQUIDA,
    EBITDA_PCT: K.MARGEM_LIQUIDA,
    IMPOSTOS_PCT: 0,
  };
  return Object.assign({
    META, POSICAO_CAIXA, COMPOSICAO_DESPESA, CONTAS, CONTAS_BANCARIAS, DRE_INDICATORS, DRE_MONTHLY,
    MONTHS, MONTHS_FULL, fmt, fmtK, fmtPct,
    SEGMENTS,
    MONTH_DATA: seg.MONTH_DATA,
    RECEITA_CATEGORIAS: seg.RECEITA_CATEGORIAS,
    DESPESA_CATEGORIAS: seg.DESPESA_CATEGORIAS,
    RECEITA_CLIENTES: seg.RECEITA_CLIENTES,
    DESPESA_FORNECEDORES: seg.DESPESA_FORNECEDORES,
    EXTRATO: seg.EXTRATO,
    DIAS: Array.from({ length: 31 }, (_, i) => i + 1),
    RECEITA_DIA: seg.RECEITA_DIA,
    DESPESA_DIA: seg.DESPESA_DIA,
    SALDOS_MES: seg.SALDOS_MES,
    VALOR_LIQ_SERIES: K.VALOR_LIQ_SERIES,
    FLUXO_RECEITA: seg.FLUXO_RECEITA,
    FLUXO_DESPESA: seg.FLUXO_DESPESA,
    COMP_DATA: seg.COMP_DATA,
    RECDESP_AREA: seg.MONTH_DATA.map(m => ({ m: m.m.slice(0,3), receita: m.receita, despesa: m.despesa })),
  }, indicadores);
}

window.BIT = _makeBit(window.BIT_FILTER || 'realizado');
window._makeBit = _makeBit;
window.BIT_SEGMENTS = SEGMENTS;
window.BIT_META = META;
window.ALL_TX = ALL_TX;
window.REF_YEAR = REF_YEAR;
window.AVAILABLE_YEARS = AVAILABLE_YEARS;
window.aggregateTx = aggregateTx;
window.filterTx = filterTx;
// getBit: SEMPRE recomputa via recomputeBit (sem cache de window.BIT).
// Evita lag no toggle Previsto/Realizado e suporta year/month arbitrario.
// month: 0 = ano completo, 1-12 = mes especifico.
// regime: 'caixa' | 'competencia' (default 'caixa')
window.getBit = function (statusFilter, drilldown, year, month, filtersOrRegime, extraFilters, receitaScope) {
  const sf = statusFilter || window.BIT_FILTER || 'realizado';
  const y = year || window.REF_YEAR;
  // Se filtersOrRegime é objeto (ex: {categoria, cc, conta, regime}), trata como extraFilters
  var regime = 'caixa';
  var ef = extraFilters;
  if (filtersOrRegime && typeof filtersOrRegime === 'object') {
    ef = filtersOrRegime;
    if (filtersOrRegime.regime) regime = filtersOrRegime.regime;
  } else if (typeof filtersOrRegime === 'string') {
    regime = filtersOrRegime;
  }
  let dd = drilldown;
  var ddLen = Array.isArray(dd) ? dd.filter(function (d) { return d && d.type; }).length : (dd ? 1 : 0);
  if (!ddLen && month && month >= 1 && month <= 12) {
    const mm = String(month).padStart(2, '0');
    const ym = y + '-' + mm;
    dd = { type: 'mes', value: ym, label: ym };
  }
  return window.recomputeBit(sf, dd, y, regime, ef, receitaScope);
};
// Cross-filter helper: combina statusFilter + drilldown + regime e retorna BIT-like
// com KPIs/charts/extrato recalculados em ~10ms (17k rows).
window.recomputeBit = function (statusFilter, drilldown, year, regime, extraFilters, receitaScope) {
  const sf = statusFilter || 'realizado';
  const filtered = filterTx(ALL_TX, sf, drilldown, regime || 'caixa', extraFilters);
  const agg = aggregateTx(filtered, year || REF_YEAR, receitaScope);
  // Mescla com BIT base pra preservar META, helpers (fmt, fmtK), MONTHS etc.
  const base = window.BIT || {};
  // FLUXO_RECEITA/DESPESA/COMP_DATA vêm do SEGMENTS do status pedido — NÃO de window.BIT
  // (global mutável que fica stale ao alternar status e zerava a tabela Fluxo).
  const seg = (typeof SEGMENTS !== 'undefined' && (SEGMENTS[sf] || SEGMENTS.realizado)) || {};
  return Object.assign({}, base, agg, {
    TOTAL_RECEITA: agg.KPIS.TOTAL_RECEITA,
    TOTAL_DESPESA: agg.KPIS.TOTAL_DESPESA,
    VALOR_LIQUIDO: agg.KPIS.VALOR_LIQUIDO,
    MARGEM_LIQUIDA: agg.KPIS.MARGEM_LIQUIDA,
    FLUXO_RECEITA: seg.FLUXO_RECEITA || base.FLUXO_RECEITA,
    FLUXO_DESPESA: seg.FLUXO_DESPESA || base.FLUXO_DESPESA,
    COMP_DATA: seg.COMP_DATA || base.COMP_DATA,
  });
};
window.BIT_ORCAMENTO = [];
