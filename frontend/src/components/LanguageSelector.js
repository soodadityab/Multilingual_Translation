import React from "react";
import "./LanguageSelector.css"; // New CSS for styling

function LanguageSelector() {
  return (
    <div className="language-selector">
      <div className="selector-card">
        <label className="selector-label">
          Input Language
          <select className="language-dropdown">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            {/* Add more language options as needed */}
          </select>
        </label>
      </div>
      <div className="selector-card">
        <label className="selector-label">
          Target Language
          <select className="language-dropdown">
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="ja">Japanese</option>
            {/* Add more language options as needed */}
          </select>
        </label>
      </div>
    </div>
  );
}

export default LanguageSelector;
