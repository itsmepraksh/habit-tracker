const express = require('express')
const router = express.Router()

const {createTracker , editTracker , deleteTracker , getAllTracker} = require('../controllers/tracker.controller')

router.get('/allTracker',getAllTracker)

router.post('/create',createTracker)

router.patch('/edit/:id',editTracker)

router.delete('/delete/:id',deleteTracker)

module.exports = router