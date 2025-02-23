import express from 'express'
import { deleteGiftProducts, getGiftProduct, postGiftProducts } from '../controllers/giftController.js'

export const giftRouter = express.Router()

giftRouter.route('/')
.get(getGiftProduct)
.post(postGiftProducts)
    giftRouter.route('/:id')
    .delete(deleteGiftProducts)

export default giftRouter
