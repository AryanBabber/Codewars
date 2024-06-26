function solve(arr) {
	return arr.map(
		(v) =>
			v
				.toLowerCase()
				.split("")
				.filter((a, i) => a.charCodeAt(0) - 97 == i).length
	);
}
