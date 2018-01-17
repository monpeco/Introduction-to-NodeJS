#### Working with Mongoose ODM   Mongoose Overview   Overview

# Video: Mongoose Overview

https://youtu.be/kW5hwUSqsYU

>> Hi there. Welcome to module number four,
working with Mongoose, object document mapper.
This module, will tell you, about,
some of the core concepts of Mongoose,
and why it's beneficial to use Mongoose.
To give you a quick overview.
You're working with one good DB,
and, you need to put some business logic.
You need to put, certain, logic, certain functions.
If this, then that.
So you have, certain scenarios,
you have certain rules, in your applications.
So where would you put it?
Maybe you can create a function.
Maybe, you would trigger that function when
certain event happens. That might be good.
But Mongoose will provide you
a special place to put that certain logic.
It's called pre and post hooks.
And that's what we will cover in this module.
It's one of the features of Mongoose,
and one of the benefits why you
would choose Mongoose versus just,
more good DB native no-jazz driver,
or, some other library.
But that's not all, Mongoose
will also provide you with schemas.
In fact, you can not use Mongoose
without creating a schema for your documents.
You might say, stop a second.
I thought Mongo DB is schemaless.
Yes. One good DB itself is schemaless,
but at a certain stage in your application,
once your application becomes bigger and larger,
you might want to prevent,a certain schemas.
First of all, you want to validate your data.
Right? You want to sanitize.
You don't want just any data
to be saved to your database,
especially once your applications
grows bigger and larger,
and more and more developers,
start working in it and more and more clients start,
using and sending you the data.
You want to sanitize your data to do that validation.
Also, you want, oftentimes
you want to enforce the schema,
because that will make your data consistent,
even in a non SQL database.
So all of that Mongoose
will provide for you and it will do,
that in its business layer,
in the application layer,
by, allowing you to create schemas,
or allowing you to create models,
and then allowing you to create methods, for the models.
And, in the end,
you would work with models.
You wouldn't work directly with Mongo DB method,
such as find or update.
You would create a model,
and then you would work with that model.
So model, it's a special Mongoose object,
and you would work with that abstraction,
with that class, which is,
in a way, it's nicer,
it's easier than, working with
low level API such as update,
or remove, which Mongo DB provides.
So, that's a quick overview of this module, and,
as I've said previously,
it's more or less optional,
it's more or less advanced topic.
A lot of projects I worked on,
we didn't use Mongoose,
and sometimes, the downside of Mongoose.
Mongoose queries can become very slow.
Then, the reason for that because,
Mongoose does so many things for you,
it has to run through a lot of functions,
and a lot of logic, before it
executes and gives you back the result of those queries.
So Mongoose, it's, not a default choice.
You need to consider the benefits, and the downsides,
of using such such a feature,
rich and, rather advanced libraries, such as Mongoose.
So, what we will cover in this course,
we will, discuss how to create schemas, and models.
Without schemas and models you cannot work with Mongoose,
so we will start with that.
We will create schemas for,
objects and, we will instantiate models,
and work with models, and we will
save those models to make our data persist.
After that, we will,
discuss how you can create methods on models,
and,the last topic, would be is,
to create, to enforce the validation,
and to create post,and pre hooks,
for the models and for certain operations such as safe.
At the end, we will,
refactor our restful API,
instead of using Mongo DB native driver,
we would be using Mongoose.
And you would have, nice all around experience,
and you would have a running application, using Mongoose.
So, that's all about this module.
It's, Mongoose, Its a great library to use, and to know.
It's been, we used it at Storify to a great success,
to, encapsulate our business logic.
I hope you'll enjoy it,
and I'll see you in the next video.


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

As in many other ORMs, in Mongoose, the cornerstone object is a model. To compile a schema 
into a model, use mongoose.model(name, schema)—for example,

```node
let Book = mongoose.model('Book', bookSchema)
```

The first parameter is just a string, which we can use later to pull the instance of this model. 
Usually, this string is the same as the object literal for the model (e.g., Book).

Models are used to create documents (actual data). To do so, call new ModelName(data)—for example,

```node
let practicalNodeBook = new Book({ name: 'Practical Node.js' })
let javascriptTheGoodPartsBook = new Book({ name: "JavaScript The Good Parts"})
```

It’s better to assign the initial value through the constructor versus using the document.set() 
method, because Mongoose has to process less function calls and our code remains more compact and 
better organized. Of course, this is possible only if we know the values when we create the instances.

Don’t confuse static with instance model methods. If we call a method on practicalNodeBook, it’s 
an instance method; if we call it on the Book object, it’s a static class method.

