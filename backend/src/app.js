const express = require("express")
const authRoutes = require("./routes/auth.route")
const tasksRoutes = require("./routes/tasks.route")
const trackerRoutes = require("./routes/tracker.route")

const app = express()

app.get('/health',(req,res)=>{
    res.send('its working kanhaji')
})

app.use('/api/tasks',tasksRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/tracker',trackerRoutes)

module.exports = app