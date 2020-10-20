//server is the cook behind the wall

const io = require('socket.io')(3000)

io.on('connection', socket =>{
    console.log('new user');
    socket.on('send-chat-message', message =>{
        socket.broadcast.emit('chat-message', message)
        console.log('server', message); //
    })
})