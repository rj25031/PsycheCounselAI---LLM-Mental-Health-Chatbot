// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StressCheckSection from './components/StressCheckSection';
import ConfidenceSection from './components/ConfidenceSection'; // Import new section
import Questionnaire from './components/Questionnaire';
import Footer from './components/Footer';
import RegistrationForm from './components/RegistrationForm';
import ChatInterface from './components/ChatInterface';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <HeroSection />
                <StressCheckSection />
                <ConfidenceSection /> {/* Add ConfidenceSection here */}
              </>
            } 
          />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/chat" element={<ChatInterface />} />
          <Route path="/questionnaire" element={<Questionnaire />} /> {/* New route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
