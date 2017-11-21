#### Introduction   Course Overview   Video: Course Overview

# Video: Course Overview

https://youtu.be/OjPd4eM1MDU

In this video, I will
tell you what we will cover in this course.
The course is broken down into four modules.
In module number one,
we will cover core Node.js
concepts such as how to launch a script,
how to work with the core modules such as HTTP and FS,
and a few other modules, what are globals,
and how to import files
and also export to create modules.
We will build simple HTTP clients and HTTP servers.
In module number two,
we will progress to Express framework.
Most developers do not develop just with core modules.
They use libraries and frameworks.
So, we will use
Express framework to build RESTful API server.
The RESTful API server will have four operations.
Main operations such as create,
read, update and delete, CRUD.
In module number three,
we will cover the persistence,
and we would use database MongoDB.
MongoDB, it's a non-sequel database
and it plays nicely with Node.js.
They both have JavaScript interface.
So we would leverage MongoDB and its native driver,
which is the Node.js library,
to enhance our RESTful CRUD API.
So our RESTful CRUD API,
at the end of the module three,
will have persistent layer
in the form of MongoDB database.
Finally, in the module number four,
we will take it to
the next level and we will start using Mongoose,
which is object document mapper.
If you're familiar with ORM libraries,
ODM, or object document mapper, it's very similar.
It provides you a level of abstraction,
so you don't have to work with
the database methods directly.
You can work with objects and
that provides you more convenient way.
Also, Mongoose has a lot of features and methods,
so we will cover them in module four.
At the of this course,
you will have a great overview
and a lot of skills around the foundation of Node.js,
as well as NPM, and MongoDB.
And you will have practical skills,
and you would build
few applications yourselves from scratch
that will give you enough confidence and
enough skills to start developing your own applications.


---

#### Introduction   Why Node   Video: Why Node.js

# Video: Why Node.js

https://youtu.be/eUIPT-sXd3o

>>You might be wondering,
why you should learn node.js And
some of you if you're taking this course,
you might already know.
But let me answer
this question and get you excited and tell you
all the benefits why you should learn node.js So first of
all node.js allows you to develop faster,
because there are a lot of
modules which you can tap into.
JavaScript, one of the most popular languages out there,
just because the sheer number of browsers that people
use surpasses any other platform.
So you can tap into the NPM,
which is node package manager.
You can tap into the NPM registry
to get pretty much any module.
So sometimes you don't even have to write that much code.
Another benefit is that,
you have to learn just one language.
With JavaScript you can develop for the browser,
can develop for the server which is node.js technology.
And then if you using MongoDB as your persistence layer,
as your database, then you can again leverage JavaScript.
So with one language,
you can basically code everywhere.
That includes mobile and
internet of things devices as well.
Embedded systems which are
more and more start to
use node.js as their main language.
My favorite benefit is that,
I'm developing faster when I use node.js.
My brain doesn't have to switch between different codes,
different styles, different indexes.
I used to make silly mistakes such
as forgetting a semicolon,
or putting a comma in the wrong place,
or just not remembering how to concatenate a string.
And I would have a documentation in front of me.
Right now, I don't do that because it's all one language.
The learning is much faster when you just use
one language across all parts of your application.
Another reason, if you are leading a team,
or you are building your own startup,
or your in a management position is that,
you can decrease your team size.
You don't have to have a dedicated backing team anymore.
Your front end engineers they
could develop on the back end and vice versa.
The new term for such development is
full stack JavaScript developer,
or generalized developer.
So, as you can see there are a lot of benefits.
And those benefits, they're powered by
certain characteristics and features of node.js such as,
Google Chrome V8 engine.
So Google Chrome V8 engine is
a super fast JavaScript engine,
which powers Chrome browsers.
And at the heart of node.js,
you use Google Chrome V8 engine.
Recently, Microsoft Chakra is
also available as the JavaScript engine.
That tells you that node.js is super super fast.
Another reason why it's fast,
is because node.js it
uses a non-blocking input and output system.
You see in a lot of
Web applications and a lot of networking applications,
what takes a lot of time.
It's not a heavy CPU process.
Yes. You might do some password hashing,
you might do some sorting of the password,
some J zipping, or encoding.
But that often is not the use case.
Often you make a request to another service,
another database, or you're reading from a database,
writing to a file system.
So, those are input and output operations.
And while you're waiting,
that time could be used.
And that's why I notice so fast and performance because,
it utilizes this waiting time,
to serve other clients.
Instead of some other languages,
such as Python or Java.
They cannot utilize that time in their threads.
They can serve just one client.
node.js thread can serve
many clients. This is the benefit.
So you can serve
more traffic with the same amount of servers deployed,
or you can decrease the number of servers and cut
some cost on your infrastructure.
Those are some of the benefits of node.js.

### Why Node.js?

Let's start by taking a look at why Node.js is one of the fastest growing web platforms out there.

Node.js provides you with the following benefits:

* Develop faster due to the vast number of modules and reusable code from npm
* Make fewer mistakes and be more productive (One language across the stack)
* Delight your user with fast response time (YMMV)
* Reduce team size and communication overhead (full stack JavaScript)
* Reduce dependency on other teams (e.g., backend API teams)
* Ability to re-use code on the browser and server

### Node.js Features

Node.js has some distinct features. Here are some examples of those features:

* Non-blocking I/O: performant
* Fast JS engine: browser arms race (Google Chrome V8 and Microsoft Chakra)
* Expressive and interpreted language: don't waste time on setup
* Solid and improving language standard (ECMAScript)
* Built in package manager with a humongous number of packages (npm)

---


#### Introduction   Why Node   Video: Node Downsides

# Video: Node Downsides

