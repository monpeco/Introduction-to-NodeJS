let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lab4');

let Account = mongoose.model('Account', {name: String, balance: Number});

module.exports.get = (req, res) => {
  
  Account.find({},(err, _accounts)=>{
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

module.exports.put = (req, res) => {

  let __id = req.params.id;
  let _balance = req.body.balance;
  console.log(__id);
  console.log(_balance);  

  Account.findByIdAndUpdate(__id , { balance: _balance }, (err,result)=>{
    if (err){
      console.log(err);
    }else{
      let response = {
        message: "Account successfully updated",
        id: __id
      };
      console.log(response);
      res.status(200).send(response);
    }
  });

}