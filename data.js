/* BGP BI — gerado por build-data.cjs em 2026-06-22T17:24:32.682Z */
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
  "fetched_at": "2026-06-22T16:32:15.457Z",
  "ref_year": 2026,
  "counts": {
    "contas_pagar": 0,
    "contas_receber": 0,
    "categorias": 53,
    "departamentos": 8,
    "clientes": 205
  }
};
const POSICAO_CAIXA = [
  {
    "name": "Saldo realizado YTD",
    "value": 53264.3899999999
  },
  {
    "name": "A receber (futuro)",
    "value": 903998.65
  },
  {
    "name": "A pagar (futuro)",
    "value": 569926.43
  }
];
const COMPOSICAO_DESPESA = [
  {
    "name": "Compra de matéria-prima",
    "value": 729681.5500000005,
    "color": "#2dd4bf"
  },
  {
    "name": "Despesas com ADS",
    "value": 77529,
    "color": "#22c55e"
  },
  {
    "name": "Compra de mercadorias",
    "value": 74325.31,
    "color": "#a78bfa"
  },
  {
    "name": "Salários e encargos",
    "value": 63181.39,
    "color": "#f59e0b"
  },
  {
    "name": "Compra de insumos para expedição",
    "value": 56094.49,
    "color": "#ef4444"
  },
  {
    "name": "Pagamento de empréstimo",
    "value": 47519.22,
    "color": "#6b7686"
  }
];
const CONTAS = [
  {
    "slug": "not_vel_aroma",
    "label": "Notável Aroma",
    "receita": 1419211.1900000004,
    "despesa": 1365946.800000001,
    "count": 1418,
    "liquido": 53264.38999999943,
    "margem": 3.7530982263463843
  }
];
const CONTAS_BANCARIAS = [{"id":"b74c46fd-61a8-4f92-a2aa-862b4c8aff13","nome":"01 - SICREDI","banco":"Sicredi","numero_banco":748,"conta":"Notável Aroma","arquivada":false},{"id":"0c0846a9-8c97-41de-a941-47fe48e305f4","nome":"02 - BRADESCO","banco":"Bradesco","numero_banco":237,"conta":"Notável Aroma","arquivada":false},{"id":"0836a9d5-fd36-4e1e-958c-a3d34a182524","nome":"03 - INTER","banco":"Inter","numero_banco":77,"conta":"Notável Aroma","arquivada":false},{"id":"06588bee-07bc-4cf0-bc93-a0ad051a6f93","nome":"CAIXA - DINHEIRO","banco":"Outros","numero_banco":"","conta":"Notável Aroma","arquivada":false},{"id":"8c039c4e-f918-4eb4-b407-6442e2cca5c7","nome":"CDB - INTER","banco":"Inter","numero_banco":77,"conta":"Notável Aroma","arquivada":false},{"id":"3ce3e802-5dd8-4ca6-a296-e0c3300fa921","nome":"CDB - MERCADO PAGO - FINAME","banco":"Mercado Pago","numero_banco":323,"conta":"Notável Aroma","arquivada":false},{"id":"1b837253-ef7b-448b-b65a-a9c7e1ead3d5","nome":"CDB - MERCADO PAGO - RETENÇÃO","banco":"Mercado Pago","numero_banco":323,"conta":"Notável Aroma","arquivada":false}];
const DRE_INDICATORS = {
  "receitas_operacionais": 1307403.5999999996,
  "custos_operacionais": 923684.8500000008,
  "margem_contribuicao": 383718.74999999884,
  "margem_contribuicao_pct": 29.34967824778813,
  "despesas_operacionais": 355504.0599999996,
  "resultado_operacional": 28214.689999999246,
  "resultado_operacional_pct": 2.1580703923409152,
  "investimento": -37431.08,
  "financiamento": 62480.78,
  "variacao_caixa": 53264.38999999924
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
    "custo": -192278.68,
    "despesa": -70251.59999999999,
    "investimento": -6606.289999999999,
    "financiamento": 110000
  },
  {
    "receita": 252929.38999999993,
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
    "despesa": -65642.56000000001,
    "investimento": -11840.79,
    "financiamento": -3988.23
  },
  {
    "receita": 220132.73999999996,
    "custo": -145070.69,
    "despesa": -65894.06000000001,
    "investimento": -3388.23,
    "financiamento": -4007.13
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
        "despesa": 269523.43000000005
      },
      {
        "m": "março",
        "receita": 253411.10999999993,
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
        "despesa": 255761.34999999992
      },
      {
        "m": "junho",
        "receita": 220132.73999999996,
        "despesa": 218360.11
      },
      {
        "m": "julho",
        "receita": 0,
        "despesa": 0
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
        "value": 1258429.8199999994,
        "clientes": 5
      },
      {
        "name": "Obtenção de empréstimo",
        "value": 110000,
        "clientes": 1
      },
      {
        "name": "Outras receitas (Não considerar DRE)",
        "value": 25227.620000000003,
        "clientes": 15
      },
      {
        "name": "Receita com vendas",
        "value": 23560.479999999992,
        "clientes": 7
      },
      {
        "name": "Rendimento de investimentos",
        "value": 1807.5900000000001,
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
        "value": 729681.5500000005,
        "fornecedores": 19
      },
      {
        "name": "Despesas com ADS",
        "value": 77529,
        "fornecedores": 2
      },
      {
        "name": "Compra de mercadorias",
        "value": 74325.31,
        "fornecedores": 4
      },
      {
        "name": "Salários e encargos",
        "value": 63181.39,
        "fornecedores": 11
      },
      {
        "name": "Compra de insumos para expedição",
        "value": 56094.49,
        "fornecedores": 12
      },
      {
        "name": "Pagamento de empréstimo",
        "value": 47519.22,
        "fornecedores": 1
      },
      {
        "name": "Impostos sobre receita",
        "value": 46004.850000000006,
        "fornecedores": 1
      },
      {
        "name": "Despesas com outros serviços contratados",
        "value": 45717.090000000004,
        "fornecedores": 12
      },
      {
        "name": "Compra de ativo imobilizado",
        "value": 39148.67,
        "fornecedores": 11
      },
      {
        "name": "Despesas com frete para compra de materiais",
        "value": 34808.22,
        "fornecedores": 14
      },
      {
        "name": "Despesas administrativas",
        "value": 24911.199999999997,
        "fornecedores": 19
      },
      {
        "name": "Outras despesas (Não considerar DRE)",
        "value": 24857.68,
        "fornecedores": 16
      }
    ],
    "RECEITA_CLIENTES": [
      {
        "name": "SHOPEE",
        "value": 831070.6500000001
      },
      {
        "name": "SHEIN",
        "value": 198736.2200000001
      },
      {
        "name": "ORNATA DOMUS COMPANY LTDA",
        "value": 136216.27000000002
      },
      {
        "name": "MERCADO LIVRE",
        "value": 117800
      },
      {
        "name": "TIKTOK",
        "value": 63874.229999999996
      },
      {
        "name": "AMAZON",
        "value": 46948.719999999994
      },
      {
        "name": "VENDA FÍSICA",
        "value": 5089.100000000002
      },
      {
        "name": "SAMUEL ANTONIO DE SOUZA MARTINS",
        "value": 4200
      },
      {
        "name": "MARIA LAURA DE MELLO LINO",
        "value": 2176.54
      },
      {
        "name": "FABRICIA LIMA STORE - LUCAS HENRIQUE DE SOUZA VESTUARIOS",
        "value": 1636.37
      },
      {
        "name": "MERCADO PAGO",
        "value": 1335.9099999999999
      },
      {
        "name": "ELYPLAST RIO PRETO LTDA",
        "value": 1185.2
      }
    ],
    "DESPESA_FORNECEDORES": [
      {
        "name": "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        "value": 231484.20999999996
      },
      {
        "name": "ORNATA DOMUS COMPANY LTDA",
        "value": 122532.29999999997
      },
      {
        "name": "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        "value": 113225
      },
      {
        "name": "SYMRISE AROMAS E FRAGRANCIAS LTDA",
        "value": 80400.46
      },
      {
        "name": "SHOPEE",
        "value": 72981.41
      },
      {
        "name": "FORMULARIOS COVOLAN LTDA.",
        "value": 66150
      },
      {
        "name": "CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA",
        "value": 65187.54000000001
      },
      {
        "name": "LEADPAK SOLUCOES DE FORNECIMENTO LTDA",
        "value": 52447.58
      },
      {
        "name": "EMMILY REGINA COSMO BETARELLO - FLORAE",
        "value": 47695.5
      },
      {
        "name": "SIMPLES NACIONAL",
        "value": 46004.850000000006
      },
      {
        "name": "PRIME BOX EMBALAGENS PAPELAO LTDA",
        "value": 37688.43
      },
      {
        "name": "SMART PRODUTOS QUIMICOS LTDA",
        "value": 36756.85
      }
    ],
    "EXTRATO": [
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
        "Repasse de vendas",
        "SHOPEE",
        5541.37,
        "PAGO"
      ],
      [
        "17/06/2026",
        "Despesas com serviços",
        "Despesas com frete para compra de materiais",
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
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ORNATA DOMUS COMPANY LTDA",
        -9654.86,
        "PAGO"
      ],
      [
        "16/06/2026",
        "Despesas com serviços",
        "Despesas com frete para compra de materiais",
        "DARBI RINTON ALVES DO NASCIMENTO",
        -450,
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
        "15/06/2026",
        "Despesas com serviços",
        "Despesas com frete para compra de materiais",
        "TATIANE DE SOUZA BARONI - TRANSPORTES",
        -694.21,
        "PAGO"
      ],
      [
        "15/06/2026",
        "Despesas com serviços",
        "Despesas com frete para compra de materiais",
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
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        13000,
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
      ],
      [
        "11/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA",
        -973.36,
        "PAGO"
      ],
      [
        "11/06/2026",
        "Operações",
        "Compra de mercadorias",
        "MERCADO LIVRE",
        -590.36,
        "PAGO"
      ],
      [
        "11/06/2026",
        "Marketing e publicidade",
        "Despesas com ADS",
        "SHOPEE",
        -1000,
        "PAGO"
      ],
      [
        "11/06/2026",
        "Marketing e publicidade",
        "Despesas com ADS",
        "BR TIKTOK SHOP BRASIL LTDA",
        -1000,
        "PAGO"
      ],
      [
        "11/06/2026",
        "Marketing e publicidade",
        "Despesas com ADS",
        "SHOPEE",
        -2000,
        "PAGO"
      ],
      [
        "11/06/2026",
        "Despesas não operacionais",
        "Outras despesas (Não considerar DRE)",
        "AMAZON",
        -470.64,
        "PAGO"
      ],
      [
        "11/06/2026",
        "Despesas não operacionais",
        "Outras despesas (Não considerar DRE)",
        "AMAZON",
        -117.66,
        "PAGO"
      ],
      [
        "11/06/2026",
        "Despesas não operacionais",
        "Outras despesas (Não considerar DRE)",
        "AMAZON",
        -235.32,
        "PAGO"
      ],
      [
        "11/06/2026",
        "Despesas não operacionais",
        "Outras despesas (Não considerar DRE)",
        "AMAZON",
        -250.87,
        "PAGO"
      ],
      [
        "11/06/2026",
        "Despesas não operacionais",
        "Outras despesas (Não considerar DRE)",
        "AMAZON",
        -58.82,
        "PAGO"
      ],
      [
        "11/06/2026",
        "Despesas não operacionais",
        "Outras despesas (Não considerar DRE)",
        "AMAZON",
        -58.83,
        "PAGO"
      ],
      [
        "11/06/2026",
        "Marketing e publicidade",
        "Outros gastos com publicidade",
        "PRINTI - FM IMPRESSOS PERSONALIZADOS LTDA.",
        -418.06,
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
        "10/06/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "MERCADO LIVRE",
        -299,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "MERCADO LIVRE",
        -196.8,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "MERCADO LIVRE",
        -119.8,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "MERCADO LIVRE",
        -180.4,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)",
        -120,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "MERCADO LIVRE",
        -74.7,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "MERCADO LIVRE",
        -747,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "MERCADO LIVRE",
        -155.69,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)",
        -54.5,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "MERCADO LIVRE",
        -73.4,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "MERCADO LIVRE",
        -965.7,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Despesas com serviços",
        "Despesas com frete para compra de materiais",
        "DARBI RINTON ALVES DO NASCIMENTO",
        -100,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Despesas com aluguéis",
        "Despesas com aluguéis para uso",
        "PAULO CESAR LOPES (ROPE)",
        -2500,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)",
        -490,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "MERCADO LIVRE",
        -307.36,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "MERCADO LIVRE",
        -203.33,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)",
        -28,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)",
        -799.61,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA",
        -4429.54,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA",
        -3463.56,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "LEADPAK SOLUCOES DE FORNECIMENTO LTDA",
        -2873.8,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA",
        -1022.45,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Manutenção predial e benfeitorias",
        "RURAL COMERCIAL AGROPECUARIA LTDA",
        -273.6,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "MERCADO LIVRE",
        -472.26,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "MERCADO LIVRE",
        -9.9,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Compra de insumos para produção",
        "MERCADO LIVRE",
        -91.28,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Despesas não operacionais",
        "Outras despesas (Não considerar DRE)",
        "PAULO EDUARDO CUSTODIO MARTINS",
        -50,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Despesas não operacionais",
        "Outras despesas (Não considerar DRE)",
        "ORNATA DOMUS COMPANY LTDA",
        -734,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Despesas operacionais",
        "Luz, água e outros",
        "MAYARA B. G. FERNANDES - FTI NET",
        -69,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Marketing e publicidade",
        "Outros gastos com publicidade",
        "PRINTI - FM IMPRESSOS PERSONALIZADOS LTDA.",
        -123.69,
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
        "09/06/2026",
        "Despesas com serviços",
        "Despesas com frete para compra de materiais",
        "DARBI RINTON ALVES DO NASCIMENTO",
        -110,
        "PAGO"
      ],
      [
        "09/06/2026",
        "Despesas com serviços",
        "Despesas com frete para compra de materiais",
        "DARBI RINTON ALVES DO NASCIMENTO",
        -95,
        "PAGO"
      ],
      [
        "09/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -8778.21,
        "PAGO"
      ],
      [
        "09/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "TILIFORM INDUSTRIA GRAFICA - EM RECUPERACAO JUDICIAL",
        -1768.85,
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
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -5150,
        "PAGO"
      ],
      [
        "08/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "LEADPAK SOLUCOES DE FORNECIMENTO LTDA",
        -2581.25,
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
        "07/06/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "UPSELLER TECHNOLOGY LTDA",
        -270,
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
        "06/06/2026",
        "Despesas com serviços",
        "Despesas com frete para compra de materiais",
        "DARBI RINTON ALVES DO NASCIMENTO",
        -450,
        "PAGO"
      ],
      [
        "06/06/2026",
        "Despesas com serviços",
        "Despesas com frete para compra de materiais",
        "DARBI RINTON ALVES DO NASCIMENTO",
        -170,
        "PAGO"
      ],
      [
        "06/06/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "ORNATA DOMUS COMPANY LTDA",
        -490.5,
        "PAGO"
      ],
      [
        "06/06/2026",
        "Operações",
        "Compra de insumos para produção",
        "ORNATA DOMUS COMPANY LTDA",
        -336,
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
        "05/06/2026",
        "Despesas administrativas",
        "Despesas administrativas",
        "FARMÁCIA AVENIDA",
        -20,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -8422.6,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Custo com horas extras setor de produção",
        "LEANDRO MARTINS BELCHIOR DA SILVA",
        -504.74,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Custo com horas extras setor de produção",
        "POLYANA CECILIA ALMEIDA FERREIRA",
        -283.78,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Custo com horas extras setor de produção",
        "KARINA DE LIMA TENORIO",
        -275.42,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Custo com horas extras setor de produção",
        "ISABELA TENORIO BARONE",
        -212.1,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Custo com horas extras setor de produção",
        "RAFAEL DOS SANTOS PILIELO",
        -88.35,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Custo com horas extras setor de produção",
        "VITORIA CRISTINA TANGODA MAIA",
        -196.64,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Custo com horas extras setor de produção",
        "DANIELLY DE SOUSA SILVA",
        -115.09,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Direitos a receber",
        "SICREDI",
        -30,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "AMANDA LOPES PAIS",
        -640,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Despesas com serviços",
        "Serviços de contabilidade",
        "GUILHERME TORCHETTI LOUREIRO DA SILVA",
        -1000,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "RAFAEL DOS SANTOS PILIELO",
        -2476.5,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "POLYANA CECILIA ALMEIDA FERREIRA",
        -2321.35,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "LEANDRO MARTINS BELCHIOR DA SILVA",
        -1957.35,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "KARINA DE LIMA TENORIO",
        -1957.35,
        "PAGO"
      ]
    ],
    "EXTRATO_RECEITAS": [
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
      ],
      [
        "22/05/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        2347.73,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        5990.51,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        164.99,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        286.07,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Receita com vendas",
        "JOAO EDUARDO GONCALVES NOGUEIRA",
        1000,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Outras receitas (Não considerar DRE)",
        "DENILSON GOMES JUNIOR",
        50,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        1868.87,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4252.59,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "Receita com vendas",
        "ORNATA DOMUS COMPANY LTDA",
        2248.96,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        733.8,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1942.58,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        5146.91,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1485.58,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Operações",
        "Outras receitas (Não considerar DRE)",
        "DENILSON GOMES JUNIOR",
        150,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        6518.78,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        1265.7,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        2098.83,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        2256.64,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        16813.47,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        224.83,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        63.21,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        3121.64,
        "PAGO"
      ],
      [
        "16/05/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1372.43,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        760.26,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        6217.64,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        939.94,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        9000,
        "PAGO"
      ],
      [
        "14/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4295.27,
        "PAGO"
      ],
      [
        "14/05/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1634.34,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        383.49,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        6552.41,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        2398.51,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        1458.01,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        8058.82,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        25.9,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        3572.12,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        84.28,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        199.25,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        18489.85,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1014.58,
        "PAGO"
      ],
      [
        "10/05/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1439.99,
        "PAGO"
      ],
      [
        "10/05/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        928.66,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        29.9,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        76.75,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        19.9,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        57.8,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        89.8,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        7608.21,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        332.74,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        92.09,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        184.57,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        1949.93,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        4000,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Outras receitas (Não considerar DRE)",
        "ELYPLAST RIO PRETO LTDA",
        1185.2,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        1724.46,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        6691.09,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        138.25,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        37,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        6612.03,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        819.94,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        39.9,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Outras receitas (Não considerar DRE)",
        "PEDRO HENRIQUE CUSTODIO MARTINS",
        200,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        1272.12,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        7407.62,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        1569.62,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Outras receitas (Não considerar DRE)",
        "JOAO ANTONIO DA SILVA DOS SANTOS",
        1000,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        2746.81,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        600.3,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        169.88,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        27.92,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        815.96,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        5000,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        20835.75,
        "PAGO"
      ],
      [
        "03/05/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        456.84,
        "PAGO"
      ],
      [
        "02/05/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        79.16,
        "PAGO"
      ],
      [
        "01/05/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        31.8,
        "PAGO"
      ],
      [
        "01/05/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        145.3,
        "PAGO"
      ],
      [
        "01/05/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        560.05,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Outras receitas (Não considerar DRE)",
        "ORNATA DOMUS COMPANY LTDA",
        981.77,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Rendimento de investimentos",
        "MERCADO PAGO",
        0.4,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Rendimento de investimentos",
        "MERCADO PAGO",
        321.66,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4370.72,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        7000,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Operações",
        "Outras receitas (Não considerar DRE)",
        "SUELI LOPES",
        1000,
        "PAGO"
      ]
    ],
    "EXTRATO_DESPESAS": [
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
        "Despesas com serviços",
        "Despesas com frete para compra de materiais",
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
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ORNATA DOMUS COMPANY LTDA",
        -9654.86,
        "PAGO"
      ],
      [
        "16/06/2026",
        "Despesas com serviços",
        "Despesas com frete para compra de materiais",
        "DARBI RINTON ALVES DO NASCIMENTO",
        -450,
        "PAGO"
      ],
      [
        "15/06/2026",
        "Despesas com serviços",
        "Despesas com frete para compra de materiais",
        "TATIANE DE SOUZA BARONI - TRANSPORTES",
        -694.21,
        "PAGO"
      ],
      [
        "15/06/2026",
        "Despesas com serviços",
        "Despesas com frete para compra de materiais",
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
      ],
      [
        "11/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA",
        -973.36,
        "PAGO"
      ],
      [
        "11/06/2026",
        "Operações",
        "Compra de mercadorias",
        "MERCADO LIVRE",
        -590.36,
        "PAGO"
      ],
      [
        "11/06/2026",
        "Marketing e publicidade",
        "Despesas com ADS",
        "SHOPEE",
        -1000,
        "PAGO"
      ],
      [
        "11/06/2026",
        "Marketing e publicidade",
        "Despesas com ADS",
        "BR TIKTOK SHOP BRASIL LTDA",
        -1000,
        "PAGO"
      ],
      [
        "11/06/2026",
        "Marketing e publicidade",
        "Despesas com ADS",
        "SHOPEE",
        -2000,
        "PAGO"
      ],
      [
        "11/06/2026",
        "Despesas não operacionais",
        "Outras despesas (Não considerar DRE)",
        "AMAZON",
        -470.64,
        "PAGO"
      ],
      [
        "11/06/2026",
        "Despesas não operacionais",
        "Outras despesas (Não considerar DRE)",
        "AMAZON",
        -117.66,
        "PAGO"
      ],
      [
        "11/06/2026",
        "Despesas não operacionais",
        "Outras despesas (Não considerar DRE)",
        "AMAZON",
        -235.32,
        "PAGO"
      ],
      [
        "11/06/2026",
        "Despesas não operacionais",
        "Outras despesas (Não considerar DRE)",
        "AMAZON",
        -250.87,
        "PAGO"
      ],
      [
        "11/06/2026",
        "Despesas não operacionais",
        "Outras despesas (Não considerar DRE)",
        "AMAZON",
        -58.82,
        "PAGO"
      ],
      [
        "11/06/2026",
        "Despesas não operacionais",
        "Outras despesas (Não considerar DRE)",
        "AMAZON",
        -58.83,
        "PAGO"
      ],
      [
        "11/06/2026",
        "Marketing e publicidade",
        "Outros gastos com publicidade",
        "PRINTI - FM IMPRESSOS PERSONALIZADOS LTDA.",
        -418.06,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "MERCADO LIVRE",
        -299,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "MERCADO LIVRE",
        -196.8,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "MERCADO LIVRE",
        -119.8,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "MERCADO LIVRE",
        -180.4,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)",
        -120,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "MERCADO LIVRE",
        -74.7,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "MERCADO LIVRE",
        -747,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "MERCADO LIVRE",
        -155.69,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)",
        -54.5,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "MERCADO LIVRE",
        -73.4,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Despesa com materiais de uso e consumo operacional",
        "MERCADO LIVRE",
        -965.7,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Despesas com serviços",
        "Despesas com frete para compra de materiais",
        "DARBI RINTON ALVES DO NASCIMENTO",
        -100,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Despesas com aluguéis",
        "Despesas com aluguéis para uso",
        "PAULO CESAR LOPES (ROPE)",
        -2500,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)",
        -490,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "MERCADO LIVRE",
        -307.36,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "MERCADO LIVRE",
        -203.33,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)",
        -28,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)",
        -799.61,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA",
        -4429.54,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA",
        -3463.56,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "LEADPAK SOLUCOES DE FORNECIMENTO LTDA",
        -2873.8,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA",
        -1022.45,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Manutenção predial e benfeitorias",
        "RURAL COMERCIAL AGROPECUARIA LTDA",
        -273.6,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "MERCADO LIVRE",
        -472.26,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "MERCADO LIVRE",
        -9.9,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Compra de insumos para produção",
        "MERCADO LIVRE",
        -91.28,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Despesas não operacionais",
        "Outras despesas (Não considerar DRE)",
        "PAULO EDUARDO CUSTODIO MARTINS",
        -50,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Despesas não operacionais",
        "Outras despesas (Não considerar DRE)",
        "ORNATA DOMUS COMPANY LTDA",
        -734,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Despesas operacionais",
        "Luz, água e outros",
        "MAYARA B. G. FERNANDES - FTI NET",
        -69,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Marketing e publicidade",
        "Outros gastos com publicidade",
        "PRINTI - FM IMPRESSOS PERSONALIZADOS LTDA.",
        -123.69,
        "PAGO"
      ],
      [
        "09/06/2026",
        "Despesas com serviços",
        "Despesas com frete para compra de materiais",
        "DARBI RINTON ALVES DO NASCIMENTO",
        -110,
        "PAGO"
      ],
      [
        "09/06/2026",
        "Despesas com serviços",
        "Despesas com frete para compra de materiais",
        "DARBI RINTON ALVES DO NASCIMENTO",
        -95,
        "PAGO"
      ],
      [
        "09/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -8778.21,
        "PAGO"
      ],
      [
        "09/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "TILIFORM INDUSTRIA GRAFICA - EM RECUPERACAO JUDICIAL",
        -1768.85,
        "PAGO"
      ],
      [
        "08/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -5150,
        "PAGO"
      ],
      [
        "08/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "LEADPAK SOLUCOES DE FORNECIMENTO LTDA",
        -2581.25,
        "PAGO"
      ],
      [
        "07/06/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "UPSELLER TECHNOLOGY LTDA",
        -270,
        "PAGO"
      ],
      [
        "06/06/2026",
        "Despesas com serviços",
        "Despesas com frete para compra de materiais",
        "DARBI RINTON ALVES DO NASCIMENTO",
        -450,
        "PAGO"
      ],
      [
        "06/06/2026",
        "Despesas com serviços",
        "Despesas com frete para compra de materiais",
        "DARBI RINTON ALVES DO NASCIMENTO",
        -170,
        "PAGO"
      ],
      [
        "06/06/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "ORNATA DOMUS COMPANY LTDA",
        -490.5,
        "PAGO"
      ],
      [
        "06/06/2026",
        "Operações",
        "Compra de insumos para produção",
        "ORNATA DOMUS COMPANY LTDA",
        -336,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Despesas administrativas",
        "Despesas administrativas",
        "FARMÁCIA AVENIDA",
        -20,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -8422.6,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Custo com horas extras setor de produção",
        "LEANDRO MARTINS BELCHIOR DA SILVA",
        -504.74,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Custo com horas extras setor de produção",
        "POLYANA CECILIA ALMEIDA FERREIRA",
        -283.78,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Custo com horas extras setor de produção",
        "KARINA DE LIMA TENORIO",
        -275.42,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Custo com horas extras setor de produção",
        "ISABELA TENORIO BARONE",
        -212.1,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Custo com horas extras setor de produção",
        "RAFAEL DOS SANTOS PILIELO",
        -88.35,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Custo com horas extras setor de produção",
        "VITORIA CRISTINA TANGODA MAIA",
        -196.64,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Custo com horas extras setor de produção",
        "DANIELLY DE SOUSA SILVA",
        -115.09,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Direitos a receber",
        "SICREDI",
        -30,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "AMANDA LOPES PAIS",
        -640,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Despesas com serviços",
        "Serviços de contabilidade",
        "GUILHERME TORCHETTI LOUREIRO DA SILVA",
        -1000,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "RAFAEL DOS SANTOS PILIELO",
        -2476.5,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "POLYANA CECILIA ALMEIDA FERREIRA",
        -2321.35,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "LEANDRO MARTINS BELCHIOR DA SILVA",
        -1957.35,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "KARINA DE LIMA TENORIO",
        -1957.35,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "DANIELLY DE SOUSA SILVA",
        -1660.46,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "ISABELA TENORIO BARONE",
        -1933.15,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "VITORIA CRISTINA TANGODA MAIA",
        -1659.28,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "MARIA LAURA DE MELLO LINO",
        -2008.12,
        "PAGO"
      ],
      [
        "04/06/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "VALDIR DA SILVA MATOS AURIFLAMA",
        -14.49,
        "PAGO"
      ],
      [
        "04/06/2026",
        "Despesas administrativas",
        "Despesas com benefícios aos sócios e diretores",
        "JOAO EDUARDO GONCALVES NOGUEIRA",
        -200,
        "PAGO"
      ],
      [
        "04/06/2026",
        "Despesas administrativas",
        "Despesas com benefícios aos sócios e diretores",
        "SAMUEL ANTONIO DE SOUZA MARTINS",
        -200,
        "PAGO"
      ],
      [
        "04/06/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "VITORIA CRISTINA TANGODA MAIA",
        -150,
        "PAGO"
      ],
      [
        "04/06/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "KARINA DE LIMA TENORIO",
        -150,
        "PAGO"
      ],
      [
        "04/06/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "RAFAEL DOS SANTOS PILIELO",
        -150,
        "PAGO"
      ],
      [
        "04/06/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "MARIA LAURA DE MELLO LINO",
        -150,
        "PAGO"
      ],
      [
        "04/06/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "DANIELLY DE SOUSA SILVA",
        -150,
        "PAGO"
      ],
      [
        "04/06/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "POLYANA CECILIA ALMEIDA FERREIRA",
        -150,
        "PAGO"
      ],
      [
        "04/06/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "ISABELA TENORIO BARONE",
        -150,
        "PAGO"
      ],
      [
        "04/06/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "LEANDRO MARTINS BELCHIOR DA SILVA",
        -150,
        "PAGO"
      ],
      [
        "03/06/2026",
        "Despesas administrativas",
        "Despesas com alimentação",
        "MARLENE DE SOUZA SILVA LTDA - PADARIA NOVA OPÇÃO",
        -514,
        "PAGO"
      ],
      [
        "03/06/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "UPSELLER TECHNOLOGY LTDA",
        -149,
        "PAGO"
      ],
      [
        "03/06/2026",
        "Despesas administrativas",
        "Despesas com viagens",
        "RESTAURANTE ORANGEE 01 CORUMBA",
        -61.45,
        "PAGO"
      ],
      [
        "03/06/2026",
        "Despesas administrativas",
        "Despesas com viagens",
        "UBER DO BRASIL TECNOLOGIA LTDA.",
        -10.98,
        "PAGO"
      ],
      [
        "03/06/2026",
        "Despesas administrativas",
        "Despesas com viagens",
        "SUCESSO REDE DE RESTAURANTE SÃO PAULO",
        -135.92,
        "PAGO"
      ],
      [
        "03/06/2026",
        "Despesas administrativas",
        "Despesas com viagens",
        "POSTO MONTE CARLO MIRA MIRASSOL",
        -320.08,
        "PAGO"
      ],
      [
        "03/06/2026",
        "Despesas administrativas",
        "Despesas com viagens",
        "RESTAURANTE MADEIRO",
        -203,
        "PAGO"
      ],
      [
        "03/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA",
        -3045.75,
        "PAGO"
      ],
      [
        "03/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA",
        -4429.54,
        "PAGO"
      ],
      [
        "03/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA",
        -1022.45,
        "PAGO"
      ],
      [
        "03/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA",
        -3463.56,
        "PAGO"
      ],
      [
        "03/06/2026",
        "Despesas Financeiras",
        "Taxas e Encargos Bancários",
        "BRADESCO",
        -12.15,
        "PAGO"
      ],
      [
        "03/06/2026",
        "Despesas Financeiras",
        "Taxas e Encargos Bancários",
        "BRADESCO",
        -0.21,
        "PAGO"
      ],
      [
        "02/06/2026",
        "Despesas administrativas",
        "Despesas com viagens",
        "RODOSNACK S SAO CARLOS BR",
        -174.68,
        "PAGO"
      ],
      [
        "02/06/2026",
        "Despesas administrativas",
        "Despesas com viagens",
        "EQUIPARK ESTACIONAMENTO",
        -50,
        "PAGO"
      ],
      [
        "02/06/2026",
        "Despesas administrativas",
        "Despesas com viagens",
        "UBER DO BRASIL TECNOLOGIA LTDA.",
        -12.97,
        "PAGO"
      ],
      [
        "02/06/2026",
        "Despesas administrativas",
        "Despesas com viagens",
        "RESTAURANTE ANDIAMO",
        -374.6,
        "PAGO"
      ],
      [
        "02/06/2026",
        "Despesas administrativas",
        "Despesas com viagens",
        "KAMBUI CHURRASACARIA ARARAQUARA",
        -21.5,
        "PAGO"
      ],
      [
        "02/06/2026",
        "Despesas administrativas",
        "Despesas com viagens",
        "CAMPEAO 38 POSTO DE SERVICOS LTDA",
        -321.47,
        "PAGO"
      ],
      [
        "02/06/2026",
        "Despesas administrativas",
        "Despesas com viagens",
        "BOOKING.COM BRASIL SERVICOS DE RESERVA DE HOTEIS LTDA.",
        -248.4,
        "PAGO"
      ],
      [
        "02/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -8778.21,
        "PAGO"
      ],
      [
        "02/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "GOLDEN PLASTIC COMERCIO E SERVICOS LTDA",
        -6128.8,
        "PAGO"
      ],
      [
        "01/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "LEADPAK SOLUCOES DE FORNECIMENTO LTDA",
        -2581.25,
        "PAGO"
      ],
      [
        "01/06/2026",
        "Operações",
        "Compra de matéria-prima",
        "LEADPAK SOLUCOES DE FORNECIMENTO LTDA",
        -3990.62,
        "PAGO"
      ],
      [
        "01/06/2026",
        "Despesas não operacionais",
        "Outras despesas (Não considerar DRE)",
        "DENILSON GOMES JUNIOR",
        -250,
        "PAGO"
      ],
      [
        "01/06/2026",
        "Despesas operacionais",
        "Luz, água e outros",
        "COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP",
        -182.52,
        "PAGO"
      ],
      [
        "31/05/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "ORNATA DOMUS COMPANY LTDA",
        -7200,
        "PAGO"
      ],
      [
        "30/05/2026",
        "Despesas com serviços",
        "Despesas com frete para compra de materiais",
        "TATIANE DE SOUZA BARONI - TRANSPORTES",
        -2018.35,
        "PAGO"
      ],
      [
        "30/05/2026",
        "Despesas com serviços",
        "Despesas com frete para compra de materiais",
        "TATIANE DE SOUZA BARONI - TRANSPORTES",
        -876.75,
        "PAGO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Compra de insumos para expedição",
        "PRIME BOX EMBALAGENS PAPELAO LTDA",
        -2600.49,
        "PAGO"
      ],
      [
        "29/05/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "NIBO SOFTWARES E CURSOS LTDA.",
        -412.66,
        "PAGO"
      ],
      [
        "29/05/2026",
        "Despesas com serviços",
        "Despesas com frete para compra de materiais",
        "ROBSON DE LIMA DA SILVA - FRETE",
        -100,
        "PAGO"
      ],
      [
        "29/05/2026",
        "Despesas com serviços",
        "Despesas com frete para compra de materiais",
        "CAMILA OLIMPIO CARMONA",
        -120,
        "PAGO"
      ],
      [
        "29/05/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "RICARDO ANTUNES - NATHYPEL",
        -500,
        "PAGO"
      ],
      [
        "29/05/2026",
        "Operações",
        "Compra de insumos para expedição",
        "MUNDO GIBA LTDA - MUNDO GB",
        -1110,
        "PAGO"
      ],
      [
        "29/05/2026",
        "Operações",
        "Compra de insumos para expedição",
        "VALDERI FERREIRA BARBOSA JUNIOR - IMPAKTO VISUAL",
        -695.6,
        "PAGO"
      ],
      [
        "29/05/2026",
        "Despesas Financeiras",
        "Impostos e Taxas",
        "SECRETARIA DA FAZENDA E PLANEJAMENTO",
        -402.06,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Despesas operacionais",
        "Reembolsos por fora de marketplaces",
        "REEMBOLSOS",
        -20,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Despesas não operacionais",
        "Outras despesas",
        "JOSE AMARAL DE ALMEIDA - DESIGNER",
        -100,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Despesas com serviços",
        "Despesas com frete para compra de materiais",
        "ROBSON DE LIMA DA SILVA - FRETE",
        -150,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Operações",
        "Compra de matéria-prima",
        "ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA",
        -3463.56,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -5300,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Operações",
        "Compra de matéria-prima",
        "SMART PRODUTOS QUIMICOS LTDA",
        -5189.35,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Operações",
        "Compra de matéria-prima",
        "CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA",
        -3045.75,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Despesas com serviços",
        "Despesas com frete para compra de materiais",
        "DARBI RINTON ALVES DO NASCIMENTO",
        -500,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Operações",
        "Compra de matéria-prima",
        "ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA",
        -1088.18,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -8778.21,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Operações",
        "Compra de insumos para expedição",
        "TOLOY COMERCIO DE EMBALAGENS LTDA.",
        -240,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Despesas não operacionais",
        "Outras despesas (Não considerar DRE)",
        "PEDRO HENRIQUE CUSTODIO MARTINS",
        -250,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "ORNATA DOMUS COMPANY LTDA",
        -3200,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ELEN FERNANDA CONTE - ARQUITETA",
        -750,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Compra de matéria-prima",
        "LEADPAK SOLUCOES DE FORNECIMENTO LTDA",
        -3990.61,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "MARRI CONSULTORIA EMPRESARIAL LTDA",
        -2431.5,
        "PAGO"
      ],
      [
        "24/05/2026",
        "Operações",
        "Compra de insumos para expedição",
        "PRIME BOX EMBALAGENS PAPELAO LTDA",
        -946.8,
        "PAGO"
      ],
      [
        "23/05/2026",
        "Operações",
        "Compra de insumos para expedição",
        "PRIME BOX EMBALAGENS PAPELAO LTDA",
        -1020.48,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "SUPERMERCADO SÃO LUIS",
        -330.16,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "NASSAR FERREIRA - HOPÇÃO",
        -16.56,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Manutenção predial e benfeitorias",
        "CARRAPICHO - SERRALHEIRO",
        -600,
        "PAGO"
      ]
    ],
    "KPIS": {
      "TOTAL_RECEITA": 1419211.1899999997,
      "TOTAL_DESPESA": 1365946.7999999998,
      "VALOR_LIQUIDO": 53264.3899999999,
      "MARGEM_LIQUIDA": 3.7530982263464194,
      "VALOR_LIQ_SERIES": [
        7018.999999999971,
        37001.189999999944,
        31353.859999999957,
        -47407.31999999995,
        23525.02999999991,
        1772.6299999999756,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    "RECEITA_DIA": [
      25379.28,
      66670.59000000001,
      18129.24,
      159134.61000000002,
      52382.10999999999,
      50787.29000000001,
      18528.85,
      48517.850000000006,
      67538.42,
      31748.479999999996,
      46861.51,
      40723.73999999999,
      41001.5,
      44215.68000000001,
      47427.130000000005,
      58530.62999999999,
      21323.35,
      76125.6,
      55152.71,
      59553.89000000001,
      17897.91,
      67270.57,
      64408.97999999999,
      27505.469999999998,
      28302.93,
      39261.409999999996,
      50623.71999999999,
      18055.55,
      26099.949999999997,
      40601.649999999994,
      9450.59
    ],
    "DESPESA_DIA": [
      17524.83,
      39767.06,
      31055.210000000003,
      85693.20999999999,
      57574.36999999999,
      54319.810000000005,
      77208.95999999999,
      52412.65,
      19590.19,
      110347.58999999997,
      54841.94000000002,
      70601.79,
      32396.59,
      34902.630000000005,
      48735.950000000004,
      45436.66,
      37993.39,
      51367.880000000005,
      36440.43,
      105247.51999999999,
      24277.8,
      34847.79,
      39306.93000000001,
      39294.15000000001,
      21392.53,
      14970.15,
      45751.590000000004,
      32564.6,
      15984.639999999998,
      24679.72,
      9418.24
    ],
    "SALDOS_MES": [
      7018.999999999971,
      44020.189999999915,
      75374.04999999987,
      27966.729999999923,
      51491.759999999835,
      53264.38999999981,
      53264.38999999981,
      53264.38999999981,
      53264.38999999981,
      53264.38999999981,
      53264.38999999981,
      53264.38999999981
    ],
    "FLUXO_RECEITA": [
      {
        "cat": "Repasse de vendas",
        "values": [
          121450.23,
          183772.18999999997,
          248883.53999999998,
          225809.06000000003,
          271802.60999999987,
          206712.18999999994,
          0,
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
          5234,
          0,
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
          8186.55,
          0,
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
          0,
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
          -168455.94,
          -91793.19,
          -164860.64999999997,
          -128652.36000000002,
          -116698.56,
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
          0,
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
          -890.36,
          0,
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
          -12364.23,
          -17985.11,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Compra de insumos para expedição",
        "values": [
          -10271.88,
          -2982.4000000000005,
          -12995.98,
          -13127.409999999998,
          -13328.49,
          -3388.33,
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
        "d2": 734355.5800000004
      },
      {
        "tipo": "Rendimento de investimentos",
        "parent": "Receita",
        "d1": 1065.68,
        "d2": 741.9100000000001
      },
      {
        "tipo": "Repasse de vendas",
        "parent": "Receita",
        "d1": 554105.9599999998,
        "d2": 704323.8600000005
      },
      {
        "tipo": "Receita com vendas",
        "parent": "Receita",
        "d1": 8079.6500000000015,
        "d2": 15480.830000000002
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
        "d2": 13687.740000000002
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
        "d2": -756465.2399999999
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
        "d2": -2863.8
      },
      {
        "tipo": "Compra de insumos para expedição",
        "parent": "Despesa",
        "d1": -26250.260000000002,
        "d2": -29844.229999999992
      },
      {
        "tipo": "Despesas administrativas",
        "parent": "Despesa",
        "d1": -15368.680000000002,
        "d2": -9542.519999999999
      },
      {
        "tipo": "Compra de matéria-prima",
        "parent": "Despesa",
        "d1": -319469.98000000004,
        "d2": -410211.56999999983
      },
      {
        "tipo": "Luz, água e outros",
        "parent": "Despesa",
        "d1": -1838.05,
        "d2": -1565.62
      },
      {
        "tipo": "Despesas com frete para compra de materiais",
        "parent": "Despesa",
        "d1": -15243.180000000002,
        "d2": -19565.039999999997
      },
      {
        "tipo": "Serviços de sistema de gestão",
        "parent": "Despesa",
        "d1": -2583.18,
        "d2": -4567.349999999999
      },
      {
        "tipo": "Compra de mercadorias",
        "parent": "Despesa",
        "d1": -42514,
        "d2": -31811.31
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
        "d2": -7038.219999999998
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
        "d2": -16700.18
      },
      {
        "tipo": "Despesas com outros serviços contratados",
        "parent": "Despesa",
        "d1": -14200.029999999999,
        "d2": -31517.06
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
        "d2": -43548.4
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
        "d2": -13081.73
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
        "d2": -12020.470000000001
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
        "d2": -235
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
        "receita": 91983.65,
        "despesa": 90221.04
      },
      {
        "m": "julho",
        "receita": 288415,
        "despesa": 236076.65999999995
      },
      {
        "m": "agosto",
        "receita": 283700,
        "despesa": 144149.28000000003
      },
      {
        "m": "setembro",
        "receita": 239900,
        "despesa": 88052.79000000001
      },
      {
        "m": "outubro",
        "receita": 0,
        "despesa": 3828.81
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
        "value": 902400,
        "clientes": 5
      },
      {
        "name": "Outras receitas (Não considerar DRE)",
        "value": 1300,
        "clientes": 2
      },
      {
        "name": "Receita com vendas",
        "value": 298.65,
        "clientes": 1
      }
    ],
    "DESPESA_CATEGORIAS": [
      {
        "name": "Compra de matéria-prima",
        "value": 296458.94999999995,
        "fornecedores": 10
      },
      {
        "name": "Salários e encargos",
        "value": 51984.18999999999,
        "fornecedores": 9
      },
      {
        "name": "Impostos sobre receita",
        "value": 51042.87,
        "fornecedores": 1
      },
      {
        "name": "Pagamento de empréstimo",
        "value": 44932.6,
        "fornecedores": 1
      },
      {
        "name": "Compra de mercadorias",
        "value": 33058.5,
        "fornecedores": 2
      },
      {
        "name": "Despesas com outros serviços contratados",
        "value": 23524.2,
        "fornecedores": 5
      },
      {
        "name": "Compra de insumos para expedição",
        "value": 17147.07,
        "fornecedores": 4
      },
      {
        "name": "Despesas com ADS",
        "value": 10041.06,
        "fornecedores": 2
      },
      {
        "name": "Compra de ativo imobilizado",
        "value": 8319.779999999999,
        "fornecedores": 4
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
        "value": 3713.04,
        "fornecedores": 8
      }
    ],
    "RECEITA_CLIENTES": [
      {
        "name": "SHOPEE",
        "value": 450800
      },
      {
        "name": "SHEIN",
        "value": 186000
      },
      {
        "name": "TIKTOK",
        "value": 100100
      },
      {
        "name": "MERCADO LIVRE",
        "value": 99000
      },
      {
        "name": "AMAZON",
        "value": 66500
      },
      {
        "name": "JOAO ANTONIO DA SILVA DOS SANTOS",
        "value": 1000
      },
      {
        "name": "PEDRO HENRIQUE CUSTODIO MARTINS",
        "value": 300
      },
      {
        "name": "VENDA FÍSICA",
        "value": 298.65
      }
    ],
    "DESPESA_FORNECEDORES": [
      {
        "name": "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        "value": 120884.53000000003
      },
      {
        "name": "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        "value": 107250
      },
      {
        "name": "ORNATA DOMUS COMPANY LTDA",
        "value": 64705.969999999994
      },
      {
        "name": "SIMPLES NACIONAL",
        "value": 51042.87
      },
      {
        "name": "ENNATERRA AROMATIZADORES LTDA",
        "value": 21200
      },
      {
        "name": "SMART PRODUTOS QUIMICOS LTDA",
        "value": 18682.079999999998
      },
      {
        "name": "PRIME BOX EMBALAGENS PAPELAO LTDA",
        "value": 15569.64
      },
      {
        "name": "ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA",
        "value": 14395.61
      },
      {
        "name": "EMMILY REGINA COSMO BETARELLO - FLORAE",
        "value": 11858.5
      },
      {
        "name": "CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA",
        "value": 7865
      },
      {
        "name": "LEADPAK SOLUCOES DE FORNECIMENTO LTDA",
        "value": 7664.59
      },
      {
        "name": "PAULO CESAR LOPES (ROPE)",
        "value": 7500
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
        "12/10/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "28/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "28/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "27/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "26/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
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
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "24/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "23/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "22/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "21/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "21/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "21/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
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
        1100,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
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
        4600,
        "A_PAGAR"
      ],
      [
        "19/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        7000,
        "A_PAGAR"
      ],
      [
        "17/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "17/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "16/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "16/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
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
        1100,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
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
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ESCOBAR & CORREA LTDA - ESCOSEG",
        -150,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ORNATA DOMUS COMPANY LTDA",
        -5000,
        "A_PAGAR"
      ],
      [
        "14/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "14/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "14/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "13/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "13/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "12/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "12/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
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
        7000,
        "A_PAGAR"
      ],
      [
        "11/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
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
        1100,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
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
        4600,
        "A_PAGAR"
      ],
      [
        "09/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
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
        1100,
        "A_PAGAR"
      ],
      [
        "08/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "07/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "07/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "07/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "07/09/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "LEANDRO MARTINS BELCHIOR DA SILVA",
        -150,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
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
        "RAFAEL DOS SANTOS PILIELO",
        -150,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "MARIA LAURA DE MELLO LINO",
        -200,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "POLYANA CECILIA ALMEIDA FERREIRA",
        -137.68,
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
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "05/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
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
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "04/09/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        7000,
        "A_PAGAR"
      ],
      [
        "04/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "03/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "03/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "02/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "02/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
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
        -195.7,
        "A_PAGAR"
      ],
      [
        "01/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "01/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "01/09/2026",
        "Despesas administrativas",
        "Despesas com alimentação",
        "MARLENE DE SOUZA SILVA LTDA - PADARIA NOVA OPÇÃO",
        -514,
        "A_PAGAR"
      ],
      [
        "31/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "31/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "31/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "29/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "29/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
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
        1100,
        "A_PAGAR"
      ],
      [
        "28/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "28/08/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        7000,
        "A_PAGAR"
      ],
      [
        "28/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -7646.21,
        "A_PAGAR"
      ],
      [
        "27/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "27/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "26/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "26/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
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
        "25/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "CLIMAK INDUSTRIA E COMERCIO DE MAQUINAS E EQUIPAMENTOS LTDA - EDERMAK",
        -500,
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
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "24/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "24/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "23/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "23/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "22/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "22/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "21/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "21/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "21/08/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        7000,
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
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -7646.21,
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
        "20/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
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
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "19/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
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
        "18/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "18/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ]
    ],
    "EXTRATO_RECEITAS": [
      [
        "28/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "28/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "27/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "26/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
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
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "24/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "23/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "22/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "21/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "21/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "21/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "19/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "19/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        7000,
        "A_PAGAR"
      ],
      [
        "17/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "17/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "16/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "16/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "14/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "14/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "14/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "13/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "13/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "12/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "12/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "11/09/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        7000,
        "A_PAGAR"
      ],
      [
        "11/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
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
        1100,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "09/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "09/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "08/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "08/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "07/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "07/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "07/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "05/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "05/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "04/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "04/09/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        7000,
        "A_PAGAR"
      ],
      [
        "04/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "03/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "03/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "02/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "02/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "01/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "01/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "31/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "31/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "31/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "29/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "29/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
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
        1100,
        "A_PAGAR"
      ],
      [
        "28/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "28/08/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        7000,
        "A_PAGAR"
      ],
      [
        "27/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "27/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "26/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "26/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "24/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "24/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "24/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "23/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "23/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "22/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "22/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "21/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "21/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "21/08/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        7000,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "19/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "19/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "18/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "18/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "17/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "17/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "17/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "16/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "16/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "15/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "15/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "14/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
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
        7000,
        "A_PAGAR"
      ],
      [
        "14/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "13/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "13/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "12/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "12/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "11/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "11/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "09/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "09/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "08/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "08/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "07/08/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        7000,
        "A_PAGAR"
      ],
      [
        "07/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "07/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "05/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "05/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "04/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "04/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "03/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "03/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "03/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "02/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "02/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "01/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "01/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "31/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "31/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "31/07/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        7000,
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
        4600,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "29/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "29/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "28/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "28/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "27/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "27/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "27/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "26/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "26/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "24/07/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        7000,
        "A_PAGAR"
      ],
      [
        "24/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "24/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "23/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "23/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "22/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "22/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "21/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "21/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "19/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "19/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "18/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "18/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "17/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "17/07/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        9500,
        "A_PAGAR"
      ],
      [
        "17/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "17/07/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        7000,
        "A_PAGAR"
      ],
      [
        "16/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "16/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "15/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "15/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "14/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "14/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "13/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "13/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "13/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "12/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "12/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "11/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "11/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "10/07/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        73,
        "A_PAGAR"
      ],
      [
        "10/07/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        16,
        "A_PAGAR"
      ],
      [
        "10/07/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        126,
        "A_PAGAR"
      ],
      [
        "10/07/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        7000,
        "A_PAGAR"
      ],
      [
        "10/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "10/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "09/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "09/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "08/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "08/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "07/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "07/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "06/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "06/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "06/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "05/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "05/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "04/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "04/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
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
        "12/10/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
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
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ESCOBAR & CORREA LTDA - ESCOSEG",
        -150,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ORNATA DOMUS COMPANY LTDA",
        -5000,
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
        "07/09/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "LEANDRO MARTINS BELCHIOR DA SILVA",
        -150,
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
        "RAFAEL DOS SANTOS PILIELO",
        -150,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "MARIA LAURA DE MELLO LINO",
        -200,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "POLYANA CECILIA ALMEIDA FERREIRA",
        -137.68,
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
        -195.7,
        "A_PAGAR"
      ],
      [
        "01/09/2026",
        "Despesas administrativas",
        "Despesas com alimentação",
        "MARLENE DE SOUZA SILVA LTDA - PADARIA NOVA OPÇÃO",
        -514,
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
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -7646.21,
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
        "25/08/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "CLIMAK INDUSTRIA E COMERCIO DE MAQUINAS E EQUIPAMENTOS LTDA - EDERMAK",
        -500,
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
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -7646.21,
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
        "PUMP AMERICA INDUSTRIA DE VALVULAS LTDA",
        -1029.75,
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
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ESCOBAR & CORREA LTDA - ESCOSEG",
        -150,
        "A_PAGAR"
      ],
      [
        "15/08/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ORNATA DOMUS COMPANY LTDA",
        -5000,
        "A_PAGAR"
      ],
      [
        "14/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -7646.21,
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
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
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
        "Operações",
        "Compra de matéria-prima",
        "PUMP AMERICA INDUSTRIA DE VALVULAS LTDA",
        -1029.73,
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
        "MERCADO LIVRE",
        -9.9,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Despesas operacionais",
        "Luz, água e outros",
        "MAYARA B. G. FERNANDES - FTI NET",
        -69,
        "A_PAGAR"
      ],
      [
        "07/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -7646.21,
        "A_PAGAR"
      ],
      [
        "07/08/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "LEANDRO MARTINS BELCHIOR DA SILVA",
        -150,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas administrativas",
        "Despesas com benefícios aos sócios e diretores",
        "JOAO EDUARDO GONCALVES NOGUEIRA",
        -200,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas administrativas",
        "Despesas com benefícios aos sócios e diretores",
        "SAMUEL ANTONIO DE SOUZA MARTINS",
        -200,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas com serviços",
        "Serviços de contabilidade",
        "GUILHERME TORCHETTI LOUREIRO DA SILVA",
        -1000,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Operações",
        "Compra de insumos para expedição",
        "PRIME BOX EMBALAGENS PAPELAO LTDA",
        -81.67,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "KARINA DE LIMA TENORIO",
        -150,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "RAFAEL DOS SANTOS PILIELO",
        -150,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "VITORIA CRISTINA TANGODA MAIA",
        -150,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "DANIELLY DE SOUSA SILVA",
        -150,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "ISABELA TENORIO BARONE",
        -150,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "MARIA LAURA DE MELLO LINO",
        -200,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "POLYANA CECILIA ALMEIDA FERREIRA",
        -137.68,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "DANIELLY DE SOUSA SILVA",
        -1662.63,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "VITORIA CRISTINA TANGODA MAIA",
        -1662.32,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "ISABELA TENORIO BARONE",
        -1957.35,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "KARINA DE LIMA TENORIO",
        -1957.35,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "POLYANA CECILIA ALMEIDA FERREIRA",
        -2321.35,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "LEANDRO MARTINS BELCHIOR DA SILVA",
        -1957.35,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "RAFAEL DOS SANTOS PILIELO",
        -2200,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "MARIA LAURA DE MELLO LINO",
        -2008.12,
        "A_PAGAR"
      ],
      [
        "05/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "05/08/2026",
        "Operações",
        "Compra de mercadorias",
        "ENNATERRA AROMATIZADORES LTDA",
        -5300,
        "A_PAGAR"
      ],
      [
        "03/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "PUMP AMERICA INDUSTRIA DE VALVULAS LTDA",
        -1029.73,
        "A_PAGAR"
      ],
      [
        "03/08/2026",
        "Operações",
        "Compra de insumos para expedição",
        "PRIME BOX EMBALAGENS PAPELAO LTDA",
        -2170,
        "A_PAGAR"
      ],
      [
        "02/08/2026",
        "Despesas operacionais",
        "Luz, água e outros",
        "COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP",
        -195.7,
        "A_PAGAR"
      ],
      [
        "01/08/2026",
        "Operações",
        "Compra de mercadorias",
        "ENNATERRA AROMATIZADORES LTDA",
        -1700,
        "A_PAGAR"
      ],
      [
        "01/08/2026",
        "Despesas administrativas",
        "Despesas com alimentação",
        "MARLENE DE SOUZA SILVA LTDA - PADARIA NOVA OPÇÃO",
        -514,
        "A_PAGAR"
      ],
      [
        "31/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -7646.21,
        "A_PAGAR"
      ],
      [
        "31/07/2026",
        "Despesas Financeiras",
        "Impostos e Taxas",
        "SECRETARIA DA FAZENDA E PLANEJAMENTO",
        -1670.91,
        "A_PAGAR"
      ],
      [
        "29/07/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "NIBO SOFTWARES E CURSOS LTDA.",
        -479,
        "A_PAGAR"
      ],
      [
        "29/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "28/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA",
        -3598.91,
        "A_PAGAR"
      ],
      [
        "27/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "PUMP AMERICA INDUSTRIA DE VALVULAS LTDA",
        -1029.73,
        "A_PAGAR"
      ],
      [
        "26/07/2026",
        "Operações",
        "Compra de insumos para expedição",
        "PRIME BOX EMBALAGENS PAPELAO LTDA",
        -2071.38,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "CLIMAK INDUSTRIA E COMERCIO DE MAQUINAS E EQUIPAMENTOS LTDA - EDERMAK",
        -500,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "MARRI CONSULTORIA EMPRESARIAL LTDA",
        -2431.5,
        "A_PAGAR"
      ],
      [
        "24/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -8418.68,
        "A_PAGAR"
      ],
      [
        "24/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -7646.21,
        "A_PAGAR"
      ],
      [
        "23/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "LEADPAK SOLUCOES DE FORNECIMENTO LTDA",
        -1596.93,
        "A_PAGAR"
      ],
      [
        "22/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "22/07/2026",
        "Operações",
        "Compra de insumos para expedição",
        "PRIME BOX EMBALAGENS PAPELAO LTDA",
        -81.66,
        "A_PAGAR"
      ],
      [
        "21/07/2026",
        "Despesas com serviços",
        "Despesas com frete para devolução e reenvio",
        "EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS",
        -500,
        "A_PAGAR"
      ],
      [
        "21/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA",
        -888.91,
        "A_PAGAR"
      ],
      [
        "21/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA",
        -3598.9,
        "A_PAGAR"
      ],
      [
        "21/07/2026",
        "Marketing e publicidade",
        "Despesas com ADS",
        "SHOPEE",
        -2000,
        "A_PAGAR"
      ],
      [
        "21/07/2026",
        "Marketing e publicidade",
        "Despesas com ADS",
        "SHOPEE",
        -4000,
        "A_PAGAR"
      ],
      [
        "21/07/2026",
        "Marketing e publicidade",
        "Despesas com ADS",
        "SHOPEE",
        -500,
        "A_PAGAR"
      ],
      [
        "21/07/2026",
        "Marketing e publicidade",
        "Despesas com ADS",
        "BR TIKTOK SHOP BRASIL LTDA",
        -630,
        "A_PAGAR"
      ],
      [
        "21/07/2026",
        "Marketing e publicidade",
        "Despesas com ADS",
        "BR TIKTOK SHOP BRASIL LTDA",
        -1500,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "JOSE AMARAL DE ALMEIDA - DESIGNER",
        -700,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "SMART PRODUTOS QUIMICOS LTDA",
        -6227.36,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Operações",
        "Impostos sobre receita",
        "SIMPLES NACIONAL",
        -17014.29,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Despesas operacionais",
        "Luz, água e outros",
        "ELEKTRO REDES S.A.",
        -370,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "CAIXA ECONOMICA FEDERAL",
        -496.71,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "CAIXA ECONOMICA FEDERAL",
        -1171.55,
        "A_PAGAR"
      ],
      [
        "19/07/2026",
        "Operações",
        "Compra de insumos para expedição",
        "PRIME BOX EMBALAGENS PAPELAO LTDA",
        -2170,
        "A_PAGAR"
      ],
      [
        "18/07/2026",
        "Operações",
        "Manutenção predial e benfeitorias",
        "BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR",
        -496.9,
        "A_PAGAR"
      ],
      [
        "17/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -7646.2,
        "A_PAGAR"
      ],
      [
        "17/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -8418.68,
        "A_PAGAR"
      ],
      [
        "17/07/2026",
        "Operações",
        "Compra de mercadorias",
        "ENNATERRA AROMATIZADORES LTDA",
        -1900,
        "A_PAGAR"
      ],
      [
        "16/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "LEADPAK SOLUCOES DE FORNECIMENTO LTDA",
        -1596.93,
        "A_PAGAR"
      ],
      [
        "15/07/2026",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3914.47,
        "A_PAGAR"
      ],
      [
        "15/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "15/07/2026",
        "Despesas com serviços",
        "Serviços de contabilidade",
        "DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA",
        -450,
        "A_PAGAR"
      ],
      [
        "15/07/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ESCOBAR & CORREA LTDA - ESCOSEG",
        -150,
        "A_PAGAR"
      ],
      [
        "15/07/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ORNATA DOMUS COMPANY LTDA",
        -5000,
        "A_PAGAR"
      ],
      [
        "14/07/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "TAMBASA - TECIDOS E ARMARINHOS MIGUEL BARTOLOMEU S/A",
        -183.12,
        "A_PAGAR"
      ],
      [
        "14/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA",
        -2125,
        "A_PAGAR"
      ],
      [
        "14/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA",
        -3598.9,
        "A_PAGAR"
      ]
    ],
    "KPIS": {
      "TOTAL_RECEITA": 903998.65,
      "TOTAL_DESPESA": 569926.43,
      "VALOR_LIQUIDO": 334072.22,
      "MARGEM_LIQUIDA": 36.954946780064326,
      "VALOR_LIQ_SERIES": [
        0,
        0,
        0,
        0,
        0,
        1762.6100000000006,
        52338.340000000055,
        139550.71999999997,
        151847.21,
        -3828.81,
        -3891.12,
        -3706.7299999999996
      ]
    },
    "RECEITA_DIA": [
      17100,
      17100,
      45600,
      24100,
      17100,
      29100,
      36100,
      17100,
      17100,
      36315,
      33600,
      17100,
      29100,
      45600,
      17100,
      17100,
      45600,
      24100,
      17100,
      29100,
      36100,
      24000,
      41000,
      40700,
      31200,
      28700,
      33783.65,
      50200,
      29100,
      17100,
      39900
    ],
    "DESPESA_DIA": [
      11492,
      11856.34,
      20040.969999999998,
      0,
      24150,
      54524.11999999999,
      13820.11,
      8250,
      9846.94,
      29799.82,
      2071.39,
      13065.679999999998,
      747.44,
      15817.560000000001,
      40238.7,
      13713.060000000001,
      23032.2,
      2666.9,
      10420,
      77939.73000000001,
      23234.6,
      8331.66,
      7691.26,
      32600.18,
      11813.74,
      33303.869999999995,
      1029.73,
      11245.119999999999,
      12287.48,
      35578.71,
      9317.12
    ],
    "SALDOS_MES": [
      0,
      0,
      0,
      0,
      0,
      1762.6100000000006,
      54100.950000000055,
      193651.67000000004,
      345498.88,
      341670.07,
      337778.95,
      334072.22000000003
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
          90600,
          288200,
          283700,
          239900,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Outras receitas (Não considerar DRE)",
        "values": [
          0,
          0,
          0,
          0,
          0,
          1300,
          0,
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
          0,
          0,
          0,
          0,
          0,
          83.65,
          215,
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
          -40434.45999999999,
          -150283.46,
          -74763.67,
          -30977.36,
          0,
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
          -17194.729999999996,
          -17394.73,
          -17394.73,
          0,
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
          -17014.29,
          -17014.29,
          -17014.29,
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
          0,
          0,
          0,
          -21840.2,
          -3914.47,
          -4037.57,
          -3788.67,
          -3803.82,
          -3866.13,
          -3681.74
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
          -11858.5,
          -7200,
          -8700,
          -5300,
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
        "d1": 0,
        "d2": 91983.65
      },
      {
        "tipo": "Repasse de vendas",
        "parent": "Receita",
        "d1": 0,
        "d2": 90600
      },
      {
        "tipo": "Outras receitas (Não considerar DRE)",
        "parent": "Receita",
        "d1": 0,
        "d2": 1300
      },
      {
        "tipo": "Receita com vendas",
        "parent": "Receita",
        "d1": 0,
        "d2": 83.65
      },
      {
        "tipo": "Despesa",
        "isHeader": true,
        "d1": 0,
        "d2": -90221.04
      },
      {
        "tipo": "Compra de mercadorias",
        "parent": "Despesa",
        "d1": 0,
        "d2": -11858.5
      },
      {
        "tipo": "Compra de matéria-prima",
        "parent": "Despesa",
        "d1": 0,
        "d2": -40434.45999999999
      },
      {
        "tipo": "Luz, água e outros",
        "parent": "Despesa",
        "d1": 0,
        "d2": -259.13
      },
      {
        "tipo": "Compra de insumos para expedição",
        "parent": "Despesa",
        "d1": 0,
        "d2": -6241.87
      },
      {
        "tipo": "Despesas com outros serviços contratados",
        "parent": "Despesa",
        "d1": 0,
        "d2": -3181.5
      },
      {
        "tipo": "Compra de ativo imobilizado",
        "parent": "Despesa",
        "d1": 0,
        "d2": -4569.87
      },
      {
        "tipo": "Serviços de sistema de gestão",
        "parent": "Despesa",
        "d1": 0,
        "d2": -479
      },
      {
        "tipo": "Despesas com frete para compra de materiais",
        "parent": "Despesa",
        "d1": 0,
        "d2": -654.0899999999999
      },
      {
        "tipo": "Pagamento de empréstimo",
        "parent": "Despesa",
        "d1": 0,
        "d2": -21840.2
      },
      {
        "tipo": "Impostos e Taxas",
        "parent": "Despesa",
        "d1": 0,
        "d2": -702.42
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
        "despesa": 269523.43000000005
      },
      {
        "m": "março",
        "receita": 253411.10999999993,
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
        "despesa": 255761.34999999992
      },
      {
        "m": "junho",
        "receita": 312116.39,
        "despesa": 308581.15
      },
      {
        "m": "julho",
        "receita": 288415,
        "despesa": 236076.65999999995
      },
      {
        "m": "agosto",
        "receita": 283700,
        "despesa": 144149.28000000003
      },
      {
        "m": "setembro",
        "receita": 239900,
        "despesa": 88052.79000000001
      },
      {
        "m": "outubro",
        "receita": 0,
        "despesa": 3828.81
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
        "value": 2160829.8199999994,
        "clientes": 5
      },
      {
        "name": "Obtenção de empréstimo",
        "value": 110000,
        "clientes": 1
      },
      {
        "name": "Outras receitas (Não considerar DRE)",
        "value": 26527.620000000003,
        "clientes": 15
      },
      {
        "name": "Receita com vendas",
        "value": 23859.129999999994,
        "clientes": 7
      },
      {
        "name": "Rendimento de investimentos",
        "value": 1807.5900000000001,
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
        "value": 1026140.5000000007,
        "fornecedores": 20
      },
      {
        "name": "Salários e encargos",
        "value": 115165.5800000001,
        "fornecedores": 11
      },
      {
        "name": "Compra de mercadorias",
        "value": 107383.81,
        "fornecedores": 4
      },
      {
        "name": "Impostos sobre receita",
        "value": 97047.72,
        "fornecedores": 1
      },
      {
        "name": "Pagamento de empréstimo",
        "value": 92451.82000000002,
        "fornecedores": 1
      },
      {
        "name": "Despesas com ADS",
        "value": 87570.06000000001,
        "fornecedores": 2
      },
      {
        "name": "Compra de insumos para expedição",
        "value": 73241.56,
        "fornecedores": 12
      },
      {
        "name": "Despesas com outros serviços contratados",
        "value": 69241.29000000001,
        "fornecedores": 12
      },
      {
        "name": "Compra de ativo imobilizado",
        "value": 47468.450000000004,
        "fornecedores": 12
      },
      {
        "name": "Despesas com frete para compra de materiais",
        "value": 35462.31,
        "fornecedores": 14
      },
      {
        "name": "Despesas administrativas",
        "value": 25001.199999999997,
        "fornecedores": 19
      },
      {
        "name": "Outras despesas (Não considerar DRE)",
        "value": 24857.68,
        "fornecedores": 16
      }
    ],
    "RECEITA_CLIENTES": [
      {
        "name": "SHOPEE",
        "value": 1281870.6500000001
      },
      {
        "name": "SHEIN",
        "value": 384736.2200000001
      },
      {
        "name": "MERCADO LIVRE",
        "value": 216800
      },
      {
        "name": "TIKTOK",
        "value": 163974.22999999998
      },
      {
        "name": "ORNATA DOMUS COMPANY LTDA",
        "value": 136216.27000000002
      },
      {
        "name": "AMAZON",
        "value": 113448.72
      },
      {
        "name": "VENDA FÍSICA",
        "value": 5387.750000000002
      },
      {
        "name": "SAMUEL ANTONIO DE SOUZA MARTINS",
        "value": 4200
      },
      {
        "name": "MARIA LAURA DE MELLO LINO",
        "value": 2176.54
      },
      {
        "name": "JOAO ANTONIO DA SILVA DOS SANTOS",
        "value": 2000
      },
      {
        "name": "FABRICIA LIMA STORE - LUCAS HENRIQUE DE SOUZA VESTUARIOS",
        "value": 1636.37
      },
      {
        "name": "MERCADO PAGO",
        "value": 1335.9099999999999
      }
    ],
    "DESPESA_FORNECEDORES": [
      {
        "name": "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        "value": 352368.7400000001
      },
      {
        "name": "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        "value": 220475
      },
      {
        "name": "ORNATA DOMUS COMPANY LTDA",
        "value": 187238.27000000005
      },
      {
        "name": "SIMPLES NACIONAL",
        "value": 97047.72
      },
      {
        "name": "SYMRISE AROMAS E FRAGRANCIAS LTDA",
        "value": 80400.46
      },
      {
        "name": "SHOPEE",
        "value": 79981.41
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
        "name": "LEADPAK SOLUCOES DE FORNECIMENTO LTDA",
        "value": 60112.170000000006
      },
      {
        "name": "EMMILY REGINA COSMO BETARELLO - FLORAE",
        "value": 59554
      },
      {
        "name": "SMART PRODUTOS QUIMICOS LTDA",
        "value": 55438.93
      },
      {
        "name": "PRIME BOX EMBALAGENS PAPELAO LTDA",
        "value": 53258.07
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
        "12/10/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
        "A_PAGAR"
      ],
      [
        "28/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "28/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "27/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "26/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
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
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "24/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "23/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "22/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "21/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "21/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "21/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
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
        1100,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
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
        4600,
        "A_PAGAR"
      ],
      [
        "19/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        7000,
        "A_PAGAR"
      ],
      [
        "17/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "17/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "16/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "16/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
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
        1100,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
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
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ESCOBAR & CORREA LTDA - ESCOSEG",
        -150,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ORNATA DOMUS COMPANY LTDA",
        -5000,
        "A_PAGAR"
      ],
      [
        "14/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "14/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "14/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "13/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "13/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "12/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "12/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
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
        7000,
        "A_PAGAR"
      ],
      [
        "11/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
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
        1100,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
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
        4600,
        "A_PAGAR"
      ],
      [
        "09/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
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
        1100,
        "A_PAGAR"
      ],
      [
        "08/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "07/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "07/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "07/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "07/09/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "LEANDRO MARTINS BELCHIOR DA SILVA",
        -150,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
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
        "RAFAEL DOS SANTOS PILIELO",
        -150,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "MARIA LAURA DE MELLO LINO",
        -200,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "POLYANA CECILIA ALMEIDA FERREIRA",
        -137.68,
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
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "05/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
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
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "04/09/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        7000,
        "A_PAGAR"
      ],
      [
        "04/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "03/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "03/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "02/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "02/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
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
        -195.7,
        "A_PAGAR"
      ],
      [
        "01/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "01/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "01/09/2026",
        "Despesas administrativas",
        "Despesas com alimentação",
        "MARLENE DE SOUZA SILVA LTDA - PADARIA NOVA OPÇÃO",
        -514,
        "A_PAGAR"
      ],
      [
        "31/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "31/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "31/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "29/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "29/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
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
        1100,
        "A_PAGAR"
      ],
      [
        "28/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "28/08/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        7000,
        "A_PAGAR"
      ],
      [
        "28/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -7646.21,
        "A_PAGAR"
      ],
      [
        "27/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "27/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "26/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "26/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
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
        "25/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "CLIMAK INDUSTRIA E COMERCIO DE MAQUINAS E EQUIPAMENTOS LTDA - EDERMAK",
        -500,
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
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "24/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "24/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "23/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "23/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "22/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "22/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "21/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "21/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "21/08/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        7000,
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
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -7646.21,
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
        "20/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
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
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "19/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
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
        "18/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "18/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ]
    ],
    "EXTRATO_RECEITAS": [
      [
        "28/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "28/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "27/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "26/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
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
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "24/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "23/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "22/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "21/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "21/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "21/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "19/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "19/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        7000,
        "A_PAGAR"
      ],
      [
        "17/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "17/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "16/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "16/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "14/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "14/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "14/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "13/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "13/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "12/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "12/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "11/09/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        7000,
        "A_PAGAR"
      ],
      [
        "11/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
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
        1100,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "09/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "09/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "08/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "08/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "07/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "07/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "07/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "05/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "05/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "04/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "04/09/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        7000,
        "A_PAGAR"
      ],
      [
        "04/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "03/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "03/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "02/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "02/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "01/09/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "01/09/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "31/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "31/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "31/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "29/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "29/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
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
        1100,
        "A_PAGAR"
      ],
      [
        "28/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "28/08/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        7000,
        "A_PAGAR"
      ],
      [
        "27/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "27/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "26/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "26/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "24/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "24/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "24/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "23/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "23/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "22/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "22/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "21/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "21/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "21/08/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        7000,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "19/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "19/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "18/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "18/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "17/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "17/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "17/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "16/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "16/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "15/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "15/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "14/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
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
        7000,
        "A_PAGAR"
      ],
      [
        "14/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "13/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "13/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "12/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "12/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "11/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "11/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "09/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "09/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "08/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "08/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "07/08/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        7000,
        "A_PAGAR"
      ],
      [
        "07/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "07/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "05/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "05/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "04/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "04/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "03/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "03/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "03/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "02/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "02/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "01/08/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "01/08/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "31/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "31/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "31/07/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        7000,
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
        4600,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "29/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "29/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "28/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "28/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "27/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "27/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "27/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "26/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "26/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "24/07/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        7000,
        "A_PAGAR"
      ],
      [
        "24/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "24/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "23/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "23/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "22/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "22/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "21/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "21/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "19/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "19/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "18/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "18/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "17/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "17/07/2026",
        "Operações",
        "Repasse de vendas",
        "AMAZON",
        9500,
        "A_PAGAR"
      ],
      [
        "17/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "17/07/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        7000,
        "A_PAGAR"
      ],
      [
        "16/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "16/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "15/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "15/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "14/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "14/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "13/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "13/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "13/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "12/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "12/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "11/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "11/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "10/07/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        73,
        "A_PAGAR"
      ],
      [
        "10/07/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        16,
        "A_PAGAR"
      ],
      [
        "10/07/2026",
        "Operações",
        "Receita com vendas",
        "VENDA FÍSICA",
        126,
        "A_PAGAR"
      ],
      [
        "10/07/2026",
        "Operações",
        "Repasse de vendas",
        "MERCADO LIVRE",
        7000,
        "A_PAGAR"
      ],
      [
        "10/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "10/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "09/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "09/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "08/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "08/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "07/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "07/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "06/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "06/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "06/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHEIN",
        12000,
        "A_PAGAR"
      ],
      [
        "05/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
        "A_PAGAR"
      ],
      [
        "05/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "04/07/2026",
        "Operações",
        "Repasse de vendas",
        "SHOPEE",
        4600,
        "A_PAGAR"
      ],
      [
        "04/07/2026",
        "Operações",
        "Repasse de vendas",
        "TIKTOK",
        1100,
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
        "12/10/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "SERASA S.A.",
        -24.99,
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
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ESCOBAR & CORREA LTDA - ESCOSEG",
        -150,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ORNATA DOMUS COMPANY LTDA",
        -5000,
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
        "07/09/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "LEANDRO MARTINS BELCHIOR DA SILVA",
        -150,
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
        "RAFAEL DOS SANTOS PILIELO",
        -150,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "MARIA LAURA DE MELLO LINO",
        -200,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "POLYANA CECILIA ALMEIDA FERREIRA",
        -137.68,
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
        -195.7,
        "A_PAGAR"
      ],
      [
        "01/09/2026",
        "Despesas administrativas",
        "Despesas com alimentação",
        "MARLENE DE SOUZA SILVA LTDA - PADARIA NOVA OPÇÃO",
        -514,
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
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -7646.21,
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
        "25/08/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "CLIMAK INDUSTRIA E COMERCIO DE MAQUINAS E EQUIPAMENTOS LTDA - EDERMAK",
        -500,
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
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -7646.21,
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
        "PUMP AMERICA INDUSTRIA DE VALVULAS LTDA",
        -1029.75,
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
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ESCOBAR & CORREA LTDA - ESCOSEG",
        -150,
        "A_PAGAR"
      ],
      [
        "15/08/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ORNATA DOMUS COMPANY LTDA",
        -5000,
        "A_PAGAR"
      ],
      [
        "14/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -7646.21,
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
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
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
        "Operações",
        "Compra de matéria-prima",
        "PUMP AMERICA INDUSTRIA DE VALVULAS LTDA",
        -1029.73,
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
        "MERCADO LIVRE",
        -9.9,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Despesas operacionais",
        "Luz, água e outros",
        "MAYARA B. G. FERNANDES - FTI NET",
        -69,
        "A_PAGAR"
      ],
      [
        "07/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -7646.21,
        "A_PAGAR"
      ],
      [
        "07/08/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "LEANDRO MARTINS BELCHIOR DA SILVA",
        -150,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas administrativas",
        "Despesas com benefícios aos sócios e diretores",
        "JOAO EDUARDO GONCALVES NOGUEIRA",
        -200,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas administrativas",
        "Despesas com benefícios aos sócios e diretores",
        "SAMUEL ANTONIO DE SOUZA MARTINS",
        -200,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas com serviços",
        "Serviços de contabilidade",
        "GUILHERME TORCHETTI LOUREIRO DA SILVA",
        -1000,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Operações",
        "Compra de insumos para expedição",
        "PRIME BOX EMBALAGENS PAPELAO LTDA",
        -81.67,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "KARINA DE LIMA TENORIO",
        -150,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "RAFAEL DOS SANTOS PILIELO",
        -150,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "VITORIA CRISTINA TANGODA MAIA",
        -150,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "DANIELLY DE SOUSA SILVA",
        -150,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "ISABELA TENORIO BARONE",
        -150,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "MARIA LAURA DE MELLO LINO",
        -200,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas com colaboradores",
        "Vale-Refeição (VR)",
        "POLYANA CECILIA ALMEIDA FERREIRA",
        -137.68,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "DANIELLY DE SOUSA SILVA",
        -1662.63,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "VITORIA CRISTINA TANGODA MAIA",
        -1662.32,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "ISABELA TENORIO BARONE",
        -1957.35,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "KARINA DE LIMA TENORIO",
        -1957.35,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "POLYANA CECILIA ALMEIDA FERREIRA",
        -2321.35,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "LEANDRO MARTINS BELCHIOR DA SILVA",
        -1957.35,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "RAFAEL DOS SANTOS PILIELO",
        -2200,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "MARIA LAURA DE MELLO LINO",
        -2008.12,
        "A_PAGAR"
      ],
      [
        "05/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "05/08/2026",
        "Operações",
        "Compra de mercadorias",
        "ENNATERRA AROMATIZADORES LTDA",
        -5300,
        "A_PAGAR"
      ],
      [
        "03/08/2026",
        "Operações",
        "Compra de matéria-prima",
        "PUMP AMERICA INDUSTRIA DE VALVULAS LTDA",
        -1029.73,
        "A_PAGAR"
      ],
      [
        "03/08/2026",
        "Operações",
        "Compra de insumos para expedição",
        "PRIME BOX EMBALAGENS PAPELAO LTDA",
        -2170,
        "A_PAGAR"
      ],
      [
        "02/08/2026",
        "Despesas operacionais",
        "Luz, água e outros",
        "COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP",
        -195.7,
        "A_PAGAR"
      ],
      [
        "01/08/2026",
        "Operações",
        "Compra de mercadorias",
        "ENNATERRA AROMATIZADORES LTDA",
        -1700,
        "A_PAGAR"
      ],
      [
        "01/08/2026",
        "Despesas administrativas",
        "Despesas com alimentação",
        "MARLENE DE SOUZA SILVA LTDA - PADARIA NOVA OPÇÃO",
        -514,
        "A_PAGAR"
      ],
      [
        "31/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -7646.21,
        "A_PAGAR"
      ],
      [
        "31/07/2026",
        "Despesas Financeiras",
        "Impostos e Taxas",
        "SECRETARIA DA FAZENDA E PLANEJAMENTO",
        -1670.91,
        "A_PAGAR"
      ],
      [
        "29/07/2026",
        "Despesas com serviços",
        "Serviços de sistema de gestão",
        "NIBO SOFTWARES E CURSOS LTDA.",
        -479,
        "A_PAGAR"
      ],
      [
        "29/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "28/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA",
        -3598.91,
        "A_PAGAR"
      ],
      [
        "27/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "PUMP AMERICA INDUSTRIA DE VALVULAS LTDA",
        -1029.73,
        "A_PAGAR"
      ],
      [
        "26/07/2026",
        "Operações",
        "Compra de insumos para expedição",
        "PRIME BOX EMBALAGENS PAPELAO LTDA",
        -2071.38,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Operações",
        "Compra de ativo imobilizado",
        "CLIMAK INDUSTRIA E COMERCIO DE MAQUINAS E EQUIPAMENTOS LTDA - EDERMAK",
        -500,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "MARRI CONSULTORIA EMPRESARIAL LTDA",
        -2431.5,
        "A_PAGAR"
      ],
      [
        "24/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -8418.68,
        "A_PAGAR"
      ],
      [
        "24/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -7646.21,
        "A_PAGAR"
      ],
      [
        "23/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "LEADPAK SOLUCOES DE FORNECIMENTO LTDA",
        -1596.93,
        "A_PAGAR"
      ],
      [
        "22/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "22/07/2026",
        "Operações",
        "Compra de insumos para expedição",
        "PRIME BOX EMBALAGENS PAPELAO LTDA",
        -81.66,
        "A_PAGAR"
      ],
      [
        "21/07/2026",
        "Despesas com serviços",
        "Despesas com frete para devolução e reenvio",
        "EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS",
        -500,
        "A_PAGAR"
      ],
      [
        "21/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA",
        -888.91,
        "A_PAGAR"
      ],
      [
        "21/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA",
        -3598.9,
        "A_PAGAR"
      ],
      [
        "21/07/2026",
        "Marketing e publicidade",
        "Despesas com ADS",
        "SHOPEE",
        -2000,
        "A_PAGAR"
      ],
      [
        "21/07/2026",
        "Marketing e publicidade",
        "Despesas com ADS",
        "SHOPEE",
        -4000,
        "A_PAGAR"
      ],
      [
        "21/07/2026",
        "Marketing e publicidade",
        "Despesas com ADS",
        "SHOPEE",
        -500,
        "A_PAGAR"
      ],
      [
        "21/07/2026",
        "Marketing e publicidade",
        "Despesas com ADS",
        "BR TIKTOK SHOP BRASIL LTDA",
        -630,
        "A_PAGAR"
      ],
      [
        "21/07/2026",
        "Marketing e publicidade",
        "Despesas com ADS",
        "BR TIKTOK SHOP BRASIL LTDA",
        -1500,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Marketing e publicidade",
        "Serviços contratados para marketing",
        "JOSE AMARAL DE ALMEIDA - DESIGNER",
        -700,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "SMART PRODUTOS QUIMICOS LTDA",
        -6227.36,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Operações",
        "Impostos sobre receita",
        "SIMPLES NACIONAL",
        -17014.29,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Despesas operacionais",
        "Luz, água e outros",
        "ELEKTRO REDES S.A.",
        -370,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "CAIXA ECONOMICA FEDERAL",
        -496.71,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Despesas com colaboradores",
        "Salários e encargos",
        "CAIXA ECONOMICA FEDERAL",
        -1171.55,
        "A_PAGAR"
      ],
      [
        "19/07/2026",
        "Operações",
        "Compra de insumos para expedição",
        "PRIME BOX EMBALAGENS PAPELAO LTDA",
        -2170,
        "A_PAGAR"
      ],
      [
        "18/07/2026",
        "Operações",
        "Manutenção predial e benfeitorias",
        "BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR",
        -496.9,
        "A_PAGAR"
      ],
      [
        "17/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -7646.2,
        "A_PAGAR"
      ],
      [
        "17/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA",
        -8418.68,
        "A_PAGAR"
      ],
      [
        "17/07/2026",
        "Operações",
        "Compra de mercadorias",
        "ENNATERRA AROMATIZADORES LTDA",
        -1900,
        "A_PAGAR"
      ],
      [
        "16/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "LEADPAK SOLUCOES DE FORNECIMENTO LTDA",
        -1596.93,
        "A_PAGAR"
      ],
      [
        "15/07/2026",
        "Operações",
        "Pagamento de empréstimo",
        "ORNATA DOMUS COMPANY LTDA",
        -3914.47,
        "A_PAGAR"
      ],
      [
        "15/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA",
        -8250,
        "A_PAGAR"
      ],
      [
        "15/07/2026",
        "Despesas com serviços",
        "Serviços de contabilidade",
        "DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA",
        -450,
        "A_PAGAR"
      ],
      [
        "15/07/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ESCOBAR & CORREA LTDA - ESCOSEG",
        -150,
        "A_PAGAR"
      ],
      [
        "15/07/2026",
        "Despesas com serviços",
        "Despesas com outros serviços contratados",
        "ORNATA DOMUS COMPANY LTDA",
        -5000,
        "A_PAGAR"
      ],
      [
        "14/07/2026",
        "Despesas administrativas",
        "Despesas com materiais de consumo",
        "TAMBASA - TECIDOS E ARMARINHOS MIGUEL BARTOLOMEU S/A",
        -183.12,
        "A_PAGAR"
      ],
      [
        "14/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA",
        -2125,
        "A_PAGAR"
      ],
      [
        "14/07/2026",
        "Operações",
        "Compra de matéria-prima",
        "ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA",
        -3598.9,
        "A_PAGAR"
      ]
    ],
    "KPIS": {
      "TOTAL_RECEITA": 2323209.84,
      "TOTAL_DESPESA": 1935873.23,
      "VALOR_LIQUIDO": 387336.60999999987,
      "MARGEM_LIQUIDA": 16.67247630115065,
      "VALOR_LIQ_SERIES": [
        7018.999999999971,
        37001.189999999944,
        31353.859999999957,
        -47407.31999999995,
        23525.02999999991,
        3535.2399999999907,
        52338.340000000055,
        139550.71999999997,
        151847.21,
        -3828.81,
        -3891.12,
        -3706.7299999999996
      ]
    },
    "RECEITA_DIA": [
      42479.28,
      83770.59000000001,
      63729.240000000005,
      183234.61000000002,
      69482.10999999999,
      79887.29000000001,
      54628.85,
      65617.85,
      84638.42,
      68063.48,
      80461.51000000001,
      57823.73999999999,
      70101.5,
      89815.68000000001,
      64527.130000000005,
      75630.62999999999,
      66923.35,
      100225.6,
      72252.70999999999,
      88653.89000000001,
      53997.91,
      91270.57,
      105408.97999999998,
      68205.47,
      59502.93,
      67961.41,
      84407.37,
      68255.55,
      55199.95,
      57701.649999999994,
      49350.59
    ],
    "DESPESA_DIA": [
      29016.83,
      51623.39999999999,
      51096.18000000001,
      85693.20999999999,
      81724.37,
      108843.93000000005,
      91029.06999999999,
      60662.65,
      29437.129999999997,
      140147.40999999997,
      56913.330000000016,
      83667.47000000004,
      33144.03,
      50720.19000000001,
      88974.65000000002,
      59149.72,
      61025.59,
      54034.780000000006,
      46860.43,
      183187.24999999994,
      47512.4,
      43179.450000000004,
      46998.19,
      71894.33,
      33206.27,
      48274.02,
      46781.32000000001,
      43809.719999999994,
      28272.12,
      60258.43,
      18735.36
    ],
    "SALDOS_MES": [
      7018.999999999971,
      44020.189999999915,
      75374.04999999987,
      27966.729999999923,
      51491.759999999835,
      55026.999999999825,
      107365.33999999988,
      246916.05999999985,
      398763.26999999984,
      394934.45999999985,
      391043.33999999985,
      387336.60999999987
    ],
    "FLUXO_RECEITA": [
      {
        "cat": "Repasse de vendas",
        "values": [
          121450.23,
          183772.18999999997,
          248883.53999999998,
          225809.06000000003,
          271802.60999999987,
          297312.18999999994,
          288200,
          283700,
          239900,
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
          6534,
          0,
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
          8270.2,
          215,
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
          0,
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
          -168455.94,
          -91793.19,
          -164860.64999999997,
          -128652.36000000002,
          -157133.02,
          -150283.46,
          -74763.67,
          -30977.36,
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
          -12364.23,
          -17985.11,
          -17194.729999999996,
          -17394.73,
          -17394.73,
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
          -7200,
          -8700,
          -5300,
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
          -17014.29,
          -17014.29,
          -17014.29,
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
          -3914.47,
          -4037.57,
          -3788.67,
          -3803.82,
          -3866.13,
          -3681.74
        ]
      }
    ],
    "COMP_DATA": [
      {
        "tipo": "Receita",
        "isHeader": true,
        "d1": 684855.6100000001,
        "d2": 826339.2300000004
      },
      {
        "tipo": "Rendimento de investimentos",
        "parent": "Receita",
        "d1": 1065.68,
        "d2": 741.9100000000001
      },
      {
        "tipo": "Repasse de vendas",
        "parent": "Receita",
        "d1": 554105.9599999998,
        "d2": 794923.8600000005
      },
      {
        "tipo": "Receita com vendas",
        "parent": "Receita",
        "d1": 8079.6500000000015,
        "d2": 15564.480000000001
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
        "d2": 14987.740000000002
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
        "d2": -846686.2799999999
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
        "d2": -9542.519999999999
      },
      {
        "tipo": "Compra de matéria-prima",
        "parent": "Despesa",
        "d1": -319469.98000000004,
        "d2": -450646.0299999998
      },
      {
        "tipo": "Luz, água e outros",
        "parent": "Despesa",
        "d1": -1838.05,
        "d2": -1824.75
      },
      {
        "tipo": "Despesas com frete para compra de materiais",
        "parent": "Despesa",
        "d1": -15243.180000000002,
        "d2": -20219.129999999997
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
        "d2": -7038.219999999998
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
        "d2": -21270.05
      },
      {
        "tipo": "Despesas com outros serviços contratados",
        "parent": "Despesa",
        "d1": -14200.029999999999,
        "d2": -34698.56
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
        "d2": -43548.4
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
        "d2": -13081.73
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
        "d2": -235
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
const ALL_TX = [["r","2025-01",3,"Obtenção de empréstimo","ORNATA DOMUS COMPANY LTDA",10000,1,"","","not_vel_aroma","c","financiamento"],["r","2025-01",3,"Repasse de vendas","SHOPEE",3427.04,1,"","","not_vel_aroma","c","receita"],["r","2025-01",6,"Repasse de vendas","SHOPEE",43.06,1,"","","not_vel_aroma","c","receita"],["r","2025-01",7,"Repasse de vendas","SHOPEE",142.75,1,"","","not_vel_aroma","c","receita"],["r","2025-01",8,"Repasse de vendas","SHOPEE",184.84,1,"","","not_vel_aroma","c","receita"],["r","2025-01",9,"Repasse de vendas","SHOPEE",131.68,1,"","","not_vel_aroma","c","receita"],["r","2025-01",10,"Repasse de vendas","SHOPEE",57.61,1,"","","not_vel_aroma","c","receita"],["r","2025-01",13,"Repasse de vendas","SHOPEE",91.66,1,"","","not_vel_aroma","c","receita"],["r","2025-01",13,"Repasse de vendas","SHOPEE",367.15,1,"","","not_vel_aroma","c","receita"],["r","2025-01",14,"Repasse de vendas","SHOPEE",246.46,1,"","","not_vel_aroma","c","receita"],["r","2025-01",15,"Repasse de vendas","SHOPEE",174.27,1,"","","not_vel_aroma","c","receita"],["r","2025-01",16,"Repasse de vendas","SHOPEE",225.58,1,"","","not_vel_aroma","c","receita"],["r","2025-01",17,"Receita com vendas","ORNATA DOMUS COMPANY LTDA",1514.5,1,"","","not_vel_aroma","c","receita"],["r","2025-01",18,"Obtenção de empréstimo","ORNATA DOMUS COMPANY LTDA",10000,1,"","","not_vel_aroma","c","financiamento"],["r","2025-01",17,"Repasse de vendas","SHOPEE",321.67,1,"","","not_vel_aroma","c","receita"],["r","2025-01",20,"Repasse de vendas","SHOPEE",475.91,1,"","","not_vel_aroma","c","receita"],["r","2025-01",21,"Repasse de vendas","SHOPEE",308.06,1,"","","not_vel_aroma","c","receita"],["r","2025-01",22,"Repasse de vendas","SHOPEE",515.97,1,"","","not_vel_aroma","c","receita"],["r","2025-01",23,"Repasse de vendas","SHOPEE",172.19,1,"","","not_vel_aroma","c","receita"],["r","2025-01",24,"Repasse de vendas","SHOPEE",332.03,1,"","","not_vel_aroma","c","receita"],["r","2025-01",27,"Repasse de vendas","SHOPEE",595.05,1,"","","not_vel_aroma","c","receita"],["r","2025-01",28,"Repasse de vendas","SHOPEE",243.27,1,"","","not_vel_aroma","c","receita"],["r","2025-01",29,"Repasse de vendas","SHOPEE",497.03,1,"","","not_vel_aroma","c","receita"],["r","2025-01",29,"Repasse de vendas","VENDA FÍSICA",22.9,1,"","","not_vel_aroma","c","receita"],["r","2025-01",30,"Repasse de vendas","SHOPEE",759.3,1,"","","not_vel_aroma","c","receita"],["r","2025-01",31,"Rendimento de investimentos","INTER DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA",2.11,1,"","","not_vel_aroma","c","investimento"],["r","2025-01",31,"Repasse de vendas","SHOPEE",355.56,1,"","","not_vel_aroma","c","receita"],["r","2025-02",3,"Repasse de vendas","SHOPEE",826.67,1,"","","not_vel_aroma","c","receita"],["r","2025-02",4,"Receita com vendas","VENDA FÍSICA",28,1,"","","not_vel_aroma","c","receita"],["r","2025-02",4,"Repasse de vendas","SHOPEE",571.59,1,"","","not_vel_aroma","c","receita"],["r","2025-02",5,"Repasse de vendas","SHOPEE",458.71,1,"","","not_vel_aroma","c","receita"],["r","2025-02",6,"Repasse de vendas","SHOPEE",357.04,1,"","","not_vel_aroma","c","receita"],["r","2025-02",7,"Repasse de vendas","SHOPEE",263.66,1,"","","not_vel_aroma","c","receita"],["r","2025-02",10,"Receita com vendas","VENDA FÍSICA",20,1,"","","not_vel_aroma","c","receita"],["r","2025-02",11,"Repasse de vendas","SHOPEE",737.69,1,"","","not_vel_aroma","c","receita"],["r","2025-02",12,"Repasse de vendas","SHOPEE",2010.25,1,"","","not_vel_aroma","c","receita"],["r","2025-02",13,"Repasse de vendas","SHOPEE",519.44,1,"","","not_vel_aroma","c","receita"],["r","2025-02",14,"Repasse de vendas","SHOPEE",713.79,1,"","","not_vel_aroma","c","receita"],["r","2025-02",17,"Repasse de vendas","SHOPEE",1980.82,1,"","","not_vel_aroma","c","receita"],["r","2025-02",18,"Outras receitas","NOTAVEL AROMA COSMETICOS LTDA",184.11,1,"","","not_vel_aroma","c","receita"],["r","2025-02",18,"Repasse de vendas","SHOPEE",1027.07,1,"","","not_vel_aroma","c","receita"],["r","2025-02",19,"Receita com vendas","S C SEVERO COMERCIO DE DECORACAO E PRESENTES",2456.31,1,"","","not_vel_aroma","c","receita"],["r","2025-02",19,"Repasse de vendas","SHOPEE",885.13,1,"","","not_vel_aroma","c","receita"],["r","2025-02",20,"Receita com vendas","VENDA FÍSICA",25,1,"","","not_vel_aroma","c","receita"],["r","2025-02",20,"Repasse de vendas","SHOPEE",662.31,1,"","","not_vel_aroma","c","receita"],["r","2025-02",21,"Receita com vendas","VENDA FÍSICA",28,1,"","","not_vel_aroma","c","receita"],["r","2025-02",21,"Receita com vendas","VENDA FÍSICA",56,1,"","","not_vel_aroma","c","receita"],["r","2025-02",21,"Repasse de vendas","SHOPEE",458.09,1,"","","not_vel_aroma","c","receita"],["r","2025-02",24,"Receita com vendas","VENDA FÍSICA",34.9,1,"","","not_vel_aroma","c","receita"],["r","2025-02",24,"Receita com vendas","VENDA FÍSICA",25,1,"","","not_vel_aroma","c","receita"],["r","2025-02",24,"Repasse de vendas","SHOPEE",1914.67,1,"","","not_vel_aroma","c","receita"],["r","2025-02",25,"Repasse de vendas","SHOPEE",1226.33,1,"","","not_vel_aroma","c","receita"],["r","2025-02",26,"Receita com vendas","VENDA FÍSICA",40.72,1,"","","not_vel_aroma","c","receita"],["r","2025-02",26,"Receita com vendas","VENDA FÍSICA",32.6,1,"","","not_vel_aroma","c","receita"],["r","2025-02",26,"Repasse de vendas","SHOPEE",1064.78,1,"","","not_vel_aroma","c","receita"],["r","2025-02",27,"Repasse de vendas","SHOPEE",936.46,1,"","","not_vel_aroma","c","receita"],["r","2025-02",28,"Repasse de vendas","SHOPEE",749.57,1,"","","not_vel_aroma","c","receita"],["r","2025-03",1,"Rendimento de investimentos","INTER DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA",21.19,1,"","","not_vel_aroma","c","investimento"],["r","2025-03",3,"Receita com vendas","VENDA FÍSICA",68.64,1,"","","not_vel_aroma","c","receita"],["r","2025-03",4,"Receita com vendas","VENDA FÍSICA",81.8,1,"","","not_vel_aroma","c","receita"],["r","2025-03",5,"Repasse de vendas","SHOPEE",1849.41,1,"","","not_vel_aroma","c","receita"],["r","2025-03",5,"Repasse de vendas","SHOPEE",1540.14,1,"","","not_vel_aroma","c","receita"],["r","2025-03",6,"Repasse de vendas","SHOPEE",893.7,1,"","","not_vel_aroma","c","receita"],["r","2025-03",7,"Repasse de vendas","SHOPEE",981.9,1,"","","not_vel_aroma","c","receita"],["r","2025-03",10,"Repasse de vendas","SHOPEE",1576.09,1,"","","not_vel_aroma","c","receita"],["r","2025-03",11,"Receita com vendas","VENDA FÍSICA",19.23,1,"","","not_vel_aroma","c","receita"],["r","2025-03",11,"Repasse de vendas","SHOPEE",1218.81,1,"","","not_vel_aroma","c","receita"],["r","2025-03",12,"Repasse de vendas","SHOPEE",1109.72,1,"","","not_vel_aroma","c","receita"],["r","2025-03",13,"Receita com vendas","VENDA FÍSICA",23.7,1,"","","not_vel_aroma","c","receita"],["r","2025-03",13,"Repasse de vendas","SHOPEE",1043.46,1,"","","not_vel_aroma","c","receita"],["r","2025-03",14,"Repasse de vendas","SHOPEE",816.2,1,"","","not_vel_aroma","c","receita"],["r","2025-03",17,"Repasse de vendas","SHOPEE",1803.37,1,"","","not_vel_aroma","c","receita"],["r","2025-03",18,"Repasse de vendas","SHOPEE",1204.9,1,"","","not_vel_aroma","c","receita"],["r","2025-03",19,"Repasse de vendas","SHOPEE",1413.3,1,"","","not_vel_aroma","c","receita"],["r","2025-03",20,"Receita com vendas","VENDA FÍSICA",17.9,1,"","","not_vel_aroma","c","receita"],["r","2025-03",20,"Receita com vendas","VENDA FÍSICA",21.9,1,"","","not_vel_aroma","c","receita"],["r","2025-03",20,"Repasse de vendas","SHOPEE",1049.15,1,"","","not_vel_aroma","c","receita"],["r","2025-03",21,"Repasse de vendas","SHOPEE",920.8,1,"","","not_vel_aroma","c","receita"],["r","2025-03",24,"Repasse de vendas","SHOPEE",2572.6,1,"","","not_vel_aroma","c","receita"],["r","2025-03",25,"Receita com vendas","OUTSIDE THE BOX LTDA",25.1,1,"","","not_vel_aroma","c","receita"],["r","2025-03",25,"Repasse de vendas","SHOPEE",1150.91,1,"","","not_vel_aroma","c","receita"],["r","2025-03",26,"Repasse de vendas","SHOPEE",1502.1,1,"","","not_vel_aroma","c","receita"],["r","2025-03",26,"Repasse de vendas","MERCADO LIVRE",423.63,1,"","","not_vel_aroma","c","receita"],["r","2025-03",27,"Receita com vendas","VENDA FÍSICA",9.9,1,"","","not_vel_aroma","c","receita"],["r","2025-03",27,"Repasse de vendas","SHOPEE",1074.1,1,"","","not_vel_aroma","c","receita"],["r","2025-03",28,"Repasse de vendas","SHOPEE",954.56,1,"","","not_vel_aroma","c","receita"],["r","2025-03",31,"Repasse de vendas","SHOPEE",2262.74,1,"","","not_vel_aroma","c","receita"],["r","2025-04",1,"Repasse de vendas","SHOPEE",1339.84,1,"","","not_vel_aroma","c","receita"],["r","2025-04",2,"Rendimento de investimentos","INTER DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA",33.28,1,"","","not_vel_aroma","c","investimento"],["r","2025-04",2,"Repasse de vendas","SHOPEE",965.69,1,"","","not_vel_aroma","c","receita"],["r","2025-04",3,"Repasse de vendas","SHOPEE",787.87,1,"","","not_vel_aroma","c","receita"],["r","2025-04",4,"Repasse de vendas","SHOPEE",1130.76,1,"","","not_vel_aroma","c","receita"],["r","2025-04",7,"Repasse de vendas","SHOPEE",2150.22,1,"","","not_vel_aroma","c","receita"],["r","2025-04",8,"Repasse de vendas","SHOPEE",1260.47,1,"","","not_vel_aroma","c","receita"],["r","2025-04",9,"Repasse de vendas","SHOPEE",1685.82,1,"","","not_vel_aroma","c","receita"],["r","2025-04",9,"Repasse de vendas","SHEIN",0.01,1,"","","not_vel_aroma","c","receita"],["r","2025-04",10,"Receita com vendas","VENDA FÍSICA",25.9,1,"","","not_vel_aroma","c","receita"],["r","2025-04",10,"Repasse de vendas","SHOPEE",1047.93,1,"","","not_vel_aroma","c","receita"],["r","2025-04",11,"Repasse de vendas","SHOPEE",880.06,1,"","","not_vel_aroma","c","receita"],["r","2025-04",10,"Rendimento de investimentos","INTER DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA",2.5,1,"","","not_vel_aroma","c","investimento"],["r","2025-04",14,"Repasse de vendas","SHOPEE",3244.7,1,"","","not_vel_aroma","c","receita"],["r","2025-04",15,"Receita com vendas","VENDA FÍSICA",25.96,1,"","","not_vel_aroma","c","receita"],["r","2025-04",15,"Receita com vendas","VENDA FÍSICA",57.7,1,"","","not_vel_aroma","c","receita"],["r","2025-04",15,"Repasse de vendas","SHOPEE",1044.08,1,"","","not_vel_aroma","c","receita"],["r","2025-04",16,"Repasse de vendas","SHOPEE",1750.61,1,"","","not_vel_aroma","c","receita"],["r","2025-04",17,"Repasse de vendas","SHOPEE",1095.8,1,"","","not_vel_aroma","c","receita"],["r","2025-04",22,"Receita com vendas","VENDA FÍSICA",25.9,1,"","","not_vel_aroma","c","receita"],["r","2025-04",22,"Repasse de vendas","MERCADO LIVRE",187.2,1,"","","not_vel_aroma","c","receita"],["r","2025-04",22,"Repasse de vendas","SHOPEE",4475.53,1,"","","not_vel_aroma","c","receita"],["r","2025-04",23,"Repasse de vendas","SHOPEE",1476.25,1,"","","not_vel_aroma","c","receita"],["r","2025-04",24,"Receita com vendas","VENDA FÍSICA",67.6,1,"","","not_vel_aroma","c","receita"],["r","2025-04",24,"Repasse de vendas","SHOPEE",1108.72,1,"","","not_vel_aroma","c","receita"],["r","2025-04",25,"Receita com vendas","VENDA FÍSICA",15,1,"","","not_vel_aroma","c","receita"],["r","2025-04",25,"Repasse de vendas","SHOPEE",1177.56,1,"","","not_vel_aroma","c","receita"],["r","2025-04",28,"Repasse de vendas","SHOPEE",2142.35,1,"","","not_vel_aroma","c","receita"],["r","2025-04",29,"Receita com vendas","VENDA FÍSICA",139.2,1,"","","not_vel_aroma","c","receita"],["r","2025-04",29,"Repasse de vendas","SHOPEE",906.37,1,"","","not_vel_aroma","c","receita"],["r","2025-04",30,"Receita com vendas","GUILHERME TORCHETTI LOUREIRO DA SILVA",92.5,1,"","","not_vel_aroma","c","receita"],["r","2025-04",30,"Receita com vendas","JONATHAN ROQUE DE SOUZA",15.9,1,"","","not_vel_aroma","c","receita"],["r","2025-04",24,"Receita com vendas","ORNATA DOMUS COMPANY LTDA",1232,1,"","","not_vel_aroma","c","receita"],["r","2025-04",30,"Repasse de vendas","SHOPEE",1149.38,1,"","","not_vel_aroma","c","receita"],["r","2025-05",2,"Repasse de vendas","SHOPEE",1048.65,1,"","","not_vel_aroma","c","receita"],["r","2025-05",5,"Rendimento de investimentos","INTER DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA",28.42,1,"","","not_vel_aroma","c","investimento"],["r","2025-05",5,"Repasse de vendas","SHOPEE",2742.58,1,"","","not_vel_aroma","c","receita"],["r","2025-05",5,"Repasse de vendas","MERCADO LIVRE",113.4,1,"","","not_vel_aroma","c","receita"],["r","2025-05",6,"Repasse de vendas","SHOPEE",978.56,1,"","","not_vel_aroma","c","receita"],["r","2025-05",7,"Obtenção de empréstimo","ORNATA DOMUS COMPANY LTDA",10000,1,"","","not_vel_aroma","c","financiamento"],["r","2025-05",7,"Repasse de vendas","SHOPEE",1073.18,1,"","","not_vel_aroma","c","receita"],["r","2025-05",8,"Receita com vendas","VENDA FÍSICA",51.7,1,"","","not_vel_aroma","c","receita"],["r","2025-05",8,"Receita com vendas","VENDA FÍSICA",21.9,1,"","","not_vel_aroma","c","receita"],["r","2025-05",8,"Repasse de vendas","SHOPEE",1092.79,1,"","","not_vel_aroma","c","receita"],["r","2025-05",9,"Repasse de vendas","SHOPEE",744.56,1,"","","not_vel_aroma","c","receita"],["r","2025-05",12,"Receita com vendas","VENDA FÍSICA",33.8,1,"","","not_vel_aroma","c","receita"],["r","2025-05",12,"Receita com vendas","VENDA FÍSICA",408,1,"","","not_vel_aroma","c","receita"],["r","2025-05",12,"Outras receitas","LEADPAK SOLUCOES DE FORNECIMENTO LTDA",798.87,1,"","","not_vel_aroma","c","receita"],["r","2025-05",12,"Repasse de vendas","SHOPEE",3381.3,1,"","","not_vel_aroma","c","receita"],["r","2025-05",13,"Repasse de vendas","SHOPEE",1358.39,1,"","","not_vel_aroma","c","receita"],["r","2025-05",14,"Receita com vendas","VENDA FÍSICA",29.9,1,"","","not_vel_aroma","c","receita"],["r","2025-05",14,"Repasse de vendas","SHOPEE",1160.9,1,"","","not_vel_aroma","c","receita"],["r","2025-05",15,"Repasse de vendas","SHOPEE",1107.2,1,"","","not_vel_aroma","c","receita"],["r","2025-05",16,"Repasse de vendas","SHOPEE",1416.53,1,"","","not_vel_aroma","c","receita"],["r","2025-05",19,"Repasse de vendas","SHOPEE",3137.97,1,"","","not_vel_aroma","c","receita"],["r","2025-05",19,"Repasse de vendas","SHEIN",31.82,1,"","","not_vel_aroma","c","receita"],["r","2025-05",20,"Repasse de vendas","SHOPEE",1286.52,1,"","","not_vel_aroma","c","receita"],["r","2025-05",21,"Repasse de vendas","SHOPEE",1430.96,1,"","","not_vel_aroma","c","receita"],["r","2025-05",22,"Repasse de vendas","SHOPEE",1291.17,1,"","","not_vel_aroma","c","receita"],["r","2025-05",23,"Outras receitas","AMAZON",600,1,"","","not_vel_aroma","c","receita"],["r","2025-05",23,"Repasse de vendas","SHOPEE",1151.75,1,"","","not_vel_aroma","c","receita"],["r","2025-05",23,"Repasse de vendas","MERCADO LIVRE",92.06,1,"","","not_vel_aroma","c","receita"],["r","2025-05",26,"Repasse de vendas","SHEIN",147.22,1,"","","not_vel_aroma","c","receita"],["r","2025-05",26,"Repasse de vendas","SHOPEE",2564.6,1,"","","not_vel_aroma","c","receita"],["r","2025-05",27,"Receita com vendas","VENDA FÍSICA",25.96,1,"","","not_vel_aroma","c","receita"],["r","2025-05",27,"Repasse de vendas","SHOPEE",960.5,1,"","","not_vel_aroma","c","receita"],["r","2025-05",28,"Repasse de vendas","SHOPEE",878.51,1,"","","not_vel_aroma","c","receita"],["r","2025-05",29,"Repasse de vendas","SHOPEE",729.93,1,"","","not_vel_aroma","c","receita"],["r","2025-05",30,"Receita com vendas","JONATHAN ROQUE DE SOUZA",77.32,1,"","","not_vel_aroma","c","receita"],["r","2025-05",30,"Repasse de vendas","SHOPEE",1030.89,1,"","","not_vel_aroma","c","receita"],["r","2025-06",2,"Repasse de vendas","SHOPEE",2980.3,1,"","","not_vel_aroma","c","receita"],["r","2025-06",2,"Repasse de vendas","SHEIN",235.48,1,"","","not_vel_aroma","c","receita"],["r","2025-06",3,"Rendimento de investimentos","INTER DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA",57.04,1,"","","not_vel_aroma","c","investimento"],["r","2025-06",3,"Repasse de vendas","SHOPEE",795.05,1,"","","not_vel_aroma","c","receita"],["r","2025-06",4,"Repasse de vendas","SHOPEE",450.54,1,"","","not_vel_aroma","c","receita"],["r","2025-06",5,"Repasse de vendas","SHOPEE",528.25,1,"","","not_vel_aroma","c","receita"],["r","2025-06",6,"Receita com vendas","LUIZ ANTONIO RONDINI VIEIRA",130.56,1,"","","not_vel_aroma","c","receita"],["r","2025-06",6,"Repasse de vendas","SHOPEE",619.33,1,"","","not_vel_aroma","c","receita"],["r","2025-06",9,"Repasse de vendas","SHEIN",799.08,1,"","","not_vel_aroma","c","receita"],["r","2025-06",9,"Repasse de vendas","SHOPEE",2194.54,1,"","","not_vel_aroma","c","receita"],["r","2025-06",10,"Receita com vendas","VENDA FÍSICA",68,1,"","","not_vel_aroma","c","receita"],["r","2025-06",10,"Repasse de vendas","SHOPEE",1004.26,1,"","","not_vel_aroma","c","receita"],["r","2025-06",11,"Repasse de vendas","SHOPEE",899.68,1,"","","not_vel_aroma","c","receita"],["r","2025-06",12,"Repasse de vendas","SHOPEE",757.03,1,"","","not_vel_aroma","c","receita"],["r","2025-06",13,"Repasse de vendas","SHOPEE",885.4,1,"","","not_vel_aroma","c","receita"],["r","2025-06",16,"Receita com vendas","VENDA FÍSICA",39.8,1,"","","not_vel_aroma","c","receita"],["r","2025-06",16,"Repasse de vendas","SHEIN",690.44,1,"","","not_vel_aroma","c","receita"],["r","2025-06",16,"Repasse de vendas","SHOPEE",1694.9,1,"","","not_vel_aroma","c","receita"],["r","2025-06",17,"Repasse de vendas","SHOPEE",493.33,1,"","","not_vel_aroma","c","receita"],["r","2025-06",18,"Repasse de vendas","SHOPEE",674.48,1,"","","not_vel_aroma","c","receita"],["r","2025-06",20,"Repasse de vendas","SHOPEE",1382.55,1,"","","not_vel_aroma","c","receita"],["r","2025-06",20,"Repasse de vendas","MERCADO LIVRE",44.24,1,"","","not_vel_aroma","c","receita"],["r","2025-06",23,"Receita com vendas","VENDA FÍSICA",254.2,1,"","","not_vel_aroma","c","receita"],["r","2025-06",23,"Receita com vendas","VENDA FÍSICA",25.96,1,"","","not_vel_aroma","c","receita"],["r","2025-06",23,"Rendimento de investimentos","INTER DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA",36.44,1,"","","not_vel_aroma","c","investimento"],["r","2025-06",23,"Repasse de vendas","SHOPEE",1919.98,1,"","","not_vel_aroma","c","receita"],["r","2025-06",23,"Repasse de vendas","SHEIN",909.4,1,"","","not_vel_aroma","c","receita"],["r","2025-06",24,"Repasse de vendas","SHOPEE",734.38,1,"","","not_vel_aroma","c","receita"],["r","2025-06",25,"Repasse de vendas","SHOPEE",329.93,1,"","","not_vel_aroma","c","receita"],["r","2025-06",26,"Repasse de vendas","SHOPEE",550.19,1,"","","not_vel_aroma","c","receita"],["r","2025-06",27,"Repasse de vendas","SHOPEE",592.7,1,"","","not_vel_aroma","c","receita"],["r","2025-06",30,"Repasse de vendas","SHEIN",883.56,1,"","","not_vel_aroma","c","receita"],["r","2025-06",30,"Repasse de vendas","SHOPEE",1123.16,1,"","","not_vel_aroma","c","receita"],["r","2025-07",1,"Repasse de vendas","SHOPEE",289.37,1,"","","not_vel_aroma","c","receita"],["r","2025-07",2,"Repasse de vendas","SHOPEE",755.17,1,"","","not_vel_aroma","c","receita"],["r","2025-07",3,"Receita com vendas","VENDA FÍSICA",129.8,1,"","","not_vel_aroma","c","receita"],["r","2025-07",3,"Repasse de vendas","SHOPEE",351.46,1,"","","not_vel_aroma","c","receita"],["r","2025-07",4,"Repasse de vendas","SHOPEE",507.76,1,"","","not_vel_aroma","c","receita"],["r","2025-07",4,"Repasse de vendas","MERCADO LIVRE",351.83,1,"","","not_vel_aroma","c","receita"],["r","2025-07",4,"Repasse de vendas","AMAZON",1240.23,1,"","","not_vel_aroma","c","receita"],["r","2025-07",3,"Receita com vendas","LUIZ ANTONIO RONDINI VIEIRA",169.68,1,"","","not_vel_aroma","c","receita"],["r","2025-07",7,"Repasse de vendas","SHOPEE",1315.77,1,"","","not_vel_aroma","c","receita"],["r","2025-07",7,"Repasse de vendas","SHEIN",1267.08,1,"","","not_vel_aroma","c","receita"],["r","2025-07",8,"Repasse de vendas","SHOPEE",602.94,1,"","","not_vel_aroma","c","receita"],["r","2025-07",10,"Repasse de vendas","SHOPEE",1377.37,1,"","","not_vel_aroma","c","receita"],["r","2025-07",11,"Repasse de vendas","SHOPEE",848.79,1,"","","not_vel_aroma","c","receita"],["r","2025-07",14,"Repasse de vendas","SHOPEE",1271.51,1,"","","not_vel_aroma","c","receita"],["r","2025-07",14,"Repasse de vendas","SHEIN",1730.52,1,"","","not_vel_aroma","c","receita"],["r","2025-07",15,"Repasse de vendas","SHOPEE",463.36,1,"","","not_vel_aroma","c","receita"],["r","2025-07",16,"Repasse de vendas","SHOPEE",450.17,1,"","","not_vel_aroma","c","receita"],["r","2025-07",17,"Receita com vendas","VENDA FÍSICA",13.9,1,"","","not_vel_aroma","c","receita"],["r","2025-07",17,"Receita com vendas","VENDA FÍSICA",57.7,1,"","","not_vel_aroma","c","receita"],["r","2025-07",17,"Repasse de vendas","SHOPEE",526.19,1,"","","not_vel_aroma","c","receita"],["r","2025-07",17,"Repasse de vendas","AMAZON",53.31,1,"","","not_vel_aroma","c","receita"],["r","2025-07",18,"Repasse de vendas","AMAZON",562.32,1,"","","not_vel_aroma","c","receita"],["r","2025-07",18,"Repasse de vendas","SHOPEE",930.31,1,"","","not_vel_aroma","c","receita"],["r","2025-07",21,"Repasse de vendas","SHOPEE",1330.79,1,"","","not_vel_aroma","c","receita"],["r","2025-07",21,"Repasse de vendas","SHEIN",2276.28,1,"","","not_vel_aroma","c","receita"],["r","2025-07",22,"Repasse de vendas","SHOPEE",566.25,1,"","","not_vel_aroma","c","receita"],["r","2025-07",23,"Repasse de vendas","SHOPEE",431.91,1,"","","not_vel_aroma","c","receita"],["r","2025-07",24,"Repasse de vendas","SHOPEE",435.97,1,"","","not_vel_aroma","c","receita"],["r","2025-07",25,"Receita com vendas","VENDA FÍSICA",100,1,"","","not_vel_aroma","c","receita"],["r","2025-07",25,"Receita com vendas","VENDA FÍSICA",20,1,"","","not_vel_aroma","c","receita"],["r","2025-07",25,"Repasse de vendas","SHOPEE",764.23,1,"","","not_vel_aroma","c","receita"],["r","2025-07",25,"Repasse de vendas","MERCADO LIVRE",224.81,1,"","","not_vel_aroma","c","receita"],["r","2025-07",28,"Repasse de vendas","SHEIN",2516.4,1,"","","not_vel_aroma","c","receita"],["r","2025-07",28,"Repasse de vendas","SHOPEE",1434.98,1,"","","not_vel_aroma","c","receita"],["r","2025-07",29,"Receita com vendas","VENDA FÍSICA",23.92,1,"","","not_vel_aroma","c","receita"],["r","2025-07",29,"Repasse de vendas","SHOPEE",454.37,1,"","","not_vel_aroma","c","receita"],["r","2025-07",31,"Receita com vendas","VENDA FÍSICA",20,1,"","","not_vel_aroma","c","receita"],["r","2025-07",31,"Repasse de vendas","SHOPEE",973.92,1,"","","not_vel_aroma","c","receita"],["r","2025-08",1,"Repasse de vendas","SHOPEE",746.54,1,"","","not_vel_aroma","c","receita"],["r","2025-08",1,"Repasse de vendas","AMAZON",476.92,1,"","","not_vel_aroma","c","receita"],["r","2025-08",4,"Repasse de vendas","SHOPEE",1052.33,1,"","","not_vel_aroma","c","receita"],["r","2025-08",4,"Repasse de vendas","SHEIN",2596.51,1,"","","not_vel_aroma","c","receita"],["r","2025-08",5,"Repasse de vendas","SHOPEE",477.41,1,"","","not_vel_aroma","c","receita"],["r","2025-08",6,"Receita com vendas","VENDA FÍSICA",13.9,1,"","","not_vel_aroma","c","receita"],["r","2025-08",6,"Receita com vendas","VENDA FÍSICA",68.6,1,"","","not_vel_aroma","c","receita"],["r","2025-08",6,"Repasse de vendas","SHOPEE",426.47,1,"","","not_vel_aroma","c","receita"],["r","2025-08",7,"Repasse de vendas","SHOPEE",686.64,1,"","","not_vel_aroma","c","receita"],["r","2025-08",8,"Repasse de vendas","SHOPEE",891,1,"","","not_vel_aroma","c","receita"],["r","2025-08",8,"Repasse de vendas","MERCADO LIVRE",95.88,1,"","","not_vel_aroma","c","receita"],["r","2025-08",11,"Repasse de vendas","SHOPEE",1322.25,1,"","","not_vel_aroma","c","receita"],["r","2025-08",11,"Repasse de vendas","SHEIN",2896.08,1,"","","not_vel_aroma","c","receita"],["r","2025-08",12,"Receita com vendas","VENDA FÍSICA",241,1,"","","not_vel_aroma","c","receita"],["r","2025-08",12,"Repasse de vendas","SHOPEE",401.27,1,"","","not_vel_aroma","c","receita"],["r","2025-08",13,"Repasse de vendas","SHOPEE",356.66,1,"","","not_vel_aroma","c","receita"],["r","2025-08",14,"Repasse de vendas","AMAZON",53.31,1,"","","not_vel_aroma","c","receita"],["r","2025-08",14,"Repasse de vendas","SHOPEE",284.41,1,"","","not_vel_aroma","c","receita"],["r","2025-08",15,"Repasse de vendas","SHOPEE",631.17,1,"","","not_vel_aroma","c","receita"],["r","2025-08",15,"Repasse de vendas","AMAZON",181.88,1,"","","not_vel_aroma","c","receita"],["r","2025-08",18,"Repasse de vendas","SHOPEE",2044.3,1,"","","not_vel_aroma","c","receita"],["r","2025-08",18,"Repasse de vendas","SHEIN",2419.26,1,"","","not_vel_aroma","c","receita"],["r","2025-08",19,"Repasse de vendas","SHOPEE",858.3,1,"","","not_vel_aroma","c","receita"],["r","2025-08",20,"Repasse de vendas","SHOPEE",853.6,1,"","","not_vel_aroma","c","receita"],["r","2025-08",21,"Repasse de vendas","SHEIN",0.01,1,"","","not_vel_aroma","c","receita"],["r","2025-08",21,"Repasse de vendas","SHOPEE",676.57,1,"","","not_vel_aroma","c","receita"],["r","2025-08",22,"Repasse de vendas","SHOPEE",1115.4,1,"","","not_vel_aroma","c","receita"],["r","2025-08",25,"Receita com vendas","VENDA FÍSICA",80,1,"","","not_vel_aroma","c","receita"],["r","2025-08",25,"Repasse de vendas","SHOPEE",2388.27,1,"","","not_vel_aroma","c","receita"],["r","2025-08",25,"Repasse de vendas","SHEIN",1948.91,1,"","","not_vel_aroma","c","receita"],["r","2025-08",26,"Receita com vendas","VENDA FÍSICA",43.92,1,"","","not_vel_aroma","c","receita"],["r","2025-08",26,"Receita com vendas","ORNATA DOMUS COMPANY LTDA",905.34,1,"","","not_vel_aroma","c","receita"],["r","2025-08",26,"Repasse de vendas","SHOPEE",1049.26,1,"","","not_vel_aroma","c","receita"],["r","2025-08",27,"Repasse de vendas","SHOPEE",1027.48,1,"","","not_vel_aroma","c","receita"],["r","2025-08",28,"Repasse de vendas","SHOPEE",835.18,1,"","","not_vel_aroma","c","receita"],["r","2025-08",28,"Repasse de vendas","AMAZON",603.83,1,"","","not_vel_aroma","c","receita"],["r","2025-08",29,"Repasse de vendas","AMAZON",605.19,1,"","","not_vel_aroma","c","receita"],["r","2025-08",29,"Repasse de vendas","AMAZON",580.21,1,"","","not_vel_aroma","c","receita"],["r","2025-08",29,"Repasse de vendas","AMAZON",154.94,1,"","","not_vel_aroma","c","receita"],["r","2025-08",29,"Repasse de vendas","SHOPEE",1163.52,1,"","","not_vel_aroma","c","receita"],["r","2025-08",31,"Receita com vendas","ORNATA DOMUS COMPANY LTDA",1186.86,1,"","","not_vel_aroma","c","receita"],["r","2025-08",31,"Rendimento de investimentos","MERCADO PAGO",39,1,"","","not_vel_aroma","c","investimento"],["r","2025-08",31,"Repasse de vendas","MERCADO LIVRE",35.71,1,"","","not_vel_aroma","c","receita"],["r","2025-09",1,"Repasse de vendas","SHEIN",2492.05,1,"","","not_vel_aroma","c","receita"],["r","2025-09",1,"Repasse de vendas","SHOPEE",3053.48,1,"","","not_vel_aroma","c","receita"],["r","2025-09",2,"Repasse de vendas","SHOPEE",1045.79,1,"","","not_vel_aroma","c","receita"],["r","2025-09",3,"Repasse de vendas","SHOPEE",978.5,1,"","","not_vel_aroma","c","receita"],["r","2025-09",4,"Outras receitas","MERCADO LIVRE",28.85,1,"","","not_vel_aroma","c","receita"],["r","2025-09",4,"Repasse de vendas","SHOPEE",699.15,1,"","","not_vel_aroma","c","receita"],["r","2025-09",5,"Receita com vendas","VENDA FÍSICA",24,1,"","","not_vel_aroma","c","receita"],["r","2025-09",5,"Repasse de vendas","SHOPEE",1289.88,1,"","","not_vel_aroma","c","receita"],["r","2025-09",8,"Repasse de vendas","SHEIN",2800.37,1,"","","not_vel_aroma","c","receita"],["r","2025-09",8,"Repasse de vendas","SHOPEE",2796.36,1,"","","not_vel_aroma","c","receita"],["r","2025-09",9,"Receita com vendas","VENDA FÍSICA",81,1,"","","not_vel_aroma","c","receita"],["r","2025-09",9,"Repasse de vendas","SHOPEE",1320.97,1,"","","not_vel_aroma","c","receita"],["r","2025-09",10,"Repasse de vendas","SHOPEE",989.21,1,"","","not_vel_aroma","c","receita"],["r","2025-09",11,"Repasse de vendas","AMAZON",263.7,1,"","","not_vel_aroma","c","receita"],["r","2025-09",11,"Repasse de vendas","SHOPEE",737.66,1,"","","not_vel_aroma","c","receita"],["r","2025-09",12,"Receita por troca/adição de produtos em pedido","Receita por troca/adição de produtos em pedido",76.33,1,"","","not_vel_aroma","c","receita"],["r","2025-09",12,"Repasse de vendas","AMAZON",739.97,1,"","","not_vel_aroma","c","receita"],["r","2025-09",12,"Repasse de vendas","AMAZON",609.43,1,"","","not_vel_aroma","c","receita"],["r","2025-09",12,"Repasse de vendas","SHOPEE",1061.85,1,"","","not_vel_aroma","c","receita"],["r","2025-09",12,"Repasse de vendas","AMAZON",46.84,1,"","","not_vel_aroma","c","receita"],["r","2025-09",16,"Receita com vendas","LUIZ ANTONIO RONDINI VIEIRA",22.8,1,"","","not_vel_aroma","c","receita"],["r","2025-09",15,"Receita com vendas","ORNATA DOMUS COMPANY LTDA",1142.57,1,"","","not_vel_aroma","c","receita"],["r","2025-09",15,"Repasse de vendas","SHEIN",2957.63,1,"","","not_vel_aroma","c","receita"],["r","2025-09",15,"Repasse de vendas","SHOPEE",3519.43,1,"","","not_vel_aroma","c","receita"],["r","2025-09",16,"Receita com vendas","MARIA LAURA DE MELLO LINO",58,1,"","","not_vel_aroma","c","receita"],["r","2025-09",16,"Repasse de vendas","SHOPEE",1648.84,1,"","","not_vel_aroma","c","receita"],["r","2025-09",17,"Repasse de vendas","SHOPEE",1691.1,1,"","","not_vel_aroma","c","receita"],["r","2025-09",18,"Repasse de vendas","SHOPEE",1273.52,1,"","","not_vel_aroma","c","receita"],["r","2025-09",19,"Repasse de vendas","SHOPEE",1563.88,1,"","","not_vel_aroma","c","receita"],["r","2025-09",22,"Repasse de vendas","SHEIN",2634.69,1,"","","not_vel_aroma","c","receita"],["r","2025-09",22,"Repasse de vendas","SHOPEE",2806.77,1,"","","not_vel_aroma","c","receita"],["r","2025-09",23,"Repasse de vendas","SHOPEE",1510.49,1,"","","not_vel_aroma","c","receita"],["r","2025-09",24,"Repasse de vendas","SHOPEE",1283.53,1,"","","not_vel_aroma","c","receita"],["r","2025-09",25,"Repasse de vendas","SHOPEE",1548.9,1,"","","not_vel_aroma","c","receita"],["r","2025-09",25,"Repasse de vendas","AMAZON",215.77,1,"","","not_vel_aroma","c","receita"],["r","2025-09",26,"Receita com vendas","VENDA FÍSICA",41.74,1,"","","not_vel_aroma","c","receita"],["r","2025-09",26,"Receita com vendas","VENDA FÍSICA",20,1,"","","not_vel_aroma","c","receita"],["r","2025-09",26,"Repasse de vendas","MERCADO LIVRE",400,1,"","","not_vel_aroma","c","receita"],["r","2025-09",26,"Repasse de vendas","AMAZON",56.31,1,"","","not_vel_aroma","c","receita"],["r","2025-09",26,"Repasse de vendas","AMAZON",802.85,1,"","","not_vel_aroma","c","receita"],["r","2025-09",26,"Repasse de vendas","SHOPEE",1176.78,1,"","","not_vel_aroma","c","receita"],["r","2025-09",26,"Repasse de vendas","AMAZON",648.4,1,"","","not_vel_aroma","c","receita"],["r","2025-09",29,"Repasse de vendas","SHOPEE",2085.97,1,"","","not_vel_aroma","c","receita"],["r","2025-09",29,"Repasse de vendas","SHEIN",4343.33,1,"","","not_vel_aroma","c","receita"],["r","2025-09",30,"Rendimento de investimentos","MERCADO PAGO",108.13,1,"","","not_vel_aroma","c","investimento"],["r","2025-09",30,"Repasse de vendas","SHOPEE",1274.38,1,"","","not_vel_aroma","c","receita"],["r","2025-10",1,"Repasse de vendas","SHOPEE",654.29,1,"","","not_vel_aroma","c","receita"],["r","2025-10",2,"Receita com vendas","VENDA FÍSICA",1040.25,1,"","","not_vel_aroma","c","receita"],["r","2025-10",2,"Receita com vendas","Receita por troca/adição de produtos em pedido",11.9,1,"","","not_vel_aroma","c","receita"],["r","2025-10",2,"Repasse de vendas","SHOPEE",437.74,1,"","","not_vel_aroma","c","receita"],["r","2025-10",6,"Receita com vendas","VENDA FÍSICA",33.8,1,"","","not_vel_aroma","c","receita"],["r","2025-10",6,"Receita com vendas","VENDA FÍSICA",33.8,1,"","","not_vel_aroma","c","receita"],["r","2025-10",6,"Repasse de vendas","SHOPEE",1781.09,1,"","","not_vel_aroma","c","receita"],["r","2025-10",6,"Repasse de vendas","SHOPEE",1984.29,1,"","","not_vel_aroma","c","receita"],["r","2025-10",6,"Repasse de vendas","SHEIN",5043.01,1,"","","not_vel_aroma","c","receita"],["r","2025-10",7,"Outras receitas (Não considerar DRE)","ORNATA DOMUS COMPANY LTDA",270,1,"","","not_vel_aroma","c","receita"],["r","2025-10",7,"Repasse de vendas","SHOPEE",1219.56,1,"","","not_vel_aroma","c","receita"],["r","2025-10",8,"Repasse de vendas","SHOPEE",1002.2,1,"","","not_vel_aroma","c","receita"],["r","2025-10",9,"Repasse de vendas","AMAZON",243.6,1,"","","not_vel_aroma","c","receita"],["r","2025-10",9,"Repasse de vendas","SHOPEE",1091.31,1,"","","not_vel_aroma","c","receita"],["r","2025-10",10,"Receita com vendas","LUIZ ANTONIO RONDINI VIEIRA",37.82,1,"","","not_vel_aroma","c","receita"],["r","2025-10",10,"Repasse de vendas","AMAZON",7533.79,1,"","","not_vel_aroma","c","receita"],["r","2025-10",10,"Repasse de vendas","AMAZON",46.84,1,"","","not_vel_aroma","c","receita"],["r","2025-10",10,"Repasse de vendas","AMAZON",290.51,1,"","","not_vel_aroma","c","receita"],["r","2025-10",10,"Repasse de vendas","SHOPEE",1077.54,1,"","","not_vel_aroma","c","receita"],["r","2025-10",13,"Repasse de vendas","SHOPEE",3597.36,1,"","","not_vel_aroma","c","receita"],["r","2025-10",13,"Repasse de vendas","SHEIN",3764.01,1,"","","not_vel_aroma","c","receita"],["r","2025-10",14,"Repasse de vendas","SHOPEE",2122.99,1,"","","not_vel_aroma","c","receita"],["r","2025-10",15,"Receita com vendas","ORNATA DOMUS COMPANY LTDA",1164.86,1,"","","not_vel_aroma","c","receita"],["r","2025-10",15,"Repasse de vendas","SHOPEE",1279.92,1,"","","not_vel_aroma","c","receita"],["r","2025-10",16,"Repasse de vendas","SHOPEE",1419.07,1,"","","not_vel_aroma","c","receita"],["r","2025-10",17,"Receita com vendas","VENDA FÍSICA",13.9,1,"","","not_vel_aroma","c","receita"],["r","2025-10",17,"Receita com vendas","VENDA FÍSICA",44.8,1,"","","not_vel_aroma","c","receita"],["r","2025-10",17,"Repasse de vendas","SHOPEE",1374.3,1,"","","not_vel_aroma","c","receita"],["r","2025-10",20,"Repasse de vendas","SHOPEE",3746.34,1,"","","not_vel_aroma","c","receita"],["r","2025-10",20,"Repasse de vendas","SHEIN",4206.96,1,"","","not_vel_aroma","c","receita"],["r","2025-10",21,"Repasse de vendas","SHOPEE",2187.88,1,"","","not_vel_aroma","c","receita"],["r","2025-10",22,"Repasse de vendas","SHOPEE",1413.21,1,"","","not_vel_aroma","c","receita"],["r","2025-10",23,"Rendimento de investimentos","MERCADO PAGO",84.47,1,"","","not_vel_aroma","c","investimento"],["r","2025-10",24,"Repasse de vendas","AMAZON",159.46,1,"","","not_vel_aroma","c","receita"],["r","2025-10",24,"Repasse de vendas","AMAZON",251.66,1,"","","not_vel_aroma","c","receita"],["r","2025-10",27,"Repasse de vendas","SHEIN",4962.77,1,"","","not_vel_aroma","c","receita"],["r","2025-10",29,"Outras receitas (Não considerar DRE)","SICREDI",24941.91,1,"","","not_vel_aroma","c","receita"],["r","2025-10",29,"Outras receitas (Não considerar DRE)","SICREDI",41.87,1,"","","not_vel_aroma","c","receita"],["r","2025-10",29,"Outras receitas (Não considerar DRE)","SICREDI",4962.77,1,"","","not_vel_aroma","c","receita"],["r","2025-10",30,"Receita com vendas","VENDA FÍSICA",33.8,1,"","","not_vel_aroma","c","receita"],["r","2025-10",30,"Receita com vendas","VENDA FÍSICA",78,1,"","","not_vel_aroma","c","receita"],["r","2025-10",31,"Receita com vendas","VENDA FÍSICA",80,1,"","","not_vel_aroma","c","receita"],["r","2025-10",31,"Outras receitas (Não considerar DRE)","SICREDI",22891.91,1,"","","not_vel_aroma","c","receita"],["r","2025-10",31,"Outras receitas (Não considerar DRE)","MERCADO PAGO",10231.6,1,"","","not_vel_aroma","c","receita"],["r","2025-10",31,"Repasse de vendas","SHOPEE",13113.28,1,"","","not_vel_aroma","c","receita"],["r","2025-11",3,"Repasse de vendas","SHEIN",3775.7,1,"","","not_vel_aroma","c","receita"],["r","2025-11",3,"Repasse de vendas","SHOPEE",3370.83,1,"","","not_vel_aroma","c","receita"],["r","2025-11",4,"Repasse de vendas","SHOPEE",1752.1,1,"","","not_vel_aroma","c","receita"],["r","2025-11",5,"Repasse de vendas","SHOPEE",2263.61,1,"","","not_vel_aroma","c","receita"],["r","2025-11",6,"Repasse de vendas","AMAZON",86.64,1,"","","not_vel_aroma","c","receita"],["r","2025-11",6,"Repasse de vendas","SHOPEE",1237.5,1,"","","not_vel_aroma","c","receita"],["r","2025-11",7,"Repasse de vendas","SHOPEE",1306.87,1,"","","not_vel_aroma","c","receita"],["r","2025-11",7,"Repasse de vendas","AMAZON",456.4,1,"","","not_vel_aroma","c","receita"],["r","2025-11",7,"Repasse de vendas","AMAZON",359.14,1,"","","not_vel_aroma","c","receita"],["r","2025-11",10,"Receita com vendas","VENDA FÍSICA",33.9,1,"","","not_vel_aroma","c","receita"],["r","2025-11",10,"Repasse de vendas","SHEIN",9005.23,1,"","","not_vel_aroma","c","receita"],["r","2025-11",10,"Repasse de vendas","SHOPEE",4619.07,1,"","","not_vel_aroma","c","receita"],["r","2025-11",11,"Repasse de vendas","SHOPEE",2296.54,1,"","","not_vel_aroma","c","receita"],["r","2025-11",12,"Repasse de vendas","SHOPEE",2004.27,1,"","","not_vel_aroma","c","receita"],["r","2025-11",13,"Receita com vendas","Gean Carlos Fagundes Pereira",37.8,1,"","","not_vel_aroma","c","receita"],["r","2025-11",13,"Repasse de vendas","SHOPEE",2288.16,1,"","","not_vel_aroma","c","receita"],["r","2025-11",14,"Receita com vendas","VENDA FÍSICA",32.7,1,"","","not_vel_aroma","c","receita"],["r","2025-11",14,"Repasse de vendas","SHOPEE",2068.4,1,"","","not_vel_aroma","c","receita"],["r","2025-11",17,"Receita com vendas","ORNATA DOMUS COMPANY LTDA",1768.27,1,"","","not_vel_aroma","c","receita"],["r","2025-11",17,"Repasse de vendas","SHOPEE",7133.34,1,"","","not_vel_aroma","c","receita"],["r","2025-11",17,"Repasse de vendas","SHEIN",5609.51,1,"","","not_vel_aroma","c","receita"],["r","2025-11",18,"Repasse de vendas","SHOPEE",4190.34,1,"","","not_vel_aroma","c","receita"],["r","2025-11",19,"Outras receitas (Não considerar DRE)","MERCADO LIVRE",97.8,1,"","","not_vel_aroma","c","receita"],["r","2025-11",19,"Outras receitas (Não considerar DRE)","MERCADO LIVRE",97.8,1,"","","not_vel_aroma","c","receita"],["r","2025-11",19,"Rendimento de investimentos","MERCADO PAGO",64.76,1,"","","not_vel_aroma","c","investimento"],["r","2025-11",19,"Repasse de vendas","SHOPEE",2459.82,1,"","","not_vel_aroma","c","receita"],["r","2025-11",21,"Repasse de vendas","SHOPEE",2100.38,1,"","","not_vel_aroma","c","receita"],["r","2025-11",21,"Repasse de vendas","SHOPEE",3061.35,1,"","","not_vel_aroma","c","receita"],["r","2025-11",21,"Repasse de vendas","AMAZON",165.51,1,"","","not_vel_aroma","c","receita"],["r","2025-11",24,"Repasse de vendas","AMAZON",311.33,1,"","","not_vel_aroma","c","receita"],["r","2025-11",24,"Repasse de vendas","AMAZON",308.15,1,"","","not_vel_aroma","c","receita"],["r","2025-11",24,"Repasse de vendas","AMAZON",39.8,1,"","","not_vel_aroma","c","receita"],["r","2025-11",24,"Repasse de vendas","SHEIN",4774.94,1,"","","not_vel_aroma","c","receita"],["r","2025-11",24,"Repasse de vendas","SHOPEE",6494.04,1,"","","not_vel_aroma","c","receita"],["r","2025-11",25,"Receita com vendas","VENDA FÍSICA",16.9,1,"","","not_vel_aroma","c","receita"],["r","2025-11",25,"Repasse de vendas","SHOPEE",3128.54,1,"","","not_vel_aroma","c","receita"],["r","2025-11",26,"Repasse de vendas","SHOPEE",3041.09,1,"","","not_vel_aroma","c","receita"],["r","2025-11",27,"Receita com vendas","VENDA FÍSICA",64.7,1,"","","not_vel_aroma","c","receita"],["r","2025-11",27,"Repasse de vendas","SHOPEE",2205.9,1,"","","not_vel_aroma","c","receita"],["r","2025-11",28,"Repasse de vendas","SHOPEE",2423.46,1,"","","not_vel_aroma","c","receita"],["r","2025-12",1,"Receita com vendas","ORNATA DOMUS COMPANY LTDA",27.8,1,"","","not_vel_aroma","c","receita"],["r","2025-12",1,"Rendimento de investimentos","INTER DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA",58.11,1,"","","not_vel_aroma","c","investimento"],["r","2025-12",1,"Repasse de vendas","SHEIN",7490.16,1,"","","not_vel_aroma","c","receita"],["r","2025-12",1,"Repasse de vendas","SHOPEE",7828,1,"","","not_vel_aroma","c","receita"],["r","2025-12",3,"Repasse de vendas","SHOPEE",4552.03,1,"","","not_vel_aroma","c","receita"],["r","2025-12",3,"Repasse de vendas","SHOPEE",1245.34,1,"","","not_vel_aroma","c","receita"],["r","2025-12",4,"Receita por troca/adição de produtos em pedido","Receita por troca/adição de produtos em pedido",10.9,1,"","","not_vel_aroma","c","receita"],["r","2025-12",4,"Repasse de vendas","AMAZON",103.36,1,"","","not_vel_aroma","c","receita"],["r","2025-12",4,"Repasse de vendas","SHOPEE",2326.71,1,"","","not_vel_aroma","c","receita"],["r","2025-12",5,"Repasse de vendas","AMAZON",444.61,1,"","","not_vel_aroma","c","receita"],["r","2025-12",5,"Repasse de vendas","AMAZON",304.07,1,"","","not_vel_aroma","c","receita"],["r","2025-12",5,"Repasse de vendas","SHOPEE",4212.02,1,"","","not_vel_aroma","c","receita"],["r","2025-12",8,"Repasse de vendas","SHEIN",6030.3,1,"","","not_vel_aroma","c","receita"],["r","2025-12",8,"Repasse de vendas","SHOPEE",10865.56,1,"","","not_vel_aroma","c","receita"],["r","2025-12",9,"Receita com vendas","VENDA FÍSICA",81.6,1,"","","not_vel_aroma","c","receita"],["r","2025-12",9,"Repasse de vendas","SHOPEE",4987.82,1,"","","not_vel_aroma","c","receita"],["r","2025-12",9,"Repasse de vendas","MERCADO LIVRE",1000,1,"","","not_vel_aroma","c","receita"],["r","2025-12",10,"Receita com vendas","VENDA FÍSICA",32,1,"","","not_vel_aroma","c","receita"],["r","2025-12",10,"Repasse de vendas","SHOPEE",4029.25,1,"","","not_vel_aroma","c","receita"],["r","2025-12",11,"Repasse de vendas","SHOPEE",4761.38,1,"","","not_vel_aroma","c","receita"],["r","2025-12",12,"Repasse de vendas","SHOPEE",3602.1,1,"","","not_vel_aroma","c","receita"],["r","2025-12",15,"Receita com vendas","ORNATA DOMUS COMPANY LTDA",1833.23,1,"","","not_vel_aroma","c","receita"],["r","2025-12",15,"Repasse de vendas","SHOPEE",12601.98,1,"","","not_vel_aroma","c","receita"],["r","2025-12",15,"Repasse de vendas","SHEIN",5605.34,1,"","","not_vel_aroma","c","receita"],["r","2025-12",16,"Repasse de vendas","SHOPEE",6238.19,1,"","","not_vel_aroma","c","receita"],["r","2025-12",17,"Receita por troca/adição de produtos em pedido","Receita por troca/adição de produtos em pedido",16.9,1,"","","not_vel_aroma","c","receita"],["r","2025-12",17,"Repasse de vendas","SHOPEE",4530.35,1,"","","not_vel_aroma","c","receita"],["r","2025-12",18,"Repasse de vendas","SHOPEE",3260.79,1,"","","not_vel_aroma","c","receita"],["r","2025-12",18,"Repasse de vendas","AMAZON",235.02,1,"","","not_vel_aroma","c","receita"],["r","2025-12",19,"Receita com vendas","VENDA FÍSICA",107.6,1,"","","not_vel_aroma","c","receita"],["r","2025-12",19,"Repasse de vendas","AMAZON",665.26,1,"","","not_vel_aroma","c","receita"],["r","2025-12",19,"Repasse de vendas","AMAZON",508.61,1,"","","not_vel_aroma","c","receita"],["r","2025-12",19,"Repasse de vendas","AMAZON",62.88,1,"","","not_vel_aroma","c","receita"],["r","2025-12",19,"Repasse de vendas","SHOPEE",3148.6,1,"","","not_vel_aroma","c","receita"],["r","2025-12",22,"Repasse de vendas","SHOPEE",10510.33,1,"","","not_vel_aroma","c","receita"],["r","2025-12",22,"Repasse de vendas","SHEIN",6564.69,1,"","","not_vel_aroma","c","receita"],["r","2025-12",23,"Repasse de vendas","SHOPEE",4200.05,1,"","","not_vel_aroma","c","receita"],["r","2025-12",26,"Repasse de vendas","SHOPEE",4278,1,"","","not_vel_aroma","c","receita"],["r","2025-12",26,"Repasse de vendas","SHOPEE",3496.36,1,"","","not_vel_aroma","c","receita"],["r","2025-12",29,"Repasse de vendas","SHOPEE",6562.01,1,"","","not_vel_aroma","c","receita"],["r","2025-12",29,"Repasse de vendas","SHEIN",9478.27,1,"","","not_vel_aroma","c","receita"],["r","2025-12",30,"Repasse de vendas","SHOPEE",3416.29,1,"","","not_vel_aroma","c","receita"],["r","2026-01",2,"Rendimento de investimentos","INTER DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA",93.9,1,"","","not_vel_aroma","c","investimento"],["r","2026-01",2,"Repasse de vendas","SHOPEE",2983.57,1,"","","not_vel_aroma","c","receita"],["r","2026-01",2,"Repasse de vendas","SHOPEE",1321.91,1,"","","not_vel_aroma","c","receita"],["r","2026-01",5,"Repasse de vendas","AMAZON",219.03,1,"","","not_vel_aroma","c","receita"],["r","2026-01",5,"Repasse de vendas","AMAZON",47.34,1,"","","not_vel_aroma","c","receita"],["r","2026-01",5,"Repasse de vendas","SHOPEE",5068.29,1,"","","not_vel_aroma","c","receita"],["r","2026-01",5,"Repasse de vendas","AMAZON",26.31,1,"","","not_vel_aroma","c","receita"],["r","2026-01",5,"Repasse de vendas","AMAZON",232.96,1,"","","not_vel_aroma","c","receita"],["r","2026-01",5,"Repasse de vendas","SHEIN",8241.1,1,"","","not_vel_aroma","c","receita"],["r","2026-01",6,"Repasse de vendas","SHOPEE",3725.41,1,"","","not_vel_aroma","c","receita"],["r","2026-01",8,"Receita com vendas","ORNATA DOMUS COMPANY LTDA",2625.92,1,"","","not_vel_aroma","c","receita"],["r","2026-01",7,"Repasse de vendas","SHOPEE",2276.77,1,"","","not_vel_aroma","c","receita"],["r","2026-01",8,"Repasse de vendas","SHOPEE",3109.12,1,"","","not_vel_aroma","c","receita"],["r","2026-01",9,"Repasse de vendas","SHOPEE",2426.03,1,"","","not_vel_aroma","c","receita"],["r","2026-01",12,"Repasse de vendas","SHOPEE",8421.76,1,"","","not_vel_aroma","c","receita"],["r","2026-01",12,"Repasse de vendas","SHEIN",4106.11,1,"","","not_vel_aroma","c","receita"],["r","2026-01",13,"Receita por troca/adição de produtos em pedido","Receita por troca/adição de produtos em pedido",64.43,1,"","","not_vel_aroma","c","receita"],["r","2026-01",13,"Repasse de vendas","SHOPEE",3938.97,1,"","","not_vel_aroma","c","receita"],["r","2026-01",14,"Receita com vendas","VENDA FÍSICA",39.9,1,"","","not_vel_aroma","c","receita"],["r","2026-01",14,"Receita com vendas","VENDA FÍSICA",33.8,1,"","","not_vel_aroma","c","receita"],["r","2026-01",14,"Repasse de vendas","SHOPEE",3582.07,1,"","","not_vel_aroma","c","receita"],["r","2026-01",14,"Receita com vendas","CLAUDIO LISIAS DA SILVA JUNIOR",171.3,1,"","","not_vel_aroma","c","receita"],["r","2026-01",15,"Repasse de vendas","SHOPEE",3303.62,1,"","","not_vel_aroma","c","receita"],["r","2026-01",15,"Repasse de vendas","AMAZON",265.04,1,"","","not_vel_aroma","c","receita"],["r","2026-01",16,"Repasse de vendas","AMAZON",20.15,1,"","","not_vel_aroma","c","receita"],["r","2026-01",16,"Repasse de vendas","AMAZON",394.34,1,"","","not_vel_aroma","c","receita"],["r","2026-01",16,"Repasse de vendas","MERCADO LIVRE",2000,1,"","","not_vel_aroma","c","receita"],["r","2026-01",16,"Repasse de vendas","SHOPEE",4509.91,1,"","","not_vel_aroma","c","receita"],["r","2026-01",19,"Repasse de vendas","SHOPEE",8710.67,1,"","","not_vel_aroma","c","receita"],["r","2026-01",19,"Repasse de vendas","SHEIN",7271.68,1,"","","not_vel_aroma","c","receita"],["r","2026-01",20,"Receita com vendas","MARIA LAURA DE MELLO LINO",74.5,1,"","","not_vel_aroma","c","receita"],["r","2026-01",20,"Receita com vendas","VENDA FÍSICA",120,1,"","","not_vel_aroma","c","receita"],["r","2026-01",20,"Receita com vendas","VENDA FÍSICA",5,1,"","","not_vel_aroma","c","receita"],["r","2026-01",20,"Repasse de vendas","SHOPEE",4560.77,1,"","","not_vel_aroma","c","receita"],["r","2026-01",21,"Receita com vendas","VENDA FÍSICA",80,1,"","","not_vel_aroma","c","receita"],["r","2026-01",21,"Repasse de vendas","SHOPEE",3943.54,1,"","","not_vel_aroma","c","receita"],["r","2026-01",22,"Repasse de vendas","SHOPEE",3592.1,1,"","","not_vel_aroma","c","receita"],["r","2026-01",23,"Repasse de vendas","MERCADO LIVRE",2000,1,"","","not_vel_aroma","c","receita"],["r","2026-01",23,"Repasse de vendas","SHOPEE",2577.02,1,"","","not_vel_aroma","c","receita"],["r","2026-01",26,"Repasse de vendas","SHEIN",6419.81,1,"","","not_vel_aroma","c","receita"],["r","2026-01",26,"Repasse de vendas","SHOPEE",7604.82,1,"","","not_vel_aroma","c","receita"],["r","2026-01",27,"Repasse de vendas","SHOPEE",4531.71,1,"","","not_vel_aroma","c","receita"],["r","2026-01",28,"Receita com vendas","VENDA FÍSICA",57.7,1,"","","not_vel_aroma","c","receita"],["r","2026-01",28,"Repasse de vendas","SHOPEE",2848.83,1,"","","not_vel_aroma","c","receita"],["r","2026-01",29,"Repasse de vendas","AMAZON",465.75,1,"","","not_vel_aroma","c","receita"],["r","2026-01",29,"Repasse de vendas","SHOPEE",2074.11,1,"","","not_vel_aroma","c","receita"],["r","2026-01",30,"Repasse de vendas","AMAZON",831.28,1,"","","not_vel_aroma","c","receita"],["r","2026-01",30,"Repasse de vendas","SHOPEE",2646.87,1,"","","not_vel_aroma","c","receita"],["r","2026-01",30,"Repasse de vendas","AMAZON",131.31,1,"","","not_vel_aroma","c","receita"],["r","2026-01",30,"Repasse de vendas","AMAZON",20.15,1,"","","not_vel_aroma","c","receita"],["r","2026-01",30,"Repasse de vendas","MERCADO LIVRE",1000,1,"","","not_vel_aroma","c","receita"],["r","2026-01",31,"Rendimento de investimentos","INTER DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA",103.2,1,"","","not_vel_aroma","c","investimento"],["r","2026-02",2,"Receita com vendas","VENDA FÍSICA",10.28,1,"","","not_vel_aroma","c","receita"],["r","2026-02",2,"Repasse de vendas","SHOPEE",10906.49,1,"","","not_vel_aroma","c","receita"],["r","2026-02",2,"Repasse de vendas","SHEIN",9168.46,1,"","","not_vel_aroma","c","receita"],["r","2026-02",3,"Repasse de vendas","SHOPEE",4403.53,1,"","","not_vel_aroma","c","receita"],["r","2026-02",4,"Obtenção de empréstimo","ORNATA DOMUS COMPANY LTDA",110000,1,"","","not_vel_aroma","c","financiamento"],["r","2026-02",4,"Repasse de vendas","SHOPEE",3583.46,1,"","","not_vel_aroma","c","receita"],["r","2026-02",5,"Receita com vendas","VENDA FÍSICA",117.5,1,"","","not_vel_aroma","c","receita"],["r","2026-02",5,"Receita com vendas","VENDA FÍSICA",96.5,1,"","","not_vel_aroma","c","receita"],["r","2026-02",5,"Receita com vendas","VENDA FÍSICA",57.7,1,"","","not_vel_aroma","c","receita"],["r","2026-02",5,"Receita com vendas","VENDA FÍSICA",16,1,"","","not_vel_aroma","c","receita"],["r","2026-02",5,"Repasse de vendas","SHOPEE",2280.66,1,"","","not_vel_aroma","c","receita"],["r","2026-02",6,"Receita com vendas","LUIZ ANTONIO RONDINI VIEIRA",219.84,1,"","","not_vel_aroma","c","receita"],["r","2026-02",6,"Repasse de vendas","MERCADO LIVRE",1000,1,"","","not_vel_aroma","c","receita"],["r","2026-02",6,"Repasse de vendas","SHOPEE",3259.62,1,"","","not_vel_aroma","c","receita"],["r","2026-02",9,"Receita com vendas","VENDA FÍSICA",200,1,"","","not_vel_aroma","c","receita"],["r","2026-02",9,"Outras receitas (Não considerar DRE)","MARIA LAURA DE MELLO LINO",2008.12,1,"","","not_vel_aroma","c","receita"],["r","2026-02",9,"Repasse de vendas","SHOPEE",11542.58,1,"","","not_vel_aroma","c","receita"],["r","2026-02",9,"Repasse de vendas","SHEIN",7691.05,1,"","","not_vel_aroma","c","receita"],["r","2026-02",10,"Receita com vendas","VENDA FÍSICA",39.8,1,"","","not_vel_aroma","c","receita"],["r","2026-02",10,"Outras receitas (Não considerar DRE)","ORNATA DOMUS COMPANY LTDA",981.76,1,"","","not_vel_aroma","c","receita"],["r","2026-02",10,"Repasse de vendas","SHOPEE",5729.59,1,"","","not_vel_aroma","c","receita"],["r","2026-02",11,"Outras receitas (Não considerar DRE)","ORNATA DOMUS COMPANY LTDA",7000,1,"","","not_vel_aroma","c","receita"],["r","2026-02",11,"Repasse de vendas","SHOPEE",4457.45,1,"","","not_vel_aroma","c","receita"],["r","2026-02",12,"Receita com vendas","VENDA FÍSICA",16.9,1,"","","not_vel_aroma","c","receita"],["r","2026-02",12,"Repasse de vendas","AMAZON",773.44,1,"","","not_vel_aroma","c","receita"],["r","2026-02",12,"Repasse de vendas","SHOPEE",4550.45,1,"","","not_vel_aroma","c","receita"],["r","2026-02",13,"Receita com vendas","VENDA FÍSICA",180,1,"","","not_vel_aroma","c","receita"],["r","2026-02",13,"Repasse de vendas","AMAZON",76.39,1,"","","not_vel_aroma","c","receita"],["r","2026-02",13,"Repasse de vendas","MERCADO LIVRE",1500,1,"","","not_vel_aroma","c","receita"],["r","2026-02",13,"Repasse de vendas","SHOPEE",5562.07,1,"","","not_vel_aroma","c","receita"],["r","2026-02",13,"Repasse de vendas","AMAZON",20.15,1,"","","not_vel_aroma","c","receita"],["r","2026-02",13,"Repasse de vendas","AMAZON",1000.52,1,"","","not_vel_aroma","c","receita"],["r","2026-02",18,"Receita com vendas","ORNATA DOMUS COMPANY LTDA",1243.89,1,"","","not_vel_aroma","c","receita"],["r","2026-02",18,"Repasse de vendas","SHEIN",7665.13,1,"","","not_vel_aroma","c","receita"],["r","2026-02",18,"Repasse de vendas","SHOPEE",14591.9,1,"","","not_vel_aroma","c","receita"],["r","2026-02",18,"Receita com vendas","VENDA FÍSICA",132.38,1,"","","not_vel_aroma","c","receita"],["r","2026-02",18,"Repasse de vendas","SHOPEE",13419.66,1,"","","not_vel_aroma","c","receita"],["r","2026-02",19,"Repasse de vendas","SHOPEE",7441.73,1,"","","not_vel_aroma","c","receita"],["r","2026-02",20,"Repasse de vendas","SHOPEE",5268.37,1,"","","not_vel_aroma","c","receita"],["r","2026-02",21,"Repasse de vendas","MERCADO LIVRE",2500,1,"","","not_vel_aroma","c","receita"],["r","2026-02",23,"Repasse de vendas","SHOPEE",17625.78,1,"","","not_vel_aroma","c","receita"],["r","2026-02",23,"Repasse de vendas","SHEIN",6641.3,1,"","","not_vel_aroma","c","receita"],["r","2026-02",24,"Receita com vendas","VENDA FÍSICA",44.9,1,"","","not_vel_aroma","c","receita"],["r","2026-02",24,"Repasse de vendas","SHOPEE",8597.26,1,"","","not_vel_aroma","c","receita"],["r","2026-02",25,"Repasse de vendas","SHOPEE",5725.47,1,"","","not_vel_aroma","c","receita"],["r","2026-02",26,"Repasse de vendas","SHOPEE",6185.15,1,"","","not_vel_aroma","c","receita"],["r","2026-02",26,"Repasse de vendas","AMAZON",969.37,1,"","","not_vel_aroma","c","receita"],["r","2026-02",27,"Repasse de vendas","AMAZON",100.66,1,"","","not_vel_aroma","c","receita"],["r","2026-02",27,"Repasse de vendas","AMAZON",848.19,1,"","","not_vel_aroma","c","receita"],["r","2026-02",27,"Repasse de vendas","SHOPEE",5945.65,1,"","","not_vel_aroma","c","receita"],["r","2026-02",27,"Repasse de vendas","MERCADO LIVRE",1500,1,"","","not_vel_aroma","c","receita"],["r","2026-02",27,"Repasse de vendas","AMAZON",109.49,1,"","","not_vel_aroma","c","receita"],["r","2026-02",27,"Repasse de vendas","AMAZON",1131.17,1,"","","not_vel_aroma","c","receita"],["r","2026-02",28,"Rendimento de investimentos","MERCADO PAGO",300.72,1,"","","not_vel_aroma","c","investimento"],["r","2026-02",28,"Rendimento de investimentos","INTER DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA",86.14,1,"","","not_vel_aroma","c","investimento"],["r","2026-03",2,"Repasse de vendas","SHEIN",7358.76,1,"","","not_vel_aroma","c","receita"],["r","2026-03",2,"Repasse de vendas","SHOPEE",18209,1,"","","not_vel_aroma","c","receita"],["r","2026-03",3,"Repasse de vendas","SHOPEE",8954.67,1,"","","not_vel_aroma","c","receita"],["r","2026-03",4,"Repasse de vendas","SHOPEE",7563.32,1,"","","not_vel_aroma","c","receita"],["r","2026-03",5,"Repasse de vendas","SHOPEE",6593.65,1,"","","not_vel_aroma","c","receita"],["r","2026-03",6,"Repasse de vendas","MERCADO LIVRE",1500,1,"","","not_vel_aroma","c","receita"],["r","2026-03",6,"Repasse de vendas","SHOPEE",6349.79,1,"","","not_vel_aroma","c","receita"],["r","2026-03",9,"Repasse de vendas","SHEIN",9355.37,1,"","","not_vel_aroma","c","receita"],["r","2026-03",9,"Repasse de vendas","SHOPEE",20247.55,1,"","","not_vel_aroma","c","receita"],["r","2026-03",12,"Receita com vendas","MARIA LAURA DE MELLO LINO",93.92,1,"","","not_vel_aroma","c","receita"],["r","2026-04",30,"Outras receitas (Não considerar DRE)","ORNATA DOMUS COMPANY LTDA",981.77,1,"","","not_vel_aroma","c","receita"],["r","2026-03",10,"Repasse de vendas","SHOPEE",5958.95,1,"","","not_vel_aroma","c","receita"],["r","2026-03",11,"Receita com vendas","VENDA FÍSICA",19,1,"","","not_vel_aroma","c","receita"],["r","2026-03",11,"Receita com vendas","ORNATA DOMUS COMPANY LTDA",1826.66,1,"","","not_vel_aroma","c","receita"],["r","2026-03",11,"Repasse de vendas","SHOPEE",5265.04,1,"","","not_vel_aroma","c","receita"],["r","2026-03",12,"Receita com vendas","VENDA FÍSICA",48,1,"","","not_vel_aroma","c","receita"],["r","2026-03",12,"Repasse de vendas","SHOPEE",4939.94,1,"","","not_vel_aroma","c","receita"],["r","2026-03",12,"Repasse de vendas","AMAZON",809.5,1,"","","not_vel_aroma","c","receita"],["r","2026-03",13,"Repasse de vendas","AMAZON",535.02,1,"","","not_vel_aroma","c","receita"],["r","2026-03",13,"Repasse de vendas","SHOPEE",6706.84,1,"","","not_vel_aroma","c","receita"],["r","2026-03",13,"Repasse de vendas","MERCADO LIVRE",4500,1,"","","not_vel_aroma","c","receita"],["r","2026-03",13,"Repasse de vendas","AMAZON",80.01,1,"","","not_vel_aroma","c","receita"],["r","2026-03",16,"Outras receitas","SICREDI",0.01,1,"","","not_vel_aroma","c","receita"],["r","2026-03",16,"Repasse de vendas","SHOPEE",17943.22,1,"","","not_vel_aroma","c","receita"],["r","2026-03",16,"Repasse de vendas","SHEIN",7415.02,1,"","","not_vel_aroma","c","receita"],["r","2026-03",17,"Receita com vendas","VENDA FÍSICA",74.3,1,"","","not_vel_aroma","c","receita"],["r","2026-03",17,"Repasse de vendas","SHOPEE",6652.08,1,"","","not_vel_aroma","c","receita"],["r","2026-03",18,"Repasse de vendas","TIKTOK",408.22,1,"","","not_vel_aroma","c","receita"],["r","2026-03",18,"Repasse de vendas","SHOPEE",5101.05,1,"","","not_vel_aroma","c","receita"],["r","2026-03",19,"Repasse de vendas","TIKTOK",14.41,1,"","","not_vel_aroma","c","receita"],["r","2026-03",19,"Repasse de vendas","TIKTOK",154.61,1,"","","not_vel_aroma","c","receita"],["r","2026-03",19,"Repasse de vendas","SHOPEE",5186.92,1,"","","not_vel_aroma","c","receita"],["r","2026-03",20,"Receita com vendas","VENDA FÍSICA",205,1,"","","not_vel_aroma","c","receita"],["r","2026-03",20,"Outras receitas (Não considerar DRE)","JONATHAN ROQUE DE SOUZA",1000,1,"","","not_vel_aroma","c","receita"],["r","2026-03",20,"Repasse de vendas","SHOPEE",6375.52,1,"","","not_vel_aroma","c","receita"],["r","2026-03",20,"Repasse de vendas","MERCADO LIVRE",3000,1,"","","not_vel_aroma","c","receita"],["r","2026-03",21,"Repasse de vendas","TIKTOK",12.14,1,"","","not_vel_aroma","c","receita"],["r","2026-03",23,"Repasse de vendas","TIKTOK",12.14,1,"","","not_vel_aroma","c","receita"],["r","2026-03",23,"Repasse de vendas","SHEIN",8154.38,1,"","","not_vel_aroma","c","receita"],["r","2026-03",23,"Repasse de vendas","TIKTOK",53.85,1,"","","not_vel_aroma","c","receita"],["r","2026-03",23,"Repasse de vendas","SHOPEE",16851.46,1,"","","not_vel_aroma","c","receita"],["r","2026-03",24,"Receita com vendas","VENDA FÍSICA",25,1,"","","not_vel_aroma","c","receita"],["r","2026-03",24,"Repasse de vendas","SHOPEE",6310.34,1,"","","not_vel_aroma","c","receita"],["r","2026-03",25,"Receita com vendas","VENDA FÍSICA",33.8,1,"","","not_vel_aroma","c","receita"],["r","2026-03",25,"Receita com vendas","VENDA FÍSICA",81.68,1,"","","not_vel_aroma","c","receita"],["r","2026-03",25,"Repasse de vendas","TIKTOK",30.8,1,"","","not_vel_aroma","c","receita"],["r","2026-03",25,"Repasse de vendas","SHOPEE",4160.88,1,"","","not_vel_aroma","c","receita"],["r","2026-03",26,"Repasse de vendas","AMAZON",812.99,1,"","","not_vel_aroma","c","receita"],["r","2026-03",26,"Repasse de vendas","SHOPEE",5553.09,1,"","","not_vel_aroma","c","receita"],["r","2026-03",26,"Repasse de vendas","TIKTOK",24.27,1,"","","not_vel_aroma","c","receita"],["r","2026-03",27,"Repasse de vendas","AMAZON",2109.1,1,"","","not_vel_aroma","c","receita"],["r","2026-03",27,"Repasse de vendas","MERCADO LIVRE",5000,1,"","","not_vel_aroma","c","receita"],["r","2026-03",27,"Repasse de vendas","SHOPEE",4614.99,1,"","","not_vel_aroma","c","receita"],["r","2026-03",30,"Outras receitas (Não considerar DRE)","ORNATA DOMUS COMPANY LTDA",350,1,"","","not_vel_aroma","c","receita"],["r","2026-03",30,"Repasse de vendas","TIKTOK",77.23,1,"","","not_vel_aroma","c","receita"],["r","2026-03",30,"Repasse de vendas","SHEIN",8960.32,1,"","","not_vel_aroma","c","receita"],["r","2026-03",30,"Repasse de vendas","SHOPEE",13609.98,1,"","","not_vel_aroma","c","receita"],["r","2026-03",31,"Outras receitas (Não considerar DRE)","SAMUEL ANTONIO DE SOUZA MARTINS",200,1,"","","not_vel_aroma","c","receita"],["r","2026-03",31,"Rendimento de investimentos","INTER DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA",131.95,1,"","","not_vel_aroma","c","investimento"],["r","2026-03",31,"Rendimento de investimentos","MERCADO PAGO",349.77,1,"","","not_vel_aroma","c","investimento"],["r","2026-03",31,"Repasse de vendas","SHOPEE",5269.4,1,"","","not_vel_aroma","c","receita"],["r","2026-03",31,"Repasse de vendas","TIKTOK",87.72,1,"","","not_vel_aroma","c","receita"],["r","2026-04",1,"Repasse de vendas","TIKTOK",123.29,1,"","","not_vel_aroma","c","receita"],["r","2026-04",1,"Repasse de vendas","SHOPEE",4100.98,1,"","","not_vel_aroma","c","receita"],["r","2026-04",2,"Receita com vendas","VENDA FÍSICA",51.8,1,"","","not_vel_aroma","c","receita"],["r","2026-04",2,"Repasse de vendas","SHOPEE",3697.75,1,"","","not_vel_aroma","c","receita"],["r","2026-04",2,"Repasse de vendas","TIKTOK",76.44,1,"","","not_vel_aroma","c","receita"],["r","2026-04",2,"Repasse de vendas","TIKTOK",375.98,1,"","","not_vel_aroma","c","receita"],["r","2026-04",3,"Repasse de vendas","TIKTOK",125.39,1,"","","not_vel_aroma","c","receita"],["r","2026-04",3,"Repasse de vendas","TIKTOK",218.22,1,"","","not_vel_aroma","c","receita"],["r","2026-04",4,"Outras receitas (Não considerar DRE)","JONATHAN ROQUE DE SOUZA",150,1,"","","not_vel_aroma","c","receita"],["r","2026-04",4,"Repasse de vendas","MERCADO LIVRE",5500,1,"","","not_vel_aroma","c","receita"],["r","2026-04",4,"Repasse de vendas","TIKTOK",258.57,1,"","","not_vel_aroma","c","receita"],["r","2026-03",11,"Receita com vendas","LUIZ ANTONIO RONDINI VIEIRA",88.48,1,"","","not_vel_aroma","c","receita"],["r","2026-04",6,"Repasse de vendas","SHOPEE",16576.57,1,"","","not_vel_aroma","c","receita"],["r","2026-04",6,"Repasse de vendas","SHEIN",8771.03,1,"","","not_vel_aroma","c","receita"],["r","2026-04",6,"Repasse de vendas","TIKTOK",514.55,1,"","","not_vel_aroma","c","receita"],["r","2026-04",7,"Receita com vendas","VENDA FÍSICA",150.5,1,"","","not_vel_aroma","c","receita"],["r","2026-04",7,"Repasse de vendas","SHOPEE",4899.37,1,"","","not_vel_aroma","c","receita"],["r","2026-04",7,"Repasse de vendas","TIKTOK",415.64,1,"","","not_vel_aroma","c","receita"],["r","2026-04",8,"Receita com vendas","VENDA FÍSICA",44.7,1,"","","not_vel_aroma","c","receita"],["r","2026-04",8,"Repasse de vendas","TIKTOK",26.48,1,"","","not_vel_aroma","c","receita"],["r","2026-04",8,"Repasse de vendas","TIKTOK",769.08,1,"","","not_vel_aroma","c","receita"],["r","2026-04",8,"Repasse de vendas","SHOPEE",3100.09,1,"","","not_vel_aroma","c","receita"],["r","2026-04",9,"Receita com vendas","VENDA FÍSICA",59.8,1,"","","not_vel_aroma","c","receita"],["r","2026-04",9,"Receita com vendas","VENDA FÍSICA",38.8,1,"","","not_vel_aroma","c","receita"],["r","2026-04",9,"Repasse de vendas","SHOPEE",2945.84,1,"","","not_vel_aroma","c","receita"],["r","2026-04",9,"Repasse de vendas","AMAZON",1814.24,1,"","","not_vel_aroma","c","receita"],["r","2026-04",10,"Receita com vendas","VENDA FÍSICA",140,1,"","","not_vel_aroma","c","receita"],["r","2026-04",10,"Outras receitas (Não considerar DRE)","CAMILA RODRIGUES CAJUELA LTDA",800,1,"","","not_vel_aroma","c","receita"],["r","2026-04",10,"Outras receitas (Não considerar DRE)","GABRIEL FELIPE PEREIRA DA SILVA",55,1,"","","not_vel_aroma","c","receita"],["r","2026-04",10,"Outras receitas (Não considerar DRE)","VITORIA LEAO DE LIMA",100,1,"","","not_vel_aroma","c","receita"],["r","2026-04",10,"Repasse de vendas","SHOPEE",5421.32,1,"","","not_vel_aroma","c","receita"],["r","2026-04",10,"Repasse de vendas","MERCADO LIVRE",2500,1,"","","not_vel_aroma","c","receita"],["r","2026-04",10,"Repasse de vendas","AMAZON",338.25,1,"","","not_vel_aroma","c","receita"],["r","2026-04",10,"Repasse de vendas","TIKTOK",125.32,1,"","","not_vel_aroma","c","receita"],["r","2026-04",10,"Repasse de vendas","AMAZON",1806.62,1,"","","not_vel_aroma","c","receita"],["r","2026-04",10,"Repasse de vendas","AMAZON",645.87,1,"","","not_vel_aroma","c","receita"],["r","2026-04",10,"Repasse de vendas","AMAZON",44.02,1,"","","not_vel_aroma","c","receita"],["r","2026-04",12,"Repasse de vendas","TIKTOK",235.16,1,"","","not_vel_aroma","c","receita"],["r","2026-04",13,"Receita com vendas","VENDA FÍSICA",131.4,1,"","","not_vel_aroma","c","receita"],["r","2026-04",13,"Repasse de vendas","TIKTOK",224.46,1,"","","not_vel_aroma","c","receita"],["r","2026-04",14,"Repasse de vendas","SHOPEE",11511.2,1,"","","not_vel_aroma","c","receita"],["r","2026-04",13,"Repasse de vendas","SHEIN",6982.4,1,"","","not_vel_aroma","c","receita"],["r","2026-04",14,"Receita com vendas","VENDA FÍSICA",96.6,1,"","","not_vel_aroma","c","receita"],["r","2026-04",14,"Outras receitas (Não considerar DRE)","LUIZ ANTONIO RONDINI VIEIRA",250,1,"","","not_vel_aroma","c","receita"],["r","2026-04",14,"Rendimento de investimentos","INTER DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA",50.43,1,"","","not_vel_aroma","c","investimento"],["r","2026-04",14,"Repasse de vendas","MERCADO LIVRE",3500,1,"","","not_vel_aroma","c","receita"],["r","2026-04",14,"Repasse de vendas","SHOPEE",5644.92,1,"","","not_vel_aroma","c","receita"],["r","2026-04",14,"Repasse de vendas","TIKTOK",187.5,1,"","","not_vel_aroma","c","receita"],["r","2026-04",14,"Receita com vendas","VENDA FÍSICA",57.7,1,"","","not_vel_aroma","c","receita"],["r","2026-04",16,"Receita com vendas","ORNATA DOMUS COMPANY LTDA",2189.91,1,"","","not_vel_aroma","c","receita"],["r","2026-04",16,"Outras receitas","EMMILY REGINA COSMO BETARELLO - FLORAE",121.24,1,"","","not_vel_aroma","c","receita"],["r","2026-04",15,"Rendimento de investimentos","INTER DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA",6.02,1,"","","not_vel_aroma","c","investimento"],["r","2026-04",14,"Repasse de vendas","TIKTOK",160.65,1,"","","not_vel_aroma","c","receita"],["r","2026-04",15,"Repasse de vendas","TIKTOK",301.73,1,"","","not_vel_aroma","c","receita"],["r","2026-04",15,"Repasse de vendas","SHOPEE",5421.11,1,"","","not_vel_aroma","c","receita"],["r","2026-04",16,"Repasse de vendas","TIKTOK",70.47,1,"","","not_vel_aroma","c","receita"],["r","2026-04",16,"Repasse de vendas","SHOPEE",5655.49,1,"","","not_vel_aroma","c","receita"],["r","2026-04",17,"Receita com vendas","VENDA FÍSICA",47.9,1,"","","not_vel_aroma","c","receita"],["r","2026-04",17,"Repasse de vendas","TIKTOK",10.37,1,"","","not_vel_aroma","c","receita"],["r","2026-04",17,"Repasse de vendas","SHOPEE",6697.33,1,"","","not_vel_aroma","c","receita"],["r","2026-04",17,"Repasse de vendas","MERCADO LIVRE",2300,1,"","","not_vel_aroma","c","receita"],["r","2026-04",18,"Repasse de vendas","TIKTOK",436.87,1,"","","not_vel_aroma","c","receita"],["r","2026-04",20,"Outras receitas (Não considerar DRE)","MURILO BISPO ZENELATO",200,1,"","","not_vel_aroma","c","receita"],["r","2026-04",20,"Repasse de vendas","SHOPEE",16864.18,1,"","","not_vel_aroma","c","receita"],["r","2026-04",20,"Repasse de vendas","SHEIN",2514.83,1,"","","not_vel_aroma","c","receita"],["r","2026-04",20,"Repasse de vendas","SHEIN",99.44,1,"","","not_vel_aroma","c","receita"],["r","2026-04",20,"Repasse de vendas","SHEIN",3437.83,1,"","","not_vel_aroma","c","receita"],["r","2026-04",20,"Repasse de vendas","TIKTOK",516.92,1,"","","not_vel_aroma","c","receita"],["r","2026-04",20,"Repasse de vendas","SHEIN",1147.97,1,"","","not_vel_aroma","c","receita"],["r","2026-04",20,"Repasse de vendas","TIKTOK",59.28,1,"","","not_vel_aroma","c","receita"],["r","2026-04",22,"Repasse de vendas","MERCADO LIVRE",5000,1,"","","not_vel_aroma","c","receita"],["r","2026-04",22,"Repasse de vendas","SHEIN",156.32,1,"","","not_vel_aroma","c","receita"],["r","2026-04",22,"Repasse de vendas","TIKTOK",579.45,1,"","","not_vel_aroma","c","receita"],["r","2026-04",22,"Repasse de vendas","SHOPEE",13858.66,1,"","","not_vel_aroma","c","receita"],["r","2026-04",23,"Outras receitas (Não considerar DRE)","DENILSON GOMES JUNIOR",200,1,"","","not_vel_aroma","c","receita"],["r","2026-04",23,"Repasse de vendas","AMAZON",1189.17,1,"","","not_vel_aroma","c","receita"],["r","2026-04",23,"Repasse de vendas","SHOPEE",7528.45,1,"","","not_vel_aroma","c","receita"],["r","2026-04",23,"Repasse de vendas","TIKTOK",138.71,1,"","","not_vel_aroma","c","receita"],["r","2026-04",24,"Repasse de vendas","AMAZON",76.29,1,"","","not_vel_aroma","c","receita"],["r","2026-04",24,"Repasse de vendas","AMAZON",1976.48,1,"","","not_vel_aroma","c","receita"],["r","2026-04",24,"Repasse de vendas","AMAZON",350.64,1,"","","not_vel_aroma","c","receita"],["r","2026-04",24,"Repasse de vendas","AMAZON",132.43,1,"","","not_vel_aroma","c","receita"],["r","2026-04",24,"Repasse de vendas","MERCADO LIVRE",3000,1,"","","not_vel_aroma","c","receita"],["r","2026-04",24,"Repasse de vendas","SHOPEE",6126.65,1,"","","not_vel_aroma","c","receita"],["r","2026-04",25,"Repasse de vendas","TIKTOK",48.68,1,"","","not_vel_aroma","c","receita"],["r","2026-04",26,"Repasse de vendas","TIKTOK",132.39,1,"","","not_vel_aroma","c","receita"],["r","2026-04",27,"Repasse de vendas","TIKTOK",975.55,1,"","","not_vel_aroma","c","receita"],["r","2026-04",27,"Repasse de vendas","SHEIN",64.94,1,"","","not_vel_aroma","c","receita"],["r","2026-04",27,"Repasse de vendas","SHOPEE",13796.89,1,"","","not_vel_aroma","c","receita"],["r","2026-04",27,"Repasse de vendas","SHEIN",167.52,1,"","","not_vel_aroma","c","receita"],["r","2026-04",27,"Repasse de vendas","SHEIN",4164.41,1,"","","not_vel_aroma","c","receita"],["r","2026-04",27,"Repasse de vendas","TIKTOK",476.38,1,"","","not_vel_aroma","c","receita"],["r","2026-04",28,"Outras receitas (Não considerar DRE)","VITORIA LEAO DE LIMA",900,1,"","","not_vel_aroma","c","receita"],["r","2026-04",28,"Repasse de vendas","SHOPEE",6115.73,1,"","","not_vel_aroma","c","receita"],["r","2026-04",28,"Repasse de vendas","SHEIN",2446.87,1,"","","not_vel_aroma","c","receita"],["r","2026-04",28,"Repasse de vendas","SHEIN",1293.63,1,"","","not_vel_aroma","c","receita"],["r","2026-04",29,"Outras receitas (Não considerar DRE)","SUELI LOPES",1000,1,"","","not_vel_aroma","c","receita"],["r","2026-04",29,"Repasse de vendas","TIKTOK",485.63,1,"","","not_vel_aroma","c","receita"],["r","2026-04",29,"Repasse de vendas","TIKTOK",713.09,1,"","","not_vel_aroma","c","receita"],["r","2026-04",29,"Repasse de vendas","SHOPEE",4272.36,1,"","","not_vel_aroma","c","receita"],["r","2026-04",20,"Outras receitas (Não considerar DRE)","ORNATA DOMUS COMPANY LTDA",981.77,1,"","","not_vel_aroma","c","receita"],["r","2026-04",30,"Rendimento de investimentos","MERCADO PAGO",0.4,1,"","","not_vel_aroma","c","investimento"],["r","2026-04",30,"Rendimento de investimentos","MERCADO PAGO",321.66,1,"","","not_vel_aroma","c","investimento"],["r","2026-04",30,"Repasse de vendas","SHOPEE",4370.72,1,"","","not_vel_aroma","c","receita"],["r","2026-04",30,"Repasse de vendas","MERCADO LIVRE",7000,1,"","","not_vel_aroma","c","receita"],["r","2026-05",1,"Receita com vendas","VENDA FÍSICA",31.8,1,"","","not_vel_aroma","c","receita"],["r","2026-05",1,"Receita com vendas","VENDA FÍSICA",145.3,1,"","","not_vel_aroma","c","receita"],["r","2026-05",1,"Repasse de vendas","TIKTOK",560.05,1,"","","not_vel_aroma","c","receita"],["r","2026-05",2,"Repasse de vendas","TIKTOK",79.16,1,"","","not_vel_aroma","c","receita"],["r","2026-05",3,"Repasse de vendas","TIKTOK",456.84,1,"","","not_vel_aroma","c","receita"],["r","2026-05",4,"Outras receitas (Não considerar DRE)","JOAO ANTONIO DA SILVA DOS SANTOS",1000,1,"","","not_vel_aroma","c","receita"],["r","2026-05",4,"Repasse de vendas","SHEIN",2746.81,1,"","","not_vel_aroma","c","receita"],["r","2026-05",4,"Repasse de vendas","TIKTOK",600.3,1,"","","not_vel_aroma","c","receita"],["r","2026-05",4,"Repasse de vendas","SHEIN",169.88,1,"","","not_vel_aroma","c","receita"],["r","2026-05",4,"Repasse de vendas","SHEIN",27.92,1,"","","not_vel_aroma","c","receita"],["r","2026-05",4,"Repasse de vendas","TIKTOK",815.96,1,"","","not_vel_aroma","c","receita"],["r","2026-05",4,"Repasse de vendas","MERCADO LIVRE",5000,1,"","","not_vel_aroma","c","receita"],["r","2026-05",4,"Repasse de vendas","SHOPEE",20835.75,1,"","","not_vel_aroma","c","receita"],["r","2026-05",5,"Outras receitas (Não considerar DRE)","PEDRO HENRIQUE CUSTODIO MARTINS",200,1,"","","not_vel_aroma","c","receita"],["r","2026-05",5,"Repasse de vendas","SHEIN",1272.12,1,"","","not_vel_aroma","c","receita"],["r","2026-05",5,"Repasse de vendas","SHOPEE",7407.62,1,"","","not_vel_aroma","c","receita"],["r","2026-05",5,"Repasse de vendas","SHEIN",1569.62,1,"","","not_vel_aroma","c","receita"],["r","2026-05",6,"Repasse de vendas","TIKTOK",138.25,1,"","","not_vel_aroma","c","receita"],["r","2026-05",6,"Receita com vendas","VENDA FÍSICA",37,1,"","","not_vel_aroma","c","receita"],["r","2026-05",6,"Repasse de vendas","SHOPEE",6612.03,1,"","","not_vel_aroma","c","receita"],["r","2026-05",6,"Repasse de vendas","TIKTOK",819.94,1,"","","not_vel_aroma","c","receita"],["r","2026-05",8,"Receita com vendas","VENDA FÍSICA",29.9,1,"","","not_vel_aroma","c","receita"],["r","2026-05",8,"Receita com vendas","VENDA FÍSICA",76.75,1,"","","not_vel_aroma","c","receita"],["r","2026-05",6,"Receita com vendas","VENDA FÍSICA",39.9,1,"","","not_vel_aroma","c","receita"],["r","2026-05",7,"Outras receitas (Não considerar DRE)","ELYPLAST RIO PRETO LTDA",1185.2,1,"","","not_vel_aroma","c","receita"],["r","2026-05",7,"Repasse de vendas","AMAZON",1724.46,1,"","","not_vel_aroma","c","receita"],["r","2026-05",7,"Repasse de vendas","SHOPEE",6691.09,1,"","","not_vel_aroma","c","receita"],["r","2026-05",8,"Receita com vendas","VENDA FÍSICA",19.9,1,"","","not_vel_aroma","c","receita"],["r","2026-05",8,"Receita com vendas","VENDA FÍSICA",57.8,1,"","","not_vel_aroma","c","receita"],["r","2026-05",8,"Receita com vendas","VENDA FÍSICA",89.8,1,"","","not_vel_aroma","c","receita"],["r","2026-05",8,"Repasse de vendas","SHOPEE",7608.21,1,"","","not_vel_aroma","c","receita"],["r","2026-05",8,"Repasse de vendas","AMAZON",332.74,1,"","","not_vel_aroma","c","receita"],["r","2026-05",8,"Repasse de vendas","TIKTOK",92.09,1,"","","not_vel_aroma","c","receita"],["r","2026-05",8,"Repasse de vendas","TIKTOK",184.57,1,"","","not_vel_aroma","c","receita"],["r","2026-05",8,"Repasse de vendas","SHEIN",1949.93,1,"","","not_vel_aroma","c","receita"],["r","2026-05",8,"Repasse de vendas","MERCADO LIVRE",4000,1,"","","not_vel_aroma","c","receita"],["r","2026-05",10,"Repasse de vendas","TIKTOK",1439.99,1,"","","not_vel_aroma","c","receita"],["r","2026-05",10,"Repasse de vendas","TIKTOK",928.66,1,"","","not_vel_aroma","c","receita"],["r","2026-05",11,"Receita com vendas","VENDA FÍSICA",25.9,1,"","","not_vel_aroma","c","receita"],["r","2026-05",11,"Repasse de vendas","SHEIN",3572.12,1,"","","not_vel_aroma","c","receita"],["r","2026-05",11,"Repasse de vendas","SHEIN",84.28,1,"","","not_vel_aroma","c","receita"],["r","2026-05",11,"Repasse de vendas","SHEIN",199.25,1,"","","not_vel_aroma","c","receita"],["r","2026-05",11,"Repasse de vendas","SHOPEE",18489.85,1,"","","not_vel_aroma","c","receita"],["r","2026-05",11,"Repasse de vendas","TIKTOK",1014.58,1,"","","not_vel_aroma","c","receita"],["r","2026-05",12,"Repasse de vendas","SHEIN",2398.51,1,"","","not_vel_aroma","c","receita"],["r","2026-05",12,"Repasse de vendas","SHEIN",1458.01,1,"","","not_vel_aroma","c","receita"],["r","2026-05",12,"Repasse de vendas","SHOPEE",8058.82,1,"","","not_vel_aroma","c","receita"],["r","2026-05",13,"Repasse de vendas","TIKTOK",383.49,1,"","","not_vel_aroma","c","receita"],["r","2026-05",13,"Repasse de vendas","SHOPEE",6552.41,1,"","","not_vel_aroma","c","receita"],["r","2026-05",14,"Repasse de vendas","SHOPEE",4295.27,1,"","","not_vel_aroma","c","receita"],["r","2026-05",14,"Repasse de vendas","TIKTOK",1634.34,1,"","","not_vel_aroma","c","receita"],["r","2026-05",15,"Repasse de vendas","TIKTOK",760.26,1,"","","not_vel_aroma","c","receita"],["r","2026-05",15,"Repasse de vendas","SHOPEE",6217.64,1,"","","not_vel_aroma","c","receita"],["r","2026-05",15,"Repasse de vendas","TIKTOK",939.94,1,"","","not_vel_aroma","c","receita"],["r","2026-05",15,"Repasse de vendas","MERCADO LIVRE",9000,1,"","","not_vel_aroma","c","receita"],["r","2026-05",16,"Repasse de vendas","TIKTOK",1372.43,1,"","","not_vel_aroma","c","receita"],["r","2026-05",18,"Repasse de vendas","TIKTOK",2256.64,1,"","","not_vel_aroma","c","receita"],["r","2026-05",18,"Repasse de vendas","SHOPEE",16813.47,1,"","","not_vel_aroma","c","receita"],["r","2026-05",18,"Repasse de vendas","SHEIN",224.83,1,"","","not_vel_aroma","c","receita"],["r","2026-05",18,"Repasse de vendas","SHEIN",63.21,1,"","","not_vel_aroma","c","receita"],["r","2026-05",19,"Repasse de vendas","TIKTOK",1485.58,1,"","","not_vel_aroma","c","receita"],["r","2026-05",18,"Repasse de vendas","SHEIN",3121.64,1,"","","not_vel_aroma","c","receita"],["r","2026-05",19,"Outras receitas (Não considerar DRE)","DENILSON GOMES JUNIOR",150,1,"","","not_vel_aroma","c","receita"],["r","2026-05",19,"Repasse de vendas","SHOPEE",6518.78,1,"","","not_vel_aroma","c","receita"],["r","2026-05",19,"Repasse de vendas","SHEIN",1265.7,1,"","","not_vel_aroma","c","receita"],["r","2026-05",19,"Repasse de vendas","SHEIN",2098.83,1,"","","not_vel_aroma","c","receita"],["r","2026-05",20,"Receita com vendas","ORNATA DOMUS COMPANY LTDA",2248.96,1,"","","not_vel_aroma","c","receita"],["r","2026-05",20,"Repasse de vendas","TIKTOK",733.8,1,"","","not_vel_aroma","c","receita"],["r","2026-05",20,"Repasse de vendas","TIKTOK",1942.58,1,"","","not_vel_aroma","c","receita"],["r","2026-05",20,"Repasse de vendas","SHOPEE",5146.91,1,"","","not_vel_aroma","c","receita"],["r","2026-05",21,"Receita com vendas","JOAO EDUARDO GONCALVES NOGUEIRA",1000,1,"","","not_vel_aroma","c","receita"],["r","2026-05",21,"Outras receitas (Não considerar DRE)","DENILSON GOMES JUNIOR",50,1,"","","not_vel_aroma","c","receita"],["r","2026-05",22,"Repasse de vendas","TIKTOK",946.39,1,"","","not_vel_aroma","c","receita"],["r","2026-05",21,"Repasse de vendas","AMAZON",1868.87,1,"","","not_vel_aroma","c","receita"],["r","2026-05",21,"Repasse de vendas","SHOPEE",4252.59,1,"","","not_vel_aroma","c","receita"],["r","2026-05",22,"Repasse de vendas","MERCADO LIVRE",13000,1,"","","not_vel_aroma","c","receita"],["r","2026-05",22,"Repasse de vendas","AMAZON",2347.73,1,"","","not_vel_aroma","c","receita"],["r","2026-05",22,"Repasse de vendas","SHOPEE",5990.51,1,"","","not_vel_aroma","c","receita"],["r","2026-05",23,"Repasse de vendas","TIKTOK",447.26,1,"","","not_vel_aroma","c","receita"],["r","2026-05",22,"Repasse de vendas","AMAZON",164.99,1,"","","not_vel_aroma","c","receita"],["r","2026-05",22,"Repasse de vendas","AMAZON",286.07,1,"","","not_vel_aroma","c","receita"],["r","2026-05",23,"Repasse de vendas","TIKTOK",989.46,1,"","","not_vel_aroma","c","receita"],["r","2026-05",24,"Repasse de vendas","TIKTOK",865.48,1,"","","not_vel_aroma","c","receita"],["r","2026-05",25,"Receita com vendas","VENDA FÍSICA",95.8,1,"","","not_vel_aroma","c","receita"],["r","2026-05",25,"Repasse de vendas","SHEIN",183.91,1,"","","not_vel_aroma","c","receita"],["r","2026-05",25,"Repasse de vendas","SHEIN",195.21,1,"","","not_vel_aroma","c","receita"],["r","2026-05",25,"Repasse de vendas","SHEIN",3622.59,1,"","","not_vel_aroma","c","receita"],["r","2026-05",25,"Repasse de vendas","SHOPEE",14124.11,1,"","","not_vel_aroma","c","receita"],["r","2026-05",26,"Outras receitas (Não considerar DRE)","PEDRO HENRIQUE CUSTODIO MARTINS",250,1,"","","not_vel_aroma","c","receita"],["r","2026-05",26,"Repasse de vendas","SHEIN",2434.18,1,"","","not_vel_aroma","c","receita"],["r","2026-05",26,"Repasse de vendas","SHOPEE",5901.15,1,"","","not_vel_aroma","c","receita"],["r","2026-05",26,"Repasse de vendas","TIKTOK",956.56,1,"","","not_vel_aroma","c","receita"],["r","2026-05",26,"Repasse de vendas","SHEIN",1385.14,1,"","","not_vel_aroma","c","receita"],["r","2026-05",26,"Repasse de vendas","TIKTOK",632.49,1,"","","not_vel_aroma","c","receita"],["r","2026-05",27,"Receita com vendas","VENDA FÍSICA",110,1,"","","not_vel_aroma","c","receita"],["r","2026-05",27,"Repasse de vendas","TIKTOK",1388.83,1,"","","not_vel_aroma","c","receita"],["r","2026-05",27,"Repasse de vendas","SHOPEE",3588.24,1,"","","not_vel_aroma","c","receita"],["r","2026-05",28,"Receita com vendas","VENDA FÍSICA",19.9,1,"","","not_vel_aroma","c","receita"],["r","2026-05",28,"Receita com vendas","VENDA FÍSICA",256.46,1,"","","not_vel_aroma","c","receita"],["r","2026-05",28,"Repasse de vendas","SHOPEE",3729.57,1,"","","not_vel_aroma","c","receita"],["r","2026-05",29,"Repasse de vendas","MERCADO LIVRE",11000,1,"","","not_vel_aroma","c","receita"],["r","2026-05",29,"Repasse de vendas","SHOPEE",5486.66,1,"","","not_vel_aroma","c","receita"],["r","2026-05",29,"Repasse de vendas","TIKTOK",602.35,1,"","","not_vel_aroma","c","receita"],["r","2026-05",30,"Repasse de vendas","TIKTOK",299.96,1,"","","not_vel_aroma","c","receita"],["r","2026-05",31,"Repasse de vendas","TIKTOK",2145.91,1,"","","not_vel_aroma","c","receita"],["r","2026-05",31,"Rendimento de investimentos","MERCADO PAGO",45.05,1,"","","not_vel_aroma","c","investimento"],["r","2026-05",31,"Rendimento de investimentos","INTER DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA",0.04,1,"","","not_vel_aroma","c","investimento"],["r","2026-05",31,"Rendimento de investimentos","MERCADO PAGO",318.31,1,"","","not_vel_aroma","c","investimento"],["r","2026-05",31,"Repasse de vendas","TIKTOK",799.24,1,"","","not_vel_aroma","c","receita"],["r","2026-06",1,"Outras receitas (Não considerar DRE)","DENILSON GOMES JUNIOR",250,1,"","","not_vel_aroma","c","receita"],["r","2026-06",1,"Repasse de vendas","SHEIN",169.7,1,"","","not_vel_aroma","c","receita"],["r","2026-06",1,"Repasse de vendas","SHOPEE",11641.72,1,"","","not_vel_aroma","c","receita"],["r","2026-06",1,"Repasse de vendas","SHEIN",274.34,1,"","","not_vel_aroma","c","receita"],["r","2026-06",1,"Repasse de vendas","TIKTOK",359.34,1,"","","not_vel_aroma","c","receita"],["r","2026-06",1,"Repasse de vendas","SHEIN",7722.76,1,"","","not_vel_aroma","c","receita"],["r","2026-06",2,"Repasse de vendas","SHEIN",3050.32,1,"","","not_vel_aroma","c","receita"],["r","2026-06",2,"Repasse de vendas","SHEIN",4999.81,1,"","","not_vel_aroma","c","receita"],["r","2026-06",2,"Repasse de vendas","SHOPEE",4286.96,1,"","","not_vel_aroma","c","receita"],["r","2026-06",3,"Repasse de vendas","TIKTOK",523.28,1,"","","not_vel_aroma","c","receita"],["r","2026-06",3,"Repasse de vendas","SHOPEE",3447.31,1,"","","not_vel_aroma","c","receita"],["r","2026-06",5,"Repasse de vendas","SHOPEE",3301.38,1,"","","not_vel_aroma","c","receita"],["r","2026-06",4,"Repasse de vendas","TIKTOK",882.64,1,"","","not_vel_aroma","c","receita"],["r","2026-06",5,"Repasse de vendas","SHOPEE",3849.99,1,"","","not_vel_aroma","c","receita"],["r","2026-06",5,"Repasse de vendas","MERCADO LIVRE",8500,1,"","","not_vel_aroma","c","receita"],["r","2026-06",5,"Repasse de vendas","TIKTOK",666.09,1,"","","not_vel_aroma","c","receita"],["r","2026-06",5,"Repasse de vendas","AMAZON",2618.25,1,"","","not_vel_aroma","c","receita"],["r","2026-06",6,"Repasse de vendas","TIKTOK",866.19,1,"","","not_vel_aroma","c","receita"],["r","2026-06",6,"Repasse de vendas","TIKTOK",357.17,1,"","","not_vel_aroma","c","receita"],["r","2026-06",7,"Repasse de vendas","TIKTOK",1185.82,1,"","","not_vel_aroma","c","receita"],["r","2026-06",8,"Repasse de vendas","SHEIN",5393.56,1,"","","not_vel_aroma","c","receita"],["r","2026-06",8,"Repasse de vendas","SHEIN",310.17,1,"","","not_vel_aroma","c","receita"],["r","2026-06",8,"Repasse de vendas","AMAZON",728.99,1,"","","not_vel_aroma","c","receita"],["r","2026-06",8,"Repasse de vendas","SHEIN",295.74,1,"","","not_vel_aroma","c","receita"],["r","2026-06",8,"Repasse de vendas","TIKTOK",580.73,1,"","","not_vel_aroma","c","receita"],["r","2026-06",8,"Repasse de vendas","AMAZON",3829.5,1,"","","not_vel_aroma","c","receita"],["r","2026-06",8,"Repasse de vendas","AMAZON",1118.86,1,"","","not_vel_aroma","c","receita"],["r","2026-06",8,"Repasse de vendas","SHOPEE",11588.88,1,"","","not_vel_aroma","c","receita"],["r","2026-06",8,"Repasse de vendas","AMAZON",140.29,1,"","","not_vel_aroma","c","receita"],["r","2026-06",9,"Repasse de vendas","SHEIN",1638.92,1,"","","not_vel_aroma","c","receita"],["r","2026-06",9,"Repasse de vendas","TIKTOK",327.25,1,"","","not_vel_aroma","c","receita"],["r","2026-06",9,"Repasse de vendas","SHEIN",3128.6,1,"","","not_vel_aroma","c","receita"],["r","2026-06",9,"Repasse de vendas","SHOPEE",4114.27,1,"","","not_vel_aroma","c","receita"],["r","2026-06",8,"Receita com vendas","VENDA FÍSICA",56,1,"","","not_vel_aroma","c","receita"],["r","2026-06",8,"Receita com vendas","VENDA FÍSICA",22,1,"","","not_vel_aroma","c","receita"],["r","2026-06",8,"Receita com vendas","VENDA FÍSICA",25.9,1,"","","not_vel_aroma","c","receita"],["r","2026-06",8,"Receita com vendas","VENDA FÍSICA",27,1,"","","not_vel_aroma","c","receita"],["r","2026-06",8,"Receita com vendas","VENDA FÍSICA",19.8,1,"","","not_vel_aroma","c","receita"],["r","2026-06",8,"Receita com vendas","VENDA FÍSICA",50,1,"","","not_vel_aroma","c","receita"],["r","2026-06",8,"Receita com vendas","VENDA FÍSICA",62,1,"","","not_vel_aroma","c","receita"],["r","2026-06",8,"Receita com vendas","VENDA FÍSICA",151.35,1,"","","not_vel_aroma","c","receita"],["r","2026-06",10,"Outras receitas (Não considerar DRE)","ORNATA DOMUS COMPANY LTDA",734,1,"","","not_vel_aroma","c","receita"],["r","2026-06",10,"Outras receitas (Não considerar DRE)","PAULO EDUARDO CUSTODIO MARTINS",50,1,"","","not_vel_aroma","c","receita"],["r","2026-06",10,"Repasse de vendas","SHOPEE",3909.33,1,"","","not_vel_aroma","c","receita"],["r","2026-06",11,"Receita com vendas","VENDA FÍSICA",62,1,"","","not_vel_aroma","c","receita"],["r","2026-06",11,"Repasse de vendas","TIKTOK",1231.93,1,"","","not_vel_aroma","c","receita"],["r","2026-06",11,"Repasse de vendas","SHOPEE",3524.97,1,"","","not_vel_aroma","c","receita"],["r","2026-06",12,"Receita com vendas","VENDA FÍSICA",50,1,"","","not_vel_aroma","c","receita"],["r","2026-06",12,"Repasse de vendas","TIKTOK",769.66,1,"","","not_vel_aroma","c","receita"],["r","2026-06",12,"Repasse de vendas","SHOPEE",3993.56,1,"","","not_vel_aroma","c","receita"],["r","2026-06",13,"Repasse de vendas","TIKTOK",1388.86,1,"","","not_vel_aroma","c","receita"],["r","2026-06",13,"Repasse de vendas","TIKTOK",1174.08,1,"","","not_vel_aroma","c","receita"],["r","2026-06",14,"Repasse de vendas","MERCADO LIVRE",13000,1,"","","not_vel_aroma","c","receita"],["r","2026-06",16,"Receita com vendas","ORNATA DOMUS COMPANY LTDA",5051.63,1,"","","not_vel_aroma","c","receita"],["r","2026-06",15,"Repasse de vendas","SHEIN",6371.82,1,"","","not_vel_aroma","c","receita"],["r","2026-06",15,"Repasse de vendas","SHEIN",366.05,1,"","","not_vel_aroma","c","receita"],["r","2026-06",15,"Repasse de vendas","SHOPEE",12958.63,1,"","","not_vel_aroma","c","receita"],["r","2026-06",15,"Repasse de vendas","TIKTOK",1327.44,1,"","","not_vel_aroma","c","receita"],["r","2026-06",15,"Repasse de vendas","SHEIN",187.83,1,"","","not_vel_aroma","c","receita"],["r","2026-06",16,"Receita com vendas","VENDA FÍSICA",414.75,1,"","","not_vel_aroma","c","receita"],["r","2026-06",16,"Repasse de vendas","SHEIN",1827.04,1,"","","not_vel_aroma","c","receita"],["r","2026-06",16,"Repasse de vendas","SHEIN",3260.19,1,"","","not_vel_aroma","c","receita"],["r","2026-06",16,"Repasse de vendas","SHOPEE",4355.99,1,"","","not_vel_aroma","c","receita"],["r","2026-06",16,"Repasse de vendas","TIKTOK",1051.46,1,"","","not_vel_aroma","c","receita"],["r","2026-06",16,"Repasse de vendas","TIKTOK",877.38,1,"","","not_vel_aroma","c","receita"],["r","2026-06",17,"Repasse de vendas","SHOPEE",5541.37,1,"","","not_vel_aroma","c","receita"],["r","2026-06",18,"Repasse de vendas","TIKTOK",1944.85,1,"","","not_vel_aroma","c","receita"],["r","2026-06",18,"Repasse de vendas","SHOPEE",5089.8,1,"","","not_vel_aroma","c","receita"],["r","2026-06",18,"Repasse de vendas","AMAZON",3612.06,1,"","","not_vel_aroma","c","receita"],["r","2026-06",19,"Receita com vendas","VENDA FÍSICA",32,1,"","","not_vel_aroma","c","receita"],["r","2026-06",19,"Receita com vendas","VENDA FÍSICA",79.6,1,"","","not_vel_aroma","c","receita"],["r","2026-06",19,"Receita com vendas","VENDA FÍSICA",446.15,1,"","","not_vel_aroma","c","receita"],["r","2026-06",19,"Outras receitas (Não considerar DRE)","DENILSON GOMES JUNIOR",200,1,"","","not_vel_aroma","c","receita"],["r","2026-06",19,"Repasse de vendas","AMAZON",3866.78,1,"","","not_vel_aroma","c","receita"],["r","2026-06",19,"Repasse de vendas","AMAZON",3432.67,1,"","","not_vel_aroma","c","receita"],["r","2026-06",19,"Repasse de vendas","SHOPEE",4876.76,1,"","","not_vel_aroma","c","receita"],["r","2026-06",19,"Repasse de vendas","TIKTOK",1447.05,1,"","","not_vel_aroma","c","receita"],["r","2026-06",19,"Repasse de vendas","AMAZON",236.7,1,"","","not_vel_aroma","c","receita"],["r","2026-06",19,"Repasse de vendas","AMAZON",236.09,1,"","","not_vel_aroma","c","receita"],["r","2026-06",20,"Repasse de vendas","TIKTOK",1413.89,1,"","","not_vel_aroma","c","receita"],["r","2026-06",21,"Repasse de vendas","TIKTOK",4190.77,1,"","","not_vel_aroma","c","receita"],["r","2026-06",20,"Receita com vendas","FABRICIA LIMA STORE - LUCAS HENRIQUE DE SOUZA VESTUARIOS",1636.37,1,"","","not_vel_aroma","c","receita"],["r","2026-06",22,"Outras receitas (Não considerar DRE)","SAMUEL ANTONIO DE SOUZA MARTINS",4000,1,"","","not_vel_aroma","c","receita"],["r","2026-06",22,"Repasse de vendas","SHOPEE",14411.02,1,"","","not_vel_aroma","c","receita"],["r","2026-06",22,"Repasse de vendas","MERCADO LIVRE",8000,0,"","","not_vel_aroma","c","receita"],["r","2026-06",22,"Repasse de vendas","TIKTOK",2937.33,1,"","","not_vel_aroma","c","receita"],["r","2026-06",23,"Outras receitas (Não considerar DRE)","PEDRO HENRIQUE CUSTODIO MARTINS",300,0,"","","not_vel_aroma","c","receita"],["r","2026-06",23,"Outras receitas (Não considerar DRE)","JOAO ANTONIO DA SILVA DOS SANTOS",1000,0,"","","not_vel_aroma","c","receita"],["r","2026-06",23,"Repasse de vendas","SHEIN",18000,0,"","","not_vel_aroma","c","receita"],["r","2026-06",23,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-06",23,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-06",24,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-06",24,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-06",25,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-06",25,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-06",26,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-06",26,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-06",26,"Repasse de vendas","MERCADO LIVRE",7000,0,"","","not_vel_aroma","c","receita"],["r","2026-06",27,"Receita com vendas","VENDA FÍSICA",83.65,0,"","","not_vel_aroma","c","receita"],["r","2026-06",27,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-06",27,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-06",28,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-06",28,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-06",29,"Repasse de vendas","SHEIN",12000,0,"","","not_vel_aroma","c","receita"],["r","2026-06",29,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-06",29,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-06",30,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-06",30,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-07",1,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-07",1,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-07",2,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-07",2,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-07",3,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-07",3,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-07",3,"Repasse de vendas","MERCADO LIVRE",7000,0,"","","not_vel_aroma","c","receita"],["r","2026-07",3,"Repasse de vendas","AMAZON",9500,0,"","","not_vel_aroma","c","receita"],["r","2026-07",4,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-07",4,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-07",5,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-07",5,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-07",6,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-07",6,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-07",6,"Repasse de vendas","SHEIN",12000,0,"","","not_vel_aroma","c","receita"],["r","2026-07",7,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-07",7,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-07",8,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-07",8,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-07",9,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-07",9,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-07",10,"Receita com vendas","VENDA FÍSICA",73,0,"","","not_vel_aroma","c","receita"],["r","2026-07",10,"Receita com vendas","VENDA FÍSICA",16,0,"","","not_vel_aroma","c","receita"],["r","2026-07",10,"Receita com vendas","VENDA FÍSICA",126,0,"","","not_vel_aroma","c","receita"],["r","2026-07",10,"Repasse de vendas","MERCADO LIVRE",7000,0,"","","not_vel_aroma","c","receita"],["r","2026-07",10,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-07",10,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-07",11,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-07",11,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-07",12,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-07",12,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-07",13,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-07",13,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-07",13,"Repasse de vendas","SHEIN",12000,0,"","","not_vel_aroma","c","receita"],["r","2026-07",14,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-07",14,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-07",15,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-07",15,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-07",16,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-07",16,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-07",17,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-07",17,"Repasse de vendas","AMAZON",9500,0,"","","not_vel_aroma","c","receita"],["r","2026-07",17,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-07",17,"Repasse de vendas","MERCADO LIVRE",7000,0,"","","not_vel_aroma","c","receita"],["r","2026-07",18,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-07",18,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-07",19,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-07",19,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-07",20,"Repasse de vendas","SHEIN",12000,0,"","","not_vel_aroma","c","receita"],["r","2026-07",20,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-07",20,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-07",21,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-07",21,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-07",22,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-07",22,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-07",23,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-07",23,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-07",24,"Repasse de vendas","MERCADO LIVRE",7000,0,"","","not_vel_aroma","c","receita"],["r","2026-07",24,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-07",24,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-07",25,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-07",25,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-07",26,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-07",26,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-07",27,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-07",27,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-07",27,"Repasse de vendas","SHEIN",12000,0,"","","not_vel_aroma","c","receita"],["r","2026-07",28,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-07",28,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-07",29,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-07",29,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-07",30,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-07",30,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-07",31,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-07",31,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-07",31,"Repasse de vendas","MERCADO LIVRE",7000,0,"","","not_vel_aroma","c","receita"],["r","2026-07",31,"Repasse de vendas","AMAZON",9500,0,"","","not_vel_aroma","c","receita"],["r","2026-08",1,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-08",1,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-08",2,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-08",2,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-08",3,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-08",3,"Repasse de vendas","SHEIN",12000,0,"","","not_vel_aroma","c","receita"],["r","2026-08",3,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-08",4,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-08",4,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-08",5,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-08",5,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-08",6,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-08",6,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-08",7,"Repasse de vendas","MERCADO LIVRE",7000,0,"","","not_vel_aroma","c","receita"],["r","2026-08",7,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-08",7,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-08",8,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-08",8,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-08",9,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-08",9,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-08",10,"Repasse de vendas","SHEIN",12000,0,"","","not_vel_aroma","c","receita"],["r","2026-08",10,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-08",10,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-08",11,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-08",11,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-08",12,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-08",12,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-08",13,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-08",13,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-08",14,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-08",14,"Repasse de vendas","AMAZON",9500,0,"","","not_vel_aroma","c","receita"],["r","2026-08",14,"Repasse de vendas","MERCADO LIVRE",7000,0,"","","not_vel_aroma","c","receita"],["r","2026-08",14,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-08",15,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-08",15,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-08",16,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-08",16,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-08",17,"Repasse de vendas","SHEIN",12000,0,"","","not_vel_aroma","c","receita"],["r","2026-08",17,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-08",17,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-08",18,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-08",18,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-08",19,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-08",19,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-08",20,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-08",20,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-08",21,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-08",21,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-08",21,"Repasse de vendas","MERCADO LIVRE",7000,0,"","","not_vel_aroma","c","receita"],["r","2026-08",22,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-08",22,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-08",23,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-08",23,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-08",24,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-08",24,"Repasse de vendas","SHEIN",12000,0,"","","not_vel_aroma","c","receita"],["r","2026-08",24,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-08",25,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-08",25,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-08",26,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-08",26,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-08",27,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-08",27,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-08",28,"Repasse de vendas","AMAZON",9500,0,"","","not_vel_aroma","c","receita"],["r","2026-08",28,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-08",28,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-08",28,"Repasse de vendas","MERCADO LIVRE",7000,0,"","","not_vel_aroma","c","receita"],["r","2026-08",29,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-08",29,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-08",30,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-08",30,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-08",31,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-08",31,"Repasse de vendas","SHEIN",12000,0,"","","not_vel_aroma","c","receita"],["r","2026-08",31,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-09",1,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-09",1,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-09",2,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-09",2,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-09",3,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-09",3,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-09",4,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-09",4,"Repasse de vendas","MERCADO LIVRE",7000,0,"","","not_vel_aroma","c","receita"],["r","2026-09",4,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-09",5,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-09",5,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-09",6,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-09",6,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-09",7,"Repasse de vendas","SHEIN",12000,0,"","","not_vel_aroma","c","receita"],["r","2026-09",7,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-09",7,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-09",8,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-09",8,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-09",9,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-09",9,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-09",10,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-09",10,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-09",11,"Repasse de vendas","MERCADO LIVRE",7000,0,"","","not_vel_aroma","c","receita"],["r","2026-09",11,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-09",11,"Repasse de vendas","AMAZON",9500,0,"","","not_vel_aroma","c","receita"],["r","2026-09",11,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-09",12,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-09",12,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-09",13,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-09",13,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-09",14,"Repasse de vendas","SHEIN",12000,0,"","","not_vel_aroma","c","receita"],["r","2026-09",14,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-09",14,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-09",15,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-09",15,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-09",16,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-09",16,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-09",17,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-09",17,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-09",18,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-09",18,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-09",18,"Repasse de vendas","MERCADO LIVRE",7000,0,"","","not_vel_aroma","c","receita"],["r","2026-09",19,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-09",19,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-09",20,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-09",20,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-09",21,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-09",21,"Repasse de vendas","TIKTOK",1100,0,"","","not_vel_aroma","c","receita"],["r","2026-09",21,"Repasse de vendas","SHEIN",12000,0,"","","not_vel_aroma","c","receita"],["r","2026-09",22,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-09",23,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-09",24,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-09",25,"Repasse de vendas","AMAZON",9500,0,"","","not_vel_aroma","c","receita"],["r","2026-09",25,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-09",26,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-09",27,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-09",28,"Repasse de vendas","SHOPEE",4600,0,"","","not_vel_aroma","c","receita"],["r","2026-09",28,"Repasse de vendas","SHEIN",12000,0,"","","not_vel_aroma","c","receita"],["d","2025-01",3,"Salários e encargos","",1841.18,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-01",7,"Serviços de sistema de gestão","",100,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-01",7,"Compra de matéria-prima","",1740,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-01",7,"Compra de matéria-prima","",1888,1,"ENNATERRA AROMATIZADORES LTDA","","not_vel_aroma","c","custo"],["d","2025-01",8,"Luz, água e outros","",412,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-01",10,"Despesas com outros serviços contratados","",50,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-01",10,"Compra de insumos para produção","",3224.99,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-01",10,"Compra de insumos para produção","",903.96,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-01",15,"Compra de matéria-prima","",4087.07,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-01",14,"Despesas administrativas","",13.24,1,"MARIA LAURA DE MELLO LINO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-01",15,"Despesas com outros serviços contratados","",175.09,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-01",17,"Compra de mercadorias","",51,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","not_vel_aroma","c","custo"],["d","2025-01",17,"Despesas com ADS","",500,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-01",20,"Compra de matéria-prima","",4074.85,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-01",20,"Impostos sobre receita","",113.24,1,"SIMPLES NACIONAL","","not_vel_aroma","c","custo"],["d","2025-01",23,"Despesas com materiais de consumo","",25,1,"MARIA LAURA DE MELLO LINO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-01",27,"Compra de matéria-prima","",4076.08,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-01",28,"Compra de insumos para produção","",1264.13,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-01",30,"Despesas com outros serviços contratados","",200,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-01",31,"Salários e encargos","",1842.77,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-02",7,"Custo com horas extras setor de produção","",16.38,1,"MARIA LAURA DE MELLO LINO","","not_vel_aroma","c","custo"],["d","2025-02",10,"Luz, água e outros","",330,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-02",11,"Compra de mercadorias","",1411,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","not_vel_aroma","c","custo"],["d","2025-02",11,"Compra de insumos para produção","",1310,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-02",7,"Serviços de sistema de gestão","",218,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-02",12,"Compra de matéria-prima","",950.73,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-02",7,"Despesas com ADS","",340,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-02",7,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-02",13,"Despesas com outros serviços contratados","",100,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-02",14,"Despesas com outros serviços contratados","",70,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-02",17,"Despesas com outros serviços contratados","",91.44,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-02",17,"Compra de insumos para expedição","",80,1,"JOAO EDUARDO GONCALVES NOGUEIRA","","not_vel_aroma","c","custo"],["d","2025-02",19,"Compra de matéria-prima","",69.95,1,"SMART PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-02",19,"Compra de matéria-prima","",1078.96,1,"SMART PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-02",19,"Compra de matéria-prima","",950.73,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-02",20,"Impostos sobre receita","",319.6,1,"SIMPLES NACIONAL","","not_vel_aroma","c","custo"],["d","2025-02",20,"Salários e encargos","",157.23,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-02",20,"Salários e encargos","",160,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-02",25,"Compra de insumos para expedição","",96,1,"JOAO EDUARDO GONCALVES NOGUEIRA","","not_vel_aroma","c","custo"],["d","2025-02",26,"Compra de matéria-prima","",951.03,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-02",26,"Compra de ativo imobilizado","",1710,1,"PAULO CESAR LOPES (ROPE)","","not_vel_aroma","c","investimento"],["d","2025-02",28,"Despesas com outros serviços contratados","",100.89,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-03",5,"Compra de matéria-prima","",1779,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-03",5,"Salários e encargos","",1842.77,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-03",7,"Custo com horas extras setor de produção","",25,1,"MARIA LAURA DE MELLO LINO","","not_vel_aroma","c","custo"],["d","2025-03",10,"Compra de matéria-prima","",840,1,"SMART PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-03",10,"Luz, água e outros","",364.5,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-03",10,"Materiais de consumo","",50.65,1,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","custo"],["d","2025-03",11,"Compra de matéria-prima","",1346.59,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-03",11,"Despesas com outros serviços contratados","",308.7,1,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-03",10,"Materiais de limpeza e higiêne","",42.85,1,"SUPERMERCADO SÃO LUIS","","not_vel_aroma","c","despesa"],["d","2025-02",7,"Serviços de sistema de gestão","",218,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-03",10,"Bens de consumo com publicidade","",131,1,"MERCADO LIVRE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-03",10,"Despesas com ADS","",350,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-03",10,"Despesas com ADS","",500,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-03",10,"Despesas com ADS","",300,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-03",10,"Despesas com ADS","",700,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-03",12,"Despesas com outros serviços contratados","",100,1,"CLAUDOMIRO GONÇALVES NOGUEIRA - PEDREIRO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-03",10,"Compra de insumos para produção","",395.2,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2025-03",12,"Compra de insumos para produção","",1790,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-03",10,"Compra de insumos para produção","",259.06,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2025-03",10,"Compra de insumos para produção","",395.2,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2025-03",10,"Materiais de consumo","",98.97,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2025-03",14,"Compra de ativo imobilizado","",1000,1,"EDERSON ROGERIO FERREIRA - DIVISÓRIAS","","not_vel_aroma","c","investimento"],["d","2025-03",17,"Serviços de contabilidade","",426,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-03",17,"Despesas com outros serviços contratados","",98.39,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-03",17,"Compra de insumos para expedição","",843.2,1,"AURIPELL EMBALAGENS LTDA","","not_vel_aroma","c","custo"],["d","2025-03",17,"Despesas com outros serviços contratados","",50,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-03",18,"Materiais de limpeza e higiêne","",26.9,1,"LOPES SUPERMERCADOS LTDA - (PROENÇA)","","not_vel_aroma","c","despesa"],["d","2025-03",18,"Compra de matéria-prima","",1346.59,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-03",18,"Despesas com outros serviços contratados","",113.86,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-03",18,"Despesas com outros serviços contratados","",50,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-03",19,"Material de escritório","",28.94,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-03",19,"Compra de ativo imobilizado","",690,1,"JOAO EDUARDO GONCALVES NOGUEIRA","","not_vel_aroma","c","investimento"],["d","2025-03",19,"Compra de ativo imobilizado","",1000,1,"CARRAPICHO - SERRALHEIRO","","not_vel_aroma","c","investimento"],["d","2025-03",19,"Despesas com outros serviços contratados","",180,1,"EDSON MONTEIRO PLAZAS - FRETE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-03",19,"Compra de insumos para produção","",930.03,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-03",19,"Compra de insumos para produção","",923.32,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-03",19,"Compra de insumos para produção","",936.76,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-03",20,"Despesas com materiais de consumo","",37.9,1,"ORNATA DOMUS COMPANY LTDA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-03",20,"Impostos sobre receita","",379.82,1,"SIMPLES NACIONAL","","not_vel_aroma","c","custo"],["d","2025-03",20,"Outros gastos com publicidade","",15,1,"A COSTUREIRA","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-03",20,"Salários e encargos","",160,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-03",20,"Salários e encargos","",157.23,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-03",21,"Compra de mercadorias","",1700,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","not_vel_aroma","c","custo"],["d","2025-03",21,"Custo com horas extras setor de produção","",300,1,"PEDRO HENRIQUE NOGUEIRA","","not_vel_aroma","c","custo"],["d","2025-03",21,"Despesas com outros serviços contratados","",400,1,"ADELMO ISAAC GALDINO - ENGENHEIRO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-03",24,"Compra de ativo imobilizado","",720,1,"LUIZ GUSTAVO DIAS MOREIRA - GUTO","","not_vel_aroma","c","investimento"],["d","2025-03",24,"Despesas com outros serviços contratados","",280,1,"LUIZ GUSTAVO DIAS MOREIRA - GUTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-03",25,"Compra de matéria-prima","",1148.91,1,"SMART PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-03",25,"Compra de matéria-prima","",1346.99,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-03",25,"Compra de matéria-prima","",2668.5,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-03",28,"Despesas com materiais de consumo","",160,1,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-03",28,"Despesas com outros serviços contratados","",150,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-03",28,"Despesas com outros serviços contratados","",150,1,"PLAY - SOLUÇÕES DIGITAIS - IGOR","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-03",31,"Despesas com outros serviços contratados","",361.5,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-04",1,"Despesas com outros serviços contratados","",114.03,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-04",1,"Outros gastos com publicidade","",25,1,"NASSAR FERREIRA - HOPÇÃO","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-04",1,"Outros gastos com publicidade","",72.38,1,"NASSAR FERREIRA - HOPÇÃO","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-04",1,"Outros gastos com publicidade","",14,1,"SHOPPING SAULIN","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-04",3,"Compra de ativo imobilizado","",1800,1,"JOSE LUIZ MARINO JUNIOR","","not_vel_aroma","c","investimento"],["d","2025-04",4,"Custo com horas extras setor de produção","",154.62,1,"MARIA LAURA DE MELLO LINO","","not_vel_aroma","c","custo"],["d","2025-04",4,"Salários e encargos","",548.69,1,"CLAUDETE GONÇALVES NOGUEIRA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-04",4,"Salários e encargos","",2006.57,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-04",7,"Compra de matéria-prima","",2047.5,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-04",7,"Compra de insumos para produção","",2116.63,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","not_vel_aroma","c","custo"],["d","2025-04",7,"Outros gastos com publicidade","",4.16,1,"LOPES SUPERMERCADOS LTDA - (PROENÇA)","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-04",8,"Serviços de sistema de gestão","",218,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-04",9,"Materiais de limpeza e higiêne","",19.96,1,"LOPES SUPERMERCADOS LTDA - (PROENÇA)","","not_vel_aroma","c","despesa"],["d","2025-04",9,"Compra de matéria-prima","",2224.43,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-04",10,"Despesas com aluguéis para uso","",54.01,1,"OUTSIDE THE BOX LTDA","Despesas com aluguéis","not_vel_aroma","c","despesa"],["d","2025-04",10,"Despesas com materiais de consumo","",1049.5,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-04",10,"Luz, água e outros","",69,1,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-04",11,"Despesas com outros serviços contratados","",150,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-04",10,"Serviços de sistema de gestão","",218,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-04",10,"Despesas com materiais de consumo","",47.65,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-04",10,"Despesas com materiais de consumo","",101.91,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-04",10,"Despesas com materiais de consumo","",40,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-04",10,"Despesas com materiais de consumo","",55.58,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-04",10,"Despesas com materiais de consumo","",121.91,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-04",10,"Compra de insumos para expedição","",175.6,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2025-04",10,"Despesas com ADS","",1000,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-04",10,"Despesas com ADS","",200,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-04",10,"Despesas com ADS","",350,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-04",10,"Compra de ativo intangível","",140.96,1,"HOSTGATOR BRASIL LTDA","","not_vel_aroma","c","investimento"],["d","2025-04",10,"Compra de ativo imobilizado","",169,1,"MERCADO LIVRE","","not_vel_aroma","c","investimento"],["d","2025-04",10,"Outros gastos com publicidade","",92.6,1,"A COSTUREIRA","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-04",14,"Salários e encargos","",651.31,1,"CLAUDETE GONÇALVES NOGUEIRA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-04",15,"Serviços de contabilidade","",426,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-04",16,"Serviços de contabilidade","",1000,1,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-04",15,"Custo com horas extras setor de produção","",39.38,1,"MARIA LAURA DE MELLO LINO","","not_vel_aroma","c","custo"],["d","2025-04",15,"Compra de ativo imobilizado","",700,1,"EDERSON ROGERIO FERREIRA - DIVISÓRIAS","","not_vel_aroma","c","investimento"],["d","2025-04",15,"Despesas com outros serviços contratados","",200,1,"JOSE LUIZ MARINO JUNIOR","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-04",15,"Despesas com outros serviços contratados","",339.36,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-04",15,"Compra de insumos para produção","",18,1,"ALINE C. E. DE OLIVEIRA","","not_vel_aroma","c","custo"],["d","2025-04",15,"Outros gastos com publicidade","",40.08,1,"NASSAR FERREIRA - HOPÇÃO","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-04",16,"Compra de matéria-prima","",2224.43,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-04",16,"Compra de insumos para produção","",839.68,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-04",17,"Compra de insumos para expedição","",184.95,1,"VALDERI FERREIRA BARBOSA JUNIOR - IMPAKTO VISUAL","","not_vel_aroma","c","custo"],["d","2025-04",17,"Salários e encargos","",173.43,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-04",17,"Salários e encargos","",174.4,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-04",22,"Compra de ativo imobilizado","",460,1,"CARRAPICHO - SERRALHEIRO","","not_vel_aroma","c","investimento"],["d","2025-04",22,"Despesas com frete para devolução e reenvio","",17.38,1,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-04",22,"Despesas com materiais de consumo","",27.69,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-04",22,"Compra de matéria-prima","",1098.04,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-04",22,"Impostos sobre receita","",275.08,1,"SIMPLES NACIONAL","","not_vel_aroma","c","custo"],["d","2025-04",23,"Compra de matéria-prima","",2225.11,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-04",23,"Luz, água e outros","",134.04,1,"ELEKTRO REDES S.A.","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-04",24,"Compra de matéria-prima","",1148.91,1,"SMART PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-04",24,"Compra de ativo intangível","",142,1,"INSTITUTO NACIONAL DA PROPRIEDADE INDUSTRIAL","","not_vel_aroma","c","investimento"],["d","2025-04",24,"Despesas com outros serviços contratados","",800,1,"EDERSON ROGERIO FERREIRA - DIVISÓRIAS","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-04",28,"Compra de insumos para produção","",561.6,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-04",28,"Luz, água e outros","",138.56,1,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-04",29,"Compra de matéria-prima","",1098.04,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-04",29,"Outros gastos com publicidade","",130,1,"ROBERTO SORVETES CUSSY LTDA","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-04",29,"Outros gastos com publicidade","",279.73,1,"BOLA SETE RESTAURANTE ARACATUBA LTDA","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-04",30,"Despesas com materiais de consumo","",130,1,"VALNEI ALESSANDRO DE OLIVEIRA - ELETRICISTA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-04",24,"Compra de mercadorias","",187,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","not_vel_aroma","c","custo"],["d","2025-04",30,"Despesas com outros serviços contratados","",415.37,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-04",30,"Despesas com outros serviços contratados","",180,1,"VALNEI ALESSANDRO DE OLIVEIRA - ELETRICISTA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-04",24,"Despesas com outros serviços contratados","",1202.77,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-05",2,"Compra de insumos para expedição","",1696.7,1,"AURIPELL EMBALAGENS LTDA","","not_vel_aroma","c","custo"],["d","2025-05",5,"Materiais de limpeza e higiêne","",7.09,1,"LOPES SUPERMERCADOS LTDA - (PROENÇA)","","not_vel_aroma","c","despesa"],["d","2025-05",5,"Despesas com materiais de consumo","",20,1,"CLIMAK INDUSTRIA E COMERCIO DE MAQUINAS E EQUIPAMENTOS LTDA - EDERMAK","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-05",5,"Despesas com outros serviços contratados","",70,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-05",6,"Compra de matéria-prima","",1747.9,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-05",6,"Compra de matéria-prima","",1098.37,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-05",6,"Despesas com outros serviços contratados","",114,1,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-05",7,"Compra de matéria-prima","",2091,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-05",7,"Custo com horas extras setor de produção","",81.81,1,"LUIZ ANTONIO RONDINI VIEIRA","","not_vel_aroma","c","custo"],["d","2025-05",7,"Custo com horas extras setor de produção","",70.29,1,"MARIA LAURA DE MELLO LINO","","not_vel_aroma","c","custo"],["d","2025-05",7,"Outros gastos com publicidade","",40,1,"LOJA KARIBU","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-05",7,"Salários e encargos","",2006.57,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-05",7,"Salários e encargos","",1600,1,"LUIZ ANTONIO RONDINI VIEIRA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-05",8,"Serviços de sistema de gestão","",218,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-05",8,"Reembolsos por fora de marketplaces","",13.19,1,"REEMBOLSOS","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-05",8,"Compra de insumos para produção","",850,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-05",12,"Despesas com aluguéis para uso","",54.01,1,"PREFEITURA MUNICIPAL DE AURIFLAMA","Despesas com aluguéis","not_vel_aroma","c","despesa"],["d","2025-05",10,"Despesas com aluguéis para uso","",2500,1,"CONDE INTERMEDIACAO DE NEGOCIOS LTDA","Despesas com aluguéis","not_vel_aroma","c","despesa"],["d","2025-05",12,"Despesas com materiais de consumo","",202.45,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-05",12,"Luz, água e outros","",69,1,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-05",12,"Serviços de sistema de gestão","",24.99,1,"SERASA S.A.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-05",12,"Reembolsos por fora de marketplaces","",13.19,1,"REEMBOLSOS","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-05",12,"Reembolsos por fora de marketplaces","",12.95,1,"REEMBOLSOS","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-05",12,"Despesas com materiais de consumo","",55.57,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-05",12,"Despesas com materiais de consumo","",40,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-05",12,"Despesas com materiais de consumo","",33.2,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-05",12,"Despesas com materiais de consumo","",47.64,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-05",12,"Despesas com materiais de consumo","",19.88,1,"LOPES SUPERMERCADOS LTDA - (PROENÇA)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-05",12,"Despesas com materiais de consumo","",270.76,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-05",12,"Despesas com materiais de consumo","",35.88,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-05",12,"Compra de insumos para expedição","",230,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-05",12,"Despesas com ADS","",200,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-05",12,"Despesas com ADS","",150,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-05",12,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-05",12,"Compra de ativo imobilizado","",150.91,1,"MERCADO LIVRE","","not_vel_aroma","c","investimento"],["d","2025-05",12,"Compra de ativo imobilizado","",169,1,"MERCADO LIVRE","","not_vel_aroma","c","investimento"],["d","2025-05",12,"Compra de ativo imobilizado","",434.9,1,"LEROY MERLIN COMPANHIA BRASILEIRA DE BRICOLAGEM","","not_vel_aroma","c","investimento"],["d","2025-05",12,"Compra de insumos para produção","",149.9,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2025-05",12,"Compra de insumos para produção","",119.37,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2025-05",12,"Compra de insumos para produção","",148.62,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2025-05",12,"Outros gastos com publicidade","",15.75,1,"A COSTUREIRA","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-05",12,"Outros gastos com publicidade","",5.99,1,"SHOPPING SAULIN","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-05",13,"Compra de matéria-prima","",1747.9,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-05",14,"Compra de insumos para expedição","",416.4,1,"AURIPELL EMBALAGENS LTDA","","not_vel_aroma","c","custo"],["d","2025-05",14,"Compra de insumos para expedição","",1372.95,1,"AURIPELL EMBALAGENS LTDA","","not_vel_aroma","c","custo"],["d","2025-05",14,"Compra de insumos para produção","",2378.8,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-05",15,"Serviços de contabilidade","",1000,1,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-05",15,"Serviços de contabilidade","",426,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-05",15,"Despesas com outros serviços contratados","",160.33,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-05",19,"Materiais de limpeza e higiêne","",24.18,1,"LOPES SUPERMERCADOS LTDA - (PROENÇA)","","not_vel_aroma","c","despesa"],["d","2025-05",19,"Despesas com materiais de consumo","",4,1,"ANGELICA PRESENTES","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-05",19,"Compra de ativo imobilizado","",460,1,"CARRAPICHO - SERRALHEIRO","","not_vel_aroma","c","investimento"],["d","2025-05",20,"Reembolsos por fora de marketplaces","",32.99,1,"REEMBOLSOS","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-05",19,"Despesas com frete para devolução e reenvio","",142.2,1,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-05",19,"Despesas com frete para devolução e reenvio","",874.65,1,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-05",20,"Compra de matéria-prima","",1748.43,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-05",19,"Compra de mercadorias","",580.05,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","not_vel_aroma","c","custo"],["d","2025-05",20,"Impostos sobre receita","",178.33,1,"SIMPLES NACIONAL","","not_vel_aroma","c","custo"],["d","2025-05",19,"Outros gastos com publicidade","",130,1,"JONATHAN ROQUE DE SOUZA","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-05",20,"Salários e encargos","",174.4,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-05",20,"Salários e encargos","",173.43,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-05",21,"Despesas com frete para devolução e reenvio","",453.54,1,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-05",21,"Despesas com outros serviços contratados","",50,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-05",22,"Luz, água e outros","",127.83,1,"ELEKTRO REDES S.A.","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-05",26,"Reembolsos por fora de marketplaces","",23.92,1,"REEMBOLSOS","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-05",26,"Luz, água e outros","",138.56,1,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-05",27,"Compra de matéria-prima","",1623.07,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-05",30,"Despesas com outros serviços contratados","",430.61,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-05",30,"Despesas com alimentação","",84,1,"ORNATA DOMUS COMPANY LTDA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-06",2,"Despesas com outros serviços contratados","",1284.05,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-06",3,"Materiais de limpeza e higiêne","",11.99,1,"LOPES SUPERMERCADOS LTDA - (PROENÇA)","","not_vel_aroma","c","despesa"],["d","2025-06",3,"Compra de matéria-prima","",1364,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-06",3,"Compra de matéria-prima","",1623.07,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-06",5,"Compra de matéria-prima","",1692.15,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-06",6,"Despesas com outros serviços contratados","",120,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-06",6,"Salários e encargos","",2000,1,"LUIZ ANTONIO RONDINI VIEIRA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-06",6,"Salários e encargos","",2006.57,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-06",9,"Despesas com outros serviços contratados","",50,1,"FELIPE PEREIRA RUIZ CAVALCANTE - FRETE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-06",9,"Compra de insumos para produção","",320,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-06",10,"Despesas com aluguéis para uso","",2500,1,"CONDE INTERMEDIACAO DE NEGOCIOS LTDA","Despesas com aluguéis","not_vel_aroma","c","despesa"],["d","2025-06",10,"Despesas com aluguéis para uso","",54.01,1,"PREFEITURA MUNICIPAL DE AURIFLAMA","Despesas com aluguéis","not_vel_aroma","c","despesa"],["d","2025-06",11,"Despesas com materiais de consumo","",45.76,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-06",10,"Compra de matéria-prima","",1623.55,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-06",10,"Luz, água e outros","",69,1,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-06",10,"Serviços de sistema de gestão","",24.91,1,"SERASA S.A.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-06",10,"Serviços de sistema de gestão","",91.57,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-06",10,"Despesas com materiais de consumo","",33.2,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-06",10,"Despesas com materiais de consumo","",35.88,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-06",10,"Despesas com materiais de consumo","",55.57,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-06",10,"Despesas com materiais de consumo","",156.34,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-06",10,"Despesas com materiais de consumo","",40,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-06",12,"Compra de matéria-prima","",1692.15,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-06",10,"Despesas com ADS","",200,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-06",10,"Despesas com ADS","",200,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-06",10,"Despesas com ADS","",200,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-06",10,"Despesas com ADS","",50,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-06",10,"Despesas com ADS","",95,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-06",10,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-06",10,"Compra de ativo imobilizado","",169,1,"MERCADO LIVRE","","not_vel_aroma","c","investimento"],["d","2025-06",10,"Impostos e Taxas","",3.1,1,"UPSELLER TECHNOLOGY LTDA","Despesas Financeiras","not_vel_aroma","c","despesa"],["d","2025-06",10,"Outros gastos com publicidade","",74.8,1,"A COSTUREIRA","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-06",10,"Outros gastos com publicidade","",10,1,"LOJA KARIBU","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-06",16,"Serviços de contabilidade","",426,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-06",16,"Compra de insumos para expedição","",3626.2,1,"AURIPELL EMBALAGENS LTDA","","not_vel_aroma","c","custo"],["d","2025-06",16,"Despesas com alimentação","",28,1,"ORNATA DOMUS COMPANY LTDA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-06",17,"Materiais de limpeza e higiêne","",22.99,1,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","despesa"],["d","2025-06",17,"Despesas com materiais de consumo","",10.37,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-06",17,"Despesas com materiais de consumo","",47.52,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-06",17,"Bens de consumo com publicidade","",14,1,"ALINE C. E. DE OLIVEIRA","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-06",18,"Despesas com materiais de consumo","",54,1,"ORNATA DOMUS COMPANY LTDA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-06",18,"Outras despesas","",10,1,"MARIA LAURA DE MELLO LINO","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2025-06",20,"Compra de matéria-prima","",1692.66,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-06",20,"Serviços contratados para marketing","",700,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-06",20,"Despesas com materiais de consumo","",6.99,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-06",18,"Serviços de contabilidade","",1000,1,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-06",20,"Impostos sobre receita","",162.51,1,"SIMPLES NACIONAL","","not_vel_aroma","c","custo"],["d","2025-06",23,"Despesas com outros serviços contratados","",1682.17,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-06",20,"Salários e encargos","",173.43,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-06",20,"Salários e encargos","",174.4,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-06",23,"Despesas com frete para devolução e reenvio","",182.26,1,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-06",23,"Despesas com materiais de consumo","",29.97,1,"ORNATA DOMUS COMPANY LTDA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-06",24,"Luz, água e outros","",118.19,1,"ELEKTRO REDES S.A.","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-06",26,"Vestuário de trabalho","",611.25,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-06",27,"Compra de insumos para produção","",1700,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-06",30,"Despesas com aluguéis para uso","",1850,1,"ORNATA DOMUS COMPANY LTDA","Despesas com aluguéis","not_vel_aroma","c","despesa"],["d","2025-06",30,"Impostos e Taxas","",133.46,1,"SECRETARIA DA FAZENDA E PLANEJAMENTO","Despesas Financeiras","not_vel_aroma","c","despesa"],["d","2025-06",30,"Despesas com outros serviços contratados","",326.08,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-07",1,"Compra de matéria-prima","",1033.47,1,"SMART PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-07",1,"Compra de matéria-prima","",1280,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-07",2,"Despesas com outros serviços contratados","",300,1,"RODRIGO NOGUEIRA PORTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-07",3,"Compra de matéria-prima","",519.19,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-07",16,"Luz, água e outros","",148.8,1,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-07",4,"Salários e encargos","",2006.57,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-07",4,"Salários e encargos","",2000,1,"LUIZ ANTONIO RONDINI VIEIRA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-07",7,"Despesas com frete para compra de materiais","",113.15,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-07",7,"Despesas com frete para compra de materiais","",100,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-07",10,"Despesas com aluguéis para uso","",2500,1,"CONDE INTERMEDIACAO DE NEGOCIOS LTDA","Despesas com aluguéis","not_vel_aroma","c","despesa"],["d","2025-07",10,"Despesas com aluguéis para uso","",54.01,1,"PREFEITURA MUNICIPAL DE AURIFLAMA","Despesas com aluguéis","not_vel_aroma","c","despesa"],["d","2025-07",10,"Despesas com materiais de consumo","",12,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-07",10,"Despesas com materiais de consumo","",10,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-07",10,"Compra de matéria-prima","",519.19,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-07",10,"Luz, água e outros","",69,1,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-07",10,"Despesas com alimentação","",56,1,"ORNATA DOMUS COMPANY LTDA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-07",14,"Serviços de sistema de gestão","",24.91,1,"SERASA S.A.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-07",14,"Serviços de sistema de gestão","",218,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-07",14,"Serviços de sistema de gestão","",40.94,1,"TINY ERP","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-07",14,"Serviços de sistema de gestão","",149,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-07",14,"Despesas com materiais de consumo","",35.88,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-07",14,"Despesas com materiais de consumo","",33.2,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-07",14,"Despesas com materiais de consumo","",55.57,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-07",14,"Despesas com materiais de consumo","",40,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-07",14,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-07",14,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-07",14,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-07",14,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-07",14,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-07",14,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-07",14,"Compra de ativo imobilizado","",169,1,"MERCADO LIVRE","","not_vel_aroma","c","investimento"],["d","2025-07",14,"Compra de insumos para produção","",103,1,"DECOR COMERCIO DE ETIQUETAS E ADESIVOS LTDA","","not_vel_aroma","c","custo"],["d","2025-07",14,"Compra de matéria-prima","",2332,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-07",14,"Compra de insumos para expedição","",550,1,"BINHO - TOTAL CARTUCHO","","not_vel_aroma","c","custo"],["d","2025-07",15,"Compra de matéria-prima","",250.56,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","not_vel_aroma","c","custo"],["d","2025-07",15,"Serviços de contabilidade","",426,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-07",15,"Compra de mercadorias","",935,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","not_vel_aroma","c","custo"],["d","2025-07",15,"Compra de mercadorias","",833,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","not_vel_aroma","c","custo"],["d","2025-07",15,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-07",15,"Despesas com alimentação","",28,1,"ORNATA DOMUS COMPANY LTDA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-07",17,"Despesas com materiais de consumo","",20,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-07",17,"Compra de matéria-prima","",519.35,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-07",17,"Compra de insumos para expedição","",743.6,1,"AURIPELL EMBALAGENS LTDA","","not_vel_aroma","c","custo"],["d","2025-07",17,"Outras despesas","",8,1,"NASSAR FERREIRA - HOPÇÃO","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2025-07",18,"Despesas com frete para compra de materiais","",100,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-07",18,"Serviços de contabilidade","",1000,1,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-07",18,"Outras despesas","",10,1,"JONATHAN ROQUE DE SOUZA","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2025-07",18,"Salários e encargos","",173.43,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-07",18,"Salários e encargos","",174.4,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-07",21,"Serviços contratados para marketing","",700,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-07",21,"Despesas com frete para devolução e reenvio","",134.14,1,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-07",21,"Impostos sobre receita","",174.26,1,"SIMPLES NACIONAL","","not_vel_aroma","c","custo"],["d","2025-07",21,"Despesas com outros serviços contratados","",1682.17,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-07",23,"Despesas com frete para compra de materiais","",50,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-07",23,"Compra de insumos para expedição","",270,1,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","custo"],["d","2025-07",23,"Luz, água e outros","",116.26,1,"ELEKTRO REDES S.A.","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-07",24,"Luz, água e outros","",138.56,1,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-07",25,"Despesas com frete para compra de materiais","",50,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-07",30,"Despesas com frete para compra de materiais","",191.43,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-08",5,"Vestuário de trabalho","",611.25,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-08",5,"Custo com horas extras setor de produção","",32.13,1,"LUIZ ANTONIO RONDINI VIEIRA","","not_vel_aroma","c","custo"],["d","2025-08",6,"Despesas com materiais de consumo","",62,1,"SHOPPING SAULIN","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-08",5,"Salários e encargos","",1612.75,1,"LUIZ ANTONIO RONDINI VIEIRA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-08",5,"Salários e encargos","",2006.57,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-08",8,"Despesas com frete para compra de materiais","",70,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-08",10,"Despesas com aluguéis para uso","",2500,1,"CONDE INTERMEDIACAO DE NEGOCIOS LTDA","Despesas com aluguéis","not_vel_aroma","c","despesa"],["d","2025-08",11,"Despesas com aluguéis para uso","",54.01,1,"PREFEITURA MUNICIPAL DE AURIFLAMA","Despesas com aluguéis","not_vel_aroma","c","despesa"],["d","2025-08",10,"Despesas com materiais de consumo","",50,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-08",11,"Luz, água e outros","",69,1,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-08",11,"Despesas com alimentação","",28,1,"ORNATA DOMUS COMPANY LTDA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-08",11,"Serviços de sistema de gestão","",149,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-08",11,"Serviços de sistema de gestão","",40.9,1,"TINY ERP","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-08",11,"Serviços de sistema de gestão","",218,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-08",11,"Serviços de sistema de gestão","",24.91,1,"SERASA S.A.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-08",11,"Despesas com materiais de consumo","",55.57,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-08",11,"Despesas com materiais de consumo","",49.02,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-08",11,"Despesas com materiais de consumo","",34.14,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-08",11,"Despesas com materiais de consumo","",40,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-08",11,"Despesas com materiais de consumo","",19,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-08",11,"Despesas administrativas","",30,1,"CLARO S.A.","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-08",11,"Compra de mercadorias","",213.81,1,"PRINTI - FM IMPRESSOS PERSONALIZADOS LTDA.","","not_vel_aroma","c","custo"],["d","2025-08",12,"Compra de mercadorias","",272,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","not_vel_aroma","c","custo"],["d","2025-08",11,"Despesas com ADS","",590,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-08",11,"Despesas com ADS","",223,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-08",11,"Despesas com ADS","",500,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-08",11,"Outras despesas","",2,1,"AGROBOI","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2025-08",11,"Compra de ativo imobilizado","",169,1,"MERCADO LIVRE","","not_vel_aroma","c","investimento"],["d","2025-08",11,"Compra de insumos para produção","",103,1,"DECOR COMERCIO DE ETIQUETAS E ADESIVOS LTDA","","not_vel_aroma","c","custo"],["d","2025-08",11,"Outros gastos com publicidade","",20,1,"A COSTUREIRA","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-08",11,"Outros gastos com publicidade","",31.14,1,"MERCADO LIVRE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-08",11,"Outros gastos com publicidade","",36,1,"SHOPPING SAULIN","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-08",13,"Compra de matéria-prima","",1700,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-08",14,"Compra de matéria-prima","",1152.36,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-08",15,"Despesas administrativas","",10.69,1,"LOPES SUPERMERCADOS LTDA - (PROENÇA)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-08",15,"Compra de matéria-prima","",250.56,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","not_vel_aroma","c","custo"],["d","2025-08",15,"Serviços de contabilidade","",426,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-08",15,"Serviços de contabilidade","",1000,1,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-08",15,"Despesas com rescisões trabalhistas","",688.98,1,"LUIZ ANTONIO RONDINI VIEIRA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-08",18,"Despesas com frete para compra de materiais","",504.99,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-08",18,"Compra de insumos para expedição","",626.6,1,"AURIPELL EMBALAGENS LTDA","","not_vel_aroma","c","custo"],["d","2025-08",18,"Despesas com outros serviços contratados","",1132.7,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-08",20,"Serviços contratados para marketing","",700,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-08",20,"Bens de consumo com publicidade","",20,1,"ALINE C. E. DE OLIVEIRA","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-08",21,"Compra de matéria-prima","",310,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","not_vel_aroma","c","custo"],["d","2025-08",20,"Impostos sobre receita","",250.75,1,"SIMPLES NACIONAL","","not_vel_aroma","c","custo"],["d","2025-08",20,"Direitos a receber","",50,1,"SICREDI","","not_vel_aroma","c","investimento"],["d","2025-08",20,"Despesas com alimentação","",31.99,1,"LOPES SUPERMERCADOS LTDA - (PROENÇA)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-08",20,"Salários e encargos","",174.4,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-08",20,"Salários e encargos","",173.43,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-08",21,"Despesas com frete para devolução e reenvio","",266.6,1,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-08",21,"Compra de matéria-prima","",1152.36,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-08",21,"Compra de insumos para expedição","",158,1,"VALDERI FERREIRA BARBOSA JUNIOR - IMPAKTO VISUAL","","not_vel_aroma","c","custo"],["d","2025-08",21,"Luz, água e outros","",108.28,1,"ELEKTRO REDES S.A.","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-08",22,"Despesas com frete para compra de materiais","",40,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-08",25,"Serviços de sistema de gestão","",149,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-08",26,"Compra de matéria-prima","",2047.5,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-08",26,"Luz, água e outros","",142.75,1,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-08",27,"Bonificações, Brindes e Festividades","",220,1,"ARSENAL MODA PARA HOMENS","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-08",28,"Compra de matéria-prima","",1152.71,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-08",28,"Compra de mercadorias","",2010,1,"ENNATERRA AROMATIZADORES LTDA","","not_vel_aroma","c","custo"],["d","2025-08",31,"Despesas com frete para compra de materiais","",145.69,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-09",2,"Despesas com frete para compra de materiais","",140,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-09",2,"Compra de matéria-prima","",1010.1,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-09",3,"Despesas com frete para compra de materiais","",60,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-09",3,"Compra de matéria-prima","",202.48,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2025-09",3,"Outras despesas","",17.84,1,"MERCADO LIVRE","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2025-09",4,"Despesas administrativas","",27.69,1,"LOPES SUPERMERCADOS LTDA - (PROENÇA)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-09",4,"Custo com horas extras setor de produção","",160,1,"PEDRO HENRIQUE NOGUEIRA","","not_vel_aroma","c","custo"],["d","2025-09",4,"Custo com horas extras setor de produção","",80,1,"GRAZIELA DE FATIMA AUGUSTO LINO","","not_vel_aroma","c","custo"],["d","2025-09",4,"Outras despesas","",28.85,1,"MERCADO LIVRE","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2025-09",5,"Compra de matéria-prima","",1389.6,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2025-09",5,"Salários e encargos","",2006.57,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-09",9,"Compra de matéria-prima","",1010.1,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-09",10,"Despesas com frete para compra de materiais","",50,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-09",10,"Despesas com aluguéis para uso","",2500,1,"CONDE INTERMEDIACAO DE NEGOCIOS LTDA","Despesas com aluguéis","not_vel_aroma","c","despesa"],["d","2025-09",10,"Despesas com aluguéis para uso","",54.01,1,"PREFEITURA MUNICIPAL DE AURIFLAMA","Despesas com aluguéis","not_vel_aroma","c","despesa"],["d","2025-09",10,"Despesas com materiais de consumo","",151,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-09",10,"Compra de matéria-prima","",1033.47,1,"SMART PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-09",10,"Compra de matéria-prima","",330.4,1,"MUNDIAL QUIMICA DO BRASIL LTDA","","not_vel_aroma","c","custo"],["d","2025-09",10,"Compra de matéria-prima","",320,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2025-09",10,"Compra de matéria-prima","",2340,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-09",10,"Compra de insumos para expedição","",239.8,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2025-09",10,"Compra de insumos para expedição","",152.7,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2025-09",10,"Despesas com outros serviços contratados","",500,1,"JAIR MACIEL DE OLIVEIRA - PINTOR","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-09",10,"Luz, água e outros","",69,1,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-09",10,"Despesas com alimentação","",28,1,"ORNATA DOMUS COMPANY LTDA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-09",10,"Despesas com alimentação","",73.5,1,"ORNATA DOMUS COMPANY LTDA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-09",11,"Compra de insumos para expedição","",166,1,"VALDERI FERREIRA BARBOSA JUNIOR - IMPAKTO VISUAL","","not_vel_aroma","c","custo"],["d","2025-09",11,"Compra de ativo imobilizado","",977.8,1,"BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR","","not_vel_aroma","c","investimento"],["d","2025-09",8,"Serviços de sistema de gestão","",24.91,1,"SERASA S.A.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-09",8,"Serviços de sistema de gestão","",40.9,1,"TINY ERP","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-09",8,"Serviços de sistema de gestão","",218,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-09",8,"Despesas com materiais de consumo","",40,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-09",8,"Despesas com materiais de consumo","",34.14,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-09",8,"Despesas com materiais de consumo","",55.57,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-09",8,"Despesas administrativas","",30,1,"CLARO S.A.","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-09",8,"Compra de matéria-prima","",376.79,1,"TILIFORM INDUSTRIA GRAFICA - EM RECUPERACAO JUDICIAL","","not_vel_aroma","c","custo"],["d","2025-09",8,"Compra de mercadorias","",213.8,1,"PRINTI - FM IMPRESSOS PERSONALIZADOS LTDA.","","not_vel_aroma","c","custo"],["d","2025-09",12,"Compra de insumos para expedição","",1349.4,1,"AURIPELL EMBALAGENS LTDA","","not_vel_aroma","c","custo"],["d","2025-09",8,"Despesas com ADS","",470,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-09",8,"Despesas com ADS","",700,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-09",8,"Despesas com ADS","",500,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-09",8,"Despesas com ADS","",500,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-09",8,"Despesas com ADS","",500,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-09",8,"Compra de ativo imobilizado","",169,1,"MERCADO LIVRE","","not_vel_aroma","c","investimento"],["d","2025-09",15,"Despesas com frete para compra de materiais","",113.18,1,"FLASHMEN PASSAGENS E ENCOMENDAS LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-09",15,"Despesas com frete para compra de materiais","",267.96,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-09",15,"Despesas com frete para compra de materiais","",250,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-09",15,"Despesas administrativas","",22,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-09",15,"Compra de matéria-prima","",250.56,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","not_vel_aroma","c","custo"],["d","2025-09",15,"Compra de matéria-prima","",975.11,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-09",15,"Serviços de contabilidade","",426,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-09",15,"Serviços de contabilidade","",1000,1,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-09",15,"Despesas com outros serviços contratados","",961.12,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-09",8,"Despesas com rescisões trabalhistas","",688.97,1,"LUIZ ANTONIO RONDINI VIEIRA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-09",16,"Compra de matéria-prima","",1010.4,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-09",17,"Despesas com frete para compra de materiais","",100,1,"FELIPE PEREIRA RUIZ CAVALCANTE - FRETE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-09",19,"Compra de insumos para expedição","",505.8,1,"AURIPELL EMBALAGENS LTDA","","not_vel_aroma","c","custo"],["d","2025-09",19,"Salários e encargos","",174.4,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-09",19,"Salários e encargos","",173.43,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-09",22,"Serviços contratados para marketing","",700,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-09",22,"Despesas com frete para devolução e reenvio","",19.6,1,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-09",22,"Despesas com frete para compra de materiais","",50,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-09",22,"Compra de matéria-prima","",973.04,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","not_vel_aroma","c","custo"],["d","2025-09",22,"Compra de matéria-prima","",975.11,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-09",22,"Impostos sobre receita","",447.14,1,"SIMPLES NACIONAL","","not_vel_aroma","c","custo"],["d","2025-09",23,"Serviços de sistema de gestão","",21,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-09",23,"Compra de matéria-prima","",3378,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-09",23,"Compra de mercadorias","",255,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","not_vel_aroma","c","custo"],["d","2025-09",23,"Luz, água e outros","",152.48,1,"ELEKTRO REDES S.A.","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-09",23,"Despesas com alimentação","",6.99,1,"LOPES SUPERMERCADOS LTDA - (PROENÇA)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-09",23,"Despesas com alimentação","",31.99,1,"LOPES SUPERMERCADOS LTDA - (PROENÇA)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-09",23,"Salários e encargos","",20,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-09",24,"Luz, água e outros","",138.56,1,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-09",29,"Compra de insumos para expedição","",370.92,1,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","custo"],["d","2025-09",29,"Despesas com frete para compra de materiais","",70,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-09",29,"Despesas com frete para compra de materiais","",100,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-09",29,"Despesas com frete para compra de materiais","",230,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-09",29,"Compra de matéria-prima","",975.41,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-09",29,"Compra de matéria-prima","",1177.05,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","not_vel_aroma","c","custo"],["d","2025-09",29,"Compra de matéria-prima","",1033.47,1,"SMART PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-09",30,"Despesas com frete para compra de materiais","",334.05,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-09",30,"Compra de insumos para expedição","",126,1,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","custo"],["d","2025-10",1,"Compra de insumos para expedição","",630,1,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","custo"],["d","2025-10",2,"Despesas com materiais de consumo","",25,1,"SHALON PAPELARIA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-10",2,"Despesas com materiais de consumo","",6.65,1,"SHALON PAPELARIA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-10",3,"Despesas com frete para compra de materiais","",113.18,1,"MARIA LAURA DE MELLO LINO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-10",6,"Custo com horas extras setor de produção","",400,1,"TALYSSON HENRIQUE MACHADO DOS SANTOS","","not_vel_aroma","c","custo"],["d","2025-10",6,"Custo com horas extras setor de produção","",227.63,1,"LUIZ ANTONIO RONDINI VIEIRA","","not_vel_aroma","c","custo"],["d","2025-10",6,"Direitos a receber","",270,1,"UPSELLER TECHNOLOGY LTDA","","not_vel_aroma","c","investimento"],["d","2025-10",6,"Salários e encargos","",2006.57,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-10",6,"Salários e encargos","",1134.67,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-10",7,"Despesas com frete para compra de materiais","",70,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-10",7,"Compra de matéria-prima","",328,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-10",7,"Compra de matéria-prima","",731.64,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-10",8,"Despesas com frete para compra de materiais","",70,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-10",8,"Compra de matéria-prima","",1700,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-10",8,"Compra de matéria-prima","",1289.31,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-10",8,"Compra de matéria-prima","",595.42,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-10",8,"Compra de matéria-prima","",5630,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-10",8,"Compra de insumos para expedição","",121,1,"VALDERI FERREIRA BARBOSA JUNIOR - IMPAKTO VISUAL","","not_vel_aroma","c","custo"],["d","2025-10",10,"Despesas com aluguéis para uso","",54.01,1,"PREFEITURA MUNICIPAL DE AURIFLAMA","Despesas com aluguéis","not_vel_aroma","c","despesa"],["d","2025-10",10,"Despesas com aluguéis para uso","",2500,1,"CONDE INTERMEDIACAO DE NEGOCIOS LTDA","Despesas com aluguéis","not_vel_aroma","c","despesa"],["d","2025-10",10,"Despesas com materiais de consumo","",110,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-10",10,"Despesas com materiais de consumo","",88.49,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-10",10,"Despesas com materiais de consumo","",66.5,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-10",10,"Despesas com materiais de consumo","",72,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-10",10,"Compra de mercadorias","",1479,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","not_vel_aroma","c","custo"],["d","2025-10",10,"Luz, água e outros","",69,1,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-10",10,"Despesas com alimentação","",154,1,"ORNATA DOMUS COMPANY LTDA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-10",9,"Serviços de sistema de gestão","",24.91,1,"SERASA S.A.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-09",23,"Serviços de sistema de gestão","",149,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-10",9,"Serviços de sistema de gestão","",40.9,1,"TINY ERP","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-10",9,"Serviços de sistema de gestão","",218,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-10",9,"Despesas com materiais de consumo","",55.57,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-10",9,"Despesas com materiais de consumo","",34.14,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-10",9,"Despesas administrativas","",30,1,"CLARO S.A.","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-10",9,"Compra de matéria-prima","",376.78,1,"TILIFORM INDUSTRIA GRAFICA - EM RECUPERACAO JUDICIAL","","not_vel_aroma","c","custo"],["d","2025-10",13,"Compra de insumos para expedição","",370.92,1,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","custo"],["d","2025-10",9,"Despesas com ADS","",1100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-10",9,"Despesas com ADS","",720,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-10",9,"Despesas com ADS","",720,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-10",9,"Despesas com ADS","",780,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-10",9,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-10",9,"Compra de ativo imobilizado","",169,1,"MERCADO LIVRE","","not_vel_aroma","c","investimento"],["d","2025-10",14,"Compra de matéria-prima","",4000,1,"GOLDEN PLASTIC COMERCIO E SERVICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-10",14,"Compra de matéria-prima","",1177.05,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","not_vel_aroma","c","custo"],["d","2025-10",14,"Compra de mercadorias","",3525,1,"ENNATERRA AROMATIZADORES LTDA","","not_vel_aroma","c","custo"],["d","2025-10",15,"Despesas com frete para compra de materiais","",377.85,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-10",15,"Reembolsos por fora de marketplaces","",79.96,1,"REEMBOLSOS","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-10",15,"Despesas administrativas","",19.9,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-10",15,"Compra de matéria-prima","",2640.66,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-10",15,"Compra de matéria-prima","",1289.31,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-10",15,"Compra de matéria-prima","",250.56,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","not_vel_aroma","c","custo"],["d","2025-10",15,"Compra de matéria-prima","",595.42,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-10",15,"Serviços de contabilidade","",426,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-10",15,"Serviços de contabilidade","",1000,1,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-10",15,"Despesas com outros serviços contratados","",1907.19,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-10",15,"Despesas com outros serviços contratados","",1300,1,"ELEN FERNANDA CONTE - ARQUITETA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-10",9,"Despesas com rescisões trabalhistas","",688.97,1,"LUIZ ANTONIO RONDINI VIEIRA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-10",15,"Despesas com alimentação","",39.98,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-10",16,"Serviços de sistema de gestão","",90,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-10",16,"Despesas com alimentação","",84,1,"AURIGÁS - ÁGUA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-10",17,"Despesas com frete para compra de materiais","",230,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-10",17,"Compra de insumos para expedição","",504.9,1,"AURIPELL EMBALAGENS LTDA","","not_vel_aroma","c","custo"],["d","2025-10",21,"Serviços contratados para marketing","",700,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-10",20,"Compra de matéria-prima","",2110.92,1,"SMART PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-10",20,"Impostos sobre receita","",481.04,1,"SIMPLES NACIONAL","","not_vel_aroma","c","custo"],["d","2025-10",20,"Salários e encargos","",272.53,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-10",20,"Salários e encargos","",265.43,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-10",21,"Despesas com frete para devolução e reenvio","",255.93,1,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-10",22,"Despesas com frete para compra de materiais","",433.85,1,"DANIEL BARBOSA DA SILVA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-10",22,"Despesas com materiais de consumo","",120,1,"BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-10",22,"Despesas com materiais de consumo","",39,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-10",22,"Compra de matéria-prima","",2326.45,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-10",22,"Compra de matéria-prima","",1289.69,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-10",22,"Compra de matéria-prima","",595.59,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-10",22,"Luz, água e outros","",182.48,1,"ELEKTRO REDES S.A.","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-10",23,"Outras despesas (Não considerar DRE)","",10231.6,1,"MERCADO PAGO","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2025-10",23,"Outras despesas (Não considerar DRE)","",24941.91,1,"SICREDI","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2025-10",24,"Despesas com frete para compra de materiais","",70,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-10",24,"Despesas com frete para compra de materiais","",160.69,1,"FLASHMEN PASSAGENS E ENCOMENDAS LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-10",24,"Luz, água e outros","",138.56,1,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-10",27,"Outras despesas (Não considerar DRE)","",4962.77,1,"SICREDI","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2025-10",27,"Outras despesas (Não considerar DRE)","",41.87,1,"SICREDI","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2025-10",29,"Compra de matéria-prima","",753.46,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-11",2,"Compra de matéria-prima","",6150,1,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","custo"],["d","2025-11",2,"Despesas com acordos judiciais","",3151.28,1,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","despesa"],["d","2025-10",29,"Compra de matéria-prima","",2326.45,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-10",29,"Compra de matéria-prima","",2354.1,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","not_vel_aroma","c","custo"],["d","2025-10",29,"Outras despesas (Não considerar DRE)","",22891.91,1,"SICREDI","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2025-10",31,"Juros e Multas","",16.2,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","","not_vel_aroma","c","despesa"],["d","2025-10",31,"Despesas com frete para compra de materiais","",695.54,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-10",30,"Compra de insumos para expedição","",1145.3,1,"AURIPELL EMBALAGENS LTDA","","not_vel_aroma","c","custo"],["d","2025-10",30,"Salários e encargos","",20,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-10",31,"Despesas com frete para compra de materiais","",250,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-10",31,"Despesas com frete para compra de materiais","",50,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-10",31,"Despesas com frete para compra de materiais","",350,1,"EDSON MONTEIRO PLAZAS - FRETE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-10",31,"Despesas com materiais de consumo","",189.4,1,"ORNATA DOMUS COMPANY LTDA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-10",31,"Compra de matéria-prima","",256.45,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-10",31,"Compra de matéria-prima","",1259.63,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-10",31,"Compra de insumos para expedição","",370.92,1,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","custo"],["d","2025-10",31,"Compra de insumos para expedição","",107.68,1,"VALDERI FERREIRA BARBOSA JUNIOR - IMPAKTO VISUAL","","not_vel_aroma","c","custo"],["d","2025-10",31,"Impostos e Taxas","",120.6,1,"SECRETARIA DA FAZENDA E PLANEJAMENTO","Despesas Financeiras","not_vel_aroma","c","despesa"],["d","2025-10",31,"Despesas com outros serviços contratados","",350,1,"CARLOS EDUARDO DE CARVALHO - PEDREIRO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-10",31,"Comissões","",331.03,1,"TIAGO SANTOS MOURA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-11",3,"Despesas com materiais de consumo","",148.16,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-11",4,"Despesas com frete para compra de materiais","",80,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-11",4,"Compra de matéria-prima","",753.46,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-11",4,"Compra de matéria-prima","",5630,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-11",4,"Compra de matéria-prima","",960,1,"SMART PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-11",4,"Compra de insumos para produção","",123.26,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2025-11",4,"Compra de insumos para produção","",336,1,"TIQUETA MATERIAL IMPRESSO LTDA","","not_vel_aroma","c","custo"],["d","2025-11",5,"Despesas com materiais de consumo","",48.32,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-11",5,"Compra de matéria-prima","",2327.16,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-11",6,"Custo com horas extras setor de produção","",110,1,"KARINA DE LIMA TENORIO","","not_vel_aroma","c","custo"],["d","2025-11",6,"Despesas com outros serviços contratados","",726.5,1,"CONGELAR - COQUINHO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-11",6,"Custo com horas extras setor de produção","",1040,1,"RUTH CASSIA DO NASCIMENTO PEREIRA","","not_vel_aroma","c","custo"],["d","2025-11",6,"Custo com horas extras setor de produção","",80,1,"TALYSSON HENRIQUE MACHADO DOS SANTOS","","not_vel_aroma","c","custo"],["d","2025-11",6,"Custo com horas extras setor de produção","",44.13,1,"POLYANA CECILIA ALMEIDA FERREIRA","","not_vel_aroma","c","custo"],["d","2025-11",6,"Compra de ativo imobilizado","",136.2,1,"BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR","","not_vel_aroma","c","investimento"],["d","2025-11",6,"Compra de ativo imobilizado","",282.5,1,"BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR","","not_vel_aroma","c","investimento"],["d","2025-11",6,"Compra de ativo imobilizado","",299.95,1,"BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR","","not_vel_aroma","c","investimento"],["d","2025-11",6,"Salários e encargos","",2006.57,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-11",6,"Salários e encargos","",1478.77,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-11",7,"Despesas com frete para compra de materiais","",100,1,"LUIZ PAULO ZARDINI","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-11",7,"Despesas com frete para compra de materiais","",200,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-11",7,"Compra de matéria-prima","",1259.63,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-11",7,"Compra de matéria-prima","",256.45,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-11",10,"Despesas com frete para compra de materiais","",139.7,1,"FLASHMEN PASSAGENS E ENCOMENDAS LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-11",10,"Despesas com aluguéis para uso","",54.01,1,"PREFEITURA MUNICIPAL DE AURIFLAMA","Despesas com aluguéis","not_vel_aroma","c","despesa"],["d","2025-11",10,"Despesas com aluguéis para uso","",2500,1,"CONDE INTERMEDIACAO DE NEGOCIOS LTDA","Despesas com aluguéis","not_vel_aroma","c","despesa"],["d","2025-11",10,"Despesas com materiais de consumo","",90,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-11",10,"Despesas com materiais de consumo","",194.5,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-11",10,"Despesas com materiais de consumo","",196.61,1,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-11",10,"Despesas com materiais de consumo","",20,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-11",10,"Despesas com materiais de consumo","",500,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-11",10,"Despesas com materiais de consumo","",219,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-11",10,"Compra de mercadorias","",3230,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","not_vel_aroma","c","custo"],["d","2025-11",10,"Compra de insumos para expedição","",1095,1,"AURIPELL EMBALAGENS LTDA","","not_vel_aroma","c","custo"],["d","2025-11",10,"Despesas com ADS","",600,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-11",10,"Despesas com outros serviços contratados","",125.4,1,"CONSELHO DE ARQUITETURA E URBANISMO DE SAO PAULO (CAU-SP)","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-11",10,"Luz, água e outros","",69,1,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-11",10,"Despesas com alimentação","",150.5,1,"ORNATA DOMUS COMPANY LTDA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-11",11,"Serviços de sistema de gestão","",135,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-11",11,"Compra de matéria-prima","",753.69,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-11",6,"Serviços de sistema de gestão","",40.9,1,"TINY ERP","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-11",6,"Serviços de sistema de gestão","",24.91,1,"SERASA S.A.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-11",6,"Serviços de sistema de gestão","",218,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-11",6,"Serviços de sistema de gestão","",149,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-11",6,"Despesas com materiais de consumo","",37.4,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-11",12,"Despesas com materiais de consumo","",96.58,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-11",6,"Despesas com materiais de consumo","",42.1,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-11",6,"Despesas administrativas","",5.79,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-11",6,"Despesas administrativas","",30,1,"CLARO S.A.","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-11",6,"Compra de matéria-prima","",376.78,1,"TILIFORM INDUSTRIA GRAFICA - EM RECUPERACAO JUDICIAL","","not_vel_aroma","c","custo"],["d","2025-11",12,"Compra de insumos para expedição","",126.9,1,"VALDERI FERREIRA BARBOSA JUNIOR - IMPAKTO VISUAL","","not_vel_aroma","c","custo"],["d","2025-11",6,"Despesas com ADS","",100,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-11",6,"Despesas com ADS","",500,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-11",6,"Despesas com ADS","",3000,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-11",6,"Despesas com ADS","",820,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-11",6,"Despesas com ADS","",500,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-11",6,"Compra de ativo imobilizado","",169,1,"MERCADO LIVRE","","not_vel_aroma","c","investimento"],["d","2025-11",13,"Despesas com materiais de consumo","",32,1,"PERCIVAL AROSTI DE PAULA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-11",12,"Compra de matéria-prima","",256.52,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-11",12,"Compra de matéria-prima","",1260,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-11",14,"Compra de mercadorias","",3530,1,"ENNATERRA AROMATIZADORES LTDA","","not_vel_aroma","c","custo"],["d","2025-11",14,"Bonificações, Brindes e Festividades","",200,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-11",15,"Despesas com frete para compra de materiais","",316.97,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-11",17,"Compra de matéria-prima","",250.56,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","not_vel_aroma","c","custo"],["d","2025-11",15,"Serviços de contabilidade","",426,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-11",18,"Serviços de contabilidade","",1000,1,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-11",17,"Despesas com outros serviços contratados","",1000,1,"ELEN FERNANDA CONTE - ARQUITETA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-11",17,"Despesas com outros serviços contratados","",2399.03,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-11",17,"Despesas com frete para compra de materiais","",100,1,"LUIZ PAULO ZARDINI","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-11",17,"Despesas com materiais de consumo","",88.03,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-11",17,"Despesas com materiais de consumo","",8,1,"JOSE AUGUSTO VIEIRA DO LIVRAMENTO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-11",17,"Compra de matéria-prima","",3215.85,1,"SMART PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-11",17,"Compra de matéria-prima","",11120,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-11",18,"Compra de insumos para expedição","",3912,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2025-11",19,"Reembolsos por fora de marketplaces","",39.9,1,"REEMBOLSOS","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-11",19,"Compra de insumos para expedição","",279.1,1,"VALDERI FERREIRA BARBOSA JUNIOR - IMPAKTO VISUAL","","not_vel_aroma","c","custo"],["d","2025-11",19,"Compra de ativo imobilizado","",160,1,"PAULO CESAR LOPES (ROPE)","","not_vel_aroma","c","investimento"],["d","2025-11",19,"Compra de ativo imobilizado","",450,1,"MARQUINHO - MARCENEIRO","","not_vel_aroma","c","investimento"],["d","2025-11",19,"Luz, água e outros","",108.08,1,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-11",19,"Bonificações, Brindes e Festividades","",29.9,1,"ALINE BRAMBILLA - ALINE MODA BEBE","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-11",19,"Bonificações, Brindes e Festividades","",114.2,1,"MARISI FITNESS CONFECCOES LTDA - NEXT WAVE","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-11",18,"Salários e encargos","",302.4,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-11",19,"Salários e encargos","",294.66,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-11",20,"Serviços contratados para marketing","",700,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-11",20,"Compra de ativo imobilizado","",633.34,1,"IVAN RODRIGO FALICO","","not_vel_aroma","c","investimento"],["d","2025-11",20,"Comissões","",463.57,1,"TIAGO SANTOS MOURA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-11",21,"Despesas com frete para devolução e reenvio","",460.96,1,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-11",21,"Despesas com materiais de consumo","",26.02,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-11",21,"Impostos sobre receita","",642.47,1,"SIMPLES NACIONAL","","not_vel_aroma","c","custo"],["d","2025-11",22,"Despesas com frete para compra de materiais","",200,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-11",22,"Despesas com frete para compra de materiais","",100,1,"LUIZ PAULO ZARDINI","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-11",24,"Despesas com frete para compra de materiais","",100,1,"LUIZ PAULO ZARDINI","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-11",24,"Despesas com frete para compra de materiais","",200.2,1,"FLASHMEN PASSAGENS E ENCOMENDAS LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-11",24,"Compra de matéria-prima","",1920,1,"SMART PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-11",24,"Compra de matéria-prima","",6527.2,1,"GOLDEN PLASTIC COMERCIO E SERVICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-11",24,"Luz, água e outros","",144.85,1,"ELEKTRO REDES S.A.","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-11",25,"Despesas com frete para compra de materiais","",100,1,"LUIZ PAULO ZARDINI","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-11",25,"Despesas administrativas","",62.88,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-11",25,"Compra de matéria-prima","",2783.06,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-11",28,"Compra de ativo imobilizado","",431.55,1,"BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR","","not_vel_aroma","c","investimento"],["d","2025-11",25,"Despesas com 13° Salário","",1090,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-11",25,"Despesas com 13° Salário","",266.67,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-12",8,"Luz, água e outros","",130.52,1,"ELEKTRO REDES S.A.","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-11",26,"Despesas com materiais de consumo","",164,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-11",26,"Compra de matéria-prima","",4608.37,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-11",26,"Compra de insumos para expedição","",992.7,1,"AURIPELL EMBALAGENS LTDA","","not_vel_aroma","c","custo"],["d","2025-11",27,"Despesas com frete para compra de materiais","",200,1,"DANIEL BARBOSA DA SILVA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-11",27,"Despesas com frete para compra de materiais","",100,1,"LUIZ PAULO ZARDINI","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-11",27,"Compra de ativo imobilizado","",2080,1,"JOSE LUIZ MARINO JUNIOR","","not_vel_aroma","c","investimento"],["d","2025-11",28,"Serviços de sistema de gestão","",45,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-11",28,"Despesas com frete para compra de materiais","",250,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-11",28,"Despesas com frete para compra de materiais","",100,1,"LUIZ PAULO ZARDINI","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-11",28,"Despesas administrativas","",90,1,"AURIGÁS - ÁGUA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-11",28,"Compra de matéria-prima","",6150,1,"FORMULARIOS COVOLAN LTDA.","","not_vel_aroma","c","custo"],["d","2025-11",28,"Compra de ativo intangível","",220,1,"EAN BRASIL","","not_vel_aroma","c","investimento"],["d","2025-11",28,"Impostos e Taxas","",70.62,1,"SECRETARIA DA FAZENDA E PLANEJAMENTO","Despesas Financeiras","not_vel_aroma","c","despesa"],["d","2025-11",28,"Serviços de sistema de gestão","",149,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-11",29,"Despesas com frete para compra de materiais","",70,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-11",30,"Despesas com frete para compra de materiais","",702.63,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-12",1,"Despesas com frete para compra de materiais","",206.63,1,"FLASHMEN PASSAGENS E ENCOMENDAS LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-12",2,"Compra de matéria-prima","",2783.06,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-12",2,"Compra de matéria-prima","",2942.62,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","not_vel_aroma","c","custo"],["d","2025-12",3,"Compra de matéria-prima","",1318.99,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-12",4,"Despesas com frete para compra de materiais","",250,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-12",4,"Despesas administrativas","",35,1,"CLARO S.A.","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-12",4,"Despesas administrativas","",71.23,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-12",5,"Compra de insumos para expedição","",1059.8,1,"TOLOY COMERCIO DE EMBALAGENS LTDA.","","not_vel_aroma","c","custo"],["d","2025-12",5,"Custo com horas extras setor de produção","",320,1,"RUTH CASSIA DO NASCIMENTO PEREIRA","","not_vel_aroma","c","custo"],["d","2025-12",5,"Custo com horas extras setor de produção","",160.74,1,"POLYANA CECILIA ALMEIDA FERREIRA","","not_vel_aroma","c","custo"],["d","2025-12",5,"Custo com horas extras setor de produção","",159.43,1,"KARINA DE LIMA TENORIO","","not_vel_aroma","c","custo"],["d","2025-12",5,"Custo com horas extras setor de produção","",323.63,1,"RAFAEL DOS SANTOS PILIELO","","not_vel_aroma","c","custo"],["d","2025-12",5,"Salários e encargos","",1540,1,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-12",6,"Compra de ativo imobilizado","",136.2,1,"BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR","","not_vel_aroma","c","investimento"],["d","2025-12",6,"Compra de ativo imobilizado","",282.5,1,"BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR","","not_vel_aroma","c","investimento"],["d","2025-12",6,"Compra de ativo imobilizado","",299.95,1,"BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR","","not_vel_aroma","c","investimento"],["d","2025-12",5,"Salários e encargos","",1120,1,"KARINA DE LIMA TENORIO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-12",5,"Salários e encargos","",2006.57,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-12",5,"Salários e encargos","",1478.77,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-12",8,"Serviços de sistema de gestão","",270,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-12",8,"Despesas com frete para compra de materiais","",100,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-12",8,"Compra de matéria-prima","",2143.91,1,"SMART PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-12",8,"Custo com horas extras setor de produção","",240,1,"KAROLAYNE HELLEN FAGUNDES DOS SANTOS","","not_vel_aroma","c","custo"],["d","2025-12",9,"Compra de matéria-prima","",5678.53,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-12",9,"Compra de matéria-prima","",2783.91,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-12",9,"Compra de matéria-prima","",2942.63,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","not_vel_aroma","c","custo"],["d","2025-12",9,"Compra de matéria-prima","",5660,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-12",10,"Despesas com aluguéis para uso","",54.07,1,"PREFEITURA MUNICIPAL DE AURIFLAMA","Despesas com aluguéis","not_vel_aroma","c","despesa"],["d","2025-12",10,"Despesas com aluguéis para uso","",3250,1,"ORNATA DOMUS COMPANY LTDA","Despesas com aluguéis","not_vel_aroma","c","despesa"],["d","2025-12",10,"Despesas com materiais de consumo","",96,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-12",10,"Despesas com materiais de consumo","",31.8,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-12",10,"Despesas com materiais de consumo","",127.98,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-12",10,"Despesas com materiais de consumo","",0.01,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-12",10,"Despesas com materiais de consumo","",395.57,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-12",10,"Despesas com materiais de consumo","",194.5,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-12",10,"Despesas com materiais de consumo","",18,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-12",10,"Despesas administrativas","",373.46,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-12",10,"Despesas administrativas","",33,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-12",10,"Compra de matéria-prima","",870,1,"INTER ESSÊNCIAS - DIB & CAIRES LTDA","","not_vel_aroma","c","custo"],["d","2025-12",10,"Compra de matéria-prima","",1318.99,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-12",10,"Compra de insumos para expedição","",211.61,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2025-11",22,"Outras despesas","",2500,1,"CONDE INTERMEDIACAO DE NEGOCIOS LTDA","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2025-12",8,"Compra de ativo imobilizado","",405,1,"FORROS E DIVISORIAS RIO PRETO LTDA","","not_vel_aroma","c","investimento"],["d","2025-12",10,"Luz, água e outros","",69,1,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-12",10,"Outros gastos com publicidade","",174.57,1,"PRINTI - FM IMPRESSOS PERSONALIZADOS LTDA.","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-12",10,"Despesas com alimentação","",308,1,"ORNATA DOMUS COMPANY LTDA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-12",11,"Compra de mercadorias","",4131,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","not_vel_aroma","c","custo"],["d","2025-12",11,"Compra de insumos para expedição","",360,1,"AURIPELL EMBALAGENS LTDA","","not_vel_aroma","c","custo"],["d","2025-12",8,"Serviços de sistema de gestão","",40.9,1,"TINY ERP","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-12",8,"Serviços de sistema de gestão","",24.91,1,"SERASA S.A.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-12",8,"Serviços de sistema de gestão","",32.36,1,"TINY ERP","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-12",8,"Serviços de sistema de gestão","",218,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-12",13,"Despesas com frete para compra de materiais","",60,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-12",8,"Despesas com materiais de consumo","",588.8,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-12",8,"Despesas com materiais de consumo","",637.95,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-12",8,"Despesas administrativas","",30,1,"CLARO S.A.","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-12",8,"Compra de matéria-prima","",376.78,1,"TILIFORM INDUSTRIA GRAFICA - EM RECUPERACAO JUDICIAL","","not_vel_aroma","c","custo"],["d","2025-12",8,"Despesas com ADS","",3000,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-12",8,"Despesas com ADS","",2000,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-12",8,"Despesas com ADS","",3400,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-12",8,"Despesas com ADS","",2400,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-12",12,"Custo com horas extras setor de produção","",80,1,"KAROLAYNE HELLEN FAGUNDES DOS SANTOS","","not_vel_aroma","c","custo"],["d","2025-12",8,"Compra de ativo imobilizado","",169,1,"MERCADO LIVRE","","not_vel_aroma","c","investimento"],["d","2025-12",8,"Compra de ativo imobilizado","",1025,1,"IVAN RODRIGO FALICO","","not_vel_aroma","c","investimento"],["d","2025-12",8,"Outras despesas (Não considerar DRE)","",249.36,1,"AMAZON","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2025-12",13,"Compra de insumos para expedição","",64.5,1,"BINHO - TOTAL CARTUCHO","","not_vel_aroma","c","custo"],["d","2025-12",14,"Compra de insumos para expedição","",365.51,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2025-12",15,"Despesas com frete para compra de materiais","",1052.63,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-12",15,"Compra de matéria-prima","",14150,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-12",15,"Compra de matéria-prima","",1976.73,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2025-12",15,"Serviços de contabilidade","",426,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-12",15,"Serviços de contabilidade","",1000,1,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-12",18,"Compra de insumos para expedição","",269.6,1,"VALDERI FERREIRA BARBOSA JUNIOR - IMPAKTO VISUAL","","not_vel_aroma","c","custo"],["d","2025-12",15,"Compra de insumos para expedição","",880,1,"AURIPELL EMBALAGENS LTDA","","not_vel_aroma","c","custo"],["d","2025-12",15,"Despesas com outros serviços contratados","",1000,1,"ELEN FERNANDA CONTE - ARQUITETA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-12",15,"Despesas com outros serviços contratados","",2108.47,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-12",16,"Despesas com frete para compra de materiais","",160.89,1,"FLASHMEN PASSAGENS E ENCOMENDAS LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-12",16,"Despesas com frete para compra de materiais","",450,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-12",17,"Compra de matéria-prima","",1319.39,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-12",17,"Compra de mercadorias","",3545,1,"ENNATERRA AROMATIZADORES LTDA","","not_vel_aroma","c","custo"],["d","2025-12",18,"Compra de mercadorias","",4131,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","not_vel_aroma","c","custo"],["d","2025-12",18,"Comissões","",622.81,1,"TIAGO SANTOS MOURA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-12",19,"Despesas com frete para compra de materiais","",200,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-12",19,"Compra de insumos para expedição","",1703.56,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2025-12",19,"Custo com horas extras setor de produção","",240,1,"KAROLAYNE HELLEN FAGUNDES DOS SANTOS","","not_vel_aroma","c","custo"],["d","2025-12",19,"Despesas com 13° Salário","",916.57,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-12",19,"Despesas com 13° Salário","",226.67,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-12",19,"Salários e encargos","",410.93,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-12",19,"Salários e encargos","",213.42,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-12",19,"Salários e encargos","",294.66,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-12",22,"Serviços contratados para marketing","",700,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2025-12",22,"Compra de ativo imobilizado","",633.33,1,"IVAN RODRIGO FALICO","","not_vel_aroma","c","investimento"],["d","2025-12",22,"Despesas com frete para devolução e reenvio","",671.08,1,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-12",22,"Compra de matéria-prima","",1976.71,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2025-12",22,"Compra de insumos para expedição","",613.5,1,"AURIPELL EMBALAGENS LTDA","","not_vel_aroma","c","custo"],["d","2025-12",22,"Impostos sobre receita","",914.05,1,"SIMPLES NACIONAL","","not_vel_aroma","c","custo"],["d","2025-12",23,"Despesas com frete para compra de materiais","",750,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-12",23,"Despesas administrativas","",30,1,"Carlos Alexandre Fornazari","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2025-12",23,"Compra de matéria-prima","",3328.05,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-12",24,"Compra de matéria-prima","",2032,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-12",24,"Luz, água e outros","",368.67,1,"ELEKTRO REDES S.A.","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-12",25,"Compra de insumos para expedição","",211.61,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2025-12",29,"Compra de ativo imobilizado","",431.55,1,"BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR","","not_vel_aroma","c","investimento"],["d","2025-12",26,"Compra de insumos para expedição","",2493.25,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2025-12",26,"Custo com horas extras setor de produção","",110,1,"KAROLAYNE HELLEN FAGUNDES DOS SANTOS","","not_vel_aroma","c","custo"],["d","2025-12",29,"Compra de matéria-prima","",6150,1,"FORMULARIOS COVOLAN LTDA.","","not_vel_aroma","c","custo"],["d","2025-12",29,"Despesas com acordos judiciais","",3151.28,1,"DR. VALDOMIRO VIEIRA BRANCO FILHO - ADVOGADO COVOLAN","","not_vel_aroma","c","despesa"],["d","2025-12",29,"Juros e Multas","",658.08,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","not_vel_aroma","c","despesa"],["d","2025-12",29,"Reembolsos por fora de marketplaces","",7.98,1,"REEMBOLSOS","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-12",29,"Reembolsos por fora de marketplaces","",9.8,1,"REEMBOLSOS","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-12",29,"Compra de matéria-prima","",2005.16,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","not_vel_aroma","c","custo"],["d","2025-12",29,"Compra de matéria-prima","",1976.71,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2025-12",29,"Compra de insumos para expedição","",365.51,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2025-12",30,"Serviços de sistema de gestão","",149,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-12",30,"Despesas com frete para compra de materiais","",717.87,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2025-12",30,"Reembolsos por fora de marketplaces","",35.88,1,"REEMBOLSOS","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-12",30,"Compra de matéria-prima","",2032,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2025-12",30,"Serviços de contabilidade","",800,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-01",2,"Custo com horas extras setor de produção","",160,1,"KAROLAYNE HELLEN FAGUNDES DOS SANTOS","","not_vel_aroma","c","custo"],["d","2026-01",2,"Impostos e Taxas","",423.37,1,"SECRETARIA DA FAZENDA E PLANEJAMENTO","Despesas Financeiras","not_vel_aroma","c","despesa"],["d","2026-01",3,"Compra de insumos para expedição","",1703.56,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2026-01",5,"Despesas administrativas","",26.5,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-01",5,"Compra de matéria-prima","",1976.71,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-01",5,"Luz, água e outros","",195.7,1,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2025-12",31,"Salários e encargos","",2200,1,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-01",6,"Compra de matéria-prima","",4287.81,1,"SMART PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-01",6,"Compra de matéria-prima","",2147.46,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2026-01",6,"Compra de insumos para expedição","",213,1,"AMORIM LISBOA LTDA - D'CORACAO VISUAL","","not_vel_aroma","c","custo"],["d","2025-12",31,"Salários e encargos","",1600,1,"KARINA DE LIMA TENORIO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-12",31,"Salários e encargos","",1478.77,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2025-12",31,"Salários e encargos","",2006.57,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-01",7,"Compra de matéria-prima","",2764.08,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-01",7,"Compra de matéria-prima","",5286.4,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","not_vel_aroma","c","custo"],["d","2026-01",7,"Compra de matéria-prima","",2032.61,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2026-01",7,"Custo com horas extras setor de produção","",170.36,1,"POLYANA CECILIA ALMEIDA FERREIRA","","not_vel_aroma","c","custo"],["d","2025-12",8,"Serviços de sistema de gestão","",218,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-01",8,"Despesas com frete para compra de materiais","",90,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-01",9,"Serviços de sistema de gestão","",270,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-01",9,"Despesas administrativas","",75,1,"AURIGÁS - ÁGUA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-01",9,"Compra de mercadorias","",5924.5,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","not_vel_aroma","c","custo"],["d","2026-01",9,"Compra de insumos para expedição","",211.62,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2026-01",9,"Custo com horas extras setor de produção","",160,1,"KAROLAYNE HELLEN FAGUNDES DOS SANTOS","","not_vel_aroma","c","custo"],["d","2026-01",12,"Despesas com aluguéis para uso","",2500,1,"ORNATA DOMUS COMPANY LTDA","Despesas com aluguéis","not_vel_aroma","c","despesa"],["d","2026-01",12,"Despesas com materiais de consumo","",287.96,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-01",12,"Despesas com materiais de consumo","",96,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-01",12,"Despesas com materiais de consumo","",47.02,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-01",12,"Despesas com materiais de consumo","",6,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-01",12,"Despesas com materiais de consumo","",20,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-01",12,"Despesas administrativas","",65,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-01",12,"Bens de consumo com publicidade","",171.8,1,"MERCADO LIVRE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-01",12,"Compra de matéria-prima","",250,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2026-01",12,"Compra de matéria-prima","",152.15,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2026-01",12,"Compra de matéria-prima","",541.16,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2026-01",12,"Compra de matéria-prima","",135.29,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2026-01",12,"Compra de insumos para expedição","",90,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","","not_vel_aroma","c","custo"],["d","2026-01",12,"Compra de insumos para expedição","",80,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","","not_vel_aroma","c","custo"],["d","2026-01",10,"Compra de insumos para expedição","",2493.25,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2026-01",12,"Compra de ativo imobilizado","",360,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","","not_vel_aroma","c","investimento"],["d","2026-01",12,"Despesas com outros serviços contratados","",9.9,1,"MERCADO LIVRE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-01",12,"Luz, água e outros","",69,1,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2026-01",12,"Outros gastos com publicidade","",174.57,1,"PRINTI - FM IMPRESSOS PERSONALIZADOS LTDA.","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-01",12,"Despesas com alimentação","",308,1,"ORNATA DOMUS COMPANY LTDA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-01",7,"Serviços de sistema de gestão","",40.9,1,"TINY ERP","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-01",7,"Serviços de sistema de gestão","",24.91,1,"SERASA S.A.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-01",7,"Serviços de sistema de gestão","",47.67,1,"TINY ERP","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-01",7,"Serviços de sistema de gestão","",32.32,1,"TINY ERP","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-01",12,"Despesas com frete para compra de materiais","",250,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-01",7,"Despesas administrativas","",30,1,"CLARO S.A.","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-01",7,"Despesas administrativas","",115.62,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-01",7,"Bens de consumo com publicidade","",2.8,1,"ALINE C. E. DE OLIVEIRA","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-01",7,"Compra de matéria-prima","",376.78,1,"TILIFORM INDUSTRIA GRAFICA - EM RECUPERACAO JUDICIAL","","not_vel_aroma","c","custo"],["d","2026-01",7,"Compra de matéria-prima","",2008.43,1,"TILIFORM INDUSTRIA GRAFICA - EM RECUPERACAO JUDICIAL","","not_vel_aroma","c","custo"],["d","2026-01",12,"Compra de matéria-prima","",1976.71,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-01",12,"Compra de insumos para expedição","",888.2,1,"VALDERI FERREIRA BARBOSA JUNIOR - IMPAKTO VISUAL","","not_vel_aroma","c","custo"],["d","2026-01",7,"Despesas com ADS","",1000,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-01",7,"Despesas com ADS","",2220,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-01",7,"Despesas com ADS","",5000,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-01",7,"Despesas com ADS","",2000,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-01",7,"Despesas com ADS","",1000,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-01",7,"Compra de ativo imobilizado","",169,1,"MERCADO LIVRE","","not_vel_aroma","c","investimento"],["d","2026-01",7,"Compra de ativo imobilizado","",1025,1,"IVAN RODRIGO FALICO","","not_vel_aroma","c","investimento"],["d","2026-01",7,"Compra de ativo imobilizado","",405,1,"FORROS E DIVISORIAS RIO PRETO LTDA","","not_vel_aroma","c","investimento"],["d","2026-01",7,"Compra de insumos para produção","",175.84,1,"TIQUETA MATERIAL IMPRESSO LTDA","","not_vel_aroma","c","custo"],["d","2026-01",12,"Salários e encargos","",20,1,"KARINA DE LIMA TENORIO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-01",12,"Salários e encargos","",20,1,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-01",13,"Reembolsos por fora de marketplaces","",28.9,1,"REEMBOLSOS","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2026-01",13,"Compra de matéria-prima","",2147.46,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2026-01",13,"Compra de insumos para expedição","",365.52,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2026-01",14,"Compra de matéria-prima","",4683.66,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-01",15,"Despesas com frete para compra de materiais","",418.32,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-01",15,"Despesas com frete para compra de materiais","",110,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-01",15,"Despesas com frete para compra de materiais","",1045.23,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-01",15,"Serviços de contabilidade","",426,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-01",15,"Despesas com outros serviços contratados","",2235.15,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-01",16,"Despesas com frete para compra de materiais","",95,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-01",16,"Compra de mercadorias","",5924.5,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","not_vel_aroma","c","custo"],["d","2026-01",18,"Compra de insumos para expedição","",1703.57,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2026-01",19,"Despesas com materiais de consumo","",5,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-01",19,"Despesas administrativas","",63.98,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-01",19,"Compra de ativo imobilizado","",1150,1,"EDERSON ROGERIO FERREIRA - DIVISÓRIAS","","not_vel_aroma","c","investimento"],["d","2026-01",20,"Serviços contratados para marketing","",700,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-01",20,"Despesas com frete para compra de materiais","",85,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-01",20,"Compra de matéria-prima","",2148.09,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2026-01",20,"Serviços de contabilidade","",1000,1,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-01",20,"Impostos sobre receita","",1035.52,1,"SIMPLES NACIONAL","","not_vel_aroma","c","custo"],["d","2026-01",20,"Compra de ativo imobilizado","",633.33,1,"IVAN RODRIGO FALICO","","not_vel_aroma","c","investimento"],["d","2026-01",20,"Salários e encargos","",410.93,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-01",20,"Salários e encargos","",294.66,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-01",21,"Despesas com frete para compra de materiais","",300,1,"BRUNO HENRIQUE DE LIMA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-01",21,"Despesas com frete para devolução e reenvio","",698.91,1,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-01",21,"Compra de matéria-prima","",4683.71,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-01",22,"Compra de insumos para expedição","",8,1,"SUPERMERCADO SÃO LUIS","","not_vel_aroma","c","custo"],["d","2026-01",22,"Compra de insumos para expedição","",21.9,1,"ALINE C. E. DE OLIVEIRA","","not_vel_aroma","c","custo"],["d","2026-01",22,"Comissões","",275.16,1,"TIAGO SANTOS MOURA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-01",23,"Despesas administrativas","",170,1,"ANDERSON BRASILEIRO - BRASIL","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-01",22,"Luz, água e outros","",348.99,1,"ELEKTRO REDES S.A.","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2026-01",25,"Compra de insumos para expedição","",2493.26,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2026-01",26,"Compra de matéria-prima","",100,1,"GOLDEN PLASTIC COMERCIO E SERVICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-01",26,"Despesas com outros serviços contratados","",60,1,"C B L CORREA LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-01",27,"Compra de matéria-prima","",8760,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-01",27,"Compra de mercadorias","",3545,1,"ENNATERRA AROMATIZADORES LTDA","","not_vel_aroma","c","custo"],["d","2026-01",28,"Despesas com frete para compra de materiais","",90,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-01",28,"Compra de matéria-prima","",6150,1,"FORMULARIOS COVOLAN LTDA.","","not_vel_aroma","c","custo"],["d","2026-01",28,"Compra de matéria-prima","",4683.71,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-01",29,"Despesas com frete para compra de materiais","",250,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-01",29,"Outros gastos com publicidade","",541.41,1,"PRINTI - FM IMPRESSOS PERSONALIZADOS LTDA.","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-01",30,"Serviços de sistema de gestão","",149,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-01",30,"Despesas com frete para compra de materiais","",316.4,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-01",30,"Compra de matéria-prima","",1928.63,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-01",30,"Impostos e Taxas","",812.02,1,"SECRETARIA DA FAZENDA E PLANEJAMENTO","Despesas Financeiras","not_vel_aroma","c","despesa"],["d","2026-02",2,"Despesas administrativas","",6.99,1,"LOPES SUPERMERCADOS LTDA - (PROENÇA)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-02",2,"Despesas administrativas","",18.99,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-02",2,"Luz, água e outros","",144.25,1,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2026-02",3,"Despesas com frete para compra de materiais","",485,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-02",3,"Compra de matéria-prima","",2642.43,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2026-02",4,"Compra de matéria-prima","",504.13,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-02",4,"Compra de matéria-prima","",4683.71,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-02",5,"Despesas administrativas","",1057.71,1,"PREFEITURA MUNICIPAL DE AURIFLAMA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-02",4,"Salários e encargos","",2008.12,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-02",6,"Serviços de sistema de gestão","",270,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-02",6,"Despesas com materiais de consumo","",31.5,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-02",6,"Compra de matéria-prima","",1928.63,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-02",6,"Compra de matéria-prima","",4240.8,1,"GOLDEN PLASTIC COMERCIO E SERVICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-02",6,"Custo com horas extras setor de produção","",320,1,"ISABELA TENORIO BARONE","","not_vel_aroma","c","custo"],["d","2026-02",6,"Custo com horas extras setor de produção","",93.25,1,"RAFAEL DOS SANTOS PILIELO","","not_vel_aroma","c","custo"],["d","2026-02",6,"Custo com horas extras setor de produção","",118.23,1,"POLYANA CECILIA ALMEIDA FERREIRA","","not_vel_aroma","c","custo"],["d","2026-02",6,"Custo com horas extras setor de produção","",69.45,1,"KARINA DE LIMA TENORIO","","not_vel_aroma","c","custo"],["d","2026-02",6,"Custo com horas extras setor de produção","",49.79,1,"MARIA LAURA DE MELLO LINO","","not_vel_aroma","c","custo"],["d","2026-02",5,"Vale-Refeição (VR)","",200,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-02",5,"Vale-Refeição (VR)","",137.68,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-02",5,"Vale-Refeição (VR)","",179,1,"KARINA DE LIMA TENORIO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-02",5,"Vale-Refeição (VR)","",200,1,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-02",5,"Vale-Refeição (VR)","",200,1,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-02",5,"Vale-Refeição (VR)","",200,1,"SAMUEL ANTONIO DE SOUZA MARTINS","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-02",6,"Outras despesas (Não considerar DRE)","",2008.12,1,"MARIA LAURA DE MELLO LINO","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-02",6,"Salários e encargos","",1662.32,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-02",6,"Salários e encargos","",2200,1,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-02",6,"Salários e encargos","",1621,1,"KARINA DE LIMA TENORIO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-02",8,"Compra de matéria-prima","",4847.59,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","not_vel_aroma","c","custo"],["d","2026-02",9,"Serviços de sistema de gestão","",228.52,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-02",10,"Despesas com frete para compra de materiais","",350,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-02",10,"Despesas com frete para compra de materiais","",80,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-02",10,"Reembolsos por fora de marketplaces","",25,1,"REEMBOLSOS","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2026-02",10,"Despesas com aluguéis para uso","",2500,1,"PAULO CESAR LOPES (ROPE)","Despesas com aluguéis","not_vel_aroma","c","despesa"],["d","2026-02",10,"Despesas com materiais de consumo","",842.25,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-02",10,"Despesas administrativas","",70,1,"UYARA DISTRIBUIDORA LTDA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-02",10,"Bens de consumo com publicidade","",87.8,1,"MERCADO LIVRE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-02",10,"Compra de matéria-prima","",4287.81,1,"SMART PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-02",10,"Compra de matéria-prima","",4631.28,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-02",10,"Compra de matéria-prima","",2191.72,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-02",10,"Compra de matéria-prima","",250,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2026-02",10,"Compra de matéria-prima","",390.81,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2026-02",10,"Compra de matéria-prima","",2642.43,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2026-02",10,"Compra de matéria-prima","",5790,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-02",10,"Compra de ativo imobilizado","",360,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","","not_vel_aroma","c","investimento"],["d","2026-02",10,"Despesas com outros serviços contratados","",9.9,1,"MERCADO LIVRE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-02",10,"Compra de insumos para produção","",47,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2026-02",10,"Luz, água e outros","",69,1,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2026-02",10,"Outros gastos com publicidade","",174.57,1,"PRINTI - FM IMPRESSOS PERSONALIZADOS LTDA.","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-02",10,"Despesas com alimentação","",30.5,1,"Vania Gomes Massaro","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-02",10,"Despesas com alimentação","",308,1,"ORNATA DOMUS COMPANY LTDA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-02",11,"Compra de matéria-prima","",3106.96,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2026-02",11,"Compra de matéria-prima","",4683.71,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-02",11,"Compra de mercadorias","",6681,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","not_vel_aroma","c","custo"],["d","2026-02",11,"Outras despesas (Não considerar DRE)","",7000,1,"ORNATA DOMUS COMPANY LTDA","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-02",7,"Serviços de sistema de gestão","",24.91,1,"SERASA S.A.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-02",7,"Serviços de sistema de gestão","",40.9,1,"TINY ERP","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-02",7,"Serviços de sistema de gestão","",199.95,1,"JODDA TECNOLOGIA E SOLUCOES LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-02",7,"Serviços de sistema de gestão","",47.66,1,"TINY ERP","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-02",7,"Serviços de sistema de gestão","",228.52,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-02",7,"Serviços de sistema de gestão","",32.32,1,"TINY ERP","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-02",13,"Despesas com frete para compra de materiais","",80,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-02",7,"Despesas com materiais de consumo","",552.41,1,"SHOPEE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-02",12,"Despesas administrativas","",145.36,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-02",7,"Despesas administrativas","",30,1,"CLARO S.A.","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-02",7,"Compra de matéria-prima","",376.78,1,"TILIFORM INDUSTRIA GRAFICA - EM RECUPERACAO JUDICIAL","","not_vel_aroma","c","custo"],["d","2026-02",7,"Compra de matéria-prima","",514.47,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-02",7,"Compra de insumos para expedição","",1172.5,1,"ECOMPACK EMBALAGENS PARA ECOMMERCE LTDA","","not_vel_aroma","c","custo"],["d","2026-02",7,"Despesas com ADS","",1500,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-02",7,"Despesas com ADS","",1000,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-02",7,"Despesas com ADS","",2300,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-02",7,"Despesas com ADS","",5000,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-02",7,"Despesas com ADS","",1000,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-02",7,"Despesas com ADS","",1500,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-02",7,"Despesas com ADS","",1500,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-02",7,"Compra de ativo imobilizado","",1025,1,"IVAN RODRIGO FALICO","","not_vel_aroma","c","investimento"],["d","2026-02",7,"Compra de ativo imobilizado","",335.5,1,"FORROS E DIVISORIAS RIO PRETO LTDA","","not_vel_aroma","c","investimento"],["d","2026-02",7,"Compra de ativo imobilizado","",405,1,"FORROS E DIVISORIAS RIO PRETO LTDA","","not_vel_aroma","c","investimento"],["d","2026-02",7,"Compra de insumos para produção","",175.83,1,"TIQUETA MATERIAL IMPRESSO LTDA","","not_vel_aroma","c","custo"],["d","2026-02",7,"Outras despesas (Não considerar DRE)","",442.85,1,"AMAZON","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-02",7,"Outras despesas (Não considerar DRE)","",636.28,1,"AMAZON","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-02",13,"Despesas com frete para compra de materiais","",300,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-02",13,"Compra de matéria-prima","",1928.63,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-02",13,"Outras despesas","",200,1,"JOSE LUIZ MARINO JUNIOR","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-02",13,"Compra de ativo imobilizado","",600,1,"JOSE LUIZ MARINO JUNIOR","","not_vel_aroma","c","investimento"],["d","2026-02",16,"Despesas com frete para compra de materiais","",485,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-02",15,"Despesas com frete para compra de materiais","",878.58,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-02",16,"Serviços de contabilidade","",1000,1,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-02",16,"Serviços de contabilidade","",450,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-02",18,"Despesas com outros serviços contratados","",5054.3,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-02",17,"Compra de matéria-prima","",2191.72,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-02",17,"Compra de matéria-prima","",2643.21,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2026-02",18,"Despesas com materiais de consumo","",52.99,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-02",18,"Compra de matéria-prima","",11580,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-02",18,"Compra de matéria-prima","",3106.96,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2026-02",18,"Compra de matéria-prima","",4683.71,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-02",18,"Compra de mercadorias","",5280,1,"ENNATERRA AROMATIZADORES LTDA","","not_vel_aroma","c","custo"],["d","2026-02",18,"Compra de ativo imobilizado","",1200,1,"VALNEI ALESSANDRO DE OLIVEIRA - ELETRICISTA","","not_vel_aroma","c","investimento"],["d","2026-02",18,"Comissões","",285.47,1,"TIAGO SANTOS MOURA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-02",19,"Compra de ativo imobilizado","",1150,1,"EDERSON ROGERIO FERREIRA - DIVISÓRIAS","","not_vel_aroma","c","investimento"],["d","2026-02",19,"Despesas com outros serviços contratados","",1412,1,"MARRI CONSULTORIA EMPRESARIAL LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-02",20,"Serviços contratados para marketing","",700,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-02",20,"Despesas com frete para compra de materiais","",95,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-02",20,"Despesas com frete para compra de materiais","",40,1,"ROBSON DE LIMA DA SILVA - FRETE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-02",20,"Despesas com frete para compra de materiais","",250,1,"ROBSON DE LIMA DA SILVA - FRETE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-02",20,"Despesas administrativas","",10962.34,1,"TABELIAO DE NOTAS E DE PROTESTO DE LETRAS E TITULOS DA COMARCA DE AURIFLAMA-SP","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-02",20,"Compra de matéria-prima","",744.98,1,"SENIR EMBALAGENS LTDA","","not_vel_aroma","c","custo"],["d","2026-02",20,"Compra de matéria-prima","",1743.91,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-02",20,"Compra de matéria-prima","",1928.63,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-02",20,"Compra de matéria-prima","",1229.95,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2026-02",20,"Impostos sobre receita","",1326.58,1,"SIMPLES NACIONAL","","not_vel_aroma","c","custo"],["d","2026-02",20,"Luz, água e outros","",352.74,1,"ELEKTRO REDES S.A.","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2026-02",19,"Salários e encargos","",318.4,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-02",20,"Salários e encargos","",309.56,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-02",23,"Despesas com frete para compra de materiais","",800,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-02",23,"Despesas com frete para devolução e reenvio","",622.62,1,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-02",23,"Compra de matéria-prima","",14475,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-02",23,"Compra de matéria-prima","",2909.29,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-02",23,"Compra de matéria-prima","",3303.21,1,"SENIR EMBALAGENS LTDA","","not_vel_aroma","c","custo"],["d","2026-02",23,"Compra de mercadorias","",5280,1,"ENNATERRA AROMATIZADORES LTDA","","not_vel_aroma","c","custo"],["d","2026-02",23,"Custo com horas extras setor de produção","",753.33,1,"DANIELLY DE SOUSA SILVA","","not_vel_aroma","c","custo"],["d","2026-02",24,"Despesas com frete para compra de materiais","",60,1,"CAMILA OLIMPIO CARMONA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-02",24,"Despesas administrativas","",2174.55,1,"TABELIAO DE NOTAS E DE PROTESTO DE LETRAS E TITULOS DA COMARCA DE AURIFLAMA-SP","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-02",24,"Compra de matéria-prima","",2191.72,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-02",24,"Compra de insumos para expedição","",132,1,"AMORIM LISBOA LTDA - D'CORACAO VISUAL","","not_vel_aroma","c","custo"],["d","2026-02",24,"Compra de insumos para expedição","",642,1,"VALDERI FERREIRA BARBOSA JUNIOR - IMPAKTO VISUAL","","not_vel_aroma","c","custo"],["d","2026-02",24,"Vestuário de trabalho","",733.5,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-02",25,"Despesas com frete para compra de materiais","",300,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-02",25,"Compra de matéria-prima","",3107.9,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2026-02",26,"Compra de insumos para expedição","",753.76,1,"TOLOY COMERCIO DE EMBALAGENS LTDA.","","not_vel_aroma","c","custo"],["d","2026-02",27,"Despesas administrativas","",30,1,"OUTSIDE THE BOX LTDA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-02",27,"Compra de matéria-prima","",1743.91,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-02",27,"Compra de matéria-prima","",1229.95,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2026-02",27,"Impostos e Taxas","",471.15,1,"SECRETARIA DA FAZENDA E PLANEJAMENTO","Despesas Financeiras","not_vel_aroma","c","despesa"],["d","2026-02",28,"Despesas com frete para compra de materiais","",1096.02,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-02",4,"Compra de matéria-prima","",6150,1,"FORMULARIOS COVOLAN LTDA.","","not_vel_aroma","c","custo"],["d","2026-03",4,"Despesas com alimentação","",196,1,"MARLENE DE SOUZA SILVA LTDA - PADARIA NOVA OPÇÃO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-03",2,"Serviços de sistema de gestão","",149,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-03",2,"Despesas com frete para compra de materiais","",60,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-03",2,"Despesas com frete para compra de materiais","",1200,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-03",2,"Despesas administrativas","",25.99,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-03",2,"Compra de matéria-prima","",8689.49,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-03",2,"Compra de ativo imobilizado","",510,1,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","investimento"],["d","2026-03",2,"Luz, água e outros","",165.04,1,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2026-03",3,"Compra de matéria-prima","",2191.72,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-03",4,"Despesas com frete para compra de materiais","",250,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-03",4,"Compra de matéria-prima","",2066.65,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2026-03",4,"Compra de matéria-prima","",4287.81,1,"SMART PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-03",4,"Compra de ativo imobilizado","",999,1,"MERCADO LIVRE","","not_vel_aroma","c","investimento"],["d","2026-03",5,"Despesas administrativas","",70,1,"UYARA DISTRIBUIDORA LTDA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-03",5,"Compra de matéria-prima","",1275,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-03",5,"Compra de insumos para produção","",504,1,"TIQUETA MATERIAL IMPRESSO LTDA","","not_vel_aroma","c","custo"],["d","2026-03",5,"Despesas com benefícios aos sócios e diretores","",200,1,"SAMUEL ANTONIO DE SOUZA MARTINS","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-03",5,"Despesas com benefícios aos sócios e diretores","",200,1,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-03",6,"Despesas com materiais de consumo","",36.95,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-03",6,"Compra de matéria-prima","",504.13,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-03",6,"Compra de matéria-prima","",1230.31,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2026-03",6,"Compra de insumos para expedição","",3765.71,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2026-03",6,"Custo com horas extras setor de produção","",161.25,1,"RAFAEL DOS SANTOS PILIELO","","not_vel_aroma","c","custo"],["d","2026-03",6,"Custo com horas extras setor de produção","",24.55,1,"LEANDRO MARTINS BELCHIOR DA SILVA","","not_vel_aroma","c","custo"],["d","2026-03",6,"Custo com horas extras setor de produção","",31.7,1,"KARINA DE LIMA TENORIO","","not_vel_aroma","c","custo"],["d","2026-03",6,"Custo com horas extras setor de produção","",46.57,1,"MARIA LAURA DE MELLO LINO","","not_vel_aroma","c","custo"],["d","2026-03",6,"Custo com horas extras setor de produção","",238.5,1,"POLYANA CECILIA ALMEIDA FERREIRA","","not_vel_aroma","c","custo"],["d","2026-03",6,"Custo com horas extras setor de produção","",130.91,1,"ISABELA TENORIO BARONE","","not_vel_aroma","c","custo"],["d","2026-03",5,"Vale-Refeição (VR)","",137.68,1,"KARINA DE LIMA TENORIO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-03",5,"Vale-Refeição (VR)","",200,1,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-03",5,"Vale-Refeição (VR)","",137.68,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-03",5,"Vale-Refeição (VR)","",200,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-03",6,"Salários e encargos","",450,1,"KATHEREIN CRISTINA DE SOUSA CUSTODIO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-03",6,"Salários e encargos","",1662.32,1,"KARINA DE LIMA TENORIO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-03",6,"Salários e encargos","",1270.53,1,"ISABELA TENORIO BARONE","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-03",6,"Salários e encargos","",450,1,"LEANDRO MARTINS BELCHIOR DA SILVA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-03",6,"Salários e encargos","",1662.32,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-03",6,"Salários e encargos","",2008.12,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-03",6,"Salários e encargos","",2200,1,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-03",20,"Despesa com férias de funcionário","",2669.29,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-03",8,"Compra de matéria-prima","",4847.59,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","not_vel_aroma","c","custo"],["d","2026-03",9,"Serviços de sistema de gestão","",270,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-03",9,"Serviços de sistema de gestão","",228.52,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-03",9,"Despesas com frete para compra de materiais","",135,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-03",9,"Despesas com outros serviços contratados","",80,1,"VANDERSON BARALDI GABRIEL","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-03",9,"Despesas com outros serviços contratados","",30,1,"C B L CORREA LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-03",10,"Despesas com aluguéis para uso","",2500,1,"PAULO CESAR LOPES (ROPE)","Despesas com aluguéis","not_vel_aroma","c","despesa"],["d","2026-03",10,"Despesas com materiais de consumo","",283.84,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-03",10,"Despesas com materiais de consumo","",270,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-03",10,"Despesas com materiais de consumo","",189,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-03",10,"Compra de matéria-prima","",2570.25,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2026-03",10,"Compra de matéria-prima","",2191.72,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-03",10,"Compra de insumos para expedição","",490,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2026-03",10,"Compra de ativo imobilizado","",472.26,1,"MERCADO LIVRE","","not_vel_aroma","c","investimento"],["d","2026-03",10,"Compra de ativo imobilizado","",360,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","","not_vel_aroma","c","investimento"],["d","2026-03",10,"Despesas com outros serviços contratados","",9.9,1,"MERCADO LIVRE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-03",10,"Compra de insumos para produção","",320,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2026-03",10,"Compra de insumos para produção","",136.92,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2026-03",10,"Luz, água e outros","",69,1,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2026-03",11,"Compra de matéria-prima","",5608.8,1,"GOLDEN PLASTIC COMERCIO E SERVICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-03",11,"Compra de matéria-prima","",2066.65,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2026-03",11,"Compra de mercadorias","",9879,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","not_vel_aroma","c","custo"],["d","2026-03",11,"Custo com horas extras setor de produção","",338.41,1,"KATHEREIN CRISTINA DE SOUSA CUSTODIO","","not_vel_aroma","c","custo"],["d","2026-03",11,"Despesas com outros serviços contratados","",100,1,"MARCELO MONTANARO TENORIO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-03",11,"Comissões","",395.5,1,"TIAGO SANTOS MOURA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-03",10,"Serviços de sistema de gestão","",40.9,1,"TINY ERP","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-03",10,"Serviços de sistema de gestão","",24.91,1,"SERASA S.A.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-03",10,"Serviços de sistema de gestão","",32.32,1,"TINY ERP","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-03",10,"Serviços de sistema de gestão","",199.95,1,"JODDA TECNOLOGIA E SOLUCOES LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-03",10,"Despesas administrativas","",30,1,"CLARO S.A.","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-03",12,"Compra de matéria-prima","",5820,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-03",10,"Compra de matéria-prima","",514.46,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-03",10,"Compra de insumos para expedição","",1172.5,1,"ECOMPACK EMBALAGENS PARA ECOMMERCE LTDA","","not_vel_aroma","c","custo"],["d","2026-03",10,"Despesas com ADS","",1000,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-03",10,"Despesas com ADS","",1500,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-03",10,"Despesas com ADS","",2300,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-03",10,"Despesas com ADS","",2000,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-03",10,"Despesas com ADS","",5000,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-03",10,"Despesas com ADS","",3000,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-03",10,"Despesas com ADS","",2000,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-03",10,"Despesas com ADS","",1000,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-03",10,"Compra de ativo imobilizado","",1025,1,"IVAN RODRIGO FALICO","","not_vel_aroma","c","investimento"],["d","2026-03",10,"Compra de ativo imobilizado","",335.5,1,"FORROS E DIVISORIAS RIO PRETO LTDA","","not_vel_aroma","c","investimento"],["d","2026-03",10,"Compra de insumos para produção","",175.83,1,"TIQUETA MATERIAL IMPRESSO LTDA","","not_vel_aroma","c","custo"],["d","2026-03",10,"Outras despesas (Não considerar DRE)","",138.7,1,"AMAZON","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-03",13,"Despesas com frete para compra de materiais","",135,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-03",13,"Despesas com frete para compra de materiais","",160,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-03",13,"Despesas com frete para compra de materiais","",17.35,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-03",13,"Despesas com frete para compra de materiais","",10.6,1,"VIARONDON - PEDÁGIO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-03",13,"Despesas administrativas","",104.7,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-03",13,"Compra de matéria-prima","",960,1,"FASIL INDUSTRIA E COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-03",13,"Compra de matéria-prima","",3035.38,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-03",15,"Despesas com frete para compra de materiais","",2461.21,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-03",15,"Despesas com frete para compra de materiais","",313.33,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-03",16,"Serviços de contabilidade","",1000,1,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-03",15,"Serviços de contabilidade","",450,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-03",16,"Despesas com outros serviços contratados","",4298.88,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-03",16,"Despesas com frete para compra de materiais","",105,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-03",16,"Pagamento de empréstimo","",5498.75,1,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2026-03",16,"Compra de insumos para produção","",153.9,1,"JANAINA GIOLO COMERCIO - FERAX","","not_vel_aroma","c","custo"],["d","2026-03",17,"Compra de matéria-prima","",2570.25,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2026-03",18,"Compra de matéria-prima","",1060,1,"SMART PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-03",18,"Compra de matéria-prima","",2067.28,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2026-03",18,"Compra de matéria-prima","",152,1,"D MARTINEZ COMERCIO DE CORANTES LTDA - POWER CORANTES","","not_vel_aroma","c","custo"],["d","2026-03",18,"Compra de matéria-prima","",11640,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-03",18,"Compra de insumos para expedição","",734.16,1,"TOLOY COMERCIO DE EMBALAGENS LTDA.","","not_vel_aroma","c","custo"],["d","2026-03",20,"Despesas com frete para compra de materiais","",250,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-03",19,"Compra de matéria-prima","",5224.45,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","not_vel_aroma","c","custo"],["d","2026-03",20,"Serviços contratados para marketing","",700,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-03",20,"Despesas com frete para compra de materiais","",385,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-03",20,"Despesas com materiais de consumo","",44.16,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-03",20,"Despesas administrativas","",39.95,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-03",20,"Compra de insumos para expedição","",962,1,"VALDERI FERREIRA BARBOSA JUNIOR - IMPAKTO VISUAL","","not_vel_aroma","c","custo"],["d","2026-03",20,"Impostos sobre receita","",2754.02,1,"SIMPLES NACIONAL","","not_vel_aroma","c","custo"],["d","2026-03",20,"Compra de insumos para produção","",25,1,"DROGARIA BRASIL - FARMÁCIA","","not_vel_aroma","c","custo"],["d","2026-03",20,"Outras despesas (Não considerar DRE)","",1000,1,"JONATHAN ROQUE DE SOUZA","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-03",20,"Salários e encargos","",496.71,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-03",20,"Salários e encargos","",568,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-03",21,"Compra de insumos para expedição","",3765.71,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2026-03",23,"Despesas com frete para devolução e reenvio","",498.46,1,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-03",24,"Despesas com frete para compra de materiais","",150.33,1,"FLASHMEN PASSAGENS E ENCOMENDAS LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-03",24,"Compra de matéria-prima","",6056.05,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-03",24,"Compra de matéria-prima","",2571.03,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2026-03",24,"Compra de matéria-prima","",1245.12,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2026-03",24,"Despesas com outros serviços contratados","",750,1,"ELEN FERNANDA CONTE - ARQUITETA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-03",24,"Luz, água e outros","",424.33,1,"ELEKTRO REDES S.A.","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2026-03",25,"Compra de matéria-prima","",4068.05,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","not_vel_aroma","c","custo"],["d","2026-03",25,"Compra de matéria-prima","",57.88,1,"SUPERMERCADO SÃO LUIS","","not_vel_aroma","c","custo"],["d","2026-03",25,"Compra de matéria-prima","",4193.33,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-03",27,"Despesas administrativas","",56,1,"UYARA DISTRIBUIDORA LTDA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-02",4,"Compra de matéria-prima","",6150,1,"FORMULARIOS COVOLAN LTDA.","","not_vel_aroma","c","custo"],["d","2026-03",28,"Compra de insumos para expedição","",2105.9,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2026-03",28,"Outras despesas (Não considerar DRE)","",350,1,"CRISTIANE ROCAILKS DE ARAUJO","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-03",30,"Despesas com frete para compra de materiais","",497.16,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-03",30,"Despesas com frete para compra de materiais","",763.65,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-03",30,"Compra de matéria-prima","",1487.03,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-03",31,"Compra de matéria-prima","",1245.12,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2026-03",31,"Compra de matéria-prima","",295.64,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2026-03",31,"Impostos e Taxas","",477.48,1,"SECRETARIA DA FAZENDA E PLANEJAMENTO","Despesas Financeiras","not_vel_aroma","c","despesa"],["d","2026-03",31,"Outras despesas (Não considerar DRE)","",200,1,"SAMUEL ANTONIO DE SOUZA MARTINS","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-04",1,"Serviços de sistema de gestão","",149,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",1,"Despesas com frete para compra de materiais","",900,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",1,"Despesas com frete para compra de materiais","",45,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",1,"Despesas com frete para compra de materiais","",300,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",1,"Compra de matéria-prima","",4750.61,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-04",1,"Compra de matéria-prima","",4193.31,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-04",1,"Luz, água e outros","",182.52,1,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2026-04",6,"Despesas com alimentação","",427,1,"MARLENE DE SOUZA SILVA LTDA - PADARIA NOVA OPÇÃO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-04",2,"Despesas com materiais de consumo","",104.7,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-04",2,"Despesas administrativas","",1998.61,1,"CETESB COMPANHIA AMBIENTAL DO ESTADO DE SAO PAULO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-04",3,"Compra de matéria-prima","",2314.84,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2026-04",3,"Compra de matéria-prima","",8200.57,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2026-04",6,"Compra de insumos para expedição","",780,1,"MUNDO GIBA LTDA - MUNDO GB","","not_vel_aroma","c","custo"],["d","2026-04",4,"Outras despesas (Não considerar DRE)","",150,1,"JONATHAN ROQUE DE SOUZA","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-04",5,"Compra de matéria-prima","",504.12,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-04",5,"Compra de insumos para expedição","",3765.7,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2026-04",6,"Despesas administrativas","",2500,1,"EXTINFER - DANILO ANTONIO COSTA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-04",6,"Compra de matéria-prima","",1487.03,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-04",6,"Direitos a receber","",30,1,"SICREDI","","not_vel_aroma","c","investimento"],["d","2026-04",7,"Salários e encargos","",1729.86,1,"ISABELA TENORIO BARONE","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-04",7,"Salários e encargos","",1729.86,1,"LEANDRO MARTINS BELCHIOR DA SILVA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-04",7,"Despesas com benefícios aos sócios e diretores","",200,1,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-04",7,"Despesas com benefícios aos sócios e diretores","",200,1,"SAMUEL ANTONIO DE SOUZA MARTINS","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-04",7,"Serviços de sistema de gestão","",228.52,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",7,"Compra de matéria-prima","",1245.5,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2026-04",8,"Compra de matéria-prima","",5860,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-04",8,"Compra de matéria-prima","",5167.36,1,"SMART PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-04",7,"Compra de matéria-prima","",295.64,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2026-04",7,"Custo com horas extras setor de produção","",83.18,1,"KARINA DE LIMA TENORIO","","not_vel_aroma","c","custo"],["d","2026-04",7,"Custo com horas extras setor de produção","",144.5,1,"RAFAEL DOS SANTOS PILIELO","","not_vel_aroma","c","custo"],["d","2026-04",7,"Custo com horas extras setor de produção","",194.11,1,"LEANDRO MARTINS BELCHIOR DA SILVA","","not_vel_aroma","c","custo"],["d","2026-04",7,"Custo com horas extras setor de produção","",69.27,1,"ISABELA TENORIO BARONE","","not_vel_aroma","c","custo"],["d","2026-04",7,"Vale-Refeição (VR)","",137.68,1,"LEANDRO MARTINS BELCHIOR DA SILVA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-04",7,"Vale-Refeição (VR)","",137.68,1,"KARINA DE LIMA TENORIO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-04",7,"Vale-Refeição (VR)","",137.68,1,"ISABELA TENORIO BARONE","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-04",7,"Vale-Refeição (VR)","",137.68,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-04",7,"Vale-Refeição (VR)","",200,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-04",7,"Vale-Refeição (VR)","",200,1,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-04",8,"Despesas com alimentação","",18.3,1,"KARINA DE LIMA TENORIO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-04",7,"Salários e encargos","",20,1,"ISABELA TENORIO BARONE","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-04",7,"Salários e encargos","",1660.17,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-04",7,"Salários e encargos","",1110,1,"VITORIA CRISTINA TANGODA MAIA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-04",7,"Salários e encargos","",1662.32,1,"KARINA DE LIMA TENORIO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-04",7,"Salários e encargos","",468.65,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-04",7,"Salários e encargos","",2200,1,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-04",8,"Despesas com frete para compra de materiais","",350,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",8,"Compra de matéria-prima","",4193.31,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-04",8,"Compra de matéria-prima","",4750.61,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-04",8,"Compra de matéria-prima","",7286.16,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-04",8,"Despesas com outros serviços contratados","",300,1,"CLAUDOMIRO GONÇALVES NOGUEIRA - PEDREIRO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",9,"Impostos e Taxas","",147.53,1,"PREFEITURA MUNICIPAL DE AURIFLAMA","Despesas Financeiras","not_vel_aroma","c","despesa"],["d","2026-04",9,"Despesas com outros serviços contratados","",130.64,1,"CONSELHO DE ARQUITETURA E URBANISMO DE SAO PAULO (CAU-SP)","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",13,"Despesas com aluguéis para uso","",2500,1,"PAULO CESAR LOPES (ROPE)","Despesas com aluguéis","not_vel_aroma","c","despesa"],["d","2026-04",10,"Despesas com materiais de consumo","",360,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-04",10,"Despesas com materiais de consumo","",3.2,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-04",10,"Despesas com materiais de consumo","",203.34,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-04",10,"Despesas com materiais de consumo","",260.49,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-04",10,"Despesas com materiais de consumo","",86.57,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-04",10,"Despesas com materiais de consumo","",57,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-04",10,"Despesas com materiais de consumo","",24.99,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-04",10,"Despesas com materiais de consumo","",189.99,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-04",10,"Despesas com materiais de consumo","",194.5,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-04",10,"Despesas administrativas","",500,1,"EXTINFER - DANILO ANTONIO COSTA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-04",10,"Despesas administrativas","",39,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-04",10,"Compra de matéria-prima","",8200.57,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2026-04",10,"Compra de matéria-prima","",2314.84,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2026-04",10,"Compra de insumos para expedição","",498.2,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2026-04",10,"Compra de ativo imobilizado","",472.26,1,"MERCADO LIVRE","","not_vel_aroma","c","investimento"],["d","2026-04",10,"Compra de ativo imobilizado","",360,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","","not_vel_aroma","c","investimento"],["d","2026-04",10,"Despesas com outros serviços contratados","",300,1,"ESCOBAR & CORREA LTDA - ESCOSEG","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",10,"Despesas com outros serviços contratados","",9.9,1,"MERCADO LIVRE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",10,"Compra de insumos para produção","",50,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2026-04",10,"Outras despesas (Não considerar DRE)","",55,1,"GABRIEL FELIPE PEREIRA DA SILVA","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-04",10,"Outras despesas (Não considerar DRE)","",800,1,"CAMILA RODRIGUES CAJUELA LTDA","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-04",10,"Outras despesas (Não considerar DRE)","",100,1,"VITORIA LEAO DE LIMA","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-04",10,"Luz, água e outros","",69,1,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2026-04",10,"Salários e encargos","",400,1,"KARINA DE LIMA TENORIO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-04",12,"Serviços contratados para marketing","",1.47,1,"LINKTREE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-04",12,"Serviços de sistema de gestão","",162.09,1,"TINY ERP","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",12,"Serviços de sistema de gestão","",399.9,1,"JODDA TECNOLOGIA E SOLUCOES LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",12,"Compra de matéria-prima","",969.77,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-04",12,"Despesas com ADS","",500,1,"BR TIKTOK SHOP BRASIL LTDA","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-04",12,"Despesas com ADS","",500,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-04",12,"Despesas com ADS","",1000,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-04",12,"Despesas com ADS","",119,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-04",12,"Despesas com ADS","",1000,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-04",12,"Despesas com ADS","",700,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-04",12,"Despesas com ADS","",5000,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-04",12,"Outras despesas (Não considerar DRE)","",50.59,1,"AMAZON","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-04",12,"Serviços contratados para marketing","",42,1,"LINKTREE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-04",12,"Serviços contratados para marketing","",1.47,1,"LINKTREE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-04",12,"Serviços contratados para marketing","",42,1,"LINKTREE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-04",12,"Serviços de sistema de gestão","",24.91,1,"SERASA S.A.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",12,"Serviços de sistema de gestão","",40.9,1,"TINY ERP","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",12,"Serviços de sistema de gestão","",362.28,1,"TINY ERP","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",12,"Serviços de sistema de gestão","",32.32,1,"TINY ERP","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",12,"Despesas com materiais de consumo","",348.75,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-04",12,"Despesas com materiais de consumo","",469.74,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-04",12,"Despesas administrativas","",30,1,"CLARO S.A.","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-04",12,"Compra de matéria-prima","",514.46,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-04",12,"Compra de insumos para expedição","",2105.9,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2026-04",12,"Compra de insumos para expedição","",1172.5,1,"ECOMPACK EMBALAGENS PARA ECOMMERCE LTDA","","not_vel_aroma","c","custo"],["d","2026-04",12,"Despesas com ADS","",2000,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-04",12,"Despesas com ADS","",1000,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-04",12,"Despesas com ADS","",100,1,"BR TIKTOK SHOP BRASIL LTDA","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-04",12,"Despesas com ADS","",1000,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-04",12,"Compra de ativo imobilizado","",335.5,1,"FORROS E DIVISORIAS RIO PRETO LTDA","","not_vel_aroma","c","investimento"],["d","2026-04",13,"Despesas com frete para compra de materiais","",100,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",13,"Despesas administrativas","",927.5,1,"GS1 BRASIL - ASSOCIACAO BRASILEIRA DE AUTOMACAO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-04",13,"Compra de matéria-prima","",1487.03,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-04",10,"Compra de mercadorias","",1050,1,"CONCRENOG - PEDRO HENRIQUE NOGUEIRA DA SILVA","","not_vel_aroma","c","custo"],["d","2026-04",14,"Despesas com frete para compra de materiais","",150,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",14,"Despesas com frete para compra de materiais","",50,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",14,"Despesas com frete para compra de materiais","",21.2,1,"VIARONDON - PEDÁGIO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",14,"Compra de matéria-prima","",1510,1,"FASIL INDUSTRIA E COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-04",14,"Compra de matéria-prima","",9987.2,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-04",14,"Compra de matéria-prima","",3350.46,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","not_vel_aroma","c","custo"],["d","2026-04",14,"Compra de matéria-prima","",5800,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-04",14,"Compra de matéria-prima","",295.74,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2026-04",14,"Serviços de contabilidade","",350,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",14,"Compra de insumos para expedição","",731.92,1,"TOLOY COMERCIO DE EMBALAGENS LTDA.","","not_vel_aroma","c","custo"],["d","2026-04",14,"Outras despesas (Não considerar DRE)","",250,1,"LUIZ ANTONIO RONDINI VIEIRA","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-04",15,"Despesas com frete para compra de materiais","",781.12,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",15,"Despesas com frete para compra de materiais","",1536,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",16,"Pagamento de empréstimo","",4025.11,1,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2026-04",15,"Compra de matéria-prima","",4750.61,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-04",15,"Compra de matéria-prima","",4193.31,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-04",28,"Serviços de contabilidade","",1000,1,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",15,"Serviços de contabilidade","",450,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",16,"Compra de mercadorias","",6974.5,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","not_vel_aroma","c","custo"],["d","2026-04",14,"Compra de mercadorias","",3441,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","not_vel_aroma","c","custo"],["d","2026-04",24,"Despesas com outros serviços contratados","",8354.12,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",16,"Despesas com frete para compra de materiais","",200,1,"RICARDO HENRIQUE MIRANDA ZINZA - FRETE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",16,"Despesas com frete para compra de materiais","",150,1,"DANIEL BARBOSA DA SILVA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",16,"Taxas e Encargos Bancários","",168.5,1,"BRADESCO","Despesas Financeiras","not_vel_aroma","c","despesa"],["d","2026-04",17,"Compra de matéria-prima","",2315.53,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2026-04",17,"Compra de matéria-prima","",8203.03,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2026-04",20,"Serviços contratados para marketing","",700,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-04",20,"Despesas com materiais de consumo","",262.4,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-04",20,"Despesas com materiais de consumo","",56,1,"UYARA DISTRIBUIDORA LTDA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-04",20,"Compra de matéria-prima","",1487.03,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-04",20,"Impostos sobre receita","",9819.01,1,"SIMPLES NACIONAL","","not_vel_aroma","c","custo"],["d","2026-04",20,"Outras despesas (Não considerar DRE)","",200,1,"MURILO BISPO ZENELATO","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-04",20,"Salários e encargos","",727.43,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-04",20,"Salários e encargos","",890.77,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-04",22,"Despesas com frete para devolução e reenvio","",2095.75,1,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",21,"Compra de matéria-prima","",3350.47,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","not_vel_aroma","c","custo"],["d","2026-04",21,"Compra de matéria-prima","",9987.2,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-04",22,"Despesas com frete para compra de materiais","",100,1,"ROBSON DE LIMA DA SILVA - FRETE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",22,"Despesas com frete para compra de materiais","",180,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",22,"Compra de matéria-prima","",4750.61,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-04",22,"Compra de matéria-prima","",4193.31,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-04",22,"Outras despesas","",200,1,"MATHEUS SILVA RIBEIRO - COLETA SHOPEE","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-04",23,"Compra de matéria-prima","",5750,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-04",23,"Compra de matéria-prima","",300.13,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2026-04",23,"Compra de insumos para expedição","",1020.48,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2026-04",23,"Compra de insumos para produção","",268.52,1,"JANAINA GIOLO COMERCIO - FERAX","","not_vel_aroma","c","custo"],["d","2026-04",23,"Compra de insumos para produção","",56.78,1,"NASSAR FERREIRA - HOPÇÃO","","not_vel_aroma","c","custo"],["d","2026-04",23,"Outras despesas (Não considerar DRE)","",200,1,"DENILSON GOMES JUNIOR","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-04",23,"Luz, água e outros","",419.23,1,"ELEKTRO REDES S.A.","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2026-04",23,"Despesas com alimentação","",5,1,"AUTO POSTO CAÇULINHA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-04",23,"Salários e encargos","",600,1,"ISABELA TENORIO BARONE","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-04",24,"Despesas com frete para compra de materiais","",150,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",24,"Despesas com frete para compra de materiais","",400,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",24,"Compra de insumos para expedição","",946.8,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2026-04",24,"Despesas com outros serviços contratados","",750,1,"ELEN FERNANDA CONTE - ARQUITETA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",24,"Comissões","",615.8,1,"TIAGO SANTOS MOURA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-04",27,"Compra de matéria-prima","",1487.03,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-04",27,"Compra de mercadorias","",5300,1,"ENNATERRA AROMATIZADORES LTDA","","not_vel_aroma","c","custo"],["d","2026-04",27,"Compra de insumos para expedição","",2105.91,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2026-04",28,"Despesas com frete para compra de materiais","",200,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",28,"Despesas com frete para compra de materiais","",400,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",28,"Compra de matéria-prima","",730,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-04",28,"Compra de matéria-prima","",1715.56,1,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-04",28,"Compra de matéria-prima","",9987.2,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-02",4,"Compra de matéria-prima","",6150,1,"FORMULARIOS COVOLAN LTDA.","","not_vel_aroma","c","custo"],["d","2026-04",28,"Impostos e Taxas","",2314.21,1,"SECRETARIA DA FAZENDA E PLANEJAMENTO","Despesas Financeiras","not_vel_aroma","c","despesa"],["d","2026-04",28,"Despesas com outros serviços contratados","",50,1,"C B L CORREA LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",28,"Compra de insumos para produção","",672,1,"TIQUETA MATERIAL IMPRESSO LTDA","","not_vel_aroma","c","custo"],["d","2026-04",28,"Outras despesas (Não considerar DRE)","",900,1,"VITORIA LEAO DE LIMA","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-04",30,"Despesas com frete para compra de materiais","",100,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",29,"Compra de matéria-prima","",4750.61,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-04",29,"Compra de matéria-prima","",5702.4,1,"GOLDEN PLASTIC COMERCIO E SERVICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-04",29,"Outras despesas (Não considerar DRE)","",1000,1,"SUELI LOPES","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-04",30,"Despesas com frete para compra de materiais","",572.88,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",30,"Despesas com frete para compra de materiais","",1088.37,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",30,"Compra de matéria-prima","",300.13,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2026-04",30,"Compra de matéria-prima","",6227.36,1,"SMART PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-05",3,"Serviços de sistema de gestão","",149,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",4,"Compra de matéria-prima","",1481.5,1,"ELYPLAST RIO PRETO LTDA","","not_vel_aroma","c","custo"],["d","2026-05",4,"Compra de matéria-prima","",5550,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-05",4,"Outras despesas (Não considerar DRE)","",1000,1,"JOAO ANTONIO DA SILVA DOS SANTOS","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-05",4,"Luz, água e outros","",197.3,1,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2026-05",4,"Bonificações, Brindes e Festividades","",200,1,"ISABELA TENORIO BARONE","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-05",4,"Despesas com alimentação","",504.5,1,"MARLENE DE SOUZA SILVA LTDA - PADARIA NOVA OPÇÃO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-05",5,"Despesas com materiais de consumo","",42,1,"UYARA DISTRIBUIDORA LTDA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-05",5,"Despesas administrativas","",1171.44,1,"ANVISA - AGENCIA NACIONAL DE VIGILANCIA SANITARIA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-05",5,"Despesas administrativas","",1057.71,1,"PREFEITURA MUNICIPAL DE AURIFLAMA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-05",5,"Compra de matéria-prima","",730,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-05",5,"Compra de matéria-prima","",1258.2,1,"INTER ESSÊNCIAS - DIB & CAIRES LTDA","","not_vel_aroma","c","custo"],["d","2026-05",5,"Compra de matéria-prima","",1088.18,1,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-05",5,"Compra de matéria-prima","",1715.56,1,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-05",5,"Compra de matéria-prima","",9987.2,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-05",5,"Compra de insumos para expedição","",964.32,1,"TOLOY COMERCIO DE EMBALAGENS LTDA.","","not_vel_aroma","c","custo"],["d","2026-05",5,"Outras despesas (Não considerar DRE)","",200,1,"PEDRO HENRIQUE CUSTODIO MARTINS","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-05",5,"Direitos a receber","",30,1,"SICREDI","","not_vel_aroma","c","investimento"],["d","2026-05",7,"Despesas com benefícios aos sócios e diretores","",200,1,"SAMUEL ANTONIO DE SOUZA MARTINS","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-05",7,"Despesas com benefícios aos sócios e diretores","",200,1,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-05",6,"Despesas com frete para compra de materiais","",350,1,"ROBSON DE LIMA DA SILVA - FRETE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",6,"Despesas com frete para compra de materiais","",120,1,"CAMILA OLIMPIO CARMONA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",6,"Despesas com materiais de consumo","",107.23,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-05",6,"Compra de matéria-prima","",1185.2,1,"ELYPLAST RIO PRETO LTDA","","not_vel_aroma","c","custo"],["d","2026-05",6,"Taxas e Encargos Bancários","",13.1,1,"BRADESCO","Despesas Financeiras","not_vel_aroma","c","despesa"],["d","2026-05",6,"Taxas e Encargos Bancários","",0.86,1,"BRADESCO","Despesas Financeiras","not_vel_aroma","c","despesa"],["d","2026-05",7,"Vale-Refeição (VR)","",137.68,1,"ISABELA TENORIO BARONE","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-05",7,"Vale-Refeição (VR)","",137.68,1,"KARINA DE LIMA TENORIO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-05",7,"Vale-Refeição (VR)","",137.68,1,"VITORIA CRISTINA TANGODA MAIA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-05",7,"Vale-Refeição (VR)","",200,1,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-05",7,"Vale-Refeição (VR)","",137.68,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-05",7,"Vale-Refeição (VR)","",200,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-05",6,"Despesas com alimentação","",25.97,1,"POSTO VISTA ALEGRE SJRP","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-05",6,"Despesas com alimentação","",5,1,"AUTO POSTO CAÇULINHA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-05",7,"Salários e encargos","",1129.86,1,"ISABELA TENORIO BARONE","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-05",7,"Salários e encargos","",1262.32,1,"KARINA DE LIMA TENORIO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-05",7,"Salários e encargos","",1662.32,1,"VITORIA CRISTINA TANGODA MAIA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-05",7,"Salários e encargos","",1729.86,1,"LEANDRO MARTINS BELCHIOR DA SILVA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-05",7,"Salários e encargos","",1539.59,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-05",7,"Salários e encargos","",2200,1,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-05",7,"Salários e encargos","",1662.32,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-05",7,"Serviços de sistema de gestão","",270,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",7,"Serviços de sistema de gestão","",228.52,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",7,"Compra de matéria-prima","",300.23,1,"SYMRISE AROMAS E FRAGRANCIAS LTDA","","not_vel_aroma","c","custo"],["d","2026-05",7,"Compra de insumos para expedição","",884,1,"VALDERI FERREIRA BARBOSA JUNIOR - IMPAKTO VISUAL","","not_vel_aroma","c","custo"],["d","2026-05",7,"Custo com horas extras setor de produção","",169.7,1,"ISABELA TENORIO BARONE","","not_vel_aroma","c","custo"],["d","2026-05",7,"Custo com horas extras setor de produção","",320,1,"CLAUDETE GONÇALVES NOGUEIRA","","not_vel_aroma","c","custo"],["d","2026-05",7,"Custo com horas extras setor de produção","",300.55,1,"POLYANA CECILIA ALMEIDA FERREIRA","","not_vel_aroma","c","custo"],["d","2026-05",7,"Custo com horas extras setor de produção","",384.31,1,"KARINA DE LIMA TENORIO","","not_vel_aroma","c","custo"],["d","2026-05",7,"Custo com horas extras setor de produção","",298.91,1,"LEANDRO MARTINS BELCHIOR DA SILVA","","not_vel_aroma","c","custo"],["d","2026-05",7,"Custo com horas extras setor de produção","",320,1,"DANIELLY DE SOUSA SILVA","","not_vel_aroma","c","custo"],["d","2026-05",7,"Custo com horas extras setor de produção","",322.09,1,"VITORIA CRISTINA TANGODA MAIA","","not_vel_aroma","c","custo"],["d","2026-05",7,"Custo com horas extras setor de produção","",305.08,1,"RAFAEL DOS SANTOS PILIELO","","not_vel_aroma","c","custo"],["d","2026-05",7,"Vale-Refeição (VR)","",137.68,1,"LEANDRO MARTINS BELCHIOR DA SILVA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-05",11,"Despesas com frete para compra de materiais","",110,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",11,"Despesas com frete para compra de materiais","",70,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",8,"Compra de matéria-prima","",5550,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-05",8,"Compra de insumos para expedição","",1020.48,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2026-05",8,"Custo com horas extras setor de produção","",400,1,"CLAUDETE GONÇALVES NOGUEIRA","","not_vel_aroma","c","custo"],["d","2026-05",9,"Compra de insumos para expedição","",946.8,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2026-05",11,"Despesas com aluguéis para uso","",2500,1,"PAULO CESAR LOPES (ROPE)","Despesas com aluguéis","not_vel_aroma","c","despesa"],["d","2026-05",10,"Despesas com materiais de consumo","",12,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-05",11,"Despesas com materiais de consumo","",194.5,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-05",10,"Despesas com materiais de consumo","",12,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-05",10,"Despesas com materiais de consumo","",168.71,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-05",10,"Despesas com materiais de consumo","",23,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-05",10,"Despesas com materiais de consumo","",184.09,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-05",11,"Despesas com materiais de consumo","",203.33,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-05",11,"Despesas administrativas","",69.82,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-05",10,"Despesas administrativas","",1138.44,1,"CONSELHO REGIONAL DE QUIMICA IV REGIAO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-05",11,"Compra de matéria-prima","",64.5,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2026-05",11,"Compra de matéria-prima","",1527,1,"ELYPLAST RIO PRETO LTDA","","not_vel_aroma","c","custo"],["d","2026-05",6,"Compra de matéria-prima","",969.76,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-05",11,"Compra de insumos para expedição","",498.2,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2026-05",10,"Compra de ativo imobilizado","",360,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","","not_vel_aroma","c","investimento"],["d","2026-05",11,"Compra de ativo imobilizado","",472.26,1,"MERCADO LIVRE","","not_vel_aroma","c","investimento"],["d","2026-05",11,"Despesas com outros serviços contratados","",9.9,1,"MERCADO LIVRE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",10,"Luz, água e outros","",69,1,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2026-05",11,"Outros gastos com publicidade","",123.69,1,"PRINTI - FM IMPRESSOS PERSONALIZADOS LTDA.","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-05",11,"Despesas com frete para compra de materiais","",180,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",10,"Compra de matéria-prima","",1768.85,1,"TILIFORM INDUSTRIA GRAFICA - EM RECUPERACAO JUDICIAL","","not_vel_aroma","c","custo"],["d","2026-05",11,"Salários e encargos","",20,1,"VITORIA CRISTINA TANGODA MAIA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-05",11,"Salários e encargos","",250,1,"KARINA DE LIMA TENORIO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-05",12,"Despesa com materiais de uso e consumo operacional","",900,1,"CARRAPICHO - SERRALHEIRO","","not_vel_aroma","c","custo"],["d","2026-05",6,"Serviços contratados para marketing","",42,1,"LINKTREE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-05",6,"Serviços contratados para marketing","",42,1,"LINKTREE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-05",6,"Serviços contratados para marketing","",1.47,1,"LINKTREE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-05",6,"Serviços contratados para marketing","",1.47,1,"LINKTREE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-05",6,"Serviços de sistema de gestão","",162.09,1,"TINY ERP","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",6,"Serviços de sistema de gestão","",24.99,1,"SERASA S.A.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",6,"Serviços de sistema de gestão","",40.9,1,"TINY ERP","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",6,"Serviços de sistema de gestão","",362.28,1,"TINY ERP","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-04",29,"Serviços de sistema de gestão","",399.9,1,"JODDA TECNOLOGIA E SOLUCOES LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",6,"Serviços de sistema de gestão","",270,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",13,"Despesas com frete para compra de materiais","",110,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",13,"Despesas com frete para compra de materiais","",180,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",6,"Despesas com materiais de consumo","",469.73,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-05",6,"Despesas administrativas","",30,1,"CLARO S.A.","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-05",12,"Compra de matéria-prima","",9987.2,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-05",12,"Compra de matéria-prima","",1088.18,1,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-05",12,"Compra de matéria-prima","",2655.02,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-05",12,"Compra de matéria-prima","",8778.23,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-05",12,"Compra de matéria-prima","",730,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-05",12,"Compra de matéria-prima","",1715.56,1,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-05",6,"Despesas com ADS","",1000,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-05",6,"Despesas com ADS","",1000,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-05",6,"Despesas com ADS","",1000,1,"BR TIKTOK SHOP BRASIL LTDA","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-05",6,"Despesas com ADS","",3000,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-05",6,"Despesas com ADS","",290,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-05",13,"Despesas com outros serviços contratados","",50,1,"WELBER SANDER LULIO DE OLIVEIRA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",12,"Despesas com outros serviços contratados","",450,1,"CARRAPICHO - SERRALHEIRO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",13,"Despesa com materiais de uso e consumo operacional","",14,1,"MURILO BISPO ZENELATO","","not_vel_aroma","c","custo"],["d","2026-05",13,"Compra de matéria-prima","",2250,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-05",13,"Compra de matéria-prima","",8175,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-05",13,"Compra de mercadorias","",5300,1,"ENNATERRA AROMATIZADORES LTDA","","not_vel_aroma","c","custo"],["d","2026-05",13,"Compra de insumos para expedição","",1229.52,1,"TOLOY COMERCIO DE EMBALAGENS LTDA.","","not_vel_aroma","c","custo"],["d","2026-05",14,"Despesas com frete para compra de materiais","",150,1,"55.193.755 PAULO EDUARDO FERNANDES PEREIRA - MOTORISTA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",14,"Despesas com frete para compra de materiais","",50,1,"CAMILA OLIMPIO CARMONA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",15,"Despesas com frete para compra de materiais","",300,1,"SAULO CAMARGO MARQUES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",15,"Despesas com frete para compra de materiais","",791.65,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",15,"Despesas com frete para compra de materiais","",60,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",15,"Pagamento de empréstimo","",3988.23,1,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2026-05",15,"Serviços de contabilidade","",450,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",15,"Serviços de contabilidade","",1000,1,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",15,"Compra de mercadorias","",8621,1,"EMMILY REGINA COSMO BETARELLO - FLORAE","","not_vel_aroma","c","custo"],["d","2026-05",15,"Despesas com outros serviços contratados","",8116.24,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",16,"Despesas com frete para compra de materiais","",200,1,"ROBSON DE LIMA DA SILVA - FRETE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",18,"Compra de insumos para expedição","",1101.8,1,"TOLOY COMERCIO DE EMBALAGENS LTDA.","","not_vel_aroma","c","custo"],["d","2026-05",19,"Despesas com frete para compra de materiais","",350,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",19,"Compra de matéria-prima","",1715.57,1,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-05",19,"Compra de matéria-prima","",1088.18,1,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-05",19,"Compra de matéria-prima","",730,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-05",19,"Compra de matéria-prima","",2655.02,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-05",19,"Compra de matéria-prima","",8778.21,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-05",19,"Compra de insumos para expedição","",70,1,"BINHO - TOTAL CARTUCHO","","not_vel_aroma","c","custo"],["d","2026-05",19,"Outras despesas (Não considerar DRE)","",150,1,"DENILSON GOMES JUNIOR","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-05",20,"Serviços contratados para marketing","",700,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-05",20,"Despesas com frete para compra de materiais","",300,1,"ROBSON DE LIMA DA SILVA - FRETE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",20,"Despesas com frete para compra de materiais","",350,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",20,"Despesas administrativas","",30,1,"PEDRO HENRIQUE SOUZA CARMO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-05",20,"Compra de matéria-prima","",6249.35,1,"SMART PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-05",20,"Compra de matéria-prima","",8025,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-05",20,"Impostos sobre receita","",14055.43,1,"SIMPLES NACIONAL","","not_vel_aroma","c","custo"],["d","2026-05",20,"Compra de ativo imobilizado","",540.26,1,"BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR","","not_vel_aroma","c","investimento"],["d","2026-05",20,"Comissões","",873.61,1,"TIAGO SANTOS MOURA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-05",20,"Salários e encargos","",907.96,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-05",21,"Despesas com frete para compra de materiais","",200,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",21,"Despesas com frete para devolução e reenvio","",1241.8,1,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",20,"Compra de mercadorias","",234.45,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2026-05",20,"Despesas com ADS","",4000,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-05",20,"Despesas com ADS","",1000,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-05",20,"Despesas com ADS","",1500,1,"BR TIKTOK SHOP BRASIL LTDA","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-05",20,"Compra de ativo imobilizado","",401.67,1,"MERCADO LIVRE","","not_vel_aroma","c","investimento"],["d","2026-05",21,"Outras despesas (Não considerar DRE)","",50,1,"DENILSON GOMES JUNIOR","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-05",22,"Despesas com materiais de consumo","",330.16,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-05",22,"Despesas com materiais de consumo","",16.56,1,"NASSAR FERREIRA - HOPÇÃO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-05",22,"Manutenção predial e benfeitorias","",600,1,"CARRAPICHO - SERRALHEIRO","","not_vel_aroma","c","despesa"],["d","2026-05",22,"Luz, água e outros","",377.05,1,"ELEKTRO REDES S.A.","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2026-05",23,"Compra de insumos para expedição","",1020.48,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2026-05",24,"Compra de insumos para expedição","",946.8,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2026-05",25,"Despesas com outros serviços contratados","",750,1,"ELEN FERNANDA CONTE - ARQUITETA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",26,"Despesas com frete para compra de materiais","",500,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",25,"Compra de matéria-prima","",3990.61,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","not_vel_aroma","c","custo"],["d","2026-05",25,"Despesas com outros serviços contratados","",2431.5,1,"MARRI CONSULTORIA EMPRESARIAL LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",26,"Compra de matéria-prima","",1088.18,1,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-05",26,"Compra de matéria-prima","",8778.21,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-05",26,"Compra de insumos para expedição","",240,1,"TOLOY COMERCIO DE EMBALAGENS LTDA.","","not_vel_aroma","c","custo"],["d","2026-05",26,"Outras despesas (Não considerar DRE)","",250,1,"PEDRO HENRIQUE CUSTODIO MARTINS","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-05",27,"Despesas com frete para compra de materiais","",150,1,"ROBSON DE LIMA DA SILVA - FRETE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",27,"Compra de matéria-prima","",3463.56,1,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-05",27,"Compra de matéria-prima","",5300,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-05",27,"Compra de matéria-prima","",5189.35,1,"SMART PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-05",27,"Compra de matéria-prima","",3045.75,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-05",28,"Reembolsos por fora de marketplaces","",20,1,"REEMBOLSOS","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2026-02",4,"Compra de matéria-prima","",6150,1,"FORMULARIOS COVOLAN LTDA.","","not_vel_aroma","c","custo"],["d","2026-05",28,"Outras despesas","",100,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-05",29,"Serviços de sistema de gestão","",412.66,1,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",29,"Despesas com frete para compra de materiais","",100,1,"ROBSON DE LIMA DA SILVA - FRETE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",29,"Despesas com frete para compra de materiais","",120,1,"CAMILA OLIMPIO CARMONA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",29,"Despesas com materiais de consumo","",500,1,"RICARDO ANTUNES - NATHYPEL","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-05",29,"Compra de insumos para expedição","",1110,1,"MUNDO GIBA LTDA - MUNDO GB","","not_vel_aroma","c","custo"],["d","2026-05",29,"Compra de insumos para expedição","",695.6,1,"VALDERI FERREIRA BARBOSA JUNIOR - IMPAKTO VISUAL","","not_vel_aroma","c","custo"],["d","2026-05",29,"Impostos e Taxas","",402.06,1,"SECRETARIA DA FAZENDA E PLANEJAMENTO","Despesas Financeiras","not_vel_aroma","c","despesa"],["d","2026-05",30,"Despesas com frete para compra de materiais","",2018.35,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",30,"Despesas com frete para compra de materiais","",876.75,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-05",30,"Compra de insumos para expedição","",2600.49,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2026-05",14,"Vestuário de trabalho","",733.5,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-05",31,"Compra de ativo imobilizado","",7200,1,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","investimento"],["d","2026-06",1,"Compra de matéria-prima","",2581.25,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","not_vel_aroma","c","custo"],["d","2026-06",1,"Compra de matéria-prima","",3990.62,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","not_vel_aroma","c","custo"],["d","2026-06",1,"Outras despesas (Não considerar DRE)","",250,1,"DENILSON GOMES JUNIOR","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-06",1,"Luz, água e outros","",182.52,1,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2026-06",3,"Despesas com alimentação","",514,1,"MARLENE DE SOUZA SILVA LTDA - PADARIA NOVA OPÇÃO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-06",2,"Despesas com viagens","",174.68,1,"RODOSNACK S SAO CARLOS BR","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-06",2,"Despesas com viagens","",50,1,"EQUIPARK ESTACIONAMENTO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-06",2,"Despesas com viagens","",12.97,1,"UBER DO BRASIL TECNOLOGIA LTDA.","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-06",2,"Despesas com viagens","",374.6,1,"RESTAURANTE ANDIAMO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-06",2,"Despesas com viagens","",21.5,1,"KAMBUI CHURRASACARIA ARARAQUARA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-06",2,"Despesas com viagens","",321.47,1,"CAMPEAO 38 POSTO DE SERVICOS LTDA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-06",2,"Despesas com viagens","",248.4,1,"BOOKING.COM BRASIL SERVICOS DE RESERVA DE HOTEIS LTDA.","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-06",2,"Compra de matéria-prima","",8778.21,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-06",2,"Compra de matéria-prima","",6128.8,1,"GOLDEN PLASTIC COMERCIO E SERVICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-06",3,"Serviços de sistema de gestão","",149,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-06",3,"Despesas com viagens","",61.45,1,"RESTAURANTE ORANGEE 01 CORUMBA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-06",3,"Despesas com viagens","",10.98,1,"UBER DO BRASIL TECNOLOGIA LTDA.","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-06",3,"Despesas com viagens","",135.92,1,"SUCESSO REDE DE RESTAURANTE SÃO PAULO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-06",3,"Despesas com viagens","",320.08,1,"POSTO MONTE CARLO MIRA MIRASSOL","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-06",3,"Despesas com viagens","",203,1,"RESTAURANTE MADEIRO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-06",3,"Compra de matéria-prima","",3045.75,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-06",3,"Compra de matéria-prima","",4429.54,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-06",3,"Compra de matéria-prima","",1022.45,1,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-06",3,"Compra de matéria-prima","",3463.56,1,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-06",3,"Taxas e Encargos Bancários","",12.15,1,"BRADESCO","Despesas Financeiras","not_vel_aroma","c","despesa"],["d","2026-06",3,"Taxas e Encargos Bancários","",0.21,1,"BRADESCO","Despesas Financeiras","not_vel_aroma","c","despesa"],["d","2026-06",6,"Despesas com frete para compra de materiais","",450,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-06",6,"Despesas com frete para compra de materiais","",170,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-06",4,"Despesas com materiais de consumo","",14.49,1,"VALDIR DA SILVA MATOS AURIFLAMA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-06",5,"Despesas administrativas","",20,1,"FARMÁCIA AVENIDA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-06",5,"Compra de matéria-prima","",8422.6,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-06",5,"Custo com horas extras setor de produção","",504.74,1,"LEANDRO MARTINS BELCHIOR DA SILVA","","not_vel_aroma","c","custo"],["d","2026-06",5,"Custo com horas extras setor de produção","",283.78,1,"POLYANA CECILIA ALMEIDA FERREIRA","","not_vel_aroma","c","custo"],["d","2026-06",5,"Custo com horas extras setor de produção","",275.42,1,"KARINA DE LIMA TENORIO","","not_vel_aroma","c","custo"],["d","2026-06",5,"Custo com horas extras setor de produção","",212.1,1,"ISABELA TENORIO BARONE","","not_vel_aroma","c","custo"],["d","2026-06",5,"Custo com horas extras setor de produção","",88.35,1,"RAFAEL DOS SANTOS PILIELO","","not_vel_aroma","c","custo"],["d","2026-06",5,"Custo com horas extras setor de produção","",196.64,1,"VITORIA CRISTINA TANGODA MAIA","","not_vel_aroma","c","custo"],["d","2026-06",5,"Custo com horas extras setor de produção","",115.09,1,"DANIELLY DE SOUSA SILVA","","not_vel_aroma","c","custo"],["d","2026-06",5,"Direitos a receber","",30,1,"SICREDI","","not_vel_aroma","c","investimento"],["d","2026-06",5,"Salários e encargos","",640,1,"AMANDA LOPES PAIS","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-06",4,"Despesas com benefícios aos sócios e diretores","",200,1,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-06",4,"Despesas com benefícios aos sócios e diretores","",200,1,"SAMUEL ANTONIO DE SOUZA MARTINS","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-06",5,"Serviços de contabilidade","",1000,1,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-06",4,"Vale-Refeição (VR)","",150,1,"VITORIA CRISTINA TANGODA MAIA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-06",4,"Vale-Refeição (VR)","",150,1,"KARINA DE LIMA TENORIO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-06",4,"Vale-Refeição (VR)","",150,1,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-06",4,"Vale-Refeição (VR)","",150,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-06",4,"Vale-Refeição (VR)","",150,1,"DANIELLY DE SOUSA SILVA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-06",4,"Vale-Refeição (VR)","",150,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-06",4,"Vale-Refeição (VR)","",150,1,"ISABELA TENORIO BARONE","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-06",5,"Salários e encargos","",2476.5,1,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-06",5,"Salários e encargos","",2321.35,1,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-06",5,"Salários e encargos","",1957.35,1,"LEANDRO MARTINS BELCHIOR DA SILVA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-06",5,"Salários e encargos","",1957.35,1,"KARINA DE LIMA TENORIO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-06",5,"Salários e encargos","",1660.46,1,"DANIELLY DE SOUSA SILVA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-06",5,"Salários e encargos","",1933.15,1,"ISABELA TENORIO BARONE","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-06",5,"Salários e encargos","",1659.28,1,"VITORIA CRISTINA TANGODA MAIA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-06",5,"Salários e encargos","",2008.12,1,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-06",7,"Serviços de sistema de gestão","",270,1,"UPSELLER TECHNOLOGY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-06",4,"Vale-Refeição (VR)","",150,1,"LEANDRO MARTINS BELCHIOR DA SILVA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-06",8,"Compra de matéria-prima","",5150,1,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-06",8,"Compra de matéria-prima","",2581.25,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","not_vel_aroma","c","custo"],["d","2026-06",9,"Despesas com frete para compra de materiais","",110,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-06",9,"Despesas com frete para compra de materiais","",95,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-06",9,"Compra de matéria-prima","",8778.21,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-06",9,"Compra de matéria-prima","",1768.85,1,"TILIFORM INDUSTRIA GRAFICA - EM RECUPERACAO JUDICIAL","","not_vel_aroma","c","custo"],["d","2026-06",10,"Despesa com materiais de uso e consumo operacional","",299,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2026-06",10,"Despesa com materiais de uso e consumo operacional","",196.8,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2026-06",10,"Despesa com materiais de uso e consumo operacional","",119.8,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2026-06",10,"Despesa com materiais de uso e consumo operacional","",180.4,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2026-06",10,"Despesa com materiais de uso e consumo operacional","",120,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","","not_vel_aroma","c","custo"],["d","2026-06",10,"Despesa com materiais de uso e consumo operacional","",74.7,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2026-06",10,"Despesa com materiais de uso e consumo operacional","",747,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2026-06",10,"Despesa com materiais de uso e consumo operacional","",155.69,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2026-06",10,"Despesa com materiais de uso e consumo operacional","",54.5,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","","not_vel_aroma","c","custo"],["d","2026-06",10,"Despesa com materiais de uso e consumo operacional","",73.4,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2026-06",10,"Despesa com materiais de uso e consumo operacional","",965.7,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2026-06",10,"Despesas com frete para compra de materiais","",100,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-06",10,"Despesas com aluguéis para uso","",2500,1,"PAULO CESAR LOPES (ROPE)","Despesas com aluguéis","not_vel_aroma","c","despesa"],["d","2026-06",10,"Despesas com materiais de consumo","",490,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-06",10,"Despesas com materiais de consumo","",307.36,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-06",10,"Despesas com materiais de consumo","",203.33,1,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-06",10,"Despesas com materiais de consumo","",28,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-06",10,"Despesas com materiais de consumo","",799.61,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-06",10,"Compra de matéria-prima","",4429.54,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-06",10,"Compra de matéria-prima","",3463.56,1,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-06",10,"Compra de matéria-prima","",2873.8,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","not_vel_aroma","c","custo"],["d","2026-06",10,"Compra de matéria-prima","",1022.45,1,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-06",10,"Manutenção predial e benfeitorias","",273.6,1,"RURAL COMERCIAL AGROPECUARIA LTDA","","not_vel_aroma","c","despesa"],["d","2026-06",10,"Compra de ativo imobilizado","",472.26,1,"MERCADO LIVRE","","not_vel_aroma","c","investimento"],["d","2026-06",10,"Despesas com outros serviços contratados","",9.9,1,"MERCADO LIVRE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-06",10,"Compra de insumos para produção","",91.28,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2026-06",10,"Outras despesas (Não considerar DRE)","",50,1,"PAULO EDUARDO CUSTODIO MARTINS","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-06",10,"Outras despesas (Não considerar DRE)","",734,1,"ORNATA DOMUS COMPANY LTDA","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-06",10,"Luz, água e outros","",69,1,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2026-06",10,"Outros gastos com publicidade","",123.69,1,"PRINTI - FM IMPRESSOS PERSONALIZADOS LTDA.","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-06",11,"Serviços contratados para marketing","",1.47,1,"LINKTREE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-06",11,"Serviços contratados para marketing","",42,1,"LINKTREE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-06",11,"Serviços contratados para marketing","",42,1,"LINKTREE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-06",11,"Serviços contratados para marketing","",1.47,1,"LINKTREE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-06",11,"Serviços de sistema de gestão","",40.9,1,"TINY ERP","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-06",11,"Serviços de sistema de gestão","",24.91,1,"SERASA S.A.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-06",11,"Serviços de sistema de gestão","",362.28,1,"TINY ERP","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-06",12,"Despesas com materiais de consumo","",39.48,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-06",11,"Despesas administrativas","",30,1,"CLARO S.A.","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-06",11,"Compra de matéria-prima","",969.76,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-06",11,"Compra de matéria-prima","",973.36,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-06",12,"Compra de matéria-prima","",8422.56,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-06",11,"Compra de mercadorias","",590.36,1,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2026-06",11,"Despesas com ADS","",1000,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-06",11,"Despesas com ADS","",1000,1,"BR TIKTOK SHOP BRASIL LTDA","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-06",11,"Despesas com ADS","",2000,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-06",12,"Compra de ativo imobilizado","",1290.89,1,"TEKNOVAL INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","investimento"],["d","2026-06",11,"Outras despesas (Não considerar DRE)","",470.64,1,"AMAZON","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-06",11,"Outras despesas (Não considerar DRE)","",117.66,1,"AMAZON","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-06",11,"Outras despesas (Não considerar DRE)","",235.32,1,"AMAZON","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-06",11,"Outras despesas (Não considerar DRE)","",250.87,1,"AMAZON","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-06",11,"Outras despesas (Não considerar DRE)","",58.82,1,"AMAZON","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-06",11,"Outras despesas (Não considerar DRE)","",58.83,1,"AMAZON","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-06",11,"Outros gastos com publicidade","",418.06,1,"PRINTI - FM IMPRESSOS PERSONALIZADOS LTDA.","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-06",12,"Bonificações, Brindes e Festividades","",35,1,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-06",14,"Despesas com materiais de consumo","",183.13,1,"TAMBASA - TECIDOS E ARMARINHOS MIGUEL BARTOLOMEU S/A","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-06",14,"Compra de insumos para expedição","",2600.49,1,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2026-06",14,"Compra de ativo imobilizado","",564.33,1,"TAMBASA - TECIDOS E ARMARINHOS MIGUEL BARTOLOMEU S/A","","not_vel_aroma","c","investimento"],["d","2026-06",15,"Despesas com frete para compra de materiais","",694.21,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-06",15,"Despesas com frete para compra de materiais","",1484.51,1,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-06",16,"Despesas com viagens","",218.17,1,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-06",16,"Despesas com viagens","",377.36,1,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-06",16,"Pagamento de empréstimo","",4007.13,1,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2026-06",15,"Compra de matéria-prima","",2581.25,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","not_vel_aroma","c","custo"],["d","2026-06",15,"Serviços de contabilidade","",450,1,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-06",30,"Compra de mercadorias","",11858.5,0,"EMMILY REGINA COSMO BETARELLO - FLORAE","","not_vel_aroma","c","custo"],["d","2026-06",16,"Despesas com outros serviços contratados","",9654.86,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-06",15,"Despesas com outros serviços contratados","",150,1,"ESCOBAR & CORREA LTDA - ESCOSEG","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-06",16,"Despesas com frete para compra de materiais","",450,1,"DARBI RINTON ALVES DO NASCIMENTO","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-06",17,"Despesas com frete para compra de materiais","",600,1,"MARCELO ANTONIO LOZANO - FRETE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-06",17,"Despesas com materiais de consumo","",57.94,1,"FARMACIA AVENIDA DE AURIFLAMA LTDA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-06",17,"Despesas com materiais de consumo","",29.9,1,"SUPERMERCADO SÃO LUIS","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-06",17,"Compra de matéria-prima","",3615,1,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-06",17,"Compra de matéria-prima","",3463.57,1,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-06",17,"Compra de matéria-prima","",8422.56,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-06",17,"Compra de matéria-prima","",2873.79,1,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","not_vel_aroma","c","custo"],["d","2026-06",17,"Manutenção predial e benfeitorias","",400,1,"WELINGTON SOARES DUARTE - PINTOR","","not_vel_aroma","c","despesa"],["d","2026-06",17,"Comissões","",223.57,1,"ALVARO JOAQUIM TRINDADE SOARES","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-06",17,"Comissões","",383.32,1,"TIAGO SANTOS MOURA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-06",18,"Manutenção predial e benfeitorias","",496.9,1,"BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR","","not_vel_aroma","c","despesa"],["d","2026-06",18,"Salários e encargos","",200,1,"ISABELA TENORIO BARONE","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-06",19,"Compra de matéria-prima","",8422.56,1,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-06",19,"Compra de mercadorias","",300,1,"ENNATERRA AROMATIZADORES LTDA","","not_vel_aroma","c","custo"],["d","2026-06",19,"Manutenção predial e benfeitorias","",300,1,"JAIR MACIEL DE OLIVEIRA - PINTOR","","not_vel_aroma","c","despesa"],["d","2026-06",19,"Outras despesas (Não considerar DRE)","",200,1,"DENILSON GOMES JUNIOR","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-06",22,"Salários e encargos","",1171.55,1,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-06",20,"Serviços contratados para marketing","",700,1,"JOSE AMARAL DE ALMEIDA - DESIGNER","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-06",20,"Compra de matéria-prima","",4134.8,1,"PUMP AMERICA INDUSTRIA DE VALVULAS LTDA","","not_vel_aroma","c","custo"],["d","2026-06",20,"Compra de insumos para expedição","",427.84,1,"TOLOY COMERCIO DE EMBALAGENS LTDA.","","not_vel_aroma","c","custo"],["d","2026-06",20,"Compra de insumos para expedição","",360,1,"TOLOY COMERCIO DE EMBALAGENS LTDA.","","not_vel_aroma","c","custo"],["d","2026-06",20,"Compra de ativo imobilizado","",540.25,1,"BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR","","not_vel_aroma","c","investimento"],["d","2026-06",20,"Outras despesas (Não considerar DRE)","",4000,1,"SAMUEL ANTONIO DE SOUZA MARTINS","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-06",20,"Compra de matéria-prima","",888.91,1,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-06",20,"Despesas com ADS","",1000,1,"BR TIKTOK SHOP BRASIL LTDA","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-06",20,"Despesas com ADS","",4000,1,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-06",22,"Juros e Multas","",64.42,1,"CAIXA ECONOMICA FEDERAL","","not_vel_aroma","c","despesa"],["d","2026-06",22,"Despesas com frete para devolução e reenvio","",1800.04,1,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-06",22,"Impostos sobre receita","",17014.29,1,"SIMPLES NACIONAL","","not_vel_aroma","c","custo"],["d","2026-06",22,"Outras despesas (Não considerar DRE)","",1000,1,"JOAO ANTONIO DA SILVA DOS SANTOS","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-06",22,"Outras despesas (Não considerar DRE)","",300,1,"PEDRO HENRIQUE CUSTODIO MARTINS","Despesas não operacionais","not_vel_aroma","c","despesa"],["d","2026-06",23,"Compra de matéria-prima","",5835.2,0,"GOLDEN PLASTIC COMERCIO E SERVICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-06",23,"Luz, água e outros","",259.13,0,"ELEKTRO REDES S.A.","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2026-06",24,"Compra de matéria-prima","",2873.79,0,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","not_vel_aroma","c","custo"],["d","2026-06",24,"Compra de matéria-prima","",3615,0,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-06",24,"Compra de matéria-prima","",8250,0,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-06",24,"Compra de insumos para expedição","",1046.5,0,"TOLOY COMERCIO DE EMBALAGENS LTDA.","","not_vel_aroma","c","custo"],["d","2026-06",24,"Despesas com outros serviços contratados","",750,0,"ELEN FERNANDA CONTE - ARQUITETA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-06",25,"Compra de matéria-prima","",3019.24,0,"ALCOOL FERREIRA - CNA S.A.","","not_vel_aroma","c","custo"],["d","2026-06",25,"Compra de ativo imobilizado","",500,0,"CLIMAK INDUSTRIA E COMERCIO DE MAQUINAS E EQUIPAMENTOS LTDA - EDERMAK","","not_vel_aroma","c","investimento"],["d","2026-06",25,"Despesas com outros serviços contratados","",2431.5,0,"MARRI CONSULTORIA EMPRESARIAL LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-06",26,"Compra de matéria-prima","",8422.56,0,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-06",26,"Compra de matéria-prima","",8418.67,0,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-06",26,"Compra de insumos para expedição","",2071.39,0,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2026-02",4,"Compra de matéria-prima","",6150,1,"FORMULARIOS COVOLAN LTDA.","","not_vel_aroma","c","custo"],["d","2026-06",29,"Serviços de sistema de gestão","",479,0,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-06",29,"Compra de insumos para expedição","",2600.48,0,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2026-06",30,"Despesas com frete para compra de materiais","",474.09,0,"TATIANE DE SOUZA BARONI - TRANSPORTES","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-06",30,"Despesas com frete para compra de materiais","",180,0,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-06",30,"Pagamento de empréstimo","",20161.7,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2026-03",2,"Pagamento de empréstimo","",10000,1,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2026-06",30,"Pagamento de empréstimo","",1678.5,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2026-03",24,"Pagamento de empréstimo","",10000,1,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2026-03",10,"Pagamento de empréstimo","",10000,1,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2026-02",18,"Compra de insumos para expedição","",62.4,1,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","custo"],["d","2026-02",19,"Compra de insumos para expedição","",62.4,1,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","custo"],["d","2026-06",30,"Compra de insumos para expedição","",523.5,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","custo"],["d","2026-02",18,"Compra de insumos para expedição","",157.34,1,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","custo"],["d","2026-02",27,"Compra de ativo imobilizado","",800,1,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","investimento"],["d","2026-05",26,"Compra de ativo imobilizado","",3200,1,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","investimento"],["d","2026-02",27,"Compra de ativo imobilizado","",603.23,1,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","investimento"],["d","2026-06",26,"Compra de ativo imobilizado","",2000,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","investimento"],["d","2026-06",26,"Compra de ativo imobilizado","",2069.87,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","investimento"],["d","2026-03",30,"Compra de ativo imobilizado","",4941.5,1,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","investimento"],["d","2026-06",6,"Compra de ativo imobilizado","",490.5,1,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","investimento"],["d","2026-03",18,"Compra de ativo imobilizado","",599,1,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","investimento"],["d","2026-03",27,"Compra de ativo imobilizado","",2470.75,1,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","investimento"],["d","2026-02",23,"Compra de ativo imobilizado","",514.42,1,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","investimento"],["d","2026-06",30,"Impostos e Taxas","",702.42,0,"SECRETARIA DA FAZENDA E PLANEJAMENTO","Despesas Financeiras","not_vel_aroma","c","despesa"],["d","2026-02",18,"Despesas com outros serviços contratados","",150,1,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-02",19,"Compra de insumos para produção","",305.9,1,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","custo"],["d","2026-06",6,"Compra de insumos para produção","",336,1,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","custo"],["d","2026-06",19,"Compra de insumos para produção","",1988.76,1,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","custo"],["d","2026-02",23,"Compra de insumos para produção","",339.98,1,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","custo"],["d","2026-07",1,"Compra de matéria-prima","",8250,0,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-07",1,"Despesas com alimentação","",514,0,"MARLENE DE SOUZA SILVA LTDA - PADARIA NOVA OPÇÃO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-07",2,"Compra de matéria-prima","",3019.24,0,"ALCOOL FERREIRA - CNA S.A.","","not_vel_aroma","c","custo"],["d","2026-07",2,"Luz, água e outros","",195.7,0,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2026-07",3,"Compra de matéria-prima","",8422.56,0,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-07",3,"Compra de matéria-prima","",8418.68,0,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-07",5,"Compra de mercadorias","",5300,0,"ENNATERRA AROMATIZADORES LTDA","","not_vel_aroma","c","custo"],["d","2026-07",6,"Despesas com benefícios aos sócios e diretores","",200,0,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-07",6,"Despesas com benefícios aos sócios e diretores","",200,0,"SAMUEL ANTONIO DE SOUZA MARTINS","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-07",6,"Serviços de contabilidade","",1000,0,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-07",6,"Vale-Refeição (VR)","",150,0,"ISABELA TENORIO BARONE","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-07",6,"Vale-Refeição (VR)","",150,0,"VITORIA CRISTINA TANGODA MAIA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-07",6,"Vale-Refeição (VR)","",150,0,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-07",6,"Vale-Refeição (VR)","",150,0,"KARINA DE LIMA TENORIO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-07",6,"Vale-Refeição (VR)","",150,0,"DANIELLY DE SOUSA SILVA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-07",6,"Vale-Refeição (VR)","",200,0,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-07",6,"Vale-Refeição (VR)","",137.68,0,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-07",6,"Salários e encargos","",1957.35,0,"LEANDRO MARTINS BELCHIOR DA SILVA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-07",6,"Salários e encargos","",1957.35,0,"KARINA DE LIMA TENORIO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-07",6,"Salários e encargos","",1662.32,0,"VITORIA CRISTINA TANGODA MAIA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-07",6,"Salários e encargos","",2321.35,0,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-07",6,"Salários e encargos","",1757.35,0,"ISABELA TENORIO BARONE","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-07",6,"Salários e encargos","",1662.63,0,"DANIELLY DE SOUSA SILVA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-07",6,"Salários e encargos","",2008.12,0,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-07",6,"Salários e encargos","",2200,0,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-07",7,"Compra de matéria-prima","",2125,0,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-07",7,"Compra de matéria-prima","",3598.9,0,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-07",7,"Vale-Refeição (VR)","",150,0,"LEANDRO MARTINS BELCHIOR DA SILVA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-07",8,"Compra de matéria-prima","",8250,0,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-07",9,"Compra de matéria-prima","",1596.94,0,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","not_vel_aroma","c","custo"],["d","2026-07",10,"Despesa com materiais de uso e consumo operacional","",1688.14,0,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2026-07",10,"Despesa com materiais de uso e consumo operacional","",249,0,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2026-07",10,"Despesa com materiais de uso e consumo operacional","",193,0,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2026-07",10,"Despesa com materiais de uso e consumo operacional","",7.5,0,"COMERCIO DE FERRAGENS E MATERIAIS PARA SOLDA AURIFLAMA LTDA (COFERSOL)","","not_vel_aroma","c","custo"],["d","2026-07",10,"Despesas com aluguéis para uso","",2500,0,"PAULO CESAR LOPES (ROPE)","Despesas com aluguéis","not_vel_aroma","c","despesa"],["d","2026-07",10,"Despesas com materiais de consumo","",123.27,0,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-07",10,"Despesas com materiais de consumo","",169.95,0,"MERCADO LIVRE","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-07",10,"Compra de matéria-prima","",8422.56,0,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-07",10,"Compra de matéria-prima","",8418.68,0,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-07",10,"Compra de insumos para expedição","",7.43,0,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2026-07",10,"Compra de ativo imobilizado","",383,0,"MERCADO LIVRE","","not_vel_aroma","c","investimento"],["d","2026-07",10,"Compra de ativo imobilizado","",472.26,0,"MERCADO LIVRE","","not_vel_aroma","c","investimento"],["d","2026-07",10,"Compra de insumos para produção","",142.5,0,"MERCADO LIVRE","","not_vel_aroma","c","custo"],["d","2026-07",10,"Luz, água e outros","",69,0,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2026-07",11,"Compra de insumos para expedição","",2071.39,0,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2026-07",12,"Serviços contratados para marketing","",42,0,"LINKTREE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-07",12,"Serviços contratados para marketing","",1.47,0,"LINKTREE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-07",12,"Serviços contratados para marketing","",1.47,0,"LINKTREE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-07",12,"Serviços contratados para marketing","",42,0,"LINKTREE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-07",12,"Serviços de sistema de gestão","",24.91,0,"SERASA S.A.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-07",12,"Serviços de sistema de gestão","",362.28,0,"TINY ERP","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-07",12,"Despesas administrativas","",30,0,"CLARO S.A.","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-07",12,"Compra de matéria-prima","",973.35,0,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-07",12,"Despesas com ADS","",622.35,0,"BR TIKTOK SHOP BRASIL LTDA","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-07",12,"Despesas com ADS","",288.71,0,"BR TIKTOK SHOP BRASIL LTDA","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-07",12,"Despesas com ADS","",500,0,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-07",12,"Despesas com outros serviços contratados","",9.9,0,"MERCADO LIVRE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-07",12,"Compra de insumos para produção","",672,0,"TIQUETA MATERIAL IMPRESSO LTDA","","not_vel_aroma","c","custo"],["d","2026-07",14,"Despesas com materiais de consumo","",183.12,0,"TAMBASA - TECIDOS E ARMARINHOS MIGUEL BARTOLOMEU S/A","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-07",14,"Compra de matéria-prima","",2125,0,"CLK - COMERCIO DE PRODUTOS PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-07",14,"Compra de matéria-prima","",3598.9,0,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-07",14,"Compra de ativo imobilizado","",564.33,0,"TAMBASA - TECIDOS E ARMARINHOS MIGUEL BARTOLOMEU S/A","","not_vel_aroma","c","investimento"],["d","2026-07",15,"Pagamento de empréstimo","",3914.47,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2026-07",15,"Compra de matéria-prima","",8250,0,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-07",15,"Serviços de contabilidade","",450,0,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-07",15,"Despesas com outros serviços contratados","",150,0,"ESCOBAR & CORREA LTDA - ESCOSEG","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-07",15,"Despesas com outros serviços contratados","",5000,0,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-07",16,"Compra de matéria-prima","",1596.93,0,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","not_vel_aroma","c","custo"],["d","2026-07",17,"Compra de matéria-prima","",7646.2,0,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-07",17,"Compra de matéria-prima","",8418.68,0,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-07",17,"Compra de mercadorias","",1900,0,"ENNATERRA AROMATIZADORES LTDA","","not_vel_aroma","c","custo"],["d","2026-07",18,"Manutenção predial e benfeitorias","",496.9,0,"BASTOS & FERREIRA MATERIAIS PARA CONSTRUCAO LTDA - CONSTRULAR","","not_vel_aroma","c","despesa"],["d","2026-07",19,"Compra de insumos para expedição","",2170,0,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2026-07",20,"Serviços contratados para marketing","",700,0,"JOSE AMARAL DE ALMEIDA - DESIGNER","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-07",20,"Compra de matéria-prima","",6227.36,0,"SMART PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-07",20,"Impostos sobre receita","",17014.29,0,"SIMPLES NACIONAL","","not_vel_aroma","c","custo"],["d","2026-07",20,"Luz, água e outros","",370,0,"ELEKTRO REDES S.A.","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2026-07",20,"Salários e encargos","",496.71,0,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-07",20,"Salários e encargos","",1171.55,0,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-07",21,"Despesas com frete para devolução e reenvio","",500,0,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-07",21,"Compra de matéria-prima","",888.91,0,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-07",21,"Compra de matéria-prima","",3598.9,0,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-07",21,"Despesas com ADS","",2000,0,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-07",21,"Despesas com ADS","",4000,0,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-07",21,"Despesas com ADS","",500,0,"SHOPEE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-07",21,"Despesas com ADS","",630,0,"BR TIKTOK SHOP BRASIL LTDA","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-07",21,"Despesas com ADS","",1500,0,"BR TIKTOK SHOP BRASIL LTDA","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-07",22,"Compra de matéria-prima","",8250,0,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-07",22,"Compra de insumos para expedição","",81.66,0,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2026-07",23,"Compra de matéria-prima","",1596.93,0,"LEADPAK SOLUCOES DE FORNECIMENTO LTDA","","not_vel_aroma","c","custo"],["d","2026-07",24,"Compra de matéria-prima","",8418.68,0,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-07",24,"Compra de matéria-prima","",7646.21,0,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-07",25,"Compra de ativo imobilizado","",500,0,"CLIMAK INDUSTRIA E COMERCIO DE MAQUINAS E EQUIPAMENTOS LTDA - EDERMAK","","not_vel_aroma","c","investimento"],["d","2026-07",25,"Despesas com outros serviços contratados","",2431.5,0,"MARRI CONSULTORIA EMPRESARIAL LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-07",26,"Compra de insumos para expedição","",2071.38,0,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2026-07",27,"Compra de matéria-prima","",1029.73,0,"PUMP AMERICA INDUSTRIA DE VALVULAS LTDA","","not_vel_aroma","c","custo"],["d","2026-07",28,"Compra de matéria-prima","",3598.91,0,"ECK - INDUSTRIA E COMERCIO DE PLASTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-02",4,"Compra de matéria-prima","",6150,1,"FORMULARIOS COVOLAN LTDA.","","not_vel_aroma","c","custo"],["d","2026-07",29,"Serviços de sistema de gestão","",479,0,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-07",29,"Compra de matéria-prima","",8250,0,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-07",31,"Compra de matéria-prima","",7646.21,0,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-07",31,"Impostos e Taxas","",1670.91,0,"SECRETARIA DA FAZENDA E PLANEJAMENTO","Despesas Financeiras","not_vel_aroma","c","despesa"],["d","2026-08",1,"Compra de mercadorias","",1700,0,"ENNATERRA AROMATIZADORES LTDA","","not_vel_aroma","c","custo"],["d","2026-08",1,"Despesas com alimentação","",514,0,"MARLENE DE SOUZA SILVA LTDA - PADARIA NOVA OPÇÃO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-08",2,"Luz, água e outros","",195.7,0,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2026-08",3,"Compra de matéria-prima","",1029.73,0,"PUMP AMERICA INDUSTRIA DE VALVULAS LTDA","","not_vel_aroma","c","custo"],["d","2026-08",3,"Compra de insumos para expedição","",2170,0,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2026-08",5,"Compra de matéria-prima","",8250,0,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-08",5,"Compra de mercadorias","",5300,0,"ENNATERRA AROMATIZADORES LTDA","","not_vel_aroma","c","custo"],["d","2026-08",6,"Despesas com benefícios aos sócios e diretores","",200,0,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-08",6,"Despesas com benefícios aos sócios e diretores","",200,0,"SAMUEL ANTONIO DE SOUZA MARTINS","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-08",6,"Serviços de contabilidade","",1000,0,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-08",6,"Compra de insumos para expedição","",81.67,0,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2026-08",6,"Vale-Refeição (VR)","",150,0,"KARINA DE LIMA TENORIO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-08",6,"Vale-Refeição (VR)","",150,0,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-08",6,"Vale-Refeição (VR)","",150,0,"VITORIA CRISTINA TANGODA MAIA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-08",6,"Vale-Refeição (VR)","",150,0,"DANIELLY DE SOUSA SILVA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-08",6,"Vale-Refeição (VR)","",150,0,"ISABELA TENORIO BARONE","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-08",6,"Vale-Refeição (VR)","",200,0,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-08",6,"Vale-Refeição (VR)","",137.68,0,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-08",6,"Salários e encargos","",1662.63,0,"DANIELLY DE SOUSA SILVA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-08",6,"Salários e encargos","",1662.32,0,"VITORIA CRISTINA TANGODA MAIA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-08",6,"Salários e encargos","",1957.35,0,"ISABELA TENORIO BARONE","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-08",6,"Salários e encargos","",1957.35,0,"KARINA DE LIMA TENORIO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-08",6,"Salários e encargos","",2321.35,0,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-08",6,"Salários e encargos","",1957.35,0,"LEANDRO MARTINS BELCHIOR DA SILVA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-08",6,"Salários e encargos","",2200,0,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-08",6,"Salários e encargos","",2008.12,0,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-08",7,"Compra de matéria-prima","",7646.21,0,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-08",7,"Vale-Refeição (VR)","",150,0,"LEANDRO MARTINS BELCHIOR DA SILVA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-08",10,"Despesas com aluguéis para uso","",2500,0,"PAULO CESAR LOPES (ROPE)","Despesas com aluguéis","not_vel_aroma","c","despesa"],["d","2026-08",10,"Compra de matéria-prima","",1029.73,0,"PUMP AMERICA INDUSTRIA DE VALVULAS LTDA","","not_vel_aroma","c","custo"],["d","2026-08",10,"Compra de ativo imobilizado","",383,0,"MERCADO LIVRE","","not_vel_aroma","c","investimento"],["d","2026-08",10,"Despesas com outros serviços contratados","",9.9,0,"MERCADO LIVRE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-08",10,"Luz, água e outros","",69,0,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2026-08",12,"Serviços contratados para marketing","",42,0,"LINKTREE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-08",12,"Serviços contratados para marketing","",1.47,0,"LINKTREE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-08",12,"Serviços de sistema de gestão","",24.99,0,"SERASA S.A.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-08",12,"Despesas administrativas","",30,0,"CLARO S.A.","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-08",12,"Compra de matéria-prima","",973.35,0,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-08",12,"Compra de matéria-prima","",8250,0,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-08",13,"Despesas com materiais de consumo","",183.12,0,"TAMBASA - TECIDOS E ARMARINHOS MIGUEL BARTOLOMEU S/A","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-08",13,"Compra de ativo imobilizado","",564.32,0,"TAMBASA - TECIDOS E ARMARINHOS MIGUEL BARTOLOMEU S/A","","not_vel_aroma","c","investimento"],["d","2026-08",14,"Compra de matéria-prima","",7646.21,0,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-08",14,"Compra de mercadorias","",1700,0,"ENNATERRA AROMATIZADORES LTDA","","not_vel_aroma","c","custo"],["d","2026-08",15,"Serviços de contabilidade","",450,0,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-08",15,"Despesas com outros serviços contratados","",150,0,"ESCOBAR & CORREA LTDA - ESCOSEG","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-08",15,"Despesas com outros serviços contratados","",5000,0,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-08",17,"Pagamento de empréstimo","",4037.57,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2026-08",17,"Compra de matéria-prima","",1029.75,0,"PUMP AMERICA INDUSTRIA DE VALVULAS LTDA","","not_vel_aroma","c","custo"],["d","2026-08",18,"Compra de insumos para expedição","",2170,0,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2026-08",19,"Compra de matéria-prima","",8250,0,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-08",20,"Serviços contratados para marketing","",700,0,"JOSE AMARAL DE ALMEIDA - DESIGNER","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-08",20,"Compra de matéria-prima","",6227.36,0,"SMART PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-08",20,"Impostos sobre receita","",17014.29,0,"SIMPLES NACIONAL","","not_vel_aroma","c","custo"],["d","2026-08",20,"Luz, água e outros","",370,0,"ELEKTRO REDES S.A.","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2026-08",20,"Salários e encargos","",496.71,0,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-08",20,"Salários e encargos","",1171.55,0,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-08",21,"Despesas com frete para devolução e reenvio","",500,0,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-08",21,"Compra de matéria-prima","",888.91,0,"FAGRON - SM EMPREENDIMENTOS FARMACEUTICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-08",21,"Compra de matéria-prima","",7646.21,0,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-08",21,"Compra de insumos para expedição","",81.67,0,"PRIME BOX EMBALAGENS PAPELAO LTDA","","not_vel_aroma","c","custo"],["d","2026-08",25,"Compra de ativo imobilizado","",500,0,"CLIMAK INDUSTRIA E COMERCIO DE MAQUINAS E EQUIPAMENTOS LTDA - EDERMAK","","not_vel_aroma","c","investimento"],["d","2026-08",25,"Despesas com outros serviços contratados","",2431.5,0,"MARRI CONSULTORIA EMPRESARIAL LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-08",26,"Compra de matéria-prima","",8250,0,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-08",28,"Compra de matéria-prima","",7646.21,0,"GINGER FRAGRANCES & INGREDIENTS INDUSTRIA E COMERCIO LTDA","","not_vel_aroma","c","custo"],["d","2026-02",4,"Compra de matéria-prima","",6150,1,"FORMULARIOS COVOLAN LTDA.","","not_vel_aroma","c","custo"],["d","2026-08",29,"Serviços de sistema de gestão","",479,0,"NIBO SOFTWARES E CURSOS LTDA.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-09",1,"Despesas com alimentação","",514,0,"MARLENE DE SOUZA SILVA LTDA - PADARIA NOVA OPÇÃO","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-09",2,"Compra de matéria-prima","",8250,0,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-09",2,"Luz, água e outros","",195.7,0,"COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO - SABESP","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2026-09",5,"Compra de mercadorias","",5300,0,"ENNATERRA AROMATIZADORES LTDA","","not_vel_aroma","c","custo"],["d","2026-09",6,"Despesas com benefícios aos sócios e diretores","",200,0,"JOAO EDUARDO GONCALVES NOGUEIRA","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-09",6,"Despesas com benefícios aos sócios e diretores","",200,0,"SAMUEL ANTONIO DE SOUZA MARTINS","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-09",6,"Serviços de contabilidade","",1000,0,"GUILHERME TORCHETTI LOUREIRO DA SILVA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-09",6,"Vale-Refeição (VR)","",150,0,"DANIELLY DE SOUSA SILVA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-09",6,"Vale-Refeição (VR)","",150,0,"KARINA DE LIMA TENORIO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-09",6,"Vale-Refeição (VR)","",150,0,"ISABELA TENORIO BARONE","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-09",6,"Vale-Refeição (VR)","",150,0,"VITORIA CRISTINA TANGODA MAIA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-09",6,"Vale-Refeição (VR)","",150,0,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-09",6,"Vale-Refeição (VR)","",200,0,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-09",6,"Vale-Refeição (VR)","",137.68,0,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-09",6,"Salários e encargos","",1662.63,0,"DANIELLY DE SOUSA SILVA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-09",6,"Salários e encargos","",1957.35,0,"ISABELA TENORIO BARONE","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-09",6,"Salários e encargos","",1957.35,0,"KARINA DE LIMA TENORIO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-09",6,"Salários e encargos","",2321.35,0,"POLYANA CECILIA ALMEIDA FERREIRA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-09",6,"Salários e encargos","",1957.35,0,"LEANDRO MARTINS BELCHIOR DA SILVA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-09",6,"Salários e encargos","",1662.32,0,"VITORIA CRISTINA TANGODA MAIA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-09",6,"Salários e encargos","",2008.12,0,"MARIA LAURA DE MELLO LINO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-09",6,"Salários e encargos","",2200,0,"RAFAEL DOS SANTOS PILIELO","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-09",7,"Vale-Refeição (VR)","",150,0,"LEANDRO MARTINS BELCHIOR DA SILVA","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-09",9,"Compra de matéria-prima","",8250,0,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-09",10,"Despesas com aluguéis para uso","",2500,0,"PAULO CESAR LOPES (ROPE)","Despesas com aluguéis","not_vel_aroma","c","despesa"],["d","2026-09",10,"Compra de ativo imobilizado","",383,0,"MERCADO LIVRE","","not_vel_aroma","c","investimento"],["d","2026-09",10,"Despesas com outros serviços contratados","",9.9,0,"MERCADO LIVRE","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-09",10,"Luz, água e outros","",69,0,"MAYARA B. G. FERNANDES - FTI NET","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2026-09",12,"Serviços contratados para marketing","",1.47,0,"LINKTREE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-09",12,"Serviços contratados para marketing","",42,0,"LINKTREE","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-09",12,"Serviços de sistema de gestão","",24.99,0,"SERASA S.A.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-09",12,"Despesas administrativas","",30,0,"CLARO S.A.","Despesas administrativas","not_vel_aroma","c","despesa"],["d","2026-09",15,"Pagamento de empréstimo","",3788.67,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2026-09",15,"Serviços de contabilidade","",450,0,"DIRECT COUNT - CONSULTORIA, ASSESSORIA E CONTABILIDADE EMPRESARIAL LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-09",15,"Despesas com outros serviços contratados","",150,0,"ESCOBAR & CORREA LTDA - ESCOSEG","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-09",15,"Despesas com outros serviços contratados","",5000,0,"ORNATA DOMUS COMPANY LTDA","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-09",16,"Compra de matéria-prima","",8250,0,"ETIL COMERCIO DE PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-09",20,"Serviços contratados para marketing","",700,0,"JOSE AMARAL DE ALMEIDA - DESIGNER","Marketing e publicidade","not_vel_aroma","c","despesa"],["d","2026-09",20,"Compra de matéria-prima","",6227.36,0,"SMART PRODUTOS QUIMICOS LTDA","","not_vel_aroma","c","custo"],["d","2026-09",20,"Impostos sobre receita","",17014.29,0,"SIMPLES NACIONAL","","not_vel_aroma","c","custo"],["d","2026-09",20,"Luz, água e outros","",370,0,"ELEKTRO REDES S.A.","Despesas operacionais","not_vel_aroma","c","despesa"],["d","2026-09",20,"Salários e encargos","",496.71,0,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-09",20,"Salários e encargos","",1171.55,0,"CAIXA ECONOMICA FEDERAL","Despesas com colaboradores","not_vel_aroma","c","despesa"],["d","2026-09",21,"Despesas com frete para devolução e reenvio","",500,0,"EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-02",4,"Compra de matéria-prima","",6150,1,"FORMULARIOS COVOLAN LTDA.","","not_vel_aroma","c","custo"],["d","2026-10",12,"Serviços de sistema de gestão","",24.99,0,"SERASA S.A.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-10",15,"Pagamento de empréstimo","",3803.82,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2026-02",4,"Compra de matéria-prima","",6150,1,"FORMULARIOS COVOLAN LTDA.","","not_vel_aroma","c","custo"],["d","2026-11",12,"Serviços de sistema de gestão","",24.99,0,"SERASA S.A.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-11",16,"Pagamento de empréstimo","",3866.13,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2026-02",4,"Compra de matéria-prima","",2325,1,"FORMULARIOS COVOLAN LTDA.","","not_vel_aroma","c","custo"],["d","2026-12",12,"Serviços de sistema de gestão","",24.99,0,"SERASA S.A.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2026-12",15,"Pagamento de empréstimo","",3681.74,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2026-02",4,"Compra de matéria-prima","",2325,1,"FORMULARIOS COVOLAN LTDA.","","not_vel_aroma","c","custo"],["d","2027-01",12,"Serviços de sistema de gestão","",24.99,0,"SERASA S.A.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2027-01",15,"Pagamento de empréstimo","",3740.28,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2027-02",12,"Serviços de sistema de gestão","",24.99,0,"SERASA S.A.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2027-02",15,"Pagamento de empréstimo","",3702.16,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2027-03",10,"Compra de ativo intangível","",221.96,0,"HOSTGATOR BRASIL LTDA","","not_vel_aroma","c","investimento"],["d","2027-03",12,"Serviços de sistema de gestão","",24.99,0,"SERASA S.A.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2027-03",15,"Pagamento de empréstimo","",3530.23,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2027-04",12,"Serviços de sistema de gestão","",24.99,0,"SERASA S.A.","Despesas com serviços","not_vel_aroma","c","despesa"],["d","2027-04",15,"Pagamento de empréstimo","",3625.91,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2027-05",17,"Pagamento de empréstimo","",3629.96,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2027-06",15,"Pagamento de empréstimo","",3467.88,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2027-07",15,"Pagamento de empréstimo","",3471.88,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2027-08",16,"Pagamento de empréstimo","",3511.88,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2027-09",15,"Pagamento de empréstimo","",3398.12,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2027-10",15,"Pagamento de empréstimo","",3361.24,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2027-11",16,"Pagamento de empréstimo","",3393.79,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2027-12",15,"Pagamento de empréstimo","",3254.02,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2028-01",17,"Pagamento de empréstimo","",3345.83,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2028-02",15,"Pagamento de empréstimo","",3180.28,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2028-03",15,"Pagamento de empréstimo","",3144.74,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2028-04",17,"Pagamento de empréstimo","",3222.95,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2028-05",15,"Pagamento de empréstimo","",3046.49,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2028-06",16,"Pagamento de empréstimo","",3115.98,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2028-07",17,"Pagamento de empréstimo","",3051.99,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2028-08",15,"Pagamento de empréstimo","",2967.02,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2028-09",15,"Pagamento de empréstimo","",2975.96,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2028-10",16,"Pagamento de empréstimo","",2937.94,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2028-11",16,"Pagamento de empréstimo","",2899.93,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2028-12",15,"Pagamento de empréstimo","",2824.84,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2029-01",15,"Pagamento de empréstimo","",2824.61,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2029-02",15,"Pagamento de empréstimo","",2787.24,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2029-03",15,"Pagamento de empréstimo","",2704.52,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2029-04",16,"Pagamento de empréstimo","",2724.64,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2029-05",15,"Pagamento de empréstimo","",2648.1,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2029-06",15,"Pagamento de empréstimo","",2634.76,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2029-07",16,"Pagamento de empréstimo","",2596.64,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2029-08",15,"Pagamento de empréstimo","",2549.84,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2029-09",17,"Pagamento de empréstimo","",2535.28,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2029-10",15,"Pagamento de empréstimo","",2463.69,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2029-11",16,"Pagamento de empréstimo","",2449.11,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2029-12",17,"Pagamento de empréstimo","",2406.03,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2030-01",15,"Pagamento de empréstimo","",2362.95,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"],["d","2030-02",15,"Pagamento de empréstimo","",2329.79,0,"ORNATA DOMUS COMPANY LTDA","","not_vel_aroma","c","financiamento"]];

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
    RECEITA_CATEGORIAS: topN(recCat, 12),
    DESPESA_CATEGORIAS: topN(despCat, 12),
    RECEITA_CLIENTES: topN(recCli, 12),
    DESPESA_FORNECEDORES: topN(despForn, 12),
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
  if (drilldown) {
    if (drilldown.type === 'mes') out = out.filter(r => r[1] === drilldown.value);
    else if (drilldown.type === 'categoria') out = out.filter(r => r[3] === drilldown.value);
    else if (drilldown.type === 'cliente') out = out.filter(r => r[0] === 'r' && r[4] === drilldown.value);
    else if (drilldown.type === 'fornecedor') out = out.filter(r => r[0] === 'd' && r[7] === drilldown.value);
    else if (drilldown.type === 'dia') out = out.filter(r => r[2] === drilldown.value + 1);
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
      // Look up the company (Conta) for this bank account from CONTAS_BANCARIAS
      var bankAcct = (typeof CONTAS_BANCARIAS !== 'undefined' ? CONTAS_BANCARIAS : []).find(function(b) { return b.nome === extraFilters.conta; });
      if (bankAcct && bankAcct.conta) {
        var contaSlug = bankAcct.conta.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/_+$/, '');
        out = out.filter(function(r) { return r[9] === contaSlug; });
      }
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
  if (!dd && month && month >= 1 && month <= 12) {
    const mm = String(month).padStart(2, '0');
    const ym = y + '-' + mm;
    dd = { type: 'mes', value: ym, label: ym };
  }
  return window.recomputeBit(sf, dd, y, regime, ef, receitaScope);
};
// Cross-filter helper: combina statusFilter + drilldown + regime e retorna BIT-like
// com KPIs/charts/extrato recalculados em ~10ms (17k rows).
window.recomputeBit = function (statusFilter, drilldown, year, regime, extraFilters, receitaScope) {
  const filtered = filterTx(ALL_TX, statusFilter, drilldown, regime || 'caixa', extraFilters);
  const agg = aggregateTx(filtered, year || REF_YEAR, receitaScope);
  // Mescla com BIT base pra preservar META, helpers (fmt, fmtK), MONTHS etc.
  const base = window.BIT || {};
  return Object.assign({}, base, agg, {
    TOTAL_RECEITA: agg.KPIS.TOTAL_RECEITA,
    TOTAL_DESPESA: agg.KPIS.TOTAL_DESPESA,
    VALOR_LIQUIDO: agg.KPIS.VALOR_LIQUIDO,
    MARGEM_LIQUIDA: agg.KPIS.MARGEM_LIQUIDA,
  });
};
window.BIT_ORCAMENTO = [];
