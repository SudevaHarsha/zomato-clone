import  express from "express";
import AWS from "aws-sdk";
import multer from "multer";

import { ImageModel } from "../../database/allModels";

import {s3Upload} from "../../utils/s3"

const Router =express.Router();
//configure multer
const storage = multer.memoryStorage();
const upload = multer({storage});

export default Router;
Router.get("/:_id",async(req,res)=>{
    try{
        const image = await ImageModel.findById(req.params._id);
        return res.json({image})

    }
    catch(error){
        return res.status(500).json({error:error.message})
    }
})
Router.post("/", upload.single("file"),async(req,res)=>{
    try{
        const file = req.file;
        const bucketOptions = {
            Bucket:"zomato-clone",
            key: file.originalname,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: "public-read"
            

        }
        const UploadImage= await s3Upload(bucketOptions);
        const dbUpload= await ImageModel.create({
            images:[
                {
                    location: UploadImage.Location,
                },
            ]
        })
        return res.status(200).json({UploadImage});
    }
    catch(error){
        return res.status(500).json({error:error.message})
    }
})