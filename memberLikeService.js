
const memberLike=require('../repositery/memberLike')

module.exports={
    addLikes:async function(req){
        var response=await memberLike.addLikes(req)
        return response;
    },
    deleteLikes:async function(req){
        var response=await memberLike.deleteLikes(req)
        return response;
    }
}