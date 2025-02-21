function sortDict(dict) {
	return Object.entries(dict)
		.map((v) => (String(+v[0]) == "NaN" ? v : [+v[0], v[1]]))
		.sort((a, b) => b[1] - a[1]);
}
