var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('client'));
app.use(bodyParser.json());

app.post('/search', function(req,res){
  console.log(req.body);
});

app.listen(3000);
