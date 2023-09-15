import { Router } from 'express'
import { authenticateUser, registerUser, favorite, logout } from '../controllers/users.controllers'
import { TokentValidation } from '../helpers/verifyToken'
const router = Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/login', authenticateUser)
router.post('/sign-up', registerUser)
router.get('/log-out', logout)
router.get('/favorite', TokentValidation, favorite)

export default router
