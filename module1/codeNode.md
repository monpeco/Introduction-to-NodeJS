#### Node Core   Node Core Overview   Video: Node Core Overview

# Video: Node Core Overview

https://youtu.be/MHSsYYchydc

Welcome to module number one
of our course, introduction to Node.js.
This is a quite lengthy module but don't get overwhelmed.
Most of the lessons they're rather short.
And what's more important,
this module will give you a very solid,
very good strong foundation upon which you can build
your further knowledge on Node.js and you
can leverage this knowledge in any Node.js project.
So, first of all, we will take a look at some of
the global objects and
global keywords which you can use in any Node.js project,
in any Node.js script.
Some of them will give you additional information,
others will allow you to use certain mechanisms.
One of those mechanisms is Node.js modules.
You see, in browser JavaScript,
we up until recently didn't have any modules,
you would have to use a different language HTML
to import a file into browser JavaScript.
With Node.js is way,
way easier because natively
we have support for modules in Node.js.
So we will take a look at require,
which is a special method to
import functionality, to import a module.
And then we would look at module.exports,
which is a special global keywords or property
which will allow you to export
functionality to other files or other programs.
After that, we will take a look at npm basics.
Npm stands for node package manager.
It's a command line tool but it's also a registry which
is hosting a lot of modules, useful modules.
After that we will cover some of
the core HDB modules and not just HDB,
but some other modules as well,
such as file system module
and a few other main core modules.
The good thing about core modules,
you don't need npm to install them,
they are already built into the system.
So we will use one of those modules,
it's called HDB module and we will build a client.
So we would be making requests to
other services, other Web sites.
And then towards the end after we build a client,
we will build a server using
exactly the same HDB core module.
We will build our own web server and we will be able to
handle incoming requests and
do something with those requests.
In just a few lines of code,
you will have a fully functional
web server built on Node.js.
So again, this is a very important module,
it will give you a solid strong foundation for all
your future Node.js development and your projects.
So please, please, please, pay attention
carefully and I'll see you in the next lesson.

### Module 1: Node Core Overview

This module will build a solid foundation of Node development by teaching the following topics:

### Installation and Recommended Tool Chain

* Installation and recommended tool chain
* Before we start
* Launching Node, Global and Process

### Node REPL
* Launching Node code
* Node Globals
* Node process information
* Node Modules with require and module.exports

### Node modules with require and module.exports

* require usage patterns
* require caching mechanism
* Node module export patterns

### Core Modules

* Core modules
* fs module
* path module

### Understanding Event Emitters

* Understanding Node event emitters
* Modular events

### HTTP Client with Core http

* Implementing an HTTP client with core http module
* Implementing an HTTP client with JSON parsing
* Implementing an HTTP client with POST requests

### HTTP Server with Core http

* Implementing an HTTP server
* Understanding server request
* Understanding server response

### npm Basics

* Working with npm and npm basics
* Understanding package.json
* Configuring npm

Summary of Module 1: Node Core

Module 1 Tutorial Lab: Node Web Crawler

Module 1 Assignment Lab: CSV to JSON Converter

Module 1 Assessment

---

#### Node Core   Installation and Recommended Tool Chain   Video: Installation and Recommended Tool Chain

# Video: Installation and Recommended Tool Chain

https://youtu.be/xxIw0w_9hUM

Hello. In this video,
I will show you how to install Node.js and npm.
Npm comes with node.js.
So, all we need to do is just go to the official node.js
website which is located at, nodejs.org.
And then you would pick
either current version or long-term support version.
So 8 it's also a long-term support version.
Every even version such as 4,
6, 8, they are long-term support versions.
That's the version that you would want to
use in your production and also most
of your applications unless you want to experiment with
the more cutting-edge odd versions such as,
7 and 9 and 11 in the future.
So, let's pick the current version which is 8 and
the download will start
automatically and will determine your system.
It also says your system here in the message.
So my system is MacOS 64-bit.
If for some reason that didn't happen,
you can always go to downloads
and manually pick your operation system,
your OS, such as Windows,
Mac or you can also pick the source code.
Once you get the source code you
can follow the instructions,
how to compile into the binary code from source code.
They also provide you the installations for
the Docker Linux SunOS
and some other Linux versions as well.
So, you have an option of 32 bits 64 bits for
Windows and then only 64 for MacOS.
So, the current version,
LTS, its still supported.
Version 6 is going to be soon dropped.
That comes with npm version 3.
I recommend installing at least version
8 which comes with npm version 5.
And then in a few months,
we will have version 9 and version 11 as well.
And version 10 would be
the next long-term support after version 8.
Once you installed using
the installer which is the easiest way,
you would have this command node
available in your system.
So, node- V or node -- version,
will confirm that you have the proper version.
In this case we're using version 8.
If you are watching this course a few
years from now I hope you do
because a lot of this material will be
still relevant even if you are using
node.js Version 10 or 12 or 14 or 16.
We are learning fundamentals,
so they are not going to change.
And what is convenient,
we would also install npm, alongside with node.js.
So, node.js comes with npm.
The npm is a node package manager.
It's baked into the node.js.
So, really you don't have
an option but also it's an inconvenience thing
because you have npm already
and it shows that I have version 5.
If you're using version 3 probably
you would be okay, version 4,
you would be okay, future versions,
most likely you'll be okay too.
But below version 2, I do not recommend.
So, if you have older versions,
go and install newer versions,
you never had npm, even better.
It comes with node go installed node.
So, that's it for the node installation.
What about MongoDB?
So, you can follow the links
in the course or you can go to this URL,
mongodb.com and you click on
the community server which
means it's basically a development version.
It's a free version for anyone to use.
And again it automatically will
detect my system based on my browser.
So it goes into OSX,
OS10 but I can manually download another version,
such as Windows or Linux.
So, you have an option of downloading just the zip file.
You would unpack it into any folder you want
to have this MongoDB installation
and then you can manually link it.
So, by clicking here,
installation instructions, you would have
all the information needed to follow along those lines.
So, this is a manual step.
So, you unpack the zip archive,
you copy it into some folder.
Remember that folder name and then you would
expose the path into your path environment variable.
Typically, it's a bashrc,
I'm using the ZSH.
So, it would be in the ZSHRC.
And then don't forget you would need
to also configure your data folder.
If you're doing the manual set up or you would need to
provide that folder manually.
I prefer to use Brew if you're on MacOS.
MacOS has the support for Brew,
but of course you need to install Brew,
before you can use it.
So, you can search for install
Brew on Mac and typically with just one command line.
So, you can execute this
command line used to have the Brew
and then you can go back to this command,
Brew install MongoDB and that will install your MongoDB.
This is not the package.
This is the database itself.
This is how you would create the data folder.
And keep in mind,
it needs to have proper permissions.
So, it cannot be Brewed
because when you're running your server,
you're not going to run it as Brew.
Most likely it's going to be under your user.
So, make sure you have
the proper permissions on this /data/db folder.
And that's pretty much it.
So, you have a few options of installing MongoDB.
I recommend Brew if you are in
MacOS and then you have the manual fallback.
You have also, instructions
how to install it on Windows and Linux.
So, we're not going to replicate
the instructions because if they change,
the best way is to go to the official
mongodb.com documentation and follow the instructions.
So, that's it. You would need node npm and MongoDB,
MongoDB the server and
then later we will install modules.
But for now, that's all good.
So, you are ready to continue.

### Installation and Recommended Tool Chain

In this lesson, we will go over the set up for Node, npm and all the tools you will need to be productive.

### Node and npm Installation (Recommended)

First, let’s go to https://nodejs.org/en/download and download a one-click installer for your OS by clicking 
on the Install button.

The installers come with npm (Node package manager)— an important tool for managing dependencies. Because npm 
comes with Node, there's no need to install npm separately.

When choosing a Node installer, don’t choose binaries or source code unless you know what to do with them or 
your OS is not present there (i.e., not Windows or Mac).

### Installing from Source Code

If there’s no installer for your OS on page http://nodejs.org/download, then you can get the source code and 
compile it yourself. Detailed instructions are at https://github.com/nodejs/node/blob/master/BUILDING.md, but 
here's the short version.

Do this only if you cannot find a proper installer at http://nodejs.org/download or if you plan to contribute 
code to the Node core itself.

Download the source code or clone the Node repository https://github.com/nodejs/node. In the same folder in 
which you have the files, execute:

    $ ./configure
    $ make -j4
    
Run the tests:

    $ make test

To install this version of Node.js into a system directory:

    $ [sudo] make install

### Recommended Editors

I recommend using VS Code or Github's Atom editors for this course. This will give you a solid editor with 
customization and a lot of useful functionality without the bulkiness of a full-blown IDE like Eclipse or 
WebStorm.

To download VS Code (highly recommended), simply go to its website at https://code.visualstudio.com.

To download Atom, simply go to its website at https://atom.io.

### Installing MongoDB

To install MongoDB go to https://www.mongodb.com/download-center and choose your version according to the OS. 
macOS users who have Homebrew, can install MongoBD using Homebrew by following the instructions at 
http://docs.mongodb.org/master/tutorial/install-mongodb-on-os-x.

Before you run the MongoDB server for the first time, you'll need to configure the folder in which MongoDB 
stores data. By default it's /data/db. To create this folder, execute this Terminal / CLI command:

    mkdir -p /data/db

Set permission/ownership with chown:

    sudo chown mongodb:mongodb

The command to start the MongoDB server is mongod.

Alternatively, you can specify a different folder with:

    mongod --dbpath <path to data directory>

### Configuring npm

You will need to do this if you get a permission error when you try to install npm modules. If you don't have 
permission errors, then skip this configuration. You can come back to it and configure later.

Locate the path to npm's directory. It might differ depending on the OS. Execute the command below to find your path:

    npm config get prefix

For many POSIX systems, this will be /usr/local.

DANGER: If the path is just /usr, change the default folder to a new one as described in 
[the npm documentation](https://docs.npmjs.com/getting-started/fixing-npm-permissions).

Change the owner of npm's directories to the name of the current user (your username!):

    sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}

This changes the permissions of the sub-folders used by npm and some other tools (lib/node_modules, bin, and share).


---

#### Node Core   Installation and Recommended Tool Chain   Video: Before we start

# Video: Before we start

>> I hope you followed the instructions
in the previous video,
in which I showed you how to install MongoDB.
So let's go and check that you
have the proper MongoDB version.
So you would go into your terminal
and type mongod -version.
Mongod is a command for
the Daemon of MongoDB database start over.
And as you can see I have version3
which is compatible for this course. What else can we do?
We can install something
globally with NPM, such as node-static.
So node-static,
that's a package name and it's a command line tool,
so we can install it globally.
That's why you see that -g flag and i stands for install.
So if you can execute this command and if
you've seen a successful message without
any errors that means you're NPM was installed properly.
And let's double check that we have the static command.
Now we have the static command installed.
Thanks to the global NPM installation.
If you're seeing permission error,
most likely you would have to use sudo
npm i -g node-static.
But this is only for global installations.
The better way would be to use the change
ownership command on that particular folder.
So how do you know the folder name? So we can all do NPM.
Which NPM that will give you the location of the command
and you can also monitor in
those error messages what folder lacks those permissions.
And then you can go and use change
on to change those permissions.
So it depends how you installed NPM.
I used NVM to install NPM.
That's another tool which you can leverage.
NVM stands for Node Version Manager.
One more thing that you can check.
You can use Evo to check the versions,
but the versions will be coming from the node process.
So it's kind of like from within.
And that should match the non-version command.
You can also check versions on
the Google Chrome V8 engine and other packages.
So that's it, you're ready to go now.


### Before we start

Let's check that you have everything ready to get up and running with the exercises and code presented in this course. 
Open your Terminal app or Command Prompt and type the following commands to check for the presence and versions of the 
required platforms, tools and libraries.

Node must be v8 or higher. Check it by running:

    node --version

You should be able to execute Node. You can use -e to quickly run Node code, for example:

    node -e 'console.log(`My node version is ${process.versions.node}`)'

npm must be v5 or higher. Check it by running:

    npm --version

Let's test npm installation. Go ahead and globally install node-static which is a useful local development web server:

    npm i -g node-static

You should not see any errors or need sudo if you followed instructions on how to change ownership of npm in the 
previous unit. If you see permission errors, then please go back to configuring npm and change the ownership of npm's 
folder.

