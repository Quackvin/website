var express = require('express');

var app = express();
var server = require('http').Server(app);
var path = require('path');

app.use(express.static('public'));

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname + '/templates/index.html'));
});

app.listen(8080);