import express from "express";
const app = express()
const port = 5000;

//[]
app.use(express.json());

app.get("/",(req,res)=>{
    console.log(req.headers)
    console.log(req.method)
    // setTimeout(()=>{
        res.send("Hello wOrld")
    // },3000)
})
app.get("/query",(req,res)=>{
    console.log(req.query)
})

app.post("/",(req,res)=>{
    console.log(req.body)
    res.send("I am catering a post request")
})

// app.use()
app.listen(port,()=>{
    console.log("Server Started at port",port)
})

