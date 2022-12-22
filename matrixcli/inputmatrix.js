
// import readlineSync from "readline-sync";
// import printMatrix from "../Matrix/print_matrix.js";

// function inputMatrix() {
//     //Ask Number of Rows and Columns
//     let rows = readlineSync.questionInt("Enter the Number of Rows : ");
//     let cols = readlineSync.questionInt("Enter the Number of Columns : ");

//     //Creating a Empty BluePrint of all the Empty Elements
//     let arr = new Array(rows);
//     for (let i = 0; i < rows; i++) {
//         arr[i] = new Array(cols);
//     }

//     //Entering Elements at Given Positions
//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             arr[i][j] = readlineSync.questionInt(`Enter the Element ${i} ${j} : `);
//         }
//     }

//     //Return the Matrix with All Input Elements
//     return arr;
// }

// export default inputMatrix;


let n =99

for(let i=2;Math.floor(i<n**1/2);i++){
    if(n%i==0){
        console.log("prime num");
        
    }else{
        console.log("not prime")
    }
}
