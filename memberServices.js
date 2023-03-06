const member=require('../repositery/members')

module.exports={
    addMember: async function(req){
        var response=await member.addMember(req)
        return response
    },
    updateMember: async function(req){
        var response=await member.updateMember(req)
        return response
    },
    deleteMember: async function(req){
        var response=await member.deleteMember(req)
        return response
    },
    memberId: async function(req){
        var response=await member.memberId(req)
        return response
    }
}