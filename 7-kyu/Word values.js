function wordValue(arr) {
	return arr.map(
		(str, idx) =>
			str
				.split("")
				.reduce((a, b) => a + (b != " " && b.charCodeAt(0) - 96), 0) *
			(idx + 1)
	);
}
