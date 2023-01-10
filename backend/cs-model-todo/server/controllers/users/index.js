import express from "express"
import fs from "fs/promises"
import bcrypt from "bcrypt"
import  {registervalidation,addTaskValidations,loginvalidation,errorvalidation} from "../../middlewares/validators/index.js"
import jwt from "jsonwebtoken"

const router = express.Router()


//Handling the Register path request
router.post("/register",registervalidation(),errorvalidation,async (req,res)=>{
    try {

        //Object destructuring
        let {username,email,password,location,phone}= req.body
        //Reading file
      let fileData = await fs.readFile("data.json")
        //Parsing the data as it is read in a buffer format
        fileData = JSON.parse(fileData)
        //Checking for duplicate users
        let userfound = fileData.find((ele)=>ele.email == req.body.email)
        if(userfound){
            return res.status(409).send("User Already Exists")
        }
        //Hashing a password
        password = await bcrypt.hash(password,12)
        let userdata = {email,username,password,location,phone,todo:[]}
        fileData.push(userdata);
        //Writing the main file
        await fs.writeFile("data.json",JSON.stringify(fileData));
        return res.status(200).json({error:"User Registered Successfully"})
    } catch (error) {
        //Handling the error in the catch block
        console.error(error)
        res.status(500).json({error:"Internal server error"})
    
    }
})

//Handling the login path request

router.post("/login",loginvalidation(),errorvalidation,async (req,res)=>{

    try{

    //Reading the file for the data and parsing it into JSON
    fileData = await fs.readFile("data.json")
    fileData = JSON.parse(fileData)

    //Verifying the email in the data
    let userfound = fileData.find((ele)=>ele.email == req.body.email)
    if(!userfound){
        return res.status(401).json({error:"Unauthorised access"})
    }
    //Verifying the hashed passwords
    const matchpassword = await bcrypt.compare(req.body.password,userfound.password)
    if(!matchpassword){
        return res.status(401).json({error:"unauthorised access"})
    }
    //Getting the payload and authorising token to a login user
    const payload = {email : req.body.email,username: userfound.username}
    const privatekey = "codeforindia";
    const token = jwt.sign(payload,privatekey,{expiresIn:"1h"});
    res.status(200).json({message:"login is successfull",token})
} catch(error){
    console.error(error)
    res.status(500).json({error:"Internal server error"})
}

})

export default router;