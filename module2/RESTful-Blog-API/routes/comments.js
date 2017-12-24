const index = require('./index');

module.exports.myGet = function(req, res){
  res.status(200).send('resource: comments, method: GET\n');
}