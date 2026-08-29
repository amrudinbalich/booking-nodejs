import { Router } from 'express';
import * as apartmentsController from '../../controllers/apartmentsController';

const apartmentsRouter: Router = Router();

apartmentsRouter.get('/', apartmentsController.index);
apartmentsRouter.get('/:id', apartmentsController.show);

export default apartmentsRouter;