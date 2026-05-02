const app = require("./src/app")
require('dotenv').config()


app.listen(process.env.PORT, ()=>{
    console.log("server is running on Port : ",process.env.PORT)
})