import { useRef } from "react";
import { FaPaperPlane, FaArrowRight, FaShieldAlt } from "react-icons/fa";
import HeroBackground from "../components/HeroBackground";
import "./Hero.css";

const Hero = () => {
  const heroRef = useRef(null);

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" ref={heroRef}>
      <div className="hero-grid-bg"></div>
      <HeroBackground targetRef={heroRef} />
      <div className="hero-glow"></div>

      <div className="container">
        <div className="hero-inner">
          {/* LEFT COLUMN */}
          <div className="hero-left">
            <div className="hero-badge">
              <span className="dot"></span>
              Available for Freelance Projects
            </div>

            <h1 className="hero-title">
              Hi, I'm Sravan Kumar –<br />
              <span className="highlight">Frontend</span> Developer
            </h1>

            <p className="hero-desc">
              I build high-performance digital experiences that drive growth, using clean code and
              visionary design to transform ideas into reality.
            </p>

            <div className="hero-actions">
              <a
                href="#contact"
                className="btn-primary"
                onClick={(e) => { e.preventDefault(); handleScroll("#contact"); }}
              >
                <FaPaperPlane /> Hire Me
              </a>
              <a
                href="#projects"
                className="btn-outline"
                onClick={(e) => { e.preventDefault(); handleScroll("#projects"); }}
              >
                View Work <FaArrowRight />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="hero-right">
            <div className="hero-cards">
              <div className="h-card accent">
                <div className="label">Experience</div>
                <div className="value">2+</div>
                <div className="desc">Years of expertise</div>
              </div>

              <div className="h-card img-card">
                <div className="placeholder">
                  <div className="orb"></div>
                </div>
              </div>

              <div className="h-card">
                <div className="label">Projects shipped</div>
                <div className="value">100+</div>
                <div className="desc">Worldwide clients</div>
              </div>

              <div className="h-card accent">
                <div className="label">Latest Experience</div>
                <div className="value">Nice Digitals</div>
                <div className="desc">Since March 2024</div>
              </div>

              <div className="h-card wide">
                <div className="icon">
                  <FaShieldAlt />
                </div>
                <div>
                  <div className="label">Quality Guarantee</div>
                  <div className="wide-desc">100% code quality & clean architecture</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
