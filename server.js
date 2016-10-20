var express = require('express');
var app = express();
var morgan = require('morgan');
var path = require('path');
var config = require('./config');

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res){
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(config.port);
console.log("Express Server started...");
