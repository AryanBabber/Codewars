function vaporcode(string) {
	return string
		.toUpperCase()
		.split("")
		.filter((s) => s != " ")
		.join("  ");
}
