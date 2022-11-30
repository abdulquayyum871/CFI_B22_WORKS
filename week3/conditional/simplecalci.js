var readlineSync = require('readline-sync');

console.clear();

var num1 = readlineSync.questionInt(`Enter a number 1:`);
var num2 = readlineSync.questionInt(`Enter a number 2:`);

//CLI MENU

console.log(`.....................`);
console.log(`\t Press + for addition`);
console.log(`\t Press - for addition`);
console.log(`\t Press % for addition`);
console.log(`\t Press ** for addition`);
console.log(`\t Press / for addition`);
console.log(`\t Press * for addition`);

var symbol = readlineSync.question("Enter the symbol you require:");

switch(symbol){
    case "+":
        //code
        console.log(num1+num2);
        break;
     case "-":
        //code
        console.log(num1-num2);
        break;
    case "/":
        //code
        console.log(num1/num2);
        break;
    case "%":
        console.log(num1%num2);
        break;
    case "**":
        console.log(num1**num2);
        break;
    case "^":
        console.log(num1^num2);
        break;
    default:
        console.log("Invalid");
        break;
}