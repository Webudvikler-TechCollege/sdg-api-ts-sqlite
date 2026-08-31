import { Router } from 'express';
import { faqController } from '../controllers/faqController.js';

const routes = Router();
routes.get('/', faqController.getRecords);
export const faqRoutes = routes;