sum = require('./utility.js');

require('./module-export.js');


var checkingAccountBalance = 200
var savingsAccountBalance = 1000
var retirementAccountBalance = 20000

retirementAccountBalance = 40000

var totalBalance=sum([checkingAccountBalance, savingsAccountBalance, retirementAccountBalance] )
console.log(totalBalance)

/*
Output:

This will be printed just once
21200
41200

*/