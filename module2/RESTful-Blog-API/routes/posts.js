const index = require('./index');

module.exports.myGet = function(req, res){
  res.status(200).send(index.store);
  /*console.log(index.i);
  console.log(index.Counter.count);
  console.log(index.store);*/
}

module.exports.myPost = function(req, res){
  res.status(200).send(`resource: posts, method: POST, id: ${index.Counter.count}\n`);
  index.Counter.add();
  index.store.accounts.push(req.body);
}

module.exports.myPut = function(req, res){
  res.status(200).send('resource: posts, method: PUT\n');
  index.store.accounts[req.params.id] = req.body;
}

module.exports.myDelete = function(req, res){
  res.status(200).send('resource: posts, method: DELETE\n');
  index.Counter.remove();

}

