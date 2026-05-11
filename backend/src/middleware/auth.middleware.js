const jwt = require("jsonwebtoken")

const userModel = require("../models/users.model")

async function authMiddleware(req,res,next) {
    try {
        const token = req.cookies.token;

        if(!token) return res.status(401).json({
            message : "unauthorised access"
        })

        const decoded = await jwt.verify(token,process.env.JWT_SECRET)

        const user = await userModel.findById(decoded.userId)

        if(!user) return res.status(400).json({
            message : "unauthorised access"
        })

        req.user = user

        next()

    } catch (err) {
        return res.status(500).json({
            message : err.message || "Internal server error"
        })
    }
}

module.exports = {authMiddleware}