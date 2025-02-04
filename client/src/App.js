// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './auth/RegistrationForm'; 
import LoginForm from './auth/LoginForm';
import StressQuestions from './pages/StressQuestions';
import Home from './pages/Home';
import ChatInterface from './pages/ChatInterface';

import './css/index.css';
import './css/App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* page route */}
          <Route path="/" element={<Home />} />
          <Route path="/stress" element={<StressQuestions/>} />
          <Route path="/chat" element={<ChatInterface />} />
          
          {/* Registration route */}
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
