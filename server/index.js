import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/connection.js";
/* import Auth from "./api"; */

dotenv.config();
const zomato = express();

zomato.use(express.json());

zomato.get("/",(req,res)=>{
    res.json({
        message : "server is runnig..",
   });
});

/* zomato.use("/auth", Auth); */

const port=4000;

zomato.listen(port,()=>{
    connectDB().then(()=>{
        console.log("running");
    })
    .catch((error)=>{
        console.log('server is running but DB connection is failed');
        console.log(error);
    })

});