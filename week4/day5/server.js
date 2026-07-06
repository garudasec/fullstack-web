import express from 'express';
import connectDB from './database/mongoDB.js';
import router from './routes/route.js';
import cors from 'cors'

const app = express();  // here express() is object

// mounting
// app.use(cors()) // third-party imported middleware
app.use(express.json()) // in-built middleware
app.use(router)

const port = 4000

connectDB()

app.listen(port, ()=> {
    console.log(`Server has started on port: ${port}`)
})