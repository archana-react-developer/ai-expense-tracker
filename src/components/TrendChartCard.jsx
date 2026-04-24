import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler)

export default function TrendChartCard({ labels, actual, average }) {
  const data = {
    labels,
    datasets: [
      {
        label: 'Actual',
        data: actual,
        borderColor: '#5b7fff',
        backgroundColor: 'rgba(91,127,255,.08)',
        fill: true,
        tension: 0.4,
        borderWidth: 1.5,
        pointRadius: 0,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: '#5b7fff',
      },
      {
        label: 'Average',
        data: average,
        borderColor: '#f5a623',
        borderWidth: 1,
        borderDash: [4, 4],
        fill: false,
        pointRadius: 0,
        tension: 0,
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
        titleFont: { family: 'DM Sans', size: 11 },
        bodyFont: { family: 'DM Mono', size: 12 },
        callbacks: {
          label: (context) => ` $${context.raw}`,
        },
      },
    },
    scales: {
      x: {
        grid: { color: 'rgba(255,255,255,.04)' },
        ticks: {
          color: '#4a4f66',
          font: { family: 'DM Sans', size: 10 },
          maxTicksLimit: 8,
        },
      },
      y: {
        grid: { color: 'rgba(255,255,255,.04)' },
        ticks: {
          color: '#4a4f66',
          font: { family: 'DM Mono', size: 10 },
          callback: (value) => `$${value}`,
        },
      },
    },
  }

  return (
    <div className="chart-card">
      <div className="card-header">
        <div>
          <div className="card-title">Spending trend</div>
          <div className="card-subtitle">Daily spend vs 30-day rolling avg</div>
        </div>
        <div className="chart-legend">
          <span><span className="legend-dot" style={{ background: '#5b7fff' }} />Actual</span>
          <span><span className="legend-dot" style={{ background: '#f5a623', opacity: 0.7 }} />Average</span>
        </div>
      </div>
      <div className="chart-wrap" aria-label="Daily spending trend chart">
        <Line data={data} options={options} />
      </div>
    </div>
  )
}
