import { Router } from 'express';
import * as authController from '../../controllers/authController.ts';

const authRouter: Router = Router();

authRouter.get('/login', authController.loginView);
authRouter.post('/login', authController.loginAction);

export default authRouter;
