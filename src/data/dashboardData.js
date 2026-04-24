export const periods = ['7d', '30d', '90d', 'YTD']

export const navSections = [
  {
    title: 'Overview',
    items: [
      { icon: '◈', label: 'Dashboard' },
      { icon: '↕', label: 'Transactions' },
      { icon: '◎', label: 'Analytics' },
    ],
  },
  {
    title: 'Finance',
    items: [
      { icon: '⬡', label: 'Budgets' },
      { icon: '◷', label: 'Recurring' },
      { icon: '⬙', label: 'Investments' },
    ],
  },
  {
    title: 'AI Tools',
    items: [
      { icon: '✦', label: 'AI Insights' },
      { icon: '⌁', label: 'Predictions' },
      { icon: '◉', label: 'Reports' },
    ],
  },
  {
    title: 'Settings',
    items: [{ icon: '⚙', label: 'Preferences' }],
  },
]

export const kpis = [
  {
    label: 'Total Spent',
    value: '$4,281',
    valueClass: 'red-text',
    delta: '▲ 12.4% vs last month',
    deltaClass: 'delta-up',
    accent: 'var(--red)',
  },
  {
    label: 'Monthly Budget',
    value: '$5,000',
    delta: '85.6% used · 7 days left',
    deltaClass: '',
    accent: 'var(--amber)',
  },
  {
    label: 'Savings Rate',
    value: '14.4%',
    valueClass: 'green-text',
    delta: '▼ 3.1% vs last month',
    deltaClass: 'delta-down',
    accent: 'var(--green)',
  },
  {
    label: 'AI Anomalies',
    value: '3',
    valueClass: 'amber-text',
    delta: '✦ 2 require action',
    deltaClass: 'amber-text',
    accent: 'var(--accent)',
  },
]

export const trendLabels = Array.from({ length: 30 }, (_, i) => {
  const date = new Date(2026, 3, i + 1)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
})

export const trendActual = [80, 120, 95, 210, 130, 88, 145, 175, 90, 220, 310, 180, 95, 76, 265, 340, 155, 90, 210, 175, 340, 280, 190, 142, 380, 220, 175, 88, 248, 300]
export const trendAverage = Array(30).fill(143)

export const categoryData = [
  { name: 'Housing', amount: '$1,370', pct: '32%', value: 32, color: '#5b7fff', barWidth: '100%' },
  { name: 'Food & Dining', amount: '$1,027', pct: '24%', value: 24, color: '#3dcf8e', barWidth: '75%' },
  { name: 'Transport', amount: '$642', pct: '15%', value: 15, color: '#f5a623', barWidth: '47%' },
  { name: 'Subscriptions', amount: '$514', pct: '12%', value: 12, color: '#a78bfa', barWidth: '38%' },
  { name: 'Shopping', amount: '$428', pct: '10%', value: 10, color: '#f06464', barWidth: '31%' },
  { name: 'Other', amount: '$300', pct: '7%', value: 7, color: '#4a4f66', barWidth: '22%' },
]

export const aiInsights = [
  {
    tag: '⚠ Anomaly detected',
    tagClass: 'tag-warn',
    text: 'Your dining spend spiked 3.2× this week ($340 vs $107 avg). Appears to be a mix of work lunches and social dinners.',
    highlights: ['dining spend'],
  },
  {
    tag: '↓ Savings opportunity',
    tagClass: 'tag-save',
    text: 'You\'ve spent $189 on subscriptions this month — 6 services overlap in function. Cutting 2 saves ~$47/mo.',
    highlights: ['$189 on subscriptions'],
  },
  {
    tag: '↗ Spending forecast',
    tagClass: 'tag-trend',
    text: 'At current pace you\'ll exceed budget by $340. Reducing discretionary by 18% keeps you on track.',
    highlights: ['$340'],
  },
]

