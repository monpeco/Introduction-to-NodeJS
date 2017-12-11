const express = require('express');
const app = express()

app.get('/', (req, res) => {
  console.log('Root in Express!!');
  res.send('Hello world from Express!!');
})

app.listen(3000);