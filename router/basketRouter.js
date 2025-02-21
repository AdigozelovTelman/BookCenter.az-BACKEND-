import express from 'express';
import { deleteUsers, getUser, getUsers, updateUsers } from '../controllers/userController.js';
import { verifyAdmin, verifyUser } from '../utils/generateToken.js';
import { getBasket, postBasket, deleteBasket, increaseQuantity, decreaseQuantity } from '../controllers/basketController.js';

const router = express.Router();



router.get("/", getBasket);
router.post("/", postBasket);
router.delete("/:id", deleteBasket);
router.patch("/increase/:id", increaseQuantity);
router.patch("/decrease/:id", decreaseQuantity);

export default router;