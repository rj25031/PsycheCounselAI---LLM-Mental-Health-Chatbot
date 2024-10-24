// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import RegistrationForm from './auth/RegistrationForm'; 
import './css/index.css';
import LoginForm from './auth/LoginForm';
import StressPredictor from './pages/StressPredictor';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Home page route */}
          <Route path="/" element={<HeroSection />} />
          <Route path="/stress" element={<StressPredictor />} />
          
          {/* Registration page route */}
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
