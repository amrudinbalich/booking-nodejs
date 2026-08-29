import { Router } from 'express';
import * as apartmentsController from '../../controllers/apartmentsController.ts';

const apartmentsRouter: Router = Router();

apartmentsRouter.get('/', apartmentsController.index);

export default apartmentsRouter;