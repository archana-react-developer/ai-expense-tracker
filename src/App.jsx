import { useMemo, useState } from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import KpiRow from './components/KpiRow'
import TrendChartCard from './components/TrendChartCard'
import AiAdvisorPanel from './components/AiAdvisorPanel'
import CategoryBreakdownCard from './components/CategoryBreakdownCard'
import AnomalyAndForecast from './components/AnomalyAndForecast'
import TransactionsSection from './components/TransactionsSection'
import {
  aiInsights,
  aiResponses,
  anomalyCards,
  budgetForecast,
  categoryData,
  filters,
  kpis,
  navSections,
  periods,
  transactions,
  trendActual,
  trendAverage,
  trendLabels,
} from './data/dashboardData'

export default function App() {
  const [activeNav, setActiveNav] = useState('Dashboard')
  const [activePeriod, setActivePeriod] = useState('30d')
  const [activeFilter, setActiveFilter] = useState('All')

  const visibleTransactions = useMemo(() => {
    if (activeFilter === 'All') return transactions
    if (activeFilter === '⚑ Flagged') {
      return transactions.filter((item) => item.badge)
    }
    return transactions.filter((item) => item.category === activeFilter)
  }, [activeFilter])

  return (
    <div className="app-shell">
      <Sidebar navSections={navSections} activeNav={activeNav} onNavChange={setActiveNav} />

      <main className="main">
        <Topbar periods={periods} activePeriod={activePeriod} onPeriodChange={setActivePeriod} />

        <div className="content">
          <KpiRow kpis={kpis} />

          <div className="main-grid">
            <TrendChartCard labels={trendLabels} actual={trendActual} average={trendAverage} />
            <AiAdvisorPanel insights={aiInsights} responses={aiResponses} />
          </div>

          <div className="section-row">
            <CategoryBreakdownCard categories={categoryData} />
            <AnomalyAndForecast anomalyCards={anomalyCards} budgetForecast={budgetForecast} />
          </div>

          <TransactionsSection
            filters={filters}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            transactions={visibleTransactions}
          />
        </div>
      </main>
    </div>
  )
}
