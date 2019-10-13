let articleServer=require("../server/articleserver");
module.exports.index=function(req,res){
let article=new articleServer();

article.getArticleById(function(data){
    console.log(data);
res.json(data);

})
}