When node-static is done installing, then you should be able to check static (command for node-static) with (I'm using 0.7.9):

   static --version

MongoDB must be v3 or higher:

   mongod --version
   
---

#### Node Core   Launching Node, Globals and Process   Video: Node.js REPL

# Video: Node.js REPL

Let's take a look how to launch node.js code.
The first way is to use REPL.
When you just type node from any folder,
your cursor, your pointer,
will change to this pointy brace,
more sign or less sign
depending on what equation you're looking at.
And this is called a REPL environment.
Why it's called REPL because,
every expression will be
evaluated then printed back to you.
So we can call
standard JavaScript functions from
the standard JavaScript API.
So let's create a string.
And it also has SDR.
So we can execute pretty
much any JavaScript, any standard JavaScript.
Even setTimeout, the API which is a timer API,
we can also use it.
Console.log and lets put a delay of 500 milliseconds.
So you saw there's a hello.
And also you saw some of the output which is the pointer.
It's a reference to that timer.
So you can see it's not like running a file.
You immediately get back the expression.
Let's do another example.
So let's say, let f,
I'm creating a function,
and this function returns number one.
So now when I'm invoking f, I'm getting one.
But, when if it's just an assignment,
assignment it's never an expression.
In this case I will get undefined.
And if I omit return,
or I forget it, or I make a typo,
then in this case f invoked would be undefined as well.
For example, let f2 equals one,
and then f2 it's undefined,
because I never returned anything.
So we can pretty much run any Node.js
ad JavaScript code using
the REPL. That's one of the ways.
In order to exit, you would press control c twice,
or you can type exit.
And now you are back into
the Bash script and the Bash command prompt, or zhs.
I'm using the zhs,
that's a similar thing. How do you know?
You see the dollar sign.
Unless you customize your terminal.
In this case you would see another symbol,
but it's not this angle point brace.
So, we cannot execute Node.js anymore.
You can see command not found.
So let me clear the screen,
and I will show you one more way.
Not many people know about it.
It's called eval.
So we would just provide
inline JavaScript right to the node command.
So cancel that log hello.
So it comes as a string,
gets evaluated and we are back to the Batch terminal.
So this is a very convenient way
when you're writing some Batch script.
You can just call any Node.js and
execute it right there in the same line.
Of course if you have a long command, long process,
long program, Node.js program,
that's not going to really work nice.
And then, the main way how you would
launch your Node.js scripts it's node,
and the file name.
For example program dot.js.
Right now, I don't have that file in this folder.
That's why you see this a little bit confusing error,
cannot find the module.
You might think why it's asking for a module.
All I wanted to do just to run that script, that file.
It's not even a module.
Well, the way it works,
every program, every file, it's a module for the Node.js.
So that's why you can see,
cannot find the module,
when it fact it means the file that you
provided does not exist in this folder.
So when I do ls,
there is no such folder,
there is no such file in this folder, okay?
You can obviously, you can point to a folder.
For example, if I'm inside of
Modules/Project_Files, I go to module one,
and then I can go into some of those lessons,
and then I can narrow down to
a specific file such as this, okay?
But, it needs to be a relative path.
Or, it could be absolute path as well.
The way the absolute path starts in Linux
and Mac and other POSIX systems is with this slash.
So that means it's a route.
So right now it's called the invalid because I don't,
module folder it's relative to my current folder.
It's not an absolute path.
I'm just giving examples,
so this would work.
This would work because
I have that path. It's a valid path.
Another way is to put dot slash.
Dot slash it means it's relative to my current folder,
so dot it's a current folder.
If you have an index.js,
you can also say dot,
which means run me index.js from this folder.
And if I try to run it it says,
module cannot find because I don't have
index.js file in this folder.
So that's pretty much it.
We have three ways. REPL, which
is that pointy angle brace.
We have node with
e-flag and then node and pointing to a file.
They're in the same folder or in a subfolder.
You can also point to a parent folder,
so dot dot slash will go one level up.
You can go as many levels up as you want.
Okay? So node and then the path to the file.
If you're providing path to the folder that will just be
an alias shortcut to saying go to the index.js.
And by the way, the digest extension is optional.
So I can just run it simple.
That will be similar to running simple.js.
So now you might have
a conflict if you have a folder called simple,
and if you have a file called simple.js.
When you just do simple, what will run?
Will it run the folder,
meaning the file index.js inside of that folder,
or will it run simple.js?
Well, in fact the files will take the precedence.
It will have the priority.
So if you have both folder names
simple and the file name simple.js,
and you would execute this command without the dot js,
it will round the fire simple.js.
So that's it for now.
I'll see you in the next lesson.


### Node.js Console (REPL)

Like most platforms/languages (e.g., Java, Python, Ruby, and PHP), Node.js comes with a virtual environment called 
Read-Evaluate-Print Loop (REPL). Using REPL (a.k.a. Node console), we can execute pretty much any Node.js/JavaScript 
code. It is even possible to include modules and work with the file system!

To start Node REPL, run the following command in your terminal:

    $ node

The prompt should change from $ to > (or something else, depending on your shell). From this prompt, we can run any 
JavaScript/Node.js (akin to the Chrome Developer Tools console) we want. For example:

    > 1+1
    > "Hello"+" "+"World"
    > a=1;b=2;a+b
    > 17+29/2*7
    > f = function(x) {return x*2}
    > f(b)

The result of the REPL statements above are shown below. As you can see, REPL prints the results of the expressions 
such as 1+1 or f(b):

    $ node
    > 1+1
    2
    > "Hello"+" "+"World"
    'Hello World'
    > a=1;b=2;a+b
    3
    > 17+29/2*7
    118.5
    > f = function(x) {return x*2}
    [Function: f]
    > f(b)
    4
    >

REPL is one of the ways how developers can run Node code. The benefit of REPL is that you immediately see the results 
of a particular expression or piece of code. I often use REPL to validate Regular Expressions or string methods. The 
downside of REPL is that the code is not saved which means it's harder to replicate the execution. Thus, in the next 
lesson we'll learn how to launch Node code from a saved file.

---


#### Node Core   Launching Node, Globals and Process   Launching Node.js Scripts

# Launching Node.js Scripts

Node is an interpreted language and environment, not a compiled one. There are three main way to launch Node code:

* REPL (already covered in the previous lesson)
* Eval option
* Launching Node code from a file

### Eval Option

If all we need is a quick set of statements, there’s a eval -e option that allows us to run inline JavaScript/Node.js. 
For example, to print the current data, run this in your Terminal / Command Prompt:

    node -e "console.log(new Date())"

Another example prints Node version:

    node -e "console.log(process.versions.node)"

Node eval (-e flag) is useful in npm and bash scripts because it allows you to execute Node in a very compact manner 
in the bash, zsh or any other shell environment without having to have a Node file. You can get versions, OS 
information or run any Node code such as working with a file system, database or HTTP.

### Launching Node Code from a File

This is the most common use case because it allows you to save long Node programs and run them. To run a Node.js 
script from a file, simply type node filename.

For example, to launch code from a program.js file which is located in a current folder, simply execute

    node program.js

The file must be in the same folder. If you need to execute code from a file which is in a different folder, just 
provide the relative or absolute path:

    node ./app/server.js
    node /var/www/app/server.js
    
The .js is optional as long as you have a file with such extension. In other words, if you have server.js you can 
execute node server.

**If you have index.js in a folder, you can simply execute with a dot/period/full stop which in POSIX means the 
current folder or with a path to that folder.**

For example:

    node .
    node /var/www/app

Are equivalent to

    node index.js
    node index

and

    node /var/www/app/index.js
    node /var/www/app/index
    
---

#### Node Core   Launching Node, Globals and Process   Node.js Globals

# Node.js Globals

Despite being modeled after one standard, Node.js and browser JavaScript differ when it comes to globals. As you might know, 
in browser JavaScript we have a window object. However, in Node.js, it is absent (obviously we don’t deal with a browser window), 
but developers are provided with new objects/keywords:

* process
* global
* module.exports and exports

So, let’s take a look at the main differences between Node.js and JavaScript.

### global

global

There is a variable named global which is accessible by any Node script or program. It refers to the global object. This object 
has properties. For example global.process or global.require or global.console.

Any first level property of the global object is accessible without the global prefix. For example:
**global.process and just process will be the same**.

The GLOBAL alias for global can be seen in older project but is deprecated. Use global instead of GLOBAL.

**Main Globals**

These are the main properties of the global object and are known as globals:

* `process`
* `require()`
* `module and module.exports`
* `console and console.log()`
* `setTimeout() and setInterval()`
* `__dirname and __filename`

console.log() and setTimeout()work similarly to the browser methods. We will coverprocess,require()andmodule.exports` in the 
following lessons.

`__dirname`, `__filename` and `process.cwd`

`__dirname` is an absolute path to the file in which the global variable is called, whereas `process.cwd` is an absolute path to 
the process that runs the script. The latter might not be the same as the former if we started the program from a different 
folder, such as node ./code/program.js.

__filename is similar to __dirname but only with the file name attached to the absolute path of the currently running 
file/script.

---

#### Node Core   Launching Node, Globals and Process   Node.js Process

# Node.js Process

Each Node.js script that runs is, in essence, a process. For example, `ps aux | grep 'node'` outputs all Node.js programs running 
on a machine. Conveniently, developers can access useful process information in code with the process object, e.g., 
`node -e "console.log(process.pid)"` will print the process ID.

Other useful process information includes:

* `env`: Environment variables
 `argv`: Command-line arguments
 `exit()`: Method to exit/terminate process

Let's see how to use each of them.

**Environment Variables**

Environment variables can be accessed via the env attribute:

```javascript
console.log(process.env)

{ SHELL: '/bin/bash',
  USER: 'jordan',
  HOME: '/home/jordan',
  ...
}
```
A short one-liner can set the environment variable in bash, and then run Node eval to print the value. This is a bash/Terminal/ 
Command Prompt command which will print “development”:

    NODE_ENV=development node -e "console.log(process.env.NODE_ENV)"

NODE_ENV is a convention. Common values include:

* development: used by developers to code verbose error messages and logs for debugging
* production: used by developers to hides excessive error messages and logs

This is just a convention but some libraries and frameworks will augment their behavior to hide error messages, e.g., Express.

Command-Line Arguments

To access CLI arguments, use the process.argv property which is an array.

For example, if the command is

    node app.js arg1 arg2 arg3=val3

The first two elements are ‘node’ and the application's name while the rest are the command-line arguments. Thus, 
process.argv:

```javascript
[
  'node', 
  'app.js', 
  'arg1',
  'arg2', 
  'arg3=val3'
]
```

### Exiting a Process

To exit a process, use the exit function:

```javascript
process.exit()
```

```javascript
// this process failed
process.exit(1)

// this process failed with a different code
process.exit(129)

// this process exits successfully
process.exit(0)
```

Different failure codes can be used to differentiate types of failure. And knowing how an application failed allows 
the developers the means to program an appropriate response.

---

#### Node Core   Node Modules with require and module   Video: require and module.export

# Video: require and module.export

https://youtu.be/KO1eWJLJM_U

>> Node.js provides a building mechanism for modules.
The way they are implemented,
there is required method which will allow you
to import functionality from other modules or files,
and there is also module.exports,
which allows you to create modules by exporting
functionality to other programs or other files.
So let's take a look how module.exports work.
Module.exports, it's a global property
and it's available across your entire file.
So let's say you create a new file,
you would type module.exports equal.
And then what you are assigning
basically up to you, up to a developer.
You can assign an object,
you can assign a function too.
I would recommend you assigning a function.
Why? Because functions are more versatile.
They're more flexible.
You can pass arguments when you invoke
a function and you can execute sorted code.
With an object, you don't have as much flexibility.
Object there are more static and there are
for more static information,
maybe some configuration, maybe some translation,
some labels for your buttons that's for objects.
But in most cases, just use a function.
So module.exports equals a function,
and you can declare
whatever arguments you want for that functions to have.
So that's your module.
You can export things for
other files and programs and modules to use.
So, in those programs and files,
how can you import your module or someone else's module?
You would invoke require,
so require with parentheses and then you
provide either a path to a file.
It could be an absolute path,
or it could be a relative path,
or it could provide a name.
In both cases it's a string.
When it's a name, it could be two things.
It could be a core module,
we will cover core module in the next lesson,
or it could be an NPM module.
In the case of a file,
it starts with either a dot or
two dots because that's how we identify the path.
And we can also import Node.js
JavaScript and Node.js files,
but also JSON files.
In the case of the JSON files,
they just become objects.
So once you import your object,
you can assign it to a variable and then you can
continue to use that variable in your main program.
So, the main thing to remember
from this lesson whatever you are
exporting is exactly the same thing
that you will be importing.
So if you export a function,
expect to use a function in
your main application way you consume that module.
If you export an object,
you will get an object similarly.
So that's it for this lesson.
I'll see you in the next video.


### require and module.exports

Node provides a built-in module mechanism which works with the `require()` method and the `module.exports` global object. 
To demonstrate how `require` and `module.exports` work, let's say we have two files **account-service.js** and **utility.js**.

The **utility.js** has some generic methods and objects which we use in many projects and applications. In this example, we 
will import those generic methods into **account-service.js**.

Here's the code of utility.js in which we expose code to account-service.js (or any other program) by assigning it to a 
special global module.exports:

```javascript
module.exports = function(numbersToSum) {
  let sum = 0, 
    i = 0, 
    l = numbersToSum.length;
    while (i < l) {
        sum += numbersToSum[i++]
    }
    return sum
}
```

The main program (account-service.js) imports the utility module and executes it to find out the total balance:

```javascript
const sum = require('./utility.js')

let checkingAccountBalance = 200
let savingsAccountBalance = 1000
let retirementAccountBalance = 20000

let totalBalance=sum([checkingAccountBalance, savingsAccountBalance, retirementAccountBalance] )
console.log(totalBalance)
```

The account-service.js can be run from the same folder where the file is located with node account-service.js. 
The code will import the utility.js and invoke sum(). Thus, the result will be output of the total balance.

---

#### Node Core   Node Modules with require and module   require usage

# require usage

**require()** can be used to import many different types of modules, not just for local node.js 
files. You can use require() to do the following:

* Import core modules/packages, e.g., `const filesystem = require('fs')`
* Import npm modules/packages, e.g., `const express = require('express')`
* Import single file in a project, e.g., `const server = require('./boot/server.js')`
* Import single JSON files, e.g., `const databaseConfigs = require('./configs/database.json')`
* Import folders in a project (an alias for importing an index.js in that folder), e.g., `const routes = require('./routes')`

More examples:

```javascript
const filesystem = require('fs') // core module
const express = require('express') // npm module
const server = require('./boot/server.js') // server.js file with a relative path down the tree
const server = require('../boot/server.js') // server.js file with a relative path up the tree
const server = require('/var/www/app/boot/server.js') // server.js file with an absolute path 
const server = require('./boot/server') // file if there's the server.js file
const routes = require('../routes') // index.js inside routes folder if there's no routes.js file
const databaseConfigs = require('./configs/database.json') // JSON file
```

### Using require() with local files

To use require() with local files, specify the name string (the argument to require()) of the 
file you are trying to import. In general, start the name string with a . to specify that the 
file path is relative to the current folder of the node.js file or a .. to specify that the 
file path is relative to the parent directory of the current folder. For example, 
`const server = require('./boot/server.js')` imports a file named server.js which is in a 
folder named boot that is in the current folder relative to the code file in which we write require().

### Using require() with npm or core modules/packages

To use require() with an npm or core module/package, enter the module/package name as the name 
string. There should not be . or .. in the name string. For example, 
`const express = require('express')` imports a package named express. The package is in the 
node_modules folder in the root of the project if it's an installed npm package, and in the 
system folder if it's a core Node module (exact location depends on your OS and how you 
installed Node).

As you can see, require() is very versatile and can be used in many cases.

---

#### Node Core   Node Modules with require and module   require() Caching

# require() Caching

require() caches the results based on the filename and path. Any code outside of the module.exports assignment 
will be run just once during the process execution. For example, the following code is a module named utility.js 
and it has some code outside of module.exports:

```javascript
console.log('This will be printed just once')

module.exports = function(numbersToSum) {
  let sum = 0, 
    i = 0, 
    l = numbersToSum.length;
    while (i < l) {
        sum += numbersToSum[i++]
    }
    return sum
}
```

The account-service.js file uses our utility.js module:

```javascript
const sum = require('./utility.js')

let checkingAccountBalance = 200
let savingsAccountBalance = 1000
let retirementAccountBalance = 20000

let totalBalance=sum([checkingAccountBalance, savingsAccountBalance, retirementAccountBalance] )
console.log(totalBalance)
```

This is app.js which imports two files. AYou can also use require() to run code without assigning 
the result to anything (line 2).

```javascript
const sum = require('./utility.js')
require('./account-service.js')

let checkingAccountBalance = 200
let savingsAccountBalance = 1000
let retirementAccountBalance = 20000

retirementAccountBalance = 40000

let totalBalance=sum([checkingAccountBalance, savingsAccountBalance, retirementAccountBalance] )
console.log(totalBalance)
```

In app.js when you import the module utility.js two or more times (directly and indirectly via account-service.js), 
the code in utility.js which prints This will be printed just once (it's outside the module.exports) will be run just 
once despite the fact that the function module.exports (which we exported) is invoked twice: once in account-service.js 
and the second time in app.js.

Therefore, running app.js will result in its balance being printed twice, one time in account-service and another time 
in app.js, but the This will be printed just once console log only appears once:

```
This will be printed just once
21200
41200
```

Why did the code outside module.exports run just once even though we imported the utility.js module twice (once directly 
and one indirectly via account-service.js)?

The reason is because Node.js will cache imports. The second time you require() the same file or a module, it's not running 
the code. The results of the module are already there for you to use.

Just keep this behavior in mind and as a general rule, have all the logic exported in module.exports to avoid any unwanted 
behavior or conflicts.

---

#### Node Core   Node Modules with require and module   Node Patterns for module.exports

# Node Patterns for module.exports

There are several patterns which developers can use to export functionality from a module:

* Export a function: `module.exports = function(ops) {...}`
* Export an object: `module.exports = {...}`
* Export multiple functions: `module.exports.methodA = function(ops) {...}` which is the same as `exports.methodA = function(ops) {...}`
* Export multiple objects: `module.exports.objA = {...}` which is the same as `exports.objA = {...}`

`module.exports.name = ...` or `exports.name =...` are used for multiple export points in a single file. 
They are equivalent to using `module.exports = {name: ...}`.

Be careful! `exports = ...` (without module) is not a valid module/export statement.

Let's take a look at how to export and use multiple functions. We begin with a monolithic program named 
print-greetings.js that has all the logic to print hello in three languages.

**print-greetings.js:**

```javascript
// greeting methods
var sayHelloInEnglish = function() {
  return 'Hello'
}

var sayHelloInSwedish = function() {
  return 'Hej'
}

var sayHelloInTatar = function() {
  return 'Isänme'
}

console.log('Swedish ' +
  sayHelloInSwedish() +
  ' & English ' +
  sayHelloInEnglish() +
  ' & Tatar ' +
  sayHelloInTatar())
```

You can see that if you add 50 more languages, this file will start to become difficult to manage. If you 
wanted to use the sayHello... methods in other files, then this monolithic file wouldn't work well either. 
Let's modularize the program by putting the translation methods into their own module named greetings.js.

### Exporting methods using exports.methodA = function(ops) {...}

We can export the greeting methods by individually defining the greeting methods on the exports object.

**greetings.js:**

```javascript
exports.sayHelloInEnglish = function() {
  return 'Hello'
}

exports.sayHelloInSwedish = function() {
  return 'Hej'
}

exports.sayHelloInTatar = function() {
  return 'Isänme'
}
```

### Exporting methods using module.exports = {...}

We can also export the greeting methods by setting module.exports equal to an object that contains the 
greeting methods.

**greetings.js:**

```javascript
module.exports = {
  sayHelloInEnglish() {
    return 'Hello'
  }

  sayHelloInSwedish() {
    return 'Hej'
  }

  sayHelloInTatar() {
    return 'Isänme'
  }
}
```

Regardless of the export pattern you use, module.exports will end up being an object with three greeting 
methods.

### Importing with require()

Next, we can edit print-greetings.js to import methods from greetings.js using require(). The require() 
method returns whatever was exported from the imported module. In this case, the require() method returns 
an object with three greeting methods and that object gets assigned to the greetings variable. The greetings 
methods are then accessible through the greetings variable.

**printGreetings.js:**

```javascript
var greetings = require('./greetings.js')

console.log('Swedish ' +
  greetings.sayHelloInSwedish() +
  ' & English ' +
  greetings.sayHelloInEnglish() +
  ' & Tatar ' +
  greetings.sayHelloInTatar())
```

---

#### Node Core   Core Modules   Video: Core Modules

# Video: Core Modules

https://youtu.be/MkrKbpR3dCo

Node.js comes with batteries included.
It means they are core modules that you can
use and you don't have to install them with npm.
They're already part of Node.js,
you don't need to put them in your project folder,
they are not in Node underscore modules,
they're just somewhere where
your platform has been installed.
And it's good because there are a lot of useful modules.
Let me give you an example.
There is an OS module which allows you to
get information about your operating system.
There's the Child Process module which allows
you to spawn other processes and
execute other programs and
binary code outside of your Node.js code.
There are two modules on which I want to
focus more in this lesson.
First module it's called FS.
FS stands for File System and that's
exactly what this module allows you to work with.
You can create a file,
you can create a folder,
you can read from a file,
you can write to a file.
So, you can perform all the
needed operations on your file system.
As you can assume,
this does not exist in the browser JavaScript
because browser JavaScript it's a different environment.
But in Node.js, we can work with the file system.
The second important core module
it's called Path, P-A-T-H.
Path, why it's important?
Because you will use it a lot.
You will use it a lot to build
cross-platform applications, cross-platform code.
You see, the reason why path is different on
different system is because
it needs different separators,
different type of slashes,
either forward slash or backward slash.
And with path that join method,
you can easily convert
your path folders into the appropriate format.
So, those two core modules,
you would see them often in this project then another
Node.js code but there are more and more core modules.
For example, http, we will cover it
in few last lessons of this module.
It's also a core module.
So, the bottom line,
you can build a lot of things
just with core Node.js modules.
You don't even need to have to go to npm.
Of course, they might be not as
advanced but in some systems they are good enough.
So, that's it and I'll see you in the next video.


### Core Modules

Core modules come with Node.js and don't need to be installed. Core modules provide low-level 
functionality and helper methods. They allow Node.js to work with the filesystem, networking, 
binary data, streams, spawn external processes, parse query strings, file paths and URLs, and 
perform other helpful tasks such as creating HTTP(S) agents/clients and servers.

Here's the list of main core modules:

* `fs`: module to work with the file system, files and folders
* `path`: module to parse file system paths across platforms
* `querystring`: module to parse query string data
* `net`: module to work with networking for various protocols
* `stream`: module to work with data streams
* `events`: module to implement event emitters (Node observer pattern)
* `child_process`: module to spawn external processes
* `os`: module to access OS-level information including platform, number of CPUs, memory, uptime, etc.
* `url`: module to parse URLs
* `http`: module to make requests (client) and accept requests (server)
* `https`: module to do the same as http only for HTTPS
* `util`: various utilities including promosify which turns any standard Node core method into a promise-base API
* `assert`: module to perform assertion based testing
* `crypto`: module to encrypt and hash information

There is no need to install or download core modules. To include them in your application, all you need is to use the following syntax:

    const http = require('http') //replace `http` with the core module you want to use

---

#### Node Core   Core Modules   fs

# fs

fs handles file system operations such as reading to and writing from files. There are 
synchronous and asynchronous methods in the library. Some of the methods include the 
following:

* `fs.readFile()`: reads files asynchronously
* `fs.writeFile()`: writes data to files asynchronously

### Reading to and Writing from the File System in Node.js

Reading from files is done via the core fs module. There are two sets of reading methods: 
asynchronous (recommended) and synchronous. In most cases, developers should use async methods, 
such as fs.readFile because this methods won't block the event loop:

```javascript
const fs = require('fs')
const path = require('path')
fs.readFile(path.join(__dirname, '/data/customers.csv'), {encoding: 'utf-8'}, function (error, data) {
  if (error) return console.error(error)
  console.log(data)
})
```

To write to the file, execute the following:

```javascript
const fs = require('fs')
fs.writeFile('message.txt', 'Hello World!', function (error) {
  if (error) return console.error(error)
  console.log('Writing is done.')
})
```

Full documentation: http://nodejs.org/api/fs.html

---

#### Node Core   Core Modules   path

# path


[`path`](https://nodejs.org/api/path.html) is a core module that is used to work with file and folder paths so that the 
code works seamlessly on any platform.

### path.join()

On Windows paths are separated using a \, while on POSIX (Unix, macOS) paths are separated by a /. Therefore, a path might 
be app\server.js on Windows and app/server.js on POSIX (Unix, macOS). This difference between platforms can cause problems 
when a path is a hard coded string.

The `path.join()` method is used to create paths that are platform independent. You should use `path.join()` instead of hard 
coding the path because `path.join()` is guaranteed to work across platforms.

Example of `path.join()` to create a path to app/server.js:

```javascript
const path = require('path')
const server = require(path.join('app', 'server.js')) 
```

You can combine `path.join` with `__dirname` to use an absolute path instead of a relative one:

```javascript
const path = require('path')
const server = require(path.join(__dirname, 'app', 'server.js')) 
```

Full documentation: https://nodejs.org/api/path.html

---

#### Node Core   Understanding Event Emitters   Video: Understanding Event Emitters

# Video: Understanding Event Emitters

https://youtu.be/QXTDgSrd1pU

Let's start by declaring EventEmitter object.
And we would use const because it's not going to change,
and we would import events module.
Then we would create a class job
which would really extend EventEmitter class.
The job instance would be created from this class,
and you can see the class is empty.
All we needed, just to extend events.
And then, we would set up an event listener or observer,
and we'll be listen for the done events,
and it will have
a callback function with an argument timeDone.
So we can accept arguments such as time,
and we would just console.log it.
And then on line 10,
we would emit that event,
emit event call done,
and we would pass the new date,
the current time stamp.
And we can also remove
all event listeners on line number 11. So let's save it.
And now, we can broaden it
by going into the folder where we have this project,
which is module one,
in and lesson six.
So we can see that we have this files simple.
So, we would type node simple not simple.js.
And immediately, you would see the output,
job was pronounce done at a certain time.
So, what happened, it created a class
set up an event listener for the done,
and then, immediately triggered
that event and finished the process.
You might be wondering, well,
I can accomplish that with just a callback or I
could immediately do a console.log.
Wait a second, we will get
to a little bit more complex examples,
and you will see the benefit of using EventEmitters.


### Understanding Event Emitters

Event emitters is a core module for Node developers to implement the observer pattern. The observer pattern 
has the following: an observer, an event and an event emitter.

The flow goes like this:

1. A class is created with class
2. A class inherits from the EventEmitter class using extends
3. An instance of an object is created from the class with new
4. An observer (a.k.a. event listener) is created with .on(eventName, eventHandler)
5. An event is emitted with emit() and the event handler in the observer is executed.

Consider this simple observer pattern code which creates a Job class and then instantiates it. Later on, the 
object created from the class has an observer/event listener attached (job.on('done'...)) and an event is 
emitted/triggered.

**simple.js**:

```javascript
const EventEmitter = require('events')

class Job extends EventEmitter {}
job = new Job()

job.on('done', function(timeDone){
  console.log('Job was pronounced done at', timeDone)
})

job.emit('done', new Date())
job.removeAllListeners()  // remove  all observers
```

The result will be:

    Job was pronounced done at

# Video: Multiple Event Triggers

https://youtu.be/WZOy4gb09XM

Let's import the module just as
we did in the simple that simple.js example.
It's a core module, we don't need to
import anything but then,
we don't need to download anything with the npm.
It's available,
this core module advance is available to us.
Class name could be different.
So let's name it emitter.
It's an empty class you can put something like
some attributes or properties
like methods but we don't need.
Everything that we need will be coming
from the emitter object.
And now, we're setting up two event listeners,
The first would be knock.
That's event name, and the output,
the callback function would be, who is there?
The second would also be knock.
So, we have two event listeners
listening for the same event.
In this callback, let's put something different.
For example, go away,
who is there? Go away.
So, someone is knocking on your door.
And now, we are emitting that event.
We can emit it twice.
Every time you emit it,
both of the event listeners of
the observers they would be triggered.
So first, the code will be triggered
on line seven and then on line 11,
that's for the first to emitter,
the first event which has been emitted.
And then, same thing would happen for the second emitter.
So let's verify it.
Let's see what the actual output is.
And of course, you need to save
a file if you see the circle.
I didn't save the file,
so now I saved it and run it again.
So you can see who is there?
Go way! Who is there? Go away!
So you can see that the order
in which you define those event emitters matters.
You remember that function from the previous example so,
the result should be that we would not see
the second output now because
the event listeners would be removed.
And in fact, that is exactly what has happened.
First on line 14,
we emitted the event,
it got caught by two event listeners,
then we removed the event listeners and
then that event was emitted again.
Those events weren't triggered.
So you can see we have a lot of
control and actually the power,
the real power comes when these three lines,
they are somewhere else,
they're not in the same file,
and you are declaring
your event listeners in a different place.
It could be also different from where you define
your class and that's what
we will see in the next example.


### Multiple Event Triggers

Events can be triggered/emitted multiple times. For example, in knock-knock.js the knock event is emitted 
multiple times.

**knock-knock.js**:

```javascript
const EventEmitter = require('events')

class Emitter extends EventEmitter {}
emitter = new Emitter()

emitter.on('knock', function() {
  console.log('Who\'s there?')
})

emitter.on('knock', function() {
  console.log('Go away!')
})

emitter.emit('knock')
emitter.emit('knock')
```

The result will be:

    Who's there?
    Go away!
    Who's there?
    Go away!

### Executing Observer Code Only once

`emitter.once(eventName, eventHandler)` will execute observer code just once, no matter how many time 
this particular event was triggered.

**knock-knock-once.js**:

```javascript
const EventEmitter = require('events')

class Emitter extends EventEmitter {}
emitter = new Emitter()

emitter.once('knock', function() {
  console.log('Who\'s there?')
})


emitter.emit('knock')
emitter.emit('knock')
```

The result will be:

    Who's there?

---


#### Node Core   Understanding Event Emitters   Video: Modular Events

# Node Core   Understanding Event Emitters   Video: Modular Events

### Modular Events

https://youtu.be/LAuRVwpGQi8

We've covered two examples of how to
use event emitters and now let's
take a look how we would
use them in a more realistic scenario.
Let's say, we have a file called job.js,
it's a module that will perform certain tasks.
Maybe it's sending emails, and then,
there are three types of emails,
three types of jobs that you can do.
So you want to have that ability to
customize what is happening when his job is done.
Again, we are creating a class
by extending from event emitters.
And as you know, in ES6,
we know we have the constructor in ES6 class syntax,
so we need to call super inside of constructor and we can
use this keyword to set up an event listener.
This.on('start', so that would be our event.
So once start is happening,
we would call process.
Process it's a method,
and we need to define it obviously,
so, we define it as a set timeout.
So maybe it's asynchronous operation
that will take some time.
So we are emulating
the delay that the job will take some time.
It's asynchronous.
And then when that something is done,
the job is done,
the set timeout has a callback,
we would emit using this.emit.
So this, we can do the inside of this callback,
because it's a fad or a function,
and we would pass the the timestamp,
and we would export
the entire class, module.exports equals job.
So let's go ahead and save it.
This file would actually consume
our module, the job.js file.
So first of all, we would
import whatever functionality we exported,
and we would point to a file in the current folder.
Then, we can start using by instantiating this class.
And then, we would set up
the done event listener or observer.
And this is how we can customize what
the output will be when this job is finished.
So the actual, the last piece of code that is executed,
it's not in the modules, it's not hard-coded.
We have the ability to customize it in our weekly.js,
or maybe we have a daily job or we have a monthly job,
we have that ability to customize it because
now the module is very flexible.
Again, we can remove listeners.
We can also invoke job.process,
but a better way would be not to call it directly,
but emit another event which I start.
So we can emit multiple events,
we can emit events in the module,
we can emit events in a program which is
weekly.js itself and also,
we can set up those event listeners in a module,
but we also can set it up in a completely different file.
So let's go ahead and save this.
And now, let's go into our folder, which is modular.
This is the folder where we have job and weekly,
and now we can run our weekly job by
typing node space weekly.js, and pressing enter.
So you notice there was a delay of almost a second.
Let's do it again.
Okay, again, you saw the delay and just saw this code
which is outputted from weekly.js.
But the way it's triggered,
thanks to this event emitter which is
happening in the module and vice versa.
We are starting them,
the entire job, which is in the module,
not by directly calling job.process,
but by emitting an event start.
And this event start it has an event listener,
which is calling this.process.
So you can see, event listeners,
they're very flexible, you can call them at the end,
in the middle, you can call them many times,
you can remove them,
have a lot of options.
it's not a... promises and async await functions
are not a replacement for event emitters.
Event emitters is way more powerful pattern.
Thanks for watching. I'll see in the next lesson.

The observer pattern is often used to modularize code. A typical usage is to separate the event emitter class 
definition and the event emission into its own module but allow the observers to be defined in the main program. 
This allows us to customize the module behavior without changing the module code itself.

In job.js, we use a generic job module that emits a done event after 700ms. However, in weekly.js, we can customize 
the event handler of the observer to do whatever we want once a done event is triggered.

**job.js:**

```node
const EventEmitter = require('events')
class Job extends EventEmitter {
  constructor(ops) {
    super(ops)
    this.on('start', ()=>{
      this.process()
    })
  }
  process() {
     setTimeout(()=>{
      // Emulate the delay of the job - async!
      this.emit('done', { completedOn: new Date() })
    }, 700)
  }
}

module.exports = Job
```

**weekly.js**:

```node
var Job = require('./job.js')
var job = new Job()

job.on('done', function(details){
  console.log('Weekly email job was completed at',
    details.completedOn)
})

job.emit('start')
```

When you run weekly.js, the custom logic pertaining to the done event will be executed from weekly.js. This way the 
creators of the job.js module can keep the module flexible. They don't have to hard code any logic for the done 
event in the module. Consumers of the module job.js, people who write weekly.js, have the power to customize the 
behavior for the done event, and not only for that event. Event emitters can have multiple events: in the middle, 
at the start, in the end, etc. They can be called (emitted or triggered) multiple times and with data (passed as 
the second argument to emit() as can be seen in job.js). Furthermore, there are methods to list or remove event 
listeners (observers) or to specify the execution of an event listener (observer) just once (.once() method).

Documentation: https://nodejs.org/api/events.html

---

#### Node Core   HTTP Client with Core http   Video: HTTP Client with Core http

# Video: HTTP Client with Core http

https://youtu.be/JD_DDiFDZCY

>> Welcome to another example.
In this example, we would implement an HTTP agent,
HTTP client, which will make and get request.
First, we will start with importing core HTTP module.
It's not an npm module it's a core module,
meaning, we don't need to install it with npm.
It's already part of the platform.
And the second line we would define
a URL. That's our target.
That's from where we would be
downloading the content the HTML.
You can change this URL to whatever
you want as long as it's a valid URL.
http.get that is our method.
It takes two arguments, URL and response.
And then, inside we would define a C,
which is a counter and responds that on data.
Counter is for how many times this on data will be
triggered and it will be triggered many times,
because we will be getting and processing,
console logging the data piece by piece.
Then, responds.on ('end',), that's very final event.
When the entire response has been completed,
we would just output the number of C,
the value of the C which is our counter.
How many times the on-data response was triggered.
And then, one more event listener but
this time it goes on http.get.
It's not going on the response.
So it's a different nature.
This error would fire if
the URL is not valid or connection is not valid.
It will not be actually inside.
For example, 500 error would not be part of this process.
We can have one more event listener
inside if you really want to on the response.
But, that's good for now.
Let's go ahead and run this example.
You need to be in the same folder
in which you have this file.
This is my file. So, that looks all good.
I need to save it of course.
So now it shows
the right size before it was showing zero,
if you notice it.
Now, I will just go ahead and type node space
http-get-no-buff or I already
have it in my history and press enter.
It went pretty fast, so,
with a naked eye you probably didn't notice
but there were many calls to the on-data. How do we know?
Well, you see this number seven.
Seven times this piece of code has been called,
this callback, chunk C++
and then console.log (chunk.tostring).
So this is one of the ways
how you can process big data, large responses.
You don't need to wait for the entire thing to finish.
You can start processing it.
This is the default pattern.
We're using event mirror to respond that on data.
Let's run it again and see if there are any differences.
So now, that on data was called only six times.
Let's try it again. Seven times.
Again, six times.
So sometimes you would get
smaller number for example, four.
So, maybe it depends on the network
because it's outside the URL, it's not a localhost.
Maybe on some other factor but the number might vary.
So this is it for this example.
We didn't use a buffer variable.
So the chunk is a type of buffer with the capital B.
But what I'm saying a buffer variable,
it's a temporary variable
in which we are storing all the chunks.
So in the next example we would do exactly that.
But in this example we didn't use it,
that's why it says, http-get-no-buff.
So that's it for this video.
Let's go to the next example.


### HTTP Client with Core http

In web development we often want to make HTTP requests to other services, and Node provides a core module http 
to make such requests. This module uses the event emitter pattern. The idea is that you get a small chunk of 
the overall response (usually a single line of the overall payload/body) during each data event. You can process 
the data right away (preferred for large data) or save it all together in a buffer variable for future use once 
all the data has been received (preferred for JSON).

![single-line](https://prod-edxapp.edx-cdn.org/assets/courseware/v1/6b06b634116805f3742041f5f1a9acdd/asset-v1:Microsoft+DEV283x+2T2017+type@asset+block/node-streams.png)

Take a look at the example in **http-get-no-buff.js** in which each new line (chunk) of the response is printed 
back to the terminal with console.log:

**http-get-no-buff.js**:

```javascript
const http = require('http')
const url = 'http://nodeprogram.com'
http.get(url, (response) => {
  response.on('data', (chunk) => { 
    console.log(chunk.toString('utf8'))
  })
  response.on('end', () => {
    console.log('response has ended')
  })
}).on('error', (error) => {
  console.error(`Got error: ${error.message}`)
})
```

The result of running this script will be the home page HTML from http://nodeprogram.com. It might be hard to 
notice with a naked eye, but the result will be printed as the request is happening, not all at once in the 
end of the request.

If you want to wait for the entire response, simply create a new variable as a buffer variable (rawData) and 
save the chunks (parts of the response, usually lines in the payload/body) into it (rawData).

![whole-playload](https://prod-edxapp.edx-cdn.org/assets/courseware/v1/b453f765753ad053652e16a2d8c076e9/asset-v1:Microsoft+DEV283x+2T2017+type@asset+block/node-buffer.png)

In http-get.js, all the chunks are saved into a buffer variable named rawData before being logged at the end:

```javascript
const http = require('http')
const url = 'http://nodeprogram.com'
http.get(url, (response) => {
  let rawData = ''
  response.on('data', (chunk) => { 
    rawData += chunk
  })
  response.on('end', () => {
    console.log(rawData)
  })
}).on('error', (error) => {
  console.error(`Got error: ${error.message}`)
})
```

The result of running the script http-get.js will be the HTML of http://nodeprogram.com, but the output to the 
terminal (console.log(rawData)) will happen only at the end of the request when all the data has been received. 
Again, this might be hard to notice with a naked eye but it'll be obvious when processing large responses over 
10Mb in size.

---

#### Node Core   HTTP Client with Core http   Video: HTTP Client for JSON

# Video: HTTP Client for JSON

TODO: Missing video

### HTTP Client for JSON

To process JSON, developers must get the entire response, otherwise the JSON format won't be valid. For this 
reason, we use the buffer variable `rawData`. When the response has ended, we parse the JSON. Take a look at the 
code in http-json-get.js:

```node
const https = require('https')
const url = 'https://gist.githubusercontent.com/azat-co/a3b93807d89fd5f98ba7829f0557e266/raw/43adc16c256ec52264c2d0bc0251369faf02a3e2/gistfile1.txt'
https.get(url, (response) => {
  let rawData = ''
  response.on('data', (chunk) => { 
    rawData += chunk 
  })
  response.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData)
      console.log(parsedData)
    } catch (e) {
      console.error(e.message)
    }
  })
}).on('error', (error) => {
  console.error(`Got error: ${error.message}`)
})
```

The result of running this script would be the parsed JSON object. The parsing needs to happen inside of the 
try/catch to handle any failures that may occur due to mal-formated JSON input.

---

#### Node Core   HTTP Client with Core http   Video: HTTP client Post request

# Video: HTTP client Post request

https://youtu.be/RHm0H8y0b6Q

>> In this file, http-post.js,
I'm making a post request.
The syntax is very similar to how we would
make http.get and the idea is also similar.
We are using response dot on data,
response dot on end.
Just instead of the response,
I'm using res as the name of
my variable and then http.request.
That's what I'm using because it's
more flexible, it's more powerful.
I can provide options which has the method,
in this case it's post,
it's not just get.
I can also provide headers,
content links, content type.
This is what I'm sending.
I can also provide the path, port,
and the host name, which is typically just one variable.
It's just to your route, but in this case,
I split it into three,
because I'm using this syntax and http.request.
This is my data.
I'm passing full bar and
I'm also listening to the error request dot on error.
So, this is exactly the same thing
as just chaining dot on error to the http.request.
But I am just using an extra variable.
The idea is the same.
And then I'm writing req.write(postdata).
So what this will do,
this will actually start sending the data.
This will start sending
the data and then I need to finish my request.
OK. So this is my data,
post data is the data
in the post request which I'm sending.
But I also have the response.
This is the response which is coming later,
that's why it's in the call back to the http.request,
and I'm using the same event emitter pattern.
So let's go ahead and test it.
Mockbin if you haven't used it or haven't heard about it,
it's a url for marking restful endpoints.
So, it's sandbox or like a playground url
which service and url which we can use
for our example, node http-post.js.
And I'm getting the response.
This is my response.
So basically they echoed back my data.
In the queryString I also had
some information encoded in the queryString.
Typically you would send
some API keys for authentication.
So go ahead and check out mockbin,
it's a pretty cool service.
Allows you to prototype and test your request.
In this case, again we are using core http library
to make the post request before
we would make a gate request to read the data.
Post is typically for creating resources of entities
to submit some data,
also to upload files, not just binary data but also files.
In the next file https-json-get.js,
I'm making an https request. What is https?
It's a secure ssl connection and also a url.
So in a secure url, https, I'm using just from GitHub,
is basically a hidden url,
hidden because it's not listed anywhere.
And as the file I have some data.
I have some data which is sourced by
this service from GitHub.
And if you can see,
the code is pretty much the same as I had
before, only big difference,
I'm using a different library, it's https.
So it's not http anymore, it's https.
That's the all difference,
everything else is just the same.
And then remember it's a JSON, right, so it's a JSON.
It looks like a txt file,
but the file's name doesn't really matter believe me.
If you go to that url in your browser or
make a colored request, it's going be JSON, okay.
And it's a get, get over JSON,
so that's why we need to save it,
save it in this buffer variable broad data.
The name doesn't matter,
what matters is that we are not processing the chunks
one by one, we cannot, because its a JSON,
we need the entire thing. And remember JSON.parse
will crash your application,
so that's why we need to wrapt it in the tri catch.
Wrap it in the tri catch and you get your nice object.
So let's go ahead and run it.
Https, it took quite a lot of time because it was a big,
big, big, big file.
I have thousands of records there and it printed it,
it didn't print all of them, it printed only
a hundred but it took quite a lot of time.
Let's do it again.
Okay, this time it's better.
So, you get your ds, so if you are doing
JSON thing you need to concatenate plus equals.
It's the same as rawdata equals rawdata plus chunk.
So we can concatenate chunk by chunk, part by part.
Sometimes it's just a line of code or there's parse,
sometimes it's more. So that's it.
You've learned how to make a post request,
how to process JSON, straight average time out,
how to use a buffer variable,
how to not use it to make http and https request.


### HTTP client POST request

So far we have been using GET requests to receive data from a server. GET requests are able to be used to receive 
data but you can not send data with a GET request. In order to send a body of data with a request you must use a 
POST request. POST requests are generally used to upload data or to send data to be processed and returned.

The http core module methods allow you to specify what type of request you want to make. To do so, first create an 
options object and set the method attribute to the desired request type (‘POST’, 'GET', etc.). Then, use the 
options object as the first argument when calling `http.request()`.

The following code from http-post.js uses an options object to specify that it is trying to make a POST request:

```node
const http = require('http')
const postData = JSON.stringify({ foo: 'bar' })

