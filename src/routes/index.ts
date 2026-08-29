import { Router } from "express";
import apartmentsRouter from "./sub/apartments";
import { getHome } from "../controllers/homeController";

const router: Router = Router();

router.get('/', getHome);
router.use('/apartments', apartmentsRouter);

export default router;
