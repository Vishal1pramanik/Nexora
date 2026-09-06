import Arrow from "./Arrow";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductPreview from "./ProductPreview";

const principles = [
  [
    "01",
    "Clarity over clutter",
    "We believe the best tools make important work easier to see, understand, and act on.",
  ],
  [
    "02",
    "Intelligence with intent",
    "AI should remove friction and give teams more room for judgment, creativity, and momentum.",
  ],
  [
    "03",
    "Progress that compounds",
    "Small improvements in how a team works become a meaningful advantage over time.",
  ],
];

export default function AboutPage() {
  return (
    <div className="site-shell min-h-screen bg-nexora-bg text-nexora-ink antialiased">
      <Navbar isAboutPage />
      <main id="about-top">
        <section className="about-hero section-pad">
          <div className="eyebrow">
            <span className="eyebrow-line" /> ABOUT NEXORA
          </div>
          <h1>
            Make space for
            <br />
            <span>better work.</span>
          </h1>
          <p>
            NEXORA is building the intelligent operating layer for modern teams:
            one calm, connected place to plan, collaborate, and automate the
            work that moves businesses forward.
          </p>
          <a className="button button-primary" href="/#product">
            See the product <Arrow />
          </a>
        </section>
        <section className="about-product section-pad">
          <div className="about-product-visual">
            <ProductPreview />
          </div>
          <div className="product-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" /> WHY WE EXIST
            </div>
            <h2>
              Work is changing.
              <br />
              <em>Your tools should too.</em>
            </h2>
            <p>
              Teams are moving faster than ever, but their systems are still
              scattered across tabs, threads, and handoffs. NEXORA brings the
              whole working rhythm into focus so people can spend less time
              managing work and more time doing it.
            </p>
            <a className="button button-outline" href="/#features">
              Explore NEXORA <Arrow />
            </a>
          </div>
        </section>
        <section className="principles-section section-pad">
          <div className="section-heading-row">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" /> WHAT GUIDES US
              </div>
              <h2>
                Built for the way
                <br />
                <em>work really moves.</em>
              </h2>
            </div>
            <p>
              Thoughtful software should feel like a clear head: powerful when
              you need it, quiet when you do not.
            </p>
          </div>
          <div className="principles-grid">
            {principles.map(([number, title, text]) => (
              <article className="principle-card" key={number}>
                <span className="feature-number">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="about-closing section-pad">
          <div className="cta-inner">
            <div className="eyebrow">
              <span className="eyebrow-line" /> A BETTER WAY FORWARD
            </div>
            <h2>
              Less busywork.
              <br />
              <em>More momentum.</em>
            </h2>
            <p>
              Discover the workspace designed to help your team do its best
              work.
            </p>
            <a className="button button-primary" href="/#pricing">
              Get Started <Arrow />
            </a>
          </div>
        </section>
      </main>
      <Footer isAboutPage />
    </div>
  );
}
