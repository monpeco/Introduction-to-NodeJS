const express = require('express');
const app = express()

const middleware = (request, response, next) => {
  request.pm = 'This is a parameter passing';
  console.log(`Method: [${request.method}], Url: [${request.url}]`);
  console.log('Middleware!!');
  next()
}

app.use(middleware);

app.use((request, response, next)=>{
  console.log("request.pm: " + request.pm);
  console.log("Another Middleware!!");
  next();
});

app.use((request, response, next)=>{
  if(request.query.key_api){
    console.log("Key defined");
    next();
  }else{
    response.status(401).send({msg: 'Not authorized'});
  }
});

app.get('/', (req, res) => {
  console.log('Root in Express!!');
  console.log("(In the request handler) req.pm: " + req.pm);
  res.send('{msg: raw_data}');
})

app.get('/accounts', (req, res, next) => {
  console.log('inline middleware accounts');
  if(req.query.key_api != 123456){
    console.log('In accounts is not optional key_api');
    next(new Error('In accounts is not optional key_api'));
  }
  next();
},(req, res) => {
  console.log('accounts');
  res.send('accounts');
})

app.get('/transactions', (req, res) => {
  console.log('transactions');
  res.send('transactions');
})

//Error handling
app.use((error, req, res, next) => {
  console.log(`error: [${error}]`);
  res.status(500).send(`{Success: false, ${error}}`);
})

app.listen(3000);