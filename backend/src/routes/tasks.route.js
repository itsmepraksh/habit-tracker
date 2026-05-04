const express = require('express')
const router = express.Router()
const {addTaskController , editTaskController , deleteTaskController} = require('../controllers/tasks.controller')

router.get("/",(req,res)=>{
    res.send("ye tasks route hai kanhaji")
})

router.post("/add-task",addTaskController)

router.patch('/edit-task',editTaskController)

router.delete('/delete-task',deleteTaskController)

module.exports = router