import Arrow from "./Arrow";

const plans = [
  [
    "STARTER",
    "₹0",
    "/month",
    "For individuals",
    [
      "Unlimited projects",
      "Basic workflow automation",
      "Personal workspace",
      "Community support",
    ],
  ],
  [
    "PRO",
    "₹799",
    "/month",
    "For growing teams",
    [
      "Everything in Starter",
      "Advanced automations",
      "Team collaboration",
      "Smart analytics",
      "Priority support",
    ],
  ],
  [
    "ENTERPRISE",
    "Custom",
    "pricing",
    "For larger organizations",
    [
      "Everything in Pro",
      "Advanced permissions",
      "Dedicated workspace",
      "Custom onboarding",
      "Priority security review",
    ],
  ],
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section section-pad relative">
      <div className="section-heading-row pricing-heading">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" /> SIMPLE, TRANSPARENT PLANS
          </div>
          <h2>
            Choose your pace.
            <br />
            <em>Keep your edge.</em>
          </h2>
        </div>
        <p>
          Start with the essentials and grow into a workspace that works as hard
          as your team does.
        </p>
      </div>
      <div className="pricing-grid">
        {plans.map(([name, price, cadence, description, planFeatures]) => (
          <article
            className={`pricing-card ${name === "PRO" ? "is-popular" : ""}`}
            key={name}
          >
            {name === "PRO" && (
              <span className="popular-label">MOST POPULAR</span>
            )}
            <div className="pricing-top">
              <span className="plan-name">{name}</span>
              <span className="plan-description">{description}</span>
            </div>
            <div className="price">
              <strong>{price}</strong>
              <span>{cadence}</span>
            </div>
            <ul>
              {planFeatures.map((feature) => (
                <li key={feature}>
                  <span>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <a
              className={`button ${name === "PRO" ? "button-primary" : "button-outline"}`}
              href="#top"
            >
              {name === "ENTERPRISE" ? "Talk to sales" : "Get started"}{" "}
              <Arrow />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
