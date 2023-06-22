//LOADING SCREEN ANIMATION
const loaderContainer = document.querySelector("#loading-screen");
window.addEventListener("load", () => {
	loaderContainer.style.display = "none";
});

var loadingDots = "";
var loadTDCXII = document.getElementsByClassName("loader-TDCXII-loading")[0];
function loadingPage() {
	loadTDCXII.innerHTML = "Loading" + loadingDots;
	loadingDots += ".";
	if (loadingDots.length > 3) {
		loadingDots = "";
	}
}

setInterval(loadingPage, 650);

// ON SCROLL ANIMATION
window.addEventListener("scroll", function () {
	var elements = document.querySelectorAll(".js-show-on-scroll");

	elements.forEach(function (element) {
		var positionFromTop = element.getBoundingClientRect().top;
		var windowHeight = window.innerHeight;

		if (positionFromTop - windowHeight + 200 <= 0) {
			element.classList.add("onScroll-fade-in-visible");
		} else {
			element.classList.remove("onScroll-fade-in-visible");
		}
	});
});

// let bgSlide = [
// 	"/src/img/AwardingTDC_2022.JPG",
// 	"/src/img/FotoBersama-TDC2022.JPG",
// ];
// let archieveTDC = document.querySelector(".slide-TDC");
// let count = 0;

// function changeBg() {
// 	if (count >= bgSlide.length) {
// 		count = 0;
// 	}
// 	let slideBackground = bgSlide[count];
// 	archieveTDC.style.backgroundImage = `url(${slideBackground})`;
// 	count++;
// }

// setInterval(changeBg, 1500);
