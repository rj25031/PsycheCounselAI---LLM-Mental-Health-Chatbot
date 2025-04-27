import mongoose from 'mongoose';

const TherapySessionSchema = new mongoose.Schema({
  patient:   { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  therapist: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date:      { type: Date, default: Date.now },
  notes:     { type: String }
}, { timestamps: true });

export default mongoose.model('TherapySession', TherapySessionSchema);
