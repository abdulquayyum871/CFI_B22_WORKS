import express from "express"
import useroute from "./controllers/users/index.js"
import todoroute from "./controllers/todos/todo.js"

const app = express();
const port = 6001;

app.use(express.json())


app.get("/",(req,res)=>{
    res.send("Todo server route established")
})
app.use("/api/todo",todoroute)

app.use("/api/user",useroute)
app.listen(port,()=>{
    console.log("server started at the port",port)
})