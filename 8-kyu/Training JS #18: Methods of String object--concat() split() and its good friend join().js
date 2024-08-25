function splitAndMerge(string, separator) {
	return string
		.split(" ")
		.map((v) => v.split("").join(separator))
		.join(" ");
}
