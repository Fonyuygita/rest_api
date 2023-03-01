// inside this goalmodel we are going to create the structure of our schema

 import mongoose from "mongoose"

 const goalSchema=mongoose.Schema({
    text:{
        type:String,
        required: [true, 'please add a text value']
    },
 },
 {
    timestamps:true,
 }
 )

 export default mongoose.model('Goal', goalSchema);