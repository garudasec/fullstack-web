// const http = require('http');

// http ko import kra hai node se!!
//yaha http module hai jo server ko help karne me help kar rha hai
import http from 'http';

// yaha khudse port create kara hai
const port = 3000

const server=  http.createServer((req,res)=>{
    if(req.url == '/') {
        res.end('<h1>Welcome to the backend server</h1>')
    }
})

server.listen(port, ()=> {
    console.log("server is listen in port: ", port)

})
