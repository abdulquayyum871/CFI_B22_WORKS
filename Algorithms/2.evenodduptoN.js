var readlineSync = require('readline-sync');
console.clear();
count = 0;
var n = readlineSync.question("Enter required Number:");

console.log("Even Numbers")
for(i=0;i<n;i=i+2){
   
    console.log(i);
}

console.log('Odd Numbers')
for(j=1;j<n;j=j+2){
  
    console.log(j);
}

//2nd method to bring even and odd numbers


var menu = readlineSync.question("ENter the no you require");


switch (menu) {
    case 'e':
        for(i=0 ;i<=n;i++){
            if(i%2==0)
            console.log(i)
        }
        break;
        case "o":
        for(i=0;i<=n;i++){
            if(i%2!=0)
            console.log(i)
        }

    default:
        console.log('Invalid Number')
        break;
}

//3rd method to bring out even and odd

