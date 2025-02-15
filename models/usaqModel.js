import mongoose from "mongoose";

export const UsaqProductSchema = mongoose.Schema({
    image:{type:String},
    title:{type:String},
    price:{type:String}
},{timestamps:true})

const UsaqProductIteam = mongoose.model('usaqProduct', UsaqProductSchema)

export default UsaqProductIteam 