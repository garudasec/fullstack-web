import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';

const app = express(); // here app is express application object
const PORT = 3000

const server = createServer(app); // matlab http ka server create kar rhe ho, on the top of express application


// socket-io server
const io = new Server(server, {
    cors:{
        origin:"http://localhost:5173"
    }
})


io.on("connection", (socket) => {
    console.log("User Connection", socket.id)

    // socket.emit("message","aur bhai kab bnega hacker??")
    
    // socket.on("message2", (msg) => {
        // console.log(msg);
    // })

    io.emit("SendingToAll", "Hello for all")
})




server.listen(PORT, () => {
    console.log(`App is running on port : ${PORT}`)
})