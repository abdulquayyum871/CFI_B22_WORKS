import express from "express"
const app = express()
const port = 3000;

app.use(express.json())

app.get("/",(req, res, next) => {
  console.log('Time:', Date.now())
  res.send("Hello World")
//   next()
})

app.get("/",(req,res)=>{
    console.log("Callback 2")
    res.send("Headers req")
    next()


})


app.listen(port,()=>{
    console.log(`Server established at this ${port}`)
})