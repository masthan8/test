const rolesService=require('../repositery/roles')
const commonService=require('../services/commonService')

module.exports={
    addRole: async function(req){
        var response= await rolesService.addRole(req)
       console.log(response.insertId);
       var rolesAndPrivileges=await commonService.rolesAndPrivileges(response.insertId,req)
       console.log(response);
        return response
    },
    updateRole:async function(req){
        var response = await rolesService.updateRole(req)
        console.log(response.insertId);
       var updatePrivileges=await commonService.updatePrivileges(response.insertId,req)
        return response
    },
    deleteRole: async function(req){
        var deletePrivilege=await commonService.deletePrivilege(req)
        var response= await rolesService.deleteRole(req) 
        return response
    },
    roleById:async function(req){
        var response= await rolesService.roleById(req)
        return response
    },
    rolesList:async function(req){
        var response= await rolesService.rolesList(req)
        return response
    }
}