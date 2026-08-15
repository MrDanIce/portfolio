import { DATA } from "../data/content";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useReveal } from "../hooks/useReveal";

function SkillGroup({ category, tags, index }) {
  const reducedMotion = useReducedMotion();
  const ref = useReveal({ reducedMotion });
  return (
    <div ref={ref} className="skill-group reveal" style={{ "--i": index }}>
      <p className="skill-cat">{category}</p>
      <p className="skill-tags">{tags.join(" · ")}</p>
    </div>
  );
}

export function Skills() {
  const reducedMotion = useReducedMotion();
  const headingRef = useReveal({ reducedMotion });

  return (
    <section className="section skills" id="skills" aria-labelledby="skills-heading">
      <div ref={headingRef} className="reveal">
        <p className="section-label">04 — Skills</p>
        <h2 id="skills-heading" className="section-heading">
          The toolkit.
        </h2>
      </div>

      <div className="skills-grid">
        {Object.entries(DATA.skills).map(([category, tags], i) => (
          <SkillGroup key={category} category={category} tags={tags} index={i} />
        ))}
      </div>
    </section>
  );
}
