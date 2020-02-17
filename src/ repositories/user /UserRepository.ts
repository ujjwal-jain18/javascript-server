
import IUserModel from './IUserModel';
import * as Mongoose from 'mongoose';
import { userSchema, userModel } from './UserModel';
import VersioningRepository from '../ versionable /VersionableRepository';

class UserRepository extends VersioningRepository<IUserModel, Mongoose.Model<IUserModel>>  {

    constructor () {
        super(userModel);
    }
    createUser = (data: any) => {
        return super.create(data);
    };
    count() {
        return super.count();
    }
    updateUSer = (id: string, data: any) => {
      return super.update(id, data);
    };

    listOFUser = () => {
    return super.list();
    };

   deleteUser = (id: string) => {
       if (id !== undefined) {
        return super.delete(id);
       } else {
           console.log('please enter the id');
        }
    };
}
export default UserRepository;