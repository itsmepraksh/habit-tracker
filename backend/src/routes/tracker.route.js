const express = require('express')
const router = express.Router()

const {createTracker , editTracker , deleteTracker} = require('../controllers/tracker.controller')

router.post('/create/:id',createTracker)

router.patch('/edit/:id',editTracker)

router.delete('/delete/:id',deleteTracker)

module.exports = router