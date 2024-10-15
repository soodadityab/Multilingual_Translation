import React from "react";
import LanguageSelector from "./LanguageSelector";
import "./LanguageSelectorContainer.css"; // New CSS file for styling

function LanguageSelectorContainer() {
  return (
    <div className="language-container">
      <div className="language-box">
        <h2>Choose Your Languages</h2>
        <LanguageSelector />
      </div>
    </div>
  );
}

export default LanguageSelectorContainer;
