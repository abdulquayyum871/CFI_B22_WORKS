import express from "express";
const app = express();
const port = 5001;
import userRouter from "./controllers/users/index.js"

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome to the todo cli server")

    
app.get("/")


app.listen(port,()=>{
    console.log("THe server is running on 5001")
})