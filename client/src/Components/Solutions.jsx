import Arrow from "./Arrow";

const solutions = [
  [
    "Startups",
    "Move from idea to shipped with a lightweight operating system built for momentum.",
    "↗",
  ],
  [
    "Marketing Teams",
    "Keep campaigns, approvals, and launch moments moving from one visible timeline.",
    "✦",
  ],
  [
    "Development Teams",
    "Connect planning to delivery and remove the handoffs that slow great work down.",
    "⌘",
  ],
  [
    "Agencies",
    "Balance every client, deadline, and deliverable without losing the bigger picture.",
    "◌",
  ],
];

export default function Solutions() {
  return (
    <section id="solutions" className="solutions-section section-pad">
      <div className="section-heading-row">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" /> BUILT FOR YOUR KIND OF WORK
          </div>
          <h2>
            More momentum,
            <br />
            <em>wherever you are.</em>
          </h2>
        </div>
        <a className="text-link" href="#stories">
          Explore all solutions <span>→</span>
        </a>
      </div>
      <div className="solution-grid">
        {solutions.map(([title, text, icon]) => (
          <a className="solution-card" href="#product" key={title}>
            <span className="solution-icon">{icon}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            <span className="card-link">
              Learn more <Arrow />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
