from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
with open('pkl\stress_prediction_model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json

    features = np.array([
        data['heart_rate'],      
        data['skin_conductance'],
        data['respiratory_rate'],  
        data['sleep_quality'] ,
         data['feature_5'],  # Additional feature
        data['feature_6'],  # Additional feature
        data['feature_7'],  # Additional feature
        data['feature_8']     
    ]).reshape(1, -1)

    prediction = model.predict(features)
    
    return jsonify({'stress_level': int(prediction[0])})

if __name__ == '__main__':
    app.run(debug=True)
