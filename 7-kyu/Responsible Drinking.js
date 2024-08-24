function hydrate(s) {
	let x = s
		.split(" ")
		.filter(Number)
		.map(Number)
		.reduce((a, b) => a + b);
	return `${x} glass${x === 1 ? "" : "es"} of water`;
}
