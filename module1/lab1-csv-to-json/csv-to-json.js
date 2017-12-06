const fs = require('fs');
const path = require('path');

fs.writeFileSync(path.join(__dirname,'test.txt'), 'Hey!', (error) => {
  if(error){
    return console.log(err.message);
  }
  console.log("The file was saved!");
});