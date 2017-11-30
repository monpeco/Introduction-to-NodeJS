"use strict";

const http = require('http');
const postData = JSON.stringify({ foo: 'bar' });

const options = {
	hostname: 'mockbin.com',
	port: 80,
	path: '/request?foo=bar&foo=baz',
	method: 'post',
	headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData)
	}
}

const req = http.request(options, (response) => {
	var rawData = '';
	var counter = 0;
	response.on('data', (chunk) => {
		console.log(chunk);
		rawData += chunk;
		counter++;
	});
	response.on('end', () => {
		try{
          const parsedData = JSON.stringify(rawData);
          console.log(parsedData, counter);
        }catch(error){
          console.log(error.message);
        }
		console.log("No more response data");
	});
});

req.on('error', (error) => {
	console.log(`Got error: ${error.message}`);
});

req.write(postData)
req.end()