import { useEffect } from "react";
import { Link, useParams } from "react-router";
import { DATA, findProject } from "../data/content";
import { ProjectVisual } from "./ProjectVisual";

const SITE_TITLE = "Mudassir Farooqui — Software & Data Engineer";

/**
 * One page per project at /projects/:slug. Everything shown comes from
 * the project's entry in content.js: the summary bullets every project
 * has, plus `details` (overview, sections, links) where it exists.
 * Sections render only when present, so a project without `details`
 * still gets a complete page rather than empty headings.
 */
export function ProjectPage() {
  const { slug } = useParams();
  const project = slug ? findProject(slug) : undefined;

  useEffect(() => {
    document.title = project ? `${project.name} — Mudassir Farooqui` : `Not found — Mudassir Farooqui`;
    return () => {
      document.title = SITE_TITLE;
    };
  }, [project]);

  if (!project) return <NotFound />;

  const index = DATA.projects.indexOf(project);
  const prev = DATA.projects[index - 1];
  const next = DATA.projects[index + 1];
  const { overview, sections = [], links = [] } = project.details ?? {};

  return (
    <article className="section project-page" style={{ "--accent": project.accent, "--project-accent": project.accent }}>
      <Link to="/#work" className="project-back">
        <span aria-hidden="true">&larr;</span> All work
      </Link>

      <header className="project-header">
        <p className="project-meta">
          {String(index + 1).padStart(2, "0")} · {project.category} · {project.period}
        </p>
        <h1 className="project-title">{project.name}</h1>
        <p className="project-sub">{project.sub}</p>
      </header>

      <div className="project-hero-visual">
        <ProjectVisual project={project} />
      </div>

      <div className="project-body">
        <aside className="project-aside">
          <h2 className="project-aside-label">Stack</h2>
          <ul className="project-stack">
            {project.stack.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>

          {links.length > 0 && (
            <>
              <h2 className="project-aside-label">Links</h2>
              <ul className="project-links">
                {links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} target="_blank" rel="noopener noreferrer">
                      {l.label} <span aria-hidden="true">&#8599;</span>
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </aside>

        <div className="project-content">
          {overview && <p className="project-overview">{overview}</p>}

          <section aria-labelledby="highlights">
            <h2 id="highlights" className="project-section-heading">
              Highlights
            </h2>
            <ul className="project-list-items">
              {project.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </section>

          {sections.map((s, i) => (
            <section key={s.heading} aria-labelledby={`detail-${i}`}>
              <h2 id={`detail-${i}`} className="project-section-heading">
                {s.heading}
              </h2>
              <ul className="project-list-items">
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      <nav className="project-pager" aria-label="More projects">
        {prev ? (
          <Link
            to={`/projects/${prev.slug}`}
            className="project-pager-link"
            style={{ "--project-accent": prev.accent }}
          >
            <span className="project-pager-dir">&larr; Previous</span>
            <span className="project-pager-name">{prev.name}</span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            to={`/projects/${next.slug}`}
            className="project-pager-link is-next"
            style={{ "--project-accent": next.accent }}
          >
            <span className="project-pager-dir">Next &rarr;</span>
            <span className="project-pager-name">{next.name}</span>
          </Link>
        )}
      </nav>
    </article>
  );
}

function NotFound() {
  return (
    <section className="section project-page project-missing">
      <p className="section-label">404</p>
      <h1 className="project-title">Page not found.</h1>
      <p className="project-sub">That link doesn&rsquo;t match any page on this site.</p>
      <Link to="/#work" className="project-back">
        <span aria-hidden="true">&larr;</span> See all work
      </Link>
    </section>
  );
}
