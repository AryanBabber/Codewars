function disariumNumber(n) {
	return String(n)
		.split("")
		.map((v, i) => (+v) ** (i + 1))
		.reduce((a, b) => a + b) === n
		? "Disarium !!"
		: "Not !!";
}
