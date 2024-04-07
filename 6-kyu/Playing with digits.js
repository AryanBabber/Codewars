function digPow(n, p) {
	let res =
		String(n)
			.split("")
			.map((v, i) => (+v) ** (i + p))
			.reduce((a, b) => a + b, 0) / n;

	return res % 1 == 0 ? res : -1;
}