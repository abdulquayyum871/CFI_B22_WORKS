var readlineSync = require('readline-sync');

var num =readlineSync.questionInt("enter number");

if(num%2 ==0){
    console.log("even");
}
else{
    console.log("odd");
}
