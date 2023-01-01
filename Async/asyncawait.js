import readlineSync from 'readline-sync';
// async function getusers(){
//     try{

//     }catch(error)


// }

let num = readlineSync.questionInt("Enter a number")

function timer(time) {
    return new Promise((resolve, reject) => {
        if (num > 100) {
            setTimeout(() => {
                resolve("I am Getting an Output");
            }, num)
        } else {
            setTimeout(() => {
                reject("I am Being Rejected ");
            }, 0)
        }
    })
}

// // console.log(experiment(100));
timer(num)
    .then((data) => {
       setTimeout(console.log(data),num)
    })
    .catch((err) => {
        console.log(err)
        console.log("Coming to Catch Block")
    })

