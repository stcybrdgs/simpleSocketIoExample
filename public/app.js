const socket = io('ws://localhost:5500')

// Get DOM Objects
const msgInput = document.querySelector('input')
const msgList = document.querySelector('ul')
const submitBtn = document.querySelector('button')

function addMessageToList(text) {
  const el = document.createElement('li')
  el.textContent = text
  msgList.appendChild(el)
}

// Get message from server
socket.on('message', (text) => {
  addMessageToList(text)
})

// Listen for button click
submitBtn.onclick = () => {
  // Send message to server
  socket.emit('message', msgInput.value)
}

