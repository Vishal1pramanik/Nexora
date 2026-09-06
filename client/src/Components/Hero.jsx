import Arrow from "./Arrow";
import ProductPreview from "./ProductPreview";

export default function Hero() {
  return (
    <section className="hero-section relative isolate">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="eyebrow-line" /> AI-POWERED PRODUCTIVITY, REIMAGINED
        </div>
        <h1>
          Work smarter.
          <br />
          <span>Move faster.</span>
        </h1>
        <p>
          NEXORA is the intelligent workspace that helps modern teams automate
          busywork, align faster, and turn their best ideas into momentum.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#features">
            Get Started <Arrow />
          </a>
          <a className="text-link" href="#features">
            Explore Platform <span>→</span>
          </a>
        </div>
      </div>
      <div className="hero-product">
        <ProductPreview />
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
      </div>
      <div className="hero-note">
        <span>01</span>
        <span>Scroll to explore</span>
        <span className="scroll-line" />
      </div>
    </section>
  );
}
