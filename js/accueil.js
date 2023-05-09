const popup = document.querySelector(".popup");
const fermer = document.querySelector(".popup .quitter");
const assistant = document.querySelector("#maFenetre");
const message = document.querySelector("#maFenetre .message p");
const img = document.querySelector("#maFenetre .img");
const dacc = document.querySelector("#maFenetre button");
const logo = document.querySelector(".logo");

messageNbr = 0;

assistant.style.display = "none";

fermer.addEventListener("click", () => {
    popup.style.animation = "partir 1s ease forwards";
    assistant.style.animation = "arrive 1s ease forwards";
    assistant.style.display = "block";
    setTimeout(function() {
        popup.style.display = "none";
    }, 1000);
    message.textContent = "Salut khey je suis la. Je peux changer de visage, regarde..."
})


dacc.addEventListener("click", () => {
    if (messageNbr == 0) {
        messageNbr = messageNbr + 1;
        message.textContent = "Là je suis Ronalgros"
        img.style.backgroundImage = "url('../ressource/ronaldo.png'";
    }
    else if (messageNbr == 1) {
        messageNbr = messageNbr + 1;
        message.textContent = "Là je suis Larry."
        img.style.backgroundImage = "url('../ressource/larry.png'";
    }
    else if (messageNbr == 2) {
        message.textContent = "Allez, tu peux commencer à jouer."
        img.style.backgroundImage = "url('../ressource/chinois.png'";
    }
})