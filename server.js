import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import logger from './utils/logger.js';
import router from './routes/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(router);

app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Welcome to the Dog API!');
});

app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
});
