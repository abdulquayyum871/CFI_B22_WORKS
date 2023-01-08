import express from "express";
import {uservalidation,errorValidator} from "../users/"
const router = express.Router()

router.get("/",(req,res)=>{
    res.send('I am in express Router')
})

router.post("/register",(req,res)=>{
    try {
    console.log(req.body)
    console.log(req.ip)
    // console.log(req)
    res.status(200).json({message:"successfully registered"})
    } catch (error) {
        console.log(error)
    res.status(400).json({error:"server not reached"})
    }
})

router.post("/login",(req,res)=>{
    try {
        console.log(req.body);
        console.log(req.ip);
        res.status(200).json({message:"succesfully login"})
    } catch (error) {
        console.error(error)
        res.status(400).json({error:"Error encountered"})
    }
})

export default router;