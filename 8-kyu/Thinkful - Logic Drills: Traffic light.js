function updateLight(current) {
	let arr = ["green", "yellow", "red"];
	return arr[(arr.indexOf(current) + 1) % 3];
}
