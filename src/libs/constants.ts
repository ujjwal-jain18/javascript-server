import { IPERM }  from './interface';

const permissions: IPERM = {
'getUsers': {
    all: ['head-trainer'],
    read: ['trainee', 'trainer'],
    write: ['trainer'],
    delete: [],
},
'Users': {
    all: ['head-trainer'],
    read: ['trainee', 'head-trainer'],
    write: ['trainer', 'head-trainer'],
    delete: [],
}
};


export { permissions };