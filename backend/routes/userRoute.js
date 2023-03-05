import express from "express";
import { registerUser,loginUser, getMe } from "../controllers/userController.js";
// bring in our protected route middleware
import { protect } from "../middleware/authMidleware.js";

const router=express.Router();

// make our request here

router.post('/register', registerUser)
router.post('/login', loginUser)
// use our protected route middleware here
router.get('/get', protect, getMe)



export default router;