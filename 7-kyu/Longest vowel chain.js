function solve(s) {
	return Math.max(
		...s
			.replace(/[^aeiuo]/gi, " ")
			.split(" ")
			.map((v) => (v = v.length))
	);
}
