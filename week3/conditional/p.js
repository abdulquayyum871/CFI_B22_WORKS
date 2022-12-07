// var readlineSync = require('readline-sync');
// // //Computed Properties

// var name = readlineSync.question("Enter the key value : ");
// console.log(name);
var object = {
    adnan: {
        age: 21,
        email: "adnan@code.in"
    },
    ilyas: {
        age: 24,
        email: "ilyas@codeforindia.com"
    },
    ateeq: {
        age: 21,
        email: "ateeq@code.in"
    },
    "x-auth-token": "Asdagjkdsahjnankhndaljsnhjkdasjnhlealdsfkh"
}

// console.log(object)
// console.log(object.adnan)
// console.log(object.ilyas)
// console.log(object.ateeq)
// console.log(object["adnan"])
// console.log(object[name])
// console.log(typeof[object])
// console.log(object.adnan.age)
// console.log(object['adnan']['age'])
object['razaq']="he is multi talented"
console.log(object)
object.adnan.age =25;
object.razaq = "rrr"
console.log(object)