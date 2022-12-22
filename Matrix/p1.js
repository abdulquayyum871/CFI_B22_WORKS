let a = [1,2,3,4,5]

function isprime(n){
    if(n<2)
    return false;
for(let i=0;i<=n;i++)
    if(n%i==0)
    return true;
}


console.log(isprime(a[3]))


// let sum=0

// for(let i=0;i<=a.length;i++){
//     if(a[i]%2){
//         console.log(a[i])
//         sum = sum + a[i]
//     }
// }
// console.log(sum)

// let b = "Quayyum";
// let c =""

// for(let i=b.length-1;i>=0;i--){
//  c=c+b[i]
// }
// console.log(c)