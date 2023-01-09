import express from "express"
import fs from "fs/promises"

const app = express();
const port = 6001;

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Todo server route established")
})

app.listen(port,()=>{
    console.log("server started at the port",port)
})