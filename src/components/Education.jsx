import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { education } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Education.css";

export default function Education() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="education"
      className="section education"
      ref={ref}
      aria-labelledby="education-title"
    >
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <GraduationCap size={14} aria-hidden="true" />
            Education
          </span>
          <h2 className="section-title" id="education-title">
            Academic <span>Background</span>
          </h2>
        </div>

        <div
          className={`education__timeline ${
            isVisible ? "education__timeline--visible" : ""
          }`}
        >
          {education.map((edu, i) => (
            <div key={i} className="education__item">
              {/* Timeline dot */}
              <div className="education__timeline-marker" aria-hidden="true">
                <div className="education__timeline-dot" />
                <div className="education__timeline-line" />
              </div>

              {/* Card */}
              <div className="education__card">
                {/* Icon */}
                <div className="education__icon" aria-hidden="true">
                  <GraduationCap size={26} />
                </div>

                <div className="education__content">
                  <div className="education__card-header">
                    <div>
                      <h3 className="education__degree">{edu.degree}</h3>
                      <p className="education__institution">{edu.institution}</p>
                    </div>
                    <div className="education__meta">
                      <span className="education__period">
                        <Calendar size={13} aria-hidden="true" />
                        {edu.period}
                      </span>
                      <span className="education__location">
                        <MapPin size={13} aria-hidden="true" />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  <p className="education__description">{edu.description}</p>

                  {/* Highlight badge */}
                  <div className="education__badge">
                    <span>🎓</span>
                    <span>Computer Science &amp; Engineering · Class of 2026</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
