const newsCategory=require('../repositery/newsCategory')


module.exports={
    addNewsCategory: async function(req){
        var response=await newsCategory.addNewsCategory(req)
       return response
    },
    updateCategory: async function(req){
        var response=await newsCategory.updateCategory(req)
       return response
    },
    deleteCategory: async function(req){
        var response=await newsCategory.deleteCategory(req)
       return response
    },
    allCategory: async function(req){
        var response=await newsCategory.allCategory(req)
       return response
    }
}