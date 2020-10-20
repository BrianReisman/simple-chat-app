//the script is the waiter sending it out and bringing it back to the cook

const socket = io('http://localhost:3000')


const messageContainer = document.getElementById('message-container');
const messageForm = document.getElementById('send-form')
const messageInput = document.getElementById('message-input')

socket.on('chat-message', data =>{
    appendMessage(data)
})

messageForm.addEventListener('submit', e => {
    e.preventDefault() //learn this!<<< prevents refresh
    const message = messageInput.value
    socket.emit('send-chat-message', message)
    messageInput.value = ''
}) //e is standard convention for event or evt or event

function appendMessage(message){
    const messageElement = document.createElement('div')
    messageElement.innerText = message
    messageContainer.append(messageElement)
}