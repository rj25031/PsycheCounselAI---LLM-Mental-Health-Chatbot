import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const register = async (req, res) => {
  try {
    const { name, age, email, phone, password, role } = req.body;
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User exists' });
    user = new User({ name, age, email, phone, password, role });
    await user.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ token });
  } catch (error){
    console.log(error);
    
    res.status(500).send('Server error');
  }
};

export const login = async (req, res) => {
  try {
    const { email,password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password)))
      return res.status(400).json({ msg:'Invalid credentials' });
    const token = jwt.sign({ id:user._id }, process.env.JWT_SECRET, { expiresIn:'1h' });
    res.json({ token });
  } catch(error) {
    console.log(error);
    
    res.status(500).send('Server error');
  }
};
