import  express  from "express"
import dotenv from "dotenv"
import DBconnection from './DataBase/DBConntention.js'
import bodyParser from "body-parser"
import  cors from "cors"
import routes from "./Routes/user-routes.js"
dotenv.config({
    path:"/.env"
})
const app=express();
app.use(bodyParser.json())
app.use(cors())
DBconnection()
app.use('/auth',routes)

app.get('/',(req,res)=>{
    res.send("hello world").json({message:"hello"})
})
app.listen(process.env.PORT||8000,()=>{
    console.log(`port is listening on ${process.env.PORT}`);
})