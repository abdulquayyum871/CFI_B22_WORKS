var readlineSync = require('readline-sync');

var a;
a = readlineSync.question("Please enter your name :");

console.log(a)

var num = readlineSync.questionInt("password:");
console.log(a,num)

var password = readlineSync.questionNewPassword("new pass :")
console.log (a , password)

var numA = readlineSync.questionInt("NUm 1");
var numB = readlineSync.questionInt("NUm 2");


console.log(`The sum of two number are ($)`)
