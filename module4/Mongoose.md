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