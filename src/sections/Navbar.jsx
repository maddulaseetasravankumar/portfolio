import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaGoogle, FaTimes } from "react-icons/fa";
import { navLinks } from "../data/portfolioData";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMenu = () => {
    setMenuOpen(true);
    setHamburgerOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setHamburgerOpen(false);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    closeMenu();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav id="navbar" className={scrolled ? "scrolled" : ""}>
        <div className="nav-inner">
          <a href="#hero" className="nav-logo" onClick={(e) => handleNavClick(e, "#hero")}>
            <span className="dot"></span>
            Sravan<span>Kumar</span>
          </a>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-cta">
            <a href="#contact" className="btn-primary" onClick={(e) => handleNavClick(e, "#contact")}>
              Hire Me
            </a>
            <button
              className={`hamburger${hamburgerOpen ? " open" : ""}`}
              onClick={openMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <button className="mobile-close" onClick={closeMenu} aria-label="Close menu">
          <FaTimes />
        </button>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-link"
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <div className="mobile-socials">
          <a href="https://github.com/maddulaseetasravankumar/" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/maddula-seeta-sravan-kumar/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://wa.me/916300892375" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
