var maFenetre = document.getElementById("maFenetre");
var maBarreDeTitre = document.getElementById("maBarreDeTitre");
var maZoneDeContenu = document.getElementById("maZoneDeContenu");

var isDragging = false;
var offset = { x: 0, y: 0 };

maBarreDeTitre.addEventListener("mousedown", function(e) {
    isDragging = true;
    offset.x = e.clientX - maFenetre.offsetLeft;
    offset.y = e.clientY - maFenetre.offsetTop;
});

document.addEventListener("mousemove", function(e) {
    if (isDragging) {
        maFenetre.style.left = (e.clientX - offset.x) + "px";
        maFenetre.style.top = (e.clientY - offset.y) + "px";
    }
});

document.addEventListener("mouseup", function() {
    isDragging = false;
});

