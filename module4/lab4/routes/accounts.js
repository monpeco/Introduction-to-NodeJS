let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lab4');


module.exports.get = (req, res) => {
  res.status(200).send('account.js - getAccount!!!\n');
}

module.exports.post = function(req, res){
  
  let _name = req.body.name;
  let _balance = parseInt(req.body.balance);
  console.log(_name);
  console.log(_balance);
  let Account = mongoose.model('Account', {name: String, balance: Number});
  let practicalNodeAccount = new Account({ name: _name, balance: _balance });
  
  practicalNodeAccount.save((err,result) => {
    if (err){
      console.log(err);
    }else{
      console.log('Saved: ' + result);
      res.status(200).send(`Saved: ${result} \n`);
    }
  });
}