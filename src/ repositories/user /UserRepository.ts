
import IUserModel from './IUserModel';
import * as Mongoose from 'mongoose';
import { userSchema, userModel } from './UserModel';
import VersioningRepository from '../ versionable /VersionableRepository';

class UserRepository extends VersioningRepository<IUserModel, Mongoose.Model<IUserModel>>  {

    constructor () {
        super(userModel);
    }
    create1 = (data: any) => {
        return super.create(data);
    };
    count() {
        return super.count();
    }
    update1 = (id: string, data: any) => {
      return super.update(id, data);
    };

   list1 = () => {
    return super.list();
    };

   delete1 = (id: string) => {
       if (id !== undefined) {
        return super.delete(id);
       } else {
           console.log('please enter the id');
        }
    };
}
export default UserRepository;