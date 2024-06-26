function wave(str) {
	return Array(str.length)
		.fill(str)
		.map(
			(v, i, arr) =>
				v.slice(0, i).toLowerCase() +
				v.slice(i, i + 1).toUpperCase() +
				v.slice(i + 1).toLowerCase()
		)
		.filter((v) => v != v.toLowerCase());
}
