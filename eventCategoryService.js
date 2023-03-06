const eventCategory=require('../repositery/eventCategory')

module.exports={
    addEventCategory: async function(req){
        var response=await eventCategory.addEventCategory(req)
        return response
    },
    updateEventCategory: async function(req){
        var response=await eventCategory.updateEventCategory(req)
        return response
    },
    deleteEventCategory: async function(req){
        var response=await eventCategory.deleteEventCategory(req)
        return response
    },
    eventCategoryId: async function(req){
        var response=await eventCategory.eventCategoryId(req)
        return response
    }
}