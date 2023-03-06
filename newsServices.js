const news=require('../repositery/news')


module.exports={
    addNews: async function(req){
        var response=await news.addNews(req)
       return response
    },
    updateNews: async function(req){
        var response=await news.updateNews(req)
       return response
    },
    deleteNews: async function(req){
        var response=await news.deleteNews(req)
       return response
    },
    listAllNews: async function(req){
        var response=await news.listAllNews(req)
       return response
    }
}