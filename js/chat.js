const input = document.querySelector(".chat .chatchamps");
const messagesDiv = document.querySelector(".chat .message-tout");

console.log(input);
console.log(messagesDiv);

listMessage = [];

function displayMessages() {
    messagesDiv.innerHTML = "";
    listMessage.forEach(message => {
        const messageP = document.createElement("p");
        messageP.textContent = message;
        messagesDiv.appendChild(messageP);
    });
}

function addMessage(message) {
    listMessage.push(message);
    displayMessages();
}

input.addEventListener("keydown", event => {
    if (event.key === "enter") {
        console.log("verververb1");
        addMessage(input.value);
        input.value = "";
    }
    if (event.key === "a") {
        console.log("verververb1");
        addMessage(input.value);
        input.value = "";
    }
});