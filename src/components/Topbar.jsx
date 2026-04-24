export default function Topbar({ periods, activePeriod, onPeriodChange }) {
  return (
    <div className="topbar">
      <div>
        <div className="page-title">Dashboard</div>
      </div>
      <div className="topbar-right">
        <div className="period-selector">
          {periods.map((period) => (
            <button
              key={period}
              className={`period-btn ${activePeriod === period ? 'active' : ''}`}
              onClick={() => onPeriodChange(period)}
            >
              {period}
            </button>
          ))}
        </div>
        <button className="add-btn">+ Add Expense</button>
      </div>
    </div>
  )
}
