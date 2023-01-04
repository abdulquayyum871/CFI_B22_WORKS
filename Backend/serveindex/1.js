import express from "express"

const app = express();
const port =6001;

app.get("/",(req,res)=>{
    res.send("<h1>THis is the root folder</h1>")
})