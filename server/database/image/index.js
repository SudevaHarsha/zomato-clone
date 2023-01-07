import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
    {
        
    }
    {
        timestamps: true,
    }
);

export const FoodModel = mongoose.model("foods",FoodSchema);