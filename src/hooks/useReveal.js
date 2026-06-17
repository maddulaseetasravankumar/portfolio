import { useEffect } from "react";

/**
 * Attaches an IntersectionObserver to all `.reveal` elements in the DOM,
 * adding the `.visible` class when they enter the viewport.
 * Call this once at the App level.
 */
const useReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    // Observe existing elements
    const observeAll = () => {
      document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    };

    observeAll();

    // Re-observe after a short delay in case components mount late
    const timer = setTimeout(observeAll, 300);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);
};

export default useReveal;
