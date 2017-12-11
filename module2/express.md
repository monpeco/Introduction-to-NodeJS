#### Express Framework   Express Overview   Overview

### Video: Express Overview

https://youtu.be/FvcsxPUezPc

>> Hello everyone. Welcome to module two.
In this module, we will cover Express Framework.
Express for framework is the
most popular Node.js framework.
If a Node.js developer
considers to build a web application,
most of the times express
is at least one of the options, of course,
there are other frameworks,
but express is definitely one of
those options for new Node.js projects.
And a lot of existing web projects is build on
express because it's been around for a very,
very long time, especially,
in Node.js because Node.js
it's a relatively new technology.
Express has been for a few years.
It's been around and it's been used in
production at many, many large projects.
So, first of all,
we will discuss why express.
I will highlight some of the benefits of
express and why I think it's
a great framework to use or at least to consider using.
After that, we will look at
the typical structure of your express application.
We will go item-by-item,
and we will discuss what are some of
the components that constitute a proper express app.
After that, we will discuss some of
the features that you can use
to render your response or to send your response back,
and also, how you can work with your real parameters,
extract data from a query string,
and also, how you construct your own middleware.
In case you're wondering what is the middleware,
it's a system of plugins for Express framework.
And we conclude our module with
a nicely round-up obligation.
We will build a RESTful API
which will have a few endpoints,
which will constitute a CRUD.
CRUD, it's create, read, update, and delete.
So, with those four operations,
you will learn how to do pretty much everything
you need to do for a certain RESTful API entity.
This module will give you a good overview of Express,
as well as some practical skills.
So, let's jump straight to the lesson, why Express.js.



### Express Overview

**Express.js** is a web framework based on the core Node.js http module and Connect components. The components are 
called middleware and they are the cornerstones of the framework philosophy configuration over convention. 
In other words, Express.js systems are highly configurable, which allows developers to freely pick whatever 
libraries they need for a particular project. For these reasons, the Express.js framework leads to flexibility 
and high customization in the development of web applications.

This module will build a solid foundation of Express development by teaching the following topics:

### Why Express and Express Installations

* Why Express?
* Express and Express Generator Installation

### Hello World with Express

* Hello World with Express
* Typical Express Project Structure
* Typical Express app Structure

### Creating and Using Middleware

* Middleware
* Creating Middleware
* Parsing body
* Useful middleware from npm

### Implementing REST API Routing

* Implement REST API routing
* Handling various HTTP requests
* Request object
* Response object

### URL Parameters, Query Strings and Input Validation

* Defining and accessing URL parameters
* Accessing query string data
* Input validation

### Summary of Module 2: Express Framework

### Module 2 Tutorial Lab: REST API with Express

### Module 2 Assignment Lab: RESTful Blog API

### Module 2 Assessment

---

#### Express Framework   Why Express and Express Installations   Why Express

# Video: Why Express?

https://youtu.be/GcKRdksk-4s

>> Why Express.js? That's a great question.
Express.js allows you to do
certain things basically for free.
You will get certain features
because framework will implement those for you.
Let me give you an example.
When you're only using Core HTTP module,
you would need to parse the incoming data yourself,
so you will get just a string.
String is useless.
You need to have a JavaScript object or
Node.js object which you can work with,
such as an array or just an object.
So, Express will do that for
you by you just applying a simple middleware,
a simple plugin for Express.
More on, what about
certain URLs and certain URL parameters?
So, typically, we have ID
of a special entity such as accounts/123.
So,123 would be an ID of that entity,
and that information would be in the URL.
With Express, you get that feature for free.
So you can extract that ID from the URL automatically,
and that will be populated in an object,
just sitting and waiting for you to access it.
Similarly with a query string data.
With the Core GDP,
you would have to do that parsing yourself with Express,
Express will do that for you.
That's not all. With Express,you can organize your code,
organize your routes, your business logic in a nicer,
in a better manner.
It's very easy to create a module and then,
import that module and plug it in your Express app.
And that module would have
certain routes such as routes for /accounts.
Another file might have routes for /transactions,
yet another file might
have routes for /users. So you can see.
Express will allow you to modularize your application,
which will make it easier to maintain and
to basically look and read your code and
understand what is happening because
your code will be nicely organized in multiple files.
Those are not all of the benefits.
There are more benefits, but those are
the main benefits of Express.
And as the last note,
because Express is so popular,
I would like to highlight that Express has
a vast ecosystem of plugins which are called middleware.
And the way they work,
you would import that middleware.
It's an npm. It's an npm package.
You would install it and import it and
then you would apply it to your server.
This way, Express serves as
a foundational layer for your own framework.
So you can start very,
very small, very minimal.
You can use only the features that you need.
And then, as your application progresses,
as your application becomes more and more advanced,
and you need more and more complex features,
you can just pick and choose whatever middleware,
whatever plugins you need
and install them, configure them,
apply them very easily with just a couple lines of code,
and you will end up with your own framework,
which is based on the Express,
by customizing that middleware.
Contrast that with some of
the other frameworks which
offer you the complete solution.
Oftentimes, I end up fighting with
those opinionated complex frameworks
because I need a much simpler solution.
So, I end up extracting a lot of
functionality from
those big opinionated advanced framework.
Express takes an opposite approach.
With Express, you start small,
you start minimal and then,
you grow as you need only if you need.
That's my favorite approach,
but also as the numbers on GitHub shows,
a numbers of downloads on npm shows.
It's one of the most popular framework in Node.js.
So, definitely, other developers
consider this approach beneficial.
So those are the main reasons why you should use Node.js.
So let's get down to actually using Express,
and let's build our first "Hello
World" server in the next video.


