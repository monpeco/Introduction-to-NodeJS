"use strict";

const http = require('http');
const fs = require('fs');
const path = require('path');
const uuidv1 = require('uuid/v1');

const downloadPage = (url='http://nodeprogram.com') => {
  console.log('downloading ', url);
  const fetchPage = (urlF, callback) => {
    http.get(urlF, (response) => {
      let buff = '';
      response.on('data', (chunk) => {
        buff += chunk;
      });
      response.on('end', () => {
        callback(null, buff);
      });
    }).on('error', (error) => {
      console.log(`Got error: ${error.message}`);
      callback(error);
    });
  }
  const folderName = uuidv1()
  fs.mkdirSync(folderName);
  
  fetchPage(url, (error, data)=> {
    if (error) return console.log(error);
    fs.writeFileSync(path.join(__dirname, folderName, 'url.txt'), url)
    fs.writeFileSync(path.join(__dirname, folderName, 'file.html'), data);
    console.log('downloading is done in folder ', folderName);
  });

}

downloadPage(process.argv[2]);




