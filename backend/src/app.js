const express = require("express")
const authRoutes = require("./routes/auth.route")
const tasksRoutes = require("./routes/tasks.route")
const trackerRoutes = require("./routes/tracker.route")
const graphRoutes = require("./routes/graph.route")
const {authMiddleware} = require("./middleware/auth.middleware")
const app = express()

app.get('/api/health',(req,res)=>{
    res.send('its working kanhaji')
})

app.use('/api/tasks',authMiddleware,tasksRoutes)
app.use('/api/auth',authMiddleware,authRoutes)
app.use('/api/tracker',trackerRoutes)
app.use('/api/graph',authMiddleware,graphRoutes)

module.exports = app