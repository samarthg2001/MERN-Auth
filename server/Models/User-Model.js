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
required:true
    },
    password:{
        type:String,
        required:true,
    }

        
},{timestamps:true})

 const user=mongoose.model('user',userSchema)
 export default user