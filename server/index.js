import  express  from "express"
import dotenv from "dotenv"

import DBconnection from './DataBase/DBConntention.js'

dotenv.config({
    path:"/.env"
})
const app=express();
app.use(express.json())
DBconnection()
app.get('/',(req,res)=>{
    res.send("hello world").json({message:"hello"})
})
app.listen(process.env.PORT||8000,()=>{
    console.log(`port is listening on ${process.env.PORT}`);
})