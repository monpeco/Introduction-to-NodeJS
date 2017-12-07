const fs = require('fs');
const path = require('path');
const csvtojson = require('csvtojson');
const csvFile = path.join(__dirname,'customer-data.csv');


csvtojson()
  .fromFile(csvFile)
  .on('end_parsed', (jsonObj) => {    
    fs.writeFileSync(path.join(__dirname, 'output.txt'), JSON.stringify(jsonObj, null, 2));
  }).on('end', () => {
    console.log('End');
  }).on('error', (error) => {
    console.log(`Error: ${error}`);
  });
