const Vehicle = require('../model/vehicle')


//getting all the data
const getAllData = async(req, res) =>{
    const vehicles = await Vehicle.find({}).sort({createdAt: -1})

    if(!vehicles){
        res.status(400).json({error: "No vehicle found"})
    }
    res.json(vehicles)
}

//getting single data
const getData = async (req,res) =>{
    const { id } = req.params
    const vehicle = await Vehicle.findById(id)
    
    if(!vehicle){
        res.status(400).json({err: "No vehicle found"})
    }
    res.json(vehicle)

}

//creating a data
const postData = async(req, res) => {
    const {name, status} = req.body
    const vehicle = await Vehicle.create({name,status});
        
    if(!vehicle){
        res.status(400).json({error: "Enter a valid data"})
    }
    res.json(vehicle)
}

//deleting a data

const deleteVehicle = async(req, res) => {
    const { id } = req.params

    const vehicle = await Vehicle.findOneAndDelete({_id: id})
    if(!vehicle){
        res.status(400).json({error: "No vehicle found"})
    }
    res.json(vehicle)
}

//update a vehicle
const updateVehicle = async(req, res) => {
    const { id } = req.params

    const vehicle = await Vehicle.findOneAndUpdate({_id: id}, {...req.body})
    if(!vehicle){
        res.status(400).json({error: "No vehicle found"})
    }
    res.json(vehicle)
}

module.exports = {
    getAllData,
    postData,
    getData,
    deleteVehicle,
    updateVehicle
}