import { useEffect, useRef, useState } from "react";
import "./CustomCursor.css";

const HOVER_SELECTOR =
  "a, button, .filter-btn, .skill-pill, .dot, [role='button'], input, textarea";

/**
 * Subtle two-part cursor (a small dot + a trailing ring) for desktop
 * pointers only. Renders nothing on touch devices, so it has zero impact
 * on mobile performance. Position updates happen directly via refs/DOM
 * (no setState per mousemove) to avoid unnecessary re-renders.
 */
const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(window.matchMedia("(pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { ...pos };
    let rafId;

    const handleMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const animateRing = () => {
      ring.x += (pos.x - ring.x) * 0.18;
      ring.y += (pos.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }
      rafId = requestAnimationFrame(animateRing);
    };

    const handleOver = (e) => {
      if (e.target.closest?.(HOVER_SELECTOR)) {
        ringRef.current?.classList.add("cursor-hover");
      }
    };
    const handleOut = (e) => {
      if (e.target.closest?.(HOVER_SELECTOR)) {
        ringRef.current?.classList.remove("cursor-hover");
      }
    };

    document.body.classList.add("custom-cursor-active");
    window.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    rafId = requestAnimationFrame(animateRing);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
};

export default CustomCursor;
