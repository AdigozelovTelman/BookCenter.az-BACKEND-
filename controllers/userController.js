// import userModel from "../models/UserModel.js"
// import { generateToken } from "../utils/generateToken.js"


// const createUser = async (req, res) => {
//     const { name, email, password } = req.body

//     const user = await userModel.findOne({ email })

//     if (user) {
//         res.json('user artiq var')
//     }

//     await userModel.create({
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password
//     })

//     res.json('user created')
// }

// const authUser = async (req, res) => {
//     const { email, password } = req.body

//     const user = await userModel.findOne({ email })

//     if (user && await user.passwordControl(password)) {
//         generateToken(res, user._id)
//         res.json('logged in')
//     } else { 
//         res.json('email ve ya parol sehvdir')
//     }
// }

// const logoutUser = async (req, res) => {
//     res.cookie('jwt', '', {
//         httpOnly: true,
//         expires: new Date(0)
//     })

//     res.json('logged out')
// }

// const getUser = async (req, res) => {
//     if (req.user) {
//         res.json({
//             name: req.user.name,
//             email: req.user.email
//         })

//     }

//     res.json('unauth')
// }

// export { createUser, authUser, logoutUser, getUser }



import userModel from "../models/userModel.js"

export const deleteUsers = async (req, res) => {
    try {
        await userModel.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Istifadeci silindi!" })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await userModel.find()
        res.status(200).json(users)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

export const updateUsers = async (req, res) => {
    try {
        let updatedData = { ...req.body };
        if (req.body.password) {
            const salt = bcrypt.genSaltSync(10);
            updatedData.password = bcrypt.hashSync(req.body.password, salt);
        }

        const updateUser = await userModel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true, runValidators: true }
        )
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}