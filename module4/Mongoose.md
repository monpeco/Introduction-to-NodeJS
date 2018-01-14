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

# Mongoose Schemas

A Mongoose Schema is a JSON-ish class that has information about properties/field types of a document. It 
also can store information about validation and default values, and whether a particular property is 
required. Schemas can contain business logic and other important information.

In other words, schemas serve as blueprints for documents. They are needed for model creation (i.e., 
schemas are compiled into models). So, before we can use models properly, we need to define their schemas, 
e.g., the book schema with the name property of string type:

```node
const bookSchema = mongoose.Schema({
  name: String
})
```

Warning Mongoose ignores those properties that aren’t defined in the model's schema.

Mongoose Schema supports these data types:

* String: a standard JavaScript/Node.js string (a sequence of characters) type
* Number: a standard JavaScript/Node number type up to 253 (64-bit); larger numbers with [mongoose-long](https://www.npmjs.com/package/mongoose-long), [Git](https://github.com/mongoosejs/mongoose-long)
* Boolean: a standard JavaScript/Node Boolean type—true or false
* Buffer: a Node.js binary type (images, PDFs, archives, and so on)
* Date: an ISODate formatted date type, such as 2014-12-31T12:56:26.009Z
* Array: a standard JavaScript/Node array type
* Schema.Types.ObjectId a typical, MongoDB 24-character hex string of a 12-byte binary number (e.g., 52dafa354bd71b30fa12c441)
* Schema.Types.Mixed: any type of data (i.e., flexible free type)

Warning Mongoose does not listen to mixed-type object changes, so call markModified() before saving the object to make sure changes in the mixed-type field are persistent.

ObjectId is added automatically as a primary _id key if omitted in the insert or save methods; _id key can 
be used to [sort documents chronologically](https://docs.mongodb.com/manual/reference/method/ObjectId/). 
They are available through Schema.Types or mongoose.Schema.Types (e.g., Schema.Types.Mixed).

We have a great deal of flexibility in defining our document schemas—for example,

```node
const ObjectId = mongoose.Schema.Types.ObjectId,
  Mixed = mongoose.Schema.Types.Mixed
const bookSchema = mongoose.Schema({
  name: String,
  created_at: Date,
  updated_at: {type: Date, default: Date.now},
  published: Boolean,
  authorId : { type: ObjectId, required: true },
    description: { type: String, default: null },
    active: {type: Boolean, default: false},
    keywords: { type: [ String ], default: [] }
    description: {
      body: String,
      image: Buffer
  },
  version: {type: Number, default: function() {return 1;}},
  notes: Mixed,
  contributors: [ObjectId]
})
```

It’s possible to create and use custom types (e.g., there’s a module [mongoose-types](https://github.com/bnoguchi/mongoose-types)) that already have 
the rules for the ubiquitous e-mail and URL types.

Mongoose schemas are pluggable, which means, by creating a plugin, certain functionality can be extended 
across all schemas of the application.

For better code organization and code re-use, in the schema, we can set up static and instance methods, 
apply plugins, and define hooks.

Tip For validation in Node.js, consider using the validatior.js and express-validator modules.

---

#### Working with Mongoose ODM   Working with Mongoose and its Schemas   Custom Schema Types

Mongoose allows us to define/write getters (get), setters (set), and defaults (default) right in the Schema! 
Same goes for validate and some other useful methods.

Here's an examples of defining set (transfer to lower case when the value is assigned), get (when the number 
is extracted the “thousands” commas are added to it), default (brand new ObjectID is generated), and validate 
(checks for e-mail patterns and is triggered upon save()) all right in a JSON-like structure of the Schema:

```node
const postSchema = new mongoose.Schema({
  slug: { 
    type: String, 
    set: function(slug) { 
      return slug.toLowerCase()
    }
  },
  numberOfLikes: {
    type: Number,
    get: function(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
  },  
  posted_at: { 
    type: String, 
    get: function(value) { 
      if (!value) return null;
      return value.toUTCString()
    }
  },  
  authorId: { 
    type: ObjectId, 
    default: function() { 
      return new mongoose.Types.ObjectId() 
    } 
  },
  email: { 
    type: String, 
    unique: true, 
    validate: [ 
      function(email) {
        return (email.match(/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:<a href="?:[a-z0-9-]*[a-z0-9]" title="" target="_blank">a-z0-9</a>?\.)+<a href="?:[a-z0-9-]*[a-z0-9]" title="" target="_blank">a-z0-9</a>?/i) != null)}, 
      'Invalid email'
    ] 
  }
  })
```

If defining custom methods in the Schema definition is not an option for some reason (maybe our system 
requires us to do it dynamically), there's another approach to amending Schema behavior—to use chained 
methods:

1. Use Schema.path(name) to get SchemaType (official (http://mongoosejs.com/docs/api.html#schema_Schema-path)).

2. Use SchemaType.get(fn) to set the getter method (official [docs](http://mongoosejs.com/docs/api.html#schematype_SchemaType-get)).

For example,

```node
userSchema.path('numberOfPosts')
  .get(function(value) {
    if (value) return value
    return this.posts.length
  })
```

Path is just a fancy name for the nested field name and its parent objects, for example 
if we have ZIP code (zip) as a child of contact.address such as user.contact.address.zip, 
the the contact.address.zip is a path.


---

#### Working with Mongoose ODM   Working with Mongoose Models   Building Mongoose Models

# Video: Building models with Mongoose

https://youtu.be/nY6RZKqQ8pc

>> Let's take a look at
another example in which we have more functions and
methods to work with
the mongoose model and mongoose documents.
So, first of all, let's take a look at the schema.
You can set the default values.
For example updatedAt default.
So you can provide your value
when you create an object or you can skip it.
If you skip it, then the current date will be used.
Then I also have the name.
Published is the Boolean.
The name is the string,
and created is the date same as
updatedAt and createdAt, they're both dates.
And if you can see,
I'm providing author and the link
as well to the practical Node.js.
But they will be ignored.
So this object would not
have the fields which are not in the schema.
So schema is validated against,
if you have that property in the schema,
it will be in the object, in the document.
If you don't have it,
it will be just omitted.
And also the type must be the same as in the schema.
And then, I am checking,
is it a new object?
Is it a new document?
So, this would be true. It would be yes.
It's a new, because we never saved it.
Okay? So you can also check
that this object has been
saved to the database or not yet.
So, let's go ahead and save it.
So we save it as in the previous example,
perform the error handling,
but then we can also check for this new.
The new would be false in this case, okay?
And the main idea of mongoose is
that you don't work with the database directly.
You work with objects, okay?
So thus we create a document,
we work with documents
which are object, they're mongoose objects.
So, first we create that object.
We create the document and then we save it.
And then if you want to update it,
you would not run the update query,
you would find it.
So book with the capital B,
it's a model. It has findOne.
It has find by ID as well.
So you would find it.
And if you remember with
the native MongoDB driver for Node.js,
you had to use object ID.
Here, it will cast it for you.
So you can just provide the ID which is a string,
and it will cast it for you.
And, you can also filter
what fields do you want to output?
You can say, I don't need all the fields.
And this document is not going to be just a plain object,
it will be mongoose object.
That's why we can invoke to JSON,
or we can access the ID property,
and then we just modifying one field published true,
and then we can either save it.
So let's then come in to save,
or we can remove it.
So let's go ahead and run it.
Of course we need to be in the right folder,
and we need to have the mongoose module installed
which you can check in the node modules.
So, we have the mongoose and the dependences of mongoose.
That's great. So now we are executing our small script.
So first it says yes.
It's a new because it exist only in the memory.
It's not actually has
been saved to the physical database.
Then we saved it to the database.
And you can see that the link was ignored.
The author was ignored,
but other fields they made it through.
And also you can see that updatedAt,
we don't specify it,
but it was added
automatically because we have that default value.
And of course ID,
underscore ID, was also added.
And then, the new is false now.
So this output, it comes from this line.
Sorry, it comes from this line 25.
So the line 18 it's true.
And then on line 25 it's false now.
And then we finding that object using the model method.
So, book with a capital B, it's a model,
which can return as the mongoose document.
So bookDoc, that's a document,
it's exactly the same as Practical Node.
I'm just illustrating that you can
find that document many places.
You don't have to create it in order to use it.
You can find it later if you have object ID,
or any other pointer.
Okay. So this is our object.
So toJSON, we are outputting it back.
And then we can compare the ID.
The ID is exactly the same as we had before.
But why don't we have created?
Why don't we have updatedAt?
Well, that's because I specified this field.
So if you remove this field,
then we will get all the records.
So let's run it again.
And now you can see that I'm
getting all the records here.
So I have all the fields,
all the properties from that document,
not just the name.
And finally, the remove.
So remove, that will delete that object.
So use safe, use remove.
Do not use update directly because,
that's you just working with the MongoDB directly.
Try to find an object which would be the mongoose object,
the document object, and then it has
all those methods such as ID,
is new property, ID property,
safe method, remove method,
and also you can do many many other things which
I outline in the document and the text for this course.
Go ahead and check those methods.
This is the best practice,
so use the mongoose methods for the document,
and for the model as well.
So model, it's like a collection.
You can find, find by ID,
find and update as well.
It has a lot of methods, not just find.

### Building models with Mongoose

As in many other ORMs, in Mongoose, the cornerstone object is a model. To compile a schema into a model, use mongoose.model(name, schema)—for example,

```node
let Book = mongoose.model('Book', bookSchema)
```

The first parameter is just a string, which we can use later to pull the instance of this model. Usually, this string is the same as the object literal for the model (e.g., Book).

Models are used to create documents (actual data). To do so, call new ModelName(data)—for example,

```node
let practicalNodeBook = new Book({ name: 'Practical Node.js' })
let javascriptTheGoodPartsBook = new Book({ name: "JavaScript The Good Parts"})
```

It’s better to assign the initial value through the constructor versus using the document.set() method, because Mongoose has to process less function calls and our code remains more compact and better organized. Of course, this is possible only if we know the values when we create the instances.

Don’t confuse static with instance model methods. If we call a method on practicalNodeBook, it’s an instance method; if we call it on the Book object, it’s a static class method.

Models have static built-in methods that are very similar to Mongoskin and native MongoDB methods, such as find(), create(), and update().

---
