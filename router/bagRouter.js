import express from 'express'
import { deleteBagProducts, getBagProduct, postBagProducts } from '../controllers/bagController.js'

export const bagRouter = express.Router()

bagRouter.route('/')
.get(getBagProduct)
.post(postBagProducts)
    bagRouter.route('/:id')
    .delete(deleteBagProducts)

export default bagRouter
