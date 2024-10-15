import React, { useState } from "react";
import { FaPlay, FaPause, FaStop } from "react-icons/fa"; // Import FontAwesome icons
import "./LiveModeComponent.css"; // Import CSS for additional styling

function LiveModeComponent() {
  const [isRecording, setIsRecording] = useState(false); // Track recording state
  const [isPaused, setIsPaused] = useState(false); // Track pause state

  const handleStart = () => {
    setIsRecording(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleStop = () => {
    setIsRecording(false);
    setIsPaused(false);
  };

  return (
    <div className="live-box">
      <h2>Live Mode</h2>
      <div className="live-mode-buttons">
        {/* Play button */}
        <button
          className={`icon-button ${isRecording && !isPaused ? "active" : ""}`}
          onClick={handleStart}
          disabled={isRecording}
        >
          <FaPlay />
        </button>

        {/* Pause/Resume button */}
        <button
          className={`icon-button ${isPaused ? "active" : ""}`}
          onClick={handlePause}
          disabled={!isRecording}
        >
          <FaPause />
        </button>

        {/* Stop button */}
        <button
          className={`icon-button ${!isRecording ? "active" : ""}`}
          onClick={handleStop}
          disabled={!isRecording}
        >
          <FaStop />
        </button>
      </div>
    </div>
  );
}

export default LiveModeComponent;
