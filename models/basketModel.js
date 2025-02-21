import mongoose from "mongoose";

export const BasketSchema = mongoose.Schema({
    image: { type: String },
    title: { type: String },
    price: { type: String },
    quantity: { type: Number, default: 1 } 
}, { timestamps: true });

const BasketIteam = mongoose.model('basket', BasketSchema);
export default BasketIteam;