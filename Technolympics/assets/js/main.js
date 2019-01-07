
// CACHE VARIABLES
var mobileNav = document.getElementById("navMobile");
var backArrow = document.getElementById("backArrow");
var sectionHome = document.getElementById("section-home");


// ADD EVENTLISTENER ==========================
// When Mobile Nav click, SidebarNav show
mobileNav.addEventListener("click", function(){
	document.getElementById("sidebarNav").style.width = "280px";
})

backArrow.addEventListener("click", function(){
	document.getElementById("sidebarNav").style.width = "0";
})


// When window scroll parallax section-home
window.addEventListener("scroll", function(){
	var offsetY = window.pageYOffset;

	sectionHome.style.backgroundPositionY = offsetY * 0.7 + "px";
})
