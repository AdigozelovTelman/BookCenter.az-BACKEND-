import mongoose from "mongoose";

export const NotebookProductSchema = mongoose.Schema({
    image:{type:String},
    title:{type:String},
    price:{type:String}
},{timestamps:true})

const NotebookProductIteam = mongoose.model('notebookProduct', NotebookProductSchema)

export default NotebookProductIteam 