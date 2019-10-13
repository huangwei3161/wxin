let articleModel=require("../model/articlemodel");
let topicsModel=require("../model/topicsModel");

class articleServer{
    constructor(){

    }
    getArticleById(callback){
        let articles=new articleModel();
        let topics=new topicsModel();
        
        topics.getTopicsById(function(topic){
            for(let i=0;i<topic.length;i++){
                let topic_id=topic[i].id;
                articles.getArticleById(topic_id,function(article){
                    topic[i].article=article;
                    if(i==topic.length-1){
                        callback(topic)
                    }
                })

            }
        })
    }
}
module.exports=articleServer;