import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({
    path:"./.env"
})
const DBconnection= async ()=>{
    try {
        console.log("Database is connecting");
        const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URL}`)
        console.log("Database is connectedd");
    } catch (error) {
        console.log(`Database connection error , ${error} `);


    }
}

export default DBconnection;