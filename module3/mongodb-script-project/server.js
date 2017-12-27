const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

const url = 'mongodb://localhost:27017/edx-course-db'

mongoClient.connect(url, (err,db) => {
  if(err) return process.exit(1);
  console.log('Connected to db.');
  db.close();
});