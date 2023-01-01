// var a = [5,1,3,2,6]

// var b = a.map(double)

// // var c = a.map(Bina??c)
// // console.lo?g(b)

// function double(x){
//     return (x*3)
// }

// var a = ()=>{
//     console.log("bff")
// }
// a()
let ab = [1,2,3,4,96,5,5,6,7,87,8,9]


function findmax(a){
    let max =0
    for(let i=0;i<a.length;i++){
        if(a[i]>max)
        max = a[i]
    }
    console.log(max)
}

findmax(ab)
// var b = a.filter((x)=> x>2)
// console.log(b)

// // var c = (x)=>{
// //     return x%2
// // }
// // function isodd(x){
// //     return x%2
// // }

let c = ab.reduce( function (acc,curr){
    if(!(curr>acc)){
        acc = curr;
    }
    return acc
},0)

console.log(c)