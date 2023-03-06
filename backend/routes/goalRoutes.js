import express from "express";
import { getGoals, setGoals, updateGoals, deleteGoals } from "../controllers/goalsController.js";
import { protect } from "../middleware/authMidleware.js";
const router=express.Router();


// create our first routes here

router.get("/", protect, getGoals);
router.post("/",protect, setGoals);
router.put("/:id", protect, updateGoals);
router.delete("/:id",protect, deleteGoals);




export default router;