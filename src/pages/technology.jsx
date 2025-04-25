'use client';

import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ReactLenis from 'lenis/react';


const dataPoints = [
    {
      emoji: "📣",
      bg: "bg-yellow-100",
      text: "Audio, video and text memo's and typing behavior when users describe their day, their mood and anxiety levels.",
    },
    {
      emoji: "👨‍👩‍👧‍👦",
      bg: "bg-green-100",
      text: "Context information such as work, friends, exercise that led to how users are feeling.",
    },
    {
      emoji: "🏆",
      bg: "bg-cyan-100",
      text: "Tasks performed by the user which go toward achieving their goals (e.g. sleeping more than 7 hrs).",
    },
    {
      emoji: "📝",
      bg: "bg-indigo-100",
      text: "Symptoms that are of clinical use in diagnosis of mental health issues. For example a user may record a symptom like “Nervousness” or “Constantly worrying” which correspond to clinical assessment questions in forms like Generalized Anxiety Disorder 7.",
    },
    {
      emoji: "😴",
      bg: "bg-green-100",
      text: "Sleep duration",
    },
    {
      emoji: "🌹",
      bg: "bg-red-100",
      text: "Menstrual cycle",
    },
    {
      emoji: "🤸",
      bg: "bg-indigo-100",
      text: "Exercises",
    },
  ];

  const researchLinks = [
    {
      number: 1,
      content: (
        <>
          J. Palotti, G. Narula, L. Raheem, H. Bay, 'Analysis of Emotion Annotation Strength Improves Generalization in Speech Emotion Recognition Models'. Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition CVPR2023W
        </>
      ),
      href: "#",
    },
    {
      number: 2,
      content: (
        <>
          D. A. Kalmbach, J. R. Anderson, and C. L. Drake, 'The impact of stress on sleep: Pathogenic sleep reactivity as a vulnerability to insomnia and circadian disorders', J. Sleep Res., vol. 27, no. 6, p. e12710, Dec. 2018, doi: 10.1111/jsr.12710.
        </>
      ),
    },
    {
      number: 3,
      content: (
        <>
          C. N. Kaufmann, R. Susukida, and C. A. Depp, 'Sleep apnea, psychopathology, and mental health care', Sleep Health, vol. 3, no. 4, pp. 244–249, Aug. 2017, doi: 10.1016/j.sleh.2017.04.003.
        </>
      ),
    },
    {
      number: 4,
      content: (
        <>
          J. C. Mundt, A. P. Vogel, D. E. Feltner, and W. R. Lenderking, 'Vocal acoustic biomarkers of depression severity and treatment response', Biol. Psychiatry, vol. 72, no. 7, pp. 580–587, Oct. 2012, doi: 10.1016/j.biopsych.2012.03.015.
        </>
      ),
    },
    {
      number: 5,
      content: (
        <>
          L. Albuquerque, A. R. S. Valente, A. Teixeira, D. Figueiredo, P. Sa-Couto, and C. Oliveira, 'Association between acoustic speech features and non-severe levels of anxiety and depression symptoms across lifespan', PLoS One, vol. 16, no. 4, p. e0248842, 2021, doi:10.1371/journal.pone.0248842.
        </>
      ),
    },
    {
      number: 6,
      content: (
        <>
          C. Solomon, M. F. Valstar, R. K. Morriss, and J. Crowe, 'Objective Methods for Reliable Detection of Concealed Depression', Front. ICT, vol. 2, 2015, Accessed: May 04, 2022. [Online]. Available: https://www.frontiersin.org/article/10.3389/fict.2015.00005
        </>
      ),
    },
    {
      number: 7,
      content: (
        <>
          'Crema-D'. <a href="https://paperswithcode.com/dataset/crema-d" className="text-teal-600 underline">https://paperswithcode.com/dataset/crema-d</a>
        </>
      ),
    },
  ];
  

export default function Technology() {
  return (
    <div className="px-[20rem]">

        <ReactLenis root>
          <Navbar/>
          <section className="bg-[#FFFDF4] pt-40 px-4 md:px-12">
              <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <div>
                  <h2 className="text-7xl font-semibold text-black mb-4">
                      PsycheCounselAI Mental Health Model
                  </h2>
                  <p className="text-gray-700 text-lg mb-6">
                      Earkick's technology is taking a unique and novel approach that enables
                      fine grained and quantifiable mental health monitoring and assessment
                      to improve the user's mental health and quality of life.
                  </p>
                  <p className="text-gray-700 text-lg">
                      To monitor mental health, we combine various sources of data to better
                      understand the context in which a user is situated and potentially
                      influences the user's mental health.
                  </p>
                  </div>

                  {/* Right Side is a Full Image */}
                  <div className="flex justify-center">
                      <img src="" alt="Model Image" srcset="" />
                  </div>
              </div>
          </section>
          <section className="pt-80 px-4">
              <div className="max-w-7xl mx-auto">
                  <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-25">
                  The data that we're considering <br /> for mental health prediction is:
                  </h2>
                  <div className=" grid md:grid-cols-2 gap-6">
                  {dataPoints.map((item, index) => (
                      <div
                      key={index}
                      className="flex items-center bg-white rounded-2xl p-6 shadow-sm"
                      >
                      <div
                          className={`size-24 flex items-center justify-center text-4xl rounded-full ${item.bg} mr-4 shrink-0`}
                      >
                          {item.emoji}
                      </div>
                      <p className="text-gray-800 font-medium text-md">{item.text}</p>
                      </div>
                  ))}
                  </div>
              </div>
          </section>
          <section className="py-50 px-4">
              <div className="max-w-5xl mx-auto">
                  <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-10">Research</h2>
                  <ul className="space-y-6 text-gray-800 text-xl">
                  {researchLinks.map((item) => (
                      <li key={item.number} className="flex items-start">
                      <span className={`font-bold mr-2 text-gray-900`}>[{item.number}]</span>
                      <span>{item.content}</span>
                      </li>
                  ))}
                  </ul>
              </div>
          </section>
          <Footer/>
        </ReactLenis>
        
    </div>
    
  );
}
