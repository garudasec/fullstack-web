import express from 'express';
import connectDB from './database/mongoDB.js';
import router from './routes/route.js';
import cors from 'cors'


const app = express();

app.use(cors())
app.use(express.json())
app.use(router)

const port = 4000

connectDB()

app.listen(port, ()=> {
    console.log(`Server has started on port: ${port}`)
})