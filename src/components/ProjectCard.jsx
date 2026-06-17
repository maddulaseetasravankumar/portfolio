import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import LazyImage from "./LazyImage";

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Single project card. Pulled out of Projects.jsx so the grid/filter
 * logic stays simple and the card markup is reusable. Adds:
 *  - entrance animation driven by the parent's stagger container
 *  - a subtle lift + glow border on hover
 *  - an animated "live demo" link
 *  - lazy-loaded image via <LazyImage />
 */
const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="portfolio-item portfolio-item-glow"
      variants={cardVariants}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="portfolio-img">
        {project.image ? (
          <LazyImage
            src={project.image}
            alt={project.title}
            className="portfolio-real-img"
          />
        ) : (
          <div className="p-bg" style={{ background: project.gradient }}>
            <span className="p-icon">🌐</span>
          </div>
        )}
      </div>

      <div className="portfolio-overlay">
        <div className="overlay-title">{project.title}</div>
        <div className="overlay-tag">{project.catLabel}</div>

        <motion.a
          href={project.url}
          className="overlay-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${project.title}`}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.92 }}
          transition={{ duration: 0.2 }}
        >
          <FaExternalLinkAlt />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
