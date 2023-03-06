const serviceCategory=require('../repositery/serviceCategory')


module.exports={
    addServiceCategory:async function(req,res){
        var response=await serviceCategory.addServiceCategory(req)
       return response
    },
    updateServiceCategory: async function(req,res){
        var response=await serviceCategory.updateServiceCategory(req)
        return response
    },
    deleteServiceCategory: async function(req,res){
        var response=await serviceCategory.deleteServiceCategory(req)
        return response
    },
    allServiceCategory: async function(req,res){
        var response=await serviceCategory.allServiceCategory(req)
        return response
    }
}