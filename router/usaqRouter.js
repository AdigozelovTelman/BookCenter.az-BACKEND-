import express from 'express'
import { deleteUsaqProducts, getUsaqProduct, postUsaqProducts } from '../controllers/usaqController.js'



export const usaqRouter = express.Router()

usaqRouter.route('/')
.get(getUsaqProduct)
.post(postUsaqProducts)
    usaqRouter.route('/:id')
    .delete(deleteUsaqProducts)

export default usaqRouter
