var readlineSync = require('readline-sync');
var n = readlineSync.questionInt("Enter your number");

var i=1
while(i<=n){
var c = 0;
num=i
for(var j=1;j<=num;j++){
    if(num%j==0)
    c++;
    
}
if(c==2){
    console.log(num)
}
i++
}