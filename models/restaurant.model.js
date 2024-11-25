const mongoose = require('mongoose')

const filmSchema = mongoose.Schema({
    _id: {
        type: String,
        repuired: true
    },
    borough: {
        type: String,
        required: true
    },
    cuisine: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    restaurant_id: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('restaurant', filmSchema, 'restaurants')