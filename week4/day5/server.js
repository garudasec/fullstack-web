import express from 'express';
import connectDB from './database/mongoDB.js';

const app = express();

const port = 4000

connectDB()


app.listen(port, ()=> {
    console.log(`Server has started on port: ${port}`)
})