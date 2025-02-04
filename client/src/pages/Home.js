import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import h1Img from "../images/Mental Health 1.jpg";
import h2Img from "../images/Mental Health 2.jpg";
import h3Img from "../images/Mental Health 3.jpg";
import TestimonialsImage1 from "../images/profile1.jpg";
import TestimonialsImage2 from "../images/profile2.jpg";
import TestimonialsImage3 from "../images/profile5.jpg";
import TestimonialsImage4 from "../images/profile4.jpg";
import TestimonialsImage5 from "../images/profile6.jpg";
import TestimonialsImage6 from "../images/profile3.jpg";
import StressQuestions from "./StressQuestions";

function Home() {
  const [showChecker, setShowChecker] = useState(false);
  const navigate = useNavigate();

  const handleCheck = () => {
    setShowChecker(true);
  };

  const handleChatRedirect = () => {
    navigate("/chat"); // Redirects to ChatInterface.js page
  };

  return (
    <Layout>
      {showChecker ? (
        <StressQuestions />
      ) : (
        <>
          {/* Hero Section */}
          <section className="flex flex-col md:flex-row justify-between px-20 py-32 bg-blue-100">
            <div className="md:max-w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-9xl mb-4 font-customFont1">
                Your Mental Health Matters
              </h1>
              <p className="text-lg md:text-2xl lg:text-4xl text-gray-700 mb-5">
                You don't have to struggle in silence!
              </p>
              <button
                onClick={handleChatRedirect}
                className="bg-yellow-300 text-black py-5 px-5 rounded-full mt-8"
              >
                <b>Chat with us</b>
                <span className="ml-2 text-lg transform transition-transform hover:translate-x-1">
                  ➔
                </span>
              </button>
            </div>
            <div className="mt-5 md:mt-0">
              <img
                src={h1Img}
                alt="Mental Health"
                className="w-full md:max-w-3xl rounded-2xl"
              />
            </div>
          </section>

          {/* Stress Section */}
          <section className="flex flex-col md:flex-row justify-between items-center p-10 bg-blue-50 rounded-2xl mx-auto my-10 w-full md:w-4/5">
            <div className="w-full md:w-1/2 mb-5 md:mb-0">
              <img
                src={h2Img}
                alt="Stress Levels"
                className="w-full rounded-xl"
              />
            </div>
            <div className="w-full md:max-w-lg text-center md:text-left">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-customFont2 mb-5">
                Discover Your Stress Level
              </h1>
              <p className="text-base md:text-lg lg:text-xl mb-5">
                Take a quick test to understand your mental well-being – it's
                fast, free, and confidential.
              </p>
              <button
                onClick={handleCheck}
                className="bg-yellow-400 py-3 px-6 md:py-4 md:px-8 rounded-full text-base md:text-lg font-bold hover:bg-yellow-500 transition-colors"
              >
                Let's Check →
              </button>
            </div>
          </section>

          {/* Grow Section */}
          <section className="flex flex-col lg:flex-row justify-between items-center p-10 bg-green-900 text-white rounded-2xl mx-auto w-full lg:w-11/12 min-h-screen">
            <div className="w-full lg:w-1/2 mb-5 lg:mb-0">
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-customFont1">
                We help you to{" "}
                <span className="text-yellow-400">grow confidence</span> at any
                age
              </h2>
              <p className="text-lg md:text-2xl lg:text-4xl font-customFont4 mt-5">
                Taking regular practice can induce structural changes in the
                brain which help reduce stress and enhance sleep quality.
              </p>
            </div>
            <div className="bg-white text-black p-5 rounded-xl flex flex-col items-center w-full md:w-2/3 lg:w-1/3">
              <img
                src={h3Img}
                alt="Helping to Navigate"
                className="w-1/2 rounded-lg mb-5"
              />
              <div className="text-center">
                <h3 className="text-base md:text-lg mb-2">
                  Helping to Navigate
                </h3>
                <p className="text-sm md:text-base mb-4">
                  Reach out to programs from college to elementary school
                  students.
                </p>
                <a
                  href="/"
                  className="bg-yellow-400 py-2 px-4 rounded-lg text-white hover:bg-yellow-500 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
<section className="bg-gray-100 min-h-screen py-32 overflow-hidden">
  <div className="container mx-auto px-4 h-full flex flex-col justify-center">
    <h2 className="text-5xl font-bold text-center text-gray-800 mb-8">
      Testimonials
    </h2>

    {/* Testimonials Slider */}
    <div className="relative w-full overflow-hidden ">
      <div className="flex space-x-6 animate-slide">
        {/* Testimonial Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md flex-shrink-0 w-80">
          <img
            src={TestimonialsImage1}
            alt="Testimonial"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <p className="text-gray-600 mt-4 italic">
            "This AI chatbot is a game-changer in mental health support!"
          </p>
          <div className="mt-4">
            <p className="font-semibold text-gray-800">
              Dr. D. P. Chaudhari
            </p>
            <p className="text-sm text-gray-500">
              Psychiatrist, AIIMS
            </p>
          </div>
        </div>

        {/* Testimonial Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md flex-shrink-0 w-80">
          <img
            src={TestimonialsImage2}
            alt="Testimonial"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <p className="text-gray-600 mt-4 italic">
            "An excellent tool for mental well-being and emotional support."
          </p>
          <div className="mt-4">
            <p className="font-semibold text-gray-800">
              Dr. S. D. Chaudhari
            </p>
            <p className="text-sm text-gray-500">
              Clinical Psychologist, Apollo Hospitals
            </p>
          </div>
        </div>

        {/* Testimonial Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md flex-shrink-0 w-80">
          <img
            src={TestimonialsImage3}
            alt="Testimonial"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <p className="text-gray-600 mt-4 italic">
            "AI-powered therapy is the future! This chatbot helps bridge the gap
            between patients and therapists by providing instant support."
          </p>
          <div className="mt-4">
            <p className="font-semibold text-gray-800">
              Dr. Durgesh Dalvi
            </p>
            <p className="text-sm text-gray-500">
              Neurologist, Fortis Hospital
            </p>
          </div>
        </div>

        {/* Duplicate Cards for Infinite Loop */}
        {/* Testimonial Card 1 (Duplicate) */}
        <div className="bg-white p-6 rounded-lg shadow-md flex-shrink-0 w-80">
          <img
            src={TestimonialsImage4}
            alt="Testimonial"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <p className="text-gray-600 mt-4 italic">
            "I've seen remarkable improvements in patients using this AI chatbot
            for guided meditation and cognitive behavioral therapy (CBT)."
          </p>
          <div className="mt-4">
            <p className="font-semibold text-gray-800">
              Dr. Shruti Parave
            </p>
            <p className="text-sm text-gray-500">
              Mental Health Counselor, Manipal Hospital
            </p>
          </div>
        </div>

        {/* Testimonial Card 2 (Duplicate) */}
        <div className="bg-white p-6 rounded-lg shadow-md flex-shrink-0 w-80">
          <img
            src={TestimonialsImage5}
            alt="Testimonial"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <p className="text-gray-600 mt-4 italic">
            "AI-based mental health assistants provide a stigma-free space for
            people to talk. This chatbot has helped my patients manage stress."
          </p>
          <div className="mt-4">
            <p className="font-semibold text-gray-800">
              Dr. King Kong
            </p>
            <p className="text-sm text-gray-500">
              Psychotherapist, NIMHANS
            </p>
          </div>
        </div>

        {/* Testimonial Card 3 (Duplicate) */}
        <div className="bg-white p-6 rounded-lg shadow-md flex-shrink-0 w-80">
          <img
            src={TestimonialsImage6}
            alt="Testimonial"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <p className="text-gray-600 mt-4 italic">
            "This AI chatbot is a revolutionary step in mental healthcare. It
            offers immediate emotional support, helping patients feel heard."
          </p>
          <div className="mt-4">
            <p className="font-semibold text-gray-800">
              Dr. Kavita Rao
            </p>
            <p className="text-sm text-gray-500">
              Psychiatrist, Max Healthcare
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
      )}
    </Layout>
  );
}

export default Home;