Models have static built-in methods that are very similar to Mongoskin and native MongoDB methods, 
such as find(), create(), and update().

---

#### Working with Mongoose ODM   Working with Mongoose Models   Mongoose Model Methods

# Mongoose Model Methods

A list of the static Mongoose model methods (invoked on a capitalized object, e.g., Book) along with their meaning follows:

* `Model.create(data, [callback (error, doc)])`: creates a new Mongoose document and saves it to the database
* `Model.remove(query, [callback(error)])`: removes documents from the collection that match the query; when finished, calls callback with error
* `Model.find(query, [fields], [options], [callback(error, docs)])`: finds documents that match the query (as a JSON object); possible [to select fields](http://mongoosejs.com/docs/api.html#query_Query-select) and use [options](http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#find)
* `Model.update(query, update, [options], [callback(error, affectedCount, raw)])`: updates documents, similar to native update
* `Model.populate(docs, options, [callback(error, doc)])`: populates documents using references to other collections; an alternative to another approach described in the next section
* `Model.findOne(query, [fields], [options], [callback(error, doc)])`: finds the first document that matches the query
* `Model.findById(id, [fields], [options], [callback(error, doc)])`: finds the first element for which _id equals the id argument (cast based on the schema)
* `Model.findOneAndUpdate([query], [update], [options], [callback(error, doc)])`: finds the first document that matches the query (if present) and updates it, returning the document; uses findAndModify
* `Model.findOneAndRemove(query, [options], [callback(error, doc)])`: finds the first document that matches the query and removes it when returning the document
* `Model.findByIdAndUpdate(id, [update], [options], [callback(error, doc)])`: similar to findOneAndUpdate using only the ID
* `Model.findByIdAndRemove(id, [options], [callback(error, doc)])`: similar to findOneAndRemove using only the ID

**Warning** Not all the Mongoose model methods trigger hooks. Some of them are executed 
directly. For example, calling Model.remove() does not trigger the remove hook, because 
no Mongoose documents are involved (instances of Model that use lowercase literals, 
e.g., practicalNodeBook).

The complete list of the methods is extensive; therefore, refer to the [official Mongoose 
API documentation](http://mongoosejs.com/docs/api.html#model-js). The most used instance methods are as follows:

* `doc.model(name)`: returns another Mongoose model
* `doc.remove([callback(error, doc)])`: removes this document
* `doc.save([callback(error, doc, affectedCount)])`: saves this document
* `doc.update(doc, [options], [callback(error, affectedCount, raw)])`: updates the document with doc properties, and options parameters, and then upon completion fires a callback with error, number of affectedCount and the database output
* `doc.toJSON([option])`: converts a Mongoose document to JSON (options are listed later)
* `doc.toObject([option])`: converts a Mongoose document to a plain JavaScript object (options are listed later)
* `isModified([path])`: true/false, respectively, if some parts (or the specific path) of the document are or are not modified
* `markModified(path)`: marks a path manually as modified which is useful for mixed (Schema.Types.Mixed) data types because they don't trigger the modified flag automatically
* `doc.isNew`: true/false, respectively, whether the document is new or not new
* `doc.id`: returns the document ID
* `doc.set(path, value, [type], [options])`: sets value at a path
* `doc.validate(callback(error))`: checks validation manually (triggered automatically before save())

Options for toObject() and toJSON() are as follows:

* `getters`: true/false, calls all getters including path and virtual types
* `virtuals`: true/false, includes virtual getters and can override the getters option
* `minimize`: true/false, removes empty properties/objects (defaults to true)
* `transform`: transforms the function called right before returning the object

For more methods, visit [the Mongoose document API](http://mongoosejs.com/docs/api.html#document-js).

---

#### Working with Mongoose ODM   Creating Mongoose Hooks and Methods   Custom Mongoose Methods

# Video: Custom Mongoose Methods

TODO: missing video

### Custom Static and Instance Methods

In addition to dozens of built-in Mongoose model methods, we can add custom ones. For example, 
to initiate a purchase, we can call the buy method on the document practicalNodeBook after we 
implement the custom instance method buy():

```node
bookSchema.method({
  buy: function(quantity, customer, callback) {
    var bookToPurchase = this
    //create a purchase order and invoice customer
    return callback(results)
  },
  refund: function(customer, callback) {
    //process the refund
    return callback(results)
  }
})
```

Static methods are useful when we either don’t have a particular document object or we don’t need it:

```node
bookSchema.static({
  getZeroInventoryReport: function(callback) {
    //run a query on all books and get the ones with zero inventory
    return callback(books)
  },
  getCountOfBooksById: function(bookId, callback){
    //run a query and get the number of books left for a given book
    return callback(count)
  }
})
```

### Hooks for Keeping Code Organized

In a complex application with a lot of interrelated objects, we might want to execute certain logic 
before saving an object. Hooks are a good place to store such logic. For example, we might want to 
upload a PDF to the web site before saving a book document:

```node
bookSchema.pre('save', function(next) {
    //prepare for saving
    //upload PDF 
    return next()
})
```

On the other hand, before removing, we need to make sure there are no pending purchase orders for 
this book:

```node
bookSchema.pre('remove', function(next) {
    //prepare for removing
    return next(e)
})
```

Hooks are triggered before or after an event is executed. Hooks allow you to place business logic 
where it's best suited - in the model schemas.

**Note**: Hooks and methods must be added to the schemas before compiling them to models—in other 
words, before calling the mongoose.model() method.

---


#### Working with Mongoose ODM   Advanced Mongoose Features   Virtual Fields

# Video: Virtual Fields and Nested Documents

https://youtu.be/QY00qHcB2YM

>> Welcome to module four, lesson five.
In this example, I will show you how to use
nested documents and also how to create a virtual field.
So let's start with nested documents.
Reviews, they belong to a book,
a book can have reviews.
And the type, if you don't know the type,
you can just say it's a mixed type,
and then the actual structure of
the reviews will be determined
later when you run this application.
The rest of the code is just,
we're using the schema and then we are
creating a mongoose document,
it's in memory until we save it.
When we save it, it becomes persistent,
it becomes permanent in the database.
And, let's also output the author photo,
the URL of the photograph of the author of this book.
And if you're familiar with gravatar,
it's a server that will allow us to
get that picture based on an e-mail.
So it's simple MD5 hash.
And we actually don't need to store
that because that link will
change depending on different things.
So we don't want to start,
it's just the link could be reproduced from the e-mail.
So that's where the virtual comes into power.
So with the virtual field,
we can just set up that photo profile,
author photo URL, this is how
you do it, bookSchema.virtual.
And it would be just like a normal field,
but it's not going to be actually saved in the database.
It will be computed on demand,
so only when you need it,
you will get the value and it's always
will be the accurate value coming from an e-mail.
You don't have to synchronize and worry about
database migration and changing
that field every time e-mail changes.
So you produce it on the fly for convenience.
You create a virtual because you
don't want to replicate this code.
To create a hash,
we would use the crypto.
Crypto, it's a core NodeJS module.
We don't need to install it with NPM,
and you can refer to other properties using this DHIS.
So for example, I'm getting the value of an e-mail,
removing all those spaces
and making it lowercase and then I'm using
MD5 hash here MD5 algorithm to hash that email string.
And this is how crypto works,
digest the output in the hex format.
The gravatar base, that's just a constant.
It's not going to change, https://secure.gravatar,
and we would append,
we would add our hash to that URL.
So look at this carefully.
We're returning the base plus the hash.
So, it's always will be accurate.
We don't even need to ask
authors to provide with the URL,
as long as they sign up for gravatar service.
And most of the people they do know,
they would get a nice picture of them already
populated on our webpage,
or in any place where we want to use it.
So for now, we would just output it in the content log.
So let's go ahead and try it.
So let's make sure I'm in the right folder,
by just dragging this folder into the terminal.
And so this is my file,
mongoose, I run it.
And you can see that the field is undefined.
So maybe that's because I didn't save it.
So now I saved the file.
So let's run it again.
And now it's defined.
So don't forget to save
the file when you're working with it.
So let's copy this URL and go to the browser.
let's past it and see if it's valid. Yes, it's valid.
So we got the proper MD5 hash and that's me.
It's a little bit small, but hope you can recognize me.
So we created a virtual field.
As you can see when I'm just
outputting my object it's not there.
If you don't believe me,
so let's copy this.
Let's copy this property.
Let's copy this ID.
So this is how you can create
a virtual field for all intents and purposes,
for all the rest of the code.
You can see that it acts as a normal field,
as a normal property of that document.
So I often use
this feature when we were changing the structure.
So I would create a virtual,
so that the old
documents which don't need this new property,
they don't have that property,
they can still function.
I don't get undefined error.
And also for things like gravatar, for hashes,
for things that are products of other fields.
For example, first name and last name,
so the full name would be,
you just concatenate first name and last name.
You don't need to save the full name.
So this is it for this video,
and I'll see you in the next one.


### Virtual Fields

Virtuals are fields that don’t exist in the database but act just like normal fields in a 
Mongoose document. To oversimplify, virtual fields are mock or fake fields that pretend to 
act and be normal ones.

Virtual fields are awesome for creating aggregate fields. For example, if our system requires 
to have first name, last name and the full name (which is just a concatenation of the first 
two names)—there’s no need to store the full name values in addition to the first and last 
name values! All we need to do is concatenate the first and last name in a full name virtual.

Another use case is to make the database backward compatible. For example, we might have 
thousands of user items in a MongoDB collection and we want to start collecting their 
locations. We have two options: run a migration script to add the default location (“none”) 
to the thousands of old user documents or use a virtual field and apply defaults at runtime!

To define a virtual we need to:

1. Call the virtual(name) method to create a virtual type ([Mongoose API](http://mongoosejs.com/docs/api.html#document-js))
2. Apply a getter function with get(fn) ([Mongoose API](http://mongoosejs.com/docs/api.html#virtualtype_VirtualType-get))

[Gravatar](http://en.gravatar.com/), for example, is a service that hosts profile images. 
The URL is always an md5 hash of the user’s e-mail. Therefore, we can get the virtual value 
(gravatarUrl) on the fly by hashing instead of storing the value (less overhead!).

In this example, we intentionally made the input email mixed cased and with a trailing space, 
and then applied crypto:

```node
Identity.virtual('gravatarUrl')
  .get(function() {
    if (!this.email) return null
    var crypto = require('crypto'),
      email = "Hi@azat.co "
    email = email.trim()
    email = email.toLowerCase()
    var hash = crypto
      .createHash('md5')
      .update(email)
      .digest('hex')
    var gravatarBaseUrl = 'https://secure.gravatar.com/avatar/'
    return gravatarBaseUrl + hash
  })
```

Or, the case mentioned earlier—getting a full name out of first and last—is as follows:

```node
userSchema.virtual('fullName')
  .get(function(){
    return this.firstName + ' ' + this.lastName
  })
```

Another scenario is when only a subset of the full document is exposed. For example, if 
the user model has tokens and passwords, we omit these sensitive fields by white-listing 
only the fields we want to expose:

```node
userSchema.virtual('info')
  .get(function() {
    return {
      service: this.service,
      username: this.username,
      name: this.name,
      date: this.date,
      url: this.url,
      avatar: this.avatar
    }
  })
```
  
Virtual fields allow for a flexible way to create database fields without having to have the 
actual fields in the database.

---

#### th Mongoose ODM   Advanced Mongoose Features   Nested Documents

# Nested Documents

The document storage model in NoSQL databases is well-suited to use nested documents. For example, 
instead of having two collections—posts and users—we can have a single collection (users), with 
each item of that collection having posts.

The decision of whether to use separate collections or nested documents is more of an architectural 
question, and its answer depends on usage. For example, if posts are used only in the context of 
users (their authors)—say, on the users’ profile pages—then it’s best to use nested documents. 
However, if the blog features multiple users’ posts that need to be queried independently of their 
user context, then separate collections fit better.

To implement nested documents, we can use the type Schema.Types.Mixed in Mongoose schemas (Schema, 
e.g., bookSchema or postSchema) or we can create a new schema for the nested document. An example 
of the former approach is as follows:

```node
const userSchema = new mongoose.Schema({
  name: String,
  posts: [mongoose.Schema.Types.Mixed]
})
//attach methods, hooks, etc.
let User = mongoose.model('User', userSchema)
```

However, the latter approach of using a distinct new subschema is more flexible and powerful:

```node
var postSchema = new mongoose.Schema({
  title: String,
  text: String
})
//attach methods, hooks, etc., to post schema
var userSchema = new mongoose.Schema({
  name: String,
  posts: [postSchema]
})
//attach methods, hooks, etc., to user schema
var User = mongoose.model('User', userSchema)
```

To create a new user document or to save a post to an existing user when working with a 
nested posts document, treat the posts property as an array and just use the push method 
from the JavaScript/Node.js API, or use the MongoDB $push operand 
(http://docs.mongodb.org/manual/reference/operator/update/push/). For example, we can add 
a post (newPost) to a user object, which is found by a matching ID (_id is userId):

```node
User.update(
  {_id: userId}, 
  {$push: {posts: newPost}}, 
  function(error, results) {
    //handle error and check results
  })
```

---

#### Working with Mongoose ODM   Advanced Mongoose Features   Nested Documents

# Nested Documents

The document storage model in NoSQL databases is well-suited to use nested documents. 
For example, instead of having two collections—posts and users—we can have a single 
collection (users), with each item of that collection having posts.

The decision of whether to use separate collections or nested documents is more of an 
architectural question, and its answer depends on usage. For example, if posts are 
used only in the context of users (their authors)—say, on the users’ profile 
pages—then it’s best to use nested documents. However, if the blog features multiple 
users’ posts that need to be queried independently of their user context, then 
separate collections fit better.

To implement nested documents, we can use the type Schema.Types.Mixed in Mongoose 
schemas (Schema, e.g., bookSchema or postSchema) or we can create a new schema for 
the nested document. An example of the former approach is as follows:

```node
const userSchema = new mongoose.Schema({
  name: String,
  posts: [mongoose.Schema.Types.Mixed]
})

//attach methods, hooks, etc.

let User = mongoose.model('User', userSchema)
```

However, the latter approach of using a distinct new subschema is more flexible 
and powerful:

```node
var postSchema = new mongoose.Schema({
  title: String,
  text: String
})

var userSchema = new mongoose.Schema({
  name: String,
  posts: [postSchema]
})

//attach methods, hooks, etc., to user schema

var User = mongoose.model('User', userSchema)
```

To create a new user document or to save a post to an existing user when working 
with a nested posts document, treat the posts property as an array and just use 
the push method from the JavaScript/Node.js API, or use the MongoDB $push operand
(http://docs.mongodb.org/manual/reference/operator/update/push/). For example, 
we can add a post (newPost) to a user object, which is found by a matching ID 
(_id is userId):

```node
User.update(
  {_id: userId}, 
  {$push: {posts: newPost}}, 
  function(error, results) {
    //handle error and check results
  })
```

---

#### Working with Mongoose ODM   Advanced Mongoose Features   Relationships and Joins with Population

# Relationships and Joins with Population

Although, there are no relationships stored in a NoSQL database such as MongoDB, 
we can do so in the application layer. Mongoose provides a feature called population. 
It allows us to fill certain parts of the document from a different collection. Let’s 
say we have posts and users collections. We can reference posts in the user schema:

```node
const mongoose = require('mongoose'),
  Schema = mongoose.Schema
  
const userSchema = Schema({
  _id     : Number,
  name: String,
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
};

const postSchema = Schema({
  _creator: { type: Number, ref: 'User' },
  title: String,
  text: String
})

let Post  = mongoose.model('Post', postSchema)
let User = mongoose.model('User', userSchema)

User.findOne({ name: /azat/i })
  .populate('posts')
  .exec(function (err, user) {
    if (err) return handleError(err)
    console.log('The user has % post(s)', user.posts.length)
  })
```

Note ObjectId, Number, String, and Buffer are valid data types to use as references.

In the previous query, we used a regular expression (RegExp), this feature is not 
exclusive to Mongoose. In fact, the native driver and its other wrappers, along with 
the mongo console all support RegExps. The syntax is the same as in normal 
JavaScript/Node.js RegExp patterns. Therefore, in a way, we perform a join query on 
our Post and User models.

It’s possible to return only a portion of populated results. For example, we can 
limit the number of posts to the first 10 only:

```node
  .populate({     
    path: 'posts',
    options: { limit: 10, sort: 'title' }
  })
```

Sometimes it’s more practical to return only certain fields instead of the full 
document. This can be done with select:

```node
  .populate({
      path: 'posts',
      select: 'title',
      options: { limit: 10, sort: 'title' }
    })
```

In addition, Mongoose can filter the populated results by a query! For example, 
we can apply RegExp for “node.js” to the text (a match query property):

```node
  .populate({
      path: 'posts',
      select: '_id title text',
      match: {text: /node\.js/i},
      options: { limit: 10, sort: '_id' }
    })
```

Here, it takes selected properties (select and then the field names of _id, 
title, text) and can be as customized as you want it to be. The best practice is 
to populate only the required fields because this avoids potential leakage of 
sensitive information and reduces overhead on the system.

The populate method also works on multiple document queries. For example, we can 
use find instead of findOne:

```node
User.find({}, {limit: 10, sort:{ _id: -1}})
  .populate('posts')
  .exec(function (err, user) {
    if (err) return handleError(err);
    console.log('The user has % post(s)', user.posts.length);
  })
```

Tip For custom sorting, we can add properties using name: -1 or name: 1 patterns 
and can pass the resulting object to the sort option. Again, this is a standard 
MongoDB interface and is not exclusive to Mongoose.

---

#### 