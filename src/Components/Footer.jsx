export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a className="logo" href="#top">
            <span className="logo-symbol">N</span>
            <span>NEXORA</span>
          </a>
          <p>The intelligent workspace for teams who want to move forward.</p>
        </div>
        <div className="footer-column">
          <h3>Product</h3>
          <a href="#features">Features</a>
          <a href="#solutions">Solutions</a>
          <a href="#pricing">Pricing</a>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <a href="#product">About</a>
          <a href="mailto:careers@nexora.example">Careers</a>
          <a href="mailto:hello@nexora.example">Contact</a>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <a href="#faq">FAQ</a>
          <a href="#process">How it works</a>
          <a href="#product">Product overview</a>
        </div>
        <div className="footer-column">
          <h3>Connect</h3>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://x.com/" target="_blank" rel="noreferrer">X / Twitter ↗</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 NEXORA, Inc. All rights reserved.</span>
        <span>Built for better work.</span>
      </div>
    </footer>
  );
}
