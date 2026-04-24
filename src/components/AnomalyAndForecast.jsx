export default function AnomalyAndForecast({ anomalyCards, budgetForecast }) {
  return (
    <div className="forecast-column">
      <div className="anomaly-grid">
        {anomalyCards.map((card) => (
          <div className={`anom-card ${card.className}`} key={card.title}>
            <div className="anom-icon">{card.icon}</div>
            <div className="anom-title">{card.title}</div>
            <div className="anom-desc">{card.desc}</div>
            <div className={`anom-val ${card.valueClass}`}>{card.value}</div>
          </div>
        ))}
      </div>

      <div className="anom-card">
        <div className="card-title forecast-title">Budget forecast</div>
        {budgetForecast.map((item) => (
          <div className="predict-bar-wrap" key={item.label}>
            <div className="predict-label">{item.label}</div>
            <div className="predict-track">
              <div className="predict-fill" style={{ width: item.width, background: item.color }} />
              {item.showToday && (
                <div className="predict-today-mark" style={{ left: '72%' }}>
                  <div className="predict-today-label">today</div>
                </div>
              )}
            </div>
            <div className={`predict-val ${item.valueClass || ''}`}>{item.current}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
