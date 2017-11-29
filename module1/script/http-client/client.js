"use strict";

const http = require('http');
const url = 'http://nodeprogram.com';

http.get(url, (response) => {
    
      let c = 0;
      
      response.on('data', (chunk) => {
          c++;
          console.log(chunk.toString());
      });
      
      response.on('end', () => {
        console.log(`Response has ended with ${c} chunks`);
      });
      
  }).on('error', (error) => {
    console.error(`Got error: ${error.message}`);
  });