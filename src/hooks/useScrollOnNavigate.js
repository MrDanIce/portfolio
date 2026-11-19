import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * Client-side navigation keeps the old scroll position, so a project
 * page would open halfway down. On every route change: jump to the
 * `#section` in the URL if there is one (e.g. "Back to work" lands on
 * #work), otherwise to the top. "instant" overrides the global
 * `scroll-behavior: smooth`, which would otherwise animate the whole
 * page from wherever the previous route was scrolled to.
 */
export function useScrollOnNavigate() {
  const { pathname, hash } = useLocation();

  // Effects run after the commit, so the destination route's sections are
  // already in the DOM. No requestAnimationFrame: browsers pause it in
  // background tabs, which would leave the page at the old position.
  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView({ behavior: "instant" });
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);
}
