const express = require('express') 
const logger = require('morgan')
const errorhandler = require('errorhandler')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')

const url = 'mongodb://localhost:27017/'
let app = express()
app.use(logger('dev'))
app.use(bodyParser.json())

MongoClient.connect(url, (error, client) => {
  if (error) return 1;
  console.log('Connection Successful');
  var db = client.db('mydb');        // Your DB
  
  let newDocument = { "msg" : "My First Document" };    // Your document
  
  db.collection('mycollections').insert(newDocument, (error, results) => {   // Your collection
    if (error) return 1;
    console.log('Insert Successful');
  })
  
  db.collection('mycollections')
    .find({})
    .toArray((error, accounts) => {
      if (error) return 1;
      console.log('Find Successful');
      console.log(accounts);
      return 0;
  })

})
  
  
app.listen(8080)
  




