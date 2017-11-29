"use strict";

const http = require('http');
const url = "http://nodeprogram.com/";

http.get(url, (response) => {
      let c = 0;    
      let rawData = '';
      
      response.on('data', (chunk) => {
        rawData += chunk;
        c++;
      });
    
      response.on('end', (chunk) => {
        console.log(rawData);
        console.log(`Ended with ${c} chunks`);
      });
    
  }).on('error', (error) => {
    console.log(`Got error: ${error.message}`);
  });