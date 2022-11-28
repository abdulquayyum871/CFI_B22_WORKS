var readlineSync = require('readline-sync');

var n1 = readlineSync.questionInt(`Enter no1:`);
var n2 = readlineSync.questionInt(`Enter no2:`);

var diff = n1+(~n2+1)

console.log(`Difference is :${diff}`);
