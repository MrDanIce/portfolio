import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "pf-theme";

function getInitialTheme() {
  if (typeof document === "undefined") return "dark";
  // index.html sets this attribute synchronously before React mounts,
  // so this just mirrors whatever was already committed to the DOM.
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

/** Theme state backed by localStorage, defaulting to dark. */
export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // localStorage unavailable (e.g. privacy mode) — theme still works for this session.
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggleTheme };
}
