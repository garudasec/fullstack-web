import express from 'express';

const app = express();
const port = 4000;

app.get('/', (req,res)=> {
    res.send("<h1>Welcome to the Backend!!</h1>")
})
app.get('/about', (req,res)=> {
    res.send("<h1>About Page</h1>")
})
app.get('/contact', (req,res)=> {
    res.send("<h1>Contact Page</h1>")
})
app.get('/page/job', (req,res)=> {
    res.send("<h1>Job Page</h1>")
})
app.get('/page/contact', (req,res)=> {
    res.send("<h1>Contact Page</h1>")
})


app.listen(port, ()=> {
    console.log('server is running in port: ', port)
})