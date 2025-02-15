import WishlistIteam from "../models/wishlistModel.js";

const getWishlist = async(req,res)=>{
    try {
        const products = await WishlistIteam.find()
        res.json(products)
    } catch (error) {
        console.log('xeta');
    }
}

const postWishlist = async(req,res)=>{
    try {
        const newProducts = req.body
        await WishlistIteam.create(newProducts)
        res.json(newProducts)
    } catch (error) {
        console.log('xeta');
    }
}

const deleteWishlist = async(req,res)=>{
    try {
        const{id} = req.params
        await WishlistIteam.findByIdAndDelete(id)  
        res.json('silindi')

    } catch (error) {
        console.log('xeta');
    }
}
export {getWishlist,postWishlist,deleteWishlist}