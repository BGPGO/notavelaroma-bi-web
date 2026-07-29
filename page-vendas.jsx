/* PageVendas — Vendas Marketplaces
 *
 * Substitui o pbix "01 - FATURAMENTO ORNATA DOMUS", que tinha uma pagina feita a
 * mao por mes (33 no total) + HOMEs que eram só menu de navegacao. Aqui e UMA
 * tela com filtro de data proprio.
 *
 * Fonte: window.BIT_VENDAS (build-vendas.cjs le o XLSX de pedidos/ads).
 * Independente do BIT financeiro (NIBO) — faturamento de marketplace nao passa
 * pelo regime caixa/competencia, entao a tela ignora o statusFilter do header e
 * tem periodo proprio.
 *
 * Medidas portadas do pbix:
 *   FATURAMENTO BRUTO = SUM(PEDIDOS[VALOR])
 *   QTD PEDIDOS TOTAL = SUM(PEDIDOS[QUANTIDADE PEDIDOS])
 *   TICKET MEDIO      = fat / pedidos
 *   MEDIA DIARIA      = fat / dias decorridos
 *   PROJECAO          = media diaria * dias do periodo
 *   GASTO.M / %ADS    = SUM(ADS[GASTO]) / fat
 * A medida ORCADO do pbix ficou de fora de proposito: esta quebrada na origem
 * (compara PEDIDOS[LOJA]="SHOPEE" mas a base traz "SHOPEE - ORNATA", entao
 * retorna 0 sempre). Regra real a confirmar com o cliente antes de virar KPI.
 */

// ---------- helpers de data (string YYYY-MM-DD, sem Date pra evitar fuso) ----------
const vdParse = (s) => { const [y, m, d] = s.split("-").map(Number); return { y, m, d }; };
const vdDaysInMonth = (y, m) => new Date(y, m, 0).getDate();
const vdPad = (n) => String(n).padStart(2, "0");
const vdKey = (y, m, d) => `${y}-${vdPad(m)}-${vdPad(d)}`;
// aritmetica de dias via UTC (sem DST)
const vdToNum = (s) => { const { y, m, d } = vdParse(s); return Date.UTC(y, m - 1, d) / 86400000; };
const vdFromNum = (n) => { const dt = new Date(n * 86400000); return vdKey(dt.getUTCFullYear(), dt.getUTCMonth() + 1, dt.getUTCDate()); };
const vdAddDays = (s, k) => vdFromNum(vdToNum(s) + k);
const vdDiffDays = (a, b) => vdToNum(b) - vdToNum(a); // b - a
const vdMonthStart = (s) => { const { y, m } = vdParse(s); return vdKey(y, m, 1); };
const vdMonthEnd = (s) => { const { y, m } = vdParse(s); return vdKey(y, m, vdDaysInMonth(y, m)); };
const vdAddMonths = (s, k) => {
  const { y, m, d } = vdParse(s);
  const t = y * 12 + (m - 1) + k;
  const ny = Math.floor(t / 12), nm = (t % 12) + 1;
  return vdKey(ny, nm, Math.min(d, vdDaysInMonth(ny, nm)));
};
const VD_MES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
const VD_MES_FULL = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const vdLabelBR = (s) => { const { y, m, d } = vdParse(s); return `${vdPad(d)}/${vdPad(m)}/${y}`; };

// Toggle K/M ↔ detalhado. Default EXPANDIDO, persiste por tela.
// Ver feedback_kpi_compact_toggle.
const useVendasKpiFormat = (pageId) => {
  const key = `bi.kpi.detailed.${pageId || "vendas"}`;
  const [detailed, setDetailed] = React.useState(() => {
    try { return localStorage.getItem(key) === "0" ? false : true; } catch (e) { return true; }
  });
  const toggle = () => setDetailed((d) => {
    const next = !d;
    try { localStorage.setItem(key, next ? "1" : "0"); } catch (e) {}
    return next;
  });
  const fmtVal = (n) => {
    const B = window.BIT;
    if (detailed) return { value: B.fmt(n).replace(/^R\$/, ""), unit: "" };
    const abs = Math.abs(n);
    if (abs >= 1e6) return { value: `${(n / 1e6).toFixed(1).replace(".", ",")}`, unit: " M" };
    if (abs >= 1e3) return { value: `${Math.round(n / 1e3)}`, unit: " K" };
    return { value: B.fmt(n).replace(/^R\$/, ""), unit: "" };
  };
  return {
    detailed, toggle, fmtVal,
    expandIcon: detailed ? "−" : "+",
    tooltipHint: detailed ? "Clique para compactar (K/M)" : "Clique para ver valor completo",
  };
};

