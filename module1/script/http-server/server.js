"use strict";

const http = require('http');
const port = 3000;

http.createServer((request, response) => {
	response.writeHead(200, {'Content-Type' : 'text/plain'});
	response.end('Hello World\n');
}).listen(port); 

console.log(`Server running at Port ${port}`);