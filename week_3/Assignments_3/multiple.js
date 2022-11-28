var readlineSync = require('readline-sync');
console.clear()
var n = readlineSync.questionInt(`Enter Number 1:`);

if(n%3 == 0 && n%5 == 0){
	console.log('The no is divisible by both 3 and 5');
}
else if(n%3 ==0){
	console.log('div by 3');
}
else if(n%5 ==0){
	console.log('div by 5');
}
else{
	console.log("not divisible by both")
}
