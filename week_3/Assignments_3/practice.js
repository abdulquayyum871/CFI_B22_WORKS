var readlineSync = require('readline-sync');
console.clear();
const sq = "square";

// var a = readlineSync.questionInt('Enter your parameter 1:');
// var b = readlineSync.questionInt('Enter your parameter 2:');
// var c = readlineSync.questionInt('Enter your parameter 3:');


// s =1/2(a+b+c);
console.log("MENU");
console.log('Area Calculator');
console.log('..........................');
console.log('Press 1 for square');
console.log('Press 2 for rectangle');
console.log('Press 3 for traingle');
console.log('Press 4 for circle');
console.log('..........................');

var num = readlineSync.question('enter the no you require:');
var str = " unit\u00b2"

switch(num){
    case '1':
        console.log("SQUARE");
        var a = readlineSync.questionInt('Enter your length:')
        console.log("Area",a*a+str);
        console.log('Perimeter',4*a+" unit");
        break;
    case '2':
        console.log("RECTANCLE");
        var a = readlineSync.questionInt('Enter your L and B:');
        var b = readlineSync.questionInt('Enter your L and B:');
       
        console.log("Area",a*b+(str))
        console.log('Perimeter',2*(a+b)+(' unit'))
        break;
    case '3':
            console.log("TRAINGLE")
            var a = readlineSync.questionInt('Enter Length:');
            var b = readlineSync.questionInt('Enter Breadth:');
            var c = readlineSync.questionInt('ENter Height:')
            var s = (1/2)*(a+b+c);
            console.log("Area",`${(s*(s-a)*(s-b)*(s-c))**(1/2)}`+str);
            console.log('Perimeter',a+b+c+' unit');
            break;
    case '4':
            console.log("CIRCLE")
             var a = readlineSync.questionInt('Enter Radius:');
          console.log("Area",Math.PI*(a*a)+str);
        console.log('Perimeter',2*Math.PI*(a*a)+' unit');
        break;
    }


