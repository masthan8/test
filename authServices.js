const auth=require('../repositery/auth')
const token=require('../repositery/insertToken')
module.exports={
    login: async function(req){
        var response=await auth.login(req)
        var insertToken=await token.token(response.token,response.userId)
       console.log(response.token);
        return response
    },
    logout: async function(req){
        var response=await auth.logout(req)
       /*  var insertToken=await token.token(response.token,response.userId)
        console.log(response.token); */
        return response
    }
}