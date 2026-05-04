const express = require("express")
const app = express()
const authRoutes = require('./routes/auth.route')
const tasksRoutes = require("./routes/tasks.route")

app.get('/',(req,res)=>{
    res.send('its working kanhaji')
})

app.use('/api/tasks',tasksRoutes)
app.use('/api/auth',authRoutes)

module.exports = app