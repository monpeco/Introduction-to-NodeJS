const async = require('async');
const MongoClient = require('mongodb').MongoClient;
const customerData = require('./m3-customer-data.json')
const customerAddresses = require('./m3-customer-address-data.json')
const url = 'mongodb://localhost:27017/edx-course-db'

const batch = process.argv[2]
const taskCount = customerData.length / batch;
console.log(`batch: ${batch}, customerData.length: ${customerData.length}, taskCount: ${taskCount}`);


MongoClient.connect(url, (error, client) => {
  
  if (error) return process.exit(1);

  console.log('Connection is okay')
  const db = client.db('customerDB'); 
  const collection = db.collection('customers');
  
  let tasks = [];   // Array that contains the tasks to be executed (newTask's)
  
  function newTask(start, end){
    console.log(`loding data from : {start: ${start}, end: ${end} }`);
    
    let customerResults = [];   // Array that contains customers data to be inserted

    for (let i=start; i<=end; i++){
      let customerResult = Object.assign({},customerData[i], customerAddresses[i]);  // Join both json
      customerResults.push(customerResult);
    }
 
    collection.insertMany( customerResults, (error, result) => {
      if (error) { 
        console.log('error in insert');
        return process.exit(1);
      }
      console.log('result.ops.length: ' + result.ops.length);
    });
    
  }

  for (let i=0; i<taskCount; i++){
    tasks.push(function(callback){ callback(null,newTask(i*batch, (i+1)*batch-1))});
  }

  async.parallel(tasks, function(err, results) {
    if (err) return console.log(err);
    console.log('All tasks executing OK\n');
  });  
  
  client.close();
});

