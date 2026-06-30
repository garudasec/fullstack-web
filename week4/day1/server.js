// const http = require('http');

// http ko import kra hai node se!!
//yaha http module hai jo server ko help karne me help kar rha hai


import http from 'http';

const port = 3000;

const server = http.createServer((req,res)=>{
    if(req.url == '/') {
        res.end('<h1>Welcome to the backend server</h1>')
    }
    else if (req.url === '/about') {
        res.end('<h1>This is about page!</h1>')
    }
    else if (req.url === '/contact') {
        res.end('<h1>This is contact page!</h1>')
    }
    else if (req.url === '/home') {
        res.end('<h1>This is HOme page!</h1>')
    }

    else {
        res.end('<h1>404 Not Found</h1>')
    }
})

server.listen(port, ()=> {
    console.log("Server is listen in port: ", port)
})