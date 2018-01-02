#### Persistence with MongoDB   MongoDB Overview   Overview

# Video: MongoDB Overview

https://youtu.be/9pw3UYP04s0

>> Welcome to module number three, Persistence with MongoDB.
First of all, what is MongoDB?
MongoDB, it's a NoSQL database.
Typically, NoSQL databases allow you
to build distributed and highly scalable sensor systems.
Unlike relational databases which
have relations built into the database,
NoSQL databases do not
support complex relationships between your entities.
Think about it and
NoSQL database such as a simple key value store.
This is one type of NoSQL databases.
Another type of NoSQL databases is a document store.
MongoDB is one of those type of databases.
It's a document store NoSQL database,
which allow you to build highly distributed,
highly scalable, and very efficient and fast systems.
What is interesting about MongoDB is that it's cumulus.
Meaning, you can prototype really,
really fast without having to
invest a lot of time into building schemas.
And later on, you can use some of
the tools in libraries to implement schemas,
of course, if you need them.
But the thing is that the prototyping is
faster when you're using NoSQL databases.
Another characteristic, because the data is not
structured in a NoSQL database such as MongoDB,
you don't have to have
the exact same data for each record,
for each document in the MongoDB database,
which is great when you don't know what data is coming.
Maybe, you're saving data from
Facebook and other documents coming from
Twitter and then you have data coming from
Microsoft and from other sources as well.
So that data will vary in its structure and
no single database is a great place to store
such data because in NoSQL all databases,
each document have a different structure.
So, what we will cover in the module.
First of all, we will cover MongoDB basics,
how to install MongoDB and how to
start up your database server.
Then we will take a look at Mongo REPL or Mongo Shell,
that's another name for the Mongo REPL,
read, evaluate, print, loop.
It's a small client.
It's a command line based client,
that will allow you to connect to
your database and you can perform all the operations.
You can insert a document into collection,
you can query your collections,
you can delete items from your collections.
So, everything that is possible to do with the database,
you can do it via the MongoDB REPL. That's not it.
After that, after we've learned how to work
with the Mongo database directly via the client,
we will take a look at how you can work
with the Mongo database from your Node.js application.
So, when you're building a Node.js application,
you would need to use some type of a library to
connect from your node application to the database.
And that one of those libraries,
it's a native Node.js MongoDB driver.
It's a native implementation of the library that will
allow you to connect and work with
your database from the Node.js code.
So, we will take a look how you can
connect to your database from within your
Node.js application and how you
can perform basic operations such as creating a record,
removing, updating that record,
and querying a database,
reading from a database.
We will finalize this module with
a project that will implement a restful API.
So again, we will be using Node.js and Express.
But in this case, we will add
the Mongo database native driver
and we will add the Mongo database itself.
And we will connect them together,
so our restful API can save
records and can extract records from the database.
So, all the records,
all the documents in that database,
they will be safely, persistently, securely stored.
And if something happens to your server,
the data will be still there so you
can safely restart the server,
or you can create multiple servers and they will all
access that data from one single database.
So, that's more or less
all the highlight and all the overview of this course.
And I'll see you in the next video in
which we will cover MongoDB basics.


---

#### Persistence with MongoDB   MongoDB Overview   Persistence with MongoDB

# Persistence with MongoDB

NoSQL databases, also called non-relational__databases, are more horizontally scalable, usually 
open source, and better suited for distributed systems. NoSQL databases deal routinely with larger 
data sizes than traditional ones. The key distinction in implementation comes from the fact that 
relationships between database entities are not stored in the database itself (no more join 
queries); they are moved to the application or object-relational and object-document mapping 
(ORM and ODM) levels—in our case, to Node.js code.

Another good reason to use NoSQL databases is that, because they are schema-less, they are perfect 
for prototyping and for Agile iterations (more pushes!).

