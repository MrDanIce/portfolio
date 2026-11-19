import { Link } from "react-router";
import { DATA } from "../data/content";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useReveal } from "../hooks/useReveal";
import { ProjectVisual } from "./ProjectVisual";

function ProjectRow({ project, index }) {
  const reducedMotion = useReducedMotion();
  const ref = useReveal({ reducedMotion, threshold: 0.15 });

  return (
    <article ref={ref} className="project-row reveal" style={{ "--project-accent": project.accent }}>
      {/* Duplicate of the title link for pointer users; hidden from the
          keyboard and screen readers so each project is announced once. */}
      <Link to={`/projects/${project.slug}`} className="project-row-visual" tabIndex={-1} aria-hidden="true">
        <ProjectVisual project={project} />
      </Link>

      <div className="project-row-body">
        <div className="project-row-top">
          <span className="project-row-index">{String(index + 1).padStart(2, "0")}</span>
          <span className="project-row-meta">
            {project.year} · {project.category}
          </span>
        </div>

        <h3 className="project-row-name">
          <Link to={`/projects/${project.slug}`}>{project.name}</Link>
        </h3>
        <p className="project-row-sub">{project.sub}</p>

        <ul className="project-row-bullets">
          {project.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        <div className="project-row-stack" aria-label="Technologies used">
          {project.stack.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

        <Link to={`/projects/${project.slug}`} className="project-row-more" style={{ "--accent": project.accent }}>
          View project <span aria-hidden="true">&rarr;</span>
          <span className="visually-hidden">: {project.name}</span>
        </Link>
      </div>
    </article>
  );
}

export function Work() {
  const reducedMotion = useReducedMotion();
  const headingRef = useReveal({ reducedMotion });

  return (
    <section className="section work" id="work" aria-labelledby="work-heading">
      <div ref={headingRef} className="reveal">
        <p className="section-label">03 — Selected Work</p>
        <h2 id="work-heading" className="section-heading">
          What I&rsquo;ve built.
        </h2>
      </div>

      <div className="project-list">
        {DATA.projects.map((p, i) => (
          <ProjectRow key={p.name} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
