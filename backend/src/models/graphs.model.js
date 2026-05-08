const mongoose = require("mongoose")

const graphSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users',
        required : true
    },
    totalTasks :{
        type : Number,
        required : true
    },
    totalTime : {
        required:true,
        type:Number
    },
    achivedTasks :{
        required : true,
        type : Number
    }
})


const graphModel = mongoose.model("graphs",graphSchema)

module.exports = graphModel;