let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test02', {useMongoClient: true});

const bookSchema = mongoose.Schema({
  name: String,
  published: Boolean,
  createdAt: Date,
  updatedAt: {type: Date, default: Date.now},
  email: String,
  reviews: [mongoose.Schema.Types.Mixed]
});

bookSchema.virtual('authorPhotoUrl')
.get(function(){
  if(!this.email) return null;
  let crypto = require('crypto');
  
  let email = this.email; 
  email = email.trim();
  email = email.toLowerCase();
  
  let hash =crypto
    .createHash('md5')
    .update(email)
    .digest('hex');
  
  let gravatarBaseUrl = 'https://secure.gravatar.com/avatar/';
  return gravatarBaseUrl + hash;
});

bookSchema.virtual('fullname')
  .get(function(){
    return this.name + ' ' + this.email;
  });

let Book = mongoose.model('Book', bookSchema);
let practicalNodeBook = new Book({
  name: 'Practial node.js 2nd version', 
  author: 'Azat',
  email: 'hi@me.com',
  link: 'https:github.com/another_stuff',
  createdAt: Date.now()
});

practicalNodeBook.save((err, result) => {
  if(err){
    console.log(err);
    process.exit(1);
  }else{
    console.log('Saved: ' + result);
    console.log('Book author photo: ' + practicalNodeBook.authorPhotoUrl);
    console.log('Book fullname: ' + practicalNodeBook.fullname);
    process.exit(0);
  }
});
