#### Working with Mongoose ODM   Mongoose Overview   Overview

# Video: Mongoose Overview

TODO: Missing video

# Module 4: Mongoose Overview

This module will build a solid foundation of Mongoose development by teaching the following topics:

### Working with Mongoose and its Schemas
1. Mongoose Basics
2. Mongoose Schemas
3. Custom Schema Types

### Working with Mongoose Models
1. Building Mongoose Models
2. Mongoose Model Methods

### Creating Mongoose Hooks and Methods
1. Custom Mongoose Methods

### Advanced Mongoose Features
1. Virtual Fields
2. Nested Documents
3. Relationships and Joins with Mongoose

### Summary of Module 4: Working with Mongoose ODM
### Module 4 Tutorial Lab: Relational queries with Mongoose
### Module 4 Assignment Lab: REST API with Mongoose
### Module 4 Assessment


---

#### Working with Mongoose ODM   Mongoose Overview   What is Mongoose

# What is Mongoose

Mongoose is a fully developed object-document mapping (ODM) library for Node.js and MongoDB. 
The advantages of using ODM are many and go far beyond code organization or the ease of 
development. ODMs are a crucial piece of modern software engineering.

### Why use Mongoose

Mongoose abstracts everything from the database, and the application code interacts only with 
objects and their methods. ODM also allows you to specify relationships between different types 
of objects and allows you to put business logic (related to those objects) inside classes.

In addition, Mongoose has built-in validation and type casting that can be extended and 
customized according to your needs. When used together with Express.js, Mongoose makes the 
stack truly adherent to the MVC concept.

Mongoose uses a similar interface to that of the Mongo shell, native MongoDB driver, and Mongoskin. 
For this reason, the main functions such as find(), update(), insert(), save(), remove(), and 
so on, look and act the same, which helps us to get started with using Mongoose faster.

---

#### Working with Mongoose ODM   Mongoose Overview   Mongoose Installation

# Mongoose Installation

First, we should install Mongoose with npm. Among many variations, this is one of the ways we 
can install Mongoose a new project folder:

    mkdir -p ./mongoose-project
    cd mongoose-project
    npm init -y
    npm install mongoose

That's it. You are ready to use Mongoose as dependency by importing it with require():

```node
const mongoose = require('mongoose')
```

We are ready to start using Mongoose!

---

#### Working with Mongoose ODM   Working with Mongoose and its Schemas   Mongoose Basics

# Video: Mongoose Basics

https://youtu.be/2XtKR2PzRxI

>> Welcome to Module Four, Lesson Two.
It's a basic example which will teach you
how to work with models and schemers as well.
So, first of all, let's take a look at the folder.
It only had this file,
this tiny file, and it doesn't have the mongoose itself.
So, let's go ahead and npm init it.
So, we have the package.json file.
So, we do have null,
and then npm install mongoose.
And don't forget the exact flag which is -E,
with a capital E. So,
now you can see there is node modules folder,
there is package.json, and it's all good.
So, let me just erase it and implement it line by line,
explaining what is happening.
So, first of all, as we always do,
we import a module because we need to use it.
So, we're safe in the same variable as its nvm name.
Mongoose.connect, that's what will enable us to
connect to the local instance
because we're specifying a local host,
and the database is test.
The project, you can admit it by default,
is 27017, and then let Book equals mongoose.model.
So, we are creating mongoose model,
and we're defining that the name is a string.
The book with a capital B would be the model name,
and then we create practicalNodeBook.
So, we're instantiating this new instance
of a model, it's called documents.
So, we're creating them document,
and it's a specific book.
So, the title is Practical Node.js which has
been at the top of search results on Amazon.com for many,
many months when search for
Node.js, and then practicalNodeBook.save.
So, all you need to do to save to persist this in
the physical database is just called the save method.
It takes one argument which is a callback function.
And again, it's a error first signature.
So, error is the first. We process it.
If we have an error, we exit.
If we don't have, then we output
the results and we exit it,
but in this case, with zero.
Zero means there is no errors.
One means we exit with an error.
So, save the file and let's go ahead and run it.
And you can see that it says,
"The object has been saved."
And it gives you the object ID.
So we can remember it.
So, let's copy it.
And we can go to the mongoui.
So, let's refresh it.
And then, if you remember,
the database was test,
that was in the URL.
And go to the books.
And this is it.
This is our ID.
So, you can see it.
Here is our object, the newly-created object.
Now, if we change this 2nd Edition,
save it and run it again,
now we can see that we have the 2nd Edition here.



### Mongoose Basics

It is straightforward to connect to MongoDB using Mongoose. To illustrate this, here’s a simple script that 
establishes a connection, creates a Mongoose model definition, instantiates the practicalNodeBook object, 
and then saves it to the database.

To have access to the library, we need to include the mongoose module in our program:

```node
const mongoose = require('mongoose')
```

Unlike the Node.js native MongoDB driver, which requires us to write a few lines of code, Mongoose can connect 
to the database server in one line. Mongoose requests are buffered, so we don’t have to wait for the 
established connection (vs. the MongoDB native driver, which usually requires a callback). To do this, just 
call mongoose.connect(uri(s), [options], [callback]).

The uniform resource identifier (URI) or connection string is the only required parameter, and it follows a 
standard format of type://username:password@host:port/database_name. In our simple example, the host is 
localhost, the port is 27017 (default), and the database name is test:

```node
mongoose.connect('mongodb://localhost/test')
```

Now the configuration phase is over and we can create a document that represents a particular instance of 
the model Book:

```node
let Book = mongoose.model('Book', { name: String })
let practicalNodeBook = new Book({ name: 'Practical Node.js' })
```

Mongoose documents come with very convenient built-in methods (http://mongoosejs.com/docs/api.html#document-js) 
such as validate, isNew, update, and so on. Just keep in mind that these methods apply to this particular 
document, not the entire collection or model. The difference between documents and models is that a document 
is an instance of a model; a model is something abstract.

It’s like your real MongoDB collection, but it is supported by a schema and is presented as a Node.js class 
with extra methods and attributes. Collections in Mongoose closely resemble collections in Mongoskin or 
native driver. Strictly speaking, models, collections, and documents are different Mongoose classes.

Usually we don’t use Mongoose collections directly, and we manipulate data via models only. Some of the main 
model methods look strikingly familiar to the ones from Mongoskin or native MongoDB driver, such as find, 
insert(), save, and so forth.

To finish our small script and make it write a document to the database, let’s use one of the document 
methods—document.save():

```node
practicalNodeBook.save((err, results) => {
  if (err) {
    console.error(err)
    process.exit(1)
  } else {
    console.log('Saved: ', results)
    process.exit(0)
  }
})
```

Here is the full source code for the mongoose.js file:

```node
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

let Book = mongoose.model('Book', { name: String })

let practicalNodeBook = new Book({ name: 'Practical Node.js' });
practicalNodeBook.save((err, results) => {
  if (err) {
    console.error(err)
    process.exit(1)
  } else {
    console.log('Saved: ', results)
    process.exit(0)
  }
})
```

To run this snippet, execute the node mongoose.js command (MongoDB server must be running in parallel).

---

####  Working with Mongoose ODM   Working with Mongoose and its Schemas   Mongoose Schemas

