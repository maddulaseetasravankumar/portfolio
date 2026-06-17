import { useState } from "react";
import { motion } from "framer-motion";
import { projects, filterCategories } from "../data/portfolioData";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css";

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilter = (value) => {
    setActiveFilter(value);
  };

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.cat.includes(activeFilter));

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="portfolio-top">
          <div className="tag reveal">My Work</div>
          <div className="portfolio-header-row">
            <h2 className="section-head reveal">Projects</h2>
            <div className="filter-bar">
              {filterCategories.map((cat) => (
                <button
                  key={cat.value}
                  className={`filter-btn${activeFilter === cat.value ? " active" : ""}`}
                  onClick={() => handleFilter(cat.value)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* `key` forces a clean remount per filter so the stagger
            animation replays whenever the user switches categories */}
        <motion.div
          className="portfolio-grid"
          key={activeFilter}
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
