import { motion } from "framer-motion";

/**
 * Generic scroll-reveal wrapper built on Framer Motion's `whileInView`.
 * Wrap any section/element to fade + slide it in once as it enters the
 * viewport. Works alongside the existing CSS `.reveal` utility used for
 * finer-grained child elements — the two don't conflict.
 */
const Reveal = ({
  children,
  delay = 0,
  y = 28,
  duration = 0.65,
  amount = 0.15,
  once = true,
  className,
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once, amount }}
    transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default Reveal;
