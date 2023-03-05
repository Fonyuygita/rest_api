import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../model/userModel.js"

// create our protect function to protect our route

export const protect=asyncHandler(async (req, res, next)=>{
    // initialize our token here
    let token;

    // so we check in the header and  authorization object

if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    try {
        
        // get token from header
        // split is going to turn this into an array so that we take the second par [1] which is our array

        token=req.headers.authorization.split(' ')[1];

        // verify the token

        const decoded=jwt.verify(token, process.env.JWT_SECRET);
        // get user from the token without the password, so we use the select() method

        req.user=await User.findById(decoded.id).select('-password');
        console.log(req.user);
        // use the next method so that at the end of our middleware we should be able to call the next piece of middleware
        next()
    } catch (err) {
        console.log(err);
        // status code 401 means not authorized
        res.status(401).json({success:false, msg:"Not authorized"})
    
    }

}

// what if there is no token
if(!token) return res.status(401).json({msg:"Not authorized, no token"})
   



})