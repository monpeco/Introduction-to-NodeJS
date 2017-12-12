const express = require('express');
const app = express()


app.post('/plcs', (req, res) => {
  console.log('Responding to POST request');
  res.send('Responding to POST request');
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