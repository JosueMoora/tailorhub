import { Router } from 'express'
import { addRestaurant, deleteRestaurant, getAllRestaurants, getRestaurant, updateRestaurant } from '../controllers/restaurants.controllers'
const router = Router()

router.get('/', getAllRestaurants)
router.get('/:id', getRestaurant)
router.post('/', addRestaurant)
router.put('/:id', updateRestaurant)
router.delete('/:id', deleteRestaurant)

export default router
