// now we import mongoose because it is going to help us to interact with our mongodb

import mongoose from "mongoose"



export const connectDb= async ()=>{


    // when connecting to mongo your functions should always be async

    try {
        
const conn=await mongoose.connect(process.env.MONGO_URI);
console.log(`MONGODB connected : ${conn.connection.host}`);
console.log("connected");

    } catch (err) {
        console.log(err);
        process.exit(1)
        
    }
}