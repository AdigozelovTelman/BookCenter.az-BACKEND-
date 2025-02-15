import mongoose from "mongoose";

export const TrProductSchema = mongoose.Schema({
    image:{type:String},
    title:{type:String},
    price:{type:String}
},{timestamps:true})

const TrProductIteam = mongoose.model('trProduct', TrProductSchema)

export default TrProductIteam 