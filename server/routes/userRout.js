import express from 'express';
import { signUp,logIn } from '../controller/userControl.js';

const router = express.Router();

router.post('/register',signUp);
router.post('/log-in',logIn);

export default router 