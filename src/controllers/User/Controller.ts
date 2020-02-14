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

        const token = jwt.sign({email: user.email, id: user.originalId}, config.secretKey, {expiresIn: 900});
                return SystemResponse.success(res, token , 'Login Successfully');
        } catch (err) {
            return SystemResponse.error(res, 422, err);
        }
    }
}

export default UserController.getInstance();
