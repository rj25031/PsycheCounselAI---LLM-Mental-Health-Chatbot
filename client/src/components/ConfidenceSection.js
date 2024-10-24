// src/components/ConfidenceSection.js
import React from 'react';
import '../css/ConfidenceSection.css'; // You will style this later

const ConfidenceSection = () => {
  return (
    <section className="confidence-section">
      <div className="confidence-content">
        <h2>
          We help you to <span className="highlight">grow confidence</span> at any age
        </h2>
        <p>
          Taking regular practice can induce structural changes in the brain which help reduce stress and enhance sleep quality.
        </p>
      </div>
      <div className="confidence-card">
        <img
          src="\assets\images\Mental Health 3.jpg"
          alt="Helping to Navigate"
          className="card-image"
        />
        <div className="card-content">
          <h3>Helping to Navigate</h3>
          <p>Reach out to programs from college to elementary school students.</p>
          <button href="#" className="card-link">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default ConfidenceSection;
