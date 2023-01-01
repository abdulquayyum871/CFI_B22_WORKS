// const radius = [1,2,3];

// function cal(raduius){
//     const out = [];
//     for(i=0;i<radius.length;i++){
//         out.push(Math.PI *radius[i] * radius[i])
//     }
//     return out;
// };
// console.log(cal(radius))


const radius = [1,2,3];

function cal(raduius){
    const out = [];
    for(i=0;i<radius.length;i++){
        out.push(Math.PI *2 * radius[i])
    }
    return out;
};
console.log(cal(radius))