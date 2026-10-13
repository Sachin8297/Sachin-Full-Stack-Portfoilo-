import { GitBranch, Link2, Heart, Code2, ArrowUp } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import "./Footer.css";

export default function Footer() {
  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__container">
        {/* Top bar */}
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__brand-icon" aria-hidden="true">
              <Code2 size={18} />
            </div>
            <div>
              <p className="footer__name">{personalInfo.name}</p>
              <p className="footer__role">{personalInfo.role}</p>
            </div>
          </div>

          {/* Social links */}
          <nav className="footer__socials" aria-label="Social media links">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              aria-label="GitHub profile"
            >
            <GitBranch size={18} aria-hidden="true" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              aria-label="LinkedIn profile"
            >
              <Link2 size={18} aria-hidden="true" />
            </a>
          </nav>

          {/* Back to top */}
          <button
            className="footer__back-top"
            onClick={handleScrollTop}
            aria-label="Back to top"
          >
            <ArrowUp size={16} aria-hidden="true" />
            Top
          </button>
        </div>

        {/* Divider */}
        <div className="footer__divider" role="separator" />

        {/* Bottom */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="footer__made-with">
            Built with{" "}
            <Heart size={13} className="footer__heart" aria-label="love" />
            {" "}using React &amp; Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
