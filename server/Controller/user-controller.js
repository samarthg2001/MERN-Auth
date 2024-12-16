import user from "../Models/User-Model.js";
import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import Jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config({
    path:"/.env"
})
export const signup= async (req,res)=>{
    try {
        const {name,email,password}=req.body;
        if(!name||!email||!password){
            return res.status(205).json({message:"All required field must be provided"})
        }
         const userExists= await user.findOne({email})
         if(userExists){
            return res.status(205).json({message: "user already exists , you can login"})
        }
        const hashedPassword=await bcrypt.hash(password,10)
        
        const newUser= new user({name,password:hashedPassword,email})
        const savedUser= await newUser.save();
        
        res.status(201).json({savedUser,success:true})


    } catch (error) {
        console.log(` the error is at login controller${error}`);
        res.status(500).json({message:"internal server error"})
    }
}


export const login= async (req,res)=>{
    try {
        const {email,password}=req.body;
        const errormsg=" email or password is wrong"
        if(!email||!password){
            return res.status(400).json({message:"All required field must be provided"})
        }
         const userExists= await user.findOne({email})
         if(!userExists){
            return res.status(403).json({message:errormsg})
        }
        const isPasswordCorrect= await bcrypt.compare(
            password,
            userExists.password
        )
        if(!isPasswordCorrect){
            return res.status(400).json({message:"Inccorrect password "})
        }
        const jwtToken=Jwt.sign(
            {email:user.email,_id:user._id},
           process.env.JWT_SECRET,
           {expiresIn:'24h'}
            )
            res.status(200)
            .json({
                message:"log-in-sucess",
                success:true,
            jwtToken,
        email,
    Username:userExists.name})


    } catch (error) {
        console.log(` the error is at login controller${error}`);
        res.status(500).json({message:"internal server error"})
    }
}