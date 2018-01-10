let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test01');

const bookSchema = mongoose.Schema({
  name: String
});

let Book = mongoose.model('Book', bookSchema);

// Is goint to ingnore 'price' because is not in the bookSchema
let practicalNodeBook = new Book( { name: 'Practial node.js 2nd version', price: '16.99' } );

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