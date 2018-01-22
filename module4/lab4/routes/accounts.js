let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lab4');


module.exports.get = (req, res) => {
  res.status(200).send('account.js - getAccount!!!\n');
}

module.exports.post = function(req, res){
  res.status(200).send(`resource: posts, method: POST\n`);

  let Account = mongoose.model('Account', {name: String, balance: Number});
  let practicalNodeAccount = new Account({ name: 'Practial Node.js', balance: 10 });
  
  practicalNodeAccount.save((err,result) => {
    if (err){
      console.log(err);
    }else{
      console.log('Saved: ' + result);
    }
  });
}