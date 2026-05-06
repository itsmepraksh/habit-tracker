const trackerModel = require('../models/tracker.model')
const userModel = require('../models/users.model')

async function createTracker(req,res){
    try {
        const userId = req.params.id;
        const {trackerName , trackerType , trackerLimit} = req.body;

        const isExist = await trackerModel.find({trackerName : trackerName})

        if(!isExist || isExist.length !== 0) return res.status(401).json({
            message : "Tracker Name exists!"
        })

        const createTracker = await trackerModel.create({
            trackerName ,
            trackerType,
            trackerLimit,
            userId
        })

    } catch (err) {
        console.error(err)
    }
}

//pending
async function editTracker( req,res) {
    try {
        const userId = req.params.id;

        const {trackerName , trackerType , trackerLimit} = req.body;

        const editTracker = await trackerModel.up
    } catch (err) {
        console.error(err)
    }
}

//pending
async function deleteTracker(req,res) {
    try {
        
    } catch (err) {
        console.error(err)
    }
}

module.exports = { createTracker ,editTracker ,deleteTracker}