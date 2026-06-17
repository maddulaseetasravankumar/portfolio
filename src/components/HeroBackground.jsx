import { useEffect, useMemo, useRef } from "react";
import "./HeroBackground.css";

const PARTICLE_COUNT = 16;

/**
 * Purely decorative hero background:
 *  - 3 blurred gradient "blobs" animated with CSS keyframes (GPU-friendly,
 *    transform-only, no JS animation loop)
 *  - a handful of floating particles, also CSS-driven
 *  - a radial "glow" that follows the cursor, updated via a single
 *    requestAnimationFrame-throttled listener (no React re-renders)
 *
 * No 3D, no canvas, no extra dependencies — just SVG/CSS, so the
 * performance footprint is negligible.
 */
const HeroBackground = ({ targetRef }) => {
  const glowRef = useRef(null);

  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
        id: i,
        left: ((i * 6.3) % 100).toFixed(1),
        size: 2 + (i % 4),
        duration: 9 + (i % 6) * 1.5,
        delay: (i % 8) * -0.9,
      })),
    []
  );

  useEffect(() => {
    const section = targetRef?.current;
    if (!section || window.matchMedia("(pointer: coarse)").matches) return;

    let frame = null;
    let nextX = 50;
    let nextY = 50;

    const applyPosition = () => {
      if (glowRef.current) {
        glowRef.current.style.setProperty("--mx", `${nextX}%`);
        glowRef.current.style.setProperty("--my", `${nextY}%`);
      }
      frame = null;
    };

    const handleMove = (e) => {
      const rect = section.getBoundingClientRect();
      nextX = ((e.clientX - rect.left) / rect.width) * 100;
      nextY = ((e.clientY - rect.top) / rect.height) * 100;
      if (frame === null) frame = requestAnimationFrame(applyPosition);
    };

    const showGlow = () => glowRef.current && (glowRef.current.style.opacity = "1");
    const hideGlow = () => glowRef.current && (glowRef.current.style.opacity = "0");

    section.addEventListener("mousemove", handleMove);
    section.addEventListener("mouseenter", showGlow);
    section.addEventListener("mouseleave", hideGlow);

    return () => {
      section.removeEventListener("mousemove", handleMove);
      section.removeEventListener("mouseenter", showGlow);
      section.removeEventListener("mouseleave", hideGlow);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [targetRef]);

  return (
    <div className="hero-bg" aria-hidden="true">
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />

      <div className="hero-particles">
        {particles.map((p) => (
          <span
            key={p.id}
            className="hero-particle"
            style={{
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="hero-mouse-glow" ref={glowRef} />
    </div>
  );
};

export default HeroBackground;
