import express from 'express'
import { deleteProducts, getProduct, postProducts } from '../controllers/productController.js'


export const router = express.Router()

router.route('/')
.get(getProduct)
.post(postProducts)
    router.route('/:id')
    .delete(deleteProducts)

export default router
