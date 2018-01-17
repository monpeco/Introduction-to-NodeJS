let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test01', {useMongoClient: true});

const postSchema = new mongoose.Schema({
  title: String,
  body: String,
  length: Number
})

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  posts: [postSchema]
});

let User = mongoose.model('User', userSchema);

let user = new User({
  name: 'Seed',
  email: 'seed@doe.com',
  posts: [{title: 'testing nested documents (with postSchema)', body: 'this is the body (with postSchema)', length: 154}]
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