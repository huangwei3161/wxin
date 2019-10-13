let express=require("express");
let app=express();
let bodyParser=require("body-parser");
let  urlencodedParser = bodyParser.urlencoded({
    extended: false
  });
  app.use(express.static("public"));
  app.all("*", function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "http://192.168.3.151:8888");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", " 3.2.1");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  });
  
  let topics=require("./controller/topicscontroller")
   app.get("/index",topics.topic)

  // let articles=require("./controller/articleController")
  // app.get("/index",articles.index)


  app.listen(8888, function() {
    console.log("启动");
  });
  