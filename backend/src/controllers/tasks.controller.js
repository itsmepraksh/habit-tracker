
const taskModel = require('../models/tasks.model')

async function addTaskController(req,res){

    try {
        const { taskName , taskLvl , status } = req.body;

        const taks = await taskModel.findOne(taskName)

        if(!taks) return res.status(403).json({
            message : "tasks already exist"
        })

        const createdTaks = await taskModel.create({
            taskName,
            taskLvl,
            status
        })

        return res.status(201).json({
            message : "tasks created sucessfully"
        })

    } catch (err) {
        console.error(err)
    }
}

async function editTaskController(req,res){

    try {
        const taskId = req.params.id;

        const {taskName , taskLvl , status} = req.body;

        const taks = await taskModel.findByIdAndUpdate(taskId,{
            taskName , 
            taskLvl,
            status
        })

        if(!taks) return res.status(404).json({
            message : "tasks not found"
        })

        return res.status(203).json({
            message : "tasks updated successfully"
        })

    } catch (err) {
        console.error(err)
    }
}

async function deleteTaskController(req,res) {
    try {
        const taskId = req.params.id;

        const taks = await taskModel.findByIdAndDelete(taskId)

        return res.status(200).json({
            message : "tasks deleted successfully"
        })
    } catch (err) {
        console.error(err)
    }
}


module.exports = { addTaskController, editTaskController , deleteTaskController}