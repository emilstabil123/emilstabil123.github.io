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

let addButtons = document.querySelectorAll(".add-button");
let removeButtons = document.querySelectorAll(".remove-button");

addButtons.forEach(function(button) {
  button.addEventListener("click", addkurv);
});

removeButtons.forEach(function(button) {
  button.addEventListener("click", fjernkurv);
});