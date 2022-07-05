import { Router } from 'express';

import { createEvent, getEvent, getSumEvent } from '../controllers/financialController.js'

const financialRouters = Router();

financialRouters.post('/financial-events', createEvent );
financialRouters.get('/financial-events', getEvent );
financialRouters.get('/financial-events/sum', getSumEvent );

export default financialRouters;