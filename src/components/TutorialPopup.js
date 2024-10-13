import React, { useState } from "react";
import "./TutorialPopup.css";

const TutorialPopup = ({ onClose }) => {
  // List of video URLs
  const videoUrls = [
    "/Videos/1.mp4",
    "/Videos/2.mp4",
    "/Videos/3.mp4"
     
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);


  const handleNext = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videoUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videoUrls.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="tutorial-popup">
      <button className="close-btn" onClick={onClose}>
        X
      </button>
      <div className="video-container">
        <video key={currentVideoIndex} width="400" controls>
          <source src={videoUrls[currentVideoIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="navigation-buttons">
        <button onClick={handlePrev}>⟸ Previous</button>
        <button onClick={handleNext}>Next ⟹</button>
      </div>
    </div>
  );
};

export default TutorialPopup;
