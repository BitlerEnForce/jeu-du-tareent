listeCartes = [
    [1, 2, 3, 4],
    ["fdv", "larry", "benzemonstre", "fric"],
    ["../ressource/risitas.png", "../ressource/bitler.png", "../ressource/main.png", "https://jvflux.fr/images/8/87/larryr.png"]
];

cartesPrise = [];

config5.style.display = "none";
config7.style.display = "none";
config3.style.display = "flex";

function getSelectedValue() {
    var select = document.getElementById("select_option");
    var selectedValue = select.options[select.selectedIndex].value;
    console.log("La valeur sélectionnée est : " + selectedValue);
    if (selectedValue == "rien") {
        config5.style.display = "none";
        config7.style.display = "none";
        config3.style.display = "none";
    }
    if (selectedValue == "tirage3") {
        config5.style.display = "none";
        config7.style.display = "none";
        config3.style.display = "flex";
        config3.style.animation = "apparitionConfig 1s ease forwards";
    }
    if (selectedValue == "tirage5") {
        config3.style.display = "none";
        config7.style.display = "none";
        config5.style.display = "flex";
        config5.style.animation = "apparitionConfig 1s ease forwards";
    }
    if (selectedValue == "tirage7") {
        config5.style.display = "none";
        config3.style.display = "none";
        config7.style.display = "flex";
        config7.style.animation = "apparitionConfig 1s ease forwards";
    }
}

// ASSISTANT

const assistant = document.querySelector("#maFenetre");
const message = document.querySelector("#maFenetre .message p");
const img = document.querySelector("#maFenetre .img");
const dacc = document.querySelector("#maFenetre button");

messageNbr = 0;

message.textContent = "Avant toutes chose, tu dois choisir une configuration de tirage.";

dacc.addEventListener("click", () => {
    if (messageNbr == 0) {
        messageNbr = messageNbr + 1;
        message.textContent = 'Ensuite, avant de cliquer sur "trouver une carte", prends le temps de lire les phrases en haut des cartes.';
        img.style.backgroundImage = "url('../ressource/soral.png'";
    }
    else if (messageNbr == 1) {
        messageNbr = messageNbr + 1;
        message.textContent = "Une fois ça fait, choisit un sujet dans ta tête que tu voudrais traiter grâce au jeu du taréent.";
        img.style.backgroundImage = "url('../ressource/bench.png'";
    }
    else if (messageNbr == 2) {
        messageNbr = messageNbr + 1;
        message.textContent = 'Quand tu as choisit ton sujet, tu peux clicker sur "trouver une carte".';
        img.style.backgroundImage = "url('../ressource/tare.jpeg'";
    }
    else if (messageNbr == 3) {
        messageNbr = messageNbr + 1;
        message.textContent = 'Pas prêt pour le résultat.';
        img.style.backgroundImage = "url('../ressource/pret.png'";
    }
    else if (messageNbr == 4) {
        messageNbr = messageNbr + 1;
        message.textContent = '...';
        img.style.backgroundImage = "url('../ressource/zemmour.png'";
    }
    else if (messageNbr == 5) {
        messageNbr = messageNbr + 1;
        message.textContent = 'trapvador est un sale trap puant de merde. Il pullule sur Onche.org, si jamais tu le croise au détour de quelques topics, brise le au nom de Bitler.';
        img.style.backgroundImage = "url('../ressource/bitler.png'";
    }
})

const audioContext = new AudioContext();
const soundUrl = '../ressource/musique fond.mp3';

let source;
let isPlaying = false;
let currentTime = 0;

function playLoop() {
  fetch(soundUrl)
    .then(response => response.arrayBuffer())
    .then(buffer => audioContext.decodeAudioData(buffer))
    .then(decodedData => {
      source = audioContext.createBufferSource();
      source.buffer = decodedData;
      source.connect(audioContext.destination);
      source.loop = true;
      source.start(0, currentTime % decodedData.duration);
      isPlaying = true;
    });
}

function pauseLoop() {
  if (isPlaying) {
    source.stop();
    currentTime += audioContext.currentTime;
    isPlaying = false;
  }
}

function resumeLoop() {
  if (!isPlaying) {
    playLoop();
  }
}

playLoop();

const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');

playButton.addEventListener('click', () => {
  resumeLoop();
});

pauseButton.addEventListener('click', () => {
  pauseLoop();
});
