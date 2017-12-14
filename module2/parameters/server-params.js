const express = require('express');
const app = express();
const myPort = process.env.PORT;

app.get('/accounts/:id/', (req, res) => {
  var accountId = req.params.id;
  console.log(`Parameter send: ${accountId}\n`);
  res.send(`parameter send: ${accountId}\n`);
});


app.listen(myPort);

console.log(`running on port ${myPort}`);

/*
curl GET localhost:8080/accounts/12

parameter send: 12

*/