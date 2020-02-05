import { permissions } from './constants';

function hasPermission(moduleName: string, role: string, permissionType: string): boolean {

    const data: any = permissions[moduleName];

    const opr: any = data[permissionType];

    return opr.some(element => {
        if (element === role) {
            return true;
        } else {
            return false;
        }
});
}
export default hasPermission ;
