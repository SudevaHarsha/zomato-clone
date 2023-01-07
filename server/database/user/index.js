import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const ReviewSchema = new mongoose.Schema(
    {
        fullName: {type:String, required: true},
        email: {type:String, required: true},
        password:{type:String},
        address:[{deatil:{type:String}, for:{type:String}}],
        phoneNumber:[{type:Number}],        
    },
    {
        timestamps:true,
    }
);
userSchema.methods.generateJwtToken= function (){};
UserSchema.statics.findByEmailAndPhone = async()=> {};
UserSchema.statics.findByEmailAndPassword = async()=> {};


export const RestaurantModel = mongoose.model("users",UserSchema);