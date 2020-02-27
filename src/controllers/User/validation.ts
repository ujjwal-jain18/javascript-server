const validation = {
    post: {

        email: {
            required: true,
            string: true,
            regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((successive.tech))$/,
            in: ['body'],
            errorMessage: 'Email is required',
        },
        Password: {
            required: true,
            string: true,
            in: ['body'],
            errorMessage: 'Password is required',
        }
},
};
export default validation;