https://youtu.be/Lq6DS7pjGYA

Of course, nothing is all about the upsides.
There are certain downsides to using Node GS.
Some of them is that because of it's
non-blocking IO nature and
the way you write the synchronous code,
it might be a little bit tough
for engineers and developers
who learned synchronized way
of coding to start coding in Node GS.
So you need to think a little bit differently,
you need to change your thinking into thinking in
a synchronized way when you're coding with
JavaScript and especially with Node GS.
Things such as callbacks, promises, to wait.
So those features and those syntactic items,
they help you to deal with a synchronized code.
Another thing is that the tooling might not be as mature,
and the libraries might not be as
mature as some of the languages and
platforms which has been around for
10 or 20 years such as Java for example.
Java ecosystem has been tested
and has been used in many many many projects.
Node GS, it's not in
its infancy as it was when I just started using Node GS,
but it's definitely not as
mature as some other frameworks and languages.

# Node Downsides

Node isn't always the best design choice. Like most things in life, Node.js has some downsides. Node might not 
be a good fit because of the following reasons:

* Memory leaks in long running processes with Node are worse than in short running browser environments such as browser JavaScript
* The event loop makes asynchronous error handling more difficult than synchronous error handling
* No benefit for CPU-bound tasks
* Need to think about scalability early on to develop stateless scalable distributed systems
* No built-in typing (but possible with TypeScript)

**Note**: The Event loop is the core of Node.js and it's a genius idea. However, don't use Node.js for blocking, 
CPU-intensive tasks. Node.js will not give you a performance boost for stuff like that. Node.js is best suited 
for I/O stuff (like web servers).


---

#### Introduction   Node in Modern Web Development   Video: Node in Modern Web Development

# Video: Node in Modern Web Development

https://youtu.be/Djg4rFGffNs

What is the place of Node.js in modern web development?
Let's start with a little bit of history.
In 1990s, in 1995,
and early 2000, the way people did web development,
they were building server-side applications,
and those applications they were
rendering entire HTML pages.
Those pages were sent to the client to the browser.
And on the browser,
they would be interpreted maybe some images,
maybe some styling, some simple JavaScript.
That approach is called
traditional approach or fix server,
because most of the logic is on the server.
Later on in 2005, 2006,
and 2007, people started
coming up with a different approach, thick client.
So, they were moving some of
the logic on the client which is the browser,
that allowed to develop faster applications which
responded to user interactions
faster because a lot of the logic,
a lot of the code, was now in
the browser and browser also
themselves they become faster and better
at rendering the JavaScript language.
Now, their approach is similar to the thick client.
We build single page applications,
we build front end applications,
and a lot of code resides in those applications.
On the server, we still do the validation authentication.
We massage the data which is
coming from the database, we formatted.
So we do a lot of things on the back.
So we still do them,
but not as much as we used to do.
A lot of the UI and the view
related logic was moved to the browser.
So, this is how modern development is done right now.
Some of the technologies that people use,
PHP is one of
the most popular platforms to build web applications.
That's a server side technology.
PHP runs in a batch.
Another example would be Tomcat and Java, Java,
it's compiled code which
would run in a Tomcat which is the web server.
So typically, you need a web server and
some piece of technology either compiled or interpreted.
Java would be compiled and PHP would be interpreted.
In Node.js it's Slightly different
because Node.js combines web server
and the language together.
So Node.js in your stack would replace
both Apache web server and
PHP or both Tomcat and Java JAR file
which is a compile Java file.
So Node.js when you write Node.js code,
you build a web server but
also you would build your application.
And what type of applications do we build?
Well, most of all,
we build restful API servers.
Following restful methodology,
we build stateless servers.
So they shouldn't have any states within
them which would make them
easier to scale without the states.
And we follow the HTTP methodology by using
different HTTP methods such as GET, POST, PUT etc.
Another example would be building a GraphQL server.
GraphQL, it's a new emergent technology.
GraphQL allows you to reduce the number of endpoints.
It's still an HTTP protocol.
But by reducing the number of endpoints,
you can submit queries,
GraphQL queries as to the server.
So, we typically build
either restful API or we build GraphQL servers.
But once in a while, we also want to go
back and do the server-side rendering.
This is called Universal JavaScript.
All those approaches are possible with
Node.js It's up to your specific case,
whether its a public facing application
such as blog or whether
its admin dashboard which doesn't have to have a NSCO.
In all cases, Node.js will allow you to build
fast performance web servers and applications as well.


### Node in Modern Web Development

Modern web development consists of building front-end applications which connect to servers to submit or get data. 
The front-end applications use the single-page application approach a.k.a. thick client. In it, a client app 
communicates with a server backend via JSON, GraphQL, Protocol Buffers, XML, text, binary streams or other 
formats which are transmitted via HTTP.

The server communicates with databases and other services. In other words, the server acts as a middleman between 
the front-end application and the database or other services. The server does things which the front-end app cannot 
do: authentication, data validation, working with a file system, encryption, etc.

The way the server communicates with the front-end app client and vice versa is by having various endpoints 
distinguished by URLs in accordance to the HTTP standard. Each request for data has URL, headers, and body 
(a.k.a. payload).

Implementation of servers is where Node comes in. Node is used to implement the backend servers which are often JSON 
RESTful APIs (but they could be of other formats as well). Node is on par with stacks such as Apache web server+PHP 
or Tomcat+Java.

Node is not a framework by itself because it offers very low level mechanisms. The Express framework is often used 
to implement web applications and RESTful API servers in Node.

Adhering to SPA and REST API architectures for your web applications will give you the flexibility to leverage your 
servers for other clients (mobile, IoT, public) and will allow you to change front-end clients easily because of the 
loose coupling provided by the API.

