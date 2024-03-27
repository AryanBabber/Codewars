function squareDigits(num) {
	return +String(num)
		.split("")
		.map((a) => a ** 2)
		.join("");
}
