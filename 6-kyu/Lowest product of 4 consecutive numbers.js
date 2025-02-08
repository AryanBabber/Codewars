function lowestProduct(input) {
	let arr = [];
	if (input.length < 4) return "Number is too small";
	for (let x = 0; x < input.length - 3; x++) {
		arr.push(
			input
				.slice(x, x + 4)
				.split("")
				.map((a) => +a)
				.reduce((a, b) => a * b, 1)
		);
	}
	return Math.min(...arr);
}
