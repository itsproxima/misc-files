 // Just resizing the stage
window.onresize = function setSize() {
	stage.style.transform = "scale(" + .9 / 1920 * window.innerWidth + ")";
	return setSize;
}();