### Why Express?

Node.js is a relatively young platform when it comes to frameworks (unlike Ruby or Java), but
 there's already a leader that has already become a de facto standard used in the majority of
 Node.js projects: Express.js.

Express is the most popular web application framework for Node. It is easy to work with since 
it ties into Node's functional paradigm. Some of the benefits of Express (for more features, 
see Express vs. http) include:

* Deliver static content
* Modularize business logic
* Construct an API
* Connect to various data sources (with additional plugins)
* Write less code (see Express vs. http)
* Validate data (with additional plugins)

### Core http Module Server Example

Here's an example from my book Full Stack JavaScript (Apress, 2015) of a small RESTful API built with the core http module. This server has only two endpoints: POST /messages and GET /messages. The server connects to MongoDB. Just glance over the file:

```node
var http = require('http')
var util = require('util')
var querystring = require('querystring')
var client = require('mongodb').MongoClient

var uri = process.env.MONGOLAB_URI || 'mongodb://@127.0.0.1:27017/messages'
//MONGOLAB_URI=mongodb://user:pass@server.mongohq.com:port/db_name

client.connect(uri, function(error, db) {
  if (error) return console.error(error)
  var collection = db.collection('messages')
  var app = http.createServer(function (request, response) {
    var origin = (request.headers.origin || '*')
    if (request.method == 'OPTIONS') {
      response.writeHead('204', 'No Content', {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Methods':
          'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'content-type, accept',
        'Access-Control-Max-Age': 10, // In seconds
        'Content-Length': 0
      })
      response.end()
    } else if (request.method === 'GET' && request.url === '/messages') {
      collection.find().toArray(function(error,results) {
        if (error) return console.error(error)
        var body = JSON.stringify(results)
        response.writeHead(200,{
          'Access-Control-Allow-Origin': origin,
          'Content-Type':'text/plain',
          'Content-Length':body.length
        })
        console.log('LIST OF OBJECTS: ')
        console.dir(results)
        response.end(body)
      })
    } else if (request.method === 'POST' && request.url === '/messages') {
      request.on('data', function(data) {
        console.log('RECEIVED DATA:')
        console.log(data.toString('utf-8'))
        collection.insert(JSON.parse(data.toString('utf-8')),
        {safe:true}, function(error, obj) {
          if (error) return console.error(error)
          console.log('OBJECT IS SAVED: ')
          console.log(JSON.stringify(obj))
          var body = JSON.stringify(obj)
          response.writeHead(200,{
            'Access-Control-Allow-Origin': origin,
            'Content-Type':'text/plain',
            'Content-Length':body.length
          })
          response.end(body)
        })
      })
    } else {
    	response.end('Supported endpoints: \n/messages\n/messages')
    }
  })
  var port = process.env.PORT || 1337
  app.listen(port)
})
```

Can you see some problems with the code? There is a lot of extra work such as JSON.parse() and
 Content-Type/Content-Length headers. The code organization is not elegant due to the if/else
 conditions. The modularization of different routes is hard.

The bottom line is that http has all the functionality to build HTTP servers, but it's a very
 low-level implementation which will require you to code a lot of additional things. That's 
 where Express comes to the rescue!

### Express vs. http

If you write serious apps using only core Node.js modules (refer to the previous snippet for 
an example), you most likely find yourself reinventing the wheel by writing the same code
 continually for similar tasks, such as the following:

* Parsing of HTTP request bodies
* Parsing of cookies
* Managing sessions
* Organizing routes with a chain of if conditions based on URL paths and HTTP methods of the requests
* Determining proper response headers based on data types
* URL params and query strings parsing
* Automatic response headers
* Routes and better code organization
* Myriads of plugins (called middleware)
* Request body parsing (with a module)
* Authentication, validation, session and more! (with modules)

With Express you can develop APIs much faster!

Express.js is an amazing framework for Node.js projects, and it's used in the majority of web
 apps, which is why this second chapter is dedicated to getting started with this framework.


---

#### Express Framework   Why Express and Express Installations   Installing Express as a local dependency

# Installing Express as a local dependency

The general rule of Node is that if you plan to use an npm module with `require()`, then you need to install 
it locally (i.e., in node_modules). Thus, for a new project, create a folder and a `package.json` file:

```
mkdir express-hello-world
cd express-hello-world
npm init -y
```

Then, you can install express as a dependency locally:

```
npm install express
```

Or with an exact version:

```
npm install express@4.13.3
```

