var readlineSync = require('readline-sync');
console.clear();

var n1 = readlineSync.questionInt("Enter number 1:")
var n2 = readlineSync.questionInt("Enter number 2:")

var diff = n1+(~n2+1)

console.log(`Difference is :${diff}`);