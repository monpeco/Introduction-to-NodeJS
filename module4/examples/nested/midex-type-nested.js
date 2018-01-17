let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test01', {useMongoClient: true});

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  posts: [mongoose.Schema.Types.Mixed]
});

let User = mongoose.model('User', userSchema);

let user = new User({
  name: 'Seed',
  email: 'seed@doe.com',
  posts: [{title: 'testing nested documents', body: 'this is the body', length: 42}]
});

user.save((err, result)=>{
  if(err){
    console.log(err);
    process.exit(1);
  }
  else{
    console.log('Saved:\n' + result);
    process.exit(1);
  }
});