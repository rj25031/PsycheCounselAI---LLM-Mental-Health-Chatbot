import React from "react";
import { useNavigate, NavLink } from 'react-router-dom';
import Layout from "../components/Layout";
import h1Img from "../images/Mental Health 1.jpg";
import h2Img from "../images/Mental Health 2.jpg";
import h3Img from "../images/Mental Health 3.jpg";

function Home() {
  const navigate = useNavigate();

  const handleCheck = () => {
    navigate('/stress-questions'); 
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="flex justify-between p-10 bg-blue-100">
        <div className="max-w-1/2">
          <h1 className="text-9xl mb-2.5 font-customFont1">Your Mental Health Matters</h1>
          <p className="text-4xl text-gray-700 mb-5">You don't have to struggle in silence!</p>
          <NavLink className="bg-yellow-300 text-black py-5 px-8 flex items-center w-1/4 rounded-full hover:bg-yellow-400 transition-colors" to="/stress">
            <b>Chat with us</b>
            <span className="ml-2 text-lg transform transition-transform hover:translate-x-1">➔</span>
          </NavLink>
        </div>
        <div>
          <img src={h1Img} alt="Mental Health" className="max-w-full rounded-2xl" />
        </div>
      </section>

      {/* Stress Section */}
      <section className="flex justify-between items-center p-10 bg-blue-50 rounded-2xl mx-auto my-10 w-4/5">
        <div className="w-1/2">
          <img src={h2Img} alt="Stress Levels" className="w-full rounded-xl" />
        </div>
        <div className="max-w-lg text-left">
          <h1 className="text-7xl font-customFont2 mb-5">Discover Your Stress Level</h1>
          <p className="text-xl mb-5">Take a quick test to understand your mental well-being – it's fast, free, and confidential.</p>
          <button onClick={handleCheck} className="bg-yellow-400 py-4 px-8 rounded-full text-lg font-bold hover:bg-yellow-500 transition-colors">Let's Check →</button>
        </div>
      </section>

      {/* Confidence Section */}
      <section className="flex justify-between items-center p-10 bg-green-900 text-white rounded-2xl mx-auto w-11/12 h-96">
        <div className="w-1/2">
          <h2 className="text-6xl font-customFont1">We help you to <span className="text-yellow-400">grow confidence</span> at any age</h2>
          <p className="text-2xl font-customFont4 mt-5">Taking regular practice can induce structural changes in the brain which help reduce stress and enhance sleep quality.</p>
        </div>
        <div className="bg-white text-black p-5 rounded-xl flex flex-col items-center w-1/3">
          <img src={h3Img} alt="Helping to Navigate" className="w-1/2 rounded-lg mb-5" />
          <div className="text-center">
            <h3 className="text-xl mb-2">Helping to Navigate</h3>
            <p className="text-base mb-4">Reach out to programs from college to elementary school students.</p>
            <a href="/" className="bg-yellow-400 py-2 px-4 rounded-lg text-white hover:bg-yellow-500 transition-colors">Learn More</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
