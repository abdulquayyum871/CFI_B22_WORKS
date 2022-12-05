//Patterns to be printed 
var readlineSync = require('readline-sync');
 var a = readlineSync.questionInt("Enter a number:")
var a = "1"
for(i=2;i<8;i++){
    console.log(a)
    a = a + ` ${i}`;
}

