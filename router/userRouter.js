// import express from "express";
// import { authUser, createUser, getUser, logoutUser } from "../controllers/userController.js";
// import userControl from "../middleware/authMiddleware.js";

// const router = express.Router()

// router
// .route('/signup')
// .post(createUser)

// router
// .route('/login')
// .post(authUser)

// router
// .route('/logout')
// .post(logoutUser)

// router
// .route('/getuser')
// .get(userControl, getUser)

// export default router



import express from 'express'
import { deleteUsers, getUser, getUsers, updateUsers } from '../controllers/userController.js'
import { verifyAdmin, verifyUser } from '../utils/generateToken.js'

const router = express.Router()

router.put("/:id", verifyUser, updateUsers)

router.delete("/:id", verifyUser, deleteUsers)

router.get("/:id", verifyUser, getUser)

router.get("/", verifyAdmin, getUsers)

export default router