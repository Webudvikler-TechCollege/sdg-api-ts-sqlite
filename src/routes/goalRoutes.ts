import { Router } from 'express';
import { goalController } from '../controllers/goalController.js';

const routes = Router();
routes.get('/', goalController.getRecords);
routes.get('/:id', goalController.getRecord);
routes.get('/bytheme/:theme_slug', goalController.getRecordsByThemeSlug);

export const goalRoutes = routes;