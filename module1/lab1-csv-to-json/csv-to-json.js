const fs = require('fs');
const path = require('path');
const csvtojson = require('csvtojson');
const csvFile = path.join(__dirname,'customer-data.csv');


csvtojson()
  .fromFile(csvFile)
  .on('end_parsed', (jsonObj) => {    // end_parsed is emitted when all CSV lines being parsed.
    fs.writeFileSync(path.join(__dirname, 'output.txt'), JSON.stringify(jsonObj, null, 2));
  }).on('end', () => {      // Indicate the end of the program.
    console.log('End');
  }).on('error', (error) => {
    console.log(`Error: ${error}`);
  });
