const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/edx-course-db'

// Use connect method to connect to the DB server
MongoClient.connect(url, (error, client) => {
  if (error) return process.exit(1)
  
  console.log('Connection is OK')
  var db = client.db('customerDB');  
  

  const collection = db.collection('customers')
  collection.remove({}, (error, result) => {
    if (error) return process.exit(1)
    console.log(`Removed ${result.result.n} documents\n`)
  })
  client.close();
  
})