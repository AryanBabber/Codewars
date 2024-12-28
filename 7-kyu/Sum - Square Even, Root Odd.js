const sumSquareEvenRootOdd = (arr) => {
	return parseFloat(
		arr
			.map((v) => (v % 2 == 0 ? v ** 2 : v ** 0.5))
			.reduce((a, b) => a + b, 0)
			.toFixed(2)
	);
};
