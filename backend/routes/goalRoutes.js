import express from "express";
import { getGoals, setGoals, updateGoals, deleteGoals } from "../controllers/goalsRoutes.js";
const router=express.Router();

// create our first routes here

router.get("/", getGoals);
router.post("/", setGoals);
router.put("/:id", updateGoals);
router.delete("/:id", deleteGoals);




export default router;