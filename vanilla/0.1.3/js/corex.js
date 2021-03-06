/*!
 * @author      rx1310 <rx1310@inbox.ru>
 * @copyright   Copyright (c) o1310, 2020
 * @license     MIT License
 */
 
var CoreX = {
	ID_BACKDROP : "CoreX_UI_backdrop"
};
 
/* =============
   CoreX JS init */
function init() {

	initBackdrop();
	initNavDrawer();
	
}

/* ==============
   CoreX Backdrop */
function initBackdrop() {

	var a = document.createElement("div");

	a.className = "backdrop";
	a.style.backgroundColor = "rgba(0, 0, 0, 0);";
	a.style.visibility = "hidden";
	a.id = CoreX.ID_BACKDROP;
	a.onclick = function() {
		hideNavDrawer();
	};

	document.body.appendChild(a);

}

function showBackdrop() {
	document.getElementById(CoreX.ID_BACKDROP).style.visibility = "visible";
	document.getElementById(CoreX.ID_BACKDROP).style.backgroundColor = "rgba(0, 0, 0, 0.5)";
}

function hideBackdrop() {
	document.getElementById(CoreX.ID_BACKDROP).style.visibility = "hidden";
	document.getElementById(CoreX.ID_BACKDROP).style.backgroundColor = "rgba(0, 0, 0, 0)";
}

/* ===============
   CoreX NavDrawer */
function initNavDrawer() {

	var a = document.getElementsByClassName("navdrawer")[0];

	if (a !== undefined) {
		a.style.left = "-300px";
	}

}

function showNavDrawer() {
	
	showBackdrop();

	var a = document.getElementsByClassName("navdrawer")[0];

	if (a !== undefined) {
		a.style.left = "0px";
		a.style.visibility = "visible";
	}

}

function hideNavDrawer() {
	
	hideBackdrop();

	var a = document.getElementsByClassName("navdrawer")[0];

	if (a !== undefined) {
		a.style.left = "-300px";
	}

}

window.onload = init;
