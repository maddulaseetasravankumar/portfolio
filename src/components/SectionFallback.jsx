import "./SectionFallback.css";

/**
 * Suspense fallback for lazy-loaded sections. Reserves roughly the same
 * height as the real section so swapping it in/out never shifts layout.
 */
const SectionFallback = ({ minHeight = 320 }) => (
  <div className="section-fallback" style={{ minHeight }} aria-hidden="true" />
);

export default SectionFallback;
