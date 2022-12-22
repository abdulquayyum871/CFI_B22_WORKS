import inputmatrix from "./inputmatrix.js";

let Mat_A = inputmatrix()
let Mat_B = inputmatrix()

let matrixC = new Array(Mat_A.length);
for (let i = 0; i < Mat_A[0].length; i++) {
    matrixC[i] = new Array(Mat_A[0].length);
}

//Adding 
for (let i = 0; i < Mat_A.length; i++) {
    for (let j = 0; j < Mat_A[0].length; j++) {

        matrixC[i][j] = Mat_A[i][j] + Mat_B[i][j];

    }
}

console.log("The Resultant Matrix is : ");
printMatrix(matrixC);