console.log("hello, world");
import express from "express"
const app=express();
import {}  from "dotenv/config";

// import your routes here
import goalsRoutes from "./routes/goalRoutes.js"

const PORT=process.env.PORT;

// setup our server up and running

app.listen(PORT, ()=>{
    console.log("App is listening");

})


// first route


// first route get request

app.use("/api/goals", goalsRoutes)

