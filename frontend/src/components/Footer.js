import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
        <li>
          <a href="/schedule">Schedule an Appointment</a>
        </li>
        {/* Additional footer links can be added here */}
      </ul>
    </footer>
  );
}

export default Footer;
