import { Request, Response } from 'express';
import UserRepository from '../../ repositories/user /UserRepository';
import SystemResponse from '../../libs/SystemResponse';
import * as bcrypt from 'bcrypt';
import config from '../../config/configuration';
import * as jwt from 'jsonwebtoken';

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
    login = async (req: Request, res: Response) => {
        try {
        const {email, Password} = req.body;
        const user = await this.userRepository.findOne({email});
            if (!user) {
                return SystemResponse.error(res, 404, 'User Not Found');
            }
        const isPasswordCorrect = await bcrypt.compare(Password, user.Password);
            if (!isPasswordCorrect) {
                    return SystemResponse.error(res, 422, 'Password Does Not Exist');
            }
        console.log('Password Matched');

        const token = jwt.sign({email: user.email, id: user.originalId}, config.secretKey);
        console.log('hfuifauifu', user.email);
        console.log('ujjjjj', user.originalId);
                return SystemResponse.success(res, token , 'Login Successfully');
        } catch (err) {
            return SystemResponse.error(res, 422, err);
        }
    }

    create = async (req: Request , res: Response ) => {

        console.log('::CREATE USER:::::');

        const userData = req.body;

        const user = await this.userRepository.createUser(userData);
            if (!user) {
                return SystemResponse.error(res, 404, 'User Added UnSuccessfull');
            }
            return SystemResponse.success(res, user, 'User Added Successfully');
    }

    update = async (req: Request , res: Response ) => {
        console.log('::UPDATE USER:::::');

        const userData = req.body;

        const user = await this.userRepository.updateUSer(userData.id, userData.dataToUpdate);
            if (!user) {
                return SystemResponse.error(res, 404, 'User Updated UnSuccessfull');
            }
            return SystemResponse.success(res, userData, 'User Updated Successfully');
    }
    list = async (req: Request , res: Response ) => {
        console.log('::USER LIST:::::');

        const user = await this.userRepository.listOFUser();
            if (!user) {
                return SystemResponse.error(res, 404, 'No List Exist');
            }
            return SystemResponse.success(res, user, 'List Of Users');
    }
    delete = async (req: Request , res: Response ) => {
        console.log('::Delete USER:::::');

        const userData = req.params;

        const user =  this.userRepository.deleteUser(userData.id);
            if (!user) {
                return SystemResponse.error(res, 404, 'User Deleted UnSuccessfull');
            }
            return SystemResponse.success(res, user, 'User Deleted Successfully');
    }
}

export default UserController.getInstance();
