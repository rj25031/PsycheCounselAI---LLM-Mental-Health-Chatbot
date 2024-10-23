import express from 'express';
import { signUp,logIn } from '../controllers/userController.js';

const router = express.Router();

router.post('/sign-up',signUp);
router.post('/log-in',logIn);

export default router 