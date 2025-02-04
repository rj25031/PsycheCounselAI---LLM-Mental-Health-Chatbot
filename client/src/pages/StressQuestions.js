import React, { useState } from "react";

const questions = [
  {
    id: 1,
    question: "How many hours do you sleep on average?",
    options: [
      { text: "6-8 hours", value: 1 },
      { text: "4-5 hours", value: 2 },
      { text: "Less than 4 hours", value: 3 },
    ],
  },
  {
    id: 2,
    question: "How often do you feel irritable or frustrated?",
    options: [
      { text: "Rarely", value: 1 },
      { text: "Sometimes", value: 2 },
      { text: "Often", value: 3 },
    ],
  },
  {
    id: 2,
    question: "How often do you feel irritable or frustrated?",
    options: [
      { text: "Rarely", value: 1 },
      { text: "Sometimes", value: 2 },
      { text: "Often", value: 3 },
    ],
  },
  {
    id: 2,
    question: "How often do you feel irritable or frustrated?",
    options: [
      { text: "Rarely", value: 1 },
      { text: "Sometimes", value: 2 },
      { text: "Often", value: 3 },
    ],
  },
  {
    id: 2,
    question: "How often do you feel irritable or frustrated?",
    options: [
      { text: "Rarely", value: 1 },
      { text: "Sometimes", value: 2 },
      { text: "Often", value: 3 },
    ],
  },
  {
    id: 2,
    question: "How often do you feel irritable or frustrated?",
    options: [
      { text: "Rarely", value: 1 },
      { text: "Sometimes", value: 2 },
      { text: "Often", value: 3 },
    ],
  },
  // Add more questions here
];

const StressQuestions = () => {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleAnswerChange = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const calculateStressLevel = () => {
    const totalScore = Object.values(answers).reduce((sum, val) => sum + Number(val), 0);
    let level = "";
    if (totalScore <= 8) level = "Low Stress";
    else if (totalScore <= 12) level = "Moderate Stress";
    else level = "High Stress";
    setResult({ level, totalScore });
  };

  return (
    <div className="p-10 bg-blue-50 rounded-xl mx-auto w-full md:w-3/4">
      <h1 className="text-3xl font-bold text-center mb-8">Stress Level Checker</h1>
      {result ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Your Stress Level: {result.level}</h2>
          <p className="text-lg">Score: {result.totalScore}</p>
        </div>
      ) : (
        <>
          {questions.map((q) => (
            <div key={q.id} className="mb-6">
              <h3 className="text-xl mb-2">{q.question}</h3>
              {q.options.map((opt) => (
                <label key={opt.value} className="block mb-2">
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    value={opt.value}
                    onChange={() => handleAnswerChange(q.id, opt.value)}
                    className="mr-2"
                  />
                  {opt.text}
                </label>
              ))}
            </div>
          ))}
          <button
            onClick={calculateStressLevel}
            className="bg-yellow-400 py-3 px-6 rounded-full text-base font-bold hover:bg-yellow-500 transition-colors"
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
};

export default StressQuestions;
