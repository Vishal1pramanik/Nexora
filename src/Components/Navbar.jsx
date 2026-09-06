import { useState } from "react";
import Arrow from "./Arrow";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header relative z-20 flex items-center">
      <a className="logo" href="#top" onClick={closeMenu}>
        <span className="logo-symbol">N</span>
        <span>NEXORA</span>
      </a>
      <nav
        className={menuOpen ? "nav-open" : ""}
        aria-label="Primary navigation"
      >
        <a href="#features" onClick={closeMenu}>
          Features
        </a>
        <a href="#solutions" onClick={closeMenu}>
          Solutions
        </a>
        <a href="#pricing" onClick={closeMenu}>
          Pricing
        </a>
        <a href="#faq" onClick={closeMenu}>
          FAQ
        </a>
      </nav>
      <button
        type="button"
        className={`menu-button ${menuOpen ? "is-open" : ""}`}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      <a className="header-cta" href="#pricing" onClick={closeMenu}>
        Get Started <Arrow />
      </a>
    </header>
  );
}
