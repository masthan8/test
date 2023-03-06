const user= require('../repositery/user')


module.exports={
    addUser: async function(req){
        var response=await user.addUser(req)
        return response
    },
    updateUser: async function(req){
        var response=await user.updateUser(req)
        return response
    },
    deleteUser: async function(req){
        var response=await user.deleteUser(req)
        return response
    },
    userId: async function(req){
        var response=await user.userId(req)
        return response
    }
}
