import mongoose from "mongoose";

let isConnected = false;

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);

    }
    catch(error){
        console.log(error)
    }
    
}