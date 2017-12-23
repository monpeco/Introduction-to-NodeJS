const index = require('./index');

module.exports.myGet = function(req, res){
  res.status(200).send('resource: posts, method: GET\n');
  console.log(index.i);
  console.log(index.Counter.count);
}

module.exports.myPost = function(req, res){
  res.status(200).send('resource: posts, method: POST\n');
  index.Counter.add();
}

module.exports.myPut = function(req, res){
  res.status(200).send('resource: posts, method: PUT\n');
}

module.exports.myDelete = function(req, res){
  res.status(200).send('resource: posts, method: DELETE\n');
  index.Counter.remove();

}

