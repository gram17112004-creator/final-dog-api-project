import express from 'express';
import { getRandomDog } from '../controllers/dogs.controller.js';

const router = express.Router();

router.get('/', getRandomDog);

export default router;
