let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test01', {useMongoClient: true});

const bookSchema = mongoose.Schema({
  name: String,
  published: Boolean,
  createdAt: Date,
  updatedAt: {type: Date, default: Date.now}
});

bookSchema.method({
  buy: function(quantity, customer, callback){
    var bookToPurchase = this;
    console.log('buy triggered');
    bookToPurchase.published = true;
    return 0;
  }
});

bookSchema.static({
  getZeroInventoryReport: function(callback) {
    //run a query on all books and get the ones with zero inventory
    console.log('getZeroInventoryReport');
    return 0;
  }
});

// This is executed before saving
bookSchema.pre('save', (next)=>{
  console.log('----> pre');
  return next();
});

let Book = mongoose.model('Book', bookSchema);

Book.getZeroInventoryReport( ()=>{} );

let practicalNodeBook = new Book({ 
  name: 'Practial node.js 2nd version (2nd published)', 
  author: 'Azat',
  link: 'https:github.com/another_stuff',
  createdAt: Date.now()
});

practicalNodeBook.buy(1, 2, ()=>{});

practicalNodeBook.save((err, result) => {
  if(err){
    console.log(err);
    process.exit(1);
  }else{
    console.log('Saved: ' + result);
    process.exit(0);
  }
});
