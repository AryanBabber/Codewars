function narcissistic(value) {
	return (
		value
			.toString()
			.split("")
			.map((v, i, arr) => Math.pow(arr[i], arr.length))
			.reduce((a, b) => a + b, 0) === value
	);
}
