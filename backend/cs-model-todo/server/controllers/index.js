import express from "express";
import fs from "fs/promises";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    let { username, email, password, location, phone } = req.body;

    let fileData = await fs.readFile("data.json");
    fileData = JSON.parse(fileData);

    let useremail = fileData.find((ele) => ele.email == req.body.email);
    if (useremail) {
      return res.status(409).json({ error: "user already exist" });
    }

    password = await bcrypt.hash(password, 12);
    let userdata = { email, username, password, location, phone, todo: [] };
    fileData.push(userdata);
    await fs.writeFile("data.json", JSON.stringify(fileData));
    res.status(200).json({ success: "user is already registered" });
  } catch (error) {
    console.error(error)
    res.status(500).json({error:"Internal server error"});
  }
});

router.post("/login", async(req,res)=>{
    try{
        let fileData = await false.readFile("data.json")
        fileData = JSON.parse(fileData)

        let userFound = fileData.find((ele)=> ele.email==req.body.email);
        if(!userFound){
            return res.status(401).json({error:"unauthorized access"})
        }

        const passwordmatch = await bcrypt.compare(req.body.password,userFound.password);
        if(!passwordmatch){
            return res.status(401).json({error:"unauthorised access"})
        }
        const payload = {email:req.body.email,username:userFound.username};
        const privatekey = 'codeforindia';
        
    }
} )
