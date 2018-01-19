const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/edx');

const Post = mongoose.model('Post', {
  name: String,
  url: String,
  text: String
});

const Comment = mongoose.model('Comment', {
  text: String,
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }
});

// Create a post object without comments

let practicalPost = new Post({
  name: 'This is the name',
  url: 'http://thislink.com',
  text: 'And this is the text of the post'
});

practicalPost.save( (err, result)=>{
  if(err){
    console.log(err);
  }else{
    console.log(`The post is saved: ${result}`)
  }
});