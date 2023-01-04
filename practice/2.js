// import axios from "axios";

// let arr = [];

// for(let i=1;i<=10;i++){
//     arr.push(axios.get(`http://jsonplaceholder.typicode.com/users/${i}`))
// }

// // console.log(arr)

// Promise.all(arr).then(res=>{
//     for(let i=0;i<arr.length;i++){
//         console.log(res[i].data)
//     }
// })

// const numbers = [6, 44, 87, 1, 197, 22];

// const filterByIndex = numbers.filter((element) => {
//   return element % 2 === 0;
// });

// console.log(filterByIndex);
// // Output: [6, 87, 197]

const names = ['Jim', 'Bob', 'Sarah', 'Alex', 'James', 'Sam', 'Peter'];
let a = names[0].toUpperCase
console.log(a)
const filteredNames = (char, array) => {
  return array.filter((name) => name[0].toLowerCase() === char);
};

console.log(filteredNames('j', names));
// Output: ["Jim", "James"]