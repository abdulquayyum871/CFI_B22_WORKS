var readlineSync =require('readline-sync');
console.clear()

var num =  readlineSync.questionInt("Enter a number:");

var d=(num**(1/2))
if(d%1 ==0){
    console.log("the is perf square");
}
else {
    console.log("not")
}