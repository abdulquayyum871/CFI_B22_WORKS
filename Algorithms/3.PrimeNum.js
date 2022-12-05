//Weather the given input is prime number or not in javascript
var readlineSync = require('readline-sync');

var num = readlineSync.questionInt("ENter the number:");

var c = 0;

for(var i=1;i<=num;i++){
    if(num%i==0)
    c++;

}
if(c==2)
console.log(`${num} is prime number`)
else
console.log(`${num} is not a prime number`)


