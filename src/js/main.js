function toggleDisplay(elementId, buttonId) {
	var element = document.getElementById(elementId);
	var button = document.getElementById(buttonId);

	if (element.style.display === "none") {
		element.style.display = "block";
		button.innerHTML = "Zwiń";
		button.classList = "btn btn-outline-info my-1";
	} else {
		element.style.display = "none";
		button.innerHTML = "Rozwiń";
		button.classList = "btn btn-info float-end my-1";
	}
}
// slajder
var carousel1 = document.querySelector("#Slajder-Samochody");
var carousel2 = document.querySelector("#text-slider");

carousel1.addEventListener("slide.bs.carousel", function (event) {
	var slideIndex = event.to;
	var activeItem = carousel2.querySelector(".carousel-item.active");
	activeItem.classList.remove("active");
	carousel2
		.querySelectorAll(".carousel-item")
		[slideIndex].classList.add("active");
});

carousel2.addEventListener("slide.bs.carousel", function (event) {
	var slideIndex = event.to;
	var activeItem = carousel1.querySelector(".carousel-item.active");
	activeItem.classList.remove("active");
	carousel1
		.querySelectorAll(".carousel-item")
		[slideIndex].classList.add("active");
});

carousel1
	.querySelector(".carousel-control-prev")
	.addEventListener("click", function () {
		carousel2.querySelector(".carousel-control-prev").click();
	});

carousel1
	.querySelector(".carousel-control-next")
	.addEventListener("click", function () {
		carousel2.querySelector(".carousel-control-next").click();
	});

// koniec slajdera

// modal.js
