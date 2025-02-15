import mongoose from "mongoose";

export const IngProductSchema = mongoose.Schema({
    image:{type:String},
    title:{type:String},
    price:{type:String}
},{timestamps:true})

const IngProductIteam = mongoose.model('ingProduct', IngProductSchema)

export default IngProductIteam 