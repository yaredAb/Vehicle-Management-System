const mongoose = require('mongoose')

const Schema = mongoose.Schema

const vehicleSchema = Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
}, {timestamps:true})

module.exports = mongoose.model('Vehicle',vehicleSchema)