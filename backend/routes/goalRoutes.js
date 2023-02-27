import express from "express";

const router=express.Router();

// create our first routes here

router.get("/", (req, res)=>{
    res.status(200).json({
        msg:"route successfully set",
        res_status:"200"
    })
});

export default router;