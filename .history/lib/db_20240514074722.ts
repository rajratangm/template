import mongoose from "mongoose";

let isConnected = false;

if(isConnected){
    return isConnected;
}

const connectDB = async()=>{
    try{
        const res= await mongoose.connect(process.env.MONGO_URI);

    }
    catch(error){
        console.log(error)
    }
    
}