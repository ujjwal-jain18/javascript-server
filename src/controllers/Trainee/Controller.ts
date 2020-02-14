import { Request, Response } from 'express';
import UserRepository from '../../ repositories/user /UserRepository';
import SystemResponse from '../../libs/SystemResponse';

class TraineeController {
    static instance: any ;
    private userRepository: UserRepository = new UserRepository() ;
    static getInstance() {

        if (TraineeController.instance) {
           return TraineeController.instance;
        }

        TraineeController.instance = new TraineeController();
        return TraineeController.instance;
    }

    create = async (req: Request , res: Response ) => {
        try {
            console.log('::CREATE TRAINEE:::::');

            const traineeData = req.body;

            const trainee = await this.userRepository.createUser(traineeData);
                if (!trainee) {
                    return SystemResponse.error(res, 404, 'Trainee Added UnSuccessfull');
                }
                return SystemResponse.success(res, trainee , 'Trainee Added Successfully');
        } catch (err) {
            return SystemResponse.error(res, 404, 'Trainee Added UnSuccessfull');
        }
    }

    update = async (req: Request , res: Response ) => {
        try {
            console.log('::UPDATE TRAINEE:::::');

            const traineeData = req.body;

            const trainee = await this.userRepository.updateUser(traineeData.id, traineeData.dataToUpdate);
                if (!trainee) {
                    return SystemResponse.error(res, 404, 'Trainee Updated UnSuccessfull');
                }
                return SystemResponse.success(res, traineeData, 'Trainee Updated Successfully');
        } catch (err) {
            return SystemResponse.error(res, 404, 'Trainee Updated UnSuccessfull');
        }
    }
    list = async (req: Request , res: Response ) => {
        try {
            console.log('::Trainee LIST:::::');
            let sortBy;
                    if (req.query.sortBy === 'email')
                    sortBy = { email: 1 };
                    else if (req.query.sortBy === 'name')
                    sortBy = { name: 1 };
                    else
                    sortBy = {updatedAt: 1};

            const trainee = await this.userRepository.listOFUser('trainee', sortBy, req.query.skip, req.query.limit);
                if (!trainee) {
                    return SystemResponse.error(res, 404, 'No List Exist');
                }
                const countTrainee = await this.userRepository.countTrainee();
                const data = {
                    count: countTrainee,
                    records: trainee
                };
                return SystemResponse.success(res, data, 'List Of Trainees');
        } catch (err) {
            return SystemResponse.error(res, 404, err.message);
        }
    }
    delete = async (req: Request , res: Response ) => {
        try {
            console.log('::Delete TRAIMEE::::');

            const traineeData = req.params;

            const trainee =  this.userRepository.deleteUser(traineeData.id);
                if (!trainee) {
                    return SystemResponse.error(res, 404, 'Trainee Deleted UnSuccessfull');
                }
                return SystemResponse.success(res, trainee, 'Trainee Deleted Successfully');
        } catch (err) {
            return SystemResponse.error(res, 404, 'Trainee Deleted UnSuccessfull');
        }
    }
}

export default TraineeController.getInstance();