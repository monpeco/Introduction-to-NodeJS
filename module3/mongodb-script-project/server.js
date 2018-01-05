const MongoClient = require('mongodb').MongoClient

// Connection URL
const url = 'mongodb://localhost:27017/edx-course-db'
// Use connect method to connect to the DB server
MongoClient.connect(url, (error, client) => {
  if (error) return process.exit(1)
  
  console.log('Connection is okay')
  var db = client.db('mytestingdb');  
  //console.log(db.listCollections())
  
        findDocuments(db, () => {
          client.close()
        })
        
  /*insertDocuments(db, () => {
    client.close()
  })*/
  
})

const removeDocument = (db, callback) => {
  // Get the documents collection
  const collection = db.collection('edx-course-students')
  // Insert some documents
  const name = 'John'
  collection.remove({ name : name }, (error, result) => {
    if (error) return process.exit(1)
    console.log(result.result.n) // will be 1
    console.log(`Removed the document where name = ${name}`)
    callback(result)
  })
}


var findDocuments = (db, callback) => {
  // Get the documents collection
  var collection = db.collection('edx-course-students')
  // Find some documents
  collection.find({}).toArray((error, docs) => {
    if (error) return process.exit(1)
    console.log(2, docs.length) // will be 2 because we removed one document
    console.log(`Found the following documents:`)
    console.dir(docs)
    callback(docs)
  })
}
  

const insertDocuments = (db, callback) => {
  // Get reference to edx-course-docs collection
  var collection = db.collection('edx-course-students')
  // Insert 3 documents
  collection.insert([
    {name : 'Bob'}, {name : 'John'}, {name : 'Peter'} // 3 documents
  ], (error, result) => {
    if (error) { 
      console.log('error in insert');
      return process.exit(1);
    }
    console.log('result.result.n :' + result.result.n) // will be 3
    console.log('result.ops.length: ' + result.ops.length) // will be 3
    console.log('Inserted 3 documents into the edx-course-students collection')
    callback(result)
  })
}