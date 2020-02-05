import { Router } from 'express';
import TraineeController from './Controller';
import validationhandler from '../../libs/Routes/ValidationHandlers';
import config from '../Trainee/validation';
const TraineeRouter = Router();
TraineeRouter.route('/')
.get(  validationhandler(config.get), TraineeController.list)
.post(  validationhandler(config.create), TraineeController.create)
.delete( validationhandler(config.delete), TraineeController.delete) ;
TraineeRouter.route('/id')
.put( validationhandler(config.update), TraineeController.update);
export default TraineeRouter;
