import { DATA } from "../data/content";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useReveal } from "../hooks/useReveal";

const LINKS = [
  { key: "email", label: "Email", href: (c) => `mailto:${c.email}` },
  { key: "linkedin", label: "LinkedIn", href: (c) => c.linkedin, external: true },
  { key: "github", label: "GitHub", href: (c) => c.github, external: true },
  { key: "resume", label: "Resume", href: (c) => c.resume, external: true },
];

export function Contact() {
  const reducedMotion = useReducedMotion();
  const ref = useReveal({ reducedMotion });

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-heading">
      <div ref={ref} className="reveal">
        <p className="section-label">05 — Contact</p>
        <h2 id="contact-heading" className="contact-heading">
          Let&rsquo;s build
          <br />
          something.
        </h2>
        <p className="contact-sub">
          Open to data engineering, ML engineering, and full-stack roles. {DATA.meta.availability}.
        </p>

        <ul className="contact-links">
          {LINKS.map((link) => (
            <li key={link.key}>
              <a
                className="contact-link"
                href={link.href(DATA.contact)}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
