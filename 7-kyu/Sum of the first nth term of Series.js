function SeriesSum(n) {
	// Happy Coding ^_^
	let sum = 0;
	for (let i = 0; i < n; i++) {
		sum += 1 / (3 * i + 1);
	}

	return sum.toFixed(2);
}
