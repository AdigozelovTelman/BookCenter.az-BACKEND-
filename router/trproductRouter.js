import express from 'express'
import { deleteTrProducts, getTrProduct, postTrProducts } from '../controllers/trproductController.js'


export const trRouter = express.Router()

trRouter.route('/')
.get(getTrProduct)
.post(postTrProducts)
    trRouter.route('/:id')
    .delete(deleteTrProducts)

export default trRouter
