let standard = Number(localStorage.getItem("standard")) || 0;
let pro = Number(localStorage.getItem("pro")) || 0;
let compact = Number(localStorage.getItem("compact")) || 0;

function opdaterKurv() {
  let antal = standard + pro + compact;
  let pris = standard * 249 + pro * 389 + compact * 199;

  document.querySelectorAll("#resultat").forEach(function(element) {
    element.textContent = antal;
  });

  let totalPris = document.getElementById("total-pris");

  if (totalPris) {
    totalPris.textContent = pris + " kr.";
  }

  let standardAntal = document.getElementById("standard-antal");
  let proAntal = document.getElementById("pro-antal");
  let compactAntal = document.getElementById("compact-antal");

  if (standardAntal) {
    standardAntal.textContent = standard;
  }

  if (proAntal) {
    proAntal.textContent = pro;
  }

  if (compactAntal) {
    compactAntal.textContent = compact;
  }
}

function addStandard() {
  standard = standard + 1;
  localStorage.setItem("standard", standard);
  opdaterKurv();
}

function fjernStandard() {
  if (standard > 0) {
    standard = standard - 1;
    localStorage.setItem("standard", standard);
    opdaterKurv();
  }
}

function addPro() {
  pro = pro + 1;
  localStorage.setItem("pro", pro);
  opdaterKurv();
}

function fjernPro() {
  if (pro > 0) {
    pro = pro - 1;
    localStorage.setItem("pro", pro);
    opdaterKurv();
  }
}

function addCompact() {
  compact = compact + 1;
  localStorage.setItem("compact", compact);
  opdaterKurv();
}

function fjernCompact() {
  if (compact > 0) {
    compact = compact - 1;
    localStorage.setItem("compact", compact);
    opdaterKurv();
  }
}



opdaterKurv();


let slides = ["Slide1.jpg", "Slide2.jpg", "Slide3.jpg"];
let slideNumber = 0;

let slideImage = document.getElementById("slide-image");
let nextSlide = document.getElementById("next-slide");
let previousSlide = document.getElementById("previous-slide");

if (slideImage) {
  nextSlide.addEventListener("click", function() {
    slideNumber = slideNumber + 1;

    if (slideNumber === slides.length) {
      slideNumber = 0;
    }

    slideImage.src = slides[slideNumber];
  });

  previousSlide.addEventListener("click", function() {
    slideNumber = slideNumber - 1;

    if (slideNumber < 0) {
      slideNumber = slides.length - 1;
    }

    slideImage.src = slides[slideNumber];
  });
}