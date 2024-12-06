import Express from "express";
import {signup,login}  from "../Controller/user-controller.js";
import {signupValidation,loginValidation} from "../Middleware/AuthValidation.js"
import productlist from "../Controller/product-controler.js";
import ensureAuthenticated from "../Middleware/Auth.js"
const routes =Express()


try {
    //dummy
    routes.post('/signup',(req,res)=>{
        res.send("signup success")
    })    
    routes.post('/signup1',signupValidation,signup)

    routes.post('/login',loginValidation,login)
    routes.get('/',ensureAuthenticated,productlist)


} catch (error) {
    console.log(error);
}

export default routes