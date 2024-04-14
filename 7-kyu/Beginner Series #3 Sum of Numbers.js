function getSum(a, b) {
	let max = Math.max(a, b);
	let min = Math.min(a, b);

	return ((max - min + 1) * (max + min)) / 2;
}