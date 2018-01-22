let express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    errorhandler = require('errorhandler');

// Load the accounts methods
let account = require('./routes/accounts');

let app = express();
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(errorhandler());


app.get('/accounts', account.get);
app.post('/accounts', account.post);

let server = app.listen(8080, () => {
  let port = server.address().port;
  console.log('Server listening on port %s', port);
});

console.log('End');

/*
curl "http://localhost:8080/accounts"
curl -H "Content-Type: application/json" -X POST -d '{"balance": "1000", "name": "savings"}' "http://localhost:3000/accounts"
*/