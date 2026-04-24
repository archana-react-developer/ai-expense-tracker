export default function KpiRow({ kpis }) {
  return (
    <div className="kpi-row">
      {kpis.map((kpi) => (
        <div className="kpi-card" key={kpi.label}>
          <div className="kpi-label">{kpi.label}</div>
          <div className={`kpi-value ${kpi.valueClass || ''}`}>{kpi.value}</div>
          <div className={`kpi-delta ${kpi.deltaClass || ''}`}>{kpi.delta}</div>
          <div className="kpi-accent-line" style={{ background: kpi.accent }} />
        </div>
      ))}
    </div>
  )
}
