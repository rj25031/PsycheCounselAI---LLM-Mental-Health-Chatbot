// src/components/StressCheckSection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/StressCheckSection.css';

const StressCheckSection = () => {
  const navigate = useNavigate();

  const handleCheck = () => {
    navigate('/questionnaire'); // Navigate to the questionnaire page
  };

  return (
    <div className="stress-check-container">
      <div className="stress-image">
        <img 
          src="\assets\images\Mental Health 2.jpg"
          alt="Stress Levels"
        />
      </div>
      <div className="stress-info">
        <h1>Discover Your Stress Level</h1>
        <p>
          Take a quick test to understand your mental well-being <br />
          – it's fast, free, and confidential.
        </p>
        <button className="check-button" onClick={handleCheck}>
          Let's Check →
        </button>
      </div>
    </div>
  );
};

export default StressCheckSection;
