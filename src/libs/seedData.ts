import UserRepository from '../../src/ repositories/user /UserRepository';
import * as bcrypt from 'bcrypt';
import config from '../config/configuration';

const userRepository = new UserRepository();

export default () => {
    bcrypt.hash(config.Password, 10, (err, hash) => {
        if (err) {
            console.error(err);
        } else {
        console.log('Data sedding is in progress');
    const user = {
        name: 'Trainee',
        address: 'Delhi',
        email: 'ujjwal.jain@successive.tech',
        Dob: new Date('04/18/1999'),
        mobileNumber: 9971780910,
        role: 'head-trainer',
        hobbies: ['Singing', 'Chess' ],
        Password: hash,
     };
     userRepository.count().then((count: number): any => {

         console.log('Count of Users is', count );

         if (!count) {
             return userRepository.create(user)
             .then((res) => {
                 console.log('User Seeded Successfully', res);
             });
         } else {
             console.log('User is Already Seeded');
         }
     }).catch((error: any) =>  console.error(error));
    }
    });
};