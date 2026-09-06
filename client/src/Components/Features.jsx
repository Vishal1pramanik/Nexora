import Arrow from "./Arrow";

const features = [
  [
    "01",
    "✦",
    "AI Workflow Automation",
    "Let intelligent agents handle repetitive work so your team can focus on high-value decisions.",
  ],
  [
    "02",
    "◒",
    "Smart Analytics",
    "Turn everyday work into clear signals with insights that help teams move with confidence.",
  ],
  [
    "03",
    "◎",
    "Team Collaboration",
    "Give everyone one calm, connected place to align, contribute, and make progress together.",
  ],
  [
    "04",
    "⌘",
    "Workflow Builder",
    "Design powerful processes without code and make your best ways of working repeatable.",
  ],
  [
    "05",
    "◇",
    "Secure Workspace",
    "Keep your work protected with thoughtful permissions, private spaces, and enterprise-grade security.",
  ],
  [
    "06",
    "◌",
    "Smart Notifications",
    "Stay informed about what matters without adding more noise to your working day.",
  ],
];

export default function Features() {
  return (
    <section id="features" className="features-section section-pad relative">
      <div className="section-intro">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" /> ONE WORKSPACE, MORE MOMENTUM
          </div>
          <h2>
            Everything your team needs to <em>do great work.</em>
          </h2>
        </div>
        <p>
          From first thought to final delivery, NEXORA gives your team the
          clarity and intelligence to keep moving forward.
        </p>
      </div>
      <div className="feature-grid">
        {features.map(([number, icon, title, text]) => (
          <article className="feature-card" key={number}>
            <div className="feature-top">
              <span className="feature-number">{number}</span>
              <span className="feature-icon">{icon}</span>
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
            <a
              className="feature-link"
              href="#top"
              aria-label={`Learn more about ${title}`}
            >
              <Arrow />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
