import jwt from "jsonwebtoken"

const privatekey = "codeforindia";

function verifytoken(req,res,next){
    try {
        let token = req.headers['auth-token'];
        let payload = jwt.verify(token,privatekey);
        req.payload = payload;
        return next();
    } catch (error) {
        console.error(error)
        return res.status(401).json({error:"Invalid Token/ Token Expired"})
    }
    }

export default verifytoken;
