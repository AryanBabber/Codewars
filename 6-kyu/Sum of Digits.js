function digitalRoot(n) {
	if (n < 10) return n;
	return digitalRoot(
		String(n)
			.split("")
			.reduce((a, b) => +a + +b)
	);
}
