module.exports.myGet = function(req, res){
  res.status(200).send('resource: posts, method: GET\n');
}

module.exports.myPost = function(req, res){
  res.status(200).send('resource: posts, method: POST\n');
}

module.exports.myPut = function(req, res){
  res.status(200).send('resource: posts, method: PUT\n');
}

module.exports.myDelete = function(req, res){
  res.status(200).send('resource: posts, method: DELETE\n');
}

