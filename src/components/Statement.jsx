import { DATA } from "../data/content";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useReveal } from "../hooks/useReveal";

/**
 * The page's single biggest visual moment: a short lead line followed
 * by a small number of oversized single-word concepts, stacked. Original
 * wording grounded in the real work described in About/Experience.
 */
export function Statement() {
  const reducedMotion = useReducedMotion();
  const ref = useReveal({ reducedMotion, threshold: 0.35 });
  const { lead, words } = DATA.statement;

  return (
    <section className="statement" aria-label="Positioning statement">
      <div ref={ref} className="statement-inner reveal">
        <p className="statement-lead">{lead}</p>
        <ul className="statement-words">
          {words.map((w, i) => (
            <li key={w} className="statement-word reveal-item" style={{ "--i": i }}>
              {w}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
