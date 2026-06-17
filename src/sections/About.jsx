import React, { useEffect, useRef } from "react";
import { FaUser, FaStar, FaDownload } from "react-icons/fa";
import { skillPills, expBars } from "../data/portfolioData";
import "./About.css";

const About = () => {
  const expBarRef = useRef(null);
  const barsAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !barsAnimated.current) {
          barsAnimated.current = true;
          const fills = entry.target.querySelectorAll(".bar-fill");
          fills.forEach((bar) => {
            bar.style.width = bar.dataset.width + "%";
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (expBarRef.current) observer.observe(expBarRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-inner">

          {/* IMAGE / PROFILE SIDE */}
          <div className="about-img-wrap reveal">
            <div className="about-img-frame">
              <div className="profile-placeholder">
                  <img src="/profile-gibile-pic.webp" alt="Profile" loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="about-badge">
              <span className="big">2+</span>
              <span className="small">Years Experience</span>
            </div>
            <div className="about-corner">
              <FaStar className="corner-star" />
              <span>Top Rated Developer</span>
            </div>
          </div>

          {/* TEXT SIDE */}
          <div className="about-text reveal">
            <div className="tag">About Me</div>
            <h2 className="section-head">Crafting Digital Solutions With Vision</h2>
            <p className="section-sub">
              I'm a passionate WordPress & full-stack developer with over a decade of experience
              building robust, scalable, and conversion-focused websites for businesses globally.
            </p>
            <p className="section-sub" style={{ marginTop: "1rem" }}>
              My philosophy: code should be clean, design should be intentional, and every pixel
              should serve a purpose. I don't just build websites — I build digital foundations for growth.
            </p>

            <div className="skills-wrap">
              {skillPills.map((skill) => (
                <span className="skill-pill" key={skill}>{skill}</span>
              ))}
            </div>

            <div className="exp-bar" ref={expBarRef}>
              {expBars.map((bar) => (
                <div className="bar-item" key={bar.label}>
                  <label>
                    <span>{bar.label}</span>
                    <span>{bar.width}%</span>
                  </label>
                  <div className="bar-track">
                    <div className="bar-fill" data-width={bar.width}></div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "2rem" }}>
              <a href="Maddula-Seeta-Sravan-Kumar-Fullstack-Developer-Resume.pdf" className="btn-primary" download>
                <FaDownload /> Download CV
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
