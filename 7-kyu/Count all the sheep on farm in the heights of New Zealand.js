function lostSheep(friday, saturday, total) {
	let arr = [...friday, ...saturday];

	return total - arr.reduce((a, b) => a + b, 0);
}
