const fs = require('fs');
const path = require('path');
const csvFilePath = path.join(__dirname,'customer-data.csv');
const csv = require('csvtojson');

csv()
  .fromFile(csvFilePath)
  .on('end_parsed', (jsonObj) => {    
    fs.writeFileSync(path.join(__dirname,'test.txt'), JSON.stringify(jsonObj, null, 2), (error) => {
      if(error){
        return console.log(err.message);
      }
    });
  })
  .on('end', (error) => {
    console.log('End');
  });
