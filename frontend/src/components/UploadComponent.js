import React, { useState } from "react";
import axios from "axios";
import { FaCloudUploadAlt, FaCheckCircle } from "react-icons/fa"; // Import new icons
import "./UploadComponent.css"; // New CSS file for UploadComponent styling

function UploadComponent() {
  const [file, setFile] = useState(null);
  const [transcription, setTranscription] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState(false); // Track upload status

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setUploadSuccess(false); // Reset upload status on new file selection
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", file);

    axios
      .post("http://localhost:5000/upload", formData)
      .then((response) => {
        setTranscription(response.data.transcription);
        setUploadSuccess(true); // Mark upload as successful
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
        setUploadSuccess(false);
      });
  };

  return (
    <div className="upload-box">
      <h2>Upload Video</h2>
      <div className="upload-controls">
        <label className="file-input-label">
          <FaCloudUploadAlt className="upload-icon" /> {/* Cloud upload icon */}
          <input
            type="file"
            onChange={handleFileChange}
            className="file-input"
          />
          {file ? (
            <span className="file-name">{file.name}</span>
          ) : (
            "Choose a file..."
          )}
        </label>
        <button
          className="upload-button"
          onClick={handleUpload}
          disabled={!file}
        >
          {uploadSuccess ? (
            <FaCheckCircle className="success-icon" />
          ) : (
            "Upload"
          )}{" "}
          {/* Use check icon on success */}
        </button>
      </div>
      {transcription && (
        <div className="transcription-output">
          <h3>Transcription</h3>
          <p>{transcription}</p>
        </div>
      )}
    </div>
  );
}

export default UploadComponent;
