import { Response, Router } from 'express';
import UserController from './Controller';
import authMiddleWare from '../../libs/Routes/authMiddleWare';
import { IRequest } from '../../libs/interface';

const UserRouter = Router();

UserRouter.route('/')
.get( authMiddleWare('Users', 'all'), UserController.list)
.post(authMiddleWare('Users', 'all'), UserController.create)
.put( authMiddleWare('Users', 'all'), UserController.update);

UserRouter.route('/:id')
.delete( authMiddleWare('Users', 'all'), UserController.delete);

UserRouter.route('/me')
.get(authMiddleWare('Users', 'all'), (req: IRequest, res: Response) => {
    res.send(req.user);
});
export default UserRouter;