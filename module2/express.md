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

https://youtu.be/axwRF-yHHR8

>> Building a server with Express.js is very, very easy.
All you really have to do is, of course,
you need to install Express so,
you install it with NPM and then you
import it using require method.
You save it in a variable called Express,
so later you can instantiate Express app,
typically, we use the app variable and then,
you can define your routes.
So first of all, let's define
the home route which is just a slash.
It's also called a route, route.
As the second argument,
you would see the request handler,
res.send instead of end,
we can use send which is a little bit more
advanced than just sending a plain text.
It will also add the headers,
and then app.listen, that's what will boot up the server.
Okay. So, when you're just starting this project,
Express application, you need to install Express.
All right. How do you do that?
NPM init, that's the very first thing
that I would do in every new project.
And then, npm i express,
space, dash E. Why E?
That's for exact version.
I'm using NPM version five,
so I don't need to add S which is for safe dependency.
And now, in my package.json,
I have the exact version of Express.
So that's pretty much it.
Let me go and save this file server.js,
and now I can use node-dev.
If you haven't installed node-dev,
you can install it with
either globally or locally as well.
Node-dev, save it, and even
better would be to add D
which stands for Development dependency.
Development dependency meaning,
when we push it to production,
we don't need it, we can just keep
it by adding dash dash production flag.
So, the devDependencies is node-dev
and I can also add it here,
node-dev server.js, so this would be my command.
But, on most computers,
people don't have this folder
configured node_modules/bin.
So let me add it just to make sure
all my coworkers and people who pulls this project,
the student's etcetera, etcetera,
they can also launch this node-dev, okay?
So just making it more robust.
NPM start, this is how we'll
launch this script, NPM start.
It's just an alias for this long command,
node-dev server.js, and you can
see this at the command, node-dev server.js.
Okay, so that should be running.
Let me open a new terminal and go ahead,
and curl to that.
Okay. So, it says cannot get to transactions.
So you can see that Express is very picky.
It would not allow me to specify any path,
cURL HTTP would do that but with Express,
you need to be very careful what path are you using.
Trailing slashes are okay,
but anything except the trailing slash would cause,
cannot get, and then the name of that path,
the name of that URL.
And this is my output on the server.
It's nothing because I don't have any console logs,
I don't have any log in here.
So that's what probably would be the next step,
and we can also add -i to get more information.
So we see ETag.
What is ETag?
ETag, that's a special caching mechanism
that express automatically adds.
The browsers use it to determine whether
it's the same response
or it's a new, it has been changed.
Then we see Content-Type, Content-Length, etcetera.
What is different between send and end?
So, we can also use a different method,
and because I'm using node-dev,
the server has been automatically restarted.
So you can see now the headers are gone,
some of them are gone,
so Content-Type is gone.
So that's what send is doing.
It's adding extra headers and it's also adding that ETag.
You can still see X-Powered-By: Express,
you can modify it for security.
You can say, PHP to confuse attackers.
Okay. So send, send will make sure that the type is good,
the type is correct.
So for example, if it's json,
it will also use the proper time.
So let's change it to Json now.
And now you can see that, it's application json.
So you can see Express's doing a lot
of things automatically for
you and it is just a nicer way to organize your routes.
You don't need to have a lot of if else conditions.
It's also very easy to pull this function into
a module especially when
you use this function many, many times.
It's better to modularize it
and then just use it by the name.
So that's it for the video.
In the next videos, we will see at
more complex Express examples.


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

https://youtu.be/-VyScDskIUg

