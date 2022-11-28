var readlineSync = require('readline-sync');

var marks = readlineSync.questionInt("Marks of Student:");
if(marks <= 0){
    console.log("Invalid");
}
else if(marks > 100){
    console.log("Extra marks for good handwriting");
}
else if(marks >= 90 ){
    console.log("Grade O");
}
else if(marks>=80 && marks <=89){
    console.log("Grade A");
}
else if(marks >=70 && marks <=79){
    console.log("Grade B");
}
else if(marks >=60&& marks <=69){
    console.log("Grade C");
}
else if(marks >=50 && marks <=59){
    console.log("Grade D");
}
else if(marks >=40 && marks <=49){
    console.log("Grade E");
}
else if(marks <= 40){
    console.log("Grade F");
}


