import Arrow from "./Arrow";
import ProductPreview from "./ProductPreview";

export default function Product() {
  return (
    <section id="product" className="product-section section-pad">
      <div className="product-visual">
        <ProductPreview />
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
      </div>
      <div className="product-copy">
        <div className="eyebrow">
          <span className="eyebrow-line" /> YOUR WORK, IN FOCUS
        </div>
        <h2>
          Everything aligned.
          <br />
          <em>Nothing extra.</em>
        </h2>
        <p>
          NEXORA brings your projects, people, and processes together in a
          single, beautifully simple workspace. It is the calm center your team
          has been missing.
        </p>
        <ul className="benefit-list">
          <li>
            <span>✓</span>
            <div>
              <b>See the full picture</b>
              <small>Every project, priority, and deadline in one view.</small>
            </div>
          </li>
          <li>
            <span>✓</span>
            <div>
              <b>Automate the repeatable</b>
              <small>
                Let intelligent workflows carry the operational load.
              </small>
            </div>
          </li>
          <li>
            <span>✓</span>
            <div>
              <b>Move with confidence</b>
              <small>Make faster decisions with context always at hand.</small>
            </div>
          </li>
        </ul>
        <a className="button button-outline" href="#process">
          Explore the product <Arrow />
        </a>
      </div>
    </section>
  );
}
