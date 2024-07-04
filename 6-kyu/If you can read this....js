function to_nato(words) {
	return words
		.replace(/\s/g, "")
		.toUpperCase()
		.split("")
		.map((e) => (NATO[e] ? NATO[e] : e))
		.join(" ");
}
