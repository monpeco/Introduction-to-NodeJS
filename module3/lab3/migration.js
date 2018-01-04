const async = require('async');
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/edx-course-db'

MongoClient.connect(url, (error, client) => {
  console.log('Connecting ...')
  
  if (error) return process.exit(1)
  
  console.log('Connection is okay')

  
})

