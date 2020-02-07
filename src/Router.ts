import { Router } from 'express';
import TraineeRouter from './controllers/Trainee/Routes';
import UserRouter from './controllers/User/Routes';

const router = Router();

router.use('/Trainee', TraineeRouter);
router.use('/User', UserRouter);

export default router;
