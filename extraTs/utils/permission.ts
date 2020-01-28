import { permissions } from '../constants';
export default function hasPermission(moduleName: string, role: string, permissionType: string): boolean {
    const data: any = permissions[moduleName];
    const operation: string[] = data[permissionType];
    return operation.some((element: any)  => {if (element === role)
    return true;
    else
    return false;
});
}