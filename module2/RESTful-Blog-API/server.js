const express = require('express');
const logger = require('morgan');
const errorhandler = require('errorhandler');
const bodyParser = require('body-parser');
const posts = require('./routes/index');
const port = process.env.PORT;

const app = express();

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(errorhandler());

app.get('/posts', posts.myGet);

app.post('/posts', posts.myPost);

app.put('/posts/:id', posts.myPut);

app.delete('/posts/:id', posts.myDelete);

app.listen(port);
console.log(`Server running on port: ${port}`);


/*
curl localhost:8080/posts
curl -X POST -d '{"key1" : "value1"}' localhost:8080/posts -i -H "content-type: application/json"
curl -X PUT -d '{"key": "another value but new"}' localhost:8080/posts/0 -i -H "content-type: application/json"
curl -X DELETE localhost:8080/posts/1
*/