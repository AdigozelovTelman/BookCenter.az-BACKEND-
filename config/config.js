import mongoose from "mongoose";

export const connetDb = async(req,res)=>{
    const connect = await mongoose.connect(process.env.MONGO_URL)
    console.log(connect.connection.host);
}


// MONGO_URL = mongodb+srv://telmanrasp202:TelmanQazax@telman0.inqvl.mongodb.net/
