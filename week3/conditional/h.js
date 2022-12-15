var readlineSync = require("readline-sync");
var n = readlineSync.questionInt("ENter a number");

var a = "1";
for (i = 2; i < n; i++) {
  console.log(a);
  a = a + ` ${i}`;
}

var lr = String.fromCharCode(65);
for (var i = 1; i < 6; i++) {
  console.log(lr);
  lr = lr + " " + String.fromCharCode(65 + i);
}
