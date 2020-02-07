import { Request, Response } from 'express';
import UserRepository from '../../ repositories/user /UserRepository';
import SystemResponse from '../../libs/SystemResponse';

class UserController {
    static instance: any ;
    private userRepository: UserRepository = new UserRepository() ;
    static getInstance() {

        if (UserController.instance) {
           return UserController.instance;
        }

        UserController.instance = new UserController();
        return UserController.instance;
    }

    create = (req: Request , res: Response ) => {

        console.log('::CREATE USER:::::');

        const userdata = req.body;

        this.userRepository.create(userdata)

        .then((user: any) => {
            return SystemResponse.success(res, user, 'User Added Successfully');
        })

        .catch((error: any) => {
            throw (error);
        });
    }

    update = (req: Request , res: Response ) => {
        console.log('::UPDATE USER:::::');

        const userdata = req.body;

        this.userRepository.update(userdata.id, userdata)

        .then((user: any) => {
            return SystemResponse.success(res, user, 'User Updated Successfully');
        })

        .catch((error: any) => {
            throw (error);
        });
    }
    list = (req: Request , res: Response ) => {
        console.log('::USER LIST:::::');

        const userdata = req.body;


        this.userRepository.list()

        .then((user: any) => {
            return SystemResponse.success(res, user, 'List Of Users');
        })

        .catch((error: any) => {
            throw (error);
        });
    }
    delete = (req: Request , res: Response ) => {
        console.log('::Delete USER:::::');

        const userdata = req.params;


        this.userRepository.delete(userdata.id)

        .then((user: any) => {
            return SystemResponse.success(res, user, 'User Deleted Successfully');
        })

        .catch((error: any) => {
            throw (error);
        });
    }
}

export default UserController.getInstance();
