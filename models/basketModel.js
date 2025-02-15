import mongoose from "mongoose";

export const BasketSchema = mongoose.Schema({
    image:{type:String},
    title:{type:String},
    price:{type:String}
},{timestamps:true})

const BasketIteam = mongoose.model('basket', BasketSchema)

export default BasketIteam