function product(string) {
	const o = { e: 0, q: 0 };
	string
		.split("")
		.forEach((c) => (c === "!" ? o.e++ : c === "?" ? o.q++ : null));

	return Object.values(o).reduce((a, b) => a * b);
}
