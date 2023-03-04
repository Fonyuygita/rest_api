// let us create the user model

import mongoose from "mongoose";

// let us create the actual user model
// use schema is basically the fields we want our schema to have

const userSchema=mongoose.Schema({
    // now we can have our fieds
    name:{
        type:String,
        required:[true, 'please add a name']
    },
    email:{
        type:String,
        required:[true, 'please add an email']
    },

    password:{
        type:String,
        required:[true, 'please add an email']
    },


},
{
    timestamps:true

}
)


// now let us export our model to use anywhere in oujr application
 export default mongoose.model('Users', userSchema);