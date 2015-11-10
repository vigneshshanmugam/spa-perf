var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	port = process.env.PORT || 3000;

app.use(express.static(__dirname));

server.listen(port,function(){
	console.log('Express listening at ' + port);
});