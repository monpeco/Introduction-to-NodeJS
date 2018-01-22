let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lab4');

let Account = mongoose.model('Account', {name: String, balance: Number});

module.exports.get = (req, res) => {
  
  Account.find({},{_id:0},(err, _accounts)=>{
    if(err) res.status(200).send('Internal error');
    console.log(_accounts);
    res.status(200).send(_accounts);
  });

}

module.exports.post = function(req, res){
  
  let _name = req.body.name;
  let _balance = parseInt(req.body.balance);
  console.log(_name);
  console.log(_balance);
  
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