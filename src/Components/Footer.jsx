export default function Footer({ isAboutPage = false }) {
  const sectionLink = (section) =>
    isAboutPage ? `/#${section}` : `#${section}`;

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a
            className="logo"
            href={isAboutPage ? "/about.html#about-top" : "#top"}
          >
            <span className="logo-symbol">N</span>
            <span>NEXORA</span>
          </a>
          <p>The intelligent workspace for teams who want to move forward.</p>
        </div>
        <div className="footer-column">
          <h3>Product</h3>
          <a href={sectionLink("features")}>Features</a>
          <a href={sectionLink("solutions")}>Solutions</a>
          <a href={sectionLink("pricing")}>Pricing</a>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <a href="/about.html">About</a>
          <a href="mailto:careers@nexora.example">Careers</a>
          <a href="mailto:hello@nexora.example">Contact</a>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <a href={sectionLink("faq")}>FAQ</a>
          <a href={sectionLink("process")}>How it works</a>
          <a href={sectionLink("product")}>Product overview</a>
        </div>
        <div className="footer-column">
          <h3>Connect</h3>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href="https://x.com/" target="_blank" rel="noreferrer">
            X / Twitter ↗
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            Instagram ↗
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 NEXORA, Inc. All rights reserved.</span>
        <span>Built for better work.</span>
      </div>
    </footer>
  );
}
