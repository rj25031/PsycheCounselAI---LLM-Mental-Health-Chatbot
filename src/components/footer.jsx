import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex justify-center mt-20 mb-50">
        <card className="bg-[#FFF59D] rounded-3xl shadow-md p-8 text-center max-w-2xl w-full">
          <div className="flex justify-center">
            <div className="bg-[#FFF9C4] rounded-full p-4">
              <img
                src="/src/assets/footer.png" // Replace with actual path to the panda image
                alt="Simba-da-Lion"
              />
            </div>
          </div>
          <h1 className="text-3xl font-bold mt-6 mb-2">Try PsycheCounsel AI today!</h1>
          <p className="text-gray-700 mb-6">
            Track and improve your mental health in real time
          </p>
          <NavLink to='/chat' className="bg-purple-400 text-white text-lg font-semibold px-6 py-3 rounded-full transition-shadow duration-300 ease-in-out hover:shadow-[2px_2px_rgba(216,_191,_255,_0.7),_10px_10px_rgba(200,_162,_255,_0.5),_15px_15px_rgba(185,_136,_255,_0.3)]">
            Chat With Simba
          </NavLink>
        </card>
    </div>
      
  );
}
