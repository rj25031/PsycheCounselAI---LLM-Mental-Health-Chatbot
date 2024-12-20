import React, { useState } from 'react';
import axios from 'axios';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi'; 
import '../css/Questionnaire.css'; 
import Layout from '../components/Layout';

const questions = [
  { id: 1, question: "What is your current snoring rate?", key: 'snoring_rate' },
  { id: 2, question: "What is your current respiration rate?", key: 'respiratory_rate' },
  { id: 3, question: "What is your current body temperature?", key: 'body_temperature' },
  { id: 4, question: "What would you rate for your limb movement?", key: 'limb_movement' },
  { id: 5, question: "What is your current blood oxygen level?", key: 'blood_oxegen_level' },
  { id: 6, question: "What would you rate for your eye movement?", key: 'eye_movement' },
  { id: 7, question: "What are your current sleeping hours?", key: 'sleep_quality' },
  { id: 8, question: "What is your current heart rate?", key: 'heart_rate' }
];

const StressPredictor = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState(Array(questions.length).fill(''));
  const [stressLevel, setStressLevel] = useState(null);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = questions.reduce((acc, question, index) => {
      acc[question.key] = parseFloat(responses[index]);
      return acc;
    }, {});

    try {
      const response = await axios.post('http://localhost:5000/predict', userData);
      setStressLevel(response.data.stress_level);
    } catch (err) {
      setError('Error predicting stress level. Please try again.');
    }
  };

  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  return (
    <Layout>
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

      {stressLevel !== null && (
        <h2>Predicted Stress Level: {stressLevel}</h2>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
    </Layout>
  );
};

export default StressPredictor;
