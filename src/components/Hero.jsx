import { useEffect } from "react";
import anime from "animejs";
import { DATA } from "../data/content";
import { useReducedMotion } from "../hooks/useReducedMotion";

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  const reducedMotion = useReducedMotion();
  const { firstName, lastName, role, eyebrow, tagline, location, availability } = DATA.meta;

  useEffect(() => {
    const targets = [".hero-eyebrow", ".hero-name-line", ".hero-role", ".hero-meta-row", ".hero-tagline"];

    if (reducedMotion) {
      targets.forEach((sel) => {
        document.querySelectorAll(sel).forEach((el) => {
          el.style.opacity = 1;
          el.style.transform = "none";
        });
      });
      return;
    }

    anime
      .timeline({ easing: "easeOutExpo" })
      .add({ targets: ".hero-eyebrow", opacity: [0, 1], translateY: [14, 0], duration: 450 }, 60)
      .add(
        { targets: ".hero-name-line", opacity: [0, 1], translateY: [46, 0], duration: 700, delay: anime.stagger(120) },
        "-=260"
      )
      .add({ targets: ".hero-role", opacity: [0, 1], translateY: [10, 0], duration: 420 }, "-=340")
      .add({ targets: ".hero-meta-row", opacity: [0, 1], translateY: [8, 0], duration: 380 }, "-=260")
      .add({ targets: ".hero-tagline", opacity: [0, 1], translateY: [8, 0], duration: 400 }, "-=240");

    const fallback = window.setTimeout(() => {
      targets.forEach((sel) => {
        document.querySelectorAll(sel).forEach((el) => {
          el.style.opacity = 1;
          el.style.transform = "none";
        });
      });
    }, 2200);
    return () => window.clearTimeout(fallback);
  }, [reducedMotion]);

  return (
    <section className="hero" id="home" aria-label="Introduction">
      <div className="hero-inner">
        <p className="hero-eyebrow">{eyebrow}</p>

        <h1 className="hero-name">
          <span className="hero-name-line hero-name-line--right">{firstName}</span>
          <span className="hero-name-line hero-name-line--left">{lastName}</span>
        </h1>

        <div className="hero-sub">
          <p className="hero-role">{role}</p>
          <div className="hero-meta-row">
            {location && <span className="hero-meta-item">{location}</span>}
            {availability && (
              <span className="hero-meta-item hero-status">
                <span className="hero-status-dot" aria-hidden="true" />
                {availability}
              </span>
            )}
          </div>
        </div>

        <p className="hero-tagline">{tagline}</p>

        <div className="hero-links">
          <button type="button" className="hero-link" onClick={() => scrollToId("work")}>
            View Work
          </button>
          <a className="hero-link" href={`mailto:${DATA.contact.email}`}>
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
