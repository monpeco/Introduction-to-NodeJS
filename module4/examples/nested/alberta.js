const http = require('http');
const port = 8080;
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test01', {useMongoClient: true});


var countrySchema = mongoose.Schema(
    {
        name: String,
        province: [{type: mongoose.Schema.Types.ObjectId, ref: 'Province'}],
        patient: [{type: mongoose.Schema.Types.ObjectId, ref: 'Patient'}]
    }
);

var provinceSchema = mongoose.Schema(
    {
        name: String,
        country: {type: mongoose.Schema.Types.ObjectId, ref: 'Country'},
        city: [{type: mongoose.Schema.Types.ObjectId, ref: 'City'}],
        patient: [{type: mongoose.Schema.Types.ObjectId, ref: 'Patient'}]
    }
);

var Country = mongoose.model('Country', countrySchema);

//let Book = mongoose.model('Book', {name: String});

//let practicalNodeBook = new Book({ name: 'Practial Node.js' });

var Province = mongoose.model('Province', provinceSchema);


http.createServer((request, response)=>{
  
	console.log('----------------');
	console.log('request.headers: '+request.headers);
	console.log('request.method: '+request.method);
	console.log('request.statusCode: '+request.statusCode);
	console.log('request.url: '+request.url);
	console.log('request.body: ');
	console.log(request.body);
	
  var province = new Province();
  //province.name = request.body.name;

  response.writeHead(404, {
    'Content-Length': 'body.length',
    'Content-Type': 'text/plain'
  })
  response.status = 200;
  response.write('Hello');
  response.end('World\n');
  console.log("end");
  
}).listen(port);

console.log(`Server running at Port ${port}`);

