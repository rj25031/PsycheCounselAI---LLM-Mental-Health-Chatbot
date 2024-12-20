// src/components/Questionnaire.js
import React, { useState } from 'react';
import '../css/Questionnaire.css'; // Add CSS here
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi'; // Arrow icons

const questions = [
  { id: 1, question: "What is your current snoring rate?" },
  { id: 2, question: "What is your current respiration rate?" },
  { id: 3, question: "What is your current body temperature?" },
  { id: 4, question: "What would you rate for your limb movement?" },
  { id: 5, question: "What is your current blood oxygen level?" },
  { id: 6, question: "What would you rate for your eye movement?" },
  { id: 7, question: "What are your current sleeping hour?" },
  { id: 8, question: "What are your current heart rate?" },
  
];

const Questionnaire = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState(Array(questions.length).fill(''));
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === '' || (Number(value) >= 0 && Number(value) <= 100)) {
      setError('');
      const updatedResponses = [...responses];
      updatedResponses[currentQuestionIndex] = value;
      setResponses(updatedResponses);
    } else {
      setError('Please enter a number between 0 and 100');
    }
  };

  const handleNext = () => {
    if (responses[currentQuestionIndex] === '') {
      setError('This field cannot be empty');
    } else {
      setError('');
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleBack = () => {
    setError('');
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleSubmit = () => {
    console.log('Submitted Responses:', responses);
    // Add submission logic here (e.g., send to backend or display results)
  };

  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  return (
    <div className="questionnaire-container">
      <h1>Answer this simple questions →</h1>
      <div className="question-box">
        <h2>QUESTION {currentQuestionIndex + 1}/{questions.length}:</h2>
        <p>{questions[currentQuestionIndex].question}</p>

        <input
          type="number"
          min="0"
          max="100"
          value={responses[currentQuestionIndex]}
          onChange={handleInputChange}
          placeholder="Enter a value between 0-100"
        />

        {error && <p className="error">{error}</p>}
      </div>

      <div className="button-group">
        {!isFirstQuestion && (
          <button className="back-button" onClick={handleBack}>
            <FiArrowLeft /> Back
          </button>
        )}

        <button
          className="next-button"
          onClick={isLastQuestion ? handleSubmit : handleNext}
        >
          {isLastQuestion ? 'Submit' : 'Next'} <FiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Questionnaire;
