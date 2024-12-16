require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const router = require('./route/routes')

//middleware
app.use(cors())
app.use(express.json())
app.use('/vehicle', router)

mongoose.connect(process.env.MONGO_LINK)
    .then(() =>{
            app.listen(process.env.PORT, ()=>{
                console.log("listening a request in port-", process.env.PORT);
            })
        }
    )
    .catch((error) => console.log(error))


