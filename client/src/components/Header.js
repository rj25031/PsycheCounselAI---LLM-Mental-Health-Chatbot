import React, { useState } from 'react';
import '../css/Header.css';
import LoginForm from './LoginForm';
const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <header className="header">
        <div className="logo">PsycheCounsel.AI</div>
        <nav className="nav-links">
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Blog</a>
          <a href="#">FAQs</a>
        </nav>
        <button class="button" onClick={handleOpenModal}>
          <b>Get Started</b>
        </button>
      </header>

      {showModal && <LoginForm onClose={handleCloseModal} />}
    </>
  );
};

export default Header;
