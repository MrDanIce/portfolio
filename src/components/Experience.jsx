import { DATA } from "../data/content";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useReveal } from "../hooks/useReveal";

function ExperienceRow({ item, index }) {
  const reducedMotion = useReducedMotion();
  const ref = useReveal({ reducedMotion });

  return (
    <li ref={ref} className="xp-row reveal" style={{ "--i": index }}>
      <span className="xp-period">{item.period}</span>
      <div className="xp-body">
        <h3 className={`xp-org${item.isEducation ? " is-education" : ""}`}>{item.company}</h3>
        <p className="xp-role">{item.role}</p>
        {item.bullets.length > 0 && (
          <ul className="xp-bullets">
            {item.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

export function Experience() {
  const reducedMotion = useReducedMotion();
  const headingRef = useReveal({ reducedMotion });

  return (
    <section className="section experience" id="experience" aria-labelledby="experience-heading">
      <div ref={headingRef} className="reveal">
        <p className="section-label">02 — Experience</p>
        <h2 id="experience-heading" className="section-heading">
          Where I&rsquo;ve worked.
        </h2>
      </div>

      <ol className="xp-list">
        {DATA.experience.map((e, i) => (
          <ExperienceRow key={`${e.company}-${e.period}`} item={e} index={i} />
        ))}
      </ol>
    </section>
  );
}
