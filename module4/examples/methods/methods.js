let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test01', {useMongloClient: true});

const bookSchema = mongoose.Schema({
  name: String,
  published: Boolean,
  createdAt: Date,
  updatedAt: {type: Date, default: Date.now}
});

bookSchema.method({
  buy: function(quantity, customer, callback){
    var bookToPurchase = this;
    bookToPurchase.published = true;
    console.log('bookToPurchase.published: ' + bookToPurchase.published );
    return 0;
  },
  refund: function(customer, callback){
    return 0;
  }
});

let Book = mongoose.model('Book', bookSchema);

let practicalNodeBook = new Book({ 
  name: 'Practial node.js 2nd version (with model method 2nd and published)', 
  author: 'Azat',
  link: 'https:github.com/another_stuff',
  createdAt: Date.now()
});

console.log('practicalNodeBook.buy(1, 2, ()=>{});');
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

