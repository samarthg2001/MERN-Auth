import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true,
        lowercase:true,
    },
    email:{
type:String,
require:true
    },
    password:{
        typeof:String,
        require:true,
    }

        
},{timestamps:true})

export  const user=mongoose.model('user',userSchema)