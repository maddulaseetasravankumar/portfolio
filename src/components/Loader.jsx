import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Loader.css";

const NAME_PARTS = ["Maddula", "Seeta", "Sravan", "Kumar"];
const FILL_DURATION = 1500; // ms — progress 0 -> 100
const HOLD_DURATION = 220; // brief pause once it hits 100%
const EXIT_DURATION = 0.5; // seconds — fade/scale out

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

/**
 * Full-screen intro loader. Shown only once per browser session
 * (controlled by the parent via sessionStorage). Locks body scroll
 * while active and calls `onFinish` once it has fully faded out so the
 * parent can safely unmount it without any layout shift.
 */
const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const rafId = useRef(null);
  const startTime = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const tick = (timestamp) => {
      if (startTime.current === null) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const ratio = Math.min(elapsed / FILL_DURATION, 1);

      setProgress(Math.round(easeOutCubic(ratio) * 100));

      if (ratio < 1) {
        rafId.current = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setExiting(true), HOLD_DURATION);
      }
    };

    rafId.current = requestAnimationFrame(tick);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {!exiting && (
        <motion.div
          className="loader-screen"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: EXIT_DURATION, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="loader-glow" aria-hidden="true" />

          <div className="loader-content">
            <p className="loader-name" aria-label="Maddula Seeta Sravan Kumar">
              {NAME_PARTS.map((word, i) => (
                <span className="loader-word-wrap" key={word}>
                  <motion.span
                    className="loader-word"
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.15 + i * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </p>

            <motion.p
              className="loader-role"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Frontend Developer
            </motion.p>

            <motion.div
              className="loader-bar-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="loader-bar-track">
                <div
                  className="loader-bar-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="loader-progress-row">
                <span>Loading experience</span>
                <span className="loader-progress-num">{progress}%</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
