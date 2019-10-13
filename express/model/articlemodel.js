let sqlBase=require("./sqlbase");
class articlemodel extends sqlBase{
    constructor(){
        super();
    }
    getArticleById(topic_id,callback){
        let sql=`select*from articles where topic_id=${topic_id}`;
        this.connection.query(sql,function(err,rest){
            if(err){
                console.log(err.message);
                return;
            }
            callback(rest);
            console.log(rest);
            
        })
    }
}
module.exports=articlemodel;