import { GitBranch, Link2, ArrowDown, ExternalLink } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import "./Hero.css";

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero" aria-label="Introduction">
      {/* Ambient background */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__container">
        <div className="hero__content">
          {/* Badge */}
          <div className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            <span>Open to opportunities</span>
          </div>

          {/* Greeting */}
          <p className="hero__greeting">Hi, I&apos;m</p>

          {/* Name */}
          <h1 className="hero__name">
            Sachin Kumar
          </h1>

          {/* Role */}
          <h2 className="hero__role">
            <span className="hero__role-prefix">Junior </span>
            <span className="hero__role-accent">MERN Stack</span>
            <span className="hero__role-prefix"> Developer</span>
          </h2>

          {/* Description */}
          <p className="hero__bio">{personalInfo.shortBio}</p>

          {/* CTA Buttons */}
          <div className="hero__actions">
            <a
              href="#projects"
              className="btn btn-primary hero__btn-primary"
              onClick={(e) => handleScroll(e, "#projects")}
            >
              View Projects
              <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="btn btn-outline"
              onClick={(e) => handleScroll(e, "#contact")}
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="hero__socials">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub profile"
            >
              <GitBranch size={20} aria-hidden="true" />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn profile"
            >
              <Link2 size={20} aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Visual card */}
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__card">
            <div className="hero__card-header">
              <div className="hero__card-dots">
                <span className="hero__dot hero__dot--red" />
                <span className="hero__dot hero__dot--yellow" />
                <span className="hero__dot hero__dot--green" />
              </div>
              <span className="hero__card-filename">sachin.js</span>
            </div>
            <div className="hero__card-body">
              <div className="hero__code">
                <span className="hero__code-keyword">const</span>
                <span className="hero__code-var"> developer</span>
                <span className="hero__code-op"> = </span>
                <span className="hero__code-punct">{"{"}</span>
              </div>
              <div className="hero__code hero__code--indent">
                <span className="hero__code-key">name</span>
                <span className="hero__code-punct">: </span>
                <span className="hero__code-string">&quot;Sachin Kumar&quot;</span>
                <span className="hero__code-punct">,</span>
              </div>
              <div className="hero__code hero__code--indent">
                <span className="hero__code-key">role</span>
                <span className="hero__code-punct">: </span>
                <span className="hero__code-string">&quot;MERN Developer&quot;</span>
                <span className="hero__code-punct">,</span>
              </div>
              <div className="hero__code hero__code--indent">
                <span className="hero__code-key">stack</span>
                <span className="hero__code-punct">: [</span>
                <span className="hero__code-string">&quot;MongoDB&quot;</span>
                <span className="hero__code-punct">, </span>
                <span className="hero__code-string">&quot;Express&quot;</span>
                <span className="hero__code-punct">,</span>
              </div>
              <div className="hero__code hero__code--indent-2">
                <span className="hero__code-string">&quot;React&quot;</span>
                <span className="hero__code-punct">, </span>
                <span className="hero__code-string">&quot;Node.js&quot;</span>
                <span className="hero__code-punct">],</span>
              </div>
              <div className="hero__code hero__code--indent">
                <span className="hero__code-key">learning</span>
                <span className="hero__code-punct">: </span>
                <span className="hero__code-bool">true</span>
                <span className="hero__code-punct">,</span>
              </div>
              <div className="hero__code hero__code--indent">
                <span className="hero__code-key">available</span>
                <span className="hero__code-punct">: </span>
                <span className="hero__code-bool">true</span>
              </div>
              <div className="hero__code">
                <span className="hero__code-punct">{"}"}</span>
                <span className="hero__code-cursor" />
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="hero__floating hero__floating--1">
            <span>⚛️</span> React.js
          </div>
          <div className="hero__floating hero__floating--2">
            <span>🍃</span> MongoDB
          </div>
          <div className="hero__floating hero__floating--3">
            <span>🟢</span> Node.js
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="hero__scroll-hint"
        onClick={(e) => handleScroll(e, "#about")}
        aria-label="Scroll to About section"
      >
        <ArrowDown size={18} aria-hidden="true" />
      </a>
    </section>
  );
}
