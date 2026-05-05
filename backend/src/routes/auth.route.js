const express = require('express')
const router = express.Router()
const {registerController , loginController , logoutController} =require('../controllers/auth.controller')


router.get('/',(req,res)=>{
   res.send('its working kanhaji and its auth route')
})

router.post('/register',registerController)

router.post('/login',loginController)

router.post('/logout',logoutController)


module.exports = router