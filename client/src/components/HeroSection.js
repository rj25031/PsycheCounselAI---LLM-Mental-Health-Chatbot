import React from 'react';
import '../css/HeroSection.css';

const HeroSection = () => {
  const openChat = () => {
    window.open('/chat', '_blank');
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Your Mental Health Matter</h1>
        <p>You don't have to struggle in silence!</p>
        <button className="learn-more-btn" onClick={openChat}>
          <b>Chat with us</b>
          <span className="forward-arrow">➔</span>
        </button>
      </div>
      <div className="hero-image">
        <img src="\assets\images\Mental Health 1.jpg" alt="Mental Health" />
      </div>
    </section>
  );
};

export default HeroSection;
