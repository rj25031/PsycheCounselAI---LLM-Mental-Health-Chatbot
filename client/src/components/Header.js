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
      <header className="text-black p-5 flex items-center justify-between flex-wrap">
        {/* Logo */}
        <a className="text-2xl font-bold">
          PsycheCounsel.AI
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <NavLink to="/" className="transition-colors">About Us</NavLink>
          <NavLink to="/stress" className="transition-colors">Work With Us</NavLink>
          <NavLink to="/" className="transition-colors">Events</NavLink>
          <NavLink to="/" className="transition-colors">Contact Us</NavLink>
        </nav>

        <div>
          {isLoggedIn ? (
            <button
              className="bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-4 rounded-full text-sm"
              onClick={handleLogout}
            >
              <b>Logout</b>
            </button>
          ) : (
            <button
              className="bg-yellow-400 hover:bg-yellow-500 text-black py-5 px-7 rounded-full text-base"
              onClick={handleOpenModal}
            >
              <b>Get Started</b>
            </button>
          )}
        </div>
        
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-black-300"
          onClick={() => setShowModal(!showModal)}
        >
          ☰
        </button>

        {/* User Action */}
        
      </header>

      {/* Mobile Menu */}
      {showModal && (
        <nav className="flex flex-col bg-white-700 text-black text-lg p-4 space-y-4 md:hidden">
          <NavLink to="/" className="hover:text-yellow-300 transition-colors" onClick={handleCloseModal}>
            About Us
          </NavLink>
          <NavLink to="/stress" className="hover:text-yellow-300 transition-colors" onClick={handleCloseModal}>
            Work With Us
          </NavLink>
          <NavLink to="/" className="hover:text-yellow-300 transition-colors" onClick={handleCloseModal}>
            Events
          </NavLink>
          <NavLink to="/" className="hover:text-yellow-300 transition-colors" onClick={handleCloseModal}>
            Contact Us
          </NavLink>
        </nav>
      )}

      {/* Login Modal */}
      {showModal && <LoginForm onClose={handleCloseModal} />}
    </>
  );
};

export default Header;
