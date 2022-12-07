//Patterns to be printed 
// var readlineSync = require('readline-sync');
// var a = readlineSync.questionInt("Enter a number:")
// var a = "* * * * *"
// for(i=8;i>0;i =i-2){
//     console.log(a.substring(0,i))
// }
 
//         * * * * *
// * * * *
// * * *
// * *
// *
// rizwan
// let str = "* * * * *";
// let spc = "         ";
// for(i=9;i>=0;i =i-2){
//     console.log(spc.substring(0,i)+str.substring(i,0))
// }

let str = "* * * * *";
let spc = "         ";
for(i=8;i>=0;i =i-2){
    console.log(spc.substring(0,i)+str.substring(i))
}

// var readlineSync = require('readline-sync');
// var n = readlineSync.questionInt("Enter a number:")
// let arr = [];
// for (let i = 0; i < n; i++){
//     arr.push(i)
// }
// console.log(arr)
