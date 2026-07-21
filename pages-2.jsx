/* BIT/BGP Finance — Pages 2: Fluxo, Tesouraria, Comparativo */
const { useState, useMemo, useEffect } = React;

// useIsMobile é declarado em pages-1.jsx e disponibilizado globalmente no bundle
// concatenado (build-jsx.cjs). Reutilizado aqui pra ajustar height/showLabels dos
// TrendCharts em mobile.

// ===== Fluxo de caixa diário =====
// Barras = valor líquido do dia (receita − despesa), verde/vermelho.
// Linha (eixo direito) = saldo acumulado correndo. Filtro segmentado por mês.
// Concilia "valor líquido" (fluxo) e "saldo" num único gráfico estilo fluxo de caixa.
const FluxoDiarioCard = ({ B, statusFilter, year, isMobile, filters }) => {
  const fmt = B.fmt;
  const monthsFull = B.MONTHS_FULL || ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
  const refYear = year || (B.META && B.META.ref_year) || new Date().getFullYear();

  // Linhas do ano no status atual (usa ALL_TX cru — EXTRATO é capado em 200).
  // Respeita os mesmos filtros do getBit (regime + filters: conta/empresa, categoria, cc, datas)
  // pra ficar consistente com o resto da página — importante em BIs multi-empresa.
  const rowsAno = useMemo(() => {
    if (!window.filterTx || !window.ALL_TX) return [];
    const regime = (filters && filters.regime) || 'caixa';
    return window.filterTx(window.ALL_TX, statusFilter, null, regime, filters)
      .filter(r => r[1] && String(r[1]).slice(0, 4) === String(refYear));
  }, [statusFilter, refYear, filters]);

  const mesesComDado = useMemo(() => {
    const s = new Set();
    rowsAno.forEach(r => s.add(parseInt(String(r[1]).slice(5, 7), 10) - 1));
    return s;
  }, [rowsAno]);

  const ultimoMesComDado = useMemo(() => {
    let last = new Date().getMonth();
    for (let i = 0; i < 12; i++) if (mesesComDado.has(i)) last = i;
    return last;
  }, [mesesComDado]);

  const [mesSel, setMesSel] = useState(ultimoMesComDado);
  useEffect(() => { setMesSel(ultimoMesComDado); }, [ultimoMesComDado]);
  const [hover, setHover] = useState(null); // { i, x, y, w }

  // Base do saldo correndo = líquido acumulado dos meses anteriores.
  // Se houver saldo real (BIT_EXTRAS.saldos), ancora nele; senão parte do zero.
  const saldoBaseReal = (window.BIT_EXTRAS && window.BIT_EXTRAS.saldos && window.BIT_EXTRAS.saldos.last && window.BIT_EXTRAS.saldos.last.total) || 0;

  const dados = useMemo(() => {
    const mm = String(mesSel + 1).padStart(2, "0");
    const ym = `${refYear}-${mm}`;
    const nDays = new Date(refYear, mesSel + 1, 0).getDate();
    const rec = Array(nDays).fill(0), desp = Array(nDays).fill(0);
    for (const r of rowsAno) {
      if (r[1] !== ym) continue;
      const d = r[2];
      if (d < 1 || d > nDays) continue;
      if (r[0] === "r") rec[d - 1] += r[5]; else desp[d - 1] += r[5];
    }
    const net = rec.map((v, i) => v - desp[i]);
    // saldo inicial do mês = base real + líquido dos meses anteriores
    const vls = (B.KPIS && B.KPIS.VALOR_LIQ_SERIES) || [];
    let saldoIni = saldoBaseReal;
    for (let i = 0; i < mesSel; i++) saldoIni += (vls[i] || 0);
    const saldo = []; let acc = saldoIni;
    for (let i = 0; i < nDays; i++) { acc += net[i]; saldo.push(acc); }
    return { nDays, net, saldo, saldoIni, totalMes: net.reduce((s, v) => s + v, 0) };
  }, [rowsAno, mesSel, refYear, saldoBaseReal]);

  const { nDays, net, saldo, totalMes } = dados;

  // ---- geometria SVG (barras = líquido do dia) ----
  const W = 1000, H = isMobile ? 260 : 340;
  const PADL = 6, PADR = 6, PADT = 34, PADB = 26;
  const plotW = W - PADL - PADR, plotH = H - PADT - PADB;
  const x0 = PADL, y0 = PADT;
  const netMax = Math.max(0, ...net), netMin = Math.min(0, ...net);
  const netRange = (netMax - netMin) || 1;
  const netPad = netRange * 0.18;
  const lHi = netMax + netPad, lLo = netMin - netPad;
  const yBar = v => y0 + plotH * (lHi - v) / ((lHi - lLo) || 1);
  const step = plotW / nDays;
  const bw = Math.max(2, step * 0.55);
  const cx = i => x0 + step * (i + 0.5);
  const baseY = yBar(0);
  const showLbls = !isMobile;
  const fmtK = v => { const a = Math.abs(v); if (a >= 1000) return (v / 1000).toFixed(a >= 10000 ? 0 : 1).replace(".", ",") + "k"; return String(Math.round(v)); };

  const MESES_ABBR = monthsFull.map(m => m.charAt(0).toUpperCase() + m.slice(1, 3));

  return (
    <div className="card">
      <div className="card-title-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
        <h2 className="card-title" style={{ margin: 0 }}>Fluxo de caixa diário · {monthsFull[mesSel].charAt(0).toUpperCase() + monthsFull[mesSel].slice(1)}/{refYear}</h2>
        <div style={{ fontSize: 12, color: "var(--fg-3)" }}>
          Líquido do mês: <b style={{ color: totalMes >= 0 ? "var(--green)" : "var(--red)" }}>{fmt(totalMes)}</b>
          {"  ·  Saldo final: "}<b style={{ color: "var(--cyan)" }}>{fmt(saldo[nDays - 1] || 0)}</b>
        </div>
      </div>

      {/* Filtro de mês (segmentado, estilo seg) */}
      <div className="seg" style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 10, marginBottom: 6 }}>
        {MESES_ABBR.map((lbl, i) => {
          const tem = mesesComDado.has(i);
          return (
            <button
              key={i}
              className={mesSel === i ? "active" : ""}
              onClick={() => tem && setMesSel(i)}
              disabled={!tem}
              style={!tem ? { opacity: 0.35, cursor: "default" } : {}}
              title={tem ? lbl : `${lbl} — sem lançamentos`}
            >{lbl}</button>
          );
        })}
      </div>

      {/* Legenda */}
      <div style={{ display: "flex", gap: 16, fontSize: 11, color: "var(--fg-3)", margin: "4px 0 8px" }}>
        <span><span style={{ display: "inline-block", width: 12, height: 8, background: "var(--green)", borderRadius: 2, verticalAlign: "middle", marginRight: 4 }} />Dia positivo (entrou &gt; saiu)</span>
        <span><span style={{ display: "inline-block", width: 12, height: 8, background: "var(--red)", borderRadius: 2, verticalAlign: "middle", marginRight: 4 }} />Dia negativo (saiu &gt; entrou)</span>
      </div>

      <div style={{ position: "relative" }}
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          const relX = e.clientX - r.left;
          const frac = Math.min(1, Math.max(0, relX / r.width));
          const i = Math.min(nDays - 1, Math.max(0, Math.floor(frac * nDays)));
          setHover({ i, x: relX, y: e.clientY - r.top, w: r.width });
        }}
        onMouseLeave={() => setHover(null)}
      >
      <svg viewBox={`0 0 ${W} ${H}`} style={{ display: "block", width: "100%", height: "auto" }} preserveAspectRatio="none">
        {/* baseline zero das barras */}
        <line x1={x0} y1={baseY} x2={x0 + plotW} y2={baseY} stroke="var(--border)" strokeWidth="1" />
        {net.map((v, i) => {
          if (!v) return null;
          const yTop = v >= 0 ? yBar(v) : baseY;
          const h = Math.abs(yBar(v) - baseY);
          const col = v >= 0 ? "var(--green)" : "var(--red)";
          return (
            <g key={i}>
              <rect x={cx(i) - bw / 2} y={yTop} width={bw} height={Math.max(1, h)} rx="1.5" fill={col} opacity="0.85" />
              {showLbls && (
                <text x={cx(i)} y={v >= 0 ? yTop - 3 : yTop + h + 9} textAnchor="middle" fontSize="7.5" fill={col} fontFamily="var(--font-mono)">{fmtK(v)}</text>
              )}
            </g>
          );
        })}
        {/* rótulos de dia (a cada N pra não poluir) */}
        {net.map((_, i) => {
          const everyN = nDays > 20 ? (isMobile ? 5 : 2) : 1;
          if (i % everyN !== 0 && i !== nDays - 1) return null;
          return <text key={i} x={cx(i)} y={H - 8} textAnchor="middle" fontSize="8" fill="var(--fg-3)" fontFamily="var(--font-mono)">{i + 1}</text>;
        })}
        {/* guia vertical no dia sob o cursor */}
        {hover && (
          <line x1={cx(hover.i)} y1={y0} x2={cx(hover.i)} y2={y0 + plotH} stroke="var(--fg-3)" strokeDasharray="3 3" strokeWidth="1" opacity="0.5" />
        )}
      </svg>
      {hover && (() => {
        const flip = hover.x > hover.w * 0.6;
        const dataStr = `${String(hover.i + 1).padStart(2, "0")}/${String(mesSel + 1).padStart(2, "0")}/${refYear}`;
        const liq = net[hover.i] || 0;
        return (
          <div style={{
            position: "absolute", left: hover.x, top: Math.max(0, hover.y - 16),
            transform: `translateY(-100%) translateX(${flip ? "calc(-100% - 14px)" : "14px"})`,
            pointerEvents: "none", zIndex: 5,
            background: "var(--surface-2, #10191f)", border: "1px solid var(--border)",
            borderRadius: 10, padding: "8px 12px", boxShadow: "0 8px 24px rgba(0,0,0,0.45)",
            fontFamily: "var(--font-mono)", whiteSpace: "nowrap",
          }}>
            <div style={{ fontSize: 11, color: "var(--fg-3)", marginBottom: 4 }}>{dataStr}</div>
            <div style={{ fontSize: 12, color: "var(--fg-2)" }}>Líquido do dia</div>
            <div style={{ fontSize: 17, fontWeight: 700, color: liq >= 0 ? "var(--green)" : "var(--red)", marginBottom: 6 }}>{fmt(liq)}</div>
            <div style={{ fontSize: 12, color: "var(--fg-2)" }}>Saldo acumulado</div>
            <div style={{ fontSize: 17, fontWeight: 700, color: "var(--cyan)" }}>{fmt(saldo[hover.i] || 0)}</div>
          </div>
        );
      })()}
      </div>
    </div>
  );
};

