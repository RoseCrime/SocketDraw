let socket

function setup() {
    createCanvas(600, 800)
    background(170)

    socket = io.connect('http://localhost:80')
    //client side thingy - connection to server
    socket.on('mouse', recievedDraw) 
    //when message comes in with data and msg 'mouse' triggers event
}

function draw() {

}

function mouseDragged() {
    noStroke()
    fill(50, 255, 200)
    ellipse(mouseX, mouseY, 20, 20)
    let data = {
        x: mouseX,
        y: mouseY
    }
    socket.emit('mouse', data)
    //mouse - just a text thingy to undestand what exectly we're sending
    //data - variable , sending to server
    console.log('sending ' + data.x + ' ' + data.y);
}

function recievedDraw(data) {
    noStroke()
    fill(255, 50, 150)
    ellipse(data.x, data.y, 20, 20)
}
