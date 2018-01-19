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
  let i = 0;
  let commentsArray = [
    { text: 'Cruel…..var { house, mouse} = No type optimization at all' }, 
    { text: 'I think you’re undervaluing the benefit of ‘let’ and ‘const’.' }, 
    { text: '(p1,p2)=>{ … } ,i understand this ,thank you !' }
  ].forEach((comment, index, list)=>{
    comment.post = practicalPost._id;
    const _comment = new Comment(comment);
    _comment.save((err, result)=>{
      if(err) return console.log(err);
      i++;
      console.log(`i: ${i}`);
      console.log(`result: ${result}`);
      if(i==list.length){
        console.log('queryCommentWithPost');
      }
    });
  });
});