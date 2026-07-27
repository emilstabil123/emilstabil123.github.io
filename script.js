let kurv = Number(localStorage.getItem("kurv")) || 0;

document.getElementById("resultat").textContent = kurv;

function addkurv() {
    kurv = kurv + 1;
    localStorage.setItem("kurv", kurv);
    document.getElementById("resultat").textContent = kurv;
}

function fjernkurv() {
    if (kurv > 0) {
        kurv = kurv - 1;
        localStorage.setItem("kurv", kurv);
        document.getElementById("resultat").textContent = kurv;
    }
}

let tilføjKnap = document.getElementById("knap");
let fjernKnap = document.getElementById("fjernKnap");

if (tilføjKnap) {
    tilføjKnap.addEventListener("click", addkurv);
}

if (fjernKnap) {
    fjernKnap.addEventListener("click", fjernkurv);
}