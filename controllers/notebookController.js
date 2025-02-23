import NotebookProductIteam from "../models/notebookModel.js";

const getNotebookProduct = async(req,res)=>{
    try {
        const notebookproducts = await NotebookProductIteam.find()
        res.json(notebookproducts)
    } catch (error) {
        console.log('xeta');
    }
}

const postNotebookProducts = async(req,res)=>{
    try {
        const newnotebookProducts = req.body
        await NotebookProductIteam.create(newnotebookProducts)
        res.json(newnotebookProducts)
    } catch (error) {
        console.log('xeta');
    }
}

const deleteNotebookProducts = async(req,res)=>{
    try {
        const{id} = req.params
        await NotebookProductIteam.findByIdAndDelete(id)  
        res.json('silindi')

    } catch (error) {
        console.log('xeta');
    }
}
export {getNotebookProduct, postNotebookProducts, deleteNotebookProducts}