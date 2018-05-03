let express = require('express')

let app = express()
let server = app.listen(80)

app.use(express.static('public'))

let socket = require('socket.io')

let io = socket(server)

io.sockets.on('connection', newConnection) //server side connection callback

function newConnection(socket) {
    console.log('new connection' + socket.id)

    socket.on('mouse', mouseMsg)

    function mouseMsg(data) {
        console.log(data)
        socket.broadcast.emit('mouse', data)
        //sending to everybody exept THIS client

        //io.sockets.emit - sends to ALL clients
    }

}