const options = {
  hostname: 'mockbin.com',
  port: 80,
  path: '/request?foo=bar&foo=baz',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData)
  }
}

const req = http.request(options, (res) => {
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`)
  })
  res.on('end', () => {
    console.log('No more data in response.')
  })
})

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`)
})

req.write(postData)
req.end()
```

As a result, the script will send the data to the server (mockbin.com) in a POST request, and output the 
response of the request.

---

#### Node Core   HTTP Server with Core http   Video: HTTP server with core http

# Video: HTTP server with core http

https://youtu.be/GWp69yPHbXE

>> Welcome to another lesson.
Let's create a file server.js which will
have funny enough server, HTTP server.
And of course, we're using core HTTP module.
We would create a variable HTTP.
HTTP equals require HTTP.
Then, we would create another variable port equals 3000.
And we would invoke a method http.createServer.
It would have one call back,
just one function with request and response arguments.
We can use response or res to output data to a client.
So we can set the header,
we can set the status to 200 which means okay.
And then, we would finish it,
complete the response by saying res.end( 'Hello world).
We would invoke listen,
to boot up our server on
a specific port 3000 in our case.
And it's nice to output a message,
server is running at a local host port 3000.
I'm using ES6 trim templates,
dollar sign currently breaks port.
So, that's all we're doing.
Every request will go and execute this part of code.
So, for every request,
it doesn't matter what HTTP method,
it doesn't matter what URL we are,
what content type is there for the incoming requests.
It's always going to be those two lines,
line number four and line number five.
So, let's go ahead and run the server.
You need to be in the same folder.
And let's say the file.
So now, the size will be increased.
So, the size is good.
Nodeserver.js.
Immediately you see the message,
it started, that's a good sign.
Now, I'm opening another terminal window,
curl localhost: 3000,
and I'm seeing my output, Hello world.
You might be wondering while, what happened?
I thought you closed the server?
No. It's actually still running,
just in a different terminal window.
So, as long as you keep your server running,
you should be getting hello world responses.
It doesn't matter what is your URL,
what is your path.
As long as you're hitting the same domain,
which is local host in this case,
and the same port number,
transactions, account, the path could be different,
the query string could be different.
It doesn't matter, every
time we are outputting the same thing.
Now, what if you want to see more information?
You can add -i,
and this will tell you the content type.
The content type is text/plain.
So, you can change it to be text/html.
It's not a problem.
Or, application/ json. But you see,
it still remained text/plain.
So if you scroll up, still text /plain.
So, what is that?
I save the file,
I changed the code. What is happening?
Well, the way Node.js works,
you actually need to terminate this process.
It's a long running process.
Meaning, it's not stopping until it
crashed or stopped by a developer.
So, I just stopped it by pressing control C. Now,
I started again, and this time,
my server will have the new code.
It would not have the old code.
So, node process the north platform
keeps the code in the memory.
So you can see it's a text/html now, it's not text/plain,
because we changed the server code which has been run,
it's been loaded to the memory by
stopping the process and starting it again.
So now, let's go to the text/plain again.
Text/plain and finish it up,
star it again, and make a request.
So now, it's text/plain,
before it was text/html.
Can also add v. Which stands for verbose.
It will have even more output
about our request and response.
So, we see status 200,
now we can change the status to 201, as well.
Don't forget to restart the server,
and we can submit another request.
So now, it says 201 which is created.
So verbose is too much information,
let's keep it at i.
In order not to always restart this process,
you can install something called node-dev@latest.
Don't forget to add
the dash -g symbol which stands for global.
This tool will allow you to basically not
worry about restarting your server files.
You can just leave it like that, go ahead,
change it to 200, save it,
and you see, it restarted your server automatically.
You can see this message restarting.
So, you always have the fresh code.
And now, if I go and make a request,
I should expect status 200.
Which it is status 200, means it's okay.
So, use node-dev, there's another service.
There's actually few of them forever.
Nodemon, pm2-dev.
You can use any one of them.
Just remember either to use
a tool like that or to manually
restart it every time you make a change.


### HTTP server with core http

Although Node.js can be used for a wide variety of tasks, it’s used primarily for building web applications. Node.js thrives 
in networking as a result of its asynchronous nature and built-in modules such as net and http. Node is great for building 
fast and efficient web servers.

Here’s a quintessential Hello World example in which we create a server object, define the request handler (function with 
req and res arguments), pass some data back to the recipient, and start up the whole thing (server.js):

```node
const http = require('http')
const port = 3000
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello World\n')
}).listen(port)

