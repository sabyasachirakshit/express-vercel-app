import express from "express";

const app = express();

const port = 9000;

app.use("/",(req,res)=>{
    res.json({"message":"Hello from Express app"});
})

app.listen(port,()=>{
    console.log(`starting server on ${port}`);
})