// import mongoose from "mongoose";
// import bcrypt from 'bcryptjs'

// const userSchema = mongoose.Schema({
//     name:{type:String, required:true},
//     email:{type:String, required:true, unique:true},
//     password:{type:String, required:true}
// },{timestamps:true})

// userSchema.pre('save', async function (next){
//     const salt = await bcrypt.genSalt(12)
//     this.password = await bcrypt.hash(this.password, salt)
//     next()
// })

// userSchema.methods.passwordControl = async function(password) {
//     return await bcrypt.compare(password, this.password) 
// }

// const userModel = mongoose.model("users", userSchema)

// export default userModel



import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name:{type:String, required:true, unique:true},
    surname:{type:String, required:true, unique:true},
    username:{type:String, required:true, unique:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    isAdmin:{type:Boolean, default:false}
}, {timestamps:true})



export default mongoose.model("User", UserSchema)