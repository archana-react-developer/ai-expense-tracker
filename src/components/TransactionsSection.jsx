export default function TransactionsSection({ filters, activeFilter, onFilterChange, transactions }) {
  return (
    <div className="tx-section">
      <div className="card-header">
        <div>
          <div className="card-title">Recent transactions</div>
          <div className="card-subtitle">AI-categorized · anomalies flagged</div>
        </div>
        <div className="tx-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-pill ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => onFilterChange(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <table className="tx-table">
        <thead>
          <tr>
            <th>Merchant</th>
            <th>Category</th>
            <th>Date</th>
            <th className="text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={`${transaction.merchant}-${transaction.date}-${transaction.amount}`}>
              <td>
                <div className="merchant">
                  <div className="merch-icon" style={{ background: transaction.iconBg }}>{transaction.icon}</div>
                  <div>
                    <div className="merch-name">
                      {transaction.merchant}
                      {transaction.badge && <span className={transaction.badgeClass}> {transaction.badge}</span>}
                    </div>
                    <div className="merch-date">{transaction.meta}</div>
                  </div>
                </div>
              </td>
              <td>
                <span className="cat-pill" style={transaction.categoryStyles}>{transaction.category}</span>
              </td>
              <td className="muted-small">{transaction.date}</td>
              <td className={`${transaction.amountClass} text-right`}>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
