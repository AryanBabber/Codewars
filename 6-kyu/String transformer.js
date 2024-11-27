function stringTransformer(str) {
	return str
		.split(" ")
		.map((s) =>
			s
				.split("")
				.map((c) =>
					c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
				)
				.join("")
		)
		.reverse()
		.join(" ");
}
