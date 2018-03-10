var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test01');

var SomeSchema = mongoose.model('SomeSchema', {name: String});

var practicalSomeSchema = new SomeSchema({ name: 'This is a string' });

practicalSomeSchema.save((err,res) => {
  if (err){
    console.log(err);
    process.exit(1);
  }else{
	//logger = (SomeSchema, res);
	  console.log('Collection: ' + SomeSchema.collection.collectionName);
    console.log('Saved: ' + res);
    process.exit(0);
  }
});


/*

$ node someSchema.js 
Collection: someschemas
Saved: { _id: 5aa2fb6115405c14f92e1849,
  name: 'This is a string',
  __v: 0 }

*/