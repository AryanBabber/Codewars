function moveTen(s) {
	// 97-122
	return s
		.split("")
		.map((c) =>
			c.charCodeAt(0) - 96 <= 16
				? String.fromCharCode(c.charCodeAt(0) + 10)
				: String.fromCharCode(c.charCodeAt(0) - 16)
		)
		.join("");
}
