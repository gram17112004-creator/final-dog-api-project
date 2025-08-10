import { fetchRandomDog } from '../services/dogs.service.js';

export const getRandomDog = async (req, res) => {
  try {
    const dog = await fetchRandomDog();
    res.json({ image: dog });
  } catch (error) {
    res.status(500).json({ error: 'שגיאה בקבלת תמונת כלב' });
  }
};
