import BagProductIteam from "../models/bagModel.js";

const getBagProduct = async(req,res)=>{
    try {
        const bagproducts = await BagProductIteam.find()
        res.json(bagproducts)
    } catch (error) {
        console.log('xeta');
    }
}

const postBagProducts = async(req,res)=>{
    try {
        const newbagProducts = req.body
        await BagProductIteam.create(newbagProducts)
        res.json(newbagProducts)
    } catch (error) {
        console.log('xeta');
    }
}

const deleteBagProducts = async(req,res)=>{
    try {
        const{id} = req.params
        await BagProductIteam.findByIdAndDelete(id)  
        res.json('silindi')

    } catch (error) {
        console.log('xeta');
    }
}
export {getBagProduct, postBagProducts, deleteBagProducts}