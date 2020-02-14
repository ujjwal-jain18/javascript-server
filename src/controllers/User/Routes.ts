import { Response, Router } from 'express';
import UserController from './Controller';
import authMiddleWare from '../../libs/Routes/authMiddleWare';
import { IRequest } from '../../libs/interface';
import config from '../User/validation';
import validationhandler from '../../libs/Routes/ValidationHandlers';

const UserRouter = Router();

UserRouter.route('/me')
.get(authMiddleWare('Users', 'all'), (req: IRequest, res: Response) => {
    res.send(req.user);
 });
UserRouter.route('/login')
.post(UserController.login);

export default UserRouter;