// ===== Saldo projetado em contas (dia a dia) =====
// Barras = SALDO ACUMULADO ao fim de cada dia (verde positivo / vermelho negativo),
// projetando pra frente a partir do saldo REAL das contas selecionadas + a-vencer.
// Filtro de contas: escolhe de quais contas partir (ex: sem CDB = só caixa operacional).
const SaldoProjetadoCard = ({ B, isMobile, filters }) => {
  const fmt = B.fmt;
  const saldos = (window.BIT_EXTRAS && window.BIT_EXTRAS.saldos) || null;
  const rawConta = (filters && filters.conta) || '';
  // "Todas contas" é o default do DEFAULT_FILTERS (herdado do template) e não é slug de empresa.
  // Sem tratar, o loop abaixo pula todos os slugs → contasList vazio → gráfico apaga.
  // Mesma convenção que getBit/filterTx já usam (filters.conta !== "Todas contas").
  const headerEmp = rawConta === 'Todas contas' ? '' : rawConta; // slug da empresa selecionada no topo

  const contasList = useMemo(() => {
    const out = [];
    const emp = (saldos && saldos.last && saldos.last.empresas) || {};
    for (const slug of Object.keys(emp)) {
      if (headerEmp && slug !== headerEmp) continue; // escopo pela empresa selecionada no topo
      const e = emp[slug];
      for (const nome of Object.keys(e.contas || {})) {
        out.push({ key: slug + '::' + nome, empresa: slug, empresaNome: e.nome || slug, conta: nome, saldo: e.contas[nome], isCDB: /cdb/i.test(nome) });
      }
    }
    return out;
  }, [saldos, headerEmp]);
  const multiEmp = useMemo(() => new Set(contasList.map(c => c.empresa)).size > 1, [contasList]);

  const [sel, setSel] = useState(null);
  useEffect(() => { setSel(new Set(contasList.map(c => c.key))); }, [contasList.length]);
  const selSet = sel || new Set(contasList.map(c => c.key));
  const [dias, setDias] = useState(30);
  const [hover, setHover] = useState(null);

  const startBalance = useMemo(() => contasList.filter(c => selSet.has(c.key)).reduce((s, c) => s + c.saldo, 0), [contasList, selSet]);
  const selEmpresas = useMemo(() => new Set(contasList.filter(c => selSet.has(c.key)).map(c => c.empresa)), [contasList, selSet]);

  const serie = useMemo(() => {
    const all = window.ALL_TX || [];
    const t = new Date(); t.setHours(0, 0, 0, 0);
    const todayKey = t.getFullYear() * 10000 + (t.getMonth() + 1) * 100 + t.getDate();
    const netByDay = new Map();
    for (const r of all) {
      if (r[6] !== 0) continue;              // só a-vencer (não realizado)
      const r9 = r[9];
      if (r9 && !selEmpresas.has(r9)) continue; // multi-empresa (Ornata); Notável r9='' passa
      const ym = r[1], dia = r[2]; if (!ym || !dia) continue;
      const dk = (+ym.slice(0, 4)) * 10000 + (+ym.slice(5, 7)) * 100 + dia;
      if (dk < todayKey) continue;           // vencidos ficam de fora (por ora)
      netByDay.set(dk, (netByDay.get(dk) || 0) + (r[0] === 'r' ? r[5] : -r[5]));
    }
    const out = []; let acc = startBalance;
    for (let i = 0; i < dias; i++) {
      const d = new Date(t.getFullYear(), t.getMonth(), t.getDate() + i);
      const dk = d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
      acc += (netByDay.get(dk) || 0);
      const dd = String(d.getDate()).padStart(2, '0'), mm = String(d.getMonth() + 1).padStart(2, '0');
      out.push({ saldo: acc, label: dd + '/' + mm, full: dd + '/' + mm + '/' + d.getFullYear() });
    }
    return out;
  }, [startBalance, selEmpresas, dias]);

  const toggle = (key) => { const n = new Set(selSet); n.has(key) ? n.delete(key) : n.add(key); setSel(n); };
  const setAll = () => setSel(new Set(contasList.map(c => c.key)));
  const setSemCDB = () => setSel(new Set(contasList.filter(c => !c.isCDB).map(c => c.key)));
  const isTodas = selSet.size === contasList.length;
  const isSemCDB = contasList.some(c => c.isCDB) && selSet.size > 0 && [...selSet].every(k => { const c = contasList.find(x => x.key === k); return c && !c.isCDB; }) && contasList.filter(c => !c.isCDB).every(c => selSet.has(c.key));

  const fmtK = v => { const a = Math.abs(v); if (a >= 1000) return (v / 1000).toFixed(a >= 10000 ? 0 : 1).replace('.', ',') + 'k'; return String(Math.round(v)); };

  if (!saldos || !saldos.last) {
    return <div className="card"><h2 className="card-title">Saldo projetado em contas</h2><p style={{ color: 'var(--fg-3)', fontSize: 13, marginTop: 8 }}>Saldo real ainda não carregado. Aguarde o próximo refresh (fetch-saldos).</p></div>;
  }

  const W = 1000, H = isMobile ? 240 : 320;
  const PADL = 6, PADR = 6, PADT = 26, PADB = 24;
  const plotW = W - PADL - PADR, plotH = H - PADT - PADB, x0 = PADL, y0 = PADT;
  const vals = serie.map(s => s.saldo);
  const hiV = Math.max(0, ...vals), loV = Math.min(0, ...vals);
  const rng = (hiV - loV) || 1, pad = rng * 0.15;
  const top = hiV + pad, bot = loV - pad;
  const yBar = v => y0 + plotH * (top - v) / ((top - bot) || 1);
  const step = plotW / Math.max(1, serie.length);
  const bw = Math.max(2, step * 0.6);
  const cx = i => x0 + step * (i + 0.5);
  const baseY = yBar(0);
  const saldoFim = serie.length ? serie[serie.length - 1].saldo : startBalance;
  const negIdx = serie.findIndex(s => s.saldo < 0);
  const minIdx = vals.length ? vals.indexOf(Math.min(...vals)) : -1;
  const gridY = [0.25, 0.5, 0.75].map(f => y0 + plotH * f);
  const keyLabels = new Set([0, serie.length - 1, minIdx, negIdx].filter(i => i >= 0));

  return (
    <div className="card">
      <div className="card-title-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
        <h2 className="card-title" style={{ margin: 0 }}>Saldo projetado em contas (dia a dia)</h2>
        <div style={{ fontSize: 12, color: 'var(--fg-3)' }}>
          Saldo inicial: <b>{fmt(startBalance)}</b>{'  ·  '}Em {dias}d: <b style={{ color: saldoFim >= 0 ? 'var(--green)' : 'var(--red)' }}>{fmt(saldoFim)}</b>
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', margin: '10px 0 4px' }}>
        <div className="seg" style={{ display: 'flex', gap: 4 }}>
          <button className={isTodas ? 'active' : ''} onClick={setAll}>Todas</button>
          {contasList.some(c => c.isCDB) && <button className={isSemCDB ? 'active' : ''} onClick={setSemCDB}>Sem CDB</button>}
        </div>
        <div className="seg" style={{ display: 'flex', gap: 4 }}>
          {[30, 60, 90].map(d => <button key={d} className={dias === d ? 'active' : ''} onClick={() => setDias(d)}>{d}d</button>)}
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 8 }}>
        {contasList.map(c => (
          <button key={c.key} onClick={() => toggle(c.key)}
            style={{ fontSize: 10, padding: '3px 7px', borderRadius: 12, cursor: 'pointer', fontFamily: 'var(--font-mono)',
              border: '1px solid ' + (selSet.has(c.key) ? 'var(--cyan)' : 'var(--border)'),
              background: selSet.has(c.key) ? 'rgba(34,211,238,0.12)' : 'transparent',
              color: selSet.has(c.key) ? 'var(--text)' : 'var(--fg-3)', opacity: selSet.has(c.key) ? 1 : 0.55 }}
            title={(multiEmp ? c.empresaNome + ' · ' : '') + c.conta + ': ' + fmt(c.saldo)}>
            {(multiEmp ? c.empresaNome.split(' ')[0] + ' · ' : '') + c.conta} · {fmtK(c.saldo)}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 16, fontSize: 11, color: 'var(--fg-3)', margin: '0 0 6px' }}>
        <span><span style={{ display: 'inline-block', width: 12, height: 8, background: 'var(--green)', borderRadius: 2, verticalAlign: 'middle', marginRight: 4 }} />Saldo positivo no dia</span>
        <span><span style={{ display: 'inline-block', width: 12, height: 8, background: 'var(--red)', borderRadius: 2, verticalAlign: 'middle', marginRight: 4 }} />Saldo negativo no dia</span>
      </div>

      <div style={{ position: 'relative' }}
        onMouseMove={e => { const r = e.currentTarget.getBoundingClientRect(); const relX = e.clientX - r.left; const i = Math.min(serie.length - 1, Math.max(0, Math.floor((relX / r.width) * serie.length))); setHover({ i, x: relX, y: e.clientY - r.top, w: r.width }); }}
        onMouseLeave={() => setHover(null)}>
        <svg viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', width: '100%', height: 'auto' }} preserveAspectRatio="none">
          {/* grade recessiva */}
          {gridY.map((gy, k) => <line key={'g' + k} x1={x0} y1={gy} x2={x0 + plotW} y2={gy} stroke="var(--border)" strokeOpacity="0.35" strokeWidth="1" />)}
          {/* baseline zero */}
          <line x1={x0} y1={baseY} x2={x0 + plotW} y2={baseY} stroke="var(--red)" strokeOpacity={loV < 0 ? 0.65 : 0.3} strokeDasharray="4 4" strokeWidth="1" />
          {loV < 0 && baseY > y0 + 8 && baseY < H - PADB && <text x={x0 + plotW} y={baseY - 3} textAnchor="end" fontSize="9" fill="var(--red)" fontFamily="var(--font-mono)">R$ 0</text>}
          {/* guia vertical no dia sob o cursor */}
          {hover && serie[hover.i] && <line x1={cx(hover.i)} y1={y0} x2={cx(hover.i)} y2={y0 + plotH} stroke="var(--cyan)" strokeOpacity="0.45" strokeWidth="1" />}
          {/* barras — cantos arredondados, transição suave, hover destaca */}
          {serie.map((s, i) => {
            const pos = s.saldo >= 0; const yT = pos ? yBar(s.saldo) : baseY;
            const h = Math.max(1, Math.abs(yBar(s.saldo) - baseY));
            const col = pos ? 'var(--green)' : 'var(--red)';
            const op = hover ? (hover.i === i ? 1 : 0.4) : 0.9;
            return <rect key={i} x={cx(i) - bw / 2} y={yT} width={bw} height={h} rx={Math.min(bw / 2, 3)} ry={Math.min(bw / 2, 3)} fill={col} opacity={op} style={{ transition: 'y .3s ease, height .3s ease, opacity .12s ease' }} />;
          })}
          {/* marcador do 1º dia negativo */}
          {negIdx >= 0 && <line x1={cx(negIdx)} y1={y0} x2={cx(negIdx)} y2={y0 + plotH} stroke="var(--red)" strokeDasharray="3 3" strokeWidth="1.2" opacity="0.7" />}
          {/* rótulos seletivos: hoje, fim do horizonte, dia mais baixo e 1º vermelho */}
          {serie.map((s, i) => {
            if (!keyLabels.has(i)) return null;
            const pos = s.saldo >= 0; const yT = pos ? yBar(s.saldo) : baseY; const h = Math.abs(yBar(s.saldo) - baseY);
            return <text key={'l' + i} x={cx(i)} y={pos ? yT - 4 : yT + h + 10} textAnchor="middle" fontSize="8" fontWeight="600" fill={s.saldo >= 0 ? 'var(--fg-2)' : 'var(--red)'} fontFamily="var(--font-mono)">{fmtK(s.saldo)}</text>;
          })}
          {/* rótulos de dia */}
          {serie.map((s, i) => { const everyN = serie.length > 40 ? (isMobile ? 10 : 5) : (isMobile ? 4 : 2); if (i % everyN !== 0 && i !== serie.length - 1) return null; return <text key={'x' + i} x={cx(i)} y={H - 8} textAnchor="middle" fontSize="8" fill="var(--fg-3)" fontFamily="var(--font-mono)">{s.label}</text>; })}
        </svg>
        {hover && serie[hover.i] && (() => { const flip = hover.x > hover.w * 0.6; const s = serie[hover.i]; return (
          <div style={{ position: 'absolute', left: hover.x, top: Math.max(0, hover.y - 12), transform: `translateY(-100%) translateX(${flip ? 'calc(-100% - 14px)' : '14px'})`, pointerEvents: 'none', zIndex: 5, background: 'var(--surface-2, #10191f)', border: '1px solid var(--border)', borderRadius: 10, padding: '8px 12px', boxShadow: '0 8px 24px rgba(0,0,0,0.45)', fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap' }}>
            <div style={{ fontSize: 11, color: 'var(--fg-3)', marginBottom: 4 }}>{s.full}</div>
            <div style={{ fontSize: 12, color: 'var(--fg-2)' }}>Saldo em contas</div>
            <div style={{ fontSize: 17, fontWeight: 700, color: s.saldo >= 0 ? 'var(--green)' : 'var(--red)' }}>{fmt(s.saldo)}</div>
          </div>
        ); })()}
      </div>
    </div>
  );
};

const PageFluxo = ({ filters, setFilters, onOpenFilters, statusFilter, drilldown, setDrilldown, year, month }) => {
  const B = useMemo(() => window.getBit(statusFilter, drilldown, year, month, filters), [statusFilter, drilldown, year, month, filters]);
  const isMobile = useIsMobile();
  const [view, setView] = useState("horizontal");
  const [range, setRange] = useState("12M");
  // Vai até o último mês com movimento (mín. 6). Antes era fixo em 6 (escondia Jul+).
  const months6 = B.MONTHS_FULL.slice(0, (() => {
    const md = B.MONTH_DATA || [];
    let last = 5;
    for (let i = 0; i < md.length; i++) if ((md[i].receita || 0) !== 0 || (md[i].despesa || 0) !== 0) last = Math.max(last, i);
    return last + 1;
  })());
  // Receita acumulada por mês — cresce monotônica, reflete o "fluxo entrando".
  // (O net cumulativo do demo é negativo por construção dos dados fake; receita
  // acumulada é a métrica que faz a curva subir, como o usuário espera.)
  const saldosCum = useMemo(() => {
    if (!B.MONTH_DATA) return [];
    let acc = 0;
    return B.MONTH_DATA.map(m => (acc += (m.receita || 0)));
  }, [B.MONTH_DATA]);
  const refYear = (B.META && B.META.ref_year) || new Date().getFullYear();
  const handleMonthHeader = (i, e) => {
    const mm = String(i + 1).padStart(2, "0");
    const ym = `${refYear}-${mm}`;
    const mn = B.MONTHS_FULL[i] || "";
    setDrilldown(prev => window.toggleDrilldown(prev, { type: "mes", value: ym, label: `${mn.charAt(0).toUpperCase() + mn.slice(1, 3)}/${refYear}` }, e && (e.ctrlKey || e.metaKey)));
  };
  const activeMonthIdxs = window.ddValues(drilldown, "mes").map(v => parseInt(v.slice(5, 7), 10) - 1).filter(i => i >= 0);

  // ===== Cálculos pré-computados (usados pelas 4 variantes) =====
  const totalAnoReceita = useMemo(
    () => B.FLUXO_RECEITA.reduce((s, r) => s + r.values.reduce((a, b) => a + (b || 0), 0), 0),
    [B.FLUXO_RECEITA]
  );
  const totalAnoDespesa = useMemo(
    () => B.FLUXO_DESPESA.reduce((s, r) => s + r.values.reduce((a, b) => a + (b || 0), 0), 0),
    [B.FLUXO_DESPESA]
  );
  const receitaMesArr = useMemo(
    () => months6.map((_, i) => B.FLUXO_RECEITA.reduce((s, r) => s + (r.values[i] || 0), 0)),
    [B.FLUXO_RECEITA, months6.length]
  );
  const despesaMesArr = useMemo(
    () => months6.map((_, i) => B.FLUXO_DESPESA.reduce((s, r) => s + (r.values[i] || 0), 0)),
    [B.FLUXO_DESPESA, months6.length]
  );

  // ===== Hierarquia clicável: categoria → fornecedor/cliente → lançamento =====
  const [expanded, setExpanded] = useState(() => new Set());
  const [showAllRec, setShowAllRec] = useState(false);
  const [showAllDesp, setShowAllDesp] = useState(false);
  const toggleExpand = (key) => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key); else next.add(key);
      return next;
    });
  };
  // Reset ao mudar filtro (evita keys penduradas que não fazem mais sentido)
  useEffect(() => { setExpanded(new Set()); }, [statusFilter, drilldown, refYear]);

  const statusOk = (realizado) => {
    if (statusFilter === "realizado") return realizado === 1;
    if (statusFilter === "a_pagar_receber") return realizado === 0;
    return true;
  };
  const drillOk = (row) => {
    const arr = window.ddArray(drilldown);
    if (!arr.length) return true;
    const byType = {};
    arr.forEach(d => { (byType[d.type] = byType[d.type] || []).push(d.value); });
    return Object.keys(byType).every(type => {
      const vals = byType[type];
      if (type === "mes") return vals.indexOf(row[1]) >= 0;
      if (type === "categoria") return vals.indexOf(row[3]) >= 0;
      if (type === "cliente") return row[0] === "r" && vals.indexOf(row[4]) >= 0;
      if (type === "fornecedor") return row[0] === "d" && vals.indexOf(row[7]) >= 0;
      if (type === "dia") return vals.indexOf(row[2]) >= 0;
      return true;
    });
  };
  const filtersOk = (row) => {
    if (filters && filters.categoria && filters.categoria !== "Todas categorias" && row[3] !== filters.categoria) return false;
    if (filters && filters.cc && filters.cc !== "Todos centros de custo" && row[8] !== filters.cc) return false;
    if (filters && filters.conta && filters.conta !== "Todas contas") {
      var bankList = (window.BIT && window.BIT.CONTAS_BANCARIAS) || [];
      var bankAcct = bankList.find(function(b) { return b.nome === filters.conta; });
      if (bankAcct && bankAcct.conta) {
        var slug = bankAcct.conta.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/_+$/,'');
        if (row[9] !== slug) return false;
      }
    }
    return true;
  };

  // Index transações por (kind, categoria) — uma única passada por render
  const txByCat = useMemo(() => {
    const allTx = window.ALL_TX || [];
    const idx = new Map();
    for (const row of allTx) {
      const kind = row[0], mes = row[1], categoria = row[3], realizado = row[6];
      if (!mes || !categoria) continue;
      if (parseInt(mes.slice(0, 4), 10) !== refYear) continue;
      if (!statusOk(realizado)) continue;
      if (!drillOk(row)) continue;
      if (!filtersOk(row)) continue;
      const key = `${kind}::${categoria}`;
      let bucket = idx.get(key);
      if (!bucket) { bucket = []; idx.set(key, bucket); }
      bucket.push(row);
    }
    return idx;
  }, [refYear, statusFilter, drilldown, filters]);

  // Hash estável para gerar referências fake (doc ref)
  const stringHash = (s) => {
    let h = 0;
    for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
    return Math.abs(h);
  };
  // Mostra o nome real do cliente/fornecedor (a base tem os nomes no campo cliente).
  // Antes anonimizava ("Cliente 001") — resíduo da base fake, virava "???" com nome real.
  const displayName = (rawName, kind) => {
    const nm = (rawName || "").trim();
    if (!nm || nm === "Sem identificação") return kind === "r" ? "Cliente não identificado" : "Fornecedor não identificado";
    return nm;
  };
  // Fake doc ref por linha (estável)
  const docRefOf = (row) => {
    const seed = `${row[1]}-${row[2]}-${row[4] || row[7] || ""}-${row[5]}`;
    const h = stringHash(seed);
    const prefix = row[0] === "r" ? "NF" : "DOC";
    return `${prefix}-${String(h % 999999).padStart(6, "0")}`;
  };

  const FORN_TOP = 10;

  // Agrega por cliente/fornecedor individual (top FORN_TOP por valor absoluto)
  const getFornecedores = (categoria, kind) => {
    const txs = txByCat.get(`${kind}::${categoria}`) || [];
    const byForn = new Map();
    for (const row of txs) {
      const mes = row[1], cliente = row[4], valor = row[5], fornecedor = row[7];
      const rawName = kind === "r" ? (cliente || "Sem identificação") : (fornecedor || "Sem identificação");
      const mIdx = parseInt(mes.slice(5, 7), 10) - 1;
      let e = byForn.get(rawName);
      if (!e) {
        e = { rawName, name: displayName(rawName, kind), values: new Array(12).fill(0) };
        byForn.set(rawName, e);
      }
      e.values[mIdx] += (kind === "r" ? valor : -valor);
    }
    return Array.from(byForn.values())
      .map(f => ({ ...f, total: f.values.reduce((s, v) => s + (v || 0), 0) }))
      .sort((a, b) => Math.abs(b.total) - Math.abs(a.total))
      .slice(0, FORN_TOP);
  };

  // Lança transações individuais que pertencem a um cliente/fornecedor (rawName)
  const getLancamentos = (categoria, kind, rawSelected) => {
    const txs = txByCat.get(`${kind}::${categoria}`) || [];
    const out = [];
    for (const row of txs) {
      const mes = row[1], dia = row[2], cliente = row[4], valor = row[5], forn = row[7];
      const rawName = kind === "r" ? (cliente || "Sem identificação") : (forn || "Sem identificação");
      if (rawName !== rawSelected) continue;
      const mIdx = parseInt(mes.slice(5, 7), 10) - 1;
      out.push({
        mIdx,
        valor: kind === "r" ? valor : -valor,
        dataStr: `${String(dia).padStart(2, "0")}/${mes.slice(5, 7)}`,
        docRef: docRefOf(row),
      });
    }
    return out.sort((a, b) => a.mIdx - b.mIdx || Math.abs(b.valor) - Math.abs(a.valor));
  };

  const LANC_LIMIT = 50;

  // Helper: calcula o %-label de uma célula
  const cellPct = (v, rowValues, monthIdx, isReceita) => {
    if (view === "vertical") {
      const totalReceitaMes = receitaMesArr[monthIdx] || 0;
      const pct = totalReceitaMes ? (v / totalReceitaMes) * 100 : 0;
      return pct.toFixed(2).replace(".", ",") + "%";
    }
    const totalAnoLinha = rowValues.reduce((s, x) => s + (x || 0), 0);
    return totalAnoLinha ? ((v / totalAnoLinha) * 100).toFixed(1).replace(".", ",") + "%" : "—";
  };

  // Helper: bg color pro heatmap (intensidade relativa ao máximo da linha)
  const heatBg = (v, rowValues, isReceita) => {
    const max = Math.max(...rowValues.map(x => Math.abs(x || 0)), 1);
    const intensity = Math.min(1, Math.abs(v) / max);
    if (isReceita) {
      return `rgba(34, 197, 94, ${intensity * 0.45})`;
    }
    return `rgba(239, 68, 68, ${intensity * 0.45})`;
  };
  // Helper: cor do TEXTO por intensidade (usado no compact). Alpha vai de 0.35 (fraco) a 1 (forte)
  const heatColor = (v, rowValues, isReceita) => {
    const max = Math.max(...rowValues.map(x => Math.abs(x || 0)), 1);
    const intensity = Math.min(1, Math.abs(v) / max);
    const alpha = 0.35 + intensity * 0.65;
    if (isReceita) return `rgba(74, 222, 128, ${alpha})`;
    return `rgba(248, 113, 113, ${alpha})`;
  };

  // ===== Header do card (título + toggle horizontal/vertical) — reutilizado =====
  const FluxoCardHeader = () => (
    <>
      <div className="card-title-row">
        <h2 className="card-title">Fluxo de caixa</h2>
        <div className="seg">
          <button className={view === "horizontal" ? "active" : ""} onClick={() => setView("horizontal")}>Análise horizontal</button>
          <button className={view === "vertical" ? "active" : ""} onClick={() => setView("vertical")}>Análise vertical</button>
        </div>
      </div>
      <div className="status-line" style={{ marginBottom: 8, fontSize: 11 }}>
        {view === "vertical"
          ? "Vertical: todas as linhas (receita e despesa) como % da receita do mês"
          : "Horizontal: cada mês como % do total anual da linha"}
      </div>
    </>
  );

  // ===== Renderiza categoria + (se expandida) fornecedores + (se expandidos) lançamentos =====
  // Só usado no modo compact. Outros modos chamam o rendering inline original.
  const renderCategoriaTree = (row, kind) => {
    const isReceita = kind === "r";
    const catKey = `${kind}::${row.cat}`;
    const isCatExpanded = expanded.has(catKey);

    const catCells = months6.map((_, i) => {
      const v = row.values[i] || 0;
      const pctLabel = cellPct(v, row.values, i, isReceita);
      return (
        <td key={i} className="num fluxo-stacked">
          <div className="fluxo-stacked-val" style={{ color: heatColor(v, row.values, isReceita) }}>{B.fmt(v)}</div>
          <div className="fluxo-stacked-pct">{pctLabel}</div>
        </td>
      );
    });

    return (
      <React.Fragment key={catKey}>
        <tr className={`fluxo-cat-row ${isCatExpanded ? "expanded" : ""}`} onClick={() => toggleExpand(catKey)} title="Clique para ver clientes/fornecedores">
          <td className="fluxo-row-label">
            <span className={`fluxo-chev ${isCatExpanded ? "open" : ""}`}>▸</span>
            {row.cat}
          </td>
          {catCells}
        </tr>
        {isCatExpanded && getFornecedores(row.cat, kind).map(forn => {
          const fornKey = `${kind}::${row.cat}::${forn.rawName}`;
          const isFornExpanded = expanded.has(fornKey);
          const lancs = isFornExpanded ? getLancamentos(row.cat, kind, forn.rawName) : null;
          return (
            <React.Fragment key={fornKey}>
              <tr className={`fluxo-forn-row ${isFornExpanded ? "expanded" : ""}`} onClick={() => toggleExpand(fornKey)}>
                <td className="fluxo-row-label fluxo-indent-1">
                  <span className={`fluxo-chev ${isFornExpanded ? "open" : ""}`}>▸</span>
                  {forn.name}
                </td>
                {months6.map((_, i) => {
                  const v = forn.values[i] || 0;
                  return (
                    <td key={i} className="num fluxo-stacked">
                      <div className="fluxo-stacked-val" style={{ color: v ? heatColor(v, forn.values, isReceita) : "var(--fg-3)" }}>{v ? B.fmt(v) : "—"}</div>
                    </td>
                  );
                })}
              </tr>
              {lancs && lancs.slice(0, LANC_LIMIT).map((l, idx) => (
                <tr key={`l-${idx}`} className="fluxo-lanc-row">
                  <td className="fluxo-row-label fluxo-indent-2">
                    <span className="fluxo-lanc-bullet">·</span>
                    {l.dataStr} · {l.docRef}
                  </td>
                  {months6.map((_, mi) => (
                    <td key={mi} className="num fluxo-lanc-cell">
                      {mi === l.mIdx ? <div className="fluxo-lanc-val" style={{ color: isReceita ? "var(--green-2)" : "var(--red-2)" }}>{B.fmt(l.valor)}</div> : null}
                    </td>
                  ))}
                </tr>
              ))}
              {lancs && lancs.length > LANC_LIMIT && (
                <tr className="fluxo-lanc-more">
                  <td colSpan={months6.length + 1} className="fluxo-indent-2">
                    + {lancs.length - LANC_LIMIT} lançamentos não exibidos
                  </td>
                </tr>
              )}
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  };

  // ===== Tabela: renderiza thead+tbody conforme o modo =====
  // mode: 'classic' (2 cols por mês: valor + %), 'compact' (1 col: valor empilhado com %), 'heatmap' (1 col: valor com bg colorido)
  const renderTable = (mode) => {
    const isClassic = mode === "classic";
    const isCompact = mode === "compact";
    const isHeatmap = mode === "heatmap";
    // Fluxo lista TODAS as categorias (total 100%); preview curto + "mostrar mais"
    // pra nao virar uma parede de linhas.
    const CAT_PREVIEW = 10;
    const recRows = showAllRec ? B.FLUXO_RECEITA : B.FLUXO_RECEITA.slice(0, CAT_PREVIEW);
    const despRows = showAllDesp ? B.FLUXO_DESPESA : B.FLUXO_DESPESA.slice(0, CAT_PREVIEW);
    const recExtra = Math.max(0, B.FLUXO_RECEITA.length - CAT_PREVIEW);
    const despExtra = Math.max(0, B.FLUXO_DESPESA.length - CAT_PREVIEW);

    return (
      <table className={`t fluxo-table fluxo-${mode}`}>
        <thead>
          <tr>
            <th className="fluxo-label-col" style={{ minWidth: isCompact ? 150 : 200 }}>Receita / Despesa</th>
            {months6.map((m, i) => {
              const isActive = activeMonthIdxs.indexOf(i) >= 0;
              return (
                <React.Fragment key={m}>
                  <th className={`num clickable-th ${isActive ? "active" : ""}`}
                      onClick={(e) => handleMonthHeader(i, e)}
                      style={{ cursor: "pointer" }}
                      title="Clique para filtrar (Ctrl+clique soma vários meses)">
                    {m}
                  </th>
                  {isClassic && <th className="num">{view === "horizontal" ? "Δ%" : "%"}</th>}
                </React.Fragment>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {/* Seção: Receita */}
          <tr className="section">
            <td>Receita</td>
            {months6.map((_, i) => {
              const total = receitaMesArr[i];
              const pctLabel = view === "horizontal"
                ? (totalAnoReceita ? ((total / totalAnoReceita) * 100).toFixed(1).replace(".", ",") + "%" : "—")
                : "100%";
              if (isClassic) {
                return (
                  <React.Fragment key={i}>
                    <td className="num green">{B.fmt(total)}</td>
                    <td className="num" style={{ color: "var(--fg-3)", fontWeight: view === "horizontal" ? 600 : 400 }}>{pctLabel}</td>
                  </React.Fragment>
                );
              }
              if (isCompact) {
                return (
                  <td key={i} className="num fluxo-stacked">
                    <div className="fluxo-stacked-val" style={{ color: heatColor(total, receitaMesArr, true) }}>{B.fmt(total)}</div>
                    <div className="fluxo-stacked-pct">{pctLabel}</div>
                  </td>
                );
              }
              // heatmap
              return (
                <td key={i} className="num green" style={{ background: heatBg(total, receitaMesArr, true), fontWeight: 600 }}>{B.fmt(total)}</td>
              );
            })}
          </tr>

          {/* Linhas de Receita */}
          {isCompact
            ? (<>
                {recRows.map(row => renderCategoriaTree(row, "r"))}
                {recExtra > 0 && (
                  <tr key="more-rec" className="fluxo-more-row" onClick={() => setShowAllRec(v => !v)} style={{ cursor: "pointer" }}>
                    <td colSpan={months6.length + 1} style={{ textAlign: "center", color: "var(--mute)", fontSize: 11.5, fontWeight: 600, padding: "8px 6px", letterSpacing: 0.2 }}>
                      {showAllRec ? "▲  mostrar menos" : `▾  mostrar mais ${recExtra} categorias de receita`}
                    </td>
                  </tr>
                )}
              </>)
            : B.FLUXO_RECEITA.map(row => (
              <tr key={row.cat}>
                <td><span className="chev">+</span>{row.cat}</td>
                {months6.map((_, i) => {
                  const v = row.values[i] || 0;
                  const pctLabel = cellPct(v, row.values, i, true);
                  if (isClassic) {
                    return (
                      <React.Fragment key={i}>
                        <td className="num green">{B.fmt(v)}</td>
                        <td className="num" style={{ color: "var(--fg-3)" }}>{pctLabel}</td>
                      </React.Fragment>
                    );
                  }
                  return (
                    <td key={i} className="num green" style={{ background: heatBg(v, row.values, true) }}>{B.fmt(v)}</td>
                  );
                })}
              </tr>
            ))
          }

          {/* Seção: Despesa */}
          <tr className="section">
            <td>Despesa</td>
            {months6.map((_, i) => {
              const totalDespesa = despesaMesArr[i];
              let pctLabel, pctColor = "var(--fg-3)";
              if (view === "vertical") {
                const totalReceitaMes = receitaMesArr[i];
                pctLabel = totalReceitaMes ? ((totalDespesa / totalReceitaMes) * 100).toFixed(2).replace(".", ",") + "%" : "—";
                pctColor = totalDespesa > totalReceitaMes ? "var(--red)" : "var(--fg-3)";
              } else {
                pctLabel = totalAnoDespesa ? ((totalDespesa / totalAnoDespesa) * 100).toFixed(1).replace(".", ",") + "%" : "—";
              }
              if (isClassic) {
                return (
                  <React.Fragment key={i}>
                    <td className="num red">{B.fmt(totalDespesa)}</td>
                    <td className="num" style={{ color: pctColor, fontWeight: view === "horizontal" ? 600 : 400 }}>{pctLabel}</td>
                  </React.Fragment>
                );
              }
              if (isCompact) {
                return (
                  <td key={i} className="num fluxo-stacked">
                    <div className="fluxo-stacked-val" style={{ color: heatColor(totalDespesa, despesaMesArr, false) }}>{B.fmt(totalDespesa)}</div>
                    <div className="fluxo-stacked-pct" style={{ color: pctColor }}>{pctLabel}</div>
                  </td>
                );
              }
              return (
                <td key={i} className="num red" style={{ background: heatBg(totalDespesa, despesaMesArr, false), fontWeight: 600 }}>{B.fmt(totalDespesa)}</td>
              );
            })}
          </tr>

          {/* Linhas de Despesa */}
          {isCompact
            ? (<>
                {despRows.map(row => renderCategoriaTree(row, "d"))}
                {despExtra > 0 && (
                  <tr key="more-desp" className="fluxo-more-row" onClick={() => setShowAllDesp(v => !v)} style={{ cursor: "pointer" }}>
                    <td colSpan={months6.length + 1} style={{ textAlign: "center", color: "var(--mute)", fontSize: 11.5, fontWeight: 600, padding: "8px 6px", letterSpacing: 0.2 }}>
                      {showAllDesp ? "▲  mostrar menos" : `▾  mostrar mais ${despExtra} categorias de despesa`}
                    </td>
                  </tr>
                )}
              </>)
            : B.FLUXO_DESPESA.map(row => (
              <tr key={row.cat}>
                <td><span className="chev">+</span>{row.cat}</td>
                {months6.map((_, i) => {
                  const v = row.values[i] || 0;
                  const pctLabel = cellPct(v, row.values, i, false);
                  if (isClassic) {
                    return (
                      <React.Fragment key={i}>
                        <td className="num red">{B.fmt(v)}</td>
                        <td className="num" style={{ color: "var(--fg-3)" }}>{pctLabel}</td>
                      </React.Fragment>
                    );
                  }
                  return (
                    <td key={i} className="num red" style={{ background: heatBg(v, row.values, false) }}>{B.fmt(v)}</td>
                  );
                })}
              </tr>
            ))
          }

          {/* Total Líquido */}
          <tr className="total">
            <td>Total Líquido</td>
            {months6.map((_, i) => {
              const r = receitaMesArr[i];
              const d = despesaMesArr[i];
              const liq = r + d; // despesa já é negativa
              let pctLabel;
              const pctColor = liq >= 0 ? "var(--green)" : "var(--red)";
              if (view === "vertical") {
                pctLabel = r ? ((liq / r) * 100).toFixed(2).replace(".", ",") + "%" : "—";
              } else {
                const liqAno = totalAnoReceita + totalAnoDespesa;
                pctLabel = liqAno ? ((liq / liqAno) * 100).toFixed(1).replace(".", ",") + "%" : "—";
              }
              const valColor = liq >= 0 ? "var(--green)" : "var(--red)";
              if (isClassic) {
                return (
                  <React.Fragment key={i}>
                    <td className="num" style={{ color: valColor }}>{B.fmt(liq)}</td>
                    <td className="num" style={{ color: pctColor, fontWeight: 600 }}>{pctLabel}</td>
                  </React.Fragment>
                );
              }
              if (isCompact) {
                return (
                  <td key={i} className="num fluxo-stacked">
                    <div className="fluxo-stacked-val" style={{ color: valColor }}>{B.fmt(liq)}</div>
                    <div className="fluxo-stacked-pct" style={{ color: pctColor, fontWeight: 600 }}>{pctLabel}</div>
                  </td>
                );
              }
              // heatmap: total não recebe bg (linha já é destacada pelo .total)
              return (
                <td key={i} className="num" style={{ color: valColor, fontWeight: 700 }}>{B.fmt(liq)}</td>
              );
            })}
          </tr>
        </tbody>
      </table>
    );
  };

  const DivergingBarsCard = (
    <div className="card">
      <h2 className="card-title">Valor líquido por mês</h2>
      <DivergingBars values={B.VALOR_LIQ_SERIES} labels={B.MONTHS.map(m => m.charAt(0).toUpperCase() + m.slice(1))} />
    </div>
  );

  return (
    <div className="page">
      <div className="page-title">
        <div>
          <h1>Fluxo de Caixa</h1>
          <div className="status-line">Análise horizontal/vertical e saldos por mês</div>
        </div>
        <div className="actions">
        </div>
      </div>

      <DrilldownBadge drilldown={drilldown} setDrilldown={setDrilldown} onClear={() => setDrilldown(null)} />

      <div className="metric-strip">
        <div className="metric">
          <div className="m-label">Receita total</div>
          <div className="m-value">{B.fmt(B.TOTAL_RECEITA)}</div>
          <div className="m-pct">100%</div>
          <div className="m-bar"><div style={{ width: `100%` }} /></div>
        </div>
        <div className="metric">
          <div className="m-label">Despesa total</div>
          <div className="m-value">{B.fmt(B.TOTAL_DESPESA)}</div>
          <div className="m-pct">{B.TOTAL_RECEITA > 0 ? `${((B.TOTAL_DESPESA / B.TOTAL_RECEITA) * 100).toFixed(2).replace(".",",")}%` : "—"}</div>
          <div className="m-bar red"><div style={{ width: `${B.TOTAL_RECEITA > 0 ? Math.min(100, (B.TOTAL_DESPESA / B.TOTAL_RECEITA) * 100) : 0}%` }} /></div>
        </div>
        <div className="metric">
          <div className="m-label">Valor líquido</div>
          <div className="m-value" style={{ color: B.VALOR_LIQUIDO >= 0 ? "var(--green)" : "var(--red)" }}>{B.fmt(B.VALOR_LIQUIDO)}</div>
          <div className="m-pct">{B.MARGEM_LIQUIDA.toFixed(2).replace(".",",")}%</div>
          <div className="m-bar cyan"><div style={{ width: `${Math.min(100, Math.max(0, B.MARGEM_LIQUIDA))}%` }} /></div>
        </div>
        <div className="metric">
          <div className="m-label">Margem líquida</div>
          <div className="m-value">{B.MARGEM_LIQUIDA.toFixed(2).replace(".",",")}%</div>
          <div className="m-pct">média do período</div>
          <div className="m-bar"><div style={{ width: `${Math.min(100, Math.max(0, B.MARGEM_LIQUIDA))}%` }} /></div>
        </div>
      </div>

      <div className="card">
        <FluxoCardHeader />
        <div className="t-scroll fluxo-scroll-tall">
          <div className="fluxo-sticky-wrap">{renderTable("compact")}</div>
        </div>
      </div>

      <SaldoProjetadoCard B={B} isMobile={isMobile} filters={filters} />
    </div>
  );
};

const PageTesouraria = ({ filters, setFilters, onOpenFilters, statusFilter, drilldown, setDrilldown, year, month }) => {
  const B = useMemo(() => window.getBit(statusFilter, drilldown, year, month, filters), [statusFilter, drilldown, year, month, filters]);
  const isMobile = useIsMobile();
  const [semCDB, setSemCDB] = useState(false);
  const SEG = window.BIT_SEGMENTS || {};
  const segReal = useMemo(() => window.getBit("realizado", drilldown, year, month, filters), [drilldown, year, month, filters]);
  const segAPR = useMemo(() => window.getBit("a_pagar_receber", drilldown, year, month, filters), [drilldown, year, month, filters]);
  const recebido = segReal.TOTAL_RECEITA || 0;
  const aReceber = segAPR.TOTAL_RECEITA || 0;
  const pago = segReal.TOTAL_DESPESA || 0;
  const aPagar = segAPR.TOTAL_DESPESA || 0;
  const recDiaSeg = segReal.RECEITA_DIA || B.RECEITA_DIA;
  const pagoDiaSeg = segReal.DESPESA_DIA || B.DESPESA_DIA;
  const aReceberDiaSeg = segAPR.RECEITA_DIA || B.RECEITA_DIA;
  const aPagarDiaSeg = segAPR.DESPESA_DIA || B.DESPESA_DIA;

  const saldosMes = (SEG.tudo && SEG.tudo.SALDOS_MES) || B.SALDOS_MES;
  // Cumulativo (running balance): cada mês = saldo atual após acumular movimentos
  const SALDOS_REAIS = (window.BIT_EXTRAS && window.BIT_EXTRAS.saldos) || null;
  // Total parado em contas CDB (investimento) — alimenta o toggle "Com/Sem CDB" do fluxo a vencer.
  const cdbTotal = useMemo(() => {
    if (!SALDOS_REAIS || !SALDOS_REAIS.last) return 0;
    const emp = SALDOS_REAIS.last.empresas || {};
    let t = 0;
    for (const s of Object.keys(emp)) for (const n of Object.keys(emp[s].contas || {})) if (/cdb/i.test(n)) t += emp[s].contas[n];
    return t;
  }, [SALDOS_REAIS]);
  const hasCDB = Math.abs(cdbTotal) > 0.005;
  // Saldo inicial do ano: usa o saldo real mais antigo da planilha (se disponível) menos os movimentos até o mês desse saldo.
  // Sem isso, parte de 0 e mostra apenas o efeito dos movimentos.
  const saldoInicial = (function() {
    if (!SALDOS_REAIS || !SALDOS_REAIS.last) return 0;
    const lastDate = new Date(SALDOS_REAIS.last.data);
    const lastMonthIdx = lastDate.getMonth();
    // Saldo no mês N = saldoInicial + sum(saldosMes[0..N]). Sabemos saldo atual e queremos saldo inicial.
    // saldoInicial = saldoAtual - sum(saldosMes[0..lastMonthIdx])
    let acumAteAgora = 0;
    for (let i = 0; i <= lastMonthIdx; i++) acumAteAgora += saldosMes[i] || 0;
    return SALDOS_REAIS.last.total - acumAteAgora;
  })();
  const saldosCum = saldosMes.reduce((acc, v, i) => {
    acc.push((acc[i - 1] != null ? acc[i - 1] : saldoInicial) + (v || 0));
    return acc;
  }, []);
  const sMax = Math.max(...saldosCum, 0);
  const sMin = Math.min(...saldosCum, 0);
  const sMed = saldosCum.length ? saldosCum.reduce((s, v) => s + v, 0) / saldosCum.length : 0;

  // Fluxo a vencer: pega o segmento a_pagar_receber (que tem só items NÃO realizados)
  // e filtra por data >= hoje. Ordem ascendente (próximo vencimento primeiro).
  const todayKey = (function() {
    const t = new Date();
    return t.getFullYear() * 10000 + (t.getMonth() + 1) * 100 + t.getDate();
  })();
  const parseFluxoDate = (s) => {
    const [d, m, y] = (s || '').split('/').map(Number);
    if (!d || !m || !y) return 0;
    return y * 10000 + m * 100 + d;
  };
  const saldoBaseRaw = (SALDOS_REAIS && SALDOS_REAIS.last && SALDOS_REAIS.last.total) || 0;
  const saldoBaseInicial = semCDB ? saldoBaseRaw - cdbTotal : saldoBaseRaw;
  const fluxoFuturoFull = useMemo(() => {
    // Lê direto de ALL_TX (não usa SEG.EXTRATO porque buildExtrato faz slice(0,200)
    // sortado DESC, perdendo lançamentos de 2026 quando há parcelas até 2033).
    const allTx = window.ALL_TX || [];
    // Filtra: não realizado (a-vencer) E data >= hoje
    // ALL_TX schema: [kind, mes (yyyy-mm), dia, categoria, cliente, valor, realizado, fornecedor, cc]
    const apr = allTx.filter(r => r[6] === 0);
    // Constrói tupla compatível com EXTRATO: [data DD/MM/YYYY, cc, categoria, cliente/fornec, valorAssinado, status]
    const rows = apr.map(r => {
      const [kind, mes, dia, categoria, cliente, valor, _realizado, fornecedor, cc] = r;
      if (!mes || !dia) return null;
      const dataStr = String(dia).padStart(2, '0') + '/' + mes.slice(5, 7) + '/' + mes.slice(0, 4);
      const valorAssinado = kind === 'r' ? valor : -valor;
      return [dataStr, cc || 'Operações', categoria, kind === 'r' ? cliente : fornecedor, valorAssinado, ''];
    }).filter(Boolean);
    // Aplica drilldown se houver
    const filtered = window.applyDrilldown ? window.applyDrilldown(rows, drilldown) : rows;
    // Filtra futuro + sort ASC (mais próximas primeiro)
    const sorted = filtered
      .filter(e => parseFluxoDate(e[0]) >= todayKey)
      .sort((a, b) => parseFluxoDate(a[0]) - parseFluxoDate(b[0]));
    // Saldo running
    let saldoRunning = saldoBaseInicial;
    return sorted.map((e) => {
      saldoRunning += (e[4] || 0);
      return [...e, saldoRunning];
    });
  }, [drilldown, todayKey, saldoBaseInicial]);

  // Tabela limita a 60 linhas, mas análise de risco usa o full
  const fluxoFuturo = useMemo(() => fluxoFuturoFull.slice(0, 60), [fluxoFuturoFull]);

  // Análise de risco de caixa: quando o saldo cai abaixo de zero pela 1ª vez?
  // Mínimo projetado e em qual data?
  const riscoAnalise = useMemo(() => {
    if (fluxoFuturoFull.length === 0) return null;
    let primeiroNegativo = null;
    let minSaldo = saldoBaseInicial;
    let minSaldoData = null;
    let saldoFinal = saldoBaseInicial;
    for (const row of fluxoFuturoFull) {
      const saldo = row[6];
      if (saldo < 0 && primeiroNegativo == null) {
        primeiroNegativo = { data: row[0], saldo, valor: row[4], movimento: row[3] || row[2] };
      }
      if (saldo < minSaldo) {
        minSaldo = saldo;
        minSaldoData = row[0];
      }
      saldoFinal = saldo;
    }
    // Dias até primeiro negativo
    let diasAteCrise = null;
    if (primeiroNegativo) {
      const [d, m, y] = primeiroNegativo.data.split('/').map(Number);
      const t = new Date(); t.setHours(0,0,0,0);
      const target = new Date(y, m - 1, d);
      diasAteCrise = Math.round((target - t) / (1000 * 60 * 60 * 24));
    }
    return { primeiroNegativo, minSaldo, minSaldoData, saldoFinal, diasAteCrise, totalLancamentos: fluxoFuturoFull.length };
  }, [fluxoFuturoFull, saldoBaseInicial]);

  // Saldo dia-a-dia agregado (pra chart de projeção). Agrupa lançamentos do mesmo dia.
  const saldoDiario = useMemo(() => {
    if (fluxoFuturoFull.length === 0) return [];
    const byDay = new Map();
    for (const row of fluxoFuturoFull) {
      const dataKey = row[0]; // DD/MM/YYYY
      // Para o chart, queremos o saldo NO FIM do dia
      byDay.set(dataKey, row[6]);
    }
    return [...byDay.entries()].map(([data, saldo]) => ({ data, saldo }));
  }, [fluxoFuturoFull]);

  return (
    <div className="page">
      <div className="page-title">
        <div>
          <h1>Tesouraria</h1>
          <div className="status-line"><span className="live-dot" /> Saldos e pulso · {(B.META && B.META.ref_year) || "—"}</div>
        </div>
        <div className="actions">
        </div>
      </div>

      <DrilldownBadge drilldown={drilldown} setDrilldown={setDrilldown} onClear={() => setDrilldown(null)} />

      <div className="row row-4">
        <KpiTile label="Recebido (PAGO)" value={B.fmt(recebido)} sparkValues={recDiaSeg} sparkColor="var(--green)" tone="green" noPrefix />
        <KpiTile label="A receber" value={B.fmt(aReceber)} sparkValues={aReceberDiaSeg} sparkColor="var(--cyan)" tone="cyan" noPrefix />
        <KpiTile label="Pago" value={B.fmt(pago)} sparkValues={pagoDiaSeg} sparkColor="var(--red)" tone="red" noPrefix />
        <KpiTile label="A pagar" value={B.fmt(aPagar)} sparkValues={aPagarDiaSeg} sparkColor="var(--amber)" tone="amber" noPrefix />
      </div>

      <div className="row row-1-1">
        <div className="card">
          <div className="card-title-row">
            <h2 className="card-title">Pulso de receitas</h2>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              <span className="chip green">Recebido · {B.fmt(recebido)}</span>
              <span className="chip cyan">A receber · {B.fmt(aReceber)}</span>
            </div>
          </div>
          <DailyBars values={recDiaSeg} color="green"
            onBarClick={(i) => setDrilldown({ type: "dia", value: i + 1, label: `Dia ${i + 1}` })}
            activeIdx={drilldown && drilldown.type === "dia" ? drilldown.value - 1 : -1} />
        </div>
        <div className="card">
          <div className="card-title-row">
            <h2 className="card-title">Pulso de despesas</h2>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              <span className="chip red">Pago · {B.fmt(pago)}</span>
              <span className="chip" style={{ background: "rgba(245,158,11,0.12)", color: "#fcd34d", borderColor: "rgba(245,158,11,0.28)" }}>A pagar · {B.fmt(aPagar)}</span>
            </div>
          </div>
          <DailyBars values={pagoDiaSeg} color="red"
            onBarClick={(i) => setDrilldown({ type: "dia", value: i + 1, label: `Dia ${i + 1}` })}
            activeIdx={drilldown && drilldown.type === "dia" ? drilldown.value - 1 : -1} />
        </div>
      </div>

      {/* Saldo real (planilha de saldos) + projeção futura */}
      {(function() {
        const SALDOS = (window.BIT_EXTRAS && window.BIT_EXTRAS.saldos) || null;
        if (!SALDOS || !SALDOS.last) return null;
        const last = SALDOS.last;
        const contas = Object.entries(last.contas).sort((a, b) => b[1] - a[1]);
        // Projeção: saldo último + ∑(a receber) − ∑(a pagar) acumulado por mês.
        // Usa BIT_SEGMENTS.a_pagar_receber pra somar ainda-pendente por mês futuro.
        const seg = (window.BIT_SEGMENTS || {}).a_pagar_receber || { MONTH_DATA: [] };
        const lastDate = new Date(last.data);
        const lastMonthIdx = lastDate.getMonth();
        const proj = [];
        let saldo = last.total;
        for (let i = lastMonthIdx + 1; i < 12; i++) {
          const md = seg.MONTH_DATA[i] || { receita: 0, despesa: 0 };
          saldo += (md.receita || 0) - (md.despesa || 0);
          proj.push({ m: B.MONTHS_FULL[i] || `M${i+1}`, saldo });
        }
        const series = [last.total, ...proj.map(p => p.saldo)];
        const labels = ['Hoje', ...proj.map(p => p.m.slice(0,3))];
        const minProj = Math.min(...series);
        const maxProj = Math.max(...series);
        return (
          <div className="card" style={{ marginBottom: 14 }}>
            <div className="card-title-row">
              <h2 className="card-title">Saldo atual e projeção</h2>
              <span className="chip cyan">Última atualização: {last.data.split('-').reverse().join('/')}</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12, marginBottom: 18 }}>
              {contas.map(([nome, v]) => (
                <div key={nome} className="indicator-card" style={{ padding: 12 }}>
                  <div className="kpi-label" style={{ fontSize: 10 }}>{nome}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 16, color: v >= 0 ? 'var(--green)' : 'var(--red)' }}>{B.fmt(v)}</div>
                </div>
              ))}
              <div className="indicator-card" style={{ padding: 12, background: 'rgba(34,211,238,0.08)' }}>
                <div className="kpi-label" style={{ fontSize: 10 }}>Total</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 18, color: 'var(--cyan)' }}>{B.fmt(last.total)}</div>
              </div>
            </div>
            <div style={{ marginTop: 8 }}>
              <div className="kpi-label" style={{ marginBottom: 6 }}>Projeção mensal (saldo + a receber − a pagar)</div>
              <TrendChart values={series} labels={labels} color="var(--cyan)" height={isMobile ? 160 : 200} showPoints={true} showLabels={!isMobile} gradientId="ts-proj" interactive valueFmt={B.fmt} tooltipLabel="Saldo projetado" />
              <div style={{ display: 'flex', gap: 24, marginTop: 8, fontSize: 11, color: 'var(--mute)' }}>
                <span>Mínima projetada: <b style={{ color: minProj >= 0 ? 'var(--green)' : 'var(--red)' }}>{B.fmt(minProj)}</b></span>
                <span>Máxima projetada: <b style={{ color: 'var(--green)' }}>{B.fmt(maxProj)}</b></span>
                <span>Final do ano: <b style={{ color: series[series.length-1] >= 0 ? 'var(--green)' : 'var(--red)' }}>{B.fmt(series[series.length-1])}</b></span>
              </div>
            </div>
          </div>
        );
      })()}

      <div className="row" style={{ gridTemplateColumns: "minmax(0, 7fr) minmax(0, 5fr)" }}>
        <div className="card">
          <h2 className="card-title">Saldo acumulado por mês</h2>
          <div style={{ display: "flex", gap: 24, marginBottom: 14, flexWrap: "wrap" }}>
            <div><div className="kpi-label">Saldo Máximo</div><div style={{ fontFamily: "var(--font-mono)", fontWeight: 600, color: "var(--green)" }}>{B.fmt(sMax)}</div></div>
            <div><div className="kpi-label">Saldo Mínimo</div><div style={{ fontFamily: "var(--font-mono)", fontWeight: 600, color: "var(--red)" }}>{B.fmt(sMin)}</div></div>
            <div><div className="kpi-label">Saldo Médio</div><div style={{ fontFamily: "var(--font-mono)", fontWeight: 600, color: "var(--cyan)" }}>{B.fmt(sMed)}</div></div>
            {SALDOS_REAIS && SALDOS_REAIS.last && (
              <div><div className="kpi-label">Saldo atual (planilha)</div><div style={{ fontFamily: "var(--font-mono)", fontWeight: 600, color: "var(--cyan)" }}>{B.fmt(SALDOS_REAIS.last.total)}</div></div>
            )}
          </div>
          <TrendChart values={saldosCum} labels={B.MONTHS} color="var(--cyan)" height={isMobile ? 160 : 200} showPoints={true} showLabels={!isMobile} gradientId="ts-saldo" interactive valueFmt={B.fmt} tooltipLabel="Saldo acumulado" />
          <div className="status-line" style={{ marginTop: 6 }}>
            Saldo cumulativo: parte de R$ {(B.fmt(saldoInicial) || "0").replace("R$ ", "")} no início do ano e acumula receitas − despesas mês a mês.
          </div>
        </div>

        <div className="card">
          <div className="card-title-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
            <h2 className="card-title" style={{ margin: 0 }}>Fluxo a vencer (saldo projetado dia a dia)</h2>
            {hasCDB && (
              <div className="seg" style={{ display: "flex", gap: 4 }}>
                <button className={!semCDB ? "active" : ""} onClick={() => setSemCDB(false)}>Com CDB</button>
                <button className={semCDB ? "active" : ""} onClick={() => setSemCDB(true)}>Sem CDB</button>
              </div>
            )}
          </div>
          <div className="status-line" style={{ marginBottom: 8 }}>
            {fluxoFuturoFull.length} lançamentos a partir de hoje
            {SALDOS_REAIS && SALDOS_REAIS.last && (
              <> · saldo inicial <b style={{ color: "var(--cyan)" }}>{B.fmt(saldoBaseInicial)}</b>
                {hasCDB && (semCDB
                  ? <span style={{ color: "var(--fg-3)" }}> · CDB de fora ({B.fmt(cdbTotal)})</span>
                  : <span style={{ color: "var(--fg-3)" }}> · inclui {B.fmt(cdbTotal)} em CDB</span>)}
              </>
            )}
          </div>
          {/* Banner de risco de caixa */}
          {riscoAnalise && (
            <div className={`tesouraria-risco ${riscoAnalise.primeiroNegativo ? "risco-critico" : riscoAnalise.minSaldo < saldoBaseInicial * 0.3 ? "risco-atencao" : "risco-ok"}`}>
              {riscoAnalise.primeiroNegativo ? (
                <>
                  <div className="risco-icon">⚠</div>
                  <div className="risco-body">
                    <div className="risco-titulo">SALDO ENTRA EM VERMELHO EM <b>{riscoAnalise.primeiroNegativo.data}</b> {riscoAnalise.diasAteCrise != null && <span className="risco-dias">(em {riscoAnalise.diasAteCrise} {riscoAnalise.diasAteCrise === 1 ? "dia" : "dias"})</span>}</div>
                    <div className="risco-detalhe">
                      Lançamento crítico: <b>{(riscoAnalise.primeiroNegativo.movimento || "").slice(0, 40)}</b> · {B.fmt(riscoAnalise.primeiroNegativo.valor)} · saldo cai pra <b style={{ color: "var(--red)" }}>{B.fmt(riscoAnalise.primeiroNegativo.saldo)}</b>
                    </div>
                    <div className="risco-min">
                      Mínimo projetado: <b style={{ color: "var(--red)" }}>{B.fmt(riscoAnalise.minSaldo)}</b> em {riscoAnalise.minSaldoData} · Saldo final no horizonte: <b style={{ color: riscoAnalise.saldoFinal >= 0 ? "var(--green)" : "var(--red)" }}>{B.fmt(riscoAnalise.saldoFinal)}</b>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="risco-icon">{riscoAnalise.minSaldo < saldoBaseInicial * 0.3 ? "⚠" : "✓"}</div>
                  <div className="risco-body">
                    <div className="risco-titulo">
                      {riscoAnalise.minSaldo < saldoBaseInicial * 0.3
                        ? "SALDO MÍNIMO PROJETADO ABAIXO DE 30% DO ATUAL"
                        : "CAIXA SAUDÁVEL NO HORIZONTE"}
                    </div>
                    <div className="risco-detalhe">
                      Mínimo: <b style={{ color: riscoAnalise.minSaldo < saldoBaseInicial * 0.3 ? "var(--amber)" : "var(--green)" }}>{B.fmt(riscoAnalise.minSaldo)}</b> em {riscoAnalise.minSaldoData} · Final: <b style={{ color: "var(--green)" }}>{B.fmt(riscoAnalise.saldoFinal)}</b>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
          {/* Mini chart de saldo dia-a-dia projetado */}
          {saldoDiario.length > 1 && (
            <div className="tesouraria-mini-chart">
              <SaldoProjetadoChart pontos={saldoDiario} saldoInicial={saldoBaseInicial} fmt={B.fmt} isMobile={isMobile} />
            </div>
          )}
          <div className="t-scroll" style={{ maxHeight: 380 }}>
            <table className="t">
              <thead>
                <tr><th>Vence</th><th>Cliente / Fornecedor</th><th className="num">Movimento</th><th className="num">Saldo</th></tr>
              </thead>
              <tbody>
                {fluxoFuturo.length === 0 && (
                  <tr><td colSpan="4" style={{ textAlign: "center", color: "var(--fg-3)", padding: 20 }}>Sem lançamentos a vencer</td></tr>
                )}
                {fluxoFuturo.map((e, i) => {
                  const saldoCol = e[6];
                  const dataAtual = e[0];
                  const dataAnterior = i > 0 ? fluxoFuturo[i - 1][0] : null;
                  const novoBloco = dataAnterior !== dataAtual; // primeira linha de cada dia
                  // Linha "crítica" se este é o primeiro lançamento que torna o saldo negativo
                  const saldoAnterior = i > 0 ? fluxoFuturo[i - 1][6] : saldoBaseInicial;
                  const cruzouZero = saldoAnterior >= 0 && saldoCol < 0;
                  return (
                    <tr key={i} className={cruzouZero ? "tesouraria-row-critica" : ""} style={novoBloco && i > 0 ? { borderTop: "1px solid var(--border-2)" } : {}}>
                      <td style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: novoBloco ? 700 : 400, color: novoBloco ? "var(--text)" : "var(--fg-3)" }}>{novoBloco ? dataAtual : ""}</td>
                      <td style={{ fontSize: 11 }}>{(e[3] || e[2] || "").slice(0, 32)}</td>
                      <td className={`num ${e[4] < 0 ? "red" : "green"}`} style={{ fontSize: 11 }}>{B.fmt(e[4])}</td>
                      <td className="num" style={{ fontSize: 11, fontWeight: 600, color: saldoCol < 0 ? "var(--red)" : saldoCol < saldoBaseInicial * 0.3 ? "var(--amber)" : "var(--cyan)" }}>{B.fmt(saldoCol)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {fluxoFuturoFull.length > 60 && (
            <div className="status-line" style={{ marginTop: 8, fontSize: 11, textAlign: "center" }}>
              Mostrando primeiros 60 de {fluxoFuturoFull.length} lançamentos · análise de risco usa todos
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Projeção diária do saldo em contas — BARRAS verde (positivo) / vermelho (negativo).
// O cliente quer bater o olho e ver, dia a dia, se o saldo em contas fura ou não.
// Parte do saldo real (SALDOS_REAIS) e projeta com a-pagar/receber. Janela = `dias`.
const SaldoDiarioBars = ({ pontos, saldoInicial, fmt, isMobile, dias = 90 }) => {
  const [hover, setHover] = useState(null);
  const serie = useMemo(() => {
    const map = new Map();
    for (const p of (pontos || [])) map.set(p.data, p.saldo);
    const out = [];
    const t = new Date(); t.setHours(0, 0, 0, 0);
    let running = saldoInicial || 0;
    for (let i = 0; i < dias; i++) {
      const d = new Date(t.getFullYear(), t.getMonth(), t.getDate() + i);
      const key = String(d.getDate()).padStart(2, '0') + '/' + String(d.getMonth() + 1).padStart(2, '0') + '/' + d.getFullYear();
      if (map.has(key)) running = map.get(key);
      out.push({ key, saldo: running, label: String(d.getDate()).padStart(2, '0') + '/' + String(d.getMonth() + 1).padStart(2, '0') });
    }
    return out;
  }, [pontos, saldoInicial, dias]);

  if (serie.length < 2) return null;
  const W = 1000, H = isMobile ? 220 : 300;
  const PADT = 18, PADB = 26, PADL = 6, PADR = 6;
  const plotW = W - PADL - PADR, plotH = H - PADT - PADB, x0 = PADL, y0 = PADT;
  const vals = serie.map(s => s.saldo);
  const hi = Math.max(0, ...vals), lo = Math.min(0, ...vals);
  const rng = (hi - lo) || 1, pad = rng * 0.12;
  const top = hi + pad, bot = lo - pad;
  const yOf = v => y0 + plotH * (top - v) / ((top - bot) || 1);
  const step = plotW / serie.length;
  const bw = Math.max(1.5, step * 0.72);
  const cx = i => x0 + step * (i + 0.5);
  const baseY = yOf(0);
  const negIdx = serie.findIndex(s => s.saldo < 0);

  return (
    <div style={{ position: 'relative' }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const relX = e.clientX - r.left;
        const i = Math.min(serie.length - 1, Math.max(0, Math.floor((relX / r.width) * serie.length)));
        setHover({ i, x: relX, y: e.clientY - r.top, w: r.width });
      }}
      onMouseLeave={() => setHover(null)}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', width: '100%', height: 'auto' }} preserveAspectRatio="none">
        <line x1={x0} y1={baseY} x2={x0 + plotW} y2={baseY} stroke="var(--red)" strokeOpacity="0.5" strokeDasharray="4 4" strokeWidth="1" />
        {baseY > y0 + 10 && baseY < H - PADB && <text x={x0 + plotW} y={baseY - 3} textAnchor="end" fontSize="9" fill="var(--red)" fontFamily="var(--font-mono)">R$ 0</text>}
        {serie.map((s, i) => {
          const pos = s.saldo >= 0;
          const yA = pos ? yOf(s.saldo) : baseY;
          const h = Math.abs(yOf(s.saldo) - baseY);
          return <rect key={i} x={cx(i) - bw / 2} y={yA} width={bw} height={Math.max(1, h)} fill={pos ? 'var(--green)' : 'var(--red)'} opacity={hover && hover.i === i ? 1 : 0.82} />;
        })}
        {negIdx >= 0 && (
          <g>
            <line x1={cx(negIdx)} y1={y0} x2={cx(negIdx)} y2={y0 + plotH} stroke="var(--red)" strokeDasharray="3 3" strokeWidth="1.2" />
            <text x={cx(negIdx)} y={y0 - 4} textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--red)">{serie[negIdx].label}</text>
          </g>
        )}
        {serie.map((s, i) => {
          const everyN = isMobile ? 15 : 10;
          if (i % everyN !== 0 && i !== serie.length - 1) return null;
          return <text key={'x' + i} x={cx(i)} y={H - 8} textAnchor="middle" fontSize="8" fill="var(--fg-3)" fontFamily="var(--font-mono)">{s.label}</text>;
        })}
      </svg>
      {hover && (() => {
        const flip = hover.x > hover.w * 0.6;
        const s = serie[hover.i];
        return (
          <div style={{ position: 'absolute', left: hover.x, top: Math.max(0, hover.y - 12), transform: `translateY(-100%) translateX(${flip ? 'calc(-100% - 14px)' : '14px'})`, pointerEvents: 'none', zIndex: 5, background: 'var(--surface-2, #10191f)', border: '1px solid var(--border)', borderRadius: 10, padding: '8px 12px', boxShadow: '0 8px 24px rgba(0,0,0,0.45)', fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap' }}>
            <div style={{ fontSize: 11, color: 'var(--fg-3)', marginBottom: 4 }}>{s.key}</div>
            <div style={{ fontSize: 12, color: 'var(--fg-2)' }}>Saldo em contas</div>
            <div style={{ fontSize: 17, fontWeight: 700, color: s.saldo >= 0 ? 'var(--green)' : 'var(--red)' }}>{fmt(s.saldo)}</div>
          </div>
        );
      })()}
    </div>
  );
};

// Mini chart SVG do saldo projetado dia-a-dia, com marcador da data crítica
// Projeção do saldo a-vencer dia a dia — área + linha interativa (crosshair + tooltip),
// no mesmo padrão visual do SaldoProjetadoCard. Marca Hoje, mínimo e 1º dia negativo.
const SaldoProjetadoChart = ({ pontos, saldoInicial, fmt, isMobile }) => {
  const [hover, setHover] = useState(null);
  const f = fmt || (window.BIT && window.BIT.fmt) || (v => "R$ " + Math.round(v));
  if (!pontos || pontos.length < 2) return null;
  const serie = [{ saldo: saldoInicial, label: "Hoje", full: "Hoje" },
    ...pontos.map(p => ({ saldo: p.saldo, label: (p.data || "").slice(0, 5), full: p.data }))];
  const W = 1000, H = isMobile ? 190 : 240;
  const PADT = 22, PADB = 26, PADL = 8, PADR = 8;
  const plotW = W - PADL - PADR, plotH = H - PADT - PADB, x0 = PADL, y0 = PADT;
  const vals = serie.map(s => s.saldo);
  const hiV = Math.max(0, ...vals), loV = Math.min(0, ...vals);
  const rng = (hiV - loV) || 1, pad = rng * 0.15;
  const top = hiV + pad, bot = loV - pad;
  const yOf = v => y0 + plotH * (top - v) / ((top - bot) || 1);
  const step = plotW / Math.max(1, serie.length - 1);
  const cx = i => x0 + step * i;
  const baseY = yOf(0), bottomY = y0 + plotH;
  const linePts = serie.map((s, i) => cx(i) + "," + yOf(s.saldo));
  const areaPath = "M " + cx(0) + "," + bottomY + " L " + linePts.join(" L ") + " L " + cx(serie.length - 1) + "," + bottomY + " Z";
  const linePath = "M " + linePts.join(" L ");
  const minIdx = vals.indexOf(Math.min(...vals));
  const critIdx = serie.findIndex(s => s.saldo < 0);
  const gridY = [0.25, 0.5, 0.75].map(fr => y0 + plotH * fr);
  const everyN = serie.length > 40 ? (isMobile ? 12 : 6) : (isMobile ? 5 : 3);
  const negativo = loV < 0;
  const col = negativo ? "var(--amber)" : "var(--cyan)";
  return (
    <div style={{ position: "relative" }}
      onMouseMove={e => { const r = e.currentTarget.getBoundingClientRect(); const relX = e.clientX - r.left; const i = Math.min(serie.length - 1, Math.max(0, Math.round((relX / r.width) * (serie.length - 1)))); setHover({ i, x: relX, y: e.clientY - r.top, w: r.width }); }}
      onMouseLeave={() => setHover(null)}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ display: "block", width: "100%", height: "auto" }} preserveAspectRatio="none">
        <defs>
          <linearGradient id="ts-proj-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={col} stopOpacity="0.28" />
            <stop offset="100%" stopColor={col} stopOpacity="0" />
          </linearGradient>
        </defs>
        {gridY.map((gy, k) => <line key={"g" + k} x1={x0} y1={gy} x2={x0 + plotW} y2={gy} stroke="var(--border)" strokeOpacity="0.35" strokeWidth="1" />)}
        {baseY > y0 && baseY < bottomY && <line x1={x0} y1={baseY} x2={x0 + plotW} y2={baseY} stroke="var(--red)" strokeOpacity={negativo ? 0.6 : 0.3} strokeDasharray="4 4" strokeWidth="1" />}
        {negativo && baseY > y0 + 8 && baseY < bottomY && <text x={x0 + plotW} y={baseY - 3} textAnchor="end" fontSize="9" fill="var(--red)" fontFamily="var(--font-mono)">R$ 0</text>}
        <path d={areaPath} fill="url(#ts-proj-grad)" />
        <path d={linePath} fill="none" stroke={col} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        {/* Hoje */}
        <line x1={cx(0)} y1={y0} x2={cx(0)} y2={bottomY} stroke={col} strokeOpacity="0.35" strokeWidth="1" />
        <text x={cx(0) + 4} y={y0 + 9} textAnchor="start" fontSize="9" fontWeight="600" fill={col} fontFamily="var(--font-mono)">Hoje</text>
        {/* mínimo */}
        {minIdx > 0 && <line x1={cx(minIdx)} y1={y0} x2={cx(minIdx)} y2={bottomY} stroke="var(--fg-3)" strokeDasharray="2 3" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />}
        {/* 1º dia negativo */}
        {critIdx >= 0 && <line x1={cx(critIdx)} y1={y0} x2={cx(critIdx)} y2={bottomY} stroke="var(--red)" strokeDasharray="3 3" strokeWidth="1.2" opacity="0.75" vectorEffect="non-scaling-stroke" />}
        {/* crosshair sob o cursor */}
        {hover && serie[hover.i] && <line x1={cx(hover.i)} y1={y0} x2={cx(hover.i)} y2={bottomY} stroke={col} strokeOpacity="0.5" strokeWidth="1" vectorEffect="non-scaling-stroke" />}
        {/* rótulos de data */}
        {serie.map((s, i) => { if (i === 0 || (i % everyN !== 0 && i !== serie.length - 1)) return null; return <text key={"x" + i} x={cx(i)} y={H - 8} textAnchor="middle" fontSize="8" fill="var(--fg-3)" fontFamily="var(--font-mono)">{s.label}</text>; })}
      </svg>
      {hover && serie[hover.i] && (() => { const flip = hover.x > hover.w * 0.6; const s = serie[hover.i]; return (
        <div style={{ position: "absolute", left: hover.x, top: Math.max(0, hover.y - 12), transform: `translateY(-100%) translateX(${flip ? "calc(-100% - 14px)" : "14px"})`, pointerEvents: "none", zIndex: 5, background: "var(--surface-2, #10191f)", border: "1px solid var(--border)", borderRadius: 10, padding: "8px 12px", boxShadow: "0 8px 24px rgba(0,0,0,0.45)", fontFamily: "var(--font-mono)", whiteSpace: "nowrap" }}>
          <div style={{ fontSize: 11, color: "var(--fg-3)", marginBottom: 4 }}>{s.full}</div>
          <div style={{ fontSize: 12, color: "var(--fg-2)" }}>Saldo projetado</div>
          <div style={{ fontSize: 17, fontWeight: 700, color: s.saldo >= 0 ? "var(--green)" : "var(--red)" }}>{f(s.saldo)}</div>
        </div>
      ); })()}
    </div>
  );
};

const PageComparativo = ({ filters, statusFilter, drilldown, setDrilldown, year, month }) => {
  const B = useMemo(() => window.getBit(statusFilter, drilldown, year, month, filters), [statusFilter, drilldown, year, month, filters]);
  const refYear = window.REF_YEAR || new Date().getFullYear();
  const fmt = (B && B.fmt) || (n => `R$ ${n.toFixed(2)}`);
  const fmtPct = (B && B.fmtPct) || (n => `${n.toFixed(1)}%`);

  // Estado dos 2 periodos comparados — cada um eh { y, kind: 'mes'|'trim'|'ano', val }
  const [p1, setP1] = useState({ y: refYear, kind: "trim", val: 1 });
  const [p2, setP2] = useState({ y: refYear, kind: "trim", val: 2 });
  const [expanded, setExpanded] = useState({ Receita: true, Despesa: true });
  const [expandedCats, setExpandedCats] = useState(() => new Set());
  const toggleCat = (key) => {
    setExpandedCats(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key); else next.add(key);
      return next;
    });
  };

  // Calcula bounds de mes do periodo
  const periodBounds = (p) => {
    if (p.kind === "ano") return { y: p.y, mIni: 1, mFim: 12 };
    if (p.kind === "trim") {
      const tStart = (p.val - 1) * 3 + 1;
      return { y: p.y, mIni: tStart, mFim: tStart + 2 };
    }
    return { y: p.y, mIni: p.val, mFim: p.val }; // mes
  };
  const periodLabel = (p) => {
    if (p.kind === "ano") return `${p.y} · Ano completo`;
    if (p.kind === "trim") {
      const lbl = ["jan-mar", "abr-jun", "jul-set", "out-dez"][p.val - 1];
      return `${p.y} · Trim ${p.val} (${lbl})`;
    }
    const mn = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"][p.val - 1];
    return `${mn}/${p.y}`;
  };

  // Filtra ALL_TX por periodo + statusFilter; agrega receitas/despesas por categoria + cliente/fornecedor
  const aggregate = (p) => {
    const allTx = window.ALL_TX || [];
    const filterTx = window.filterTx;
    const sf = statusFilter || window.BIT_FILTER || "realizado";
    const txFiltered = filterTx ? filterTx(allTx, sf, null, filters) : allTx;
    const { y, mIni, mFim } = periodBounds(p);
    const mIniStr = `${y}-${String(mIni).padStart(2, "0")}`;
    const mFimStr = `${y}-${String(mFim).padStart(2, "0")}`;
    let totalRec = 0, totalDesp = 0;
    const recCat = new Map(), despCat = new Map();
    // Sub-agrupamento: Map<"cat", Map<"cliente/fornecedor", valor>>
    const recSub = new Map(), despSub = new Map();
    for (const row of txFiltered) {
      const [kind, mes, , categoria, cliente, valor, , fornecedor] = row;
      if (!mes || mes < mIniStr || mes > mFimStr) continue;
      if (kind === "r") {
        totalRec += valor;
        recCat.set(categoria, (recCat.get(categoria) || 0) + valor);
        const sub = recSub.get(categoria) || new Map();
        const nome = cliente || "Sem identificação";
        sub.set(nome, (sub.get(nome) || 0) + valor);
        recSub.set(categoria, sub);
      } else {
        totalDesp += valor;
        despCat.set(categoria, (despCat.get(categoria) || 0) + valor);
        const sub = despSub.get(categoria) || new Map();
        const nome = fornecedor || "Sem identificação";
        sub.set(nome, (sub.get(nome) || 0) + valor);
        despSub.set(categoria, sub);
      }
    }
    return { totalRec, totalDesp, liq: totalRec - totalDesp, recCat, despCat, recSub, despSub };
  };

  const a1 = useMemo(() => aggregate(p1), [p1, statusFilter, filters]);
  const a2 = useMemo(() => aggregate(p2), [p2, statusFilter, filters]);

  const safePct = (a, b) => b !== 0 ? (a / b) * 100 : (a !== 0 ? 100 : 0);
  const diffReceita = a2.totalRec - a1.totalRec;
  const diffReceitaPct = safePct(diffReceita, a1.totalRec);
  const diffDespesa = a2.totalDesp - a1.totalDesp;
  const diffDespesaPct = safePct(diffDespesa, a1.totalDesp);
  const diffLiq = a2.liq - a1.liq;
  const diffLiqPct = safePct(diffLiq, Math.abs(a1.liq) || 1);

  // Top categorias unidas (union de p1 + p2)
  const allRecCats = new Set([...a1.recCat.keys(), ...a2.recCat.keys()]);
  const allDespCats = new Set([...a1.despCat.keys(), ...a2.despCat.keys()]);

  // Selector compacto: ano + tipo + valor
  const PeriodPicker = ({ value, onChange, label }) => {
    const yearsAvail = window.AVAILABLE_YEARS || [refYear];
    const monthOpts = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    return (
      <div style={{ marginBottom: 12 }}>
        <div className="filter-mini-label">{label}</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 6 }}>
          <select className="filter-select" value={value.y} onChange={e => onChange({ ...value, y: Number(e.target.value) })}>
            {yearsAvail.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
          <select className="filter-select" value={value.kind} onChange={e => onChange({ ...value, kind: e.target.value, val: e.target.value === "mes" ? 1 : (e.target.value === "trim" ? 1 : 1) })}>
            <option value="mes">Mês</option>
            <option value="trim">Trimestre</option>
            <option value="ano">Ano completo</option>
          </select>
        </div>
        {value.kind === "mes" && (
          <select className="filter-select" style={{ width: "100%" }} value={value.val} onChange={e => onChange({ ...value, val: Number(e.target.value) })}>
            {monthOpts.map((m, i) => <option key={i + 1} value={i + 1}>{m}</option>)}
          </select>
        )}
        {value.kind === "trim" && (
          <select className="filter-select" style={{ width: "100%" }} value={value.val} onChange={e => onChange({ ...value, val: Number(e.target.value) })}>
            <option value={1}>Trim 1 (jan-mar)</option>
            <option value={2}>Trim 2 (abr-jun)</option>
            <option value={3}>Trim 3 (jul-set)</option>
            <option value={4}>Trim 4 (out-dez)</option>
          </select>
        )}
        <div style={{ marginTop: 4, color: "var(--mute)", fontSize: 11, letterSpacing: "0.04em" }}>{periodLabel(value)}</div>
      </div>
    );
  };

  return (
    <div className="page">
      <div className="page-title">
        <div>
          <h1>Comparativo</h1>
          <div className="status-line">{periodLabel(p1)} vs {periodLabel(p2)}</div>
        </div>
        <div className="actions">
        </div>
      </div>

      <DrilldownBadge drilldown={drilldown} onClear={() => setDrilldown && setDrilldown(null)} />

      <div className="row row-3-9">
        <div style={{ display: "grid", gap: 16 }}>
          <div className="card">
            <h2 className="card-title">Filtragem de datas</h2>
            <PeriodPicker value={p1} onChange={setP1} label="Data comparativa 1" />
            <PeriodPicker value={p2} onChange={setP2} label="Data comparativa 2" />
          </div>

          <div className="card">
            <h2 className="card-title">Indicadores principais</h2>
            <div style={{ display: "grid", gap: 12 }}>
              <div className={`indicator-card ${diffReceita >= 0 ? "" : "red"}`}>
                <div className="kpi-label">Diferença na receita</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: diffReceita >= 0 ? "var(--green)" : "var(--red)", letterSpacing: "-0.02em" }}>{fmt(diffReceita)}</div>
                <div className={`kpi-delta ${diffReceita >= 0 ? "up" : "down"}`}>{fmtPct(diffReceitaPct)}</div>
              </div>
              <div className={`indicator-card ${diffDespesa <= 0 ? "" : "red"}`}>
                <div className="kpi-label">Diferença nas despesas</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: diffDespesa <= 0 ? "var(--green)" : "var(--red)", letterSpacing: "-0.02em" }}>{fmt(diffDespesa)}</div>
                <div className={`kpi-delta ${diffDespesa <= 0 ? "up" : "down"}`}>{fmtPct(diffDespesaPct)}</div>
              </div>
              <div className={`indicator-card ${diffLiq >= 0 ? "" : "red"}`}>
                <div className="kpi-label">Diferença do valor líquido</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: diffLiq >= 0 ? "var(--green)" : "var(--red)", letterSpacing: "-0.02em" }}>{fmt(diffLiq)}</div>
                <div className={`kpi-delta ${diffLiq >= 0 ? "up" : "down"}`}>{fmtPct(diffLiqPct)}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-title-row">
            <h2 className="card-title">Análise comparativa entre períodos</h2>
          </div>
          <div className="t-scroll" style={{ maxHeight: 540 }}>
            <table className="t">
              <thead>
                <tr>
                  <th>Receita / Despesa</th>
                  <th className="num">{periodLabel(p1)}</th>
                  <th className="num">{periodLabel(p2)}</th>
                  <th className="num">Δ Comparativo</th>
                  <th className="num">%</th>
                </tr>
              </thead>
              <tbody>
                {/* Header Receita */}
                <tr className="section">
                  <td>
                    <button onClick={() => setExpanded(s => ({ ...s, Receita: !s.Receita }))} style={{ background: "transparent", border: 0, color: "inherit", padding: 0, fontWeight: 700, fontFamily: "inherit", fontSize: "inherit", display: "inline-flex", alignItems: "center", gap: 6 }}>
                      <span className="chev">{expanded.Receita ? "−" : "+"}</span>Receita
                    </button>
                  </td>
                  <td className="num bold green">{fmt(a1.totalRec)}</td>
                  <td className="num bold green">{fmt(a2.totalRec)}</td>
                  <td className={`num bold ${diffReceita >= 0 ? "green" : "red"}`}>{fmt(diffReceita)}</td>
                  <td className={`num bold ${diffReceita >= 0 ? "green" : "red"}`}>{fmtPct(diffReceitaPct)}</td>
                </tr>
                {expanded.Receita && [...allRecCats].sort((x, y) => (a2.recCat.get(y) || 0) + (a1.recCat.get(y) || 0) - ((a2.recCat.get(x) || 0) + (a1.recCat.get(x) || 0))).map((cat, i) => {
                  const v1 = a1.recCat.get(cat) || 0;
                  const v2 = a2.recCat.get(cat) || 0;
                  const diff = v2 - v1;
                  const pct = safePct(diff, v1);
                  const catKey = `r::${cat}`;
                  const isCatExp = expandedCats.has(catKey);
                  // Union de clientes nos 2 periodos
                  const sub1 = a1.recSub.get(cat) || new Map();
                  const sub2 = a2.recSub.get(cat) || new Map();
                  const allClients = [...new Set([...sub1.keys(), ...sub2.keys()])].sort((a, b) => ((sub2.get(b) || 0) + (sub1.get(b) || 0)) - ((sub2.get(a) || 0) + (sub1.get(a) || 0)));
                  return (
                    <React.Fragment key={`r${i}`}>
                      <tr className={`fluxo-cat-row ${isCatExp ? "expanded" : ""}`} onClick={() => toggleCat(catKey)} style={{ cursor: "pointer" }} title="Clique para ver clientes">
                        <td style={{ paddingLeft: 24 }}><span className={`fluxo-chev ${isCatExp ? "open" : ""}`}>▸</span>{cat}</td>
                        <td className="num green">{v1 !== 0 ? fmt(v1) : "—"}</td>
                        <td className="num green">{v2 !== 0 ? fmt(v2) : "—"}</td>
                        <td className={`num ${diff >= 0 ? "green" : "red"}`}>{fmt(diff)}</td>
                        <td className={`num ${diff >= 0 ? "green" : "red"}`}>{fmtPct(pct)}</td>
                      </tr>
                      {isCatExp && allClients.slice(0, 15).map((cli, j) => {
                        const sv1 = sub1.get(cli) || 0;
                        const sv2 = sub2.get(cli) || 0;
                        const sd = sv2 - sv1;
                        const sp = safePct(sd, sv1);
                        return (
                          <tr key={`r${i}-c${j}`} className="fluxo-forn-row">
                            <td className="fluxo-indent-1" style={{ paddingLeft: 44 }}>{cli}</td>
                            <td className="num green">{sv1 !== 0 ? fmt(sv1) : "—"}</td>
                            <td className="num green">{sv2 !== 0 ? fmt(sv2) : "—"}</td>
                            <td className={`num ${sd >= 0 ? "green" : "red"}`}>{fmt(sd)}</td>
                            <td className={`num ${sd >= 0 ? "green" : "red"}`}>{fmtPct(sp)}</td>
                          </tr>
                        );
                      })}
                    </React.Fragment>
                  );
                })}
                {/* Header Despesa */}
                <tr className="section">
                  <td>
                    <button onClick={() => setExpanded(s => ({ ...s, Despesa: !s.Despesa }))} style={{ background: "transparent", border: 0, color: "inherit", padding: 0, fontWeight: 700, fontFamily: "inherit", fontSize: "inherit", display: "inline-flex", alignItems: "center", gap: 6 }}>
                      <span className="chev">{expanded.Despesa ? "−" : "+"}</span>Despesa
                    </button>
                  </td>
                  <td className="num bold red">{fmt(a1.totalDesp)}</td>
                  <td className="num bold red">{fmt(a2.totalDesp)}</td>
                  <td className={`num bold ${diffDespesa <= 0 ? "green" : "red"}`}>{fmt(diffDespesa)}</td>
                  <td className={`num bold ${diffDespesa <= 0 ? "green" : "red"}`}>{fmtPct(diffDespesaPct)}</td>
                </tr>
                {expanded.Despesa && [...allDespCats].sort((x, y) => (a2.despCat.get(y) || 0) + (a1.despCat.get(y) || 0) - ((a2.despCat.get(x) || 0) + (a1.despCat.get(x) || 0))).map((cat, i) => {
                  const v1 = a1.despCat.get(cat) || 0;
                  const v2 = a2.despCat.get(cat) || 0;
                  const diff = v2 - v1;
                  const pct = safePct(diff, v1);
                  const catKey = `d::${cat}`;
                  const isCatExp = expandedCats.has(catKey);
                  const sub1 = a1.despSub.get(cat) || new Map();
                  const sub2 = a2.despSub.get(cat) || new Map();
                  const allForns = [...new Set([...sub1.keys(), ...sub2.keys()])].sort((a, b) => ((sub2.get(b) || 0) + (sub1.get(b) || 0)) - ((sub2.get(a) || 0) + (sub1.get(a) || 0)));
                  return (
                    <React.Fragment key={`d${i}`}>
                      <tr className={`fluxo-cat-row ${isCatExp ? "expanded" : ""}`} onClick={() => toggleCat(catKey)} style={{ cursor: "pointer" }} title="Clique para ver fornecedores">
                        <td style={{ paddingLeft: 24 }}><span className={`fluxo-chev ${isCatExp ? "open" : ""}`}>▸</span>{cat}</td>
                        <td className="num red">{v1 !== 0 ? fmt(v1) : "—"}</td>
                        <td className="num red">{v2 !== 0 ? fmt(v2) : "—"}</td>
                        <td className={`num ${diff <= 0 ? "green" : "red"}`}>{fmt(diff)}</td>
                        <td className={`num ${diff <= 0 ? "green" : "red"}`}>{fmtPct(pct)}</td>
                      </tr>
                      {isCatExp && allForns.slice(0, 15).map((forn, j) => {
                        const sv1 = sub1.get(forn) || 0;
                        const sv2 = sub2.get(forn) || 0;
                        const sd = sv2 - sv1;
                        const sp = safePct(sd, sv1);
                        return (
                          <tr key={`d${i}-f${j}`} className="fluxo-forn-row">
                            <td className="fluxo-indent-1" style={{ paddingLeft: 44 }}>{forn}</td>
                            <td className="num red">{sv1 !== 0 ? fmt(sv1) : "—"}</td>
                            <td className="num red">{sv2 !== 0 ? fmt(sv2) : "—"}</td>
                            <td className={`num ${sd <= 0 ? "green" : "red"}`}>{fmt(sd)}</td>
                            <td className={`num ${sd <= 0 ? "green" : "red"}`}>{fmtPct(sp)}</td>
                          </tr>
                        );
                      })}
                    </React.Fragment>
                  );
                })}
                <tr className="total">
                  <td>Total líquido</td>
                  <td className="num">{fmt(a1.liq)}</td>
                  <td className="num">{fmt(a2.liq)}</td>
                  <td className={`num ${diffLiq >= 0 ? "green" : "red"}`}>{fmt(diffLiq)}</td>
                  <td className={`num ${diffLiq >= 0 ? "green" : "red"}`}>{fmtPct(diffLiqPct)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

// ===== PageRelatorio =====
// Carrega report.json (gerado offline por generate-report.cjs) e renderiza
// um relatorio executivo imprimivel (Ctrl+P -> Save as PDF).
const PageRelatorio = ({ year, month, statusFilter, filters }) => {
  const refYear = window.REF_YEAR || new Date().getFullYear();
  // Hooks de dados — DEVEM ficar antes de qualquer early return pra não violar
  // a ordem dos hooks. Os useMemo dependem de periodYear/periodMonth declarados abaixo
  // mas useMemo aceita refs do escopo via closure.
  // Estado do periodo a renderizar (defaults: ano corrente YTD)
  // Período do relatório = filtro do topo (ano + mês). Empresa = filters.conta (1 arquivo por empresa).
  const periodYear = year || refYear;
  const periodMonth = month || 0;
  const [report, setReport] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  // Cards reativos ao período (year + month) — antes usavam window.BIT global YTD
  // Mantidos no topo (regra dos hooks) — não chamar dentro de early returns
  const B = useMemo(
    () => window.getBit('realizado', null, periodYear, periodMonth, filters),
    [periodYear, periodMonth, filters]
  );
  const Bprev = useMemo(
    () => window.getBit('a_pagar_receber', null, periodYear, periodMonth, filters),
    [periodYear, periodMonth, filters]
  );
  // Receita operacional (exclui financiamento/investimento como emprestimo) — usada no KPI
  // "Receita realizada" pra ficar consistente com a tela Receita e a Visao Geral.
  // O total bruto de caixa vai no card "Receita bruta/total".
  const Bop = useMemo(
    () => window.getBit('realizado', null, periodYear, periodMonth, filters, null, 'operacional'),
    [periodYear, periodMonth, filters]
  );

  // resolve o nome do arquivo conforme periodo + conta
  // "Todas contas" é o default (sem filtro) — trata como vazio pra cair no report.json base
  const contaSlug = (filters && filters.conta && filters.conta !== "Todas contas") ? filters.conta : '';
  const contaSuffix = contaSlug ? `-${contaSlug}` : '';
  const reportFileName = (y, m) => {
    if (m && m > 0) return `report-${y}-${String(m).padStart(2,'0')}${contaSuffix}.json`;
    if (y === refYear && !contaSlug) return 'report.json';
    return `report-${y}${contaSuffix}.json`;
  };

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setGenerating(false);
    setError(null);
    setReport(null);
    // período vem do filtro do topo (year/month) — sem estado próprio a persistir
    const file = reportFileName(periodYear, periodMonth);
    const fileKey = file.replace('.json', '');

    // 1) tenta window.REPORTS (embutido em reports.js — funciona offline/file://)
    const inlineData = window.REPORTS && window.REPORTS[fileKey];
    if (inlineData) {
      setReport(inlineData);
      setLoading(false);
      return;
    }

    // 2) tenta fetch do JSON (funciona em servidor HTTP)
    fetch(file, { cache: 'no-store' })
      .then(r => {
        if (r.ok) return r.json();
        if (r.status === 404) return null;
        throw new Error(`HTTP ${r.status} (arquivo ${file})`);
      })
      .then(data => {
        if (cancelled) return;
        if (data) {
          setReport(data);
          setLoading(false);
          return null;
        }
        // 3) Fallback: chama a API publica de geracao on-demand
        const apiUrl = window.BI_REPORT_API;
        if (!apiUrl) {
          throw new Error('Relatorio nao encontrado para este periodo. Gere com: node generate-report.cjs --force --year=' + periodYear + (periodMonth > 0 ? ' --month=' + periodMonth : ''));
        }
        setLoading(false);
        setGenerating(true);
        return fetch(`${apiUrl}/generate-report`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            year: periodYear,
            month: periodMonth > 0 ? periodMonth : null,
          }),
        }).then(async (resp) => {
          if (cancelled) return;
          if (resp.status === 429) {
            const retry = resp.headers.get('Retry-After') || '3600';
            throw new Error(`Limite de geracao atingido. Tente novamente em ~${Math.ceil(Number(retry) / 60)} minutos.`);
          }
          if (!resp.ok) {
            const t = await resp.text().catch(() => '');
            throw new Error(`Falha ao gerar (HTTP ${resp.status}). Verifique conexao com Anthropic. ${t.slice(0,200)}`);
          }
          const generated = await resp.json();
          if (cancelled) return;
          setReport(generated);
          setGenerating(false);
        });
      })
      .catch(e => {
        if (cancelled) return;
        setError(e.message);
        setLoading(false);
        setGenerating(false);
      });
    return () => { cancelled = true; };
  }, [periodYear, periodMonth, contaSuffix]);

  const MONTH_OPTIONS = [
    { v: 0, label: "Ano completo" },
    { v: 1, label: "Janeiro" }, { v: 2, label: "Fevereiro" }, { v: 3, label: "Março" },
    { v: 4, label: "Abril" }, { v: 5, label: "Maio" }, { v: 6, label: "Junho" },
    { v: 7, label: "Julho" }, { v: 8, label: "Agosto" }, { v: 9, label: "Setembro" },
    { v: 10, label: "Outubro" }, { v: 11, label: "Novembro" }, { v: 12, label: "Dezembro" },
  ];
  const availableYears = [2026];

  // O período é controlado pelo filtro do topo (ano + mês). Aqui fica só um indicador read-only.
  const PeriodToolbar = (
    <div className="report-period-toolbar" style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <span style={{ fontSize: 12, color: 'var(--mute)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Período:</span>
      <b style={{ fontSize: 13, color: 'var(--text)' }}>{(periodMonth > 0 ? MONTH_OPTIONS[periodMonth].label : 'Ano completo') + ' · ' + periodYear}</b>
    </div>
  );

  if (loading) {
    return (
      <div className="page">
        <div className="page-title">
          <div><h1>Relatório IA</h1><div className="status-line">Carregando…</div></div>
          <div className="actions">{PeriodToolbar}</div>
        </div>
      </div>
    );
  }

  if (generating) {
    return (
      <div className="page">
        <div className="page-title">
          <div>
            <h1>Relatório IA</h1>
            <div className="status-line">Gerando relatório com IA…</div>
          </div>
          <div className="actions">{PeriodToolbar}</div>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>⚙️</div>
          <h2 className="card-title" style={{ textAlign: 'center' }}>Gerando análise…</h2>
          <p style={{ color: 'var(--fg-2)', lineHeight: 1.6, marginTop: 12 }}>
            Estamos disparando 7 chamadas à IA da Anthropic em paralelo para construir o relatório executivo deste período.
          </p>
          <p style={{ color: 'var(--fg-3)', fontSize: 13, marginTop: 8 }}>
            Geralmente leva ~30 segundos. Não feche esta página.
          </p>
          <div style={{ marginTop: 24, display: 'flex', gap: 6, justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--cyan)', animation: 'pulse 1.4s ease-in-out infinite' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--cyan)', animation: 'pulse 1.4s ease-in-out 0.2s infinite' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--cyan)', animation: 'pulse 1.4s ease-in-out 0.4s infinite' }} />
          </div>
        </div>
      </div>
    );
  }

  if (error || !report) {
    const monthLabel = periodMonth > 0 ? MONTH_OPTIONS[periodMonth].label + ' de ' : '';
    return (
      <div className="page">
        <div className="page-title">
          <div>
            <h1>Relatório IA</h1>
            <div className="status-line">Relatório de {monthLabel}{periodYear} ainda não disponível</div>
          </div>
          <div className="actions">{PeriodToolbar}</div>
        </div>
        <div className="card" style={{ textAlign: "center", padding: 40 }}>
          <div style={{ fontSize: 42, marginBottom: 12 }}>📄</div>
          <h2 className="card-title" style={{ textAlign: "center" }}>Relatório em preparação</h2>
          <p style={{ color: "var(--fg-2)", lineHeight: 1.6, marginTop: 12, maxWidth: 540, marginLeft: "auto", marginRight: "auto" }}>
            O relatório executivo de <b>{monthLabel}{periodYear}</b> ainda não foi publicado. Selecione outro período no seletor acima — os períodos já disponíveis abrem na hora.
          </p>
        </div>
      </div>
    );
  }

  const fmtDate = (iso) => {
    if (!iso) return '';
    const d = new Date(iso);
    if (isNaN(d.getTime())) return iso;
    const pad = (n) => String(n).padStart(2, '0');
    return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  };

  const k = B.KPIS || B;
  const recebido = k.TOTAL_RECEITA || 0;
  const recebidoOp = (Bop.KPIS && Bop.KPIS.TOTAL_RECEITA != null) ? Bop.KPIS.TOTAL_RECEITA : recebido;
  // Reconciliação bruta -> operacional: categorias de receita classificadas como não
  // operacionais (empréstimo, venda de imobilizado, estornos, rendimentos, etc).
  const _opCatMap = {};
  (Bop.RECEITA_CATEGORIAS || []).forEach((c) => { _opCatMap[c.name] = c.value; });
  const receitaNaoOp = (B.RECEITA_CATEGORIAS || [])
    .map((c) => ({ name: c.name, value: c.value - (_opCatMap[c.name] || 0) }))
    .filter((c) => Math.abs(c.value) > 0.01)
    .sort((a, b) => b.value - a.value);
  const pago = k.TOTAL_DESPESA || 0;
  const liquido = k.VALOR_LIQUIDO != null ? k.VALOR_LIQUIDO : (recebido - pago);
  const margem = k.MARGEM_LIQUIDA != null ? k.MARGEM_LIQUIDA : (recebido > 0 ? (liquido / recebido) * 100 : 0);
  const aReceber = (Bprev.KPIS && Bprev.KPIS.TOTAL_RECEITA) || 0;
  const aPagar = (Bprev.KPIS && Bprev.KPIS.TOTAL_DESPESA) || 0;

  const sec = (id) => (report.secoes && report.secoes[id]) || { title: id, analysis: '' };

  const renderAnalysis = (text) => {
    if (!text) return <p className="report-analysis muted">(análise indisponível — verifique se a chamada à API foi bem-sucedida)</p>;
    return text.split(/\n\s*\n/).map((p, i) => (
      <p key={i} className="report-analysis">{p.trim()}</p>
    ));
  };

  return (
    <div className="page">
      {/* Toolbar — escondida no print */}
      <div className="report-toolbar no-print">
        <div>
          <h1 style={{ margin: 0 }}>Relatório IA</h1>
          <div className="status-line">Gerado em {fmtDate(report.generated_at)} · {report.periodo}</div>
        </div>
        <div className="actions" style={{ gap: 12, alignItems: 'center' }}>
          {PeriodToolbar}
          <button className="btn-primary" onClick={() => window.print()}>
            <Icon name="download" /> Exportar PDF
          </button>
        </div>
      </div>

      {/* Modal de ajuda */}
      {showHelp && (
        <div className="drawer-overlay no-print" onClick={() => setShowHelp(false)}>
          <div className="card" style={{ maxWidth: 520, margin: "auto", padding: 24 }} onClick={e => e.stopPropagation()}>
            <h2 className="card-title">Como regenerar o relatório</h2>
            <p style={{ color: "var(--fg-2)", lineHeight: 1.6, marginTop: 8 }}>
              O relatório é gerado offline por um script Node que chama a API da Anthropic.
              Não pode ser disparado pelo browser (a chave da API ficaria exposta).
            </p>
            <p style={{ color: "var(--fg-2)", lineHeight: 1.6, marginTop: 12 }}>No terminal, dentro da pasta do projeto:</p>
            <pre style={{ background: "var(--surface-2)", padding: 12, borderRadius: 8, marginTop: 8, fontSize: 13, color: "var(--cyan)" }}>
node generate-report.cjs --force
            </pre>
            <p style={{ color: "var(--fg-3)", fontSize: 12, marginTop: 12 }}>
              Depois recarregue esta página. Sem <code>--force</code>, o script pula se o relatório foi gerado há menos de 1h.
            </p>
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 16 }}>
              <button className="btn-primary" onClick={() => setShowHelp(false)}>Entendi</button>
            </div>
          </div>
        </div>
      )}

      {/* Relatorio imprimivel */}
      <article className="report">
        <header className="report-cover">
          <img src="assets/bgp-logo-white.png" alt="BGP" className="report-logo" />
          <h1 className="report-title">BGP GO BI — Relatório Executivo</h1>
          <p className="report-subtitle">{report.empresa}</p>
          <p className="report-meta">Período: {report.periodo} — Realizado</p>
          <p className="report-meta">Gerado em {fmtDate(report.generated_at)}</p>
        </header>

        <section className="report-section">
          <h2>1. Visão Geral</h2>
          <div className="report-kpis">
            <div className="report-kpi"><span className="lbl">Receita realizada</span><span className="val green">{B.fmt(recebidoOp)}</span></div>
            <div className="report-kpi"><span className="lbl">Receita bruta/total</span><span className="val green">{B.fmt(recebido)}</span></div>
            <div className="report-kpi"><span className="lbl">Despesa realizada</span><span className="val red">{B.fmt(pago)}</span></div>
            <div className="report-kpi"><span className="lbl">Resultado líquido</span><span className="val" style={{ color: liquido >= 0 ? "var(--green)" : "var(--red)" }}>{B.fmt(liquido)}</span></div>
            <div className="report-kpi"><span className="lbl">Margem líquida</span><span className="val">{B.fmtPct ? B.fmtPct(margem) : margem.toFixed(2) + "%"}</span></div>
          </div>
          {renderAnalysis(sec('visao_geral').analysis)}
        </section>

        <section className="report-section">
          <h2>2. Receita</h2>
          <div className="report-kpis">
            <div className="report-kpi"><span className="lbl">Receita recebida (operacional)</span><span className="val green">{B.fmt(recebidoOp)}</span></div>
            <div className="report-kpi"><span className="lbl">Receita bruta/total</span><span className="val green">{B.fmt(recebido)}</span></div>
            <div className="report-kpi"><span className="lbl">Receita a receber</span><span className="val">{B.fmt(aReceber)}</span></div>
          </div>
          <h3 className="report-sub">Reconciliação — receita bruta/total → operacional</h3>
          <ul className="report-list">
            <li><span>Receita bruta/total</span><b>{B.fmt(recebido)}</b></li>
            {receitaNaoOp.map((c, i) => (
              <li key={i}><span style={{ color: "var(--fg-2)" }}>(−) {c.name}</span><b style={{ color: "var(--fg-2)" }}>{B.fmt(c.value)}</b></li>
            ))}
            <li style={{ fontWeight: 700, borderTop: "1px solid var(--border)", marginTop: 6, paddingTop: 8 }}><span>= Receita operacional</span><b className="green">{B.fmt(recebidoOp)}</b></li>
          </ul>
          <h3 className="report-sub">Top 5 categorias</h3>
          <ul className="report-list">
            {(B.RECEITA_CATEGORIAS || []).slice(0, 5).map((c, i) => (
              <li key={i}><span>{c.name}</span><b>{B.fmt(c.value)}</b></li>
            ))}
          </ul>
          {renderAnalysis(sec('receita').analysis)}
        </section>

        <section className="report-section">
          <h2>3. Despesa</h2>
          <div className="report-kpis">
            <div className="report-kpi"><span className="lbl">Despesa paga</span><span className="val red">{B.fmt(pago)}</span></div>
            <div className="report-kpi"><span className="lbl">Despesa a pagar</span><span className="val">{B.fmt(aPagar)}</span></div>
          </div>
          <h3 className="report-sub">Top 5 categorias</h3>
          <ul className="report-list">
            {(B.DESPESA_CATEGORIAS || []).slice(0, 5).map((c, i) => (
              <li key={i}><span>{c.name}</span><b>{B.fmt(c.value)}</b></li>
            ))}
          </ul>
          {renderAnalysis(sec('despesa').analysis)}
        </section>

        <section className="report-section">
          <h2>4. Fluxo de Caixa</h2>
          <div className="report-kpis">
            <div className="report-kpi"><span className="lbl">Receita total</span><span className="val green">{B.fmt(recebido)}</span></div>
            <div className="report-kpi"><span className="lbl">Despesa total</span><span className="val red">{B.fmt(pago)}</span></div>
            <div className="report-kpi"><span className="lbl">Líquido</span><span className="val" style={{ color: liquido >= 0 ? "var(--green)" : "var(--red)" }}>{B.fmt(liquido)}</span></div>
          </div>
          <h3 className="report-sub">Líquido mês a mês</h3>
          <ul className="report-list">
            {(B.MONTH_DATA || []).map((m, i) => {
              const v = m.receita - m.despesa;
              return <li key={i}><span style={{ textTransform: "capitalize" }}>{m.m}</span><b style={{ color: v >= 0 ? "var(--green)" : "var(--red)" }}>{B.fmt(v)}</b></li>;
            })}
          </ul>
          {renderAnalysis(sec('fluxo_caixa').analysis)}
        </section>

        <section className="report-section">
          <h2>5. Tesouraria</h2>
          <div className="report-kpis">
            <div className="report-kpi"><span className="lbl">Recebido</span><span className="val green">{B.fmt(recebido)}</span></div>
            <div className="report-kpi"><span className="lbl">A receber</span><span className="val">{B.fmt(aReceber)}</span></div>
            <div className="report-kpi"><span className="lbl">Pago</span><span className="val red">{B.fmt(pago)}</span></div>
            <div className="report-kpi"><span className="lbl">A pagar</span><span className="val">{B.fmt(aPagar)}</span></div>
          </div>
          {renderAnalysis(sec('tesouraria').analysis)}
        </section>

        <section className="report-section">
          <h2>6. Comparativo</h2>
          {renderAnalysis(sec('comparativo').analysis)}
        </section>

        <section className="report-section report-conclusion">
          <h2>Conclusão e Recomendações</h2>
          {renderAnalysis(sec('conclusao').analysis)}
        </section>

        <footer className="report-footer">
          BGP GO BI · {report.empresa} · {report.periodo} · Gerado em {fmtDate(report.generated_at)}
        </footer>
      </article>
    </div>
  );
};

Object.assign(window, { PageFluxo, PageTesouraria, PageComparativo, PageRelatorio });
