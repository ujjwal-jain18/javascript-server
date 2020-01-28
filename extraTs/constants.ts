import { Iusers, Iuser } from './interfaces';
const permissions: Iusers = {
  getUsers: {
    all: ['head-trainer'],
    read: ['trainee', 'trainer'],
    write: ['trainer'],
    delete: []
  }
};
export { permissions, users };
const users: Iuser[] = [
  {
    traineeEmail: 'ujjwal.jain@successive.tech',
    reviewerEmail: 'preet.saxena@successive.tech'
  },

  {
    traineeEmail: 'ujjwal.jainsuccessive.tech',
    reviewerEmail: 'preeta@succesive.tech'
  },

  {
    traineeEmail: 'ujju.jain@successive.tech',
    reviewerEmail: 'preet@successive.tech'
  }
];
