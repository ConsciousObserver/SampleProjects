fs = require('fs');
http = require('http');
url = require('url');
var port = 8080;

http.createServer(function(req, res) {
	var request = url.parse(req.url, true);
	var action = request.pathname;
	console.log("action : " + action);
	
	if (action.endsWith(".jpg") || action.endsWith(".jpeg") || action.endsWith(".png") || action.endsWith(".gif") ) {
		//slowdown image load
		res.writeHead(200, {'Content-Type': 'image/*' });
		setTimeout(function () {
			respondWithFile();
		}, 5000);
	} else if(action.endsWith(".html") || action.endsWith(".htm") ) {
		res.writeHead(200, {'Content-Type': 'text/html' });
		respondWithFile();
	} else {
		respondWithFile();
	}
	
	function respondWithFile () {
		console.log("requested file : " + action);
		var file = fs.readFileSync("." + action);
		res.end(file, 'binary');
	}
}).listen(port, 'localhost');

console.log("server started at http://localhost:" + port);