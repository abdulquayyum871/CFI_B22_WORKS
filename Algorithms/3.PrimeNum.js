//Weather the given input is prime number or not in javascript
var readlineSync = require('readline-sync');

var n = readlineSync.questionInt("N")

for (i=2;i<=n;i++){
    if(n%2===1){
        console.log("Number is prime")
    }
    else{
        console.log("Not prime")
    }
}