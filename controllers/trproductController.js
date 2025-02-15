import TrProductIteam from "../models/trproductModel.js";

const getTrProduct = async(req,res)=>{
    try {
        const trproducts = await TrProductIteam.find()
        res.json(trproducts)
    } catch (error) {
        console.log('xeta');
    }
}

const postTrProducts = async(req,res)=>{
    try {
        const newtrProducts = req.body
        await TrProductIteam.create(newtrProducts)
        res.json(newtrProducts)
    } catch (error) {
        console.log('xeta');
    }
}

const deleteTrProducts = async(req,res)=>{
    try {
        const{id} = req.params
        await TrProductIteam.findByIdAndDelete(id)  
        res.json('silindi')

    } catch (error) {
        console.log('xeta');
    }
}
export {getTrProduct, postTrProducts, deleteTrProducts}