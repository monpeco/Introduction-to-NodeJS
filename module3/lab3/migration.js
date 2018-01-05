const async = require('async');
const MongoClient = require('mongodb').MongoClient;

const batch = process.argv[2]
console.log(`batchSize: ${batch}`);

const url = 'mongodb://localhost:27017/edx-course-db'

MongoClient.connect(url, (error, client) => {
  
  console.log('Connecting ...');
  if (error) return process.exit(1);

  console.log('Connection is okay')
  var db = client.db('customerDB'); 
  const collection = db.collection('customers');
  
  collection.insert([
    {jam : 'this is my jam'}
  ], (error, result) => {
    if (error) { 
      console.log('error in insert');
      return process.exit(1);
    }
    console.log('result.result.n :' + result.result.n);
    console.log('result.ops.length: ' + result.ops.length);
  });
  
  client.close();
  
});

