const mongoose = require("mongoose")

function connectToDb(){
    return mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("COnnected to DB")
    })
    .catch((err)=>{
        console.error("failed to connect db")
    })
}

module.exports = connectToDb