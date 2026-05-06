const mongoose = require('mongoose')


const trackerSchema = mongoose.Schema({
    trackerName : {
        type : String,
        required : true,
        minLength : 3
    },
    trackerType : {
        type : String , 
        required : true,
        enum : ['professional','educational','personal']
    },
    trackerLimit : {
        type : Number,
        required : true
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users',
        required : false
    }
})

const trackerModel = mongoose.model("trackers",trackerSchema)

module.exports = trackerModel;