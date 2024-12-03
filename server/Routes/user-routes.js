import Express from "express";
import {signup}  from "../Controller/user-controller.js";
import {signupValidation} from "../Middleware/AuthValidation.js"

const routes =Express()


try {
    routes.post('/signup',(req,res)=>{
        res.send("signup success")
    })    
    routes.post('/signup1',signupValidation,signup)
    routes.post('/login',)
} catch (error) {
    console.log(error);
}

export default routes