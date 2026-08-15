import { useEffect, useRef } from "react";

/**
 * Adds `.is-visible` to an element once it scrolls into view, then stops
 * observing. Pure CSS (see reveal.css) does the actual animating — this
 * hook only flips the class, so motion stays cheap and declarative.
 * With reduced motion, the class is applied immediately (no motion, still visible).
 */
export function useReveal({ threshold = 0.15, reducedMotion = false } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reducedMotion) {
      el.classList.add("is-visible");
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.add("is-visible");
        io.unobserve(el);
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reducedMotion, threshold]);

  return ref;
}
