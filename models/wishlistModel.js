import mongoose from "mongoose";

export const WishlistSchema = mongoose.Schema({
    image:{type:String},
    title:{type:String},
    price:{type:String}
},{timestamps:true})

const WishlistIteam = mongoose.model('wishlist', WishlistSchema)

export default WishlistIteam