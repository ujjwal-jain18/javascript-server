import { IPERM }  from './interface';

const permissions: IPERM = {
'getUsers': {
    all: ['head-trainer'],
    read: ['trainee', 'trainer', 'head-trainer'],
    write: ['trainer', 'head-trainer'],
    delete: ['head-trainer'],
},
'Users': {
    all: ['head-trainer'],
    read: ['trainee', 'head-trainer'],
    write: ['trainer', 'head-trainer'],
    delete: [],
}
};


export { permissions };