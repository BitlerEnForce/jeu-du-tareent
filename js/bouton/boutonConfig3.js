bouton1Con3.addEventListener("click", () => {
    function verification () {
        truc = false;
        if (cartesPrise.length < 4)
        nombreAlea = Math.floor(Math.random() * 4);
        console.log("nombre alea : " + nombreAlea);
        for (var i = 0; i < cartesPrise.length; i++) {
            if (cartesPrise[i] == nombreAlea) {
                console.log("truc est true");
                truc = true;
            }
        }
        if (truc == true) {
            console.log("trouvé");
            truc = false;
            if (cartesPrise.length < 4) {
                verification();
            }
        }
    }
    verification();
    console.log(truc);
    if (truc == false) {
        cartesPrise.push(nombreAlea);
        carte1.style.backgroundImage = "url('" + listeCartes[2][nombreAlea] + "'";
        console.log("lenght de cartes prise : " + cartesPrise.length);
    }
    console.log(cartesPrise);
    bouton1Con3.style.display = "none";
})

//2

bouton2Con3.addEventListener("click", () => {
    function verification () {
        truc = false;
        if (cartesPrise.length < 4)
        nombreAlea = Math.floor(Math.random() * 4);
        console.log("nombre alea : " + nombreAlea);
        for (var i = 0; i < cartesPrise.length; i++) {
            if (cartesPrise[i] == nombreAlea) {
                console.log("truc est true");
                truc = true;
            }
        }
        if (truc == true) {
            console.log("trouvé");
            truc = false;
            if (cartesPrise.length < 4) {
                verification();
            }
        }
    }
    verification();
    console.log(truc);
    if (truc == false) {
        cartesPrise.push(nombreAlea);
        carte2.style.backgroundImage = "url('" + listeCartes[2][nombreAlea] + "'";
        console.log("lenght de cartes prise : " + cartesPrise.length);
    }
    console.log(cartesPrise);
    bouton2Con3.style.display = "none";
})

//3

bouton3Con3.addEventListener("click", () => {
    function verification () {
        truc = false;
        if (cartesPrise.length < 4)
        nombreAlea = Math.floor(Math.random() * 4);
        console.log("nombre alea : " + nombreAlea);
        for (var i = 0; i < cartesPrise.length; i++) {
            if (cartesPrise[i] == nombreAlea) {
                console.log("truc est true");
                truc = true;
            }
        }
        if (truc == true) {
            console.log("trouvé");
            truc = false;
            if (cartesPrise.length < 4) {
                verification();
            }
        }
    }
    verification();
    console.log(truc);
    if (truc == false) {
        cartesPrise.push(nombreAlea);
        carte3.style.backgroundImage = "url('" + listeCartes[2][nombreAlea] + "'";
        console.log("lenght de cartes prise : " + cartesPrise.length);
    }
    console.log(cartesPrise);
    bouton3Con3.style.display = "none";
})