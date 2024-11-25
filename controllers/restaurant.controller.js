const RestaurantController = require('../controllers/restaurant.controller')
const RestaurantModel = require('../models/restaurant.model')

exports.createRestaurant = async (req, res, next) => {
    const newRestaurant = new Model(req.body)
    try {
        const data = await newRestaurant.save()
        res.status(201).json(data)
    }
    catch (error) {
        res.status(400).json({message: error.message})    
    }
}

const httpMocks = require('node-mocks-http')
const newRestaurant = require('./mock-data/new-restaurant.json')
const allRestaurant = require('./mock-data/all-restaurant.json')