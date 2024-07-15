// create node http server (may use express instead)
const http = require('http').createServer()
const PORT = 5500

// import socket.io
// pass in http server as an argument
// handle CORS to access BE from FE app,
const io = require('socket.io')(http, {
  cors: { origin: '*' },
})

// listen for event & use callback to access socket obj
io.on('connection', (socket) => {
  const userId = socket.id.substr(0, 2)
  console.log(`a user connected: ${userId}`)

  // get message from client
  socket.on('message', (msg) => {
    console.log(msg)

    // send message to client
    io.emit('message', `${userId} said ${msg}`)
  })
})

// listen for messages on specified port
http.listen(PORT, () => {
  console.log(`listening on localhost: ${PORT}`)
})

