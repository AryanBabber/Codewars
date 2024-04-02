function arr2bin(arr) {
	// show me the code
	return arr
		.filter((v) => typeof v == "number")
		.reduce((a, b) => a + b, 0)
		.toString(2);
}
