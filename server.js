//Express stuff
let express = require('express')

let app = express()
let server = app.listen(80)

app.use(express.static('public'))
//socket stuff
let socket = require('socket.io')

let io = socket(server)

//_________________ACTIUAL CODE_______________
let usersOnline = 0


io.sockets.on('connect', (client) => {
    console.log(client.id + ' connected')

    client.on('mouse', (data) => {
        console.log(data);
        socket.broadcast.emit('mouse', data)
    })
    usersOnline++
    console.log(usersOnline)
})

io.sockets.on('connect', (client) => {

    client.on('disconnect', () => {
        console.log(client.id + ' disconnected')
        usersOnline--
        console.log(usersOnline)
    });
});
