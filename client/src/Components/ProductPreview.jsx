export default function ProductPreview() {
  return (
    <div
      className="product-preview"
      role="img"
      aria-label="NEXORA workspace dashboard preview"
    >
      <div className="preview-topbar">
        <div className="window-dots">
          <i />
          <i />
          <i />
        </div>
        <span className="preview-title">NEXORA / Overview</span>
        <span className="preview-avatar">AK</span>
      </div>
      <div className="preview-body">
        <aside className="preview-sidebar">
          <div className="mini-brand">
            <span className="brand-mark">N</span>
            <strong>nexora</strong>
          </div>
          <div className="sidebar-group">
            <span className="active-item">
              ▦ <b>Overview</b>
            </span>
            <span>□ Projects</span>
            <span>◫ Automations</span>
            <span>◌ Inbox</span>
          </div>
          <div className="sidebar-bottom">
            <span>⚙ Settings</span>
          </div>
        </aside>
        <div className="preview-main">
          <div className="preview-heading">
            <div>
              <small>MONDAY, OCTOBER 14</small>
              <h3>
                Good morning, Alex<span>.</span>
              </h3>
            </div>
            <button type="button">+ New project</button>
          </div>
          <div className="preview-stats">
            <div>
              <small>ACTIVE PROJECTS</small>
              <strong>12</strong>
              <em>+18% this month</em>
            </div>
            <div>
              <small>COMPLETED TASKS</small>
              <strong>248</strong>
              <em>+32 this week</em>
            </div>
            <div>
              <small>TIME SAVED</small>
              <strong>38h</strong>
              <em>via automation</em>
            </div>
          </div>
          <div className="chart-card">
            <div className="card-label">
              <b>Team momentum</b>
              <span>This week ▾</span>
            </div>
            <div className="chart">
              <div className="chart-grid" />
              <svg
                viewBox="0 0 420 120"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M0 94 C35 84, 51 89, 80 72 S124 73, 147 57 S190 75, 220 50 S262 55, 287 38 S327 55, 353 30 S393 34, 420 12" />
              </svg>
              <div className="chart-x">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
