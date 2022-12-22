import chalk from "chalk";
import readlineSync from "readline-sync";

import printMatrix from "./print_matrix.js";

let rows = readlineSync.questionInt("Enter the Number of Rows : ");
let cols = readlineSync.questionInt("Enter the Number of Columns : ");

let arr = new Array(rows);
if (rows != cols) {
  console.log("Not a square matrix");
  process.exit();
}

for (let i = 0; i < rows; i++) {
  arr[i] = new Array(cols);
}

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    arr[i][j] = readlineSync.questionInt(`Enter the Element ${i} ${j} : `);
  }
}

// console.log(arr);

printMatrix(arr);

function colourdiognal(arr) {
  for (let i = 0; i < arr.length; i++) {
    let mat = "";
    for (let j = 0; j < arr[i].length; j++) {
      // check if the current element is on either diagonal
      if (i == j ) {
        // set the color of the element to red
        mat += chalk.red(arr[i][j] + " ");
      } else if(i + j == arr.length - 1)
      mat += chalk.green(arr[i][j] + " ");

      else {
        mat += arr[i][j] + " ";
      }
    }
    console.log(mat);
  }
}
colourdiognal(arr);

switch (key) {
  case value:
    
    break;

  default:
    break;
}