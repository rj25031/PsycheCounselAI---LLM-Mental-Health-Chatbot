import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Your Mental Health Matter</h1>
        <p>You don't have to struggle in silence!</p>
        <button className="learn-more-btn">
        </button>
      </div>
      <div className="hero-image">
        <img src="/assets/Mental Health.jpg" alt="Mental Health" />
      </div>
    </section>
  );
};

export default HeroSection;
