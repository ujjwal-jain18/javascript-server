import IPERM  from './interface';

const permissions: IPERM = {
'getUsers': {
all: ['head-trainer'],
read: ['trainee', 'trainer'],
write: ['trainer'],
delete: [],
}
};


export { permissions };