import {
  GitBranch,
  ExternalLink,
  CheckSquare,
  Heart,
  FolderGit2,
} from "lucide-react";
import { projects } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Projects.css";

const ICON_MAP = {
  CheckSquare,
  Heart,
};

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="projects"
      className="section section-alt projects"
      ref={ref}
      aria-labelledby="projects-title"
    >
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <FolderGit2 size={14} aria-hidden="true" />
            Featured Projects
          </span>
          <h2 className="section-title" id="projects-title">
            Things I&apos;ve <span>Built</span>
          </h2>
          <p className="section-subtitle">
            A selection of projects that reflect my full-stack development skills and problem-solving approach.
          </p>
        </div>

        <div
          className={`projects__grid ${isVisible ? "projects__grid--visible" : ""}`}
        >
          {projects.map((project, i) => {
            const Icon = ICON_MAP[project.icon] || CheckSquare;
            return (
              <article
                key={project.id}
                className="project-card"
                style={{ "--project-color": project.color, animationDelay: `${i * 0.15}s` }}
                aria-label={project.title}
              >
                {/* Card Header */}
                <div className="project-card__header">
                  <div
                    className="project-card__icon"
                    style={{
                      background: `${project.color}18`,
                      borderColor: `${project.color}30`,
                    }}
                    aria-hidden="true"
                  >
                    <Icon size={24} style={{ color: project.color }} />
                  </div>

                  <div className="project-card__links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__link"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                    <GitBranch size={18} aria-hidden="true" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__link"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink size={18} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title + Description */}
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>

                {/* Tags */}
                <div className="project-card__tags" aria-label="Technologies used">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA row */}
                <div className="project-card__ctas">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline project-card__cta-btn"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                    <GitBranch size={15} aria-hidden="true" />
                      Code
                    </a>
                  )}
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary project-card__cta-btn"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink size={15} aria-hidden="true" />
                      Live Demo
                    </a>
                  ) : (
                    <span className="project-card__coming-soon">
                      Coming soon
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <div className="projects__footer">
          <p className="projects__footer-text">
            See more of my work on GitHub
          </p>
          <a
            href="https://github.com/Sachin8297"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            aria-label="View all projects on GitHub"
          >
            <GitBranch size={16} aria-hidden="true" />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
