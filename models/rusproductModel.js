import mongoose from "mongoose";

export const RusProductSchema = mongoose.Schema({
    image:{type:String},
    title:{type:String},
    price:{type:String}
},{timestamps:true})

const RusProductIteam = mongoose.model('rusProduct', RusProductSchema)

export default RusProductIteam 