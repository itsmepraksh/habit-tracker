const mongoose = require("mongoose")


const taskSchema = mongoose.Schema({
    taskLvl : {
        type : String,
        enum : ["easy","medium","high"],
        required : true
    },
    taskName : {
        type : String,
        required : true
    },
    status : {
        type : Number,
        enum : [0,1],
        required : true
    }
})

const taskModel = mongoose.model("tasks",taskSchema)

module.exports = taskModel