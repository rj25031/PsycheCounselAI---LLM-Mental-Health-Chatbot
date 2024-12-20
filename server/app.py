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
        data['snoring_rate'],      
        data['respiratory_rate'],
        data['body_temperature'],  
        data['sleep_quality'] ,
         data['limb_movement'],  
        data['blood_oxegen_level'],  
        data['eye_movement'], 
        data['heart_rate']     
    ]).reshape(1, -1)

    prediction = model.predict(features)
    
    return jsonify({'stress_level': int(prediction[0])})

if __name__ == '__main__':
    app.run(debug=True)
