import express from "express"
import fs from "fs/promises"
import jwt from "jsonwebtoken"
import randomString from "random-string"
import verifytoken from "../../middlewares/validators/auth/index.js"
import { addTaskValidations,errorvalidation } from "../../middlewares/validators/index.js"


const router = express.Router()

router.post("/add",verifytoken,addTaskValidations(),errorvalidation,async (req,res)=>{
    try {
        console.log(req.headers)
        const privateKey="codeforindia"
        let token = req.headers['auth-token'];
        console.log(token);
        let payload = jwt.verify(token,privateKey);
        console.log(req.payload)
        let filedata =await fs.readFile("data.json")
        filedata = JSON.parse(filedata)

        let userfound = filedata.find((ele)=>ele.email == req.payload.email)
        if(!userfound){
            return res.status(401).json({error:"Unauthorized Access"})
        }

        let tododata = {
            todoname : req.body.todoname,
            iscompleted: false,
            todo_id: randomString(8)
        }
        userfound.todo.push(tododata);

        await fs.writeFile("data.json",JSON.stringify(filedata))
        return res.status(200).json({success:"Add task is up"})
    } catch (error) {
        console.error(error)
        res.status(500).json({error:"Internal server error"})
    }
})

export default router;