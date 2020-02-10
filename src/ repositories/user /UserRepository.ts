
import IUserModel from './IUserModel';
import * as Mongoose from 'mongoose';
import { userModel } from './UserModel';

class UserRepository {

    private userModel: Mongoose.Model<IUserModel>;

    constructor() {
        this.userModel = userModel;
    }
    public generateObjectId() {
        return String(Mongoose.Types.ObjectId());
    }

    create = (data: any) => {
        const userdata = {
            _id: this.generateObjectId(),
            ... data,
        };
        return this.userModel.create(data);
    };

    findOne = (query: any): any => {
        return this.userModel.findOne(query);
    }
   count = () => {
    return this.userModel.countDocuments();
    }

   update = (id: string, data: any) => {
    return this.userModel.findByIdAndUpdate(id, data);
    };

   list = () => {
    return this.userModel.find();
    };

   delete = (id: string) => {
       if (id !== undefined) {
        return this.userModel.deleteOne({id});
       } else {
           console.log('please enter the id');
        }
    }
}
export default UserRepository;