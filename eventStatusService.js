const eventCategory=require('../repositery/eventStatus')

module.exports={
    addMemberEventStatus: async function(req){
        var response=await eventCategory.addMemberEventStatus(req)
        return response
    },
    updateMemberEventStatus: async function(req){
        var response=await eventCategory.updateMemberEventStatus(req)
        return response
    },
    deleteMemberEventStatus: async function(req){
        var response=await eventCategory.deleteMemberEventStatus(req)
        return response
    },
    MemberEventStatusId: async function(req){
        var response=await eventCategory.MemberEventStatusId(req)
        return response
    }
}