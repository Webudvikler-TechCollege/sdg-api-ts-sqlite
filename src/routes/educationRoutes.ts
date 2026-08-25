import { Router } from 'express';
import { educationController } from '../controllers/educationController.js';

const routes = Router();
routes.get('/', educationController.getRecords);

export const educationRoutes = routes;