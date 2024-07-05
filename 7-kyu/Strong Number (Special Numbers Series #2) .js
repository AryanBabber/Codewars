function strong(n) {
	const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
	return String(n)
		.split("")
		.map((n) => factorial(+n))
		.reduce((a, b) => a + b, 0) == n
		? "STRONG!!!!"
		: "Not Strong !!";
}
