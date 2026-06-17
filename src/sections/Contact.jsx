import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaPaperPlane,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaGoogle,
  FaCheck,
} from "react-icons/fa";

import "./Contact.css";

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  // Handle Form Submit
  const handleSubmit = (e) => {

    e.preventDefault();

    emailjs.send(
      "service_wyn7y0r",
      "template_rfakx2r",
      form,
      "TqYTccsTKh6AMU7Wd"
    )

    .then(() => {

      setSent(true);

      setTimeout(() => {

        setSent(false);

        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

      }, 3000);

    })

    .catch((error) => {

      console.log(error);

      alert("Failed to send message");

    });

  };

  return (

    <section className="section" id="contact">

      <div className="container">

        {/* TOP */}

        <div className="contact-top">

          <div className="tag reveal">
            Get In Touch
          </div>

          <h2 className="section-head reveal">
            Let's Work Together
          </h2>

          <p className="section-sub reveal">
            Ready to bring your vision to life? I'm currently taking on new projects.
            Let's talk about what we can build.
          </p>

        </div>

        {/* CONTACT INNER */}

        <div className="contact-inner">

          {/* FORM */}

          <div className="contact-form-wrap reveal">

            <h3 className="contact-form-title">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit}>

              {/* NAME */}

              <div className="form-group">

                <label>Your Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  value={form.name}
                  onChange={handleChange}
                />

              </div>

              {/* EMAIL */}

              <div className="form-group">

                <label>Email Address</label>

                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  value={form.email}
                  onChange={handleChange}
                />

              </div>

              {/* SUBJECT */}

              <div className="form-group">

                <label>Subject</label>

                <input
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry"
                  value={form.subject}
                  onChange={handleChange}
                />

              </div>

              {/* MESSAGE */}

              <div className="form-group">

                <label>Message</label>

                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  value={form.message}
                  onChange={handleChange}
                />

              </div>

              {/* BUTTON */}

              <button
                type="submit"
                className={`btn-primary submit-btn ${sent ? "sent" : ""}`}
                style={{
                  width: "100%",
                  justifyContent: "center",
                }}
              >

                {sent ? (
                  <>
                    <FaCheck />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}

              </button>

            </form>

          </div>

          {/* CONTACT INFO */}

          <div className="contact-info reveal">

            <div>

              <h3 className="contact-form-title">
                Contact Information
              </h3>

              <div className="contact-details-list">

                {/* EMAIL */}

                <div className="contact-detail">

                  <div className="c-icon">
                    <FaEnvelope />
                  </div>

                  <div>

                    <div className="c-label">
                      Email
                    </div>

                    <div className="c-value">

                      <a
                        href="mailto:maddulaseetasravankumar@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        maddulaseetasravankumar@gmail.com
                      </a>

                    </div>

                  </div>

                </div>

                {/* PHONE */}

                <div className="contact-detail">

                  <div className="c-icon">
                    <FaPhone />
                  </div>

                  <div>

                    <div className="c-label">
                      Phone
                    </div>

                    <div className="c-value">

                      <a href="tel:+916300892375">
                        +91 (630) 089-2375
                      </a>

                    </div>

                  </div>

                </div>

                {/* LOCATION */}

                <div className="contact-detail">

                  <div className="c-icon">
                    <FaMapMarkerAlt />
                  </div>

                  <div>

                    <div className="c-label">
                      Location
                    </div>

                    <div className="c-value">
                      Rajahmundry, Andhra Pradesh, India
                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* MAP */}

            <div className="map-embed">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61048.03499271908!2d81.7626073025044!3d16.99901999119366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a3f2440c9fff%3A0x86b24503e305ca21!2sRajamahendravaram%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1779111180399!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location map"
              />

            </div>

            {/* SOCIAL */}

            <div>

              <p className="social-label">
                Follow me on social
              </p>

              <div className="social-row">

                <a
                  href="https://github.com/maddulaseetasravankumar/"
                  className="social-btn"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/maddula-seeta-sravan-kumar/"
                  className="social-btn"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://wa.me/916300892375"
                  className="social-btn"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=maddulaseetasravankumar@gmail.com"
                  className="social-btn"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Gmail"
                >
                  <FaGoogle />
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
};

export default Contact;