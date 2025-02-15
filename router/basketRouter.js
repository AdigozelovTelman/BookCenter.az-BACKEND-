import express from 'express'
import { deleteBasket, getBasket, postBasket } from '../controllers/basketController.js'

export const router = express.Router()

router.route('/')
.get(getBasket)
.post(postBasket)
    router.route('/:id')
    .delete(deleteBasket)

export default router
