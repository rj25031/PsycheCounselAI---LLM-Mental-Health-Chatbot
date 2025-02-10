import React, { useState } from "react";

const questions = [
  {
    id: 1,
    question: "How would you describe your sleep patterns?",
    options: [
      { text: " I sleep well and wake up refreshed.", value: 1 },
      { text: " My sleep is inconsistent but manageable.", value: 2 },
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
      { text: " I stay calm and manage them effectively.", value: 1 },
      { text: " I feel stressed but find ways to cope.", value: 2 },
      { text: " I feel overwhelmed and struggle to handle stress.", value: 3 },
    ],
  },
  {
    id: 5,
    question: "How would you describe your interest in activities you once enjoyed?",
    options: [
      { text: " I still enjoy most of them.", value: 1 },
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
      { text: " I often feel inadequate or not good enough.", value: 3 },
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
      { text: "No, I often feel hopeless.", value: 3 },
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
