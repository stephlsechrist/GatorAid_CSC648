const express = require('express')
var requestApi=require("request");
const app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use('/assets',express.static('assets'))
app.use(require('body-parser').urlencoded({ extended: true }));
app.get("/",function (req,res) {
    res.render("index",{result:[]});
})
app.post("/search",function (req,res) {
    var url="http://localhost:5000/api/product/search/";
    if(req.body.search){
        url=url+req.body.search+"?category="+req.body.category;
    }else {
        url=url+"all"+"?category="+req.body.category;
    }
    requestApi.get(url,function (err,data) {
        var dataBody=JSON.parse(data.body);
        res.render("index",{result:dataBody});
    })

})
app.listen(4000)