let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test01');

const Post = mongoose.model('Post', {
  name: String,
  text: String,
  url: String/*,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]*/
});

const Comment = mongoose.model('Comment', {
  text: String
});

let commentsArray = [
    {text: 'Cruel…..var { house, mouse} = No type optimization at all'},
    {text: 'I think you’re undervaluing the benefit of ‘let’ and ‘const’.'},
    {text: '(p1,p2)=>{ … } ,i understand this ,thank you !'}
  ].map( (comment) => {
    //console.log(comment);
    const comm = new Comment(comment);
    comm.save();
    return comm._id;
});
//console.log(commentsArray);

let post = new Post({
  name: 'Top 10 ES6 Features every Web Developer must know',
  text: 'https://webapplog.com/es6',
  url: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.',
  comments: commentsArray
});
//console.log(post);

post.save(function(err){
console.log('Script');

  if(err){
    console.log('error: ' );
  }else{
    console.log('Post saved: ' );
  }
});

console.log('Script end Ok');

process.exit(0);