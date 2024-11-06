function alternate(n, firstValue, secondValue) {
	return Array(n)
		.fill(0)
		.map((v, i) => (i % 2 === 1 ? secondValue : firstValue));
}