console.log(`Server running at http://localhost:${port}/`)
```

Let’s break it down a bit. The following loads the core http module for the server:

    const http = require('http')

This snippet below creates a server with a callback function which contains the response handler code:

    http.createServer((req, res) => {

To set the right header and status code, use the following:

    res.writeHead(200, {'Content-Type': 'text/plain'})

To output Hello World with the line end symbol, use:

    res.end('Hello World\n')

The req and res arguments have all the information about a given HTTP request and response respectively. In addition, req 
and res can be used as streams (see previous section).

To make the server accept requests, use the following:

    }).listen(3000)

In the terminal, navigate to the directory in which you have server.js and run the following command to start your server:

    node server.js

Now that the server is running, you should be able to navigate to localhost:3000 in a browser and you should see Hello World. 
To shut down the server, enter Ctrl + c in the terminal.

The callback function in the createServer method is called each time there's an incoming request to this server.

You can also use curl to get the response from the server in the terminal. To do so, keep the terminal / command prompt 
window open to keep the server running. In another tab or window of your terminal / command prompt, run the following 
curl request:

    curl http://localhost:3000

The curl request should return the header and content that is sent from the server.

Full documentation for the http module: https://nodejs.org/api/http.html and https://nodejs.org/api/http.html#http_class_http_server.

Note: to install *node-dev*:

    npm i -g node-dev@latest
    
---

#### Node Core   HTTP Server with Core http   Video: HTTP Request

# Video: HTTP Request

https://youtu.be/n_Mbaf6vpro

>>Welcome to the second example.
In this example, we would implement server request body.
So, first of all we import HTTP,
our core HTTP module and we
define the port variable which is, port 3000.
Then we would create a server object, create server.
And again we are providing the request handler,
which is a callback function with
two arguments, request and response.
You can use req, I prefer to spell
it out once in a while as well request,
and then response or res.
Inside, we have all the information we need.
We have headers, method,
URL and the path of the request.
So, that's the incoming request,
the request which is coming to our server.
So, we can process,
we can extract, we can access that information.
That information is coming from a client,
we are building a server.
Right? And that obviously
will be triggered on every request,
every incoming request will have a different information.
Then, if request method is post,
so we are processing the post,
it could be a file upload,
it could be someone sending us JSON data.
And why I'm using a variable,
the buffer variable request.ondata,
I'll be receiving the chunks of data,
I would not be receiving the data right away,
so that's why I'm using that temporary variable buff.
And then request.onend function,
when everything is over I can print back my body,
the body of the incoming request.
Another name for that is the payload, response.end.
So, it's very important to also finish our response.
This is the response for the client,
so we need to send some data,
something like, Hey, I have accepted the body.
And then, if this is not a method post,
then let's output some friendly message,
we can output status 200 and
the counting type could be just text plain,
means it's a plain text, it's not HTML,
it's not a JSON and responds.end,
Hello world, already familiar to you, Hello world.
Then.listen similar and method.listen
and the port value is 3000.
So, let's save this file.
I need to make sure I'm in
the right folder and it's lesson number eight.
Okay, great.
So, this is the folder where I have my file,
as you all know you can launch server code nodes,
node js server code by
typing node space and then the file name.
So, let's make it run.
So, we don't have a console log here
unlike in the previous example
in which we have a console log,
so that's why there is no output.
But it doesn't mean
that it's not working, it's actually working,
I'm sure about that,
because we can make a request.
We can make, curl post localhost port 3000.
Now, I don't send the data with this curl,
but let's see what the response would be.
So, I still get the response
and then on the node-js side,
this is the data that I'm getting.
So, this is coming from my console logs.
I have headers, I have a method which is post,
then the status code is null and then for URL,
it's just a slash and the body is empty.
Okay. So, that looks good.
If you want to actually send some data,
there is -d flag and it's using URL encoding.
URL encoded syntax like this.
So, let's go to our server.
And yeah, so this is our body.
You can also send the JSON data but
it's going to be a different option.
If you want to send JSON again -d but value
now it's JSON string and if you go back,
this is my output,
so you would get the JSON string back.
Remember it's not an object,
so you would need to use json.part,
just as we used in the HTTP get client.
Get for JSON and so that's pretty much it.
So, this is our server,
it accepts posts requests,
get requests, it accepts all kinds of requests.
And we can build any type of server now because you know
how to process and how to extract information such as;
headers, methods and URL.

### HTTP Request

The HTTP server request object (do not confuse this with the client request object) has all the 
information about the incoming request to our server. Some examples include headers, URL, HTTP 
method names and of course the request body (payload). Here's the list of main properties:
* `request.headers`: Information about incoming requests headers such as Connection, Host, Authorization, etc (see list [here](https://en.wikipedia.org/wiki/List_of_HTTP_header_field)
* `request.method`: Information about the incoming requests methods such as GET, POST, PUT, DELETE, OPTIONS, HEAD, etc.
* `request.url`: Information about the incoming request URL, such as /accounts, /users, /messages, etc.

All values are accessible in the request handler callback. For example, you can print the values like this:

```node
const http = require('http')
const port = 3000
http.createServer((request, response) => {
  console.log(request.headers)
  console.log(request.method)
  console.log(request.url)
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end('Hello World\n')
}).listen(port)
```

The result of this script will depend on what requests are coming. Each request will trigger the output of 
its headers, method, and the URL.

### Processing Incoming Request Body in the Server

To process the request body, use the same event emitter pattern as with the request client. Listen to the data 
event and collect the incoming payload using a buffer variable (buff). Take a look at server-request-body.js:

```node
const http = require('http')
const port = 3000
http.createServer((request, response) => {
  console.log(request.headers)
  console.log(request.method)
  console.log(request.statusCode)
  console.log(request.url)
  if (request.method == 'POST') {
    let buff = ''
    request.on('data', function (chunk) {
      buff += chunk  
    })
    request.on('end', function () {
      console.log(`Body: ${buff}`)
      response.end('\nAccepted body\n\n')
    })
  } else {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end('Hello World\n')
  } 
}).listen(port)
```

The result of this program (server-request-body.js) would be a server which accepts POST requests and prints the request body in the server logs.

---

#### Node Core   HTTP Server with Core http   HTTP Response

# HTTP Response

The HTTP response is what enables us to send data back to the clients from our Node servers.

response.writeHead is a method that is used to set the status code and create HTTP headers. Two most common 
HTTP headers are Content-Type and Content-Length:

```node
response.writeHead(200, {
  'Content-Length': body.length,
  'Content-Type': 'text/plain' })
