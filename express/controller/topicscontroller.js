let topicserver=require("../server/topicsserver");
module.exports.topic=function(req,res){
    
    let topics=new topicserver()
    topics.gettopic(function(data){
        console.log(data);
        res.json(data);
    });
};
