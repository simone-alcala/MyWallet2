import { Router } from 'express';

import { signin, signup } from '../controllers/authController.js'

const authRouters = Router();

authRouters.post('/sign-up', signup );
authRouters.post('/sign-in', signin );

export default authRouters;