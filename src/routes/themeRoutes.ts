import { Router } from 'express';
import { themeController } from '../controllers/themeController.js';

const routes = Router();
routes.get('/', themeController.getRecords);
export const themeRoutes = routes;