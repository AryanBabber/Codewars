function arithmeticSequenceElements(a, d, n) {
	let arr = [];

	for (let i = 0; i < n; i++) {
		arr.push(a + i * d);
	}

	return arr.join(", ");
}
