import axios from 'axios';
import React, { useState } from 'react';
import { MdArrowOutward } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const [showLogin, setShowLogin] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);
    const [loginData, setLoginData] = useState({ patientID: '', password: '' });
    const [signupData, setSignupData] = useState({ name: '', age: '', email: '', phone: '', password: '', confirmPassword: '' });

    const handleLogin = async () => {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', {
                email: loginData.patientID,
                password: loginData.password
            });
            console.log(res.data.token);
            setShowLogin(false);
        } catch (err) {
            console.error(err);
        }
    };

    const handleSignup = async () => {
        try {
            const { confirmPassword, ...rest } = signupData;
            const res = await axios.post('http://localhost:5000/api/auth/register', rest);
            console.log(res.data.token);
            setShowLogin(false);
        } catch (err) {
            console.error(err);
        }
    };

    return (
      <>
        <nav className="flex items-center justify-between bg-cream p-4 md:p-6">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <NavLink to='/'><img src="/B Logo.svg" alt="Logo" className="w-70"/></NavLink>
          </div>
          {/* Navigation Links */}
          <div className="hidden md:flex gap-10 text-gray-700 text-lg font-medium">
            <NavLink to="/tech" className="hover:underline">Tech</NavLink>
            <NavLink to="/about" className="hover:underline">About</NavLink>
            <NavLink to= "/chat" className="hover:underline">Chat with Simba</NavLink>
          </div>
          
          {/* Register Now Button */}
          <button onClick={() => { setShowLogin(true); setIsRegistering(false); }} className="flex gap-2 ml-4 px-6 py-4 rounded-full font-semibold bg-yellow hover:bg-yellow-200 cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-[5px_5px_rgba(255,_239,_184,_0.7),_10px_10px_rgba(255,_230,_150,_0.5),_15px_15px_rgba(255,_220,_120,_0.3)]">
            Get Started <MdArrowOutward className='size-6'/>
          </button>

        </nav>

        {/* Login / Registration Popup */}
        {showLogin && (
          <div> 
            <div className="fixed inset-0 flex items-center justify-center bg-opacity-90 backdrop-blur-sm">
              <div className="bg-white rounded-lg shadow-lg p-8 h-150 w-150 relative">
                <button onClick={() => setShowLogin(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                  <FaTimes className="size-5" />
                </button>
                {isRegistering ? (
                  <>
                    <h2 className="text-5xl font-bold text-purple-700 mb-4">Sign Up</h2>
                    <p className="text-gray-600 mb-4">Create your account</p>
                    <input
                      value={signupData.name}
                      onChange={e => setSignupData({ ...signupData, name: e.target.value })}
                      type="text"
                      placeholder="Full Name"
                      className="w-full p-2 mb-3 border rounded-md"
                    />
                    <input type="number" placeholder="Age" className="w-full p-2 mb-3 border rounded-md" />
                    <input type="email" placeholder="Email" className="w-full p-2 mb-3 border rounded-md" />
                    <input type="tel" placeholder="Phone Number" className="w-full p-2 mb-3 border rounded-md" />
                    <input type="password" placeholder="Password" className="w-full p-2 mb-3 border rounded-md" />
                    <input type="password" placeholder="Confirm Password" className="w-full p-2 mb-3 border rounded-md" />
                    <button onClick={handleSignup} className="w-full bg-purple-700 text-white p-2 rounded-md hover:bg-purple-800">
                      Sign Up
                    </button>
                    <p className="text-center text-sm text-gray-600 mt-4">Already have an account? <a href="#" onClick={() => setIsRegistering(false)} className="text-purple-600 hover:underline">Sign In</a></p>
                  </>
                ) : (
                  <>
                    <h2 className="text-5xl font-bold text-purple-700 mt-30">Welcome!</h2>
                    <p className="text-gray-600 mb-4">Please login to your account</p>
                    <input
                      value={loginData.patientID}
                      onChange={e => setLoginData({ ...loginData, patientID: e.target.value })}
                      type="text"
                      placeholder="Patient ID"
                      className="w-full p-2 mb-3 border rounded-md"
                    />
                    <input type="password" placeholder="Password" className="w-full p-2 mb-3 border rounded-md" />
                    <div className="flex justify-between items-center mb-4">
                      <label className="flex items-center text-sm">
                        <input type="checkbox" className="mr-2" /> Remember me
                      </label>
                      <a href="#" className="text-purple-600 text-sm hover:underline">Forgot password?</a>
                    </div>
                    <button onClick={handleLogin} className="w-full bg-purple-700 text-white p-2 rounded-md hover:bg-purple-800">
                      Sign In
                    </button>
                    <p className="text-center text-sm text-gray-600 mt-4">Don't have an account? <a href="#" onClick={() => setIsRegistering(true)} className="text-purple-600 hover:underline">Sign Up</a></p>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </>
    );
}
