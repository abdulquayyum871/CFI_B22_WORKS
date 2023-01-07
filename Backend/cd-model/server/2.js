import express from "express";
const app = express();
let port = 6000;

app.use(express.json());

// let a=()=>{app.get("/", (req, res) => {
//     res.send("Hello World");
//     console.log("Hello server started at port 1 ");
//   });} 

app.get("/api/signup", (a,req, res) => {
  res.send("Sign up server connection");
  console.log("sign up server established");
});
app.use("/",express.static("edventurepark.com"));

app.listen(port, () => {
  console.log(`Server established at ${port}`);
});


