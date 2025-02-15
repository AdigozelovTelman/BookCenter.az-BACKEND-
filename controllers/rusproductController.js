import RusProductIteam from "../models/rusproductModel.js";

const getRusProduct = async(req,res)=>{
    try {
        const rusproducts = await RusProductIteam.find()
        res.json(rusproducts)
    } catch (error) {
        console.log('xeta');
    }
}

const postRusProducts = async(req,res)=>{
    try {
        const newrusProducts = req.body
        await RusProductIteam.create(newrusProducts)
        res.json(newrusProducts)
    } catch (error) {
        console.log('xeta');
    }
}

const deleteRusProducts = async(req,res)=>{
    try {
        const{id} = req.params
        await RusProductIteam.findByIdAndDelete(id)  
        res.json('silindi')

    } catch (error) {
        console.log('xeta');
    }
}
export {getRusProduct, postRusProducts, deleteRusProducts}