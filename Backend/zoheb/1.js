import express from "express";
const app = express()
const port = 3000;

app.get("/",(req,res)=>{
    console.log("This is my callback 1")
    req.username = "Zoheb"
    next();
})

const cb1 = (req,res,next)=>{
    console.log("THis is call back");
    req.password = "Pass"
    
}