import React from "react";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">

        <h2 className="section-heading">Contact</h2>

        <p className="contact-intro">
          Open to firmware and embedded systems opportunities.
          Feel free to reach out.
        </p>

        <div className="contact-details">
          <div className="contact-item">
            <span>Email</span>
            <a href="mailto:your.email@example.com">
              your.email@example.com
            </a>
          </div>

          <div className="contact-item">
            <span>LinkedIn</span>
            <a href="https://www.linkedin.com/in/your-link" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/your-link
            </a>
          </div>

          <div className="contact-item">
            <span>GitHub</span>
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
              github.com/your-username
            </a>
          </div>
        </div>

        <div className="resume-button-wrapper">
          <a
            href="/Kamyashree_T_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;