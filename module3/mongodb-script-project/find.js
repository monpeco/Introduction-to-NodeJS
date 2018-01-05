const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/edx-course-db';

MongoClient.connect(url, (error, client) => {
  if (error) return process.exit(1);
  
  console.log('Connection is OK');
  var db = client.db('mytestingdb');  
  var collection = db.collection('students');

  collection.find({}).toArray((error, docs) => {
	if (error) return process.exit(1);
	console.log(`docs.length: ${docs.length}`);
	console.log(`Found the following documents:`);
	console.dir(docs);
  });
  client.close();
  
});