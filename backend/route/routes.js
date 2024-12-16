const express = require('express')
const Vehicle = require('../model/vehicle');
const { postData, getAllData, getData, deleteVehicle, updateVehicle } = require('../controller/vehicleController');
const router = express.Router();


router.get('/', getAllData)

router.get('/:id', getData)

router.post('/', postData)

router.patch('/:id', updateVehicle)

router.delete('/:id', deleteVehicle)

module.exports = router