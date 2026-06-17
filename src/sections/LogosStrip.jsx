import React from "react";
import {
  FaWordpress,
  FaReact,
  FaJs,
  FaNodeJs,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaGit,
  FaGithub,
} from "react-icons/fa";
import { SiElementor } from "react-icons/si";
import "./LogosStrip.css";

const logoItems = [
  { icon: <FaWordpress />, label: "WordPress" },
  { icon: <SiElementor />, label: "Elementor" },
  { icon: <FaReact />, label: "React" },
  { icon: <FaJs />, label: "JavaScript" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <FaFigma />, label: "Figma" },
  { icon: <FaHtml5 />, label: "Html" },
  { icon: <FaCss3Alt />, label: "CSS" },
  { icon: <FaGit />, label: "Git" },
  { icon: <FaGithub />, label: "Github" },
];

// Duplicate for seamless loop
const allItems = [...logoItems, ...logoItems];

const LogosStrip = () => {
  return (
    <div className="logos-strip">
      <div className="logos-track">
        {allItems.map((item, i) => (
          <div className="logo-item" key={i}>
            {item.icon}
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogosStrip;
