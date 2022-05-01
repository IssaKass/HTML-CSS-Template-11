let body = document.querySelector("body");
let aside = document.querySelector("aside ul");

let menuToggle = document.querySelector(".menu-toggle");
let nav = document.querySelector("nav");

menuToggle.onclick = function () {
	nav.classList.toggle("open-nav");
};

window.onload = function () {
	aside.style.display = "none";
};

let priceRange = document.getElementById("priceRange");
priceRange.onchange = function (event) {
	let range = event.target.value;
	let price = document.querySelector("#priceRange + p");
	price.textContent = range;
};
