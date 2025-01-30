function processData(data) {
	return data
		.map((a) => a.reduce((aa, b) => aa - b), 0)
		.reduce((a, b) => a * b, 1);
}
