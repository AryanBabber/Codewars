function toAcronym(inp) {
	return inp
		.split(" ")
		.map((c) => c[0].toUpperCase())
		.join("");
}
