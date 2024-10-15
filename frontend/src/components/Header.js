import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <header className="custom-header">
      <div className="header-content">
        <h1 className="header-title">Lexify.ai</h1> {/* Centered title */}
        <Link to="/" className="home-icon-link">
          <FaHome className="home-icon" /> {/* Home icon for navigation */}
        </Link>
      </div>
      <div className="header-background">
        <div className="wave-container">
          <svg
            className="wave"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#000"
              fillOpacity="1"
              d="M0,160L60,186.7C120,213,240,267,360,266.7C480,267,600,213,720,213.3C840,213,960,267,1080,245.3C1200,224,1320,128,1380,80L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;