>> Welcome to module two, lesson number four.
This would be a little bit more complex scenario of
the express application which uses server.js.
Also, we will be using
middleware and we will be using two types of middleware.
One is just a middleware created by us and
another type of middleware would
be middleware from an npm module.
So, you just saw me, I created server.js.
And I've just copy-pasted
the 'hello world' server because
we're going to start with this endpoint,
with this route 'get'.
Okay? Let's save it.
And then also we would need to create
package.json NPM init -y.
What is cool about this is automatically adds
the proper file name, server.js.
But let's add our node-def package
and let's also install it.
Node-dev DE.
So, it's going to be
dev dependency and it's going to be exact version.
So DE, capital DE.
While it's installing, we can go ahead and start
implementing some of our middleware to app.use.
That's what you would typically apply a middleware.
And what is a middleware? It's just a function.
A function which has three arguments,
request, response, and next.
Why it has that? Because it's in the middle.
The route function doesn't
have next because it's at the end.
But the middleware needs to have next.
Okay. So, don't forget to call it.
So, we're calling next.
So, this is good enough
but this middleware would not do anything.
So, let's implement logging, console.log(req.url ).
So, this way we would know what URL is coming.
Also let's output req.method so we would output a method.
And let's use the ES6 syntax
which is called string literal.
So, we would put a method
and we would put semi column and then the URL.
Okay. So, let's save it and
right now we have just one endpoint.
So, let's add more endpoints so we can
actually have responses for different accounts,
for different entities, for different resources, such as,
accounts and then maybe run transactions.
Transactions.
Transactions. And here we would change it to accounts.
Okay.
So, far so good.
Let's make sure the server is running.
So, we need to go into the lesson four folder.
And now we would say NPM start.
Why? Because I change it to the node-def.
And if you see a error like this,
it's actually good that we have this error,
'cannot find module Express'.
That's because I actually didn't install Express.
So let's go ahead and fix it.
NPM install Express.
And I want the exact version.
I do not want it to be a definite boundaries,
so that's why there is no
D. Must be a production dependency.
Okay. So, let's restart
our node-def with NPM script, NPM start.
Okay. So, it's running.
So, now we're going to make a curled request.
Okay. So, 'hello world'.
So, now we would go to accounts.
Okay. So it's accounts.
And now we would go to transactions.
Okay. So, the responses are correct.
And on the server,
we see our logs.
So, what did happen?
Every single request went
through this piece of code through this function.
That function was triggered.
And what you want to do here it's totally up to you.
You have a lot of flexibility to configure this behavior.
So middleware, it's all about organizing the code.
For example, if I didn't have this middleware,
I would have to put this console log.
I had to basically copy paste it everywhere.
Right? Which is bad bad bad.
We don't want to repeat ourselves.
With this simple app.use, pattern,
this method and this pattern,
middleware pattern, you can reuse a lot of code.
So the idea, every request
irrespective of the HTTP method,
irrespective of the URL would go through the middleware.
Okay? And then we can call next when it's over.
We can have multiple middleware, not just one.
So, let's say this middleware checks
for the API key and the way
you can do it if (req.query.api_key).
So, if it's defined,
then you can go and proceed.
Can proceed to the next route.
Else. Now you can say response status for (401).
No, it's not found.
It's found but it's not authorized.
(Msg: 'Not authorized').
Okay. So, of course you would have
to make a database call and
actually check for that value.
Right? But for now let's keep it simple.
Let's just make sure it's present in the URL.
So, we are going back and as you can see that
my server has been restarted.
So, I have the fresh code.
So, let's submit transactions and this should return 401.
So, you can see unauthorized 401.
That's because of this middleware.
So, it's a second middleware.
And if I go to the server side logs,
I still see 'get transactions'.
So, what happened?
The code went here,
then the next was called.
Then it went to the next middleware and that
next middleware stopped everything
because I already finished the response.
So, you can't complete the response, finish it,
write to it and finish it with
send-json or end only once.
Once you do it, that's it.
It's not going to continue.
It will only continue to call next without any argument.
Okay? So, now let's fix this call by
adding API key and 1, 2, 3, 4, 5, 6.
That's a great API key.
So, now I'm seeing status 200.
So, what actually happened?
It went to the first middleware,
then it went to the second middleware and this was true.
This was the truth value because it was defined.
Though the 'next' was called and then it
went and tried to match the URL based
on this pattern which is the regular expression for
all intents and purposes and then it ended up here.
Okay? You don't have to define middleware separately.
So, if your middleware applies to
all routes and all URL patterns,
then you would use app.use.
If it only applies to a specific route,
let's say only this route needs it,
you can just define it here, req, res, next.
Again, three arguments.
And you can define it using
anonymous function definition for our definition.
Or you can create a named function
and of course don't forget to call 'next'.
Console.log('accounts').
Let's call it inline middleware.
Inline because it's in line of the get method.
So, let's go ahead and try it.
So, I need to leave my API key,
otherwise we would never go there.
Accounts.
And now if you go back,
I would expect to see accounts inline middleware.
But if I remove my key, my API key,
my authentication or authorization will fail.
Okay? So, I never see accounts inline middleware.
So, this is actually from the previous request.
The second request just never goes there.
Okay? So, order matters.
When you work with middleware,
the order of the middleware matters a lot.
It goes from top to bottom and
Express implements the middleware manager.
All you have to do is just provide
the middleware functions themselves.
So, as you can see, the middleware function is
very similar to the request,
handler to the request, handler itself,
except that it has one extra argument 'next'.
Now, if you call this argument with an error object
such as (new error ('oopps)),
this will basically shortcut everything.
It will skip. It would not go to the next,
either middleware or request handler.
It will go to something called error handler.
App.use. And the way you define error handling,
you would specify, not two, not three,
but four arguments; error,
request, response and next.
And now let's output status.
Let's pretend it's our fault the server crashed and now
we would output the error itself.
Okay? So, what is happening when we get two accounts?
Imagine there was a problem.
So, we called the n-error.
We called next with an error.
So, we're going to
repeat the request but we need an API key.
Otherwise it would not lead us to go inside of that code.
So, you can see 500 internal server error.
So, that's because we never went to the line 25.
We just jump straight to the line 32.
And if you go back here,
you can also see that,
well, we didn't have any console logs.
But if you had a console log here,
you would see that as well.
Okay. So, that's how you work with middleware,
how you create your own custom middleware,
request handlers as well as error handlers.


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

# Creating middleware

Custom middleware is easy to create since it's just a function. Here's an example of creating a middleware and saving 
it as a variable which is used later to apply the middleware to the Express app:

```node
const middleware = (request, response, next) => {
  // Modify request or response
  // Execute the callback when done
  next()
}
app.use(middleware)
```

Developers can also create middleware right in the app.use() call using an anonymous function definition:

```node
app.use((request, response, next) => {
  // Modify request or response
  // Execute the callback when done
  next()
})
```

The first approach is better for modularizing because it's easier to move a named function or a function saved into a 
variable than an anonymous function.

### Passing References

`request` is always the same object in the lifecycle of a single client request to the Express server. This allows us 
to implement a very useful pattern in which developers pass data from one middleware to another and to a request handler.

For example, developers can connect to a database in one middleware and make it available in all the subsequent middleware 
functions and request handlers (routes).

```node
app.use(function (request, response, next) {  
  DatabaseClient.connect(URI, (err, db) => {
    // error handling
    request.database = db    
    next()
  })
})
```

In this middleware, database is available in the request object and we can run queries such as finding an application by the app ID:

```node
app.use((req, res, next) => {
  req.database.collection('apps').findOne({appId: req.query.appId}, (err, app) => {
    // error handling
    req.app = app
    next()
  })
})
```

This makes moving routes and middleware to other files (modularization) straightforward, i.e., keeping code neat and organized.

---

#### Express Framework   Creating and Using Middleware   Parsing body

# Parsing body

### Video: Using bodyParser middleware

https://youtu.be/ysWT2S7haVU

>> Now, let's go ahead and use
a middleware which is not ours,
is defined by another module such as bodyParser,
very convenient module,
so we would say require('body-parser'),
that's the npm name,
and for the Javascript for
the variable name we would use the camel case bodyParser.
And then, we would say app.use(bodyParser.json())
and that's it.
We have the parsing on the payload,
incoming payload and we will get
the object, rest done body.
So, for example, let's go
into transactions and console.log(req.body).
So, those would be our response,
before we can actually start using it.
We absolutely necessarily need to install the Parser.
Let's also install the exact version.
It's going to be a regular dependence,
it's not a devDependency.
So, that looked good.
Let's double check our server app.
It has restarted.
So now, we need to curl two transactions,
and we also need to send some data. So, let's do that.
So, let's make it key colon,
let's. Make it json.
So, the problem is that, we cannot POST.
We can only do the GET.
We don't have a POST, so it's very easy to change.
Let's change this route to the POST,
just for the sake of the exercise.
Now we send the data.
So, that went fine.
We have two hundred and on
the server we have empty object.
Okay. So, why is that?
Probably didn't like our data.
So, let's try to modify it a little bit.
I would try to use all double quotes,
because I know JSON needs double quotes everywhere.
But that still didn't help us.
So, what we actually need to do,
we need to also specify the header,
application/json, that will tell Express that,
and Express middleware the body parts are
that it's actually JSON payload which is coming,
because it could be URL uncoded,
it could be a form data,
could be many other formats.
So, let's provide this header.
This is how you do it.
Capital H 'Content-Type: applications/json' it's
an http request header,
and you can see this is the output,
output from the server.
So, we have a normal Node.js or Javascript object.
Instead of having a string,
we don't use json.pars,
we don't do anything,
it's just magically in there
based on the proper content type.
So, that's how you can use an external middleware.
Body parts are also has URL encoded
middleware and there are many, many other middleware.
For example, for authentication, for validation,
for assertions, express provides a lot of middleware.
Typically you would install them,
either put the version in
package.json Or in use and install,
then in your server file,
you would import it using require,
and then you would apply it.
And that's most of it.
Some of the middleware will
require you to configure it as well.
Others, such as body-parts.json,
doesn't require you to configure.
So, let's do one more,
let's do the logger instead of
our logging we would be
using a module, it's called morgan.
And again I'm using E for the installation.
Now, I will just copy this line
and change bodyParser to morgan.
And here I would say morgan,
hold up the line as well,
then I would say, (morgan('dev')).
Why dev? Morgan accepts different formats, So,
dev would be a very small footprint,
very small footprint for the logging.
Let's double check that our server restarted.
It's not looking good,
says moran not defined because I made a typo.
I need morgan, I need put a g there.
Okay, so now it's working and
I can submit another column.
Now, you can see this logging is much better than ours.
It has the status,
it has also the timing,
nine milliseconds, pretty good timing.
So, this is what's morgan gives you.
You can change the setting.
There is a few predefined formats for production,
you have more information for development,
you have less information,
or you can create your own format,
format for the server side locks.
So, morgan bodyParser and probably our handler.
Those are some middleware
which you probably couldn't use in all of your projects,
and I've shown you the steps so your npm install it,
import it, and then apply it.
Three steps, three easy steps.
So, that's it for the middleware,
you can create your own,
you can use middleware from an npm package.
Just remember the order matters.
That's why we put bodyParser in the beginning,
and we put the logs in the beginning, and then,
you do your application custom,
your custom middleware later,
you can abstract it into a file.
Abstraction is just a fancy word for cutting and pasting.
So, you can put it in a file and create a name.
For example, auth or loggin something like that, right?
Doesn't have to be all in one file.
Use module.export and use require.
So, that's it for this video. Thank you for watching.


### Request Body

Typically an HTTP request body, a.k.a. payload, has information from a POST request when a client wants to create a new 
entity/record or update an existing one with PUT. Developers who implement servers, often need to access the request 
body information.

There's body-parser npm module which does just that. No need to code anything. Just install body-parser and enable the 
json() and urlencoded() middleware to convert raw form data into JSON.

So first, install body-parser with npm:

```
npm install body-parser
```

Then import middleware:

```node
const bodyParser = require('body-parser')
```

And apply json to parse application/json type (that's what single-page applications and other JSON REST clients use):

```node
app.use(bodyParser.json())
```

Usage: AJAX/XHR from single-page applications and other JSON REST clients.

Sometimes, the type could be different from application/json. For example, HTML web forms `<form>` with action attribute 
use application/x-www-form-urlencoded. And there's just such a middleware for parsing this type too:

```node
app.use(bodyParser.urlencoded({extended: false}))
```

Usage: HTML web forms with action attribute.

Extended: false uses the querystring library while extended: true uses the qs library. The “extended:true” syntax allows 
for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with 
URL-encoded.


---

#### Express Framework   Creating and Using Middleware   Useful Middleware From npm

# Useful Middleware From npm

There are a lot of middleware modules to use. Every one of them is installed with the npm command using the module's npm name:

    npm install <package_name> --exact

Here's the most popular and useful Express middleware which you'll probably end up using in almost every project 
(listed the npm names):

* [body-parser](https://github.com/expressjs/body-parser) request payload
* [compression](https://github.com/expressjs/compression) gzip
* [connect-timeout](https://github.com/expressjs/timeout) set request timeout
* [cookie-parser](https://github.com/expressjs/cookie-parser) Cookies
* [cookie-session](https://github.com/expressjs/cookie-session) Session via Cookies store
* [csurf](https://github.com/expressjs/csurf) CSRF
* [errorhandler](https://github.com/expressjs/errorhandler) error handler
* [express-session](https://github.com/expressjs/session) session via in-memory or other store
* [method-override](https://github.com/expressjs/method-override) HTTP method override
* [morgan](https://github.com/expressjs/morgan) server logs
* [response-time](https://github.com/expressjs/response-time)
* [serve-favicon](https://github.com/expressjs/serve-favicon) favicon
* [serve-index](https://github.com/expressjs/serve-index)
* [serve-static](https://github.com/expressjs/serve-static) static content
* [vhost](https://github.com/expressjs/vhost) virtual host
* [cookies and keygrip](https://github.com/pillarjs/cookies) analogous to cookieParser
* [raw-body](https://github.com/stream-utils/raw-body) raw request body
* [connect-multiparty](https://github.com/expressjs/connect-multiparty), [connect-busboy](https://github.com/mscdex/connect-busboy) file upload
* [qs](https://github.com/tj/node-querystring) analogous to query
* [st](https://github.com/isaacs/st), [connect-static](https://github.com/andrewrk/connect-static)  analogous to staticCache
* [express-validator](https://github.com/ctavan/express-validator) validation
* [less](https://github.com/emberfeather/less.js-middleware) LESS CSS
* [passport](https://github.com/jaredhanson/passport) authentication library
* [helmet](https://github.com/helmetjs/helmet) security headers
* [connect-cors](https://github.com/antono/connect-cors) CORS
* [connect-redis](https://github.com/tj/connect-redis)

Express is a minimalistic framework. By using only the middleware you need for a particular project, you end up with a custom 
framework which is not bulky and doesn't have anything extra which your project doesn't need or use. The vast number of 
open-source middleware modules allows you to pick and choose and then modify the behavior of your application thanks to 
the flexible and configurable design of Express.

Feel free to print this list of commonly used Express middleware or download [cheatsheet from GitHub](https://github.com/azat-co/cheatsheets/tree/master/express4).


---

#### Express Framework   Implementing REST API Routing   Implement REST API routing

### https://youtu.be/Sn9_9YHHrYg

>> Let's take a look at another example.
In this example, we'll be learning
how to use different routes,
how to specify different routes.
So app.get, that's what you
already know from the Hello World,
and then of course app.post.
So we are using post methods for
typically to create a new resource,
to create a new entity.
In this case, I'm not using a database,
is just object profile.
And I'm also using body parser to get the Json data.
So req.body, that is the new value for the profile.
And then for update,
we typically use put.
Put is according to the standard,
it's a complete replacement.
We are merging the fields,
we are partially replacing app.put,
that's for complete replacement,
but most of the APIs use it for partial replacement.
So we're merging the fields using the object.assign.
And then there is sendStatus method,
which will send the status and finish all the response,
so we don't need to actually
turn the body of the response,
and for the delete there's app.delete.
So as you can see,
the methods they're just moving
the hdp names only with the lowercase.
So let's go ahead and run
this example to see if it's working or not.
In the package.json, I'm using node-dev,
and then you can see I have body parser
and express as dependencies.
So I npm start.
I also have this batch script with a bunch of curls,
and I also put to sleep for one second,
so we can test and see the differences better.
So I will launch
this batch script because
I don't want to type everything.
And you can see I'm sending a get request,
then post put then another get and then delete finally.
And if you go to the server,
these are and the server logs, created, updated, deleted.
So, we send different methods and then on the server,
we accept the different methods and
we did different logic,
we executed different functionality
based on those methods.
So as you can see, with Express it's very clean,
very easy to organize your logic
your a restful API in different places.
So we did the crunch create,
read, update and delete.
There are a few other methods such as,
options, head and patch.
Most of the times you don't need them.
Patch and head is for cross origin resource sharing,
but there is also a middleware,
you can just apply the middle ware and use it.
And then patch it's actually a partial replace.
So patch that's what you should use instead of put,
but because most developers do use put as
a partial replace not as a complete replace,
I'm showing it to you here.
So that's pretty much it.
It's very easy to define routes.
And of course, the functions themselves,
they would be coming from different files
in your real life project.
You don't want to have all of
the logic in one big file, sort of a.js,
you would be putting these functions
in different files and then you would use module.
Exports in that file to
create a module, to modularize it.
And here you would say require
a file and you would apply the name,
the name of the module and the name of the function.
You would not define functions here.
You would create routes folder in
your project and you would use it.
So that's it for this exercise.
I'll see you in the next video.


### Implementing REST API Routing

Servers must have routes, otherwise they are not useful at all. As a very basic
example, consider this Express route which serves Hello World string to requests 
made to / (root address):

```node
app.get('/', (req, res) => {
  res.send('Hello World')
})
```

You can notice that `app.get()` is referring to the GET HTTP method. That's what
browsers will use navigate to a URL in a browser.

The first argument is a URL string. It could be a regular expression as well. 
The second argument is a request handler with request and response objects.

If you have two routes in app.js:

```node
const {homePage, getUsers} = require('./routes')

app.get('/', homePage)
app.get('/users', getUsers)
```

The first one basically takes care of all the GET requests to the home page (/), 
such as http://localhost:3000/ and triggers the homPage method. The second takes 
care of requests to /users, such as http://localhost:3000/users and triggers the 
getUsers method.

Both of the routes process URLs in a case-insensitive manner and in the same way 
with trailing slashes.


---

#### Express Framework   Implementing REST API Routing   Handling Various HTTP requests


Similarly, Express allows you to define other HTTP methods via its app.{method_name}() API:

* `app.post()`: POST requests are used for creation of new entities
* `app.put()`: PUT requests are used for complete replacements or partial updates
* `app.patch()`: PATCH requests are used for partial updates
* `app.delete()`: DELETE requests are used for removal of existing entities
* `app.head()`: HEAD requests are idential to GET requests but without the body
* `app.options()`: OPTIONS requests are used to identify allowed methods

Additionaly, the method `app.all()` will define the request handler for any HTTP method. app.all('*', fn) is 
used mostly as a final catch to show 404: Not Found. If you put this first, then nothing will be executed after 
this route.

Take a look at this example in which a profile object is read and changed via four routes with GET, POST, PUT 
and DELETE methods:

```node
const express = require('express') 
const app = express() 

const profile = {
  username: 'azat',
  email: '[reducted]',
  url: 'http://azat.co'
}
app.get('/profile', (req, res)=>{
  res.send(profile)
})
app.post('/profile', (req, res) => {
  profile = req.body
  res.sendStatus(201)
})
app.put('/profile', (req, res)=>{
  Object.assign(profile, req.body)
  res.sendStatus(204)
})
app.delete('/profile', (req, res)=>{
  profile ={}
  res.sendStatus(204)
})

app.listen(3000)
```

To test this server, simply run it with node server.js and then use your favorite client such as CURL or Postman 
to submit HTTP requests.

The result is that with minimal code you can have all CRUD functionality via a RESTful HTTP interface.

---

#### Express Framework   Implementing REST API Routing   Express Request

# Express Request

The Express request object has more properties than the core http request from which it extends. These properties 
simplify development and provide extra functionality.

* `request.params`: URL parameters
* `request.query`: query string parameters
* `request.route`: current route as a string
* `request.cookies`: cookies, requires cookieParser
* `request.signedCookies`: signed cookies, requires cookie-parser
* `request.body`: body/payload, requires body-parser
* `request.headers`: headers

### Request Header Shortcuts

There are special properties and methods which provide access to HTTP request header information. These shortcuts 
are known as sugarcoating because everything they do can be done with request.headers.

* `request.get(headerKey)`: value for the header key
* `request.accepts(type)`: checks if the type is accepted
* `request.acceptsLanguage(language)`: checks language
* `request.acceptsCharset(charset)`: checks charset
* `request.is(type)`: checks the type
* `request.ip`: IP address
* `request.ips`: IP addresses (with trust-proxy on)
* `request.path`: URL path
* `request.host`: host without port number
* `request.fresh`: checks freshness
* `request.stale`: checks staleness
* `request.xhr`: true for AJAX-y requests
* `request.protocol`: returns HTTP protocol
* `request.secure`: checks if protocol is https
* `request.subdomains`: array of subdomains
* `request.originalUrl`: original URL

---

#### Express Framework   Implementing REST API Routing   HTTP Responses

# HTTP Responses

The response object is also accessible via routing handlers in Express because it is the second 
argument in the handler's callback:

```node
app.get('/users/:id', function (request, response) {
  // 'response' is the enhanced response from http
})
```

The response object is used to send the response and to modify an HTTP response before sending 
it out.

### Express Response Method

The Express response object has additional methods to the core http's statusCode(), writeHead(), 
end() and write().

* `response.redirect(url)`: redirect request
* `response.send(data)`: send response
* `response.json(data)`: send JSON and force proper headers
* `response.sendfile(path, options, callback)`: send a file
* `response.render(templateName, locals, callback)`: render a template
* `response.locals`: pass data to template

### HTTP Status Codes

To specify a status code, use the response object's status function:

```node
app.get('/user/:id', function (request, response) {
  // Logic to check for user
  if (!exists) {
    response.status(404)
  } else if (authorized) {
    response.status(200)
  } else {
    response.status(401)
  }
  // ...
})
```

### HTTP Status Codes

* 2XX: for successfully processed requests
* 3XX: for redirections or cache information
* 4XX: for client-side errors
* 5XX: for server-side errors

**Note**: for 3xx status codes, the client must take additional action following the completion of the current request

### Sending a Response

Use the response object's send function to send the client a response:

```node
app.get('...', function (request, response) {
  response.send('Hello World!')
})
```

### Sending a Response

The content-type is determined given the type of argument passed:

```node
response.send('Hello World!')       // Content-type: text/plain
response.send([ 5, 7, 9 ])          // Content-type: application/json
response.send({ name: 'John Doe' }) // Content-type: application/json
```

### Sending a Response

The content-type can also be hardcoded:

```node
response.set('Content-Type', 'text/plain')
response.send('Just regular text, no html expected!')
```

### Sending an Empty Response

Some status codes like 204 do not support (according to the W3C specs) a body. Express allows you to send an 
empty body:

```node
response.status(204).end()
```

Other status codes can be also used with an empty body:

```node
response.status(404).end()
```

---

#### Express Framework   URL Parameters, Query Strings and Input Validation   URL parameters

### Video: Accessing URL Parameters

TODO: missing video

### Accessing URL Parameters

To access URL parameters such as for IDs, names or other information, define the parameter in the URL pattern string 
with a colon `:` and then access the parameter with `req.params`.

For example, for requests like this one which has an user ID after the string /users/:

    GET /users/572611d856b11dcec61651bb
    
Use a URI segment parameterized by prefixing it with a semi-colon:

```node
app.get('/users/:id', (request, response) => {
  const userId = request.params.id
  fetchUser(userId, (error, user) => {
    if (error) return response.status(500).send(error)
    response.send(user)
  })
})
```

### Multiple URL Parameters

Express supports multiple URL parameters in a route. Simply define all of them in the URL pattern. For example for the 
request GET /users/:id/transactions/:transactionId/:filter, the route will look like:

```node
app.get('/users/:id/transactions/:transactionId/:filter', (req, res) => {
  const usersId = request.params.id,
    transactionId = request.params.transactionId,
    filter = request.params.filter
  res.status(200).send()
})
```

---

#### Express Framework   URL Parameters, Query Strings and Input Validation   Accessing Query String Data

### Accessing Query String Data

Express has a built-in query string parser unlike the core http module in which developers need 
to parse query strings manually. In Express, query string data can be accessed by `req.query.name`
where `name` is the key of the value in a query string. Because query string parsing is a built-in 
feature of Express, there is no need to install anything with npm.

For example, an URL query string value http://webapplog.com/search?term=node.js&page=1 can be 
accessed with `req.query.term` and `req.query.page` in a request handler such as `app.get()` or any other:

```node
app.get('/search', (req, res) => {
  db.find(
    {term: req.query.term}, 
    {page: req.query.page, limit: 10}, (error, results)=> {
    // error handling
    res.send(results)
  })
})
```

By default, Express.js doesn't allow developers to route by query string arguments, such as the following:

    GET: www.webapplog.com/?id=10233
    GET: www.webapplog.com/about/?author=10239
    GET: www.webapplog.com/books/?id=10&ref=201

However, it's trivial to write your own middleware. It might look like this:

```node
app.use((req, res, next) => {
  if (req.query.id) {
    // process the id, then call next() when done
  else if (req.query.author) {
    // same approach as with id
  else if (req.query.id && req.query.ref) {
    // process when id and ref present
  } else {
    next()
  }
})

app.get('/about', (req, res, next) => {
  // this code is executed after the query string middleware
})
```

In this middleware, if/else is used to execute different code based on the value from query string req.query.

---

#### Express Framework   URL Parameters, Query Strings and Input Validation   Input validation