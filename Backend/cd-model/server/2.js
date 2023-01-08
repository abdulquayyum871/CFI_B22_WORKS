import express from "express";
import serveIndex from "serve-index";


const app = express();
const port = 6001;

app.get("/",(req,res)=>{
    res.send("<h1>This is the Root </h1>")
    // res.redirect("/public")
})

app.use("/evp",(req,res)=>{
res.send("Edventure park")});

app.post("/evp/enigma",(req,res){
    
})

app.use("/public",serveIndex("public",{icons:true}),express.static("public"));


app.listen(port,()=>{
    console.log("Server Started at Port : ",port);
})