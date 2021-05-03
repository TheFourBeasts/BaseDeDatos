var socket = require('socket.io')
var channel

function connect (server){
    console.log("socketService")
    channel = socket.listen(server).sockets;
    channel.on('connection', (socket) => {
        console.log("conectado al socket")
        socket.on('disconnect', ()=>{
            console.log('user disconnected');
        });
    });
}

const sendMessage = (tag, message) => {
    channel.emit(tag, message)
}

module.exports = {
    connect,
    sendMessage
}