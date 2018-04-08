var db = require("../models/index.js")
module.exports = function(app) {

//render index.handlebars
app.get("/", function(req, res) {
  db.Article.find({"saved": false}, function(error, data) {
    var hbsObject = {
      article: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
//render saved.handlebars
app.get("/saved", function(req,res){
  db.Article.find({saved: true}, function(error, data){
    var hbsObject = {
      article: data
    };
    console.log(hbsObject);
    res.render("saved", hbsObject);
    
  });
});

}

