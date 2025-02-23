import mongoose from "mongoose";

export const BagProductSchema = mongoose.Schema({
    image:{type:String},
    title:{type:String},
    price:{type:String}
},{timestamps:true})

const BagProductIteam = mongoose.model('bagProduct', BagProductSchema)

export default BagProductIteam 