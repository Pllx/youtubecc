var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var $ = require('jquery');

app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/search', function(req,res){
  console.log('received post request');
  console.log(req.body.query);

  $.getJSON('http://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q='+
   req.body.query+'&key=AIzaSyCuEqJLhJwSPBWtn2rJ6kF5f5VaP6g7mAw', function(data){
     console.log('data is',data);
   });
  // $.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q='+
  // req.body.query+'&key=AIzaSyCuEqJLhJwSPBWtn2rJ6kF5f5VaP6g7mAw',null,function(data){
  //   console.log('got data');
  // });

});

app.listen(3000);
