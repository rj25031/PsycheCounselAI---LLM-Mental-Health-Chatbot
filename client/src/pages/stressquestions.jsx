import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const questions = [
  {
    id: 1,
    question: "How would you describe your sleep patterns?",
    options: [
      { text: "I sleep well and wake up refreshed.", value: 1 },
      { text: "My sleep is inconsistent but manageable.", value: 2 },
      { text: "I struggle with sleep, feeling tired most of the time.", value: 3 },
    ],
  },
  {
    id: 2,
    question: "How often do you feel overwhelmed by daily tasks or responsibilities?",
    options: [
      { text: "Rarely, I manage things well.", value: 1 },
      { text: "Sometimes, but I can handle it.", value: 2 },
      { text: "Often, I feel completely drained.", value: 3 },
    ],
  },
  {
    id: 3,
    question: "Do you frequently experience feelings of sadness or emptiness?",
    options: [
      { text: "No, I generally feel content.", value: 1 },
      { text: "Occasionally, but it passes.", value: 2 },
      { text: "Yes, I often feel down without reason.", value: 3 },
    ],
  },
  {
    id: 4,
    question: "How do you usually handle stressful situations?",
    options: [
      { text: "I stay calm and manage them effectively.", value: 1 },
      { text: "I feel stressed but find ways to cope.", value: 2 },
      { text: "I feel overwhelmed and struggle to handle stress.", value: 3 },
    ],
  },
  {
    id: 5,
    question: "How would you describe your interest in activities you once enjoyed?",
    options: [
      { text: "I still enjoy most of them.", value: 1 },
      { text: "I have lost interest in a few.", value: 2 },
      { text: "I no longer find joy in them.", value: 3 },
    ],
  },
  {
    id: 6,
    question: "How often do you feel lonely or isolated?",
    options: [
      { text: "Rarely, I feel connected with others.", value: 1 },
      { text: "Sometimes, I feel a bit lonely.", value: 2 },
      { text: "Frequently, I feel disconnected from everyone.", value: 3 },
    ],
  },
  {
    id: 7,
    question: "How do you perceive your self-worth?",
    options: [
      { text: "I feel confident and value myself.", value: 1 },
      { text: "I have some doubts but try to stay positive.", value: 2 },
      { text: "I often feel inadequate or not good enough.", value: 3 },
    ],
  },
  {
    id: 8,
    question: "Do you find it difficult to concentrate or make decisions?",
    options: [
      { text: "No, I can focus well.", value: 1 },
      { text: "Occasionally, I have trouble concentrating.", value: 2 },
      { text: "Yes, I frequently struggle with focus and decisions.", value: 3 },
    ],
  },
  {
    id: 9,
    question: "How do you usually react to negative thoughts or emotions?",
    options: [
      { text: "I acknowledge them and move forward.", value: 1 },
      { text: "I try to ignore them, but they linger.", value: 2 },
      { text: "They consume me, making me feel worse.", value: 3 },
    ],
  },
  {
    id: 10,
    question: "Do you feel hopeful about the future?",
    options: [
      { text: "Yes, I am optimistic.", value: 1 },
      { text: "Sometimes, but I have doubts.", value: 2 },
      { text: "No, I often feel hopeless.", value: 3 },
    ],
  },
];

const emojiData = {
  "Low Stress": { emoji: "😁", color: "#4ade80" },
  "Moderate Stress": { emoji: "🙂", color: "#facc15" },
  "High Stress": { emoji: "😣", color: "#f87171" },
};

const emojiVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: [1, 1.2, 1],
    opacity: 1,
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

