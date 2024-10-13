import React, { useState } from "react";
import TutorialPopup from "./TutorialPopup";
import "./TutorialButton.css";

const TutorialButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <button className="floating-tutorial-btn" onClick={handleOpenPopup}>
        <div className="lightbulb-icon"></div>
      </button>
      {showPopup && <TutorialPopup onClose={handleClosePopup} />}
    </>
  );
};

export default TutorialButton;
