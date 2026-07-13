import express from 'express'
import connectDB from './database/mongoDB.js'
import userRouter from './routes/user.route.js'
import noteRouter from './routes/note.route.js'


const app = express();

app.use(express.json());

app.use(userRouter);
app.use(noteRouter);

const port = 4000

connectDB()

app.listen(port, () => {
    console.log(`Server has started on port: ${port}`)
})