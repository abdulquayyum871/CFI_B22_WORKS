import readlineSync from 'readline-sync';
import chalk from 'chalk';

function InputMatrix(){
    var rows = readlineSync.questionInt("Enter no of Rows")
    var clm = readlineSync.questionInt("Enter no of coloums")
 let arr = new Array(rows)
 for(let i=0;i<rows;i++){
    arr[i]=new Array(clm)
    for(let j=0;j<clm;j++){
        arr[i][j]=readlineSync.questionInt(`Enter the elements of ${i}${j}`)
    
    }
 }
 console.log(arr)
}

InputMatrix()

function printMatrix() {
    for (let i = 0; i < arr.length; i++) {
        let str = "";
        for (let j = 0; j < arr[0].length; j++) {
            str += arr[i][j] + " ";
        }
        console.log(str);
    }
}
printMatrix(arr)