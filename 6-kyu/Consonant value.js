function solve(s) {
	return Math.max(
		...s
			.split(/[aeiou]/gi)
			.filter(String)
			.map((v) =>
				v
					.split("")
					.map((a) => a.charCodeAt() - 96)
					.reduce((a, b) => a + b, 0)
			)
	);
}
