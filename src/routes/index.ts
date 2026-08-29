import { Router } from 'express';
// import authRoutes from './auth/auth.ts';
import apartmentRoutes from './feats/apartments.ts';

const router: Router = Router();

// home
router.get('/', (req, res) => {
    res.render('index',{
        title: 'Home',
        message: 'Welcome'
    });
});

router.use('/apartments', apartmentRoutes);
// router.use(authRoutes);

export default router;
