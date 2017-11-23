const sum = require('./utility.js');

var checkingAccountBalance = 200;
var savingsAccountBalance = 1000;
var retirementAccountBalance = 20000;

var totalBalance = sum([checkingAccountBalance, savingsAccountBalance, retirementAccountBalance]);
console.log(totalBalance);

/*
Output:

21200
*/