import React from 'react'
import { NavLink } from 'react-router-dom';

export default function HeroSection() {
    return (
      <section className="flex flex-col md:flex-row items-center justify-between bg-cream p-8 md:p-16">
        {/* Left Text Section */}
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-7xl font-semibold text-black mb-4">Your Free Personal AI Therapist</h1>
          <p className="text-gray-600 text-xl mb-10">
            Measure & improve your mental health in real time with your personal AI chatbot. No sign up.
            Available 24/7. Daily insights just for you!
          </p>
          <NavLink to='/chat' className="bg-purple-400 text-white text-xl font-semibold px-6 py-3 rounded-full transition-shadow duration-300 ease-in-out hover:shadow-[2px_2px_rgba(216,_191,_255,_0.7),_10px_10px_rgba(200,_162,_255,_0.5),_15px_15px_rgba(185,_136,_255,_0.3)]">
            Chat With Simba
          </NavLink>
        </div>
        
        {/* Right Image and Button Section */}
        <div className="flex flex-col items-center mt-8 md:mt-0">
          <img
            src="/src/assets/lion.png" 
            alt="Panda AI Therapist"
            className="w-80"
          />
          
        </div>
      </section>
    );
  }
