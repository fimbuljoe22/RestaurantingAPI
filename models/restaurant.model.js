const mongoose = require('mongoose')

const filmSchema = mongoose.Schema({
    building: {
        type: String,
        required: true
    },
    coord: {
        type: Number,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    borough: {
        type: String,
        required: true
    },
    grade: {
        type: String,
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