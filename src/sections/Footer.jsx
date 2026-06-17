import React from "react";
import { FaGithub, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import { footerQuickLinks, footerServiceLinks } from "../data/portfolioData";
import "./Footer.css";

const Footer = () => {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-inner">

          {/* BRAND */}
          <div className="footer-brand">
            <div className="nav-logo footer-logo">
              <span className="dot"></span>
              Sravan<span>Kumar</span>
            </div>
            <p>
              Building world-class digital experiences with vision and passion.
              Let's create something extraordinary together.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES LINKS */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {footerServiceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Sravan Kumar. All rights reserved.</p>
          <div className="social-row">
            <a href="https://github.com/maddulaseetasravankumar/" className="social-btn" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/maddula-seeta-sravan-kumar/" className="social-btn" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=maddulaseetasravankumar@gmail.com" className="social-btn" target="_blank" rel="noreferrer" aria-label="Gmail">
              <FaGoogle />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
