function sumTwoSmallestNumbers(numbers) {
	return numbers
		.filter((v) => v >= 0)
		.sort((a, b) => a - b)
		.splice(0, 2)
		.reduce((a, b) => a + b, 0);
}
