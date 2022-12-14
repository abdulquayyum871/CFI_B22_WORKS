// var a =1;
//  while(a<= 100){
//     console.log(a);
//     a = a + 2;

//  }

//  console.log(true == "1")
//  console.log("afzal")

//  result = (a !== null && a !== undefined) ? a : b;

// function fun(num) {
//     if (num == 4) {
//         return num;
//     }
//     return 2 * fun(num + 1);
// }

// var n = 1;
// console.log(fun(n));


function fun(x, y) {
    if (x == 0) return y;
    return fun(x - 1, x + y);
    }
    fun(4, 3);
    console.log(fun(4, 3));