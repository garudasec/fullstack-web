import express from 'express'
import { login, signup } from '../controllers/userLogic.js'
import { getuser } from '../controllers/studentLogic.js'
import { auth } from '../middleware/auth.js'

const router = express.Router()


router.post('/signup', signup)
router.post('/login', login)
router.get('/getUser', auth, getuser)



export default router 