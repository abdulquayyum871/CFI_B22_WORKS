// function fun(n) {
//     if (n == 0 || n == 1) return n;
//     if (n % 3 != 0) return 0;
//     return fun(n / 3);
// }  
// console.log(fun(7))

// function foo(n, r) {
//     if (n > 0) return n % r + foo(Math.floor(n / r), r);
//     else return 0;
//     }
//     console.log(foo(513, 2));


function f(n) {
    if (n / 2) {
    f(Math.floor(n / 2));
    }
    console.log(n % 2);
    }
    f(1024);