import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import UploadComponent from "./components/UploadComponent";
import LiveModeComponent from "./components/LiveModeComponent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LanguageSelectorContainer from "./components/LanguageSelectorContainer";
import AboutUs from "./pages/AboutUs"; // Import About Us page
import ContactUs from "./pages/ContactUs"; // Import Contact Us page

function App() {
  const [mode, setMode] = React.useState("");

  const renderComponent = () => {
    switch (mode) {
      case "upload":
        return <UploadComponent />;
      case "live":
        return <LiveModeComponent />;
      default:
        return (
          <div className="mode-selection">
            <button className="mode-button" onClick={() => setMode("upload")}>
              Upload Video
            </button>
            <button className="mode-button" onClick={() => setMode("live")}>
              Live Video
            </button>
          </div>
        );
    }
  };

  return (
    <Router>
      <div className="App">
        <Header /> {/* Include header with Home icon */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LanguageSelectorContainer />
                <main className="main-container">
                  {renderComponent()}
                  {mode && (
                    <button className="back-button" onClick={() => setMode("")}>
                      Back to Home
                    </button>
                  )}
                </main>
                <div className="tagline">
                  <p>Real-time translation powered by AI</p>
                </div>
              </>
            }
          />
          <Route path="/about" element={<AboutUs />} />{" "}
          {/* About Us page route */}
          <Route path="/contact" element={<ContactUs />} />{" "}
          {/* Contact Us page route */}
        </Routes>
        <Footer /> {/* Links in footer will handle navigation */}
      </div>
    </Router>
  );
}

export default App;
