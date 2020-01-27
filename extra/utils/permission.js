const permissions ={
'getUsers': {
all: ['head-trainer'],
read : ['trainee', 'trainer'],
write : ['trainer'],
delete: [],
}
};
function hasPermission(moduleName, role, permissionType)
{
let data=permissions[moduleName];
let operation=data[permissionType];
return operation.some(element => {if (element===role)
return true;
else
return false});
}
console.log(hasPermission("getUsers","trainee","read"));