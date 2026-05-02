const express = require("express")
const app = express()
const tasksRoutes = require("./routes/tasks.route")

app.get('/',(req,res)=>{
    res.send('its working kanhaji')
})

app.use('/api/tasks',tasksRoutes)

module.exports = app