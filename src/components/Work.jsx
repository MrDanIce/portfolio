import { DATA } from "../data/content";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useReveal } from "../hooks/useReveal";
import { ProjectVisual } from "./ProjectVisual";

function ProjectRow({ project, index }) {
  const reducedMotion = useReducedMotion();
  const ref = useReveal({ reducedMotion, threshold: 0.15 });

  return (
    <article ref={ref} className="project-row reveal">
      <div className="project-row-visual">
        <ProjectVisual project={project} />
      </div>

      <div className="project-row-body">
        <div className="project-row-top">
          <span className="project-row-index">{String(index + 1).padStart(2, "0")}</span>
          <span className="project-row-meta">
            {project.year} · {project.category}
          </span>
        </div>

        <h3 className="project-row-name" style={{ color: project.accent }}>
          {project.name}
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
