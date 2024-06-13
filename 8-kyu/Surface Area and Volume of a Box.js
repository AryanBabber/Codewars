function getSize(w, h, d) {
	let surfaceArea = 2 * (w * h + h * d + w * d);
	let volume = w * h * d;
	return [surfaceArea, volume];
}
