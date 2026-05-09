const graphModel = require("../models/graphs.model")

async function taskPointInputController(req,res) {
    try {

        const userId = req.params.id
        const {totalTasks , totalTime , achivedTasks , currentDay} = req.body;

        const graphPoint= await graphModel.create({
            totalTasks,totalTime,achivedTasks,userId , currentDay
        })

        return res.status(200).json({
            message : "graph updated successfully"
        })
    } catch (err) {
        console.error(err)
    }
}

async function graphGenerateController(req,res) {
    try {
        
        const userId = req.params.id;

        const graphTotalPoint = await graphModel.find({userId}).select("- userId,_id ")

        res.status(200).json({
            message : "Total graph point fetch successful",
            graphData : graphTotalPoint 
        })

    } catch (err) {
        console.error(err)
    }
}

module.exports = { taskPointInputController, graphGenerateController}