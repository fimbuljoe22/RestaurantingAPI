const RestaurantController = require('../controllers/restaurant.controller')
const RestaurantModel = require('../models/restaurant.model')
const httpMocks = require('node-mocks-http')
const newRestaurant = require('./mock-data/new-restaurant.json')
const allRestaurant = require('../mock-data/all-restaurant.json')

RestaurantModel.create = jest.fn();
RestaurantModel.find = jest.fn();
let req, res, next
beforeEach(() => {
    req = httpMocks.createRequest()
    res = httpMocks.createResponse()
    next = null
});

describe('RestaurantController.createRestaurant', () => {
    it('Léteznie kéne egy createRestaurant function-nek.', () => {
        expect(typeof RestaurantController.createRestaurant).toBe('function')
    })
    it('RestaurantModel.create-et meg kéne hívnia.', () => {
        let req, res, next
        req = httpMocks.createRequest()
        res = httpMocks.createResponse()
        next = null
        RestaurantController.createRestaurant()
        expect(RestaurantModel.create).toBeCalledWidth(newRestaurant)
    });
    // it('Vissza kell térnie a 201-es response kódnak!', () => {
    //     req.body = newRestaurant
    //     RestaurantController.createRestaurant(req, res, next)
    //     expect(res.statusCode).toBe(201)
    //     expect(res._isEndCalled()).toBeTruthy()
    // })
    // it('A 400-as kódnak vissza kell térnie.', () => {
    //     
    //
    // })
});

// describe("RestaurantController.GetRestaurants", () => {

// });