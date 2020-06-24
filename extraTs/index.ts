import { equilateral, diamond } from './patterns';
import { haspermissions, validateUsers } from './utils';
// patterns equilateral
equilateral(6);
// pattern diamond
diamond(5);
// permission
const x = haspermissions('getUsers', 'trainee', 'read');
console.log(x);
// validate email
import { users } from './constants';
validateUsers(users);
