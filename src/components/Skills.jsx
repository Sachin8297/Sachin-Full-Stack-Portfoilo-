import {
  Monitor,
  Server,
  Database,
  Wrench,
  Layers,
  Cpu,
} from "lucide-react";
import { skills } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Skills.css";

const ICON_MAP = {
  Monitor,
  Server,
  Database,
  Wrench,
  Layers,
  Cpu,
};

export default function Skills() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="skills"
      className="section skills"
      ref={ref}
      aria-labelledby="skills-title"
    >
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Cpu size={14} aria-hidden="true" />
            Technical Skills
          </span>
          <h2 className="section-title" id="skills-title">
            My <span>Tech Stack</span>
          </h2>
          <p className="section-subtitle">
            The tools and technologies I use to build full-stack web applications.
          </p>
        </div>

        <div
          className={`skills__grid ${isVisible ? "skills__grid--visible" : ""}`}
        >
          {skills.map(({ category, icon, color, items }, i) => {
            const Icon = ICON_MAP[icon] || Layers;
            return (
              <div
                key={category}
                className="skills__card"
                style={{ "--card-color": color, animationDelay: `${i * 0.1}s` }}
              >
                <div className="skills__card-header">
                  <div
                    className="skills__card-icon"
                    style={{ background: `${color}18`, borderColor: `${color}30` }}
                    aria-hidden="true"
                  >
                    <Icon size={20} style={{ color }} />
                  </div>
                  <h3 className="skills__card-title">{category}</h3>
                </div>
                <ul className="skills__list" aria-label={`${category} skills`}>
                  {items.map((skill) => (
                    <li key={skill} className="skills__item">
                      <span
                        className="skills__dot"
                        style={{ background: color }}
                        aria-hidden="true"
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
