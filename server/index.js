import express from "express";
import dotenv from "dotenv";

dotenv.config();
const zomato = express();

zomato.use(express.json());

zomato.get("/",(req,res)=>{
    res.json({
        message : "server is runnig..",
   });
});
const port=4000;

zomato.listen(port,()=>{
    console.log("suchi is running!!");
});