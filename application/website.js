var express = require('express');
var app = express();
var router = express.Router();
var path = __dirname + '/AboutMePages/';
var path2 = __dirname + '/application/';

app.use(express.static('/public'))

app.use('/',router);
app.get('/',function(req, res){
  res.sendFile(path +'LandingPageVersion1.html');
});
router.get(('/AboutMePages/Nayan.html'),function(req, res){
  res.sendFile(path + 'Nayan.html');
});
  router.get('/AboutMePages/Ali.html',function(req, res){
  res.sendFile(path + 'Ali.html');
});
  router.get('/AboutMePages/George.html',function(req, res){
  res.sendFile(path + 'George.html');
});
  router.get('/AboutMepages/public/GeorgePicture.jpg', function(req, res){
  res.sendFile(path+'George.html');
});
  router.get('/AboutMePages/Stephanie.html',function(req, res){
  res.sendFile(path + 'Stephanie.html');
});
  router.get('/AboutMePages/Jackie.html',function(req, res){
  res.sendFile(path + 'Jackie.html');
});
  router.get('/AboutMePages/Nikhil.html',function(req, res){
  res.sendFile(path + 'Nikhil.html');
});
app.use('*',function(req, res){
  res.send('Error 404: Not Found!');
});
app.listen(80,function(){
  console.log('Server running at Port 80');
});
