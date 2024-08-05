function sendMessage() {
    var message = document.getElementById('chat-message').value;
    if (message.trim() !== "") {
        var chatBox = document.querySelector('.chat-box');
        var newMessage = document.createElement('div');
        newMessage.className = 'message';
        newMessage.textContent = 'You: ' + message;
        chatBox.appendChild(newMessage);
        document.getElementById('chat-message').value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
