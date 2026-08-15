import { DATA } from "../data/content";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const reducedMotion = useReducedMotion();
  const headingRef = useReveal({ reducedMotion });
  const paraRef = useReveal({ reducedMotion });
  const statsRef = useReveal({ reducedMotion });

  return (
    <section className="section about" id="about" aria-labelledby="about-heading">
      <div ref={headingRef} className="reveal">
        <p className="section-label">01 — About</p>
        <h2 id="about-heading" className="section-heading">
          Data engineer.
          <br />
          ML builder.
        </h2>
      </div>

      <p ref={paraRef} className="about-para reveal">
        {DATA.about.paragraph}
      </p>

      <div ref={statsRef} className="about-stats reveal">
        {DATA.about.stats.map((s, i) => (
          <div key={s.l} className="about-stat reveal-item" style={{ "--i": i }}>
            <span className="about-stat-n">{s.n}</span>
            <span className="about-stat-l">{s.l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
