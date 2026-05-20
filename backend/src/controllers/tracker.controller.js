const trackerModel = require('../models/tracker.model')
const userModel = require('../models/users.model')

async function createTracker(req,res){
    try {
        const userId = req.cookies.userId
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

        return res.status(201).json({
            message : "tracker created successfully"
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

async function getAllTracker(req,res) {
    try {
        const fetchAllTracker = await trackerModel.findAll();

        if(!fetchAllTracker || fetchAllTracker.length==0) return res.status(404).json({
            message : "tracker not found"
        })

        return res.status(200).json({
            message : "tracker fetch successfully",
            data : fetchAllTracker
        })

    } catch (err) {
        return res.status(500).json({
            message : err.message || "Internal Server Error"
        })
    }
}

module.exports = { createTracker ,editTracker ,deleteTracker ,getAllTracker }