"use strict";

const http = require('http');
const port = 3000;

http.createServer((request, response)=>{
  response.writeHead(404, {
    'Content-Length': 'body.length',
    'Content-Type': 'text/plain'
  })
  response.status = 200;
  response.write('Hello');
  response.end('World\n');
  console.log("end");
}).listen(port);

console.log(`Server running at http://localhost:${port}`);

