
var readlineSync = require('readline-sync');
 var a = readlineSync.questionInt("Enter a number:")
//First method using if statements
if(a%2 ==0){
 console.log("Number is even");  
}
else
console.log('Number is odd');

//Second method using ternary operator

var u = (a%2==0) ? "even" : "odd" ;
console.log(u);