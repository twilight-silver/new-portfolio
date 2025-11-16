import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Contact.css";
import { FaWhatsapp } from "react-icons/fa6";

const Contact = ({id}) => {
  const sendEmail = (subject) => {
    const email = "techswiftys20@gmail.com";
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
      subject
    )}`;

    // This opens a new browser tab with the email draft
    window.open(url, "_blank");
  };

  return (
    <section className="contact" id={id}>
      <div>
        <h3 className="headline-header">CONTACT</h3>
        <h2 className="headline">
          Are you ready to tell{" "}
          <span className="headline-accent">your story?</span>
        </h2>
      </div>
      <div className="contact-container">
        {/* Left side */}
        <div className="contact-info">
          <p>
            I'm always looking for an opportunity to create impactful and
            unforgettable experiences. If you're building a team or product with
            a similar vision, let's start a conversation.
            <br />
            <br />
            Select an option that aligns best with your goals, or find me on my
            social media handles... Can't wait to hear from you
          </p>

          <div className="socials">
            <a href="#" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
            <a
              href="https://www.linkedin.com/in/adepeju-adekunle-50b489283/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right side */}
        <div className="contact-actions">
          <button
            className="contact-btn"
            onClick={() => sendEmail("Recruitment")}
          >
            Let's talk careers
          </button>
          <button
            className="contact-btn"
            onClick={() => sendEmail("Collaboration")}
          >
            Start a partnership
          </button>
          <button
            className="contact-btn"
            onClick={() => sendEmail("Projects/Hiring")}
          >
            Bring your idea to life
          </button>
          <button
            className="contact-btn"
            onClick={() => sendEmail("General Enquiries")}
          >
            Start a conversation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
