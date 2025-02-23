import express from 'express'
import { deleteNotebookProducts, getNotebookProduct, postNotebookProducts } from '../controllers/notebookController.js'

export const notebookRouter = express.Router()

notebookRouter.route('/')
.get(getNotebookProduct)
.post(postNotebookProducts)
    notebookRouter.route('/:id')
    .delete(deleteNotebookProducts)

export default notebookRouter
