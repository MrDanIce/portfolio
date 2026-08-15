/**
 * Original, code-generated art-directed visual for a project — no
 * photos, screenshots, or third-party assets. Composed from layered
 * CSS: a fine grid, a diagonal accent sweep, subtle radial lighting,
 * and a large ghost initial in the display face — built from the
 * project's own accent color and name, not a generic gradient blob.
 */
export function ProjectVisual({ project }) {
  const { accent, name } = project;
  const initial = name.charAt(0);

  return (
    <div className="project-visual" style={{ "--accent": accent }} aria-hidden="true">
      <div className="project-visual-grid" />
      <div className="project-visual-sweep" />
      <span className="project-visual-initial">{initial}</span>
      <span className="project-visual-corner" />
    </div>
  );
}
