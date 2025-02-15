import IngProductIteam from "../models/ingproductModel.js";

const getIngProduct = async(req,res)=>{
    try {
        const ingproducts = await IngProductIteam.find()
        res.json(ingproducts)
    } catch (error) {
        console.log('xeta');
    }
}

const postIngProducts = async(req,res)=>{
    try {
        const newingProducts = req.body
        await IngProductIteam.create(newingProducts)
        res.json(newingProducts)
    } catch (error) {
        console.log('xeta');
    }
}

const deleteIngProducts = async(req,res)=>{
    try {
        const{id} = req.params
        await IngProductIteam.findByIdAndDelete(id)  
        res.json('silindi')

    } catch (error) {
        console.log('xeta');
    }
}
export {getIngProduct, postIngProducts, deleteIngProducts}