import express from 'express';
import dogRoutes from './dogs.routes.js';

const router = express.Router();
router.use('/dogs', dogRoutes);

export default router;
