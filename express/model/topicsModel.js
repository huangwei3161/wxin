let SqlBase=require("./sqlbase");
class topicmodel extends SqlBase{
    constructor(){
        super();
    }
    getTopicsById(callback){
        let sql=`select * from topics`;
        this.connection.query(sql,function(err,rest){
            if(err){
                console.log("[查询] - ", err.message);
                return;
            }
            console.log(rest);
            callback(rest);
        })
    }
    
}
module.exports =topicmodel ;