const express = require('express');
const app = express();
const myPort = process.env.PORT;

app.get('/accounts/:id/', (req, res) => {
  var accountId = req.params.id;
  console.log(`Parameter send: ${accountId}\n`);
  res.send(`parameter send: ${accountId}\n`);
});

app.get('/accounts/:id/transactions/:transactionId',(req, res) => {
  var accountId = req.params.id;
  var transactionId = req.params.id;
  console.log(`Parameters send: \nid:${accountId}\ntransactionId: ${transactionId}\n`);
  res.send(`Parameters send: \nid: ${accountId}\ntransactionId: ${transactionId}\n`);
});

app.listen(myPort);

console.log(`running on port ${myPort}`);

/*
curl GET localhost:8080/accounts/12

parameter send: 12

--
curl GET localhost:8080/accounts/14654/transactions/1244774

Parameters send: 
id: 14654
transactionId: 14654

*/