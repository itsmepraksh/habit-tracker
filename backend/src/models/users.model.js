const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    userName : {
        type : String,
        required : true,
        minlength : 3,
        unique : true
    },
    fullName : {
        type : String,
        required : true,
        minlength : 6
    },
    email : {
        type : String,
        required : true,
        minlength : 13,
        unique : true
    },
    gender : {
        type : String,
        required : true,
        enum : ['male', 'female','others']
    },
    mobileNo : {
        type : Number,
        required : true,
        minlength : 10
    },
    password : {
        type : String,
        required : true,
        minlength : 8,
    }
})

const userModel = mongoose.model('users',userSchema)

module.exports = userModel;