// src/StressPredictor.js
import React, { useState } from 'react';
import axios from 'axios';

const StressPredictor = () => {
    const [heartRate, setHeartRate] = useState('');
    const [skinConductance, setSkinConductance] = useState('');
    const [respiratoryRate, setRespiratoryRate] = useState('');
    const [sleepQuality, setSleepQuality] = useState('');
    const [feature5, setFeature5] = useState('');
    const [feature6, setFeature6] = useState('');
    const [feature7, setFeature7] = useState('');
    const [feature8, setFeature8] = useState('');
    const [stressLevel, setStressLevel] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear any previous errors

        const userData = {
            heart_rate: parseFloat(heartRate),
            skin_conductance: parseFloat(skinConductance),
            respiratory_rate: parseFloat(respiratoryRate),
            sleep_quality: parseFloat(sleepQuality),
            feature_5: parseFloat(feature5),  // Additional feature
            feature_6: parseFloat(feature6),  // Additional feature
            feature_7: parseFloat(feature7),  // Additional feature
            feature_8: parseFloat(feature8)   // Additional feature
        };

        try {
            const response = await axios.post('http://localhost:5000/predict', userData);
            setStressLevel(response.data.stress_level);
        } catch (err) {
            setError('Error predicting stress level. Please try again.');
        }
    };

    return (
        <div style={{ maxWidth: '500px', margin: 'auto', textAlign: 'center' }}>
            <h1>Stress Level Predictor</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Heart Rate:
                        <input
                            type="number"
                            value={heartRate}
                            onChange={(e) => setHeartRate(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Skin Conductance:
                        <input
                            type="number"
                            value={skinConductance}
                            onChange={(e) => setSkinConductance(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Respiratory Rate:
                        <input
                            type="number"
                            value={respiratoryRate}
                            onChange={(e) => setRespiratoryRate(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Sleep Quality (1-5):
                        <input
                            type="number"
                            value={sleepQuality}
                            onChange={(e) => setSleepQuality(e.target.value)}
                            required
                            min="1"
                            max="5"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Feature 5:
                        <input
                            type="number"
                            value={feature5}
                            onChange={(e) => setFeature5(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Feature 6:
                        <input
                            type="number"
                            value={feature6}
                            onChange={(e) => setFeature6(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Feature 7:
                        <input
                            type="number"
                            value={feature7}
                            onChange={(e) => setFeature7(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Feature 8:
                        <input
                            type="number"
                            value={feature8}
                            onChange={(e) => setFeature8(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Predict Stress Level</button>
            </form>
            {stressLevel !== null && (
                <h2>Predicted Stress Level: {stressLevel}</h2>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default StressPredictor;
 