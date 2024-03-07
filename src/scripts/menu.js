const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
	menu.classList.toggle("active");
	document.querySelector(".menu-links").classList.toggle("show");
});
