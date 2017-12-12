const express = require('express');
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/plcs', (req, res) => {
  console.log(`Responding to POST request:\n req.body:${JSON.stringify(req.body)}\n req.query:${JSON.stringify(req.query)} \n`);
  res.send(`Responding to POST request:\n req.body:${JSON.stringify(req.body)}\n req.query:${JSON.stringify(req.query)} \n`);
})
app.get('/', (req, res) => {
  console.log('Root in Express!!');
  res.send('Hello world from Express!!\n');
})
app.get('/plcs', (req, res) => {
  console.log('Root in Express!!');
  res.send('Hello world from Express!! (plcs) \n');
})
app.listen(process.env.PORT);


/*
$ curl POST -d '{"keyes" : "value_es"}' localhost:8080/plcs?api_key=123 -i -H 'Content-Type: application/json'
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 89
ETag: W/"59-I7T801unEOJ8rcr+9ABAJg"
Date: Tue, 12 Dec 2017 19:40:35 GMT
Connection: keep-alive

Responding to POST request:
 req.body:{"keyes":"value_es"}
 req.query:{"api_key":"123"} 
*/