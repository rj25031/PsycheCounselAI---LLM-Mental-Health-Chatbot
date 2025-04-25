import React from "react";// Update path based on your folder structure

const PrivacySection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-[#FFFDF6] px-6 py-45 lg:px-20">
      {/* Left Side - Mobile UI Image */}
      <div className="w-full max-w-sm mb-10 lg:mb-0">
        <img
          src=""
          alt="Mobile UI Mockup"
          className="rounded-3xl shadow-lg"
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="max-w-xl text-left">
        <h2 className="text-5xl font-bold text-black mb-20">
          Your privacy is <span className="bg-[#FFE9E0] text-[#F46E4C] px-6 py-3 rounded-full font-bold">Key</span>
        </h2>
        <p className="text-gray-700 mb-4 text-xl">
          No registration is required to use Earkick. This means that we have no personal data whatsoever about you. Your data belongs to you and only to you.
        </p>
        <p className="text-gray-700 text-xl">
          We are not exposing it to third parties. Your data serves to support you and is used to build better tools for everyone who wants to manage anxiety in the future.
        </p>
      </div>
    </div>
  );
};

export default PrivacySection;
