var express = require('express');

var app = express();
var server = require('http').Server(app);
var path = require('path');

app.use(express.static('public'));

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname + '/templates/onepage.html'));
})
.get('/about', function(req, res){
	res.sendFile(path.join(__dirname + '/templates/onepage.html#about'))
})
.get('/portfolio', function(req, res){
	res.sendFile(path.join(__dirname + '/templates/onepage.html#portfolio'))
})
.get('/contact', function(req, res){
	res.sendFile(path.join(__dirname + '/templates/onepage.html#contact'))
});

app.listen(8080);
console.log('listening on port 8080');