const express = require('express')
const router = express.Router()
const { taskPointInputController, graphGenerateController}= require("../controllers/graph.controller")


router.post('/taskPoint',taskPointInputController)

router.get('/graphGenerate',graphGenerateController)

module.exports = router