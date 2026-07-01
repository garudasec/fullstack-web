// jo logic likha tha controller me, yaha usko endpoint de rahe hai

import express from 'express';
import {getUser} from '../controller/userLogic.js'

const route = express.Router() //default function to create route and yaha express ek object hai!

route.get('/getUser', getUser)


// ab isko export karenge, taki server se connection bana sake
export default route