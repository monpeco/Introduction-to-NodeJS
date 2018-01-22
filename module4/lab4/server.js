let express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    errorhandler = require('errorhandler');

// Load the accounts methods
let account = require('./routes/account');

let app = express();
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(errorhandler());


app.get('/accounts', account.getAccount);

let server = app.listen(8080, () => {
  let port = server.address().port;
  console.log('Server listening on port %s', port);
});

console.log('End');