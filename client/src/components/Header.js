// src/components/Header.js
import React from 'react';
import './Header.css'; // Create styles later

const Header = () => {
  return (
    <header className="header">
      <div className="logo">PsycheCounsel.AI</div>
      <nav className="nav-links">
        <a href="#">About Us</a>
        <a href="#">Work With Us</a>
        <a href="#">Events</a>
        <a href="#">Contact Us</a>
      </nav>
      <button className="cta-button">Get Started</button>
    </header>
  );
};

export default Header;
