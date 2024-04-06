function sumArray(array) {
	return !array || array.length <= 2
		? 0
		: array.reduce((a, b) => a + b, 0) -
				Math.min(...array) -
				Math.max(...array);
}
