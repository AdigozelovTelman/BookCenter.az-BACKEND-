import mongoose from "mongoose";

export const GiftProductSchema = mongoose.Schema({
    image:{type:String},
    title:{type:String},
    price:{type:String}
},{timestamps:true})

const GiftProductIteam = mongoose.model('giftProduct', GiftProductSchema)

export default GiftProductIteam 