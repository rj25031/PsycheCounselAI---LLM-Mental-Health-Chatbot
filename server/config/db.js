import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        const mongoUrl = process.env.MONGO_URL; 
        const config =await mongoose.connect(mongoUrl);
        console.log(`connected to database ${config.connection.host}`);
    } catch (error) {
        console.log(`error while connecting the database : ${error}`);
    }
} 

export default connectDB