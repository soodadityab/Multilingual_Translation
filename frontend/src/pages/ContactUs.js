import React from "react";
import "./ContactUs.css"; // Import CSS for Contact Us page styling

function ContactUs() {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <div className="contact-content">
        <p>
          We'd love to hear from you! Whether you have a question, feedback, or
          need support, feel free to reach out to us.
        </p>
        <ul className="contact-list">
          <li>
            Email:{" "}
            <a href="mailto:support@translexico.ai">support@translexico.ai</a>
          </li>
          <li>Phone: +1 (123) 456-7890</li>
          <li>Address: 123 Language Lane, Multilingual City, ML 45678</li>
        </ul>
        <p>Or follow us on our social media channels:</p>
        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>{" "}
          |
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Twitter
          </a>{" "}
          |
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