### Installing Scaffolding

There's another module called Express Generator which is a scaffolding. Developers use the generator to jump 
start their Express development because the generator will create files and folders for different template 
engines and CSS libraries

**Install Express.js command-line generator:**

```
npm install -g express-generator
```

Using the Generator

Now we can use the CLI to spawn new Express.js apps.

```
express todo-list-app
cd todo-list-app
npm install
npm start
```

The Express.js Generator Command-Line Interface offers support for CSS libraries and template engines. For example, to create an app with Stylus support, type the following:

```
express -c styl express-styl
```

Then, as the instructions in the terminal tells us (Figure 2-5), type:

```
cd express-styl && npm install
DEBUG=my-application ./bin/www
```

Open the browser of your choice at http://localhost:3000 to view the result.

---

#### Express Framework   Hello World with Express   Hello World with Express

# Video: Hello World with Express

TODO: missing video

### Hello World with Express

Create a new folder and create a package.json in it:

```
mkdir express-hello-wolrd
cd express-hello-world
npm init -y
```

Then create a new file named app.js using your favorite editor (mine is VS Code!). Next, type the following 
code to create an Express app and define a single route (endpoint):

```node
const express = require('express') 
const app = express() 

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(3000)
```

Save the file and navigate to your newly created folder using the terminal. Launch the node script with:

```
node app.js
```

Once the application is launched, leave the terminal window open and open your favorite browser at localhost:3000. 
You should see hello world.

Congratulations. Your first Express server is working.

---

#### Express Framework   Hello World with Express   Express Project Structure

# Express Project Structure

One of the good things about Express is that it is a very configurable framework. It won't enforce a certain way to do 
things. This is useful because it allows you to customize almost anything.

However, this ability to configure and customize might be daunting to first-timers because they don't know what is the 
best practice. Let me show you the best practice for organizing the files, i.e., the recommended Express project structure.

**Structure**

* app.js: main file, houses the embedded server and application logic
* /public: contains static files to be served by the embedded server
* /routes: houses custom routing for the REST API servers (not needed for a web app)
* /routes/users.js: endpoint/routes for resources such as users
* /views: contains templates that can be processed by a template engine (not needed for REST APIs)
* /package.json: project manifest
* /www: boot up script folder

**Note**: a web app is a traditional web application (thick server) with 100% server-side rendering while a REST API is 
a data only server (rendering happens and UI is hosted on the clients)

---

#### Express Framework   Hello World with Express   Typical Express App Structure

# Typical Express App Structure

The main Express app (server) file is typically named app.js, server.js or index.js. It has the following sections in 
the order from top of the file to the bottom of the file:

1. Imports
2. Instantiations
3. Configurations
4. Middleware
5. Routes
6. Error handlers
7. Server bootup or server export

If we go back to our hello world example, we can see some of the sections but not all of them:

```node
// Imports
const express = require('express') 
// Instantiations
const app = express() 
// Routes
app.get('/', (req, res)=>{
  res.send('hello world')
})
// Bootup
app.listen(3000)
```

### Configuring Express

The Express server could be configured before it starts (none of the configurations are mandatory). Developers define 
(set) configuration via the `set` method where the first argument is the name and the second is the value:

```node
const express = require('express')
const app = express()
app.set('port', process.env.PORT || 3000)
app.set('views', 'templates') // The directory the templates are stored in
app.set('view engine', 'jade')
```

In the code above, views sets the template directory (folder with server-side templates) to `templates` instead of the 
default value of views. The line after that with `view engine`, sets the template engine to jade.

---

#### Express Framework   Creating and Using Middleware   Middleware

# Video: What is Middleware

TODO: missing video

### What is Middleware

The Middleware pattern is a series of processing units connected together, where the output of one unit is the input 
for the next one. In Node.js, this often means a series of functions in the form:

```node
function(args, next) {
  // ... Run some code
  next(output) // Error or real output
}
```

The middleware pattern implements continuity. The request is coming from a client and a response is sent back to the client.

> request->middleware1->middleware2->...middlewareN->route->response

Express has a middleware manager so developers only need to apply the middleware with `app.use()`. Take a look at this example:

```node
var express = require('express')
var app = express()
//... Define middleware1-N
app.use(middleware1)
app.use(middleware2)
...
app.use(middlewareN)
...
```

### Middleware Order

Middleware are executed in the order specified. In the following example, the `logger('dev')` middleware causes requests to be 
logged before the `bodyParser.json()` middleware causes payloads of requests to be parsed into `request.body`.

```node
var logger = require('morgan')
var bodyParser = require('body-parser')
...
app.use(logger('dev'))
app.use(bodyParser.json())
```

**Two Types of Express Middleware**

There are two types of Express middleware:

* npm modules, e.g., body-parser from npm used with app.use(bodyParser.json())
* Custom middleware, e.g., app.use((req, res, next)=>{next()})

Developers can mix them. By utilizing middleware, developers can modularize their applications and reuse code.

---

#### Express Framework   Creating and Using Middleware   Creating middleware
#### 