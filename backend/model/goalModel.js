// inside this goalmodel we are going to create the structure of our schema

 import mongoose from "mongoose"




 const goalSchema=mongoose.Schema({

//  we will we need to associate every goal with a particular user, so we have to link our goals to particular users
user:{
   type:mongoose.Schema.Types.ObjectId,
   // we want our type to be an object id because when we create any resource we are going to have an object id
   required:true,
   // we equally need to add a reference, which model does the objectId above pattern to
   ref:'User'
},
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