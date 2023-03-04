import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
// get our user model
import User from "../model/userModel.js";
// @desc register user
// @route POST /api/goals/:id
// @access public

// async handler to handle exceptions

export const registerUser = asyncHandler(async (req, res) => {
  // get the data from insomnia for example
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res
      .status(400)
      .json({ success: false, msg: "not found, add or field the form" });

  // check if user exist
  const userExist = await User.findOne({ email });

  if (userExist) return res.status(400).json("user already exist");

  // now we hash our password using bcrypt
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  // create user
  const user = await User.create({
    name,
    email,
    password: hashPassword,
  });
  // check if the user was created
  if (user)
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token:createToken=(user._id)

    });
  else res.status(400).json("user was not created or invalid user data");

  res.json({ msg: "register user" });
});

// @desc login user
// @route POST /api/goals/:id
// @access public

// our functions should be async because we are working with mongo and bcrypt which has async methods
// async handler to handle exceptions

export const loginUser = asyncHandler(async (req, res) => {
     // get user from body
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  console.log(user);
  // check for user-email

//  const hashPassword =await bcrypt.compare(password, user.password);
  if (user && await bcrypt.compare(password, user.password))
    return res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token:createToken(user._id)
    })
    return res.status(400).json({error:true, msg:"invalid credentials"})
  res.json({ msg: "login user" });
});

// @desc get user data user
// @route POST /api/goals/:id
// @access public
// async handler to handle exceptions

export const getMe = asyncHandler(async (req, res) => {
 

  res.json({ msg: "get user" });
});


// create our jwt function here

const createToken=(id)=>{

   return jwt.sign({id} ,process.env.JWT_SECRET, {
    expiresIn:"20d"
   })

}