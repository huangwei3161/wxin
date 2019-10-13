let topic=require("../model/topicsModel");
class topicserver{
    constructor(){}
    gettopic(callback){
        let Topic=new topic();
        Topic.getTopicsById(function(data){
            console.log(data);
            callback(data);
        })

        }
    }
module.exports=topicserver;