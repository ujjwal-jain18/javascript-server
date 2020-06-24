import {permissions} from "../constants";

export default function hasPermission(moduleName, role, permissionType){
    let data = permissions[moduleName];
    let operation = data[permissionType];
    return operation.some(element => {if (element === role)
    return true;
    else
    return false});


}