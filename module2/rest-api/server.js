const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/profile', (req, res) => {
  console.log('GET /profile');
  res.send('GET /profile');
})

app.listen(3000);

/*

*/