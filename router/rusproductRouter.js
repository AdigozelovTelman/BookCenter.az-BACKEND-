import express from 'express'
import { deleteRusProducts, getRusProduct, postRusProducts } from '../controllers/rusproductController.js'

export const rusRouter = express.Router()

rusRouter.route('/')
.get(getRusProduct)
.post(postRusProducts)
    rusRouter.route('/:id')
    .delete(deleteRusProducts)

export default rusRouter
