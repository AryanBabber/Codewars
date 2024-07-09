function menFromBoys(arr) {
	return [
		...new Set(
			arr
				.filter((v) => v % 2 === 0)
				.sort((a, b) => a - b)
				.concat(arr.filter((v) => v % 2 !== 0).sort((a, b) => b - a))
		),
	];
}
