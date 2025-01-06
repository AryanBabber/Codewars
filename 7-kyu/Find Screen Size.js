function findScreenHeight(width, ratio) {
	let [w, h] = ratio.split(":").map((v) => parseInt(v));
	return width + "x" + (width * h) / w;
}
