import {equilateral,diamond} from "./patterns";
import {haspermissions,validateUsers} from "./utils";
let y=Number(process.argv[2]);
//patterns equilateral
equilateral(y);
//pattern diamond
diamond(y);
//permission
let x = haspermissions('getUsers','trainee','read');
console.log(x);
//validate email
import {users} from "./constants";
validateUsers(users);
