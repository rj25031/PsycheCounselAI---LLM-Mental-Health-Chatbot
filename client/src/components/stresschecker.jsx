import React from "react";
import { NavLink } from "react-router-dom";

export default function StressChecker() {
  return (
    <section className="flex items-center border-2 border-black rounded-xl p-10 w-full max-w-[1300px] mx-auto bg-white shadow-lg mt-10">
      {/* Text Section */}
      <div className="flex flex-col max-w-md">
        <h2 className="text-5xl font-bold text-black">Feeling Stressed ?</h2>
        <p className="text-gray-600 text-xl mt-6">
          Our Stress Level Calculator assesses your mental state through quick,
          insightful questions. Based on your responses, it calculates your
          stress level and provides personalized AI-driven guidance to help you
          relax and regain balance.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex flex-col items-center ml-20 mr-20">
        <img
          src="/brain.png"
          alt="Brain character"
          className="size-70"
        />
      </div>

      {/* Button */}
      <div className="ml-8">
          <div className="text-dark gap-3 text-4xl font-bold mb-10">
                <div className="flex items-center">
                    <span className="size-4 bg-red-400 rounded-full mr-3"></span>
                    STRESS
                </div>
                <div className="flex items-center">
                    <span className="size-4 bg-pink-400 rounded-full mr-3"></span>
                    AI THERAPY
                </div>
                <div className="flex items-center">
                    <span className="size-4 bg-pink-300 rounded-full mr-3"></span>
                    RELAX
                </div>
          </div>
          <NavLink to="/stressquestions" className="bg-blue-400 text-xl cursor-pointer text-white font-semibold px-6 py-2 rounded-full shadow-md transition-shadow duration-300 ease-in-out hover:shadow-[5px_5px_rgba(135,_206,_255,_0.7),_10px_10px_rgba(135,_206,_245,_0.5),_15px_15px_rgba(135,_206,_235,_0.3)]">
                Check Now !!!
          </NavLink>




        </div>
      
    </section>
  );
}
