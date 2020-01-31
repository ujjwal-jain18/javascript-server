import { Request, Response } from 'express';

class TraineeController {
    static instance: any ;
    static getInstance() {
        if (TraineeController.instance) {
           return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;
    }

    create(req: Request , res: Response ) {
        console.log('::CREATE TRAINEE:::::');
        res.send({
            Status: 'Ok',
            messages: 'Trainee Added successfully',
            data : {
                 id: 1,
                 name: 'Trainee' ,
                 address: 'Noida'
            }
        });
    }
    update(req: Request , res: Response ) {
        console.log('::UPDATE TRAINEE:::::');
        res.send({
            Status: 'Ok',
            messages: 'Trainee Updated successfully',
            data : {
                 id: 1,
                 name: 'Trainee' ,
                 address: 'Noida'
            }
        });
    }
    list(req: Request , res: Response ) {
        console.log('::TRAINEE LIST:::::');
        res.send({
            Status: 'Ok' ,
            messages: 'Trainee Listed successfully',
            data : [{
                 id: 1,
                 name: 'Trainee' ,
                 address: 'Noida'
            },
            {
                id: 2,
                name: 'Trainee 1' ,
                address: 'Noida'
            }]
        });
    }
    delete(req: Request , res: Response ) {
        console.log('::DELETE TRAINEE:::::');
        res.send({
            Status: 'Ok',
            messages: 'Trainee Deleted successfully',
            data : {
                 id: 1,
                 name: 'Trainee' ,
                 address: 'Noida'
            }
        });
    }
}

export default TraineeController.getInstance();
