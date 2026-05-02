const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("ye tasks route hai kanhaji")
})


module.exports = router