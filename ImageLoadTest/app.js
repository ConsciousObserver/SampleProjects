$(function () {
	var startTime = new Date().getTime();
	$("#myImg").on("load", function () {
		console.log("image loaded : " + (new Date().getTime() - startTime) / 1000.0 + " seconds");
	}).on("error", function () {
		console.log("could not load image");
	}).attr("src", "luffy.jpeg");
});