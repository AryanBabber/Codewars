function squareSum(numbers) {
	return numbers.map((a) => a ** 2).reduce((a, b) => a + b, 0);
}
