import express from 'express'
import { deleteWishlist, getWishlist, postWishlist } from '../controllers/wishlistController.js'

export const router = express.Router()

router.route('/')
.get(getWishlist)
.post(postWishlist)
    router.route('/:id')
    .delete(deleteWishlist)

export default router
