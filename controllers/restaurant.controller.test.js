const RestaurantController = require('../controllers/restaurant.controller')
const RestaurantModel = require('../models/restaurant.model')
const httpMocks = require('node-mocks-http')
//const newRestaurant = require('./mock-data/new-restaurant.json')
//const allRestaurant = require('../mock-data/all-restaurant.json')

RestaurantModel.create = jest.fn();
RestaurantModel.find = jest.fn();
// let req, res, next
// beforeEach(() => {
//     req = httpMocks.createRequest()
//     res = httpMocks.createResponse()
//     next = null
// });

describe('RestaurantController.createRestaurant', () => {
    it('Should have a createRestaurant function', () => {
        expect(typeof RestaurantController.createRestaurant).toBe('function')
    })
    // it('Should call RestaurantModel.create', () => {
    //     let req, res, next
    //     req = httpMocks.createRequest()
    //     res = httpMocks.createResponse()
    //     next = null
    //     RestaurantController.createRestaurant()
    //     expect(RestaurantModel.create).toBeCalledWidth(newRestaurant)
    // });
    // it('Should return 201 response code', () => {
    //     req.body = newRestaurant
    //     RestaurantController.createRestaurant(req, res, next)
    //     expect(res.statusCode).toBe(201)
    //     expect(res._isEndCalled()).toBeTruthy()
    // })
});