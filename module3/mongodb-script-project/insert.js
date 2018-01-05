const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/edx-course-db';

MongoClient.connect(url, (error, client) => {
  if (error) return process.exit(1);
  
  console.log('Connection is OK');
  var db = client.db('mytestingdb');  
  var collection = db.collection('students');
  
  collection.insert([
    {name : 'Bob'}, {name : 'John'}, {name : 'Peter'}
  ], (error, result) => {
    if (error) { 
      console.log('error in insert');
      return process.exit(1);
    }
    console.log('result.result.n :' + result.result.n);
    console.log('result.ops.length: ' + result.ops.length);
    console.log('Inserted 3 documents into the edx-course-students collection');
  });
  client.close();
})