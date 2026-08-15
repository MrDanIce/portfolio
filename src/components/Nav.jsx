import { useEffect, useRef, useState } from "react";
import { SECTIONS } from "../data/content";
import { ThemeToggle } from "./ThemeToggle";

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

/**
 * Off-canvas menu: a small persistent trigger (not a visible link row)
 * that opens a full-height panel sliding in from the right. Editorial,
 * sparse, and closer to the reference's menu treatment than a
 * conventional startup navbar.
 */
export function Nav({ active, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleBtnRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    panelRef.current?.querySelector("a,button")?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (id) => {
    scrollToId(id);
    setOpen(false);
  };

  return (
    <>
      <header className="nav">
        <button
          type="button"
          className="nav-logo"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setOpen(false);
          }}
          aria-label="Scroll to top"
        >
          MF.
        </button>

        <div className="nav-actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            ref={toggleBtnRef}
            type="button"
            className="nav-trigger"
            aria-expanded={open}
            aria-controls="menu-panel"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="nav-trigger-lines" aria-hidden="true">
              <span />
              <span />
            </span>
            <span className="nav-trigger-label">{open ? "Close" : "Menu"}</span>
          </button>
        </div>
      </header>

      <div
        className={`menu-backdrop${open ? " is-open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <nav
        id="menu-panel"
        ref={panelRef}
        className={`menu-panel${open ? " is-open" : ""}`}
        aria-label="Primary"
        aria-hidden={!open}
      >
        <ol className="menu-list">
          {SECTIONS.map((s, i) => (
            <li key={s.id}>
              <button
                type="button"
                tabIndex={open ? 0 : -1}
                className={`menu-link${active === s.id ? " is-active" : ""}`}
                onClick={() => go(s.id)}
              >
                <span className="menu-link-index">{String(i + 1).padStart(2, "0")}</span>
                {s.label}
              </button>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
