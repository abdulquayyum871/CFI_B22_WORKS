//Weather the given input is prime number or not in javascript
var readlineSync = require('readline-sync');

var n = readlineSync.questionInt("ENter the number:");
var c =0;
for(var i=1;i<=n;i++){
    if(n%i==0)
    c++;
}
if(c==2){
console.log(`${n} is prime number`)
}
else{
console.log(`${n} is not a prime number`)
}



