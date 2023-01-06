import express from "express"
const app = express()


let port = 3000;

app.set('view engine','ejs')

app.get("/",(req,res)=>{
    console.log("Here")
    res.render("index",{text:"World"})
   
    // res.download("2.js")
    // res.json({message:"HI"})
    // res.send("<h1>Hi</h1>")
})

app.listen(port,()=>{
    console.log("Server started at this",port)
})