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
