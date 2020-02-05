import { Router } from 'express';
import TraineeController from './Controller';
import validationhandler from '../../libs/Routes/ValidationHandlers';
import authMiddleware from '../../libs/Routes/authMiddleWare';
import config from '../Trainee/validation';

const TraineeRouter = Router();

TraineeRouter.route('/')
.get( authMiddleware('getUsers', 'read'), validationhandler(config.get), TraineeController.list)
.post(authMiddleware('getUsers', 'read'),  validationhandler(config.create), TraineeController.create)
.delete(authMiddleware('getUsers', 'all') , validationhandler(config.delete), TraineeController.delete) ;

TraineeRouter.route('/id')
.put(authMiddleware('getUsers', 'read'), validationhandler(config.update), TraineeController.update);

export default TraineeRouter;