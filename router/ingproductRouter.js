import express from 'express'
import { deleteIngProducts, getIngProduct, postIngProducts } from '../controllers/ingproductController.js'

export const ingRouter = express.Router()

ingRouter.route('/')
.get(getIngProduct)
.post(postIngProducts)
    ingRouter.route('/:id')
    .delete(deleteIngProducts)

export default ingRouter
