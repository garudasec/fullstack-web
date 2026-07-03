// will build API here and do connection here!

import express from 'express'; // api create karne ke liye
import { createUser } from '../controller/userLogic.js';

const router = express.Router()

router.post('/createUser', createUser)

export default router