export const aiResponses = [
  'Based on your transaction history, March spending was 18% higher than February primarily due to a $420 electronics purchase and increased dining frequency (12 vs 7 restaurant visits). Your housing and transport stayed consistent.',
  'Looking at your last 90 days, you have 6 subscription services totaling $189/month. Spotify and Apple Music serve similar purposes — cutting one saves $10.99/mo. Hulu and Disney+ have overlapping content libraries too.',
  'Your dining spend shows a clear weekly pattern: you spend 3.4× more on Fridays and Saturdays. Setting a $60 weekend dining budget and meal-prepping Monday–Thursday could save ~$180/month.',
  'I detected 3 anomalies this month: a duplicate Netflix charge ($15.99), an unusually large Amazon order ($284 vs $71 avg), and your dining spike this week. The Netflix charge appears disputable.',
]

export const anomalyCards = [
  {
    icon: '⚑',
    title: 'Duplicate charge',
    desc: 'Netflix billed twice on Apr 14. Flagged for dispute.',
    value: '-$15.99',
    valueClass: 'red-text',
    className: 'alert',
  },
  {
    icon: '↗',
    title: 'Unusual spend',
    desc: 'Amazon orders 4× higher than your 90-day average.',
    value: '+$284',
    valueClass: 'amber-text',
    className: 'insight',
  },
]

export const budgetForecast = [
  { label: 'Housing', current: '$1,370/$1,300', width: '100%', color: '#5b7fff', valueClass: 'red-text' },
  { label: 'Food', current: '$1,027/$1,250', width: '82%', color: '#3dcf8e', showToday: true },
  { label: 'Transport', current: '$642/$1,000', width: '64%', color: '#f5a623' },
  { label: 'Shopping', current: '$428/$500', width: '86%', color: '#f06464', valueClass: 'amber-text' },
]

export const filters = ['All', '⚑ Flagged', 'Food', 'Shopping', 'Transport']

export const transactions = [
  {
    merchant: 'Shake Shack',
    meta: 'Today, 12:34 PM',
    icon: '🍔',
    iconBg: '#1a2040',
    badge: 'AI: dining spike',
    badgeClass: 'ai-flag',
    category: 'Food',
    categoryStyles: { background: 'rgba(61,207,142,.12)', color: '#6ee8aa' },
    date: 'Apr 23',
    amount: '-$28.40',
    amountClass: 'amount-neg',
  },
  {
    merchant: 'Netflix',
    meta: 'Apr 14, 8:02 AM',
    icon: '🎬',
    iconBg: '#201a20',
    badge: '⚑ Duplicate',
    badgeClass: 'anomaly-flag',
    category: 'Subscriptions',
    categoryStyles: { background: 'rgba(167,139,250,.12)', color: '#c4b0ff' },
    date: 'Apr 14',
    amount: '-$15.99',
    amountClass: 'amount-neg',
  },
  {
    merchant: 'Amazon',
    meta: 'Apr 13, 3:15 PM',
    icon: '🛍',
    iconBg: '#1a1a30',
    badge: 'AI: unusual',
    badgeClass: 'ai-flag',
    category: 'Shopping',
    categoryStyles: { background: 'rgba(240,100,100,.12)', color: '#f98989' },
    date: 'Apr 13',
    amount: '-$142.00',
    amountClass: 'amount-neg',
  },
  {
    merchant: 'Clipper Card',
    meta: 'Apr 12, 7:50 AM',
    icon: '🚌',
    iconBg: '#0a2010',
    category: 'Transport',
    categoryStyles: { background: 'rgba(245,166,35,.12)', color: '#fbbf58' },
    date: 'Apr 12',
    amount: '-$40.00',
    amountClass: 'amount-neg',
  },
  {
    merchant: 'Direct Deposit',
    meta: 'Apr 10, 9:00 AM',
    icon: '💼',
    iconBg: '#001a10',
    category: 'Income',
    categoryStyles: { background: 'rgba(61,207,142,.12)', color: '#6ee8aa' },
    date: 'Apr 10',
    amount: '+$5,000.00',
    amountClass: 'amount-pos',
  },
  {
    merchant: 'Blue Bottle Coffee',
    meta: 'Apr 9, 8:20 AM',
    icon: '☕',
    iconBg: '#1a2020',
    category: 'Food',
    categoryStyles: { background: 'rgba(61,207,142,.12)', color: '#6ee8aa' },
    date: 'Apr 9',
    amount: '-$7.50',
    amountClass: 'amount-neg',
  },
]
