import { Router } from 'express';
import authRouter from './auth/auth.ts';

const router: Router = Router();

// home
router.get('/', (req, res) => {
    res.render('index',{
        title: 'Home',
        message: 'Welcome'
    });
});

router.use(authRouter);

export default router;
