function positiveSum(arr) {
	return arr.filter((a) => a > 0).reduce((a, b) => a + b, 0);
}
