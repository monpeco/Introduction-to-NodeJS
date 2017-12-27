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