```  
  
The response itself is created with the write() method which adds data to the response. Another method is 
end() which finishes the response (which in turn will finish the incoming request). You can set the 
statusCode attribute to change the status code of the response (200, 400, 500, etc.).

The following example demonstrates the various response methods:

```node
const http = require('http')
const port = 3000
http.createServer((request, response) => {
  response.writeHead(404, {
    'Content-Length': body.length,
    'Content-Type': 'text/plain' })
  response.statusCode = 200
  response.write('Hello')
  response.end(' World\n')
}).listen(port)

console.log(`Server running at http://localhost:${port}/`)
```

Documentation: https://nodejs.org/api/http.html#http_class_http_serverresponse


---


#### Node Core   npm Basics   Npm basics

# Npm basics

https://youtu.be/66e4uMYsw_E

>> So let's go ahead and start by creating
a new folder, npm project.
The name doesn't matter as long as
just a brand new folder.
And let's double check.
So there is nothing in this folder.
I always like to start
my projects by creating package.json.
You can run npm init and press enter.
It will ask you a few questions.
You can just press enter to all of them.
And then type yes.
That will create package.json file.
And if you look inside of this file,
these would be your answers.
And I just pressed enter,
so they are default answers.
Now, let me remove
this file and show you another way how you can create
package.json which has npm init
with a white flag for stands for yes.
Basically, you answer yes to all the questions and
that's exactly the same file that we had previously,
only, you don't need to press enter.
It just sets all the default information
there in your file.
So we have our package.json,
and that's a good way to start your project.
Every project probably will need dependencies.
What are dependency? Dependency is
something that you would require.
You would import it using ES6 module syntax,
or you would require it using the Node.js syntax.
So you would require, you would import those files
in your source code.
That's why they're called dependencies.
So you can use npm install and then the name of
the file, for example, express.
Or you can use npm i and
then the name of the module, for example, express.
In both cases, the result would be similar.
So most of the npm commands they have the full spelling,
and then they have the shorter spelling.
Let's leave it running.
And then we would see an interesting thing.
We would see that what npm did,
it added it to this dependencies property.
And it added the version number.
But it has this caret symbol.
So npm five, what it's doing?
It automatically adds all the packages which
you installed with npm install to the package.json,
as long as you have that file package.json.
Now, the caret is not a good idea.
Why? Because the caret means it could be
four point eighteen, four point twenty.
It could be a different version.
We don't want that. How we could mitigate it?
So we could say dash dash save exact
or the short version would be dash E,
stands for exact, save exact.
This would eliminate that pesky bad behavior
of the caret symbol.
So now you see there is no caret symbol here,
but you can see in the previous version,
we had it, in the previous package.json.
So that's good.
Some of the other information in package.json.
So you have the licensing information,
npm scripts, version, name.
So the name and the version,
they're probably the most important.
You can bump up the version by using npm version patch.
So patch, it's the extreme right number.
The middle number, it's called minor,
and the left number is called major.
Npm version patch will bump up the number by one.
So you don't need to manually
add it to this file which is nice.
So you can see, now it's one point zero point one.
You can say npm version major,
that would be the extreme left number.
So you've installed express.
So what actually happened?
We have now this folder called
node modules. So node modules.
We also have package lock.
Package lock has the dependencies of dependencies.
It's a nice way to prevent
unnecessary updates and unexpected behavior.
Let's look into the node modules folder.
It has lots of folders, right?
We just installed the express,
but what are all those folders?
Well, they're actually dependencies of express.
So if you look in the package.json inside of express,
we can do it by saying node_modules/express/package.json.
You will see that express
itself has quite a lot of dependencies.
It has dev dependencies and
it also has normal dependencies.
And some of them, they're using
this tilde sign which means it's an approximate version.
So again, they're not locking those versions,
which means if there
are break in changes in the new versions,
that is going to be a problem in your project if you
don't have a shrink wrap or a package lock.
So those are dependencies of
our dependency, ls node modules.
And what actually happens
if now we want some of that module,
for example, qs stands for a query string.
So let's look what version they're using.
What express needs.
Actually, let's cat it.
So the version of qs is version six.
Another way to see the dependence history
is to use MPMLS.
So if we go and search for qs,
that should be on the first level,
and here it is.
So six point five point one.
So now, let's pretend we need
qs of an older version, version five.
By the way, you don't need to specify entire version.
You don't need to say like five point zero,
you can just say five and it will get you
the highest version five. Press enter.
So what happened now?
Our dependency, the qs
which was version six and it belonged to express.
Now, it moved into a different folder.
The qs which is our direct dependency,
it's on the first level and then inside of express.
So if you follow express,
that's not even dependency of express,
it's dependence of the body parser.
Interesting. And we can
do a ls node_modules/express/node_modules,
and this folder will have qs.
So this is version six.
You can verify it by going into
the package.json of this folder,
but you can also trust me because I did it before.
And then, if we go and
search for this version, nodes version five,
so this is the module which we installed
manually and it's our direct dependency.
So let's go ahead and also see
what we have in our package.json.
So qs, remember, I didn't use E,
I didn't use save exact.
That's why we have this caret.
So let's remove it.
So you can see that npm
might have different results depending on your order.
So sometimes, it's just nice
to remove this folder completely,
and then rm rf will remove the folder and
then you can always recreate it
by just typing npm install.
Npm install will read from your package.json.
Of course, you need to have those entries,
that's why npm by default.
Now, save those entries in your package.json.
And now, we have recreated the dependencies.
So we can run our application
and see if it's still working.
Of course, right now, we don't have an application,
but you can imagine that if we have an application,
we can test it with the freshly installed dependencies.
So you can see that it's not
a good idea to go and delete manually these folders.
You can absolutely do that.
But what if there is another module
which depends on this module, right?
The best way to get rid of a module is to use npm rm,
npm rm qs or uninstall.
Uninstall is just a longer name,
but they both would work.
And let's use S which stands for save which will make
sure it gets removed from package.json as well.
And then we cat the package.json,
and we can see qs is gone now, which is good.
So we installed a module, we removed it.
We also installed all the modules from the package.json.
So you don't want to commit your node modules.
You want to put it in the gitignore file,
don't commit it to a version control system.
We can just commit package.json
and then other developers that
would do npm install or npm i without any names,
that will just go and read from package.json
and make sure those packages have been installed.
Another things is the settings.
Npm config list will give you the list of settings.
Another name is npm config ls.
Those settings can have things
such as some initial values,
they could have some proxy settings.
If you're working under corporate proxy,
you would pull the settings here.
You can see my email,
you can see some other configurations.
Those are npm configs.
You can specify them in the file,
or you can use the command line.
This is how to use the command line.
Set and get would either define
the value or get the current value from the key.
You can, of course, delete it, you can edit it.
So anytime you are in doubt,
npm space dash H will give you the list of commands.
But actually, it's help, npm help.
So you can see these are the main commands.
Link, it's mostly used for
when you're building command line tools.
Run, that's for npm scripts.
Npm star, npm test,
so all are useful commands.
Npm publish, that's for when you're publishing a module.
So let me explain to you about the global installation.
So dependencies,
they're packages which you are requiring,
you requiring them in your call,
but some packages, you don't need to require.
They're just command line tools
such as static server for example.
This is a static web server,
and the name for the static web server is node static.
So npm install dash g node static.
So what is happening?
This dash g, if I don't do it,
it becomes a local installation.
If I do dash g, it becomes a global installation,
meaning it will install it in a special global folder,
and it also tells you what folder that is.
So users/azat/nvm,
I'm using nvm which is node version manager,
and allows you to switch between versions easily
without having to install and reinstall them every time.
And then for that particular node version,
that's my folder, my global
folder for my own installations.
So I can jump into
any project and still use this command static.
It's not bound to a particular project,
and I'm not requiring it in my source code.
So that's the big difference.
You almost never install
dependency with a dash g. So express,
you would never install express with the dash g.
Even some of the tools such as mocha,
you would still install them locally.
So let me demonstrate it to you.
Install mocha.
This will also because I'm using npm version five.
So npm version five by default
creates entry in my package.json.
I need to use cat.
So this is my mocha file.
But the mocha file is not global.
So if I type mocha, it would say,
so I don't have it globally,
but you can still see that it tries to launch it.
So how does it work?
Well actually, I have
this hidden folder inside
of node modules, it's in the bin.
So every global tool which you
install locally will be put in this folder.
And I have a special setting in my bash script,
in my bash profile,
which exposes this path in every project, right?
If you don't have it, you can
just simply type node_modules/.bin/mocha.
And that will launch
any command line tool
locally from your local installation.
So I recommend install everything locally.
Never install anything globally
unless you really don't care about the versioning,
something simple like a static web server.
So mocha, if you install it locally,
you can use different versions
of mocha in different projects.
For the static web server,
I don't really worry that I have a different version
because they're not going to change that much.
So we installed things locally, globally,
we used package.json, created package.json.
So let's also take a look at the package lock file.
So obviously, it will have a lot more entries,
and it also has checksums to verify integrity.
It has precise versions, exact versions.
So this will allow you to avoid
any unexpected consequences when some of
the modules get uploaded.
So that's it for this lesson,
and I'll see in the next module.



### What is npm?

npm comes with the Node.js platform and allows for seamless Node.js package management. npm (all lower case) consists 
of three main components:
* Website: https://www.npmjs.com
* Command-line tool: npm
* Registries: public and private

The npm command-line tool is the package manager for Node and it is bundled with the Node platform (you don't have to 
install it separately from Node).

The registries are where the packages (a.k.a. modules) are stored. Developers download packages from the npm registry 
and publish their packages to the registry.

The website provides a web-based graphical interface to search for modules and find their meta information (how many 
downloads there were, who is the author or what is the documentation).

### Installing Node.js Modules with npm

The way npm install works is similar to Git in the way that it traverses the working tree to find a current project. 
For starters, keep in mind that we need either the package.json file or the node_modules folder to install modules 
locally with npm install name.

For example, to install a package called `superagent`:

* In existing project, skip this step but in a new project, create a package.json first by running npm init -y to initialize the project.
* In the project root folder (main folder), run npm install superagent
* In a file where you want to use superagent, import it: const superagent = require('superagent').

The best thing about npm is that it keeps all the dependencies local, so if module A uses module B v1.3, and module C 
uses module B v2.0 (with breaking changes compared with v1.3), both A and C will have their own localized copies of 
different versions of B. This proves to be a more superior strategy than that of Ruby and other platforms that use 
global installations by default.

The best practice is not to include a node_modules folder in the Git repository when the project is a module that is 
supposed to be used in other applications. However, it’s recommended to include node_modules for deployable applications 
to prevent breakage caused by unfortunate dependency updates.

### Introduction to npm

There are two ways to install a module:

**1) Locally**: most of your projects' dependencies which you import with `require()`, e.g., express, request, hapi. 
They go into the node_modules directory of your local project

    npm install module-name
    npm i module-name

**2) Globally**: command-line tools only (mostly), e.g., mocha, grunt, slc. They go into /usr/local

    npm install --global module-name
    npm i -g module-name

The i is just an alias to install. There's no difference. Use i to save time typing.

Some frameworks offer CLI, but most of them belong to the local category. Don't try to install express with -g!

The node_modules folder is where dependencies are stored. It's a local folder which must be in the root (first level 
sub-folder) of your project. node_modules is your friend because it allows for almost no conflicts between different
versions of the same dependencies unlike Java, Ruby, Python which prefer global installation over Node's local. Node 
reduces conflicts because each conflicting dependency will be nested and this will avoid conflicts between different 
versions of the same dependencies.

### Installing Packages

Here are the valid ways in which a Node developer can install an npm module.

Basic installation:

    npm install express

Exact version installation:

    npm install express@4.2.0

Latest version installation, which can be useful when you already have this module but want to upgrade to the latest 
module:

    npm install express@latest

Explicit save into into package.json dependencies (--save or -S) or devDependencies (--save-dev or -D):

    npm install express --save
    npm install express -S
    npm install mocha --save-dev
    npm install mocha -D

In npm version 5, npm will automatically save so npm i express will be the same as npm i -S express. We recommend 
using the default behavior of npm version 5 which is to save package information into package.json.

By default, npm will add ^ to the version when you use npm v5 or --save. The ^ symbol is dangerous for applications 
because it means go get the latest version if there's one. It's best to avoid ^. Using the exact flag will do just 
that:

    npm install express --exact
    npm install express -E

You can combine flags and install more than one dependency in one command:

    npm i react react-dom babel babel-core -ED

Lastly, when you will need to install a tool like npm itself (or upgrade it) you will use the global installation:

    npm i -g npm@latest
    npm install grunt --global

If you see an error about permissions, you'll need to change the system folder which npm uses to the appropriate 
permissions or just use root access with sudo:

    sudo npm install grunt -g

Semantic versioning consists of using three digits which have certain meaning. For example, in semver 4.2.0, 4 
is major, 2 is minor and 0 is patch. Major is for major releases which most often break existing code. Minor 
are for small releases which can break some code but most often are okay. Patch is for small fixes which 
should not change the main interface and should not break your applications.

The key word here is should because semantic versioning is not enforced. It's purely a human convention and not 
all modules and projects in the FOSS follow it.

### Listing and Removing Modules

To list what modules are installed, run npm ls from your root project location (where you have `package.json` and 
node_modules). It will display a tree of dependencies of this current project.

To list all globally installed modules, run `npm ls -g`.

To remove an npm module use the rm command:

    npm rm mysql

To remove a global module, apply the global flag:

    npm rm mysql -g

---


#### Node Core   npm Basics   Package.json

# Package.json

The package.json is the project manifest file. It has all the meta data about the project such as the descriptions, 
license, location, dependencies, scripts to build, launch and run. Consider this example which has a few dependencies:

```node
{
  "name": "my-cool-app",
  "version": "0.1.0",
  "description": "A great new application",
  "main": "server.js",
  "dependencies": {
    "express": "~4.2.0",
    "ws": "~0.4.25"
  },
  "devDependencies": {
    "grunt": "~0.4.0"
  }
}
```

In most cases, it's easy to tell what modules are required and what are the main commands and files to execute just by 
looking at the package.json file.

**Package.json is required for npm modules.**

### Main Properties

Module packaging in Node is done using a package.json file. There are many options that can be configured:

* name
* version number
* dependencies
* license
* scripts
* etc

### Creating package.json

To create a package.json file, run npm init command and answer the questions that appear:

    $ npm init

    This utility will walk you through creating a package.json
    file.  It only covers the most common items, and tries to
    guess sane defaults.

    See `npm help json` for definitive documentation on these
    fields and exactly what they do.

    Use `npm install <pkg> --save` afterwards to install a package
    and save it as a dependency in the package.json file

    Press ^C at any time to quit
    name: (my-package-name)
    
If you are okay with the default answers to these questions, then you can skip the questions and answer yes to 
all of them automatically by using -y flag, as in npm init -y.

### Private Modules

The private attribute prevents accidental publishing

```node
{
  "name" : "my-private-module",
  "version": "0.0.1",
  ...
  "private": true,
  ...
}
```

### When to use -g for global installations?

Only use -g for command-line tools which you run from the Terminal /Command Prompt. They usually have bin in 
package.json:

```node
{
  "name": "stream-adventure",
  "version": "4.0.4",
  "description": "an educational stream adventure",
  "bin": {
    "stream-adventure": "bin/cmd.js"
  },
  "dependencies": {
    ...
```

In other words, anything which you plan to import with require() must be local in node_modules NOT in global.

---

#### Node Core   npm Basics   npm Configurations

# npm Configurations

npm can be configured in multiple ways:

flags
environment variables
.npmrc files
npm config CLI
The npm config CLI is the easiest way, so let's cover it and take a look at a few examples.

To list current configs:

npm config list 
npm config ls // list configs
To list global configs:

npm config --global list 
npm config -g ls
There are many configurations. For example proxy or registry are the most common ones especially if you are working at a big company that has a corporate proxy and a private (self-hosted) npm registry.

To set any config use use npm config set <key> <value>. For example, to set the registry value use:

npm config set registry "http://registry.npmjs.org/"
You can read an individual setting value. For example to read the registry value use npm config get registry:

npm config get registry
To remove the setting (config), there's a npm config delete <key> command. For example, to remove email:

npm config delete email

---

#### Node Core   Summary of Module 1 Node Core   Summary

# Video: Summary of Module 1: Node Core

TODO: missing video

>> Wow. That was a lot of lessons.
But I'm sure all of them are important because they will
build a solid foundation
when you move to a more advanced topic,
when you start using frameworks,
start using different libraries.
For example, how would you use
a library if you don't know how to use npm?
Right? So, npm command line interface,
how to install a module,
how to remove that, it's very important.
Some other topics that we've learned.
How to create a module,
using module.exports and then how to import
functionality using require functionality
either from an npm module,
a core module or your own JavaScript file.
Other topics that we've
covered revolve around core modules.
So we've covered fs,
which is a file system module.
You can create a file,
read from a file,
then write to a file or, even delete a file.
We covered path, which is
a module that allows you to work
with path names and
make your path names cross compatible.
And then we dived deeper into the core HTTP module.
We build a client,
so we can make any HTTP requests
to pretty much any website or a service.
And then we also build our own HTTP server
using exactly the same core HTTP module.
So, as you can see, node at its core
has a lot of modules and a lot of useful mechanisms,
so you can build servers,
you can build clients even
without having to use any libraries.
But of course, most developers use frameworks and
libraries because they do
a lot of things automatically for you.
You don't want to reinvent
the wheel in most of the cases.
That's why in the next modules we will cover
some of those libraries and framework, such as express.
So, thanks for sticking with this module,
I know it's been rather lengthy module
but it will pay off in the future.
Next three modules will be shorter and more concise.
So, I'll see you in the next module.
Thank you for watching and I hope you
had a great solid foundation of node.js.


### Summary of Module 1: Node Core

In this module, you've learned a lot of good foundational topics. Here are some of the key things to remember:

* There are Node.js installers for various platforms
* For contributing to Node and for platforms not supported by Node installers, developers can fork and/or clone the Node GitHub repository and compile Node.
* Node.js comes installed with npm
* There are three ways to run Node code: REPL, eval CLI option and launching a Node file.
* To access CLI arguments, use process.argv
* To access environment variables, use process.env
* To import and export Node files, use require() and module.exports respectively.
* To write cross-platform file paths, use path.join().
* To implement HTTP clients and HTTP servers, use the http core module.
* To start a new project, run npm init to create a package.json file.
* To install and remove a local npm module to/from a project, use npm i {package-name} and npm rm {package-name} respectively.


---

#### Node Core   Module 1 Tutorial Lab Node Web Crawler   Node Web Crawler

# Node Web Crawler

# Module 1 Tutorial: Node Web Crawler Tutorial

In this tutorial lab, you will build a script to download webpages. This lab will use 
concepts and skills learned in the module 1, concepts such as core modules, CLI arguments, 
launching Node scripts, using an npm module, making a GET request and processing the body, 
creating a folder and a file.

### Node Web Crawler

The implementation of the lab consists of the following steps:

* Create the project folder and make a file in it. The name doesn't matter.
* Create a package.json file using npm init -y
* Install a module uuid for generating random timestamped values which we will use for folder names
* Create a script file which downloads a page at a given URL and writes page's HTML to a file. URL must be provided from the command-line argument.

Let's start!

Open your Terminal / Command Prompt (for Windows, use bash). Create a new folder with mkdir:

    mkdir download-page
    cd download-page

Create a new file in this newly created folder:

    touch download.js
	
Now, create a package.json file by using `npm init -y`. Once the file is created, install **uuid** module 
using the `npm install` (or `npm i`) command:

    npm i uuid@3.1 -E
	
That's all the set up. Now, you are ready to start developing the program itself.

Let's see the program at a higher level without the details. The program will have this structure:

```node
const http = require('http')
...

const downloadPage = (url='http://nodeprogram.com') => {
  ...
}

downloadPage(process.argv[2])
```

Now you can start the actual implementation.

Open download.js, and start writing code to import modules: http, fs, path and uuid for creating of an 
HTTP agent, a folder and a file, working with a folder/file path and generating random values.

```node
const http = require('http')
const fs = require('fs')
const path = require('path')
const uuidv1 = require('uuid/v1')
```

Next, you will create a function which takes the URL, downloads the HTML from that URL and saves the 
HTML into a newly created file. The name of this function is downloadPage. It just shows how creative 
I am (sarcasm).

At a high level, the function looks like this:

```node
const downloadPage = (url='http://nodeprogram.com') => {
  const fetchPage = (urlF, callback) => {
    ...
  }
  const folderName = uuidv1()

  fs.mkdirSync(folderName)
  fetchPage(url, (error, data)=>{
    ...
    fs.writeFileSync(path.join(__dirname, folderName, 'file.html'), data)
    console.log('downloading is done in folder ', folderName)
  })  
}  
```


Now, the details! First, the default value of the url is set to a website nodeprogram.com, in case the 
CLI argument URL value is not provided by the CLI argument (process.argv[2]).

Next, there's a function named fetchPage which takes the URL and a callback function and makes a GET 
request. The html of the page is sent as the second argument of the callback function once the response
has been completed. This is the definition of the fetchPage function:

```node
const downloadPage = (url='http://nodeprogram.com') => {
  console.log('downloading ', url)
  const fetchPage = (urlF, callback) => {
    http.get(urlF, (response) => {
      let buff = ''
      response.on('data', (chunk) => { 
        buff += chunk
      })
      response.on('end', () => {
        callback(null, buff)
      })
    }).on('error', (error) => {
      console.error(`Got error: ${error.message}`)
      callback(error)
    })
  }
```

The downloadPage function is not over yet. You need to create a unique folder name using the npm module 
uuid. Then use that folder name value to create a folder with mkdirSync().

Finally, invoke fetchPage which was defined earlier and takes a callback function. The logic to create 
the files url.txt and file.html goes inside of the callback because the GET method is asynchronous. The 
mkdirSync and writeFileSync methods are synchronous.

The last line will execute the entire downloadPage method with the command line argument indicating the 
page URL:

```node
  const folderName = uuidv1()
  fs.mkdirSync(folderName)
  fetchPage(url, (error, data)=>{
    if (error) return console.log(error)
    fs.writeFileSync(path.join(__dirname, folderName, 'url.txt'), url)  
    fs.writeFileSync(path.join(__dirname, folderName, 'file.html'), data)
    console.log('downloading is done in folder ', folderName)
  })
}

downloadPage(process.argv[2])
```

Save the file. You are done with the program so let's go ahead and test it. From the Terminal app, launch 
the script with some URL:

    node download.js http://www.google.com
	
You would see an output similar to this:

    downloading  http://www.google.com
    downloading is done in folder  b9697730-9764-11e7-8546-bfe35e924b2c
	
Open the newly created subfolder in your code editor or even in a browser to view the HTML (the browser 
view won't be a perfect copy, because there might be missing some CSS dependencies or AJAX/XHR content 
which is loaded on the fly by the target website but inaccessible by the GET request).

Experiment some more to see that each time you run the node script, the URL is saved into a file named 
url.txt within the folder and that the html data is saved within file.html:

    node download.js http://azat.co
    node download.js http://webapplog.com
    node download.js http://node.university
    node download.js

Congratulations! You are done with the lab.

---

#### Node Core   Module 1 Tutorial Lab Node Web Crawler   Video Walkthrough and Solution

### Video: Node Web Crawler Tutorial part 1

https://youtu.be/c8y2YvLvAXA

>> Welcome to module one lab one. In this lab,
I will explain you and demonstrate to you
how I implemented this web scraper.
What is a web scraper?
So, basically, you have a scrape,
it goes and downloads some information such as HTML or
any other information out there on
the internet based on the URL which had gifts to you.
So, you can download a website and HTML page.
And we're using const http method
and fs which is another core.
Module fs stands for
a file system that will allow us to create files.
So we'll be saving data into the file.
Path, it's another core module,
uuid/v1 that is sudden NPM.
It's not a core package.
We have a package today since we will install
that module using NPM in a few moments.
But now, let's write the script.
It will have the main function downloaded page
and that function will take the URL,
If that URL is not provided it will use nodeprogram.com.
It's my web site, static web site.
I know it's always available.
So that's why I'm using it as an example.
Folder name, so this would be the folder name.
I want to have always
a unique folder names
because when I run the script again,
I still want to download that result.
So I will be always creating new folders.
And I'm using mkdir for that.
So mkdirSync, that's what will create me a folder.
It's a synchronous method.
Why I am using synchronous?
Because it's not like
this script will be run by multiple clients.
It's going to be just me.
So it's okay to use synchronous.
FetchPage, this is a method which I yet to define.
I don't have it yet.
So, let's just pretend to have
mystical magical method fetchPage
which will give me the data.
The data would be the content of that URL results.
And then, I could use writeFileSync to pool that data,
and I'm using path to create the path to that folder.
So first of all, I would write the URL
in the url.xt, and then,
I will write the content of
the web page itself into file.html,data.
Data, that's what my fetchPage method or function,
if you wish, will give me.
I get to implement that method.
Let's output console log.
Downloading is done.
And let's output the folder name as well, console.log.
Putting a comma is just like
outputting multiple arguments. Download page.
And I'm invoking my single method.
The most important method,
and I'm using (process.argv[2]).
If you remember process.argv,
that's a command line argument.
So actually my script will be smart enough.
So, it's not going to only download node program,
it can also download
other URLs if I provide them in the command line URL.
Now let's go ahead.
And now we need to implement this fetch method.
It's not over yet.
The download.jsfile it needs more code.

### Video: Node Web Crawler Tutorial part 2

https://youtu.be/cIaV1p_8kQI

>> So, we are continuing with the download.js,
and now, we are implementing fetchPage.
It's a function, I'm using
FAT our functions syntax function,
which takes two arguments.
First, would be a URL and the second, is to callback,
which would take error and the data
as you can see on line 13.
So, http.get, we are using our
good old http.get to make it get request.
And then I'm creating
this variable buffer where I will be just concatenating.
I will be adding up all the chunks which I
would be getting in
the response on data in the data event.
So I'm setting up this event listener response.on data.
And then in the callback I have
a chunk argument and then concatenated my buffer.
Let's not forget response.end which
will signify the finish of our response.
This is where we need to call, call back.
This is very important.
If we don't call the call back,
it will just timeout.
It will never finish.
So, calling call back with
no because that's there's no errors.
If we have an error, we need to call
call back with an error as the first argument.
We can do it right here.
Cancel that error.
I'm just cancel logging my error,
but I can also involve the call callback
with an error in
case there is no connection or the URL is wrong.
It's always nice to bubble up
your error to higher up the chain basically.
And then the second argument buff,
that would be the data.
So, let's save this file and let's
make sure in package.json I have this module.
So, I do have this module.
I did install it before,
and also in node modules you can also double check.
I have this module already installed.
So, when you're building a project from scratch,
you need to install it with NPM installed your ID.
And also I always recommend
create package.json for your project.
So, now let's go ahead to
our good old terminal and let's navigate to this folder.
I'm already there.
So let's launch the download,
and you can see it went pretty fast.
We have this new folder.
It has a unique name and it's generated by
our module which allows for the unique IDs.
So this is where
the name comes from. The name of the folder.
And if I run it again,
I would get the new folder
with a different name, different unique name.
And what's inside of the url.text?
So this is our URL just so we remember it.
Same data, and file.html has
all the html that's actually there on the web page.
So I can just open it in
my browser and I would see most of it.
I wouldn't see some of them tss and images which
are relative by most of the HTML would be there,
so you can download any website. Let's try.
Let's give it a try and
use our- remember that process.orgv.
So the first element,
the zero index would be node,
the second would be one.
So let me go to download.js.
So, we are using second.
So second would be whatever you want to type.
So let's type azat.co.
Azat was taking too long.
Let's try another one.
reactquickly.co, that went faster and this is our folder,
we go to url.texting.
This is a new URL and this
is an index.html file from reactquickly.co,
the website for my new book, React quickly.
It looks real, it looks correct.
If we scroll all the way down,
we should see the closing tags.
So that tells me that the entire HTML was downloaded.
So that's good. So, we
implemented in just a few lines under 50 lines.
We implemented the web scraper and it
even saves canonical folder names,
so they are not overwritten.
Of course you can change them.
You can change the file name,
you can change all the information,
and I am using synchronized methods
because as I've mentioned it's not a web server.
So I don't have multiple clients using this tool.
It's just one person, just me.
So I don't need it to be concurrent.
So that's it for this lab. Thank you for watching.



You can download the solution here:

[download.js](https://prod-edxapp.edx-cdn.org/assets/courseware/v1/2071f4ba21c4322dde1cd9db2dadcf43/asset-v1:Microsoft+DEV283x+2T2017+type@asset+block/download.js)

To run it, make a new project with npm init and then move the download.js file into the project folder. Make sure to download all the dependencies with npm install. Then run the project by running 'node download.js'.

---

#### Node Core   Module 1 Assignment Lab CSV to JSON Converter   Module 1 Assignment Lab: CSV to JSON Converter

# Module 1 Assignment Lab: CSV to JSON Converter

The assignment lab for this module is to build a node script to convert CSV files to JSON files. Unlike the tutorial labs, there will be no step by step instructions but all of the information you need to know should be in the modules. Please attempt to solve the assignment lab on your own before viewing the solution.

Assignment Instructions

Imagine you work at a Bitcoin exchange and you have customer information coming from another source: SSN, credit card and their bitcoin numbers. However, the file format is CSV and your exchange can only support JSON. Your task is to write a Node script to convert CSV into JSON.

You can download the customer information CSV file here: Link to download: [customer-data.csv](https://prod-edxapp.edx-cdn.org/assets/courseware/v1/07d100219da1a726dad5eddb090fa215/asset-v1:Microsoft+DEV283x+2T2017+type@asset+block/customer-data.csv)

A CSV file is like a table. It has the following structure in which the first line has the field names and the rest of the lines have the data:

```
id,first_name,last_name,email,gender,ip_address,ssn,credit_card,bitcoin,street_address
1,Ario,Noteyoung,anoteyoung0@nhs.uk,Male,99.5.160.227,509-86-9654,5602256742685208,179BsXQkUuC6NKYNsQkdmKQKbMBPmJtEHB,0227 Kropf Court
2,Minni,Endon,mendon1@netvibes.com,Female,213.62.229.103,765-11-9543,67613037902735554,135wbMcR98R6hqqWgEJXHZHcanQKGRPwE1,90 Sutteridge Way
...
```

Your assignment is to write a node script that will convert the customer-data.csv file into a JSON file. The 1st row of the CSV file acts as the keys/properties of the JSON object and the rest of the fields act as values. The JSON file must have an array with 1000 items. Output the JSON file in the same directory and name the file customer-data.json.

Here's an example of the JSON file structure which your Node program will need to produce:

```node
[
  {
    "id": "1",
    "first_name": "Ario",
    "last_name": "Noteyoung",
    "email": "anoteyoung0@nhs.uk",
    "gender": "Male",
    "ip_address": "99.5.160.227",
    "ssn": "509-86-9654",
    "credit_card": "5602256742685208",
    "bitcoin": "179BsXQkUuC6NKYNsQkdmKQKbMBPmJtEHB",
    "street_address": "0227 Kropf Court"
  },
  {
    "id": "2",
    "first_name": "Minni",
    "last_name": "Endon",
    "email": "mendon1@netvibes.com",
    "gender": "Female",
    "ip_address": "213.62.229.103",
    "ssn": "765-11-9543",
    "credit_card": "67613037902735554",
    "bitcoin": "135wbMcR98R6hqqWgEJXHZHcanQKGRPwE1",
    "street_address": "90 Sutteridge Way"
  },
  ...
```

Hint: you can create your own function which maps the CSV fields into a JSON object, or you can leverage any of the npm modules (e.g., [csvtojson](https://npmjs.org/csvtojson)). The choice is up to you. Learning how to find, evaluate, install and use an npm module is a necessary skill in any Node development.

Submission Instructions

To submit the assignment for feedback, put all the program files into GitHub and post a link to your code repository in the Assignment 1 Submissions section of the forums.

In addition to providing the GitHub link, please also answer the following questions about your project:

1. Walk us through the design of your project. Why did you design your project the way you did? What difficulties did you overcome?

2. How did you test your project to verify that it works? 

3. Let us know if anything doesn't work as intended so your reviewer will know ahead of time

