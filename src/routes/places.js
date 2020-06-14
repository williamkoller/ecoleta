const express = require('express')
const router = express.Router()
const PlacesController = require('../controllers/places-controller')

router.post('/save-point', PlacesController.postPlaces)
module.exports = router
