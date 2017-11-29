"use strict";

const https = require('https');
const url = "https://gist.githubusercontent.com/azat-co/a3b93807d89fd5f98ba7829f0557e266/raw/43adc16c256ec52264c2d0bc0251369faf02a3e2/gistfile1.txt";

https.get(url, (response) => {
    let rawData = "";
    let counter = 0;
    
    response.on('data', (chunk) => {
        rawData += chunk;
        counter++;
    });
    
    response.on('end', () => {
        try{
          const parsedData = JSON.stringify(rawData);
          console.log(parsedData, counter);
        }catch(error){
          console.err(error.message);
        }
    });
}).on('error', (error) => {
    console.error(`Get error: ${error.message}`);
});