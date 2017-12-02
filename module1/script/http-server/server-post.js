"use strict";

const http = require('http');
const port = 3000;

http.createServer((request, response) => {
	console.log(request.headers);
	console.log(request.method);
	console.log(request.statusCode);
	console.log(request.url);
	
	if(request.method == 'POST'){
		let buff = '';
		request.on('data', function(chunk){
			buff += chunk;
		});
		request.on('end', function(){
			console.log(`Body: ${buff}`);
			response.end('\nAccepet body\n\n');
		});
	}else{
		response.writeHead(200, {'content-type': 'text/plain'});
		response.end('\n\nHello world\n\n');
	}
}).listen(port); 

console.log(`Server running at Port ${port}`);

// curl -X POST -d '{key=value}' 'http://localhost:3000'