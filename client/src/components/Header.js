import React, { useState, useEffect } from 'react';
import '../css/Header.css';
import LoginForm from '../auth/LoginForm';
import Cookies from 'js-cookie';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    const token = Cookies.get('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    Cookies.remove('token');
    setIsLoggedIn(false);
    alert('Logged out successfully'); 
  };

  return (
    <>
      <header className="header">
        <div className="logo">PsycheCounsel.AI</div>
        <nav className="nav-links">
          <NavLink to="/">About Us</NavLink>
          <NavLink to="/stress">Work With Us</NavLink>
          <NavLink to="/">Events</NavLink>
          <NavLink to="/">Contact Us</NavLink>
        </nav>
        {isLoggedIn ? (
          <button className="button" onClick={handleLogout}>
            <b>Logout</b>
          </button>
        ) : (
          <button className="button" onClick={handleOpenModal}>
            <b>Get Started</b>
          </button>
        )}
      </header>

      {showModal && <LoginForm onClose={handleCloseModal} />}
    </>
  );
};

export default Header;
