import Arrow from "./Arrow";

export default function FinalCTA() {
  return (
    <section className="final-cta section-pad">
      <div className="cta-inner">
        <div className="eyebrow">
          <span className="eyebrow-line" /> YOUR NEXT CHAPTER STARTS HERE
        </div>
        <h2>
          Ready to work <em>smarter?</em>
        </h2>
        <p>Bring your best people, ideas, and workflows into one place.</p>
        <a className="button button-primary" href="#pricing">
          Get Started <Arrow />
        </a>
      </div>
    </section>
  );
}
