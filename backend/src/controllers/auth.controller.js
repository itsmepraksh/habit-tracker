const userModel = require('../models/users.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

async function registerController(req,res){
    try {

        const {email , fullName , userName , mobileNo , gender} = req.body;

        const isUserExist = await userModel.findOne({email})

        if(isUserExist) return res.status(401).json({
            message : "email is already exists"
        })

        const newUser = await userModel.create({
            fullName , email , userName , mobileNo , gender
        })

        return res.status(201).json({
            message : "user created successfully"
        })

    } catch (err) {
        return res.status(500).json({
            message : err.message || "Internal server error"
        })
    }
}

async function loginController(req,res) {
    try {
        const {email , password} = req.body
        
        const isUserExist = await userModel.findOne({email})

        if(!isUserExist) return res.status(404).json(
            {message : "user not found"}
        )

        const isValidPassword = await bcrypt.compare(password,isUserExist.password)

        if(!isValidPassword) return res.status(401).json({
            message : "email OR password got wrong"
        })

        const token = jwt.sign({userId : isUserExist._id},process.env.JWT_SECRET)

        res.setCookie("token",token)

        return res.status(200).json({
            message : "user loggedIn successfully"
        })

    } catch (err) {
        return res.status(500).json({
            message : err.message || "Internal server error"
        })
    }
}

async function logoutController(req,res){
    try {
        res.clearCookie("token").status(200).json({
            message : 'Logout successfully'
        })
    } catch (err) {
        return res.status(500).json({
            message : err.message || "Internal server error"
        })
    }
}



module.exports = { registerController , loginController , logoutController }