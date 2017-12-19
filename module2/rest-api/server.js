const express = require('express');
const logger = require('morgan');
const errorhandler = require('errorhandler');
const bodyParser = require('body-parser');

const port = 3000;

let store = {};
store.accounts = [];

let app = express();

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(errorhandler());



app.listen(port);
console.log(`Server running in port ${port}`);
/*

*/