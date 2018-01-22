module.exports.get = (req, res) => {
  res.status(200).send('account.js - getAccount!!!\n');
}

module.exports.post = function(req, res){
  res.status(200).send(`resource: posts, method: POST\n`);
}