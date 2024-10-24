import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
// import Cookies from 'js-cookie';
import '../css/register.css'; 

const RegistrationForm = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    age: '',
    address: ''
  });
  const [errorMessage, setErrorMessage] = useState(''); 
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (userData.password !== userData.confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    try {
      const user = new FormData();
      user.append('Name', userData.name);
      user.append('Email', userData.email);
      user.append('Phone', userData.phone);
      user.append('Age', userData.age);
      user.append('Address', userData.address);
      user.append('Password', userData.password); 

      const response = await axios.post('/api/user/register', user);

      console.log(response.data.message);

      setUserData({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        age: '',
        address: ''
      });
      setErrorMessage(''); 

      if (response.data.success) {
        navigate('/login'); 
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred during registration.');
    }
  };

  const handleClose = () => {
    navigate('/'); 
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content registration-modal">
        <button className="close-icon" onClick={handleClose}>
          &times;
        </button>
        <h2>Register </h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={userData.phone}
            onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Age"
            value={userData.age}
            onChange={(e) => setUserData({ ...userData, age: e.target.value })}
            required
          />
          <textarea
            placeholder="Address"
            value={userData.address}
            onChange={(e) => setUserData({ ...userData, address: e.target.value })}
            rows={3}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={userData.confirmPassword}
            onChange={(e) => setUserData({ ...userData, confirmPassword: e.target.value })}
            required
          />

          {errorMessage && <p className="error-message">{errorMessage}</p>}
          
          <button type="submit" className="submit-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
