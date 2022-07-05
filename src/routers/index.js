import { Router } from 'express';

import authRouters from './authRouters.js';
import financialRouters from './financialRouters.js';

const router = Router();

router.use(authRouters);
router.use(financialRouters);

export default router;