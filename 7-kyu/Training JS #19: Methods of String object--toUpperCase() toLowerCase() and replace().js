function alienLanguage(str) {
	return str
		.split(" ")
		.map(
			(v) =>
				v.substring(0, v.length - 1).toUpperCase() +
				v.substring(v.length - 1).toLowerCase()
		)
		.join(" ");
}
