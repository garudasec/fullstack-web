import React, { useEffect } from 'react'
import { io } from "socket.io-client"

const socket = io("http://localhost:3000")

function App() {


  useEffect(() => {
    socket.on("connect", () => {
      console.log(`User Connection: ${socket.id}`)
    })

    socket.on("message", (msg) => {
      console.log(msg)
    })

    socket.emit("message2", "bhai bss thode dino me!!")
  })

  socket.on("SendingToAll", (data)=> {
    console.log(data);
  })



  return (
    <div>App</div>
  )
}

export default App