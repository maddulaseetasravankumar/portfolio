import React from "react";
import {
  FaWordpress,
  FaMobileAlt,
  FaShoppingCart,
  FaTachometerAlt,
  FaShieldAlt,
  FaSearch,
  FaArrowRight,
} from "react-icons/fa";
import { services } from "../data/portfolioData";
import "./Services.css";

const iconMap = {
  wordpress: <FaWordpress />,
  mobile: <FaMobileAlt />,
  cart: <FaShoppingCart />,
  speed: <FaTachometerAlt />,
  shield: <FaShieldAlt />,
  search: <FaSearch />,
};

const Services = () => {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="services-header">
          <div>
            <div className="tag reveal">What I Do</div>
            <h2 className="section-head reveal">
              Discover All The
              <br />
              Powerful Services
            </h2>
          </div>
          <p className="section-sub reveal">
            Unlock solutions designed to streamline workflows, enhance performance,
            and help your ideas reach the world faster.
          </p>
        </div>

        <div className="services-grid">
          {services.map((svc) => (
            <div className="service-card reveal" key={svc.id}>
              <div className="service-icon">{iconMap[svc.icon]}</div>
              <div className="service-title">{svc.title}</div>
              <div className="service-desc">{svc.desc}</div>
              <div className="service-arrow">
                Explore <FaArrowRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
