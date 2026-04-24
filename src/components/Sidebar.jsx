export default function Sidebar({ navSections, activeNav, onNavChange }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-text">Financr</span>
        <span className="logo-badge">AI</span>
      </div>

      {navSections.map((section) => (
        <div key={section.title}>
          <div className="nav-section">{section.title}</div>
          {section.items.map((item) => (
            <button
              key={item.label}
              className={`nav-item ${activeNav === item.label ? 'active' : ''}`}
              onClick={() => onNavChange(item.label)}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      ))}

      <div className="sidebar-footer">
        <div className="user-row">
          <div className="avatar">AK</div>
          <div>
            <div className="user-name">Alex Kim</div>
            <div className="user-sub">Pro plan</div>
          </div>
        </div>
      </div>
    </aside>
  )
}
