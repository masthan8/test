const event=require('../repositery/events')

module.exports={
    addEvent: async function(req){
        var response=await event.addEvent(req)
        return response
    },
    updateEvent: async function(req){
        var response=await event.updateEvent(req)
        return response
    },
    deleteEvent: async function(req){
        var response=await event.deleteEvent(req)
        return response
    },
    eventId: async function(req){
        var response=await event.eventId(req)
        return response
    }
}