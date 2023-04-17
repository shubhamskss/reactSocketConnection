const express=require('express');
const app=express()
const http=require("http")
const {Server}=require("socket.io")
const cors=require("cors")
app.use(cors())
const server=http.createServer(app)
const io=new Server(server,{
    cors:{
        origin:"http://localhost:1234",
        methods:["GET","POST"]
    },

})
io.on("connection",(socket)=>{
    console.log("user clicked on support ")
    socket.on("sendMsg",(data)=>{
        console.log(data)
        socket.emit("receiveMessage",data)
    })
})
server.listen(3001,()=>{
    console.log("server is running")
})