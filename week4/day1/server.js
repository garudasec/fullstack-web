// const http = require('http');

import http from 'http';

const port = 3000
const server=  http.createServer((req,res)=>{
    if(req.url == '/') {
        res.end('<h1>Welcome to the backend server</h1>')
    }
})

server.listen(port, ()=> {
    console.log("server is listen in port: ", port)

})

