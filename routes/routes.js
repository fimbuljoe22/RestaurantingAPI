const express = require('express')
const router = express.Router()
const Model = require('../models/restaurant.model.js')
const createRestaurant = require('../controllers/restaurant.controller')

router.post('/', createRestaurant)

module.exports = router