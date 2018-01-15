let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test01', {useMongloClient: true});

let Book = mongoose.model('Book', {
  name: String,
  published: Boolean,
  createdAt: Date,
  updatedAt: {type: Date, default: Date.now}
});

// Is goint to ingnore 'price' because is not in the bookSchema
let practicalNodeBook = new Book({ 
  name: 'Practial node.js 2nd version (in the model)', 
  author: 'Azat',
  link: 'https:github.com/another_stuff',
  createdAt: Date.now()
});

console.log('Is new? ', practicalNodeBook.isNew);

practicalNodeBook.save((err, result) => {
  if(err){
    console.log(err);
    process.exit(1);
  }else{
    console.log('Saved: ' + result);
    process.exit(0);
  }
});

/*
> db.books.find()
{ "_id" : ObjectId("5a567c68853f6e11941e5fe1"), "name" : "Practial node.js 2nd version", "__v" : 0 }
*/