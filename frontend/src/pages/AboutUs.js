import React from "react";
import "./AboutUs.css"; // Import CSS for About Us page styling

function AboutUs() {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <div className="about-content">
        <p>
          Welcome to <strong>TransLexico.ai</strong>, your trusted partner for
          real-time multilingual transcription and translation. Our mission is
          to bridge the gap between languages using cutting-edge AI technology,
          ensuring that language barriers are a thing of the past.
        </p>
        <p>
          Founded by a team of language enthusiasts and AI experts, we believe
          in the power of communication. Our platform leverages advanced speech
          recognition and translation algorithms to provide seamless, accurate,
          and instant translation services.
        </p>
        <p>
          Whether you're a business looking to connect with global audiences or
          an individual needing quick translation support, we're here to help
          you communicate effortlessly.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
