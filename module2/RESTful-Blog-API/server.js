const express = require('express');
const logger = require('morgan');
const errorhandler = require('errorhandler');
const bodyParser = require('body-parser');
const port = process.env.PORT;

const app = express();

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(errorhandler());

app.get('/posts', (req, res) => {
  res.status(200).send('resource: posts, method: GET\n');
});

app.post('/posts', (req, res) => {
  res.status(200).send('resource: posts, method: POST\n');
});

app.listen(port);
console.log(`Server running on port: ${port}`);


/*
curl localhost:8080/posts
curl -X POST -d '{"key1" : "value1"}' localhost:8080/posts -i -H "content-type: application/json"
*/