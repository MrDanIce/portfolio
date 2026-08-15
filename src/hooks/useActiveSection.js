import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently "active" for nav highlighting.
 * Recomputes directly from live geometry (which section's top has
 * crossed a line ~35% down the viewport) every time IntersectionObserver
 * wakes up, rather than trusting any single entry's `isIntersecting`
 * flag — that flag can reflect a state one frame behind late-settling
 * layout (web fonts, entrance animations) and, once trusted alone,
 * has no way to self-correct back to "no section active" at the top.
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;

    const recompute = () => {
      const line = window.innerHeight * 0.35;
      let current = "";
      for (const el of els) {
        if (el.getBoundingClientRect().top <= line) current = el.id;
      }
      setActive(current);
    };

    const io = new IntersectionObserver(recompute, {
      rootMargin: "-20% 0px -20% 0px",
      threshold: [0, 1],
    });
    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [ids]);

  return active;
}
