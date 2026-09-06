import { useState } from "react";
import Arrow from "./Arrow";

export default function Navbar({ isAboutPage = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const sectionLink = (section) =>
    isAboutPage ? `/#${section}` : `#${section}`;

  return (
    <header className="site-header relative z-20 flex items-center">
      <a
        className="logo"
        href={isAboutPage ? "/about.html#about-top" : "#top"}
        onClick={closeMenu}
      >
        <span className="logo-symbol">N</span>
        <span>NEXORA</span>
      </a>
      <nav
        className={menuOpen ? "nav-open" : ""}
        aria-label="Primary navigation"
      >
        <a href={sectionLink("features")} onClick={closeMenu}>
          Features
        </a>
        <a href={sectionLink("solutions")} onClick={closeMenu}>
          Solutions
        </a>
        <a href={sectionLink("pricing")} onClick={closeMenu}>
          Pricing
        </a>
        <a href={sectionLink("faq")} onClick={closeMenu}>
          FAQ
        </a>
        <a href="/about.html" onClick={closeMenu}>
          About
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
      <a
        className="header-cta"
        href={sectionLink("pricing")}
        onClick={closeMenu}
      >
        Get Started <Arrow />
      </a>
    </header>
  );
}
