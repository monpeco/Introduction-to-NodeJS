let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test01');

// Post Schema and Model
const postSchema = mongoose.Schema({
  name: String,
  text: String,
  url: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});
let Post = mongoose.model('Post', postSchema);

// Comment Schema and Model
const commentSchema = mongoose.Schema({
  text: String
});
let Comment = mongoose.model('Comment', commentSchema);

// Create an array of Coments
let commentsArray = [
    {text: 'Cruel…..var { house, mouse} = No type optimization at all'},
    {text: 'I think you’re undervaluing the benefit of ‘let’ and ‘const’.'},
    {text: '(p1,p2)=>{ … } ,i understand this ,thank you !'}
  ].map( (comment)=> {
    const _comment = new Comment(comment);
    _comment.save();
    return _comment._id;
  });

// Create a Post (with the comments array)
let praticalPost = new Post({
  name: 'Top 10 ES6 Features every Web Developer must know',
  text: 'https://webapplog.com/es6',
  url: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.',
  comments: commentsArray
});
console.log(praticalPost);

praticalPost.save((err, result) => {
  if(err){
    console.log('error: ' );
    process.exit(1);
  }else{
    console.log('Post saved: ' );
    process.exit(0);
  }
});

console.log('End Script');
