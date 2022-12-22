var readlineSync = require('readline-sync')
// var n = readlineSync.questionInt("ENter an number:")
// let result = 1;
// console.time()
// for (let i = 1; i <= n; i++) {
//   result *= i;
// }
// console.log(` ${n}! = ${result}`);
// console.timeEnd()

// console.time()
// function factorial(n){
  
//     if(n==0){
//    return 1;
//     }
//     else{
       
// return n * factorial(n-1)

//    }
  

// }

// console.log(factorial(60))
// console.timeEnd()
// var n = readlineSync.questionInt("Enter a number")

//     var a = 0, b = 1, f = 1;
//     for(var i = 2; i <= n; i++) {
//         f = a + b;
//         a = b;
//         b = f;
//     }

console.time();
function fib(n) {
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
};
console.log(fib(30))
console.timeEnd();