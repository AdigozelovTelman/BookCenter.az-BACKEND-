import BasketIteam from "../models/basketModel.js";

const getBasket = async(req,res)=>{
    try {
        const products = await BasketIteam.find()
        res.json(products)
    } catch (error) {
        console.log('xeta');
    }
}

const postBasket = async(req,res)=>{
    try {
        const newProducts = req.body
        await BasketIteam.create(newProducts)
        res.json(newProducts)
    } catch (error) {
        console.log('xeta');
    }
}

const deleteBasket = async(req,res)=>{
    try {
        const{id} = req.params
        await BasketIteam.findByIdAndDelete(id)  
        res.json('silindi')

    } catch (error) {
        console.log('xeta');
    }
}
export {getBasket,postBasket,deleteBasket}