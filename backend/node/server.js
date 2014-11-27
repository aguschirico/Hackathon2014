var http = require("http");
var url = require("url");

function init(route) {
  function onRequest(request, response) {
    
	var pathname = url.parse(request.url).pathname;
    
	route(pathname);
	
	response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hola Mundo");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Servidor Iniciado.");
}

exports.init = init;