//Weather the given input is prime number or not in javascript
var readlineSync = require('readline-sync');

var n = readlineSync.questionInt("N")

if(n ==1){
    console.log('Invalid')

}
for(i=2;i<=n;i++){
    if(n%i==0){
    console.log("Prime")
}
}
console.log("Not prime")
