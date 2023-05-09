bouton1Con5.addEventListener("click", () => {
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
        carte1Conf5.style.backgroundImage = "url('" + listeCartes[2][nombreAlea] + "'";
        console.log("lenght de cartes prise : " + cartesPrise.length);
    }
    console.log(cartesPrise);
    bouton1Con5.style.display = "none";
})

//2

bouton2Con5.addEventListener("click", () => {
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
        carte2Conf5.style.backgroundImage = "url('" + listeCartes[2][nombreAlea] + "'";
        console.log("lenght de cartes prise : " + cartesPrise.length);
    }
    console.log(cartesPrise);
    bouton2Con5.style.display = "none";
})

//3

bouton3Con5.addEventListener("click", () => {
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
        carte3Conf5.style.backgroundImage = "url('" + listeCartes[2][nombreAlea] + "'";
        console.log("lenght de cartes prise : " + cartesPrise.length);
    }
    console.log(cartesPrise);
    bouton3Con5.style.display = "none";
})

bouton4Con5.addEventListener("click", () => {
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
        carte4Conf5.style.backgroundImage = "url('" + listeCartes[2][nombreAlea] + "'";
        console.log("lenght de cartes prise : " + cartesPrise.length);
    }
    console.log(cartesPrise);
    bouton4Con5.style.display = "none";
})

bouton5Con5.addEventListener("click", () => {
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
        carte5Conf5.style.backgroundImage = "url('" + listeCartes[2][nombreAlea] + "'";
        console.log("lenght de cartes prise : " + cartesPrise.length);
    }
    console.log(cartesPrise);
    bouton5Con5.style.display = "none";
})