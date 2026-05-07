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

async function editTracker(req,res) {
    try {
        const trackerId = req.params.id;

        const {trackerName , trackerType , trackerLimit} = req.body;

        const editTracker = await trackerModel.findByIdAndUpdate(trackerId,
            {
                trackerName , trackerLimit , trackerType
            }
        )

        return res.status(200).json({
            message : "tracker edited successfully"
        })
    } catch (err) {
        console.error(err)
    }
}

async function deleteTracker(req,res) {
    try {
        const trackerId = req.params.id;

        const deleteTracker = await trackerModel.findByIdAndDelete(trackerId)

        return res.status(200).json({
            message : "tracker deleted successfully"
        })
    } catch (err) {
        console.error(err)
    }
}

module.exports = { createTracker ,editTracker ,deleteTracker}