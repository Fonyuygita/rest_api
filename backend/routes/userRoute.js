import express from "express";
import { registerUser,loginUser, getMe } from "../controllers/userController.js";

const router=express.Router();

// make our request here

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/get', getMe)



export default router;