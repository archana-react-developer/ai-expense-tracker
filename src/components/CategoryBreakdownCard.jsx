import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip)

export default function CategoryBreakdownCard({ categories }) {
  const data = {
    labels: categories.map((category) => category.name),
    datasets: [
      {
        data: categories.map((category) => category.value),
        backgroundColor: categories.map((category) => category.color),
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1d2029',
        borderColor: 'rgba(255,255,255,.1)',
        borderWidth: 1,
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}%`,
        },
      },
    },
    cutout: '70%',
  }

  return (
    <div className="chart-card">
      <div className="card-header">
        <div>
          <div className="card-title">Spending by category</div>
          <div className="card-subtitle">This month's breakdown</div>
        </div>
      </div>
      <div className="category-layout">
        <div className="donut-wrap" aria-label="Donut chart of spending by category">
          <Doughnut data={data} options={options} />
        </div>
        <div className="cat-list">
          {categories.map((category) => (
            <div className="cat-row" key={category.name}>
              <div className="cat-color" style={{ background: category.color }} />
              <span className="cat-name">{category.name}</span>
              <div className="cat-bar-wrap">
                <div className="cat-bar" style={{ width: category.barWidth, background: category.color }} />
              </div>
              <span className="cat-amount">{category.amount}</span>
              <span className="cat-pct">{category.pct}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
