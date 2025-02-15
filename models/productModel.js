import mongoose from "mongoose";

export const ProductSchema = mongoose.Schema({
    image:{type:String},
    title:{type:String},
    price:{type:String}
},{timestamps:true})

const ProductIteam = mongoose.model('product', ProductSchema)

export default ProductIteam 