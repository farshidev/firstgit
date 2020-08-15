var homebtn = document.querySelector("#homebtn");
var navbar = document.querySelector(".navbars");
var linka = document.querySelectorAll(".linka");
navbar.style.right = "-100";
homebtn.onclick = function () {
	if (navbar.style.right === "-100%") {
		navbar.style.right = "0";
		homebtn.src = "icons8-x-64.png";
	} else {
		navbar.style.right = "-100%";
		homebtn.src = "icons8-top-menu-48.png";

	}
	
}


for(var i = 0 ; i < linka.length;i++){
	linka[i].addEventListener("click" ,function () {
	if (navbar.style.right === "-100%") {
		navbar.style.right = "0";
		homebtn.src = "icons8-x-64.png";
	} else {
		navbar.style.right = "-100%";
		homebtn.src = "icons8-top-menu-48.png";
}}
	)


}



	var scroll = new SmoothScroll('a[href*="#"]');
