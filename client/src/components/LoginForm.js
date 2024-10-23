import React, { useState } from 'react';
import '../css/LoginForm.css';

const LoginForm = ({ onClose }) => {
  const [patientID, setPatientID] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logging in with Patient ID: ${patientID}`);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-icon" onClick={onClose}>
          &times;
        </button>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Patient ID"
            value={patientID}
            onChange={(e) => setPatientID(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        <p>
          Not registered? <a href="/register">Register Now !!!</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
