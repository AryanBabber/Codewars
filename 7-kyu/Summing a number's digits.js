function sumDigits(number) {
	return String(Math.abs(number))
		.split("")
		.map((a) => +a)
		.reduce((a, b) => a + b, 0);
}
