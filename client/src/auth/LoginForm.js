import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import '../css/LoginForm.css';

const LoginForm = ({ onClose }) => {
  const [patientID, setPatientID] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = new FormData();
      user.append("Email", patientID);  
      user.append("Password", password);

      const response = await axios.post('/api/user/log-in', user);  
      console.log(response);

      Cookies.set('token', response.data.token, { expires: 10, path: '/', secure: true, sameSite: 'strict' });

      setPatientID('');
      setPassword('');

      if (response.data.success) {
        navigate('/');  
      } else {
        alert('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred during login. Please try again later.');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content login-modal">
        <button className="close-icon" onClick={onClose}>
          &times;
        </button>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email ID"
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
