import { Router } from 'express';
import { commentController } from '../controllers/commentController.js';

const routes = Router();
routes.get('/', commentController.getRecords);
routes.get('/:goalId', commentController.getRecordsByGoalId);
routes.post('/', commentController.createRecord);
routes.put('/:id', commentController.updateRecord);
routes.delete('/:id', commentController.deleteRecord);

export const commentRoutes = routes;