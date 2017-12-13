const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let profile = {
  username: 'monpeco',
  email: '[reducted]',
  url: 'http://monpeco.co'
}
app.get('/profile', (req, res) => {
  console.log('GET /profile');
  res.send('GET /profile');
})

app.post('/profile', (req, res) => {
  console.log('created', profile);
  res.send(profile);
})
app.put('/profile', (req, res) => {
  Object.assign(profile, req.body);
  console.log('updated', profile);
  res.send(profile);
})

app.listen(3000);

/*
curl GET localhost:8080/profile -i -H 'Content-Type: application/json'

curl -X POST -d '{"keyes" : "value_es"}' localhost:8080/profile -i -H 'Content-Type: application/json'

curl -X PUT -d '{"keyes" : "value_es"}' localhost:8080/profile -i -H 'Content-Type: application/json'
*/