// ---------- grafico diario: periodo atual vs anterior ----------
const VendasDailyChart = ({ atual, anterior, labels, height = 260, labelAtual, labelAnterior }) => {
  const B = window.BIT;
  const [hover, setHover] = React.useState(null);
  const w = 1000, h = height;
  const padL = 54, padR = 14, padT = 18, padB = 26;
  const n = atual.length;
  const maxV = Math.max(1, ...atual, ...(anterior || []));
  // step "bonito" via log10 — nunca hardcodar 200k. Ver feedback_overview_bars_step_adaptativo.
  const rawStep = maxV / 4;
  const mag = Math.pow(10, Math.floor(Math.log10(rawStep)));
  const niceStep = [1, 2, 2.5, 5, 10].map((m) => m * mag).find((s) => s >= rawStep) || mag * 10;
  const top = Math.ceil(maxV / niceStep) * niceStep;
  const ticks = [];
  for (let v = 0; v <= top + 1e-6; v += niceStep) ticks.push(v);

  const xOf = (i) => padL + (n <= 1 ? (w - padL - padR) / 2 : (i * (w - padL - padR)) / (n - 1));
  const yOf = (v) => padT + (1 - v / top) * (h - padT - padB);
  const pathOf = (arr) => arr.map((v, i) => `${i === 0 ? "M" : "L"} ${xOf(i).toFixed(1)} ${yOf(v).toFixed(1)}`).join(" ");
  const areaOf = (arr) => `${pathOf(arr)} L ${xOf(n - 1).toFixed(1)} ${yOf(0).toFixed(1)} L ${xOf(0).toFixed(1)} ${yOf(0).toFixed(1)} Z`;

  // indice mais proximo do mouse
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = ((e.clientX - r.left) / r.width) * w;
    let best = 0, bd = Infinity;
    for (let i = 0; i < n; i++) { const d = Math.abs(xOf(i) - px); if (d < bd) { bd = d; best = i; } }
    setHover(best);
  };

  return (
    <div className="vendas-chart-wrap" style={{ position: "relative" }}>
      <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ width: "100%", height, display: "block" }}
        onMouseMove={onMove} onMouseLeave={() => setHover(null)}>
        <defs>
          <linearGradient id="vd-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--cyan)" stopOpacity="0.30" />
            <stop offset="100%" stopColor="var(--cyan)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {ticks.map((t, i) => (
          <g key={i}>
            <line x1={padL} y1={yOf(t)} x2={w - padR} y2={yOf(t)} stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
            <text x={padL - 8} y={yOf(t) + 3.5} textAnchor="end" fontSize="9.5" fill="var(--mute)" fontFamily="var(--font-mono)">{B.fmtK(t)}</text>
          </g>
        ))}
        {anterior && anterior.length === n && (
          <path d={pathOf(anterior)} fill="none" stroke="var(--mute)" strokeWidth="1.6" strokeDasharray="4 3" strokeLinejoin="round" />
        )}
        <path d={areaOf(atual)} fill="url(#vd-grad)" />
        <path d={pathOf(atual)} fill="none" stroke="var(--cyan)" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
        {hover != null && (
          <line x1={xOf(hover)} y1={padT} x2={xOf(hover)} y2={h - padB} stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
        )}
        {hover != null && <circle cx={xOf(hover)} cy={yOf(atual[hover])} r="3.4" fill="var(--cyan)" />}
        {labels.map((l, i) => (l ? (
          <text key={"x" + i} x={xOf(i)} y={h - 7} textAnchor="middle" fontSize="9.5" fill="var(--mute)" fontFamily="var(--font-mono)">{l}</text>
        ) : null))}
      </svg>
      {hover != null && (() => {
        // clamp pra esquerda: tooltip nao pode sair da caixa.
        // Ver feedback_pulso_tooltip_clamp.
        const pct = (xOf(hover) / w) * 100;
        const style = pct > 70 ? { right: `${100 - pct}%`, marginRight: 10 } : { left: `${pct}%`, marginLeft: 10 };
        return (
          <div className="vendas-tip" style={{ position: "absolute", top: 8, ...style }}>
            <div className="vendas-tip-h">{labels[hover] ? `Dia ${labels[hover]}` : `Ponto ${hover + 1}`}</div>
            <div className="vendas-tip-r"><span className="dot cyan" />{labelAtual}<b>{B.fmt(atual[hover])}</b></div>
            {anterior && anterior.length === n && (
              <div className="vendas-tip-r"><span className="dot mute" />{labelAnterior}<b>{B.fmt(anterior[hover])}</b></div>
            )}
          </div>
        );
      })()}
      <div className="vendas-legend">
        <span><i className="sw cyan" />{labelAtual}</span>
        {anterior && anterior.length === n && <span><i className="sw dash" />{labelAnterior}</span>}
      </div>
    </div>
  );
};

