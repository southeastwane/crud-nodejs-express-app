const express = require('express')
const router = express.Router()
const { getAllCuisines, getSingleCuisine, createCuisine, updateCuisine, deleteCuisine, getRestaurants } = require('../controller/food.controller')

// 5 endpoints for CRUD operations
router.get('/', getAllCuisines)
router.get('/:id', getSingleCuisine)
router.post('/', createCuisine)
router.put('/:id', updateCuisine)
router.delete('/:id', deleteCuisine)


module.exports = router