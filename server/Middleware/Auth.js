import user from "../Models/User-Model.js";
import Joi from "joi";
import Jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config({
    path:"/.env"
})

const ensureAuthenticated= (req,res,next)=>{
const auth=req.headers['authorization'];
if(!auth){
    return res.status(401).json({message:"unauthorized ,jwt token is require"})
}
try {
    const decoded=Jwt.verify(auth,process.env.JWT_SECRET)
    req.user=decoded;
    next()
} catch (error) {
    console.log(error);
    return res.status(403).json({message:"unauthorized , wrong jwt token"})
   
}
}

export default ensureAuthenticated