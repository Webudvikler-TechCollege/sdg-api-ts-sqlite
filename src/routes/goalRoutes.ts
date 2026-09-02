import { Router } from 'express';
import { goalController } from '../controllers/goalController.js';
import { authController } from '../controllers/authController.js';

const routes = Router();
routes.get('/', goalController.getRecords);
routes.get('/:id', goalController.getRecord);
routes.get('/bytheme/:theme_id', goalController.getRecordsByThemeId);

export const goalRoutes = routes;