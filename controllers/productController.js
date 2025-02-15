import ProductIteam from "../models/productModel.js";

const getProduct = async(req,res)=>{
    try {
        const products = await ProductIteam.find()
        res.json(products)
    } catch (error) {
        console.log('xeta');
    }
}

const postProducts = async(req,res)=>{
    try {
        const newProducts = req.body
        await ProductIteam.create(newProducts)
        res.json(newProducts)
    } catch (error) {
        console.log('xeta');
    }
}

const deleteProducts = async(req,res)=>{
    try {
        const{id} = req.params
        await ProductIteam.findByIdAndDelete(id)  
        res.json('silindi')

    } catch (error) {
        console.log('xeta');
    }
}
export {getProduct,postProducts,deleteProducts}