function StressQuestions(){
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState(null);

  const handleAnswerChange = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleNext = () => {
    if (answers[questions[currentQuestion].id]) {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        calculateStressLevel();
      }
    } else {
      alert("Please select an answer before proceeding.");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateStressLevel = () => {
    const totalScore = Object.values(answers).reduce((sum, val) => sum + Number(val), 0);
    let level = "";
    if (totalScore <= 12) level = "Low Stress";
    else if (totalScore <= 21) level = "Moderate Stress";
    else level = "High Stress";
    setResult({ level, totalScore });
  };

  const percentage = Math.round(((currentQuestion + 1) / questions.length) * 100);

  return (
    <div className="min-h-screen bg-[#f3e8ff]">
      {/* Navbar */}
      <div className="bg-white p-4 gap-350 h-25 rounded-b-full flex items-center shadow">
        <div className="flex items-center gap-2 font-bold text-xl text-gray-800 ml-30">
            <NavLink to='/'><img src="/B Logo.svg" alt="Logo" className="w-70" /></NavLink>
        </div>
        <div className="flex items-center gap-2">
          <img src="https://i.pravatar.cc/40" alt="user" className="rounded-full size-16" />
          <div className="text-left">
            <div className="text-lg font-bold">JASMINE</div>
            <div className="text-xm text-gray-500">PID : jasmine_01</div>
          </div>
        </div>
      </div>

      <div className="px-55">
        <div className="text-center mt-10 px-4">
          <h1 className="text-3xl md:text-6xl font-bold text-purple-700 mt-18 mb-4">
            Welcome to “The MoodMeter ”
          </h1>
          <p className="text-sm md:text-xl text-gray-700">
            Precision Insight Of Your Mental State In Just 3 Easy Steps
          </p>
        </div>

        {/* Main Section */}
        <div className="p-6 md:p-10 grid md:grid-cols-3 gap-6">
          {/* Left: Step Info */}
          <div className="bg-white p-12 rounded-xl shadow-md">
            <div className="text-left">
              <h2 className="text-5xl font-bold text-purple-700">Check Status</h2>
              <p className="text-xl text-dark font-semibold mb-10">In Just 3 Easy Steps</p>
            </div>
            <ol className="space-y-6 mt-4 text-sm">
              {[1, 2, 3].map((step, i) => (
                <li className="flex items-start gap-3" key={i}>
                  <div className="size-24 text-5xl rounded-full bg-purple-300 text-purple-900 flex items-center justify-center font-bold">
                    {step}
                  </div>
                  <div>
                    <p className="font-semibold text-xl mt-3">
                      {step === 1 && "Start The Checkup"}
                      {step === 2 && "Answer Simple Question"}
                      {step === 3 && "Your Final MOOD SCORE"}
                    </p>
                    <p className="text-gray-600">
                      {step === 1 && "Login & click the start button to start the checkup."}
                      {step === 2 && "Give answers to the 10 simple question"}
                      {step === 3 && "Your Mental Stress Level"}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <img src="/sunflower.png" alt="flower" className="w-55 mx-auto mt-6" />
          </div>

          {/* Right: Questions Box */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-12 rounded-xl shadow-md">
              {!result ? (
                <>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-4xl font-bold text-purple-700">Questions</h2>
                    <span className="text-lg font-medium text-purple-600">
                      {percentage}% Completed
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-purple-100 h-2 rounded-full mb-6">
                    <div
                      className="h-2 rounded-full bg-purple-600 transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>

                  <div className="bg-purple-100 px-12 py-15 rounded-4xl">
                    <p className="text-gray-800 font-semibold text-2xl mb-4">
                      Q.{currentQuestion + 1} {questions[currentQuestion].question}
                    </p>

                    <div className="space-y-3">
                      {questions[currentQuestion].options.map((opt, index) => {
                        const isSelected =
                          answers[questions[currentQuestion].id] === opt.value;
                        return (
                          <div
                            key={index}
                            onClick={() =>
                              handleAnswerChange(questions[currentQuestion].id, opt.value)
                            }
                            className={`flex items-center gap-4 px-9 py-3 rounded-full cursor-pointer transition-all ease-in-out text-lg font-medium ${
                              isSelected
                                ? "bg-purple-500 text-white"
                                : "bg-purple-200 text-gray-800"
                            }`}
                          >
                            <div
                              className={`w-5 h-5 rounded-full border-2 ${
                                isSelected
                                  ? "border-white bg-white"
                                  : "border-purple-600 bg-purple-200"
                              } flex items-center justify-center`}
                            >
                              {isSelected && (
                                <div className="w-2.5 h-2.5 bg-purple-600 rounded-full"></div>
                              )}
                            </div>
                            {opt.text}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button
                      onClick={handlePrevious}
                      className="px-5 py-3 flex justify-center gap-2 rounded-full border text-xl cursor-pointer font-medium border-purple-600 text-purple-600 hover:bg-purple-100"
                    >
                      <FaArrowLeft className="mt-1" />
                      Previous
                    </button>
                    <button
                      onClick={handleNext}
                      className="px-9 py-3 flex justify-center text-xl cursor-pointer font-medium gap-2 rounded-full bg-fuchsia-500 text-white hover:bg-fuchsia-600"
                    >
                      {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                      <FaArrowRight className="mt-1" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-10">
                  <h2 className="text-6xl font-bold text-purple-700 mb-6">Your Mood Score</h2>

                  <motion.div
                    className="text-[100px] mb-6"
                    initial="initial"
                    animate="animate"
                    variants={emojiVariants}
                    style={{
                      color: emojiData[result.level].color,
                      display: "inline-block",
                    }}
                  >
                    {emojiData[result.level].emoji}
                  </motion.div>

                  <p className="text-3xl mb-4">Total Score: {result.totalScore}</p>
                  <p className="text-2xl font-semibold text-purple-600">
                    Stress Level: {result.level}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default StressQuestions
