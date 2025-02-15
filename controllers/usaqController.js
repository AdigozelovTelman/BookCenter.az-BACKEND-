import UsaqProductIteam from "../models/usaqModel.js";

const getUsaqProduct = async(req,res)=>{
    try {
        const usaqproducts = await UsaqProductIteam.find()
        res.json(usaqproducts)
    } catch (error) {
        console.log('xeta');
    }
}

const postUsaqProducts = async(req,res)=>{
    try {
        const newusaqProducts = req.body
        await UsaqProductIteam.create(newusaqProducts)
        res.json(newusaqProducts)
    } catch (error) {
        console.log('xeta');
    }
}

const deleteUsaqProducts = async(req,res)=>{
    try {
        const{id} = req.params
        await UsaqProductIteam.findByIdAndDelete(id)  
        res.json('silindi')

    } catch (error) {
        console.log('xeta');
    }
}
export {getUsaqProduct, postUsaqProducts, deleteUsaqProducts}