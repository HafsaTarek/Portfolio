import "./Contact.css";
import { FaEnvelope, FaLinkedin, FaFileDownload } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container text-center">
        <h2 className="section-title">Contact Me</h2>
        <p className="contact-text">Let’s get in touch!</p>
        <div className="contact-links d-flex flex-column align-items-center gap-3 mt-4">
          <a
            href="mailto:your.email@example.com"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="icon" /> hafsatarek4@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/your-profile"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />{" "}
            https://www.linkedin.com/in/hafsa-hikal-87a591318/
          </a>

          <a href="/path-to-your-cv.pdf" className="contact-link" download>
            <FaFileDownload className="icon" />
            https://drive.google.com/file/d/1cSxQGtXhXnAeaQk6D8WscZhCxFckGw9P/view?usp=drive_link
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
