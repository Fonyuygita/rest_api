console.log("hello, world");
import express from "express"
const app=express();
import {}  from "dotenv/config";
// import our middleware


// import your routes here
import goalsRoutes from "./routes/goalRoutes.js"

const PORT=process.env.PORT;

// setup our server up and running

app.listen(PORT, ()=>{
    console.log("App is listening");

})
// middlewares needed

app.use(express.json());
app.use(express.urlencoded({extended:false}))
// app.use(errorHandler())


// first route get request

app.use("/api/goals", goalsRoutes)

