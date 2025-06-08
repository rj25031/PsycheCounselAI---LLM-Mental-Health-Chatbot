import React from 'react'
import Navbar from '../components/navbar'
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';


function About() {
  return (
  <div className="px-[20rem]">
    <Navbar/>
    <div className="bg-[#fcfaf2] flex flex-col md:flex-row items-center justify-between mt-20 py-10 px-6 md:px-20 gap-12">
      {/* Left */}
      <div className="flex-1">
        <h2 className="text-6xl font-bold mb-6">Our Story</h2>
        <p className="text-2xl text-gray-700 mb-4">
          <span className="font-bold">About the Development of PsycheCounselAI</span>
        </p>
        <p className='text-xl mb-2'>PsycheCounselAI was thoughtfully built through a collaborative effort by our passionate team.</p>
        <p className='text-xl mb-2'><span className='font-semibold'>Rupesh Jadhav</span>, serving as our Backend Developer & AI Engineer, designed and integrated the AI-driven core system, building secure, scalable backend solutions powered by advanced NLP models.</p>
        <p className='text-xl mb-2'><span className='font-semibold'>Durgesh Dalvi</span>, our Web Designer & Developer, crafted an intuitive and user-friendly interface to ensure seamless user experience.</p>
        <p className='text-xl mb-5'><span className='font-semibold'>Durvesh Chaudhari</span>,  our Documentation & Content Writing Expert, provided the foundation for clear communication by authoring detailed documentation, strategic content, and helping define the platform’s voice.</p>
        <p className='text-xl'>Together, we combined technology, empathy, and innovation to create PsycheCounselAI — a transformative AI-powered mental health platform that offers real-time, personalized support while upholding privacy, accessibility, and ethical AI principles.</p>
      </div>
      <div>
        <img src="/Our Team.png" alt="" className='w-125'/>
      </div>

    </div>

    
  </div>
  );
};

export default About