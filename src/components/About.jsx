import { User, Code, Target, Zap } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./About.css";

const HIGHLIGHTS = [
  {
    icon: Code,
    title: "Full-Stack Focus",
    description:
      "Building end-to-end web applications using React on the frontend and Node.js/Express on the backend, with MongoDB for data persistence.",
  },
  {
    icon: Target,
    title: "Career Goal",
    description:
      "Looking to join a team as a Junior Software Engineer / MERN Stack Developer, contribute to real-world projects, and grow through hands-on experience.",
  },
  {
    icon: Zap,
    title: "Quick Learner",
    description:
      "Adaptable and self-driven — comfortable picking up new tools, accepting feedback, and improving with every project and code review.",
  },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="about"
      className="section section-alt about"
      ref={ref}
      aria-labelledby="about-title"
    >
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <User size={14} aria-hidden="true" />
            About Me
          </span>
          <h2 className="section-title" id="about-title">
            Who I <span>Am</span>
          </h2>
        </div>

        <div className={`about__grid ${isVisible ? "about__grid--visible" : ""}`}>
          {/* Left: Bio */}
          <div className="about__bio">
            <div className="about__avatar" aria-hidden="true">
              <div className="about__avatar-inner">
                <span>SK</span>
              </div>
              <div className="about__avatar-ring" />
            </div>

            <div className="about__text">
              <h3 className="about__name">Sachin Kumar</h3>
              <p className="about__role-label">B.Tech CSE · NIET, Greater Noida · 2026</p>

              <p className="about__para">{personalInfo.bio}</p>

              <p className="about__para">
                I have built projects covering the full stack — from designing REST APIs and handling authentication on the backend, to crafting responsive React interfaces on the frontend. I care about writing clean, readable code and understanding how each layer of an application fits together.
              </p>

              <div className="about__tags">
                {["React.js", "Node.js", "MongoDB", "Express.js", "REST APIs", "Git"].map((tag) => (
                  <span key={tag} className="about__tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Highlight cards */}
          <div className="about__highlights">
            {HIGHLIGHTS.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className="about__card"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="about__card-icon" aria-hidden="true">
                  <Icon size={22} />
                </div>
                <div>
                  <h4 className="about__card-title">{title}</h4>
                  <p className="about__card-desc">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
