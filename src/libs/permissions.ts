import { permissions } from './constants';

function hasPermission(moduleName: string, role: string, permissionType: string): boolean {
const data: any = permissions[moduleName];
console.log(data);
const opr: any = data[permissionType];
console.log(opr);
console.log(role);

return opr.some(element => {
    if (element === role) {
        return true;
    }
    else
    return false;
});
}
export default hasPermission ;
