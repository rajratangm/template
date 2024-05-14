import mongoose, { Connection } from "mongoose";

let isConnected:Connection |boolean = false;

if(isConnected){
    return isConnected;
}

const connectDB = async()=>{
    try{
        const res= await mongoose.connect(process.env.MONGO_URI);
        isConnected= res.connection;
        console.log(isConnected)
        return isConnected

    }
    catch(error){
        console.log(error)
    }
    
}