import user from "../Models/User-Model.js";
import mongoose from "mongoose";


 const productlist=(req,res)=>{
  try {
    console.log(` ${req.user} is logged in `,req.user);
    res.status(200).json([
        {
            name:"mobile",
            price:10000
        },
        {
            name:"tv",
            price:30000
        }
    ])
  } catch (error) {
    console.log(error);
  }
}
export default productlist