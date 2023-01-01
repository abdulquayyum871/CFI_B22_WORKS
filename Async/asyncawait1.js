import fs from "fs";

// fs.readFile("hello.txt", (err, data) => {
//     if (err)
//         throw err
//     // return console.error(err)
//     console.log(data.toString());
// })

function filedelay(){
    return new Promise((resolve, reject) => {
       if(fs.read(file,err,data)){
           setTimeout(() => {
            resolve(data)
           }, 1000);
        }
        else{
            reject("THe file is not valid")
        }
    })
}

filedelay().then((res)=>{
    fs.read("1.js",err,data)
    console.log(data.toString())
})
.catch((err=>{
    console.log(err)
}))
