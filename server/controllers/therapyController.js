import TherapySession from '../models/TherapySession.js';

export const createSession = async (req, res) => {
  try {
    const session = new TherapySession(req.body);
    await session.save();
    res.status(201).json(session);
  } catch {
    res.status(500).send('Server error');
  }
};

export const getSessions = async (req, res) => {
  try {
    const sessions = await TherapySession
      .find()
      .populate('patient', 'name email')
      .populate('therapist', 'name email');
    res.json(sessions);
  } catch {
    res.status(500).send('Server error');
  }
};
