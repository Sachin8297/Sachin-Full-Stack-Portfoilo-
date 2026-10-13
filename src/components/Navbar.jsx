import { useState, useEffect, useCallback } from "react";
import { Menu, X, Code2 } from "lucide-react";
import "./Navbar.css";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll state for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = useCallback(
    (e, href) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offset = 72;
        const top =
          target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
      setIsMenuOpen(false);
    },
    []
  );

  return (
    <header
      className={`navbar ${isScrolled ? "navbar--scrolled" : ""} ${
        isMenuOpen ? "navbar--menu-open" : ""
      }`}
      role="banner"
    >
      <div className="navbar__container">
        {/* Logo */}
        <a
          href="#hero"
          className="navbar__logo"
          onClick={(e) => handleNavClick(e, "#hero")}
          aria-label="Sachin Kumar — Home"
        >
          <div className="navbar__logo-icon" aria-hidden="true">
            <Code2 size={18} />
          </div>
          <span className="navbar__logo-text">Sachin Kumar</span>
        </a>

        {/* Desktop Nav */}
        <nav className="navbar__nav" aria-label="Primary navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`navbar__link ${
                activeSection === href.replace("#", "")
                  ? "navbar__link--active"
                  : ""
              }`}
              onClick={(e) => handleNavClick(e, href)}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="navbar__cta btn btn-primary"
          onClick={(e) => handleNavClick(e, "#contact")}
        >
          Hire Me
        </a>

        {/* Mobile hamburger */}
        <button
          className="navbar__hamburger"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((o) => !o)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        id="mobile-menu"
        className={`navbar__mobile-menu ${
          isMenuOpen ? "navbar__mobile-menu--open" : ""
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
      >
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={`navbar__mobile-link ${
              activeSection === href.replace("#", "")
                ? "navbar__mobile-link--active"
                : ""
            }`}
            onClick={(e) => handleNavClick(e, href)}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            {label}
          </a>
        ))}
        <a
          href="#contact"
          className="btn btn-primary navbar__mobile-cta"
          onClick={(e) => handleNavClick(e, "#contact")}
          tabIndex={isMenuOpen ? 0 : -1}
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}