MongoDB is a document store NoSQL database (as opposed to key value and wide-column store NoSQL 
databases, http://nosql-database.org/). It's the most mature and dependable NoSQL database 
available thus far.

In addition to efficiency, scalability, and lightning speed, MongoDB uses JavaScript–like language 
for its interface! This alone is magical, because now there's no need to switch context between 
the front end (browser JavaScript), back end (Node.js), and database (MongoDB).

The company behind MongoDB (formerly 10gen, http://en.wikipedia.org/wiki/10gen) is an industry 
leader and provides education and certification through its online MongoDB University
( https://university.mongodb.com/).

---

#### Persistence with MongoDB   MongoDB Overview   C.A.P. theorem

# C.A.P. theorem

CAP stands for:

* Consistency (strong vs. eventual-delay)
* Availability
* Partition tolerance (on cluster)

The theorem says you cannot have all three but you can have any two of them. In SQL databases 
you get C+A but in NoSQL databases you get A+P. AP allows for better scaling across multiple 
partitions but not all data will be consistent at all the times.

In some cases, consistency is not entirely crucial. Think about Facebook status updates for a 
moment. Does it really matter that some friends see a status update a few seconds or minutes 
later? Unless it's a breaking news, no. It doesn't matter. Facebook friends in Japan will see 
updates from their American friends a little bit slower than American friends but they'll see 
it eventually.

On the contrary, you want to have your banking balance to be consistent across all instances 
no matter what, regardless of whether you log in from a smartphone or desktop.

### No SQL!
Key characteristics of NoSQL (such as MongoDB):

* A+P from C.A.P.
* No relationships in the database.
* Redundancy is okay and sometime even good.

### NoSQL Databases

There are many types of NoSQL databases:

* Key-value stores (Redis, think hash tables)
* Document stores (mongoDB, think JSON)
* Columnar stores (hbase, average age)
* Graphs stores (neo4j)

### SQL vs. NoSQL
* Relation DB->normilized for any query, no biases
* NoSQL->biases to specific query patterns that we have

### MongoDB
MongoDB is a document store NoSQL database. It's great at being distributed and scaling.

---

### Persistence with MongoDB   MongoDB Basics   Launching MongoDB

# MongoDB Shell (mongo)

```shell
# Change user to /data/db
sudo chown ubuntu:ubuntu -R /data/db

# Execute mongod
mongod -f /etc/mongodb.conf 

# Another terminal
mongo
```

To launch the MongoDB shell (mongo), open a new terminal window, and run the following command:

    mongo

Your command prompt should change from default $ (if you had it), to Mongo's >. This means your 
client was able to connect to the local database instance and you are ready to start manipulating 
the data in that database instance.

### MongoDB Shell (mongo)

To test the database, use the JavaScript-like interface and commands such as save and find:

    > db.test.save({a:1})
    > db.test.find()

MongoDB uses JavaScript so all JavaScript and Node commands, classes and methods are a fair 
game in the Mongo console!

Some useful MongoDB Shell commands to know:

* > help: List of available Mongo shell commands
* > show dbs: List all the databases in this DB server/instance
* > use board: Work on a specific database named board
* > show collections: List all collections in this database
* > db.messages.remove();: Remove all documents from messages collection
* > var a=db.messages.findOne();
* > print json(a);
* > a.message="hi";
* > db.messages.save(a);: Save method
* > db.messages.find({});: A read query
* > db.messages.update({name:"John"},{$set:{message:"bye"}});: An update documents query
* > db.messages.find({name:"John"});: A read query with a specific condition/query which matches only documents with property name which equals to value John
* > db.messages.remove({name:"John"});: A remove query with a condition

There are no schemas in MongoDB. Each document can have a completely different structure. 
This allows for de-normalization for the purposes of performance optimization and creation 
of distributed systems at a large scale.

Indexes are used to quickly perform search queries. Without indexes, MongoDB has to scan 
every document in the collection and find the ones that match the query which takes a long 
time. _id is the unique index that is created default, but you can create a custom index 
with one or more properties/fields. Each new index field will slow down the insertion 
operation but will quicken a search/read query on that index. Thus, having the right 
indexes is a best practice and a balance.

---

#### Persistence with MongoDB   MongoDB Native Driver   MongoDB Native Driver (mongodb)

# MongoDB Native Driver (mongodb)

In addition to Mongo shell, we can build our own methods and clients using the Node.js 
Native Driver for MongoDB: https://github.com/christkv/node-mongodb-native.

Create a new project folder (or use an existing one, in this case skip directly to npm 
install) and create package.json with npm init:

    mkdir mongodb-script-project
    cd mongodb-script-project
    npm init -y

To install the driver use npm:

    npm install mongodb

In your node.js code, simply import the driver library:

```node
const mongodb = require('mongodb')
```

### Connecting to the Database
To establish the connection to the MongoDB instance, you need to have the database instance 
running. You can do so in a Terminal/Command Prompt with mongod. By default, it will be at 
localhost:27017.

In your Node script, create a client object and invoke connect() using a database URI which 
is a string that has the location and could have the username and password too.

```node
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

// Connection URI
const url = 'mongodb://localhost:27017/edx-course-db'
// Use connect method to connect to the Server
MongoClient.connect(url, (err, db) => {
  if (err) return process.exit(1)
  console.log('Kudos. Connected successfully to server')
  // Perform queries
  db.close()
})
```

As a result of this script, you should see “Kudos. Connected successfully to server”. If you 
see it, that means your DB instance was installed property, your driver was installed property 
and you can connect to the database instance from Node and start writing the code to manipulate
data in the database (save, remove, update, etc.). There are queries which are similar to the 
methods in the Mongo shell but they are asynchronous. Let's see how to perform these queries 
in the next lesson.


---

#### Persistence with MongoDB   MongoDB Native Driver   Working with MongoDB Native Driver

# Working with MongoDB Native Driver

The main operations that we want to perform on the MongoDB instance are:

* Create a new document
* Update an existing document
* Remove an existing document
* Reading from an existing document

We are going to learn the MongoDB queries by creating a few of our own Node methods which 
call the queries.

### Create a new document

There's no need to create a collection. The first time you save to a collection, it'll be 
created.

Take a look at how the method **insertDocuments**, which uses insert, is created. The insert() 
method is similar to the insert() command in the Mongo shell except for one big difference—in 
Node it is asynchronous which means we use a callback with the error-first signature.

**insertDocuments:**

```node
const insertDocuments = (db, callback) => {
  // Get reference to edx-course-docs collection
  const collection = db.collection('edx-course-students')
  // Insert 3 documents
  collection.insert([
    {name : 'Bob'}, {name : 'John'}, {name : 'Peter'} // 3 documents
  ], (error, result) => {
    if (error) return process.exit(1)
    console.log(result.result.n) // will be 3
    console.log(result.ops.length) // will be 3
    console.log('Inserted 3 documents into the edx-course-students collection')
    callback(result)
  })
}
```

The callback uses the error-first pattern so developers need to check for that. The result has the number of 
documents created in result.n.

The method insertDocuments needs to be placed inside of the connect callback to ensure that the proper db 
reference to database connection exists.

```node
const MongoClient = require('mongodb').MongoClient

// Connection URL
const url = 'mongodb://localhost:27017/edx-course-db'
// Use connect method to connect to the DB server
MongoClient.connect(url, (error, db) => {
  if (error) return process.exit(1)
  console.log('Connection is okay')
  insertDocuments(db, () => {
    db.close()
  })
})
```

### Updating Documents

To illustrate how to implement updating documents with the MongoDB native driver, create this method which 
uses update(). Notice, there's a second argument which has the new data to be put into the document(s) as 
well as the callback argument.

```node
const updateDocument = (db, callback) => {
  // Get the edx-course-students collection
  var collection = db.collection('edx-course-students')
  // Update document where a is 2, set b equal to 1
  const name = 'Peter'
  collection.update({ name : name }, { $set: { grade : 'A' } }, (error, result) => {
      if (error) return process.exit(1)
      console.log(result.result.n) // will be 1
      console.log(`Updated the student document where name = ${name}`)
      callback(result)
  })
}
```

The update can be nested inside the insertion callback because first the documents must be created before 
we can update them:

```node
insertDocuments(db, () => {
  updateDocument(db, ()=>  {
    db.close()
  })
})
```

### Removing Documents

To remove a document, invoke remove() preferably with a unique or specific enough query using _id or name 
as in this case:

```node
const removeDocument = (db, callback) => {
  // Get the documents collection
  const collection = db.collection('edx-course-students')
  // Insert some documents
  const name = 'Bob'
  collection.remove({ name : name }, (error, result) => {
    if (error) return process.exit(1)
    console.log(result.result.n) // will be 1
    console.log(`Removed the document where name = ${name}`)
    callback(result)
  })
}
```

Apply removeDocument by invoking it inside of the update's callback:

```node
const MongoClient = require('mongodb').MongoClient

// Connection URL
const url = 'mongodb://localhost:27017/edx-course-db'
// Use connect method to connect to the Server
MongoClient.connect(url, (error, db) => {
  if (error) return process.exit(1)
  console.log('Connection is okay')
  insertDocuments(db, () => {
    updateDocument(db, () => {
      removeDocument(db, () => {
        db.close()
      })
    })
  })
})
```

### Finding Documents

Read queries are performed by the find() method which takes a query condition for matching similar to 
update() or remove(). In our case, the query condition is empty meaning “find all”:

```node
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
```

Apply findDocuments() to the inner-most callback because we want to check how many documents we have 
after the removal of a document.

```node
const MongoClient = require('mongodb').MongoClient

// Connection URL
const url = 'mongodb://localhost:27017/edx-course-db'
// Use connect method to connect to the Server
MongoClient.connect(url, (error, db) => {
  if (error) return process.exit(1)
  console.log('Connection is okay')
  insertDocuments(db, () => {
    updateDocument(db, () => {
      removeDocument(db, () => {
        findDocuments(db, () => {
          db.close()
        })
      })
    })
  })
})
```

The result of this script (file mongodb-script.js) is:

```
Connection is okay
3
3
Inserted 3 documents into the edx-course-students collection
1
Updated the student document where name = Peter
1
Removed the document where name = Bob
2 2
Found the following documents:
[ { _id: ObjectID { _bsontype: 'ObjectID', id: [Object] },
    name: 'John' },
  { _id: ObjectID { _bsontype: 'ObjectID', id: [Object] },
    name: 'Peter',
    grade: 'A' } ]
    
```

As you can see, we created three documents in a collection. The update a document (Peter) and remove 
another document (Bob). In the end we had only two documents left.

---

