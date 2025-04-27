import { Router } from 'express';
import { createSession, getSessions } from '../controllers/therapyController.js';
import auth from '../middleware/auth.js';

const router = Router();

router.post('/', auth, createSession);
router.get('/',  auth, getSessions);

export default router;
