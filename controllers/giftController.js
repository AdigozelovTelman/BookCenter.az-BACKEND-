import GiftProductIteam from "../models/giftModel.js";

const getGiftProduct = async(req,res)=>{
    try {
        const giftproducts = await GiftProductIteam.find()
        res.json(giftproducts)
    } catch (error) {
        console.log('xeta');
    }
}

const postGiftProducts = async(req,res)=>{
    try {
        const newgiftProducts = req.body
        await GiftProductIteam.create(newgiftProducts)
        res.json(newgiftProducts)
    } catch (error) {
        console.log('xeta');
    }
}

const deleteGiftProducts = async(req,res)=>{
    try {
        const{id} = req.params
        await GiftProductIteam.findByIdAndDelete(id)  
        res.json('silindi')

    } catch (error) {
        console.log('xeta');
    }
}
export {getGiftProduct, postGiftProducts, deleteGiftProducts}