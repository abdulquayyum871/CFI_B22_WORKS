//Weather the given input is prime number or not in javascript
var readlineSync = require('readline-sync');

var n = readlineSync.questionInt("ENter the number:");

var i=1
while(i<=n){
var c = 0;
num=i
for(var i=2;i<=n;i++){
    if(n%i==0)
    c++;
}
if(c==2)
console.log(`${n} is prime number`)
else
console.log(`${n} is not a prime number`)
}


