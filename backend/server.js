console.log("hello, world");
import express from "express"
const app=express();
import {}  from "dotenv/config";



const PORT=process.env.PORT;

// setup our server up and running

app.listen(PORT, ()=>{
    console.log("App is listening");

})

// first route get request

app.get('/api/goals', (req, res)=>{
    res.status(200).json({message:"Get Goals"});
})

