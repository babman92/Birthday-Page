var express = require('express');
var app = new express();

var port = process.env.PORT || 2015;

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
})

app.listen(port, function(){
	console.log('Server started at port %s', port);
});