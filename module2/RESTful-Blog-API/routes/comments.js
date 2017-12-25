const index = require('./index');

module.exports.myGet = function(req, res){
  console.log(req.params.postId);
  res.status(200).send('resource: comments, method: GET\n');
}

module.exports.myPost = function(req, res){
  res.status(200).send(`method: POST, id: ${index.Counter.count}, comments: ${index.store.accounts[req.params.postId].comments.length}\n`);
  index.store.accounts[req.params.postId].comments.push(req.body);
}

module.exports.myPut = function(req, res){
  res.status(200).send('resource: comments, method: PUT\n');
  index.store.accounts[req.params.postId].comments[req.params.id] = req.body;
}

