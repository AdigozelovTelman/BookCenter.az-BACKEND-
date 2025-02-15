import jwt from 'jsonwebtoken'
import userModel from '../models/UserModel.js'

const userControl = async (req, res, next) =>{
    let token

    token = req.cookies.jwt

    if (!token) {
        res.json('token tapilmadi')
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = await userModel.findById(decoded.id).select('-password')

        next()

    } catch (error) {
        console.log(error);
        
    }
}

export default userControl