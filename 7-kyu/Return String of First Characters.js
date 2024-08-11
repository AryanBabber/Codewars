function makeString(s) {
	return s
		.split(" ")
		.map((c) => c.charAt(0))
		.join("");
}
