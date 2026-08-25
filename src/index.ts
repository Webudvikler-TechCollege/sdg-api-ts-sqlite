import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { userRoutes } from './routes/userRoutes.js';
import { authRoutes } from './routes/authRoutes.js';
import { goalRoutes } from './routes/goalRoutes.js';
import { educationRoutes } from './routes/educationRoutes.js';

dotenv.config();
const port = process.env.PORT || 3000

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/goals', goalRoutes);
app.use('/api/education', educationRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
