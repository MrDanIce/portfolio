import { useEffect, useRef } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

/**
 * Small custom cursor dot that trails the pointer and grows on
 * hoverable elements. Skipped entirely on touch/coarse pointers and
 * when reduced motion is requested — it's a decorative flourish, never
 * required to use the site.
 */
export function Cursor() {
  const dotRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    document.body.classList.add("has-custom-cursor");
    const dot = dotRef.current;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let raf;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
    };
    const render = () => {
      if (dot) dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(render);
    };
    render();

    const isInteractive = (el) => !!el?.closest("a, button, [role='button']");
    const onOver = (e) => dot?.classList.toggle("is-active", isInteractive(e.target));

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });

    return () => {
      document.body.classList.remove("has-custom-cursor");
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return <div ref={dotRef} className="cursor-dot" aria-hidden="true" />;
}