// ---------- grafico mensal: barras de faturamento + linha de %ADS ----------
const VendasMonthlyChart = ({ data, height = 250, onBarClick, activeKey }) => {
  const B = window.BIT;
  const maxV = Math.max(1, ...data.map((d) => d.valor));
  const rawStep = maxV / 4;
  const mag = Math.pow(10, Math.floor(Math.log10(rawStep)));
  const niceStep = [1, 2, 2.5, 5, 10].map((m) => m * mag).find((s) => s >= rawStep) || mag * 10;
  const top = Math.ceil(maxV / niceStep) * niceStep;
  const ticks = [];
  for (let v = 0; v <= top + 1e-6; v += niceStep) ticks.push(v);
  const maxPct = Math.max(0.01, ...data.map((d) => d.pctAds));

  return (
    <div className="vendas-mbars">
      <div className="vendas-mbars-plot" style={{ height }}>
        {ticks.map((t, i) => (
          <div key={i} className="vendas-mbars-grid" style={{ bottom: `${(t / top) * 100}%` }}>
            <span>{B.fmtK(t)}</span>
          </div>
        ))}
        <div className="vendas-mbars-cols">
          {data.map((d) => {
            const act = activeKey && activeKey === d.key;
            const dim = activeKey && activeKey !== d.key;
            return (
              <div key={d.key}
                className={"vendas-mbar-col" + (onBarClick ? " clickable" : "") + (act ? " active" : "") + (dim ? " dimmed" : "")}
                onClick={onBarClick ? () => onBarClick(d) : undefined}
                title={`${d.label}: ${B.fmt(d.valor)} · ${d.pedidos.toLocaleString("pt-BR")} pedidos · ADS ${B.fmt(d.ads)} (${d.pctAds.toFixed(2).replace(".", ",")}%)`}
              >
                <div className="vendas-mbar" style={{ height: `${(d.valor / top) * 100}%` }}>
                  <span className="chip">{B.fmtK(d.valor)}</span>
                </div>
                {d.ads > 0 && (
                  <div className="vendas-mbar-ads" style={{ bottom: `${(d.pctAds / maxPct) * 78}%` }}
                    title={`%ADS: ${d.pctAds.toFixed(2).replace(".", ",")}%`} />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="vendas-mbars-x">
        {data.map((d) => <span key={d.key}>{d.label}</span>)}
      </div>
      <div className="vendas-legend">
        <span><i className="sw cyan" />Faturamento</span>
        <span><i className="sw amber-dot" />% ADS sobre faturamento</span>
      </div>
    </div>
  );
};

const PageVendas = () => {
  const B = window.BIT;
  const V = window.BIT_VENDAS;
  const kpiFmt = useVendasKpiFormat("vendas");

  // Sem base (arquivo ausente no build) → estado amigavel, nunca tela preta.
  if (!V || !V.rows || !V.rows.length) {
    return (
      <div className="page">
        <div className="page-title"><h1>Vendas Marketplaces</h1></div>
        <div className="card" style={{ textAlign: "center", padding: 40, color: "var(--mute)" }}>
          <Icon name="chart" style={{ width: 34, height: 34, opacity: 0.4, marginBottom: 12 }} />
          <div style={{ fontSize: 14, marginBottom: 6, color: "var(--text)" }}>Base de vendas não disponível</div>
          <div style={{ fontSize: 12.5, lineHeight: 1.6 }}>
            A planilha de pedidos por marketplace não foi encontrada no último build.<br />
            O refresh diário busca ela no Supabase Storage — se acabou de subir, aguarde o próximo ciclo.
          </div>
        </div>
      </div>
    );
  }

  const MULTI_EMP = V.empresas.length > 1;
  const DE = V.periodo.de;
  const ATE = V.periodo.ate_com_dado || V.periodo.ate;

  // ---------- estado do filtro proprio da tela ----------
  const [preset, setPreset] = React.useState("mes_atual");
  const [customDe, setCustomDe] = React.useState(vdMonthStart(ATE));
  const [customAte, setCustomAte] = React.useState(ATE);
  const [empresa, setEmpresa] = React.useState("todas");
  const [mkts, setMkts] = React.useState([]); // [] = todos
  const [sortKey, setSortKey] = React.useState("valor");
  const [sortDir, setSortDir] = React.useState("desc");

  // Presets de periodo. "ATE" e o ultimo dia COM DADO, nao hoje — a base pode
  // estar alguns dias atras e dividir por dias sem dado subestimaria a media.
  const PRESETS = React.useMemo(() => {
    const anos = [...new Set([DE, ATE].concat(V.rows.map((r) => r[0])).map((s) => vdParse(s).y))].sort((a, b) => b - a);
    const mesAtualDe = vdMonthStart(ATE);
    const mesAntRef = vdAddMonths(mesAtualDe, -1);
    return [
      { id: "mes_atual", label: VD_MES_FULL[vdParse(ATE).m - 1], de: mesAtualDe, ate: ATE, hint: "mês em curso" },
      { id: "mes_ant", label: "Mês anterior", de: vdMonthStart(mesAntRef), ate: vdMonthEnd(mesAntRef) },
      { id: "d30", label: "30 dias", de: vdAddDays(ATE, -29), ate: ATE },
      { id: "d90", label: "90 dias", de: vdAddDays(ATE, -89), ate: ATE },
      ...anos.map((y) => ({ id: `ano_${y}`, label: String(y), de: vdKey(y, 1, 1), ate: vdKey(y, 12, 31) })),
      { id: "tudo", label: "Tudo", de: DE, ate: ATE },
    ];
  }, [DE, ATE, V.rows]);

  const range = React.useMemo(() => {
    if (preset === "custom") {
      const de = customDe <= customAte ? customDe : customAte;
      const ate = customDe <= customAte ? customAte : customDe;
      return { de, ate };
    }
    const p = PRESETS.find((x) => x.id === preset) || PRESETS[0];
    return { de: p.de, ate: p.ate };
  }, [preset, customDe, customAte, PRESETS]);

  // ---------- periodo anterior comparavel ----------
  // Se o range e um mes-calendario cheio (ou o mes em curso), compara com o mes
  // anterior alinhado por dia. Senao, janela do mesmo tamanho imediatamente antes.
  // O pbix usava DATEADD(-31, DAY), que desalinha em todo mes sem 31 dias.
  const prevRange = React.useMemo(() => {
    const { de, ate } = range;
    const pDe = vdParse(de), pAte = vdParse(ate);
    const mesmoMes = pDe.y === pAte.y && pDe.m === pAte.m;
    if (mesmoMes && pDe.d === 1) {
      const ref = vdAddMonths(de, -1);
      const rp = vdParse(ref);
      const dim = vdDaysInMonth(rp.y, rp.m);
      // mes em curso → compara so os mesmos N dias do mes anterior
      const isCurso = ate === ATE && pAte.d < vdDaysInMonth(pAte.y, pAte.m);
      return { de: vdKey(rp.y, rp.m, 1), ate: vdKey(rp.y, rp.m, isCurso ? Math.min(pAte.d, dim) : dim) };
    }
    const len = vdDiffDays(de, ate) + 1;
    return { de: vdAddDays(de, -len), ate: vdAddDays(de, -1) };
  }, [range, ATE]);

  // ---------- agregacao ----------
  const IDX = { dia: 0, loja: 1, mkt: 2, emp: 3, valor: 4, ped: 5, ads: 6 };
  const mktSet = React.useMemo(() => new Set(mkts), [mkts]);

  const passa = React.useCallback((r) => {
    if (empresa !== "todas" && V.empresas[r[IDX.emp]] !== empresa) return false;
    if (mktSet.size && !mktSet.has(V.marketplaces[r[IDX.mkt]])) return false;
    return true;
  }, [empresa, mktSet, V.empresas, V.marketplaces]);

  const somaRange = React.useCallback((de, ate) => {
    let valor = 0, pedidos = 0, ads = 0;
    const porDia = new Map();
    const porMkt = new Map();
    for (const r of V.rows) {
      const d = r[IDX.dia];
      if (d < de || d > ate) continue;
      if (!passa(r)) continue;
      const v = r[IDX.valor], p = r[IDX.ped], a = r[IDX.ads];
      valor += v; pedidos += p; ads += a;
      const dd = porDia.get(d) || { valor: 0, pedidos: 0, ads: 0 };
      dd.valor += v; dd.pedidos += p; dd.ads += a; porDia.set(d, dd);
      const mk = `${V.marketplaces[r[IDX.mkt]]}|${V.empresas[r[IDX.emp]]}`;
      const mm = porMkt.get(mk) || { mkt: V.marketplaces[r[IDX.mkt]], emp: V.empresas[r[IDX.emp]], valor: 0, pedidos: 0, ads: 0 };
      mm.valor += v; mm.pedidos += p; mm.ads += a; porMkt.set(mk, mm);
    }
    return { valor, pedidos, ads, porDia, porMkt };
  }, [V, passa]);

  const cur = React.useMemo(() => somaRange(range.de, range.ate), [somaRange, range]);
  const prev = React.useMemo(() => somaRange(prevRange.de, prevRange.ate), [somaRange, prevRange]);

  // dias decorridos = ate onde a base tem dado; dias do periodo = range cheio
  const diasPeriodo = vdDiffDays(range.de, range.ate) + 1;
  const fimReal = range.ate < ATE ? range.ate : ATE;
  const diasDecorridos = Math.max(1, Math.min(diasPeriodo, vdDiffDays(range.de, fimReal) + 1));
  const periodoIncompleto = diasDecorridos < diasPeriodo;

  const ticket = cur.pedidos > 0 ? cur.valor / cur.pedidos : 0;
  const mediaDia = cur.valor / diasDecorridos;
  const projecao = mediaDia * diasPeriodo;
  const pctAds = cur.valor > 0 ? (cur.ads / cur.valor) * 100 : 0;

  const prevTicket = prev.pedidos > 0 ? prev.valor / prev.pedidos : 0;
  const prevDias = vdDiffDays(prevRange.de, prevRange.ate) + 1;
  const prevMediaDia = prev.valor / Math.max(1, prevDias);
  const prevPctAds = prev.valor > 0 ? (prev.ads / prev.valor) * 100 : 0;

  const delta = (a, b) => (b > 0 ? ((a - b) / b) * 100 : null);
  const dl = (a, b) => { const p = delta(a, b); return p == null ? {} : { deltaPct: p, deltaDir: p >= 0 ? "up" : "down" }; };

  // ADS só existe a partir de V.ads_desde — antes disso %ADS seria falso-zero.
  const adsCobre = !V.ads_desde || range.ate >= V.ads_desde;

  // ---------- serie diaria alinhada (atual vs anterior, por indice de dia) ----------
  const serie = React.useMemo(() => {
    const n = diasPeriodo;
    const atual = [], anterior = [], labels = [];
    const nPrev = prevDias;
    for (let i = 0; i < n; i++) {
      const d = vdAddDays(range.de, i);
      atual.push(cur.porDia.get(d)?.valor || 0);
      const dp = i < nPrev ? vdAddDays(prevRange.de, i) : null;
      anterior.push(dp ? (prev.porDia.get(dp)?.valor || 0) : 0);
      // rotula ~10 pontos pra nao virar sopa de numero
      const every = Math.max(1, Math.round(n / 10));
      const { d: dd } = vdParse(d);
      labels.push(n <= 31 ? String(dd) : (i % every === 0 ? String(dd) : null));
    }
    return { atual, anterior, labels };
  }, [range, prevRange, cur, prev, diasPeriodo, prevDias]);

  // ---------- serie mensal (aparece quando o periodo passa de 1 mes) ----------
  const mensal = React.useMemo(() => {
    const map = new Map();
    for (const r of V.rows) {
      const d = r[IDX.dia];
      if (d < range.de || d > range.ate) continue;
      if (!passa(r)) continue;
      const k = d.slice(0, 7);
      const o = map.get(k) || { key: k, valor: 0, pedidos: 0, ads: 0 };
      o.valor += r[IDX.valor]; o.pedidos += r[IDX.ped]; o.ads += r[IDX.ads];
      map.set(k, o);
    }
    return [...map.values()].sort((a, b) => (a.key < b.key ? -1 : 1)).map((o) => {
      const [y, m] = o.key.split("-").map(Number);
      return { ...o, label: `${VD_MES[m - 1]}/${String(y).slice(2)}`, pctAds: o.valor > 0 ? (o.ads / o.valor) * 100 : 0 };
    });
  }, [V.rows, range, passa]);

  // ---------- tabela por marketplace ----------
  const tabela = React.useMemo(() => {
    const prevByKey = new Map([...prev.porMkt.entries()].map(([k, v]) => [k, v]));
    const rows = [...cur.porMkt.entries()].map(([k, o]) => {
      const p = prevByKey.get(k);
      return {
        key: k, mkt: o.mkt, emp: o.emp,
        valor: o.valor, pedidos: o.pedidos, ads: o.ads,
        ticket: o.pedidos > 0 ? o.valor / o.pedidos : 0,
        pctAds: o.valor > 0 ? (o.ads / o.valor) * 100 : 0,
        share: cur.valor > 0 ? (o.valor / cur.valor) * 100 : 0,
        deltaPct: p && p.valor > 0 ? ((o.valor - p.valor) / p.valor) * 100 : null,
      };
    });
    const dir = sortDir === "asc" ? 1 : -1;
    rows.sort((a, b) => {
      const av = a[sortKey], bv = b[sortKey];
      if (typeof av === "string") return av.localeCompare(bv) * dir;
      const an = av == null ? -Infinity : av, bn = bv == null ? -Infinity : bv;
      return (an - bn) * dir;
    });
    return rows;
  }, [cur, prev, sortKey, sortDir]);

  const th = (key, label, cls) => (
    <th className={cls} onClick={() => {
      if (sortKey === key) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
      else { setSortKey(key); setSortDir(typeof tabela[0]?.[key] === "string" ? "asc" : "desc"); }
    }} style={{ cursor: "pointer", userSelect: "none" }} title="Clique para ordenar">
      {label}{sortKey === key ? (sortDir === "asc" ? " ▲" : " ▼") : ""}
    </th>
  );

  const toggleMkt = (m) => setMkts((cur2) => (cur2.indexOf(m) >= 0 ? cur2.filter((x) => x !== m) : cur2.concat([m])));
  const fv = kpiFmt.fmtVal;
  const labelAtual = `${vdLabelBR(range.de)} – ${vdLabelBR(range.ate)}`;
  const labelAnterior = `${vdLabelBR(prevRange.de)} – ${vdLabelBR(prevRange.ate)}`;

  return (
    <div className="page">
      <div className="page-title">
        <div>
          <h1>Vendas Marketplaces</h1>
          <div className="status-line">
            Base atualizada até <b>{vdLabelBR(ATE)}</b>
            {V.escopo && V.escopo.length ? ` · ${V.escopo.join(" + ")}` : ""}
          </div>
        </div>
      </div>

      {/* -------- filtro proprio da tela -------- */}
      <div className="card vendas-filters">
        <div className="vendas-filter-row">
          <span className="vendas-filter-lbl"><Icon name="calendar" style={{ width: 13, height: 13 }} /> Período</span>
          <div className="seg vendas-seg">
            {PRESETS.map((p) => (
              <button key={p.id} className={preset === p.id ? "active" : ""} onClick={() => setPreset(p.id)} title={p.hint || ""}>
                {p.label}
              </button>
            ))}
            <button className={preset === "custom" ? "active" : ""} onClick={() => setPreset("custom")}>Personalizado</button>
          </div>
        </div>

        {preset === "custom" && (
          <div className="vendas-filter-row">
            <span className="vendas-filter-lbl">Intervalo</span>
            <input type="date" className="vendas-date" value={customDe} min={DE} max={ATE} onChange={(e) => setCustomDe(e.target.value)} />
            <span style={{ color: "var(--mute)", fontSize: 12 }}>até</span>
            <input type="date" className="vendas-date" value={customAte} min={DE} max={ATE} onChange={(e) => setCustomAte(e.target.value)} />
          </div>
        )}

        {MULTI_EMP && (
          <div className="vendas-filter-row">
            <span className="vendas-filter-lbl"><Icon name="building" style={{ width: 13, height: 13 }} /> Empresa</span>
            <div className="seg vendas-seg">
              <button className={empresa === "todas" ? "active" : ""} onClick={() => setEmpresa("todas")}>Todas</button>
              {V.empresas.map((e) => (
                <button key={e} className={empresa === e ? "active" : ""} onClick={() => setEmpresa(e)}>{e}</button>
              ))}
            </div>
          </div>
        )}

        <div className="vendas-filter-row">
          <span className="vendas-filter-lbl"><Icon name="tag" style={{ width: 13, height: 13 }} /> Marketplace</span>
          <div className="vendas-chips">
            <button className={mkts.length === 0 ? "chip active" : "chip"} onClick={() => setMkts([])}>Todos</button>
            {V.marketplaces.map((m) => (
              <button key={m} className={mktSet.has(m) ? "chip active" : "chip"} onClick={() => toggleMkt(m)}>{m}</button>
            ))}
          </div>
        </div>

        <div className="vendas-filter-foot">
          Comparando <b>{labelAtual}</b> com <b>{labelAnterior}</b>
          {periodoIncompleto && ` · ${diasDecorridos} de ${diasPeriodo} dias decorridos`}
        </div>
      </div>

      {/* -------- KPIs -------- */}
      <div className="vendas-kpis">
        <div className="kpi-clickable-container" onClick={kpiFmt.toggle} title={kpiFmt.tooltipHint}>
          <span className="kpi-toggle-hint">{kpiFmt.expandIcon}</span>
          <KpiTile label="Faturamento bruto" tone="cyan" value={fv(cur.valor).value} unit={fv(cur.valor).unit} {...dl(cur.valor, prev.valor)} />
        </div>
        <KpiTile label="Pedidos" nonMonetary value={cur.pedidos.toLocaleString("pt-BR")} {...dl(cur.pedidos, prev.pedidos)} />
        <div className="kpi-clickable-container" onClick={kpiFmt.toggle} title={kpiFmt.tooltipHint}>
          <span className="kpi-toggle-hint">{kpiFmt.expandIcon}</span>
          <KpiTile label="Ticket médio" value={fv(ticket).value} unit={fv(ticket).unit} {...dl(ticket, prevTicket)} />
        </div>
        <div className="kpi-clickable-container" onClick={kpiFmt.toggle} title={kpiFmt.tooltipHint}>
          <span className="kpi-toggle-hint">{kpiFmt.expandIcon}</span>
          <KpiTile label="Média por dia" value={fv(mediaDia).value} unit={fv(mediaDia).unit} {...dl(mediaDia, prevMediaDia)} />
        </div>
        {periodoIncompleto && (
          <div className="kpi-clickable-container" onClick={kpiFmt.toggle} title={kpiFmt.tooltipHint}>
            <span className="kpi-toggle-hint">{kpiFmt.expandIcon}</span>
            <KpiTile label={`Projeção (${diasPeriodo} dias)`} tone="amber" value={fv(projecao).value} unit={fv(projecao).unit} />
          </div>
        )}
        <div className="kpi-clickable-container" onClick={kpiFmt.toggle} title={kpiFmt.tooltipHint}>
          <span className="kpi-toggle-hint">{kpiFmt.expandIcon}</span>
          <KpiTile label="Investimento ADS" tone="red" value={fv(cur.ads).value} unit={fv(cur.ads).unit} {...dl(cur.ads, prev.ads)} />
        </div>
        <KpiTile label="% ADS sobre faturamento" nonMonetary noPrefix
          value={adsCobre ? `${pctAds.toFixed(2).replace(".", ",")}%` : "—"}
          {...(adsCobre ? dl(pctAds, prevPctAds) : {})} />
      </div>

      {!adsCobre && V.ads_desde && (
        <div className="card" style={{ padding: "10px 14px", fontSize: 12, color: "var(--mute)" }}>
          O controle de ADS começa em {vdLabelBR(V.ads_desde)} — períodos anteriores não têm gasto registrado, por isso o % aparece como “—”.
        </div>
      )}

      {/* -------- grafico diario -------- */}
      <div className="card">
        <div className="card-title-row">
          <h2 className="card-title">Faturamento por dia</h2>
          <span style={{ fontSize: 11.5, color: "var(--mute)" }}>tracejado = período anterior</span>
        </div>
        <VendasDailyChart atual={serie.atual} anterior={serie.anterior} labels={serie.labels}
          labelAtual={labelAtual} labelAnterior={labelAnterior} />
      </div>

      {/* -------- grafico mensal -------- */}
      {mensal.length > 1 && (
        <div className="card">
          <h2 className="card-title">Faturamento por mês</h2>
          <VendasMonthlyChart data={mensal} onBarClick={(d) => {
            const [y, m] = d.key.split("-").map(Number);
            setCustomDe(vdKey(y, m, 1));
            setCustomAte(vdKey(y, m, vdDaysInMonth(y, m)) > ATE ? ATE : vdKey(y, m, vdDaysInMonth(y, m)));
            setPreset("custom");
          }} />
        </div>
      )}

      {/* -------- tabela por marketplace -------- */}
      <div className="card">
        <div className="card-title-row">
          <h2 className="card-title">Desempenho por marketplace</h2>
          <span style={{ fontSize: 11.5, color: "var(--mute)" }}>{tabela.length} loja(s) no filtro</span>
        </div>
        <div className="t-scroll">
          <table className="t vendas-t">
            <thead>
              <tr>
                {th("mkt", "Marketplace")}
                {MULTI_EMP && th("emp", "Empresa")}
                {th("valor", "Faturamento", "num")}
                {th("share", "Share", "num")}
                {th("pedidos", "Pedidos", "num")}
                {th("ticket", "Ticket médio", "num")}
                {th("ads", "ADS", "num")}
                {th("pctAds", "% ADS", "num")}
                {th("deltaPct", "vs anterior", "num")}
              </tr>
            </thead>
            <tbody>
              {tabela.map((r) => (
                <tr key={r.key}>
                  <td>{r.mkt}</td>
                  {MULTI_EMP && <td style={{ color: "var(--text-2)", fontSize: 12 }}>{r.emp}</td>}
                  <td className="num green">{B.fmt(r.valor)}</td>
                  <td className="num" style={{ color: "var(--text-2)" }}>{r.share.toFixed(1).replace(".", ",")}%</td>
                  <td className="num">{r.pedidos.toLocaleString("pt-BR")}</td>
                  <td className="num">{B.fmt(r.ticket)}</td>
                  <td className="num" style={{ color: r.ads > 0 ? "var(--red)" : "var(--mute)" }}>{r.ads > 0 ? B.fmt(r.ads) : "—"}</td>
                  <td className="num" style={{ color: "var(--text-2)" }}>{r.ads > 0 ? `${r.pctAds.toFixed(2).replace(".", ",")}%` : "—"}</td>
                  <td className={"num " + (r.deltaPct == null ? "" : r.deltaPct >= 0 ? "green" : "red")}>
                    {r.deltaPct == null ? "—" : `${r.deltaPct >= 0 ? "+" : "−"}${Math.abs(r.deltaPct).toFixed(1).replace(".", ",")}%`}
                  </td>
                </tr>
              ))}
              {tabela.length === 0 && (
                <tr><td colSpan={MULTI_EMP ? 9 : 8} style={{ color: "var(--mute)", textAlign: "center", padding: 18 }}>
                  Sem vendas no filtro selecionado
                </td></tr>
              )}
              <tr className="total">
                <td colSpan={MULTI_EMP ? 2 : 1}>Total</td>
                <td className="num green">{B.fmt(cur.valor)}</td>
                <td className="num">100%</td>
                <td className="num">{cur.pedidos.toLocaleString("pt-BR")}</td>
                <td className="num">{B.fmt(ticket)}</td>
                <td className="num">{cur.ads > 0 ? B.fmt(cur.ads) : "—"}</td>
                <td className="num">{adsCobre && cur.ads > 0 ? `${pctAds.toFixed(2).replace(".", ",")}%` : "—"}</td>
                <td className={"num " + (delta(cur.valor, prev.valor) == null ? "" : delta(cur.valor, prev.valor) >= 0 ? "green" : "red")}>
                  {delta(cur.valor, prev.valor) == null ? "—" : `${delta(cur.valor, prev.valor) >= 0 ? "+" : "−"}${Math.abs(delta(cur.valor, prev.valor)).toFixed(1).replace(".", ",")}%`}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
