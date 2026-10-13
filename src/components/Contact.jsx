import { Mail, GitBranch, Link2, MapPin, Send, Phone } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Contact.css";

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "#ea4335",
  },
  {
    icon: Phone,
    label: "Phone",
    value: `+91 ${personalInfo.phone}`,
    href: `tel:+91${personalInfo.phone}`,
    color: "#10b981",
  },
  {
    icon: GitBranch,
    label: "GitHub",
    value: "@Sachin8297",
    href: personalInfo.github,
    color: "#f0f6fc",
    external: true,
  },
  {
    icon: Link2,
    label: "LinkedIn",
    value: "sachin-kumar-335373410",
    href: personalInfo.linkedin,
    color: "#0a66c2",
    external: true,
  },
];

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="contact"
      className="section section-alt contact"
      ref={ref}
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Send size={14} aria-hidden="true" />
            Get In Touch
          </span>
          <h2 className="section-title" id="contact-title">
            Let&apos;s <span>Connect</span>
          </h2>
          <p className="section-subtitle">
            I&apos;m actively looking for my first role as a MERN Stack Developer. If you have an opportunity or just want to connect, I&apos;d love to hear from you.
          </p>
        </div>

        <div
          className={`contact__grid ${isVisible ? "contact__grid--visible" : ""}`}
        >
          {/* Left: Message */}
          <div className="contact__message">
            <div className="contact__message-icon" aria-hidden="true">
              <Mail size={32} />
            </div>
            <h3 className="contact__message-title">Open to Opportunities</h3>
            <p className="contact__message-body">
              As a 2026 B.Tech CSE graduate, I am actively seeking my first professional role. I am interested in Junior Developer, Software Engineer, and MERN Stack Developer positions where I can contribute, learn, and grow.
            </p>
            <p className="contact__message-body">
              Feel free to reach out via email, phone, LinkedIn, or GitHub. I am quick to respond and always open to a conversation about technology, projects, or career opportunities.
            </p>

            <div className="contact__location">
              <MapPin size={16} aria-hidden="true" />
              <span>Greater Noida, India — Open to remote &amp; on-site roles</span>
            </div>
          </div>

          {/* Right: Contact cards */}
          <div className="contact__links">
            {CONTACT_LINKS.map(({ icon: Icon, label, value, href, color, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="contact__link-card"
                aria-label={`Contact via ${label}: ${value}`}
              >
                <div
                  className="contact__link-icon"
                  style={{ "--link-color": color }}
                  aria-hidden="true"
                >
                  <Icon size={22} />
                </div>
                <div className="contact__link-text">
                  <span className="contact__link-label">{label}</span>
                  <span className="contact__link-value">{value}</span>
                </div>
                <Send
                  size={16}
                  className="contact__link-arrow"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
