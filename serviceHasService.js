
const service=require('../repositery/service')


module.exports={
    addService: async function(req){
        var response= await service.addService(req)
        return response
    },
    updateService:async function(req){
        var response = await service.updateService(req)
        return response
    },
    deleteService: async function(req){
        var response= await service.deleteService(req)
        return response
    },
    allServices:async function(req){
        var response= await service.allServices(req)
        return response
    }
}