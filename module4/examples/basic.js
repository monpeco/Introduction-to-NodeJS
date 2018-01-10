let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test01');

let Book = mongoose.model('Book', {name: String});

let practicalNodeBook = new Book({ name: 'Practial Node.js' });

practicalNodeBook.save((err,result) => {
  if (err){
    console.log(err);
    process.exit(1);
  }else{
    console.log('Saved: ' + result);
    process.exit(0);
  }
});