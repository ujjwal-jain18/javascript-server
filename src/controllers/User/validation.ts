const validation = {
    create: {
        id: {
            required: true,
            string: true,
            in: ['body'],
            custom: (value: any) => {
               console.log('Value', value);
               throw { error: 'Error Occured', message: 'Message' };
        } },
        name: {
           required: true,
           regex: /^[a-zA-Z]+(([,. -][a-zA-Z ])?[a-zA-Z]*)*$/,
           in: ['body'],
           errorMessage: 'Name is required',
        },
        address: {
            required: true,
            in: ['body'],
            string: true,
            errorMessage: 'Address is required',
        },
        email: {
            required: true,
            string: true,
            regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((successive.tech))$/,
            in: ['body'],
            errorMessage: 'Email is required',
        },
        mobileNumber: {
            required: true,
            number: true,
            in: ['body'],
            errorMessage: 'Number is required',
        },
        hobbies: {
            in: ['body'],
            required: true,
            isObject: true,
            errorMessage: 'hobbies is required'
           },
},
   delete: {
       id: {
           required: true,
           errorMessage: 'Id is required',
           in: ['params']
    } },
    get: {
        skip: {
              required: false,
              default: 0,
              number: true,
              in: ['query'],
              errorMessage: 'Skip is invalid',
            },
        limit: {
              required: false,
              default: 10,
              number: true,
              in: ['query'],
              errorMessage: 'Limit is invalid',
    } },
    update: {
        id: {
            required: true,
            string: true,
            in: ['body']
        },
        dataToUpdate: {
             in: ['body'],
             required: true,
             isObject: true,
             custom: (dataToUpdate: any) => {
                console.log('Value', dataToUpdate);
                throw { error: 'Error Occured', message: 'Message' };
            },
        }
    }
};
export default validation;