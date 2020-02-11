import UserRepository from '../../src/ repositories/user /UserRepository';

const userRepository = new UserRepository();

export default () => {
    const user = {
        name: 'Trainee',
        address: 'Delhi',
        email: 'ujjwal.jain@successive.tech',
        Dob: new Date('04/18/1999'),
        mobileNumber: 9971780910,
        role: 'head-trainer',
        hobbies: ['Singing', 'Chess' ],
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
     }).catch((err: any) =>  console.error(err));

};