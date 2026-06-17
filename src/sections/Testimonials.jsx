import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { testimonialSlides } from "../data/portfolioData";
import "./Testimonials.css";

const Stars = () => <span className="t-stars">★★★★★</span>;

const Testimonials = () => {
  const testimonials = testimonialSlides.flat();

  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  const autoRef = useRef(null);

  // Total Slides
  const total = testimonials.length - (isMobile ? 0 : 1);

  // Responsive Check
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slider Navigation
  const goTo = (n) => {
    if (n < 0) {
      setCurrent(total - 1);
    } else if (n >= total) {
      setCurrent(0);
    } else {
      setCurrent(n);
    }
  };

  // Auto Slide
  useEffect(() => {
    autoRef.current = setInterval(() => {
      goTo(current + 1);
    }, 5000);

    return () => clearInterval(autoRef.current);
  }, [current]);

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <div className="testimonials-head">
          <div className="tag reveal">Client Love</div>

          <h2 className="section-head reveal">
            What Clients Say
          </h2>
        </div>

        <div className="slider-wrap reveal">
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${
                current * (isMobile ? 100 : 50)
              }%)`,
            }}
          >
            {testimonials.map((t) => (
              <div className="slide" key={t.id}>
                <div className="testimonial-card">
                  <div className="quote">"</div>

                  <p className="testimonial-text">
                    {t.text}
                  </p>

                  <div className="testimonial-meta">
                    <div className="t-avatar">
                      {t.initials}
                    </div>

                    <div>
                      <div className="t-name">
                        {t.name}
                      </div>

                      <div className="t-role">
                        {t.role}
                      </div>

                      <Stars />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="slider-controls">
            <button
              className="slider-btn"
              onClick={() => goTo(current - 1)}
              aria-label="Previous slide"
            >
              <FaArrowLeft />
            </button>

            <div className="slider-dots">
              {Array.from({ length: total }).map((_, i) => (
                <div
                  key={i}
                  className={`dot${
                    i === current ? " active" : ""
                  }`}
                  onClick={() => goTo(i)}
                  role="button"
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              className="slider-btn"
              onClick={() => goTo(current + 1)}
              aria-label="Next slide"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;