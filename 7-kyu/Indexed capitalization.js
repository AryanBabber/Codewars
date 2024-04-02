function capitalize(s, arr) {
	return s
		.split("")
		.map((v, i) => (arr.includes(i) ? v.toUpperCase() : v))
